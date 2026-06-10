// ══════════════════════════════════════════════════════
// SPEECH INIT
// ══════════════════════════════════════════════════════
// ── Swipe-navigatie tussen tabs ──
let _txStart=0,_tyStart=0;
const _NAV=['home','review','profile'];
document.addEventListener('touchstart',e=>{
  _txStart=e.touches[0].clientX;
  _tyStart=e.touches[0].clientY;
},{passive:true});
document.addEventListener('touchend',e=>{
  if(document.activeElement.tagName==='INPUT')return;
  if(document.querySelector('.modal-bg'))return;
  if(document.querySelector('.ovh-overlay.open'))return;
  if(document.querySelector('.qt-overlay.open'))return;
  const active=document.querySelector('.screen.active');
  if(!active)return;
  const activeId=active.id.replace('screen-','');
  if(!_NAV.includes(activeId))return;
  const dx=e.changedTouches[0].clientX-_txStart;
  const dy=e.changedTouches[0].clientY-_tyStart;
  if(Math.abs(dx)<60||Math.abs(dy)>Math.abs(dx)*0.65)return;
  const cur=_NAV.indexOf(activeId);
  const next=dx<0?Math.min(cur+1,_NAV.length-1):Math.max(cur-1,0);
  if(next===cur)return;
  navTo(_NAV[next],document.querySelectorAll('.nb')[next]);
},{passive:true});

// ── Toetsenbordsnelkoppelingen voor meerkeuze (1-4 of A-D) ──
document.addEventListener('keydown', function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  const map={'1':0,'2':1,'3':2,'4':3,'a':0,'b':1,'c':2,'d':3};
  const idx=map[e.key.toLowerCase()];
  if(idx===undefined)return;
  const btns=[...document.querySelectorAll('.ch-btn:not([disabled])')];
  if(btns.length>=idx+1)btns[idx].click();
});

// ── Veilige event delegation ──
document.addEventListener('click', function(e){
  const tile = e.target.closest('[data-action]');
  if(!tile) return;
  const action = tile.dataset.action;
  if(action === 'wbmove')  wbMove(tile,  tile.dataset.word);
  if(action === 'ordmove') ordMove(tile, tile.dataset.word);
  if(action === 'mc_nl')   chkMC(tile,    tile.dataset.chosen, tile.dataset.correct, tile.dataset.hz, tile.dataset.tr);
  if(action === 'mc_hz')   chkMC_hz(tile, tile.dataset.chosen, tile.dataset.correct, tile.dataset.nl, tile.dataset.tr);

  const wc = e.target.closest('.wc[data-hz]');
  if(wc) showWordDetail(wc.dataset.hz);
});

// ══════════════════════════════════════════════════════
// NOTIFICATIES
// ══════════════════════════════════════════════════════
function scheduleReminder(){
  if(!('Notification' in window)||Notification.permission!=='granted')return;
  const today=new Date().toDateString();
  if(S.lastStudy===today)return;
  const now=new Date();
  const eve=new Date();
  eve.setHours(20,0,0,0);
  const ms=eve-now;
  if(ms<=0)return;
  setTimeout(()=>{
    if(S.lastStudy!==new Date().toDateString()){
      new Notification('Gulette 🐇',{
        body:`Salam ${S.name}! Vergeet je dagelijkse Hazaragi les niet 🌸`,
        tag:'gulette-reminder'
      });
    }
  },ms);
}

function toggleNotifications(){
  if(!('Notification' in window)){showToast('Notificaties worden niet ondersteund op dit apparaat');return;}
  if(Notification.permission==='granted'){showToast('Herinneringen zijn al ingeschakeld ✅');return;}
  Notification.requestPermission().then(p=>{
    if(p==='granted'){showToast('🔔 Herinnering ingeschakeld!');scheduleReminder();}
    else showToast('Geweigerd — pas dit aan in je browserinstellingen.');
    updateNotifBtn();
  });
}

function updateNotifBtn(){
  const btn=document.getElementById('notif-btn');
  if(!btn||!('Notification' in window))return;
  if(Notification.permission==='granted'){
    btn.textContent='🔔 Herinnering ingeschakeld ✓';
    btn.style.opacity='0.55';btn.style.cursor='default';
  }else{
    btn.textContent='🔔 Dagelijkse herinnering inschakelen';
    btn.style.opacity='1';btn.style.cursor='pointer';
  }
}

// ══════════════════════════════════════════════════════
// DELEN
// ══════════════════════════════════════════════════════
function shareProgress(){
  const wc=Object.keys(S.vocab).length;
  const today=new Date().toISOString().slice(0,10);
  const todayXP=(S.xpLog&&S.xpLog[today])||0;
  const text=`Ik heb vandaag +${todayXP} XP verdiend in Gulette! 🐇\nIk ken nu ${wc} Hazaragi woorden.\n\n#Gulette #Hazaragi`;
  if(navigator.share){
    navigator.share({title:'Gulette 🐇',text}).catch(()=>{});
  }else{
    navigator.clipboard?.writeText(text)
      .then(()=>showToast('📋 Gekopieerd! Plak het in WhatsApp 💚'))
      .catch(()=>showToast('❌ Klembord niet beschikbaar'));
  }
}

// ══════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
load();
applyMasteryDecay();
if(S.showRoman===false) document.body.classList.add('hide-roman');
try{
  if(S.name){
    document.getElementById('bnav').style.display='flex';
    renderHome();
    showScreen('home');
    scheduleReminder();
  }else{
    document.getElementById('bnav').style.display='none';
    showScreen('onboarding');
  }
}catch(e){
  // Alleen wissen bij aantoonbare datacorruptie, niet bij render-fouten
  try{const raw=localStorage.getItem('gulette_v3');if(raw)JSON.parse(raw);}
  catch(_){localStorage.clear();location.reload();}
}
