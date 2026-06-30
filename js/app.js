// ══════════════════════════════════════════════════════
// SPEECH INIT
// ══════════════════════════════════════════════════════
// ── Swipe-navigatie tussen tabs ──
let _txStart=0,_tyStart=0;
const _NAV=['home','review','reading','grammar','profile'];
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

// ── Toetsenbordsnelkoppelingen voor meerkeuze (1-4 of A-D) + Enter/Spatie voor verder ──
document.addEventListener('keydown', function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  // Enter of Spatie → "Verder" knop in feedback-balk
  if(e.key==='Enter'||e.key===' '){
    const fb=document.getElementById('fb-bar');
    if(fb&&!fb.classList.contains('hide')){
      e.preventDefault();
      nextEx();
      return;
    }
  }
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
        body:`Salam ${S.name}! Vergeet je dagelijkse Afghaanse les niet 🌸`,
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
  const lvl=getLevel(S.xp);
  const cefrBadge=S.testResults?Object.entries(S.testResults).filter(([,r])=>r.passed).map(([l])=>l).pop():null;

  // Canvas-afbeelding genereren
  const c=document.createElement('canvas');
  c.width=600;c.height=340;
  const ctx=c.getContext('2d');
  // Achtergrond
  const grad=ctx.createLinearGradient(0,0,600,340);
  grad.addColorStop(0,'#FDEEF1');grad.addColorStop(0.5,'#FFFAF7');grad.addColorStop(1,'#F6DFB3');
  ctx.fillStyle=grad;
  ctx.beginPath();
  ctx.roundRect(0,0,600,340,20);
  ctx.fill();
  // Titel
  ctx.fillStyle='#83513E';ctx.font='bold 32px sans-serif';
  ctx.fillText('Gulette 🐇',30,50);
  ctx.fillStyle='#C4937E';ctx.font='600 16px sans-serif';
  ctx.fillText(`${S.name} leert Afghaans!`,30,78);
  // Stats
  ctx.fillStyle='#F28AA1';ctx.font='bold 52px sans-serif';
  ctx.fillText(`${wc}`,30,148);
  ctx.fillStyle='#83513E';ctx.font='bold 18px sans-serif';
  ctx.fillText('woorden geleerd',30,172);

  ctx.fillStyle='#F28AA1';ctx.font='bold 52px sans-serif';
  ctx.fillText(`${S.streak}`,220,148);
  ctx.fillStyle='#83513E';ctx.font='bold 18px sans-serif';
  ctx.fillText('🔥 dag streak',220,172);

  ctx.fillStyle='#F28AA1';ctx.font='bold 52px sans-serif';
  ctx.fillText(`${lvl}`,420,148);
  ctx.fillStyle='#83513E';ctx.font='bold 18px sans-serif';
  ctx.fillText('level',420,172);

  if(cefrBadge){
    ctx.fillStyle='#E7AE75';ctx.font='bold 22px sans-serif';
    ctx.fillText(`🎓 Niveau: ${cefrBadge}`,30,220);
  }
  ctx.fillStyle='#D4B8A8';ctx.font='600 14px sans-serif';
  ctx.fillText(`+${todayXP} XP vandaag · ${S.xp} XP totaal`,30,cefrBadge?254:220);
  ctx.fillText('#Gulette #Afghaans',30,310);

  c.toBlob(blob=>{
    if(!blob)return;
    if(navigator.share&&navigator.canShare){
      const file=new File([blob],'gulette-voortgang.png',{type:'image/png'});
      const data={files:[file],title:'Gulette 🐇',text:`Ik ken nu ${wc} Afghaanse woorden! 🐇`};
      if(navigator.canShare(data)){
        navigator.share(data).catch(()=>{});
        return;
      }
    }
    // Fallback: download
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download='gulette-voortgang.png';a.click();
    URL.revokeObjectURL(url);
    showToast('📸 Afbeelding opgeslagen! Deel het op Instagram/WhatsApp');
  },'image/png');
}

// ══════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{});
}

// ── Offline-indicator ──
function _updateOnlineStatus(){
  const el=document.getElementById('offline-bar');
  if(!el)return;
  el.style.display=navigator.onLine?'none':'flex';
}
window.addEventListener('online',_updateOnlineStatus);
window.addEventListener('offline',_updateOnlineStatus);
setTimeout(_updateOnlineStatus,500);
load();
// Week activity reset: clear dots every Monday (new calendar week)
(function(){
  const now=new Date();
  const day=now.getDay();
  const mon=new Date(now);
  mon.setDate(now.getDate()-(day===0?6:day-1));
  const weekStart=mon.toISOString().slice(0,10);
  if(S.weekStart!==weekStart){
    S.weekActivity=[];
    S.weekStart=weekStart;
    save();
  }
})();
migrateVocab();
migrateVocabKeys();
applyMasteryDecay();
if(S.showRoman===false) document.body.classList.add('hide-roman');
applyFontSize();
applyDarkMode();
setupRomanReveal();
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
