// ══════════════════════════════════════════════════════
// SPEECH INIT
// ══════════════════════════════════════════════════════
if(window.speechSynthesis){
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged=()=>window.speechSynthesis.getVoices();
}

// ── Veilige event delegation ──
document.addEventListener('click', function(e){
  const tile = e.target.closest('[data-action]');
  if(!tile) return;
  const action = tile.dataset.action;
  if(action === 'wbmove') wbMove(tile, tile.dataset.word);
  if(action === 'mc_nl')  chkMC(tile,    tile.dataset.chosen, tile.dataset.correct, tile.dataset.hz, tile.dataset.tr);
  if(action === 'mc_hz')  chkMC_hz(tile, tile.dataset.chosen, tile.dataset.correct, tile.dataset.nl, tile.dataset.tr);

  const wc = e.target.closest('.wc[data-hz]');
  if(wc) showPronModal(wc.dataset.hz);
});

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
