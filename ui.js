
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
  if(id==='grammar') renderGrammarLibrary();
}

function goHome(){
  showScreen('home');
  document.getElementById('bnav').style.display='flex';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  document.querySelector('.nb').classList.add('on');
  renderHome();
  const firstActive=document.querySelector('.l-node.u');
  if(firstActive)setTimeout(()=>firstActive.scrollIntoView({behavior:'smooth',block:'center'}),100);
}

// ══════════════════════════════════════════════════════
// ONBOARDING
// ══════════════════════════════════════════════════════
let selGoalVal=10;
let selLearnModeVal='tap';

function chkName(){
  const v=document.getElementById('name-inp').value.trim();
  document.getElementById('btn-start').disabled=v.length<2;
}

function selGoal(btn,v){
  document.querySelectorAll('.goal-opt').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selGoalVal=v;
}

function selLearnMode(btn,mode){
  document.querySelectorAll('#ob-mode-tap,#ob-mode-hide').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selLearnModeVal=mode;
  const el=document.getElementById('ob-mode-hint');
  if(el)el.textContent=mode==='hide'
    ?'Uitspraak volledig verborgen — meest effectief voor schrift leren!'
    :'Uitspraak is verborgen — je kunt hem zien door erop te tikken.';
}

function startApp(){
  S.name=document.getElementById('name-inp').value.trim();
  S.goal=selGoalVal;
  S.showRoman=selLearnModeVal!=='hide';
  if(!S.weekActivity)S.weekActivity=[];
  save();
  document.body.classList.toggle('hide-roman',!S.showRoman);
  document.getElementById('bnav').style.display='flex';
  goHome();
}

// ══════════════════════════════════════════════════════
// HOME
// ══════════════════════════════════════════════════════
function renderHome(){
  const _n=document.createElement('span');_n.textContent=S.name;
  document.getElementById('hdr-name').innerHTML='Salam, <em>'+_n.innerHTML+'</em> 🐇';
  document.getElementById('chip-streak').textContent=S.streak;
  document.getElementById('chip-xp').textContent=S.xp;
  const shields=S.shields||0;
  const shieldWrap=document.getElementById('chip-shield-wrap');
  if(shieldWrap)shieldWrap.style.display=shields>0?'flex':'none';
  const chipShields=document.getElementById('chip-shields');
  if(chipShields)chipShields.textContent=shields;
  const lvl=getLevel(S.xp);
  const pct=getLevelPct(S.xp);
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

  // Review hero card
  const allVocab=Object.values(S.vocab);
  const due=allVocab.filter(v=>isDue(v)).length;
  const total=Object.keys(S.vocab).length;
  const hero=document.getElementById('review-hero');
  if(due>0){
    hero.className='review-hero';
    hero.onclick=()=>startDailyReview();
    hero.innerHTML=`
      <div class="rh-deco">🐇</div>
      <div class="rh-title">Dagelijkse herhaling</div>
      <div class="rh-count">${due}</div>
      <div class="rh-label">woorden wachten op je</div>
      <div class="rh-btn">Begin herhaling →</div>`;
  }else if(total===0){
    hero.className='review-hero';
    hero.onclick=()=>{const el=document.getElementById('chapters-wrap');if(el)el.scrollIntoView({behavior:'smooth'});};
    hero.innerHTML=`
      <div class="rh-deco">🐇</div>
      <div class="rh-title">Welkom bij Gulette</div>
      <div class="rh-count" style="font-size:36px">🌸</div>
      <div class="rh-label">Begin je eerste les hieronder</div>
      <div class="rh-btn">Bekijk lessen ↓</div>`;
  }else{
    hero.className='review-hero done';
    const nextDue=allVocab.filter(v=>v.nr).map(v=>new Date(v.nr)).sort((a,b)=>a-b)[0];
    const eta=nextDue?timeUntil(nextDue.toISOString()):'later';
    hero.onclick=()=>showToast('Geen reviews nu — goed gedaan! 🌸');
    hero.innerHTML=`
      <div class="rh-deco">🐇</div>
      <div class="rh-title">Alles bijgewerkt</div>
      <div class="rh-count" style="font-size:28px">✓</div>
      <div class="rh-label">Volgende review over ${eta}</div>
      <div class="rh-btn">Kom later terug 🐇</div>`;
  }

  // Chapters / lesson path — card layout
  const cw=document.getElementById('chapters-wrap');
  cw.innerHTML='';
  CHAPTERS.forEach((ch,ci)=>{
    const block=document.createElement('div');
    block.className='ch-block';
    const totalWords=ch.lessons.reduce((s,l)=>s+(l.words||[]).length,0);
    const learnedWords=ch.lessons.reduce((s,l)=>s+(l.words||[]).filter(w=>S.vocab[w.hz]).length,0);
    const chProg=totalWords>0?`<span class="ch-prog">${learnedWords}/${totalWords}</span>`:'';
    const chIcon=ch.label.match(/\p{Emoji_Presentation}/u)?.[0]||'📖';
    const chTitle=ch.label.replace(/\p{Emoji_Presentation}/gu,'').trim();
    const anyDone=ch.lessons.some(l=>S.done.includes(l.id));
    const revBtn=anyDone?`<button class="ch-rev-btn" onclick="event.stopPropagation();startChapterReview('${ch.id}')">🔁</button>`:'';
    block.innerHTML=`<div class="ch-label-row"><span class="ch-label-txt">${chIcon} H${ci+1} · ${chTitle} ${chProg}</span>${revBtn}</div>`;
    const path=document.createElement('div');
    path.className='l-path';

    ch.lessons.forEach((lesson,li)=>{
      const done=S.done.includes(lesson.id);
      const prevDone=li===0?true:S.done.includes(ch.lessons[li-1].id);
      const chPrevDone=ci===0?true:CHAPTERS[ci-1].lessons.some(l=>S.done.includes(l.id));
      const locked=!prevDone||!chPrevDone;
      const row=document.createElement('div');
      row.className='l-row';
      const cls=done?'d':(locked?'lk':'u');
      const nodeClick=locked?`showToast('Voltooi eerst de vorige les! 🔒')`:`startLesson('${lesson.id}')`;
      const nodeIcon=locked?'🔒':lesson.icon;
      const allMastered=(lesson.words||[]).length>0&&(lesson.words||[]).every(w=>(S.vocab[w.hz]?.mastery||0)>=3);
      row.innerHTML=`<div class="l-node ${cls}" onclick="${nodeClick}" data-id="${lesson.id}">
        <div class="n-ico">${nodeIcon}</div>
        ${done&&allMastered?'<div class="n-done-badge">✓</div>':''}
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
let _rvTimer=null;
function renderVocabDebounced(){clearTimeout(_rvTimer);_rvTimer=setTimeout(renderVocab,150);}

function filterW(f,btn){
  wFilter=f;document.querySelectorAll('.fc').forEach(b=>b.classList.remove('on'));btn.classList.add('on');renderVocab();
}

function startWeakWordsDrill(){
  const weakWords=Object.entries(S.vocab).filter(([,v])=>(v.errors||0)>=2).sort(([,a],[,b])=>(b.errors||0)-(a.errors||0)).slice(0,20);
  if(weakWords.length<4){showToast('Nog niet genoeg fouten-woorden! Maak meer oefeningen 💪');return;}
  const wordList=weakWords.map(([hz,v])=>({hz,v,dir:Math.random()>.5?'hz_nl':'nl_hz'}));
  openOvhDirect(wordList);
}

function findLessonForWord(hz){
  for(const ch of CHAPTERS)
    for(const l of ch.lessons)
      if((l.words||[]).some(w=>w.hz===hz)) return l.id;
  return null;
}

function togglePin(hz){
  if(!S.vocab[hz])return;
  S.vocab[hz].pinned=!S.vocab[hz].pinned;
  save();
  renderVocab();
}

function startConfusionDrill(){
  const pairs=getConfusedPairs(2);
  if(pairs.length<1){showToast('Nog geen verwarrende woordenparen gedetecteerd!');return;}
  const wordList=[];
  pairs.slice(0,10).forEach(p=>{
    if(S.vocab[p.w1]) wordList.push({hz:p.w1,v:S.vocab[p.w1],dir:'hz_nl'});
    if(S.vocab[p.w2]) wordList.push({hz:p.w2,v:S.vocab[p.w2],dir:'hz_nl'});
    if(S.vocab[p.w1]) wordList.push({hz:p.w1,v:S.vocab[p.w1],dir:'nl_hz'});
    if(S.vocab[p.w2]) wordList.push({hz:p.w2,v:S.vocab[p.w2],dir:'nl_hz'});
  });
  if(wordList.length<4){showToast('Te weinig woorden voor een oefening');return;}
  openOvhDirect(wordList.slice(0,20));
}

function renderDrillCards(){
  const el=document.getElementById('drill-cards');
  if(!el)return;
  const total=Object.keys(S.vocab).length;
  const weakCount=Object.values(S.vocab).filter(v=>(v.errors||0)>=2).length;
  const confCount=getConfusedPairs(3).length;
  let html='';
  html+=`<button class="drill-card" onclick="openOvhSetup()"><span class="drill-card-ico">📝</span><div><div class="drill-card-lbl">Overhoring</div><div class="drill-card-sub">${total} woorden</div></div></button>`;
  if(total>=8) html+=`<button class="drill-card" onclick="startSpeedRound()"><span class="drill-card-ico">⚡</span><div><div class="drill-card-lbl">Snelronde</div><div class="drill-card-sub">60 sec${S.speedBest?' · record '+S.speedBest:''}</div></div></button>`;
  if(weakCount>=4) html+=`<button class="drill-card" onclick="startWeakWordsDrill()"><span class="drill-card-ico">⚠️</span><div><div class="drill-card-lbl">Zwakke woorden</div><div class="drill-card-sub">${weakCount} woorden</div></div></button>`;
  if(confCount>=1) html+=`<button class="drill-card" onclick="startConfusionDrill()"><span class="drill-card-ico">🔀</span><div><div class="drill-card-lbl">Verwarring</div><div class="drill-card-sub">${confCount} paren</div></div></button>`;
  el.innerHTML=html;
}

function renderVocab(){
  renderDrillCards();
  const search=(document.getElementById('vocab-search')?.value||'').toLowerCase().trim();
  const ents=Object.entries(S.vocab);
  document.getElementById('rev-sub').textContent=ents.length+' woorden geleerd';
  let list=ents;
  if(wFilter==='learning') list=ents.filter(([,v])=>(v.mastery||0)>0&&(v.mastery||0)<3);
  else if(wFilter==='mastered') list=ents.filter(([,v])=>(v.mastery||0)>=3);
  else if(wFilter==='due')      list=ents.filter(([,v])=>!v.nr||new Date(v.nr)<=new Date());
  else if(wFilter==='fouten')   list=ents.filter(([,v])=>(v.errors||0)>=1).sort(([,a],[,b])=>(b.errors||0)-(a.errors||0));
  else if(wFilter==='pinned')   list=ents.filter(([,v])=>v.pinned);

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
    const pips=masteryPips(m);
    const due=isDue(v);
    const nxt=v.nr?timeUntil(v.nr):'Nu';
    const accent=due&&m<2?'var(--rose-d)':m>=4?'var(--mint)':m>=2?'var(--lav)':'var(--gold)';
    // markeer lange klanken (dubbele klinkers) in de uitspraak
    const pron=(v.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>');
    const pinned=v.pinned?'★':'☆';
    return `<div class="wc" data-hz="${hz}" style="border-left:4px solid ${accent}">
      <div class="wc-hz">${hz}</div>
      <div class="wc-info">
        <div class="wc-pron">🗣️ ${pron}</div>
        <div class="wc-nl">${v.nl||''}</div>
        <div class="wc-next">${due?'🔔 Review nu klaar':'⏱ Review: '+nxt}${v.errors>0?` · ❌ ${v.errors}x fout`:''}</div>
      </div>
      <button class="spk-btn wc-spk" onclick="event.stopPropagation();speakHz('${hz}','${(v.tr||'').replace(/'/g,"\\'")}')">🔊</button>
      <button class="wc-pin" onclick="event.stopPropagation();togglePin('${hz}')">${pinned}</button>
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
  _qtWords=sorted.slice(0,10);
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
  const _esc=s=>(s||'').replace(/'/g,"\\'");
  document.getElementById('qt-body').innerHTML=`
    <div class="type-pill">⚡ Vraag ${_qtIdx+1} van ${_qtWords.length}</div>
    <div class="hz-card" style="margin-bottom:20px">
      <span class="hz-script">${hz}</span>
      <button class="spk-btn" onclick="speakHz('${hz}','${_esc(v.tr)}')">🔊</button>
      <span class="hz-dutch">${v.tr||''}</span>
    </div>
    <div class="choices">${_qtChoices.map((c,i)=>`
      <button class="ch-btn" onclick="answerQT(this,${i})">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
}

function answerQT(btn,idx){
  const chosen=_qtChoices[idx];
  const [hz,v]=_qtWords[_qtIdx];
  const correct=v.nl;
  document.querySelectorAll('#qt-body .ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');_qtScore++;
    sfxCorrect();
    speakHz(hz,v.tr);
    setTimeout(()=>{_qtIdx++;renderQT();},700);
  }else{
    btn.classList.add('ng');
    document.querySelectorAll('#qt-body .ch-btn').forEach((b,i)=>{
      if(_qtChoices[i]===correct)b.classList.add('ok');
    });
    sfxWrong();
    speakHz(hz,v.tr);
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

function masteryPips(m){
  return [0,1,2,3,4].map(i=>`<div class="pip ${i<m?(m>=4?'gold':(m>=3?'green':'on')):''}"></div>`).join('');
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
  const lvl=getLevel(S.xp);
  const titles=['Beginner 🌱','Leerling 📖','Gevorderd 🌸','Expert 💎','Meester ✨','Hazaragi-liefhebber 🏔️'];
  const cefrBadge = S.testResults ? Object.entries(S.testResults).filter(([,r])=>r.passed).map(([l])=>l).pop() : null;
  document.getElementById('p-lvl').textContent=`Level ${lvl} · ${titles[Math.min(lvl-1,5)]}${cefrBadge?' · 🎓 '+cefrBadge:''}`;
  document.getElementById('p-xp').textContent=S.xp;
  document.getElementById('p-str').textContent=S.streak;
  document.getElementById('p-wds').textContent=Object.keys(S.vocab).length;
  document.getElementById('p-les').textContent=S.done.length;
  renderXPGraph();
  renderMasteryDistrib();
  renderChapterProgress();
  updateNotifBtn();
  updateRomanBtn();
  updateSoundBtn();
  updateDarkModeBtn();
  updateSkipListeningBtn();
  updateFontBtns();
  const _vEl=document.getElementById('app-version');
  if(_vEl)_vEl.textContent='v25';
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
  S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},weekActivity:[],goal:10,xpLog:{},showRoman:true};
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
  const appW=document.getElementById('app').getBoundingClientRect().width;
  wrap.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:500;overflow:hidden;max-width:${appW}px;left:50%;transform:translateX(-50%)`;
  for(let i=0;i<55;i++)setTimeout(()=>{
    const p=document.createElement('div');p.className='cf';
    p.style.cssText=`left:${Math.random()*100}%;background:${cols[~~(Math.random()*cols.length)]};animation-duration:${.7+Math.random()*.8}s;animation-delay:${Math.random()*.4}s;border-radius:${Math.random()>.5?'50%':'3px'};width:${6+~~(Math.random()*8)}px;height:${6+~~(Math.random()*8)}px;`;
    wrap.appendChild(p);setTimeout(()=>p.remove(),2000);
  },i*20);
}

function sparkles(){
  const emos=['🍓','✨','🌸','💕','🍓','🌿'];
  const maxW=document.getElementById('app').getBoundingClientRect().width;
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
function setRomanMode(mode){
  S.showRoman = mode === 'hide' ? false : true;
  save();
  document.body.classList.toggle('hide-roman', S.showRoman === false);
  updateRomanBtn();
}

function toggleRoman(){ setRomanMode(S.showRoman===false?'tap':'hide'); }

function updateRomanBtn(){
  const tap = document.getElementById('roman-btn-tap');
  const hide = document.getElementById('roman-btn-hide');
  if(!tap||!hide) return;
  const hidden = S.showRoman === false;
  tap.classList.toggle('active', !hidden);
  hide.classList.toggle('active', hidden);
  tap.style.background = '';
  tap.style.color = '';
  hide.style.background = '';
  hide.style.color = '';
}

function toggleDarkMode(){
  S.darkMode=!S.darkMode;
  save();
  applyDarkMode();
  updateDarkModeBtn();
}

function applyDarkMode(){
  document.body.classList.toggle('dark-mode', !!S.darkMode);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', S.darkMode?'#1C1814':'#EC9C9D');
}

function updateDarkModeBtn(){
  const btn=document.getElementById('darkmode-btn');
  if(!btn)return;
  const on=!!S.darkMode;
  btn.textContent=on?'☀️ Dark mode: AAN':'🌙 Dark mode: UIT';
}

function toggleSound(){
  S.soundOn=S.soundOn===false?true:false;
  save();
  updateSoundBtn();
}

function updateSoundBtn(){
  const btn=document.getElementById('sound-btn');
  if(!btn)return;
  const on=S.soundOn!==false;
  btn.textContent=on?'🔊 Geluid: AAN':'🔇 Geluid: UIT';
  btn.classList.toggle('prof-btn-blue',on);
  if(!on){btn.style.background='linear-gradient(150deg,var(--ink-xl),var(--ink-l))';btn.style.color='var(--ink-m)';}
  else{btn.style.background='';btn.style.color='';}
}

function toggleSkipListening(){
  S.skipListening=S.skipListening===true?false:true;
  save();
  updateSkipListeningBtn();
}

function updateSkipListeningBtn(){
  const btn=document.getElementById('listen-skip-btn');
  if(!btn)return;
  const skip=S.skipListening===true;
  btn.textContent=skip?'🔇 Luisteroefeningen: UIT (je leest het woord)':'🎧 Luisteroefeningen: AAN';
  btn.classList.toggle('prof-btn-blue',!skip);
  if(skip){btn.style.background='linear-gradient(150deg,var(--ink-xl),var(--ink-l))';btn.style.color='var(--ink-m)';}
  else{btn.style.background='';btn.style.color='';}
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
function renderDagwoord(){}

// ══════════════════════════════════════════════════════
// MASTERY DISTRIBUTIE
// ══════════════════════════════════════════════════════
function renderMasteryDistrib(){
  const el=document.getElementById('mastery-distrib');
  if(!el)return;
  const counts=[0,0,0,0,0,0];
  let dueNow=0,dueTomorrow=0,dueWeek=0;
  const now=new Date();
  const tomorrow=new Date(now.getTime()+86400000);
  const inWeek=new Date(now.getTime()+7*86400000);
  Object.values(S.vocab).forEach(v=>{
    counts[Math.min(v.mastery||0,5)]++;
    if(!v.nr||new Date(v.nr)<=now) dueNow++;
    else if(new Date(v.nr)<=tomorrow) dueTomorrow++;
    else if(new Date(v.nr)<=inWeek) dueWeek++;
  });
  const total=counts.reduce((a,b)=>a+b,0);
  if(!total){el.innerHTML='<div style="text-align:center;padding:16px;color:var(--ink-l);font-weight:700">Nog geen woorden geleerd 🌱</div>';return;}
  const max=Math.max(...counts,1);
  const labels=['Nieuw','Basis','Leerling','Gevorderd','Expert','Meester'];
  const colors=['var(--ink-l)','var(--peach)','var(--gold)','var(--rose)','var(--mint)','var(--lav)'];
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
  const due=isDue(v);
  const nxt=v.nr?timeUntil(v.nr):'Nu';
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  const _esc=s=>(s||'').replace(/'/g,"\\'");
  modal.innerHTML=`
    <div class="modal-drag"></div>
    <div class="wd-card">
      <div class="wd-hz">${hz}</div>
      <button class="spk-btn" style="margin:4px auto" onclick="speakHz('${hz}','${_esc(v.tr)}')">🔊</button>
      <div class="wd-tr">${v.tr||''}</div>
      <div class="wd-nl">= ${v.nl}</div>
    </div>
    <div class="wd-stats">
      <div class="wd-stat-box">
        <div class="m-pips wd-pips">${masteryPips(m)}</div>
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
      <button class="btn-check" style="position:static;flex:1;background:linear-gradient(135deg,var(--lav-l),var(--lav));color:var(--ink)" id="wd-lesson">📖 Les</button>
      <button class="btn-check" style="position:static;flex:1;background:var(--ink-xl);color:var(--ink)" id="wd-close">Sluiten</button>
    </div>
    <button class="spk-btn" style="margin-top:8px;width:100%;border-radius:var(--r-xs);height:auto;padding:10px;font-size:13px;font-family:'Nunito',sans-serif;font-weight:800" onclick="speakHz('${hz}','${_esc(v.tr)}',true)">🐢 Langzaam afspelen</button>`;
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  modal.querySelector('#wd-close').addEventListener('click',()=>bg.remove());
  modal.querySelector('#wd-lesson').addEventListener('click',()=>{
    bg.remove();
    const lesId=findLessonForWord(hz);
    if(lesId){startLesson(lesId);}
    else showToast('Woord niet gevonden in een les');
  });
  modal.querySelector('#wd-drill').addEventListener('click',()=>{
    bg.remove();
    openOvhDirect([{hz,v,dir:m>=3?'nl_hz':'hz_nl'}]);
  });
  document.body.appendChild(bg);
  speakHz(hz,v.tr);
}

function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}

// ══════════════════════════════════════════════════════
// WERKWOORD-VERVOEGER
// ══════════════════════════════════════════════════════
const VERBS=[
  {inf:'رفتن', tr:'raftan', nl:'gaan', stem:'ر', forms:['می‌رم','می‌ری','می‌ره','می‌ریم','می‌رین','می‌رن']},
  {inf:'خوردن', tr:'khordan', nl:'eten', stem:'خور', forms:['می‌خورم','می‌خوری','می‌خوره','می‌خوریم','می‌خورین','می‌خورن']},
  {inf:'آمدن', tr:'aamadan', nl:'komen', stem:'آ', forms:['میایم','میایی','میایه','میاییم','میایین','میاین']},
  {inf:'دیدن', tr:'didan', nl:'zien', stem:'بین', forms:['می‌بینم','می‌بینی','می‌بینه','می‌بینیم','می‌بینین','می‌بینن']},
  {inf:'گفتن', tr:'goftan', nl:'zeggen', stem:'گ', forms:['می‌گم','می‌گی','می‌گه','می‌گیم','می‌گین','می‌گن']},
  {inf:'کدن', tr:'kadan', nl:'doen/maken', stem:'کن', forms:['می‌کنم','می‌کنی','می‌کنه','می‌کنیم','می‌کنین','می‌کنن']},
  {inf:'بودن', tr:'budan', nl:'zijn', stem:'باش', forms:['استم','استی','اس','استیم','استین','استن']},
  {inf:'داشتن', tr:'daashtan', nl:'hebben', stem:'دار', forms:['دارم','داری','داره','داریم','دارین','دارن']},
  {inf:'خواستن', tr:'khaastan', nl:'willen', stem:'خوا', forms:['می‌خوایم','می‌خوایی','می‌خوایه','می‌خواییم','می‌خوایین','می‌خواین']},
  {inf:'فامیدن', tr:'famidan', nl:'begrijpen', stem:'فام', forms:['می‌فامم','می‌فامی','می‌فامه','می‌فامیم','می‌فامین','می‌فامن']},
  {inf:'تانستن', tr:'taanestan', nl:'kunnen', stem:'تان', forms:['می‌تانم','می‌تانی','می‌تانه','می‌تانیم','می‌تانین','می‌تانن']},
  {inf:'دونستن', tr:'donestan', nl:'weten', stem:'دون', forms:['می‌دونم','می‌دونی','می‌دونه','می‌دونیم','می‌دونین','می‌دونن']},
];
const VERB_PERSONS=['ik (ma)','jij (tu)','hij/zij (oo)','wij (mo)','jullie (shoma)','zij mv (ana)'];

function openVerbDrill(){
  document.getElementById('ovh-overlay').classList.add('open');
  document.getElementById('ovh-setup').style.display='none';
  document.getElementById('ovh-quiz').style.display='flex';
  _verbIdx=0;_verbScore=0;_verbTotal=12;
  renderVerbQ();
}
let _verbIdx=0,_verbScore=0,_verbTotal=12;

function renderVerbQ(){
  if(_verbIdx>=_verbTotal){renderVerbResult();return;}
  const verb=VERBS[Math.floor(Math.random()*VERBS.length)];
  const personIdx=Math.floor(Math.random()*6);
  const correct=verb.forms[personIdx];
  const dists=shuffle(VERBS.filter(v=>v.inf!==verb.inf)).slice(0,2).map(v=>v.forms[personIdx]);
  const wrongPerson=verb.forms[(personIdx+Math.ceil(Math.random()*5))%6];
  const choices=shuffle([correct,...dists,wrongPerson]).slice(0,4);
  const ltrs=['A','B','C','D'];

  const body=document.getElementById('ovh-body');
  document.getElementById('ovh-prog').style.width=Math.round(_verbIdx/_verbTotal*100)+'%';
  document.getElementById('ovh-counter').textContent=`${_verbIdx+1}/${_verbTotal}`;
  body.innerHTML=`
    <div class="type-pill">🔄 Werkwoord vervoegen</div>
    <div style="background:linear-gradient(135deg,var(--rose-xl),#FFF8F9);border:2px solid var(--rose-l);border-radius:var(--r);padding:18px;text-align:center;margin-bottom:16px">
      <div style="font-family:'Noto Naskh Arabic',serif;font-size:28px;color:var(--ink);direction:rtl;margin-bottom:4px">${verb.inf}</div>
      <div style="font-size:14px;font-weight:800;color:var(--rose);font-style:italic">${verb.tr} — ${verb.nl}</div>
    </div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:14px">
      Hoe zeg je "<strong>${verb.nl}</strong>" voor <strong>${VERB_PERSONS[personIdx]}</strong>?
    </p>
    <div class="choices">${choices.map((c,i)=>`
      <button class="ch-btn ch-rtl" onclick="answerVerb(this,'${c}','${correct}','${verb.inf}')">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
}

function answerVerb(btn,chosen,correct,inf){
  document.querySelectorAll('#ovh-body .ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');_verbScore++;sfxCorrect();
  } else {
    btn.classList.add('ng');sfxWrong();
    document.querySelectorAll('#ovh-body .ch-btn').forEach(b=>{
      if(b.textContent.trim()===correct) b.classList.add('ok');
    });
  }
  speakHz(correct);
  setTimeout(()=>{_verbIdx++;renderVerbQ();}, chosen===correct?700:1300);
}

function renderVerbResult(){
  const pct=Math.round(_verbScore/_verbTotal*100);
  const xp=Math.round(_verbScore*3);
  if(xp>0){S.xp+=xp;logXP(xp);save();}
  const body=document.getElementById('ovh-body');
  document.getElementById('ovh-prog').style.width='100%';
  document.getElementById('ovh-counter').textContent='Klaar!';
  body.innerHTML=`
    <div class="ovh-result">
      <div class="ovh-res-emoji">${pct>=80?'🌟':pct>=50?'🌸':'💪'}</div>
      <div class="ovh-res-score">${_verbScore}<span>/${_verbTotal}</span></div>
      <div class="ovh-res-pct">${pct}% correct</div>
      <div class="ovh-res-msg">${pct>=80?'Goed vervoegd!':'Blijf oefenen met werkwoorden!'}</div>
      ${xp>0?`<div style="font-size:14px;font-weight:900;color:var(--rose-d);margin:6px 0">⭐ +${xp} XP</div>`:''}
      <div class="ovh-res-btns">
        <button class="btn-check" style="position:static" onclick="openVerbDrill()">🔄 Opnieuw</button>
        <button class="btn-check" style="position:static;background:var(--ink)" onclick="closeOvhoring()">Klaar ✓</button>
      </div>
    </div>`;
}

// ══════════════════════════════════════════════════════
// GRAMMAR LIBRARY
// ══════════════════════════════════════════════════════
function renderGrammarLibrary(){
  const container=document.getElementById('grammar-library-list');
  if(!container)return;

  const gramChapters=CHAPTERS.filter(c=>
    c.id.startsWith('ch_gram')||c.id==='ch30'||c.id==='ch52'
  );

  let totalLessons=0;
  let html='';
  gramChapters.forEach(ch=>{
    const lessons=(ch.lessons||[]).filter(l=>l.grammar);
    if(!lessons.length)return;
    totalLessons+=lessons.length;
    html+=`<div class="gram-chapter">
      <div class="gram-ch-label">${ch.label}</div>
      ${lessons.map(l=>`
        <div class="gram-item" onclick="toggleGramItem(this)">
          <div class="gram-item-hdr">
            <span class="gram-item-ico">${l.icon||'📖'}</span>
            <div class="gram-item-info">
              <div class="gram-item-title">${l.title}</div>
              <div class="gram-item-sub">${l.sub||''}</div>
            </div>
            <span class="gram-item-arrow">›</span>
          </div>
          <div class="gram-item-body">${l.grammar.replace(/\n/g,'<br>')}</div>
        </div>
      `).join('')}
    </div>`;
  });

  document.getElementById('gram-sub').textContent=`${totalLessons} taalregels om op te zoeken`;
  container.innerHTML=html;
}

function toggleGramItem(el){
  const isOpen=el.classList.contains('open');
  document.querySelectorAll('.gram-item.open').forEach(item=>item.classList.remove('open'));
  if(!isOpen)el.classList.add('open');
}

// ══════════════════════════════════════════════════════
// LETTERGROOTTE
// ══════════════════════════════════════════════════════
function setFontSize(size){
  localStorage.setItem('guletteFont',size);
  applyFontSize();
}

function applyFontSize(){
  const size=localStorage.getItem('guletteFont')||'normal';
  document.body.classList.remove('font-small','font-large');
  if(size==='small') document.body.classList.add('font-small');
  if(size==='large') document.body.classList.add('font-large');
  updateFontBtns();
}

function updateFontBtns(){
  const size=localStorage.getItem('guletteFont')||'normal';
  const sizes=['small','normal','large'];
  document.querySelectorAll('.fs-btn').forEach((btn,i)=>{
    btn.classList.toggle('on',size===sizes[i]);
  });
}

// ══════════════════════════════════════════════════════
// TAP-TO-REVEAL ROMANISERING
// ══════════════════════════════════════════════════════
function setupRomanReveal(){
  const SEL='.hz-dutch,.hz-roman,.hz-latin,.ctx-tr,.wc-pron,.dw-tr,.wd-tr';
  function wrap(el){
    if(el.dataset.rr||!el.textContent.trim())return;
    el.dataset.rr='1';
    const inner=el.innerHTML;
    el.innerHTML='';
    const btn=document.createElement('button');
    btn.className='rr-btn';
    btn.textContent='👁 uitspraak';
    const txt=document.createElement('span');
    txt.className='rr-txt';
    txt.innerHTML=inner;
    btn.addEventListener('click',e=>{e.stopPropagation();el.classList.add('rr-open');btn.remove();});
    el.appendChild(btn);
    el.appendChild(txt);
  }
  function scan(node){
    if(node.nodeType!==1)return;
    if(node.matches&&node.matches(SEL))wrap(node);
    if(node.querySelectorAll)node.querySelectorAll(SEL).forEach(wrap);
  }
  new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(scan)))
    .observe(document.body,{childList:true,subtree:true});
  document.querySelectorAll(SEL).forEach(wrap);
}

// ══════════════════════════════════════════════════════
// SCHERMTOETSENBORD (Hazaragi-schrift) — alleen op desktop,
// nooit op telefoon/tablet (die hebben hun eigen schrift-IME)
// ══════════════════════════════════════════════════════
const KB_ROWS=[
  ['ض','ص','ث','ق','ف','غ','ع','ه','خ','ح','ج','چ'],
  ['ش','س','ی','ب','ل','ا','ت','ن','م','ک','گ'],
  ['ظ','ط','ز','ر','ذ','د','پ','و','ژ','ء']
];

function isDesktopKeyboardEnv(){
  return window.matchMedia('(hover:hover) and (pointer:fine)').matches;
}

function attachVirtualKeyboard(inp){
  if(!inp||!isDesktopKeyboardEnv())return null;
  const kb=document.createElement('div');
  kb.className='virt-kb';
  kb.innerHTML=KB_ROWS.map(row=>
    `<div class="vk-row">${row.map(ch=>`<button type="button" class="vk-key" data-ch="${ch}">${ch}</button>`).join('')}</div>`
  ).join('')+`
    <div class="vk-row">
      <button type="button" class="vk-key vk-wide" data-act="back">⌫</button>
      <button type="button" class="vk-key vk-space" data-act="space">spatie</button>
      <button type="button" class="vk-key vk-wide" data-act="clear">✕</button>
    </div>`;
  kb.addEventListener('mousedown', e=>{
    const btn=e.target.closest('.vk-key');
    if(!btn)return;
    e.preventDefault(); // voorkomt focusverlies op het typveld
    const start=inp.selectionStart??inp.value.length;
    const end=inp.selectionEnd??inp.value.length;
    if(btn.dataset.act==='back'){
      const from=start===end?Math.max(start-1,0):start;
      inp.value=inp.value.slice(0,from)+inp.value.slice(end);
      inp.setSelectionRange(from,from);
    }else if(btn.dataset.act==='clear'){
      inp.value='';
      inp.setSelectionRange(0,0);
    }else{
      const ch=btn.dataset.act==='space'?' ':btn.dataset.ch;
      inp.value=inp.value.slice(0,start)+ch+inp.value.slice(end);
      inp.setSelectionRange(start+ch.length,start+ch.length);
    }
    inp.dispatchEvent(new Event('input',{bubbles:true}));
    inp.focus();
  });
  inp.insertAdjacentElement('afterend',kb);
  return kb;
}
