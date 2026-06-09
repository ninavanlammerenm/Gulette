// ══════════════════════════════════════════════════════
// HEARTS
// ══════════════════════════════════════════════════════
let HEARTS=3;

function renderHearts(){
  const el=document.getElementById('hearts');
  if(!el)return;
  el.innerHTML='';
  for(let i=0;i<3;i++){
    const span=document.createElement('span');
    span.style.cssText='transition:all .3s;display:inline-block';
    span.textContent=i<HEARTS?'❤️':'🖤';
    if(i>=HEARTS){span.style.opacity='0.35';span.style.filter='grayscale(1)';}
    el.appendChild(span);
  }
}

function loseHeart(){
  if(HEARTS<=0)return;
  HEARTS--;
  renderHearts();
  // schud-animatie op hartjes
  const el=document.getElementById('hearts');
  if(el){
    el.style.animation='none';
    requestAnimationFrame(()=>{
      el.style.animation='shake .32s ease';
    });
  }
}

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
  if(id==='review')  renderVocab();
  if(id==='profile') renderProfile();
  if(id==='home')    renderHome();
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
  document.getElementById('hdr-name').innerHTML='Salam, <em>'+S.name+'</em> 👋';
  document.getElementById('chip-streak').textContent=S.streak;
  document.getElementById('chip-xp').textContent=S.xp;
  const lvl=Math.floor(S.xp/100)+1;
  const pct=S.xp%100;
  document.getElementById('xp-fill').style.width=pct+'%';
  document.getElementById('xp-l').textContent=S.xp+' XP';
  document.getElementById('xp-r').textContent='Level '+lvl;

  // Week dots
  const days=['Ma','Di','Wo','Do','Vr','Za','Zo'];
  const todayDay=new Date().getDay();
  const todayIdx=todayDay===0?6:todayDay-1;
  const wa=S.weekActivity||[];
  const dotsEl=document.getElementById('week-dots');
  dotsEl.innerHTML='';
  let activeDays=0;
  days.forEach((d,i)=>{
    const active=wa.includes(i);
    if(active)activeDays++;
    const isToday=i===todayIdx;
    const dot=document.createElement('div');
    dot.className='week-dot'+(active?' active':'')+(isToday?' today':'');
    dot.title=d;
    dotsEl.appendChild(dot);
  });
  document.getElementById('sc-sub').textContent=`${activeDays} van 7`;

  // Due count
  const allVocab=Object.values(S.vocab);
  const due=allVocab.filter(v=>!v.nr||new Date(v.nr)<=new Date()).length;
  const total=Object.keys(S.vocab).length;
  if(due>0){
    document.getElementById('rev-count-txt').textContent=`${due} van ${total} woorden klaar voor herhaling! 🌸`;
  }else if(total===0){
    document.getElementById('rev-count-txt').textContent='Start een les om woorden te leren 🌸';
  }else{
    const nextDue=allVocab.filter(v=>v.nr).map(v=>new Date(v.nr)).sort((a,b)=>a-b)[0];
    const eta=nextDue?timeUntil(nextDue.toISOString()):'?';
    document.getElementById('rev-count-txt').textContent=`Alles herhaald! Volgende review over ${eta} ✅`;
  }

  // Zwakke woorden banner
  const weakWords=Object.entries(S.vocab).filter(([,v])=>(v.errors||0)>=2).sort(([,a],[,b])=>(b.errors||0)-(a.errors||0));
  const wb=document.getElementById('weak-banner');
  if(wb){
    if(weakWords.length>=4){
      wb.style.display='flex';
      const top=weakWords.slice(0,3).map(([hz])=>hz).join('  ');
      document.getElementById('weak-banner-txt').textContent=`${weakWords.length} woorden — bijv. ${top}`;
    }else{
      wb.style.display='none';
    }
  }

  renderDagwoord();

  // Chapters / lesson path
  const cw=document.getElementById('chapters-wrap');
  cw.innerHTML='';
  CHAPTERS.forEach((ch,ci)=>{
    const block=document.createElement('div');
    block.className='ch-block';
    const totalWords=ch.lessons.reduce((s,l)=>s+(l.words||[]).length,0);
    const learnedWords=ch.lessons.reduce((s,l)=>s+(l.words||[]).filter(w=>S.vocab[w.hz]).length,0);
    const chProg=totalWords>0?`<span class="ch-prog">${learnedWords}/${totalWords} woorden</span>`:'';
    const anyDone=ch.lessons.some(l=>S.done.includes(l.id));
    const revBtn=anyDone?`<button class="ch-rev-btn" title="Herhaal hoofdstuk" onclick="event.stopPropagation();startChapterReview('${ch.id}')">🔁</button>`:'';
    block.innerHTML=`<div class="ch-label-row"><span class="ch-label-txt">${ch.label}${chProg}</span>${revBtn}</div>`;
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
      const nodeClick=locked?`showToast('Voltooi eerst de vorige les! 🔒')`:`startLesson('${lesson.id}')`;
      const tooltipTxt=locked?'🔒 Vergrendeld — voltooi de vorige les':`${lesson.title} · +${lesson.xp} XP`;
      const nodeIcon=locked?'🔒':lesson.icon;
      row.innerHTML=`<div class="l-node ${cls}" onclick="${nodeClick}" data-id="${lesson.id}">
        <div class="n-tooltip">${tooltipTxt}</div>
        <div class="n-ico">${nodeIcon}</div>
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
// VOCAB SCREEN
// ══════════════════════════════════════════════════════
let wFilter='all';

function filterW(f,btn){
  wFilter=f;document.querySelectorAll('.fc').forEach(b=>b.classList.remove('on'));btn.classList.add('on');renderVocab();
}

function startWeakWordsDrill(){
  const weakWords=Object.entries(S.vocab).filter(([,v])=>(v.errors||0)>=2).sort(([,a],[,b])=>(b.errors||0)-(a.errors||0)).slice(0,20);
  if(weakWords.length<4){showToast('Nog niet genoeg fouten-woorden! Maak meer oefeningen 💪');return;}
  const wordList=weakWords.map(([hz,v])=>({hz,v,dir:Math.random()>.5?'hz_nl':'nl_hz'}));
  startOvhoring(0,wordList);
}

function renderVocab(){
  const search=(document.getElementById('vocab-search')?.value||'').toLowerCase().trim();
  const ents=Object.entries(S.vocab);
  document.getElementById('rev-sub').textContent=ents.length+' woorden geleerd';
  let list=ents;
  if(wFilter==='learning') list=ents.filter(([,v])=>(v.mastery||0)>0&&(v.mastery||0)<3);
  else if(wFilter==='mastered') list=ents.filter(([,v])=>(v.mastery||0)>=3);
  else if(wFilter==='due')      list=ents.filter(([,v])=>!v.nr||new Date(v.nr)<=new Date());
  else if(wFilter==='fouten')   list=ents.filter(([,v])=>(v.errors||0)>=1).sort(([,a],[,b])=>(b.errors||0)-(a.errors||0));

  if(search) list=list.filter(([hz,v])=>
    hz.includes(search)||
    (v.nl||'').toLowerCase().includes(search)||
    (v.tr||'').toLowerCase().includes(search)
  );

  // Sorteren: review-klaar eerst, dan oplopend op mastery (laag = meeste aandacht nodig)
  list=list.sort(([,a],[,b])=>{
    const dueA=!a.nr||new Date(a.nr)<=new Date()?0:1;
    const dueB=!b.nr||new Date(b.nr)<=new Date()?0:1;
    if(dueA!==dueB)return dueA-dueB;
    return (a.mastery||0)-(b.mastery||0);
  });

  const el=document.getElementById('w-list');
  if(!list.length){
    el.innerHTML='<div style="text-align:center;color:var(--ink-l);padding:44px 20px;font-weight:700;line-height:2">Geen woorden gevonden 🌸<br><small>Probeer een andere zoekterm.</small></div>';
    return;
  }
  el.innerHTML=list.map(([hz,v])=>{
    const m=Math.round(v.mastery||0);
    const pips=[0,1,2,3,4].map(i=>`<div class="pip ${i<m?(m>=4?'gold':(m>=3?'green':'on')):''}"></div>`).join('');
    const due=!v.nr||new Date(v.nr)<=new Date();
    const nxt=v.nr?timeUntil(v.nr):'Nu';
    const accent=due&&m<2?'var(--rose-d)':m>=4?'var(--mint)':m>=2?'var(--lav)':'var(--gold)';
    // markeer lange klanken (dubbele klinkers) in de uitspraak
    const pron=(v.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>');
    const dutch=toDutchPhonetic(v.tr);
    return `<div class="wc" data-hz="${hz}" style="border-left:4px solid ${accent}">
      <div class="wc-hz">${hz}</div>
      <div class="wc-info">
        <div class="wc-dutch">🗣️ ${dutch}</div>
        <div class="wc-pron">🔊 ${pron}</div>
        <div class="wc-nl">${v.nl||''}</div>
        <div class="wc-next">${due?'🔔 Review nu klaar':'⏱ Review: '+nxt}${v.errors>0?` · ❌ ${v.errors}x fout`:''}</div>
      </div>
      <div class="m-pips">${pips}</div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════
// QUICK TEST
// ══════════════════════════════════════════════════════
let _qtWords=[],_qtIdx=0,_qtScore=0,_qtChoices=[];

function startQuickTest(){
  const words=Object.entries(S.vocab);
  if(words.length<4){showToast('Leer eerst meer woorden! 📚');return;}
  // Prioriteer laag mastery en review-klaar
  const sorted=[...words].sort(([,a],[,b])=>{
    const dueA=!a.nr||new Date(a.nr)<=new Date()?0:1;
    const dueB=!b.nr||new Date(b.nr)<=new Date()?0:1;
    if(dueA!==dueB)return dueA-dueB;
    return (a.mastery||0)-(b.mastery||0);
  });
  _qtWords=sorted.slice(0,5);
  _qtIdx=0;_qtScore=0;
  document.getElementById('qt-overlay').classList.add('open');
  renderQT();
}

function closeQuickTest(){
  document.getElementById('qt-overlay').classList.remove('open');
}

function renderQT(){
  const prog=Math.round(_qtIdx/_qtWords.length*100);
  document.getElementById('qt-prog').style.width=prog+'%';
  if(_qtIdx>=_qtWords.length){
    const all=_qtWords.length;
    document.getElementById('qt-body').innerHTML=`
      <div style="text-align:center;padding:40px 0;display:flex;flex-direction:column;align-items:center;gap:12px">
        <div style="font-size:64px">${_qtScore===all?'🌟':'🌸'}</div>
        <div style="font-size:26px;font-weight:900;color:var(--ink)">${_qtScore} van ${all} goed</div>
        <div style="font-size:14px;font-weight:700;color:var(--ink-m)">${_qtScore===all?'Foutloos! Geweldig!':_qtScore>=3?'Goed gedaan!':'Blijf oefenen!'}</div>
        <button class="btn-check" style="position:static;margin-top:16px" onclick="closeQuickTest()">Klaar ✓</button>
      </div>`;
    return;
  }
  const [hz,v]=_qtWords[_qtIdx];
  const allWords=Object.entries(S.vocab);
  const distractors=shuffle(allWords.filter(([h])=>h!==hz));
  _qtChoices=shuffle([v.nl,...distractors.slice(0,3).map(([,d])=>d.nl)]);
  const ltrs=['A','B','C','D'];
  document.getElementById('qt-body').innerHTML=`
    <div class="type-pill">⚡ Vraag ${_qtIdx+1} van ${_qtWords.length}</div>
    <div class="hz-card" style="margin-bottom:20px">
      <span class="hz-script">${hz}</span>
      <span class="hz-latin">${v.tr||''}</span>
    </div>
    <div class="choices">${_qtChoices.map((c,i)=>`
      <button class="ch-btn" onclick="answerQT(this,${i})">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
}

function answerQT(btn,idx){
  const chosen=_qtChoices[idx];
  const correct=_qtWords[_qtIdx][1].nl;
  document.querySelectorAll('#qt-body .ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');_qtScore++;
    sfxCorrect();
    setTimeout(()=>{_qtIdx++;renderQT();},700);
  }else{
    btn.classList.add('ng');
    document.querySelectorAll('#qt-body .ch-btn').forEach((b,i)=>{
      if(_qtChoices[i]===correct)b.classList.add('ok');
    });
    sfxWrong();
    setTimeout(()=>{_qtIdx++;renderQT();},1200);
  }
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
      <div style="font-size:17px;font-weight:900;color:var(--rose-d);margin-bottom:3px">🗣️ ${toDutchPhonetic(v.tr)}</div>
      <div class="pron-latin">${v.tr}</div>
      <div class="pron-tip">= ${v.nl}</div>
    </div>`;
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
  modal.appendChild(closeBtn);
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  document.body.appendChild(bg);
}

// ══════════════════════════════════════════════════════
// XP GRAPH
// ══════════════════════════════════════════════════════
function renderXPGraph(){
  const el=document.getElementById('xp-graph');
  if(!el)return;
  const log=S.xpLog||{};
  // build last 7 days
  const days=[];
  const dayNames=['Zo','Ma','Di','Wo','Do','Vr','Za'];
  for(let i=6;i>=0;i--){
    const d=new Date(Date.now()-i*86400000);
    const key=d.toISOString().slice(0,10);
    days.push({label:dayNames[d.getDay()],xp:log[key]||0,isToday:i===0});
  }
  const maxXP=Math.max(...days.map(d=>d.xp),1);
  const W=320,H=90,pad=6,barW=32,gap=8;
  const bars=days.map((d,i)=>{
    const x=pad+i*(barW+gap);
    const barH=Math.max(4,Math.round((d.xp/maxXP)*(H-28)));
    const y=H-14-barH;
    const fill=d.isToday?'var(--rose)':d.xp>0?'var(--lav)':'var(--ink-xl)';
    return `<g>
      <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="6" fill="${fill}"/>
      ${d.xp>0?`<text x="${x+barW/2}" y="${y-4}" text-anchor="middle" font-size="9" font-weight="900" fill="var(--ink-m)">${d.xp}</text>`:''}
      <text x="${x+barW/2}" y="${H-1}" text-anchor="middle" font-size="9" font-weight="800" fill="${d.isToday?'var(--rose)':'var(--ink-l)'}">${d.label}</text>
    </g>`;
  }).join('');
  el.innerHTML=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="overflow:visible">${bars}</svg>`;
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
  renderXPGraph();
  renderMasteryDistrib();
  renderChapterProgress();
  updateNotifBtn();
  updateRomanBtn();
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
// EXPORT & IMPORT & RESET
// ══════════════════════════════════════════════════════
function exportData(){
  const blob=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=`gulette-voortgang-${new Date().toISOString().slice(0,10)}.json`;
  a.click();URL.revokeObjectURL(url);
  showToast('📤 Voortgang geëxporteerd!');
}

function importData(event){
  const file=event.target.files[0];if(!file)return;
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
  S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},achv:[],weekActivity:[],goal:10,xpLog:{},showRoman:true};
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
// FX
// ══════════════════════════════════════════════════════
function confetti(){
  const cols=['#F06C78','#F9C3Cb','#F6E7B8','#8E9A5A','#e24b5a','#fff','#FADADD'];
  const wrap=document.getElementById('cfwrap');
  wrap.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:500;overflow:hidden;max-width:430px;left:50%;transform:translateX(-50%)';
  for(let i=0;i<55;i++)setTimeout(()=>{
    const p=document.createElement('div');p.className='cf';
    p.style.cssText=`left:${Math.random()*100}%;background:${cols[~~(Math.random()*cols.length)]};animation-duration:${.7+Math.random()*.8}s;animation-delay:${Math.random()*.4}s;border-radius:${Math.random()>.5?'50%':'3px'};width:${6+~~(Math.random()*8)}px;height:${6+~~(Math.random()*8)}px;`;
    wrap.appendChild(p);setTimeout(()=>p.remove(),2000);
  },i*20);
}

function sparkles(){
  const emos=['🍓','✨','🌸','💕','🍓','🌿'];
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

// ══════════════════════════════════════════════════════
// ROMANISERING TOGGLE
// ══════════════════════════════════════════════════════
function toggleRoman(){
  S.showRoman = S.showRoman === false ? true : false;
  save();
  document.body.classList.toggle('hide-roman', S.showRoman === false);
  updateRomanBtn();
}

function updateRomanBtn(){
  const btn = document.getElementById('roman-btn');
  if(!btn) return;
  const on = S.showRoman !== false;
  btn.textContent = on ? '🔤 Uitspraakschrift: AAN' : '🔤 Uitspraakschrift: UIT';
  btn.style.background = on
    ? 'linear-gradient(135deg,var(--rose),var(--rose-d))'
    : 'linear-gradient(135deg,var(--ink-xl),var(--ink-l))';
  btn.style.color = on ? '#fff' : 'var(--ink-m)';
}

// ══════════════════════════════════════════════════════
// HOOFDSTUK-VOORTGANG
// ══════════════════════════════════════════════════════
function renderChapterProgress(){
  const el = document.getElementById('ch-progress-list');
  if(!el) return;
  el.innerHTML = CHAPTERS.map(ch=>{
    const totalW = ch.lessons.reduce((s,l)=>s+(l.words||[]).length,0);
    if(totalW === 0) return '';
    const learnedW = ch.lessons.reduce((s,l)=>s+(l.words||[]).filter(w=>S.vocab[w.hz]).length,0);
    const pct = Math.round(learnedW/totalW*100);
    const color = pct>=80?'var(--mint)':pct>=40?'var(--rose)':'var(--rose-l)';
    return `<div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <div style="font-size:12px;font-weight:800;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:70%">${ch.label}</div>
        <div style="font-size:11px;font-weight:700;color:var(--ink-l)">${learnedW}/${totalW}</div>
      </div>
      <div style="height:6px;background:var(--ink-xl);border-radius:50px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:${color};border-radius:50px;transition:width .6s ease"></div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════
// DAGWOORD
// ══════════════════════════════════════════════════════
function renderDagwoord(){
  const el=document.getElementById('dagwoord-card');
  if(!el)return;
  const keys=Object.keys(S.vocab);
  if(keys.length===0){el.style.display='none';return;}
  const dayIdx=Math.floor(Date.now()/86400000)%keys.length;
  const hz=keys[dayIdx];
  const v=S.vocab[hz];
  if(!v){el.style.display='none';return;}
  let tip='';
  for(const ch of CHAPTERS){
    for(const l of ch.lessons){
      const w=(l.words||[]).find(x=>x.hz===hz);
      if(w&&w.tip){tip=w.tip;break;}
    }
    if(tip)break;
  }
  el.style.display='block';
  document.getElementById('dw-body').innerHTML=`
    <div class="dw-hz">${hz}</div>
    <div class="dw-tr">${v.tr||''}</div>
    <div class="dw-nl">= ${v.nl}</div>
    ${tip?`<div class="dw-tip">💡 ${tip}</div>`:''}`;
  const foot=document.getElementById('dw-foot');
  if(foot){
    const m=v.mastery||0;
    const pips=[0,1,2,3,4].map(i=>`<div class="pip ${i<m?(m>=4?'gold':(m>=3?'green':'on')):''}"></div>`).join('');
    foot.innerHTML=`<div class="m-pips dw-pips">${pips}</div><div class="dw-due" onclick="event.stopPropagation();showWordDetail('${hz}')">Bekijk details ›</div>`;
  }
}

// ══════════════════════════════════════════════════════
// MASTERY DISTRIBUTIE
// ══════════════════════════════════════════════════════
function renderMasteryDistrib(){
  const el=document.getElementById('mastery-distrib');
  if(!el)return;
  const counts=[0,0,0,0,0,0];
  Object.values(S.vocab).forEach(v=>counts[Math.min(v.mastery||0,5)]++);
  const total=counts.reduce((a,b)=>a+b,0);
  if(!total){el.innerHTML='<div style="text-align:center;padding:16px;color:var(--ink-l);font-weight:700">Nog geen woorden geleerd 🌱</div>';return;}
  const max=Math.max(...counts,1);
  const labels=['Nieuw','Basis','Leerling','Gevorderd','Expert','Meester'];
  const colors=['var(--ink-l)','var(--peach)','var(--gold)','var(--rose)','var(--mint)','var(--lav)'];
  const now=new Date();
  const tomorrow=new Date(now.getTime()+86400000);
  const inWeek=new Date(now.getTime()+7*86400000);
  const dueNow=Object.values(S.vocab).filter(v=>!v.nr||new Date(v.nr)<=now).length;
  const dueTomorrow=Object.values(S.vocab).filter(v=>v.nr&&new Date(v.nr)>now&&new Date(v.nr)<=tomorrow).length;
  const dueWeek=Object.values(S.vocab).filter(v=>v.nr&&new Date(v.nr)>tomorrow&&new Date(v.nr)<=inWeek).length;
  el.innerHTML=`
    <div class="mastery-bars">${counts.map((c,i)=>`
      <div class="mastery-bar-row">
        <div class="mastery-bar-lbl">${labels[i]}</div>
        <div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${max>0?Math.round(c/max*100):0}%;background:${colors[i]}"></div></div>
        <div class="mastery-bar-n">${c}</div>
      </div>`).join('')}
    </div>
    <div class="mastery-due-row">
      <div class="mastery-due-item"><div class="mastery-due-n">${dueNow}</div><div class="mastery-due-l">Nu</div></div>
      <div class="mastery-due-item"><div class="mastery-due-n">${dueTomorrow}</div><div class="mastery-due-l">Morgen</div></div>
      <div class="mastery-due-item"><div class="mastery-due-n">${dueWeek}</div><div class="mastery-due-l">Week</div></div>
      <div class="mastery-due-item"><div class="mastery-due-n">${total}</div><div class="mastery-due-l">Totaal</div></div>
    </div>`;
}

// ══════════════════════════════════════════════════════
// WORD DETAIL MODAL
// ══════════════════════════════════════════════════════
function showWordDetail(hz){
  const v=S.vocab[hz];if(!v)return;
  const m=v.mastery||0;
  const masteryNames=['Onbekend','Beginner','Leerling','Gevorderd','Expert','Meester'];
  const pips=[0,1,2,3,4].map(i=>`<div class="pip ${i<m?(m>=4?'gold':(m>=3?'green':'on')):''}"></div>`).join('');
  const due=!v.nr||new Date(v.nr)<=new Date();
  const nxt=v.nr?timeUntil(v.nr):'Nu';
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  modal.innerHTML=`
    <div class="modal-drag"></div>
    <div class="wd-card">
      <div class="wd-hz">${hz}</div>
      <div class="wd-tr">🗣️ ${toDutchPhonetic(v.tr)}</div>
      <div class="wd-nl">= ${v.nl}</div>
    </div>
    <div class="wd-stats">
      <div class="wd-stat-box">
        <div class="m-pips wd-pips">${pips}</div>
        <div class="wd-stat-lbl">${masteryNames[m]}</div>
      </div>
      <div class="wd-stat-box">
        <div class="wd-stat-n" style="color:${due?'var(--rose-d)':'var(--mint)'}">${due?'Nu':'over '+nxt}</div>
        <div class="wd-stat-lbl">Herhaling</div>
      </div>
      ${v.errors?`<div class="wd-stat-box">
        <div class="wd-stat-n" style="color:var(--rose-d)">${v.errors}</div>
        <div class="wd-stat-lbl">Fouten</div>
      </div>`:''}
    </div>
    <div style="display:flex;gap:8px;margin-top:4px">
      <button class="btn-check" style="position:static;flex:1" id="wd-drill">⚡ Oefen nu</button>
      <button class="btn-check" style="position:static;flex:1;background:var(--ink-xl);color:var(--ink)" id="wd-close">Sluiten</button>
    </div>`;
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  modal.querySelector('#wd-close').addEventListener('click',()=>bg.remove());
  modal.querySelector('#wd-drill').addEventListener('click',()=>{
    bg.remove();
    startOvhoring(0,[{hz,v,dir:m>=3?'nl_hz':'hz_nl'}]);
  });
  document.body.appendChild(bg);
}

function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}
