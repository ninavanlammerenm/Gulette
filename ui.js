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
  const total=Object.keys(S.vocab).length;
  if(due>0){
    document.getElementById('rev-count-txt').textContent=`${due} van ${total} woorden klaar voor herhaling! 🌸`;
  }else if(total===0){
    document.getElementById('rev-count-txt').textContent='Start een les om woorden te leren 🌸';
  }else{
    document.getElementById('rev-count-txt').textContent='Je bent helemaal bij! Kom later terug 🌸';
  }

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

function renderVocab(){
  const ents=Object.entries(S.vocab);
  document.getElementById('rev-sub').textContent=ents.length+' woorden geleerd';
  let list=ents;
  if(wFilter==='new')      list=ents.filter(([,v])=>(v.mastery||0)===0);
  else if(wFilter==='learning') list=ents.filter(([,v])=>(v.mastery||0)>0&&(v.mastery||0)<3);
  else if(wFilter==='mastered') list=ents.filter(([,v])=>(v.mastery||0)>=3);
  else if(wFilter==='due')      list=ents.filter(([,v])=>!v.nr||new Date(v.nr)<=new Date());
  const el=document.getElementById('w-list');
  if(!list.length){
    el.innerHTML='<div style="text-align:center;color:var(--ink-l);padding:44px 20px;font-weight:700;line-height:2">Geen woorden hier 🌸<br><small>Start een les om te beginnen!</small></div>';
    return;
  }
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
