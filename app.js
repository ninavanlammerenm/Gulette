// ══════════════════════════════════════════════════════
// SPEECH INIT
// ══════════════════════════════════════════════════════
if(window.speechSynthesis){
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged=()=>window.speechSynthesis.getVoices();
}

// Veilige event delegation voor tiles
document.addEventListener('click', function(e){
  const tile = e.target.closest('[data-action]');
  if(!tile) return;
  const action = tile.dataset.action;
  if(action === 'wbmove') wbMove(tile, tile.dataset.word);
  if(action === 'mc_nl') chkMC(tile, tile.dataset.chosen, tile.dataset.correct, tile.dataset.hz, tile.dataset.tr);
  if(action === 'mc_hz') chkMC_hz(tile, tile.dataset.chosen, tile.dataset.correct, tile.dataset.nl, tile.dataset.tr);

  const wc = e.target.closest('.wc[data-hz]');
  if(wc) showPronModal(wc.dataset.hz);
});

// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
let S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},achv:[],weekActivity:[],goal:10};
const save=()=>localStorage.setItem('gulette_v3',JSON.stringify(S));
const load=()=>{try{const d=localStorage.getItem('gulette_v3');if(d)S=JSON.parse(d);}catch(e){}};

let sciIdx=0;

// ══════════════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════════════
const showScreen = id => {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
};

function navTo(id, btn) {
  showScreen(id);
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  if(id === 'review') renderVocab();
  if(id === 'profile') renderProfile();
  if(id === 'home') renderHome();
}

function goHome(){
  showScreen('home');
  document.getElementById('bnav').style.display='flex';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  document.querySelector('.nb').classList.add('on');
  renderHome();
}

// ══════════════════════════════════════════════════════
// ONBOARDING
// ══════════════════════════════════════════════════════
let selGoalVal=10;

function chkName(){
  const v=document.getElementById('name-inp').value.trim();
  document.getElementById('btn-start').disabled=v.length<2;
}

function selGoal(btn,v){
  document.querySelectorAll('.goal-opt').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selGoalVal=v;
}

function startApp(){
  S.name=document.getElementById('name-inp').value.trim();
  S.goal=selGoalVal;
  if(!S.weekActivity)S.weekActivity=[];
  save();
  document.getElementById('bnav').style.display='flex';
  goHome();
}

// ══════════════════════════════════════════════════════
// HOME
// ══════════════════════════════════════════════════════
function renderHome(){
  document.getElementById('hdr-name').innerHTML = 'Salam, <em>' + S.name + '</em> 👋';
  document.getElementById('chip-streak').textContent=S.streak;
  document.getElementById('chip-xp').textContent=S.xp;
  const lvl=Math.floor(S.xp/100)+1;
  const pct=S.xp%100;
  document.getElementById('xp-fill').style.width=pct+'%';
  document.getElementById('xp-l').textContent=S.xp+' XP';
  document.getElementById('xp-r').textContent='Level '+lvl;

  sciIdx=(sciIdx+1)%SCI_TIPS.length;
  document.getElementById('sci-tip-txt').innerHTML=SCI_TIPS[sciIdx];

  // Week bars
  const days=['Ma','Di','Wo','Do','Vr','Za','Zo'];
  const today=new Date().getDay();
  const todayIdx=today===0?6:today-1;
  const wa=S.weekActivity||[];
  const wbEl=document.getElementById('week-bars');
  wbEl.innerHTML='';
  let activeDays=0;
  days.forEach((d,i)=>{
    const active=wa.includes(i);
    if(active)activeDays++;
    const isToday=i===todayIdx;
    const h=active?100:8;
    const color=active?(isToday?'#FF6B9D':'#FFB8D4'):'#FFE0EE';
    wbEl.innerHTML+=`<div class="day-bar-wrap">
      <div class="day-bar-bg"><div class="day-bar-fill" style="height:${h}%;background:${color}"></div></div>
      <div class="day-lbl${isToday?' today':''}">${d}</div>
    </div>`;
  });
  document.getElementById('sc-sub').textContent=`${activeDays} van 7 dagen actief`;

  // Chapter progress bars
  const cpEl=document.getElementById('ch-prog-list');
  cpEl.innerHTML='';
  CHAPTERS.forEach(ch=>{
    const total=ch.lessons.length;
    const done=ch.lessons.filter(l=>S.done.includes(l.id)).length;
    const pct2=total?Math.round(done/total*100):0;
    cpEl.innerHTML+=`<div class="ch-prog-item">
      <div class="ch-prog-icon">${ch.lessons[0].icon}</div>
      <div class="ch-prog-info">
        <div class="ch-prog-name">${ch.label.replace(/^[^ ]+ /,'')}</div>
        <div class="ch-prog-track"><div class="ch-prog-fill" style="width:${pct2}%;background:${ch.color}"></div></div>
      </div>
      <div class="ch-prog-pct" style="color:${ch.color}">${pct2}%</div>
    </div>`;
  });

  // Due count
  const due=Object.values(S.vocab).filter(v=>!v.nr||new Date(v.nr)<=new Date()).length;
  document.getElementById('rev-count-txt').textContent=due>0?`${due} woorden klaar voor herhaling! 🌸`:'Je bent helemaal bij! 🌸';

  // Chapters / lesson path
  const cw=document.getElementById('chapters-wrap');
  cw.innerHTML='';
  CHAPTERS.forEach((ch,ci)=>{
    const block=document.createElement('div');
    block.className='ch-block';
    block.innerHTML=`<div class="ch-label">${ch.label}</div>`;
    const path=document.createElement('div');
    path.className='l-path';

    ch.lessons.forEach((lesson,li)=>{
      const done=S.done.includes(lesson.id);
      const prevDone=li===0?true:S.done.includes(ch.lessons[li-1].id);
      const chPrevDone=ci===0?true:CHAPTERS[ci-1].lessons.some(l=>S.done.includes(l.id));
      const locked=!prevDone||!chPrevDone;
      const aligns=['center','lft','rgt','center','lft','rgt'];
      const row=document.createElement('div');
      row.className='l-row '+aligns[li%6];
      const cls=done?'d':(locked?'lk':'u');
      row.innerHTML=`<div class="l-node ${cls}" ${!locked?`onclick="startLesson('${lesson.id}')"`:''} data-id="${lesson.id}">
        <div class="n-tooltip">${lesson.title} · +${lesson.xp} XP</div>
        <div class="n-ico">${lesson.icon}</div>
        <div class="n-lbl">${lesson.title}</div>
        ${done?'<div class="n-done-badge">✓</div>':''}
      </div>`;
      path.appendChild(row);
    });
    block.appendChild(path);
    cw.appendChild(block);
  });
}

// ══════════════════════════════════════════════════════
// LES ENGINE
// ══════════════════════════════════════════════════════
let CL=null,EXS=[],EI=0,CC=0,WC=0,LXP=0,WAITING=false;

function getLessonById(id){
  for(const ch of CHAPTERS)for(const l of ch.lessons)if(l.id===id)return l;
  return null;
}

function startLesson(id){
  CL=getLessonById(id);
  if(!CL)return;
  EXS=buildExercises(CL);
  EI=CC=WC=LXP=0;WAITING=false;
  showScreen('lesson');
  document.getElementById('bnav').style.display='none';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  renderEx();
}

function buildExercises(lesson){
  const exs=[];
  const ws=[...lesson.words];
  const ss=lesson.sentences||[];

  ws.slice(0,6).forEach(w=>exs.push({type:'intro',w}));
  if(ss.length>0)exs.push({type:'context',ss});

  shuffle(ws).slice(0,5).forEach(w=>{
    const d=ws.filter(x=>x.hz!==w.hz);
    if(d.length>=3)exs.push({type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
  });

  shuffle(ws).slice(0,4).forEach(w=>{
    const d=ws.filter(x=>x.hz!==w.hz);
    if(d.length>=3)exs.push({type:'mc_hz',w,choices:shuffle([w.hz,...shuffle(d).slice(0,3).map(x=>x.hz)])});
  });

  ss.slice(0,2).forEach(s=>exs.push({type:'wb',s}));
  shuffle(ws).slice(0,3).forEach(w=>exs.push({type:'type',w}));

  shuffle(ws).slice(0,4).forEach(w=>{
    const d=ws.filter(x=>x.hz!==w.hz);
    if(d.length>=3)exs.push({type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
  });

  return exs;
}

const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};

function renderEx(){
  if(EI>=EXS.length){finishLesson();return;}
  const pct=Math.round(EI/EXS.length*100);
  document.getElementById('l-prog').style.width=pct+'%';
  document.getElementById('l-counter').textContent=(EI+1)+' / '+EXS.length;
  hideFB();
  const ex=EXS[EI];
  const body=document.getElementById('l-body');
  body.innerHTML='';
  body.scrollTop=0;
  window.scrollTo(0,0);
  if(ex.type==='intro')rIntro(ex,body);
  else if(ex.type==='context')rContext(ex,body);
  else if(ex.type==='mc_nl')rMC_nl(ex,body);
  else if(ex.type==='mc_hz')rMC_hz(ex,body);
  else if(ex.type==='wb')rWB(ex,body);
  else if(ex.type==='type')rType(ex,body);
  else nextEx();
}

// ── Intro card ──
function rIntro(ex,body){
  const w=ex.w;
  const tip=getPronTip(w.hz);
  body.innerHTML=`
    <div class="type-pill">📖 Nieuw woord</div>
    <div class="hz-card">
      <span class="hz-script">${w.hz}</span>
      <span class="hz-latin">${w.tr}</span>
      <span class="hz-nl">= ${w.nl}</span>
    </div>
    ${w.tip?`<div class="pronun-tip"><div class="pt-ico">💡</div><div class="pt-body"><div class="pt-title">Hazaragi weetje</div><div class="pt-text">${w.tip}</div></div></div>`:''}
    ${tip?`<div class="pronun-tip"><div class="pt-ico">🔊</div><div class="pt-body"><div class="pt-title">Uitspraak</div><div class="pt-text">${tip}</div></div></div>`:''}
    <div style="flex:1"></div>
    <button class="btn-check" onclick="nextEx()">Begrepen! 🌸</button>`;
  if(!S.vocab[w.hz])S.vocab[w.hz]={nl:w.nl,tr:w.tr,mastery:0,nr:null};
  save();
}

// ── Context / inductief leren ──
function rContext(ex,body){
  const ss=ex.ss;
  const s=ss[Math.floor(Math.random()*ss.length)];
  body.innerHTML=`
    <div class="type-pill">🔍 Zie het patroon</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:14px">Lees de zin en ontdek de Hazaragi patronen:</p>
    <div class="ctx-card">
      <div class="ctx-title">🌐 Hazaragi zin</div>
      <div class="ctx-sentence">${s.hz}</div>
      <div class="ctx-tr">${s.tr}</div>
      <div class="ctx-nl">"${s.nl}"</div>
    </div>
    ${CL.grammar?`<div class="pattern-tip"><div class="pt-ico">🧠</div><div class="pt-body"><div class="pt-title">Taalpatroon</div><div class="pt-text">${CL.grammar}</div></div></div>`:''}
    <div style="flex:1"></div>
    <button class="btn-check" onclick="nextEx()">Ik snap het! ✓</button>`;
}

function getPronTip(hz){
  for(const [char,data] of Object.entries(PRONUN_TIPS)){
    if(hz.includes(char))return `De letter <strong>${char}</strong> (${data.latin}): ${data.tip}`;
  }
  return null;
}

// ── MC nl (hz→nl) ──
function rMC_nl(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];
  body.innerHTML=`
    <div class="type-pill">🎯 Wat betekent dit?</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:18px">Wat betekent dit Hazaragi woord?</p>
    <div class="hz-card" style="margin-bottom:20px">
      <span class="hz-script">${w.hz}</span>
      <span class="hz-latin">${w.tr}</span>
      <div style="display:inline-flex;align-items:center;gap:6px;background:var(--lav-l);border-radius:50px;padding:4px 12px;margin-top:6px">
        <span style="font-size:11px;font-weight:900;color:var(--lav)">🔤 uitspraak:</span>
        <span style="font-size:13px;font-weight:800;color:var(--ink)">${w.tr}</span>
      </div>
    </div>
    <div class="choices">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_nl" data-chosen="${c}" data-correct="${w.nl}" data-hz="${w.hz}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
}

// ── MC hz (nl→hz) ──
function rMC_hz(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];
  const trMap={};
  ex.choices.forEach(c=>{
    const match=CL.words.find(x=>x.hz===c);
    if(match)trMap[c]=match.tr;
  });
  body.innerHTML=`
    <div class="type-pill">🔤 Kies Hazaragi</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:20px">Welk Hazaragi woord betekent <em style="color:var(--rose)">"${w.nl}"</em>?</p>
    <div class="choices">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_hz" data-chosen="${c}" data-correct="${w.hz}" data-nl="${w.nl}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>
        <div style="display:flex;flex-direction:column;gap:2px">
          <span style="font-family:'Noto Naskh Arabic',serif;font-size:24px;direction:rtl;line-height:1.5">${c}</span>
          ${trMap[c]?`<span style="font-size:11px;font-weight:700;color:var(--ink-l);font-style:italic">${trMap[c]}</span>`:''}
        </div>
      </button>`).join('')}</div>`;
}

// ── Word bank ──
function rWB(ex,body){
  const s=ex.s;
  const words=s.hz.split(' ').filter(Boolean);
  const shuf=shuffle(words);
  const correct=words.join(' ');

  body.innerHTML=`
    <div class="type-pill">🧩 Zin samenstellen</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:14px">Zet de Hazaragi woorden in volgorde:</p>
    <div style="background:var(--rose-xl);border-radius:var(--r-sm);padding:14px 16px;margin-bottom:16px">
      <div style="font-size:14px;font-weight:700;color:var(--ink-m)">"${s.nl}"</div>
      <div style="font-size:12px;font-weight:700;color:var(--rose);font-style:italic;margin-top:4px">${s.tr}</div>
    </div>
    <div class="wb-answer" id="wb-ans"></div>
    <div class="wb-bank" id="wb-bnk">${shuf.map(w=>`
      <button class="w-tile" data-action="wbmove" data-word="${w}">${w}</button>`).join('')}</div>
    <div style="flex:1"></div>
    <button class="btn-check" id="btn-check-wb">Controleer ✓</button>`;

  document.getElementById('btn-check-wb').addEventListener('click', ()=> chkWB(correct, s.nl, s.tr));
}

function wbMove(tile,word){
  tile.classList.add('placed');
  const zone=document.getElementById('wb-ans');
  const t=document.createElement('button');
  t.className='w-tile ans';t.textContent=word;t.dataset.w=word;
  t.onclick=()=>{t.remove();tile.classList.remove('placed');
    if(!document.getElementById('wb-ans').querySelector('.ans'))
      document.getElementById('wb-ans').classList.remove('has');};
  zone.appendChild(t);zone.classList.add('has');
}

function chkWB(correct,nl,tr){
  const tiles=document.getElementById('wb-ans').querySelectorAll('.ans');
  const ans=Array.from(tiles).map(t=>t.dataset.w).join(' ');
  if(ans===correct){CC++;LXP+=8;showFB(true,'🎀 Correct!',nl,'');sparkles();}
  else{WC++;showFB(false,'Niet helemaal!','Juist: '+tr,correct);}
}

// ── Type ──
function rType(ex,body){
  const w=ex.w;
  let hintLevel=0;

  body.innerHTML=`
    <div class="type-pill">⌨️ Actief ophalen</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:4px">Typ het Hazaragi woord voor:</p>
    <p style="font-size:11px;font-weight:700;color:var(--lav);margin-bottom:16px">🧠 Actief ophalen verankert woorden het beste!</p>
    <div class="hz-card" style="margin-bottom:18px">
      <span class="hz-nl" style="font-size:24px;font-weight:900;color:var(--ink)">${w.nl}</span>
      <span class="hz-latin" style="margin-top:6px">${w.tr}</span>
    </div>
    <input class="t-inp" id="t-inp"
      inputmode="text"
      lang="fa"
      dir="rtl"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      placeholder="Typ in Hazaragi schrift...">
    <div class="t-hint" id="t-hint"></div>
    <button class="hint-btn" id="hint-btn">💡 Hint</button>
    <div style="flex:1"></div>
    <button class="btn-check" id="btn-check-type">Controleer ✓</button>`;

  const correct=w.hz;
  const inp=document.getElementById('t-inp');
  const hintBtn=document.getElementById('hint-btn');
  const hintEl=document.getElementById('t-hint');

  inp.addEventListener('input', ()=> inp.classList.remove('ok','ng'));
  inp.addEventListener('keydown', e=>{ if(e.key==='Enter') chkType(correct, w.nl, w.tr); });
  document.getElementById('btn-check-type').addEventListener('click', ()=> chkType(correct, w.nl, w.tr));

  hintBtn.addEventListener('click', ()=>{
    hintLevel++;
    if(hintLevel===1){
      hintEl.innerHTML=`🔤 Uitspraak: <strong>${w.tr}</strong>`;
      hintEl.classList.add('show');
      hintBtn.textContent='💡 Toon antwoord';
    } else if(hintLevel===2){
      hintEl.innerHTML=`✍️ Antwoord: <strong style="font-family:'Noto Naskh Arabic',serif;font-size:20px;direction:rtl">${correct}</strong>`;
      inp.value=correct;
      inp.classList.remove('ok','ng');
      hintBtn.disabled=true;
      hintBtn.textContent='✓ Antwoord getoond';
    }
  });

  setTimeout(()=> inp.focus(), 120);
}

const normAr=s=>s.replace(/[ًٌٍَُِّْ]/g,'').replace(/[آأإا]/g,'ا').replace(/[يی]/g,'ی').replace(/ة/g,'ه').trim();

function chkType(correct,nl,tr){
  const inp=document.getElementById('t-inp');
  const val=inp.value.trim();
  if(!val)return;

  if(normAr(val)===normAr(correct)){
    inp.classList.add('ok');
    if(inp.dataset.retry==='true'){
      showFB(true,'✅ Goed overgetypt!',nl,correct);
    } else {
      CC++;LXP+=10;
      showFB(true,'✨ Uitstekend!',nl,correct);
      sparkles();
    }
    updMastery(correct,true);
    inp.dataset.retry='false';
  } else {
    WC++;
    updMastery(correct,false);
    inp.classList.add('ng');
    const hintEl=document.getElementById('t-hint');
    hintEl.innerHTML=`✍️ Typ dit over: <strong style="font-family:'Noto Naskh Arabic',serif;font-size:20px;direction:rtl">${correct}</strong>`;
    hintEl.classList.add('show');
    setTimeout(()=>{
      inp.value='';
      inp.classList.remove('ng');
      inp.focus();
    },800);
    inp.dataset.retry='true';
    const checkBtn=document.querySelector('.btn-check');
    if(checkBtn){
      checkBtn.textContent='Typ het over ✍️';
      checkBtn.style.background='linear-gradient(135deg,var(--peach),#e07040)';
    }
    hideFB();
  }
}

// ── MC checks ──
function chkMC(btn,chosen,correct,hz,tr){
  if(WAITING)return;WAITING=true;
  document.querySelectorAll('.ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');CC++;LXP+=5;
    showFB(true,'🌸 Goed!',correct,hz);sparkles();updMastery(hz,true);
  }else{
    btn.classList.add('ng');WC++;
    document.querySelectorAll('.ch-btn').forEach(b=>{
      if(b.textContent.replace(/[A-D]/g,'').trim()===correct||b.querySelector('span:last-child')?.textContent.trim()===correct)b.classList.add('ok');
    });
    showFB(false,'Bijna!',`${hz} (${tr}) = ${correct}`,hz);updMastery(hz,false);
  }
}

function chkMC_hz(btn,chosen,correct,nl,tr){
  if(WAITING)return;WAITING=true;
  document.querySelectorAll('.ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');CC++;LXP+=5;
    showFB(true,'🌸 Goed!',nl,correct);sparkles();updMastery(correct,true);
  }else{
    btn.classList.add('ng');WC++;
    document.querySelectorAll('.ch-btn').forEach(b=>{
      const s=b.querySelector('span:last-child');
      if(s&&s.textContent.trim()===correct)b.classList.add('ok');
    });
    showFB(false,'Bijna!',`Juist: ${correct} (${tr})`,correct);updMastery(correct,false);
  }
}

// ── Spaced Repetition mastery update ──
function updMastery(hz,ok){
  if(!S.vocab[hz])return;
  const v=S.vocab[hz];
  if(ok){
    v.mastery=Math.min(5,(v.mastery||0)+1);
    const intervals=[1,3,7,14,30];
    const d=intervals[v.mastery-1]||30;
    v.nr=new Date(Date.now()+d*86400000).toISOString();
  }else{
    v.mastery=Math.max(0,(v.mastery||0)-1);
    v.nr=new Date(Date.now()+3600000).toISOString();
  }
  save();
}

// ── Feedback ──
function showFB(ok,title,hint,hzText){
  const bar=document.getElementById('fb-bar');
  bar.className='fb-bar '+(ok?'ok':'ng');
  document.getElementById('fb-ico').textContent=ok?'🎀':'🐰';
  document.getElementById('fb-ttl').textContent=title;
  document.getElementById('fb-sub').textContent=hint;
  document.getElementById('fb-hz').textContent=hzText||'';
  WAITING=true;
}
function hideFB(){document.getElementById('fb-bar').className='fb-bar hide';WAITING=false;}
function nextEx(){EI++;WAITING=false;renderEx();}

function leaveLesson(){
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  const drag=document.createElement('div');
  drag.className='modal-drag';
  const title=document.createElement('div');
  title.style.cssText='font-size:18px;font-weight:900;color:var(--ink);margin-bottom:8px';
  title.textContent='Les verlaten? 🎀';
  const sub=document.createElement('div');
  sub.style.cssText='font-size:14px;font-weight:600;color:var(--ink-m);margin-bottom:24px';
  sub.textContent='Je voortgang in deze les gaat verloren.';
  const btnRow=document.createElement('div');
  btnRow.style.cssText='display:flex;gap:10px';
  const btnStay=document.createElement('button');
  btnStay.className='btn-check';
  btnStay.style.cssText='position:static;flex:1;background:linear-gradient(135deg,var(--rose),var(--rose-d))';
  btnStay.textContent='Doorgaan 💪';
  btnStay.addEventListener('click',()=>bg.remove());
  const btnLeave=document.createElement('button');
  btnLeave.style.cssText='flex:1;background:var(--rose-xl);color:var(--rose-d);border:2px solid var(--rose-l);border-radius:var(--r-sm);padding:17px;font-size:15px;font-weight:900;font-family:Nunito,sans-serif;cursor:pointer';
  btnLeave.textContent='Verlaten';
  btnLeave.addEventListener('click',()=>{bg.remove();WAITING=false;hideFB();goHome();});
  btnRow.appendChild(btnStay);
  btnRow.appendChild(btnLeave);
  modal.appendChild(drag);modal.appendChild(title);modal.appendChild(sub);modal.appendChild(btnRow);
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  document.body.appendChild(bg);
}

// ── Finish ──
function finishLesson(){
  if(!S.done.includes(CL.id))S.done.push(CL.id);
  S.xp+=LXP;
  updStreak();checkAchv();save();
  document.getElementById('r-xp').textContent='+'+LXP;
  document.getElementById('r-acc').textContent=CC+'/'+(CC+WC);
  document.getElementById('r-str').textContent='🔥'+S.streak;
  document.getElementById('res-sub').textContent=CL.title+' voltooid! 🌸';
  showScreen('result');confetti();
}

// ══════════════════════════════════════════════════════
// DAILY REVIEW
// ══════════════════════════════════════════════════════
function startDailyReview(){
  const due=Object.entries(S.vocab).filter(([,v])=>!v.nr||new Date(v.nr)<=new Date());
  if(due.length===0){showToast('Geen reviews nu! Kom later terug 🌸');return;}
  const rw=due.slice(0,14).map(([hz,v])=>({hz,nl:v.nl,tr:v.tr,tip:''}));
  CL={id:'_rev',title:'Dagelijkse herhaling',xp:Math.min(30,rw.length*2),words:rw,sentences:[],grammar:'Herhaling van eerder geleerde woorden!'};
  EXS=buildExercises(CL);EI=CC=WC=LXP=0;
  document.getElementById('bnav').style.display='none';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  showScreen('lesson');
  renderEx();
}

// ══════════════════════════════════════════════════════
// STREAK & ACHIEVEMENTS
// ══════════════════════════════════════════════════════
function updStreak(){
  const today=new Date().toDateString();
  const todayIdx=new Date().getDay();
  const idx=todayIdx===0?6:todayIdx-1;
  const now=new Date();
  const isMonday=now.getDay()===1;
  const lastStudyDate=S.lastStudy?new Date(S.lastStudy):null;
  const lastWasThisWeek=lastStudyDate&&lastStudyDate>=getMonday(now);
  if(!S.weekActivity||(!lastWasThisWeek&&isMonday))S.weekActivity=[];
  if(!S.weekActivity.includes(idx))S.weekActivity.push(idx);
  if(S.lastStudy===today)return;
  const yest=new Date(Date.now()-86400000).toDateString();
  S.streak=S.lastStudy===yest?S.streak+1:1;
  S.lastStudy=today;
}

function getMonday(d){
  const day=d.getDay();
  const diff=d.getDate()-(day===0?6:day-1);
  return new Date(d.setDate(diff));
}

function checkAchv(){
  const add=id=>{if(!S.achv.includes(id)){S.achv.push(id);const a=ACHVS.find(x=>x.id===id);if(a)showToast(a.icon+' '+a.name+' ontgrendeld!');}};
  if(S.done.length>=1)add('first');
  if(S.streak>=3)add('streak3');if(S.streak>=7)add('streak7');if(S.streak>=30)add('streak30');
  const wc=Object.keys(S.vocab).length;
  if(wc>=10)add('words10');if(wc>=30)add('words30');if(wc>=60)add('words60');if(wc>=100)add('words100');
  if(S.xp>=100)add('xp100');if(S.xp>=500)add('xp500');if(S.xp>=1000)add('xp1000');
  if(WC===0&&CC>0)add('perfect');
  const checkCh=(chIdx,achId)=>{if(CHAPTERS[chIdx]&&CHAPTERS[chIdx].lessons.some(l=>S.done.includes(l.id)))add(achId);};
  [1,2,3,4,5,6,7,8,9].forEach((i,idx)=>checkCh(i,['ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9','ch10'][idx]));
}

// ══════════════════════════════════════════════════════
// VOCAB SCREEN
// ══════════════════════════════════════════════════════
let wFilter='all';

function filterW(f,btn){
  wFilter=f;document.querySelectorAll('.fc').forEach(b=>b.classList.remove('on'));btn.classList.add('on');renderVocab();
}

function renderVocab(){
  const ents=Object.entries(S.vocab);
  document.getElementById('rev-sub').textContent=ents.length+' woorden geleerd';
  let list=ents;
  if(wFilter==='new')list=ents.filter(([,v])=>(v.mastery||0)===0);
  else if(wFilter==='learning')list=ents.filter(([,v])=>(v.mastery||0)>0&&(v.mastery||0)<3);
  else if(wFilter==='mastered')list=ents.filter(([,v])=>(v.mastery||0)>=3);
  else if(wFilter==='due')list=ents.filter(([,v])=>!v.nr||new Date(v.nr)<=new Date());
  const el=document.getElementById('w-list');
  if(!list.length){el.innerHTML='<div style="text-align:center;color:var(--ink-l);padding:44px 20px;font-weight:700;line-height:2">Geen woorden hier 🌸<br><small>Start een les om te beginnen!</small></div>';return;}
  el.innerHTML=list.map(([hz,v])=>{
    const m=Math.round(v.mastery||0);
    const pips=[0,1,2,3,4].map(i=>`<div class="pip ${i<m?(m>=4?'gold':(m>=3?'green':'on')):''}"></div>`).join('');
    const due=!v.nr||new Date(v.nr)<=new Date();
    const nxt=v.nr?timeUntil(v.nr):'Nu';
    return `<div class="wc" data-hz="${hz}">
      <div class="wc-hz">${hz}</div>
      <div class="wc-info">
        <div class="wc-tr">${v.tr||''}</div>
        <div class="wc-nl">${v.nl||''}</div>
        <div class="wc-next">${due?'🔔 Review nu klaar':'⏱ Review: '+nxt}</div>
      </div>
      <div class="m-pips">${pips}</div>
    </div>`;
  }).join('');
}

function timeUntil(iso){
  const ms=new Date(iso)-new Date();
  if(ms<0)return'Nu';
  const h=Math.floor(ms/3600000);
  if(h<24)return h+'u';
  return Math.floor(h/24)+'d';
}

function showPronModal(hz){
  const v=S.vocab[hz];if(!v)return;
  const tip=getPronTip(hz);
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  const dragEl=document.createElement('div');
  dragEl.className='modal-drag';
  const titleEl=document.createElement('div');
  titleEl.className='modal-title';
  titleEl.textContent=hz;
  const row1=document.createElement('div');
  row1.className='pron-row';
  row1.innerHTML=`<div class="pron-hz">${hz}</div>
    <div class="pron-info">
      <div class="pron-latin">${v.tr}</div>
      <div class="pron-tip">= ${v.nl}</div>
    </div>`;
  const speakBtn=document.createElement('button');
  speakBtn.style.cssText='width:100%;padding:14px;margin-top:12px;border-radius:var(--r-sm);border:2px solid var(--lav);background:var(--lav-xl,#f0eeff);color:var(--lav);font-size:15px;font-weight:900;font-family:Nunito,sans-serif;cursor:pointer';
  speakBtn.textContent='🔊 Hoor uitspraak';
  speakBtn.addEventListener('click',()=>{
    if(!window.speechSynthesis)return;
    window.speechSynthesis.cancel();
    const utt=new SpeechSynthesisUtterance(hz);
    utt.lang='fa-IR';utt.rate=0.85;utt.pitch=1;
    const voices=window.speechSynthesis.getVoices();
    const faVoice=voices.find(v=>v.lang.startsWith('fa')||v.lang.startsWith('ar'));
    if(faVoice)utt.voice=faVoice;
    speakBtn.textContent='🔊 ...';
    utt.onend=()=>speakBtn.textContent='🔊 Hoor uitspraak';
    utt.onerror=()=>speakBtn.textContent='❌ Niet beschikbaar';
    window.speechSynthesis.speak(utt);
  });
  const closeBtn=document.createElement('button');
  closeBtn.className='btn-check';
  closeBtn.style.cssText='position:static;margin-top:10px';
  closeBtn.textContent='Sluiten';
  closeBtn.addEventListener('click',()=>bg.remove());
  modal.appendChild(dragEl);modal.appendChild(titleEl);modal.appendChild(row1);
  if(tip){
    const row2=document.createElement('div');
    row2.className='pron-row';
    row2.innerHTML=`<div class="pron-hz">🔊</div>
      <div class="pron-info">
        <div class="pron-latin">Uitspraaktip</div>
        <div class="pron-tip">${tip}</div>
      </div>`;
    modal.appendChild(row2);
  }
  modal.appendChild(speakBtn);modal.appendChild(closeBtn);
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  document.body.appendChild(bg);
}

// ══════════════════════════════════════════════════════
// PROFILE
// ══════════════════════════════════════════════════════
function renderProfile(){
  document.getElementById('p-name').textContent=S.name;
  const lvl=Math.floor(S.xp/100)+1;
  const titles=['Beginner 🌱','Leerling 📖','Gevorderd 🌸','Expert 💎','Meester ✨','Hazaragi-liefhebber 🏔️'];
  document.getElementById('p-lvl').textContent=`Level ${lvl} · ${titles[Math.min(lvl-1,5)]}`;
  document.getElementById('p-xp').textContent=S.xp;
  document.getElementById('p-str').textContent=S.streak;
  document.getElementById('p-wds').textContent=Object.keys(S.vocab).length;
  document.getElementById('p-les').textContent=S.done.length;
  document.getElementById('a-list').innerHTML=ACHVS.map(a=>{
    const on=S.achv.includes(a.id);
    return `<div class="ac">
      <div class="ac-ico${on?' on':''}">${a.icon}</div>
      <div><div class="ac-name" style="color:${on?'var(--ink)':'var(--ink-l)'}">${a.name}</div><div class="ac-desc">${a.desc}</div></div>
      ${on?'<div class="ac-chk">✓</div>':''}
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════
// FX
// ══════════════════════════════════════════════════════
function confetti(){
  const cols=['#FF6B9D','#FFD6E8','#FFBE3D','#A78BFA','#3DD6A3','#fff','#FF8C61'];
  const wrap=document.getElementById('cfwrap');
  wrap.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:500;overflow:hidden;max-width:430px;left:50%;transform:translateX(-50%)';
  for(let i=0;i<55;i++)setTimeout(()=>{
    const p=document.createElement('div');p.className='cf';
    p.style.cssText=`left:${Math.random()*100}%;background:${cols[~~(Math.random()*cols.length)]};animation-duration:${.7+Math.random()*.8}s;animation-delay:${Math.random()*.4}s;border-radius:${Math.random()>.5?'50%':'3px'};width:${6+~~(Math.random()*8)}px;height:${6+~~(Math.random()*8)}px;`;
    wrap.appendChild(p);setTimeout(()=>p.remove(),2000);
  },i*20);
}

function sparkles(){
  const emos=['✨','🌸','💕','⭐','🎀','🏔️'];
  const maxW=Math.min(window.innerWidth,430);
  for(let i=0;i<3;i++)setTimeout(()=>{
    const el=document.createElement('div');el.className='sparkle';
    el.textContent=emos[~~(Math.random()*emos.length)];
    const x=40+~~(Math.random()*(maxW-80));
    const y=~~(window.innerHeight*.35)+~~(Math.random()*100);
    el.style.cssText=`left:${x}px;top:${y}px`;
    document.body.appendChild(el);setTimeout(()=>el.remove(),900);
  },i*100);
}

function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}

// ══════════════════════════════════════════════════════
// EXPORT & IMPORT & RESET
// ══════════════════════════════════════════════════════
function exportData(){
  const blob=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=`gulette-voortgang-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📤 Voortgang geëxporteerd!');
}

function importData(event){
  const file=event.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const imported=JSON.parse(e.target.result);
      if(!imported.name||imported.xp===undefined){showToast('❌ Ongeldig bestand!');return;}
      if(confirm(`Voortgang van ${imported.name} laden? Je huidige voortgang wordt overschreven.`)){
        S=imported;save();renderProfile();showToast('📥 Voortgang geladen! 🌸');
      }
    }catch(err){showToast('❌ Bestand kon niet worden gelezen');}
  };
  reader.readAsText(file);
  event.target.value='';
}

function resetData(){
  if(!confirm('Weet je ZEKER dat je alle voortgang wilt verwijderen? Dit kan niet ongedaan worden gemaakt.'))return;
  localStorage.removeItem('gulette_v3');
  S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},achv:[],weekActivity:[],goal:10};
  document.getElementById('bnav').style.display='none';
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('name-inp').value='';
  document.getElementById('btn-start').disabled=true;
  selGoalVal=10;
  document.querySelectorAll('.goal-opt').forEach(b=>b.classList.remove('sel'));
  document.querySelectorAll('.goal-opt')[1].classList.add('sel');
  showScreen('onboarding');
}

// ══════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════
load();
try{
  if(S.name){
    document.getElementById('bnav').style.display='flex';
    renderHome();
    showScreen('home');
  }else{
    document.getElementById('bnav').style.display='none';
    showScreen('onboarding');
  }
}catch(e){
  localStorage.clear();
  location.reload();
}