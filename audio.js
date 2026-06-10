// ══════════════════════════════════════════════════════
// AUDIO FEEDBACK  (Web Audio API — geen externe bestanden)
// ══════════════════════════════════════════════════════
let _actx=null;
function getACtx(){
  if(!_actx){try{_actx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}
  return _actx;
}

function playTone(freq,dur,type='sine',vol=0.18){
  const ctx=getACtx();if(!ctx)return;
  const _play=()=>{
    try{
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      osc.type=type;osc.frequency.setValueAtTime(freq,ctx.currentTime);
      gain.gain.setValueAtTime(vol,ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);
      osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);
    }catch(e){}
  };
  if(ctx.state==='suspended'){ctx.resume().then(_play).catch(()=>{});}
  else _play();
}

function sfxCorrect(){
  if(S.soundOn===false)return;
  playTone(520,0.12,'sine',0.15);
  setTimeout(()=>playTone(660,0.12,'sine',0.15),80);
  setTimeout(()=>playTone(780,0.18,'sine',0.15),160);
}

function sfxWrong(){
  if(S.soundOn===false)return;
  playTone(300,0.15,'sawtooth',0.08);
  setTimeout(()=>playTone(220,0.2,'sawtooth',0.08),100);
}

function sfxFinish(){
  if(S.soundOn===false)return;
  [0,80,160,240,320].forEach((t,i)=>{
    const freqs=[440,550,660,770,880];
    setTimeout(()=>playTone(freqs[i],0.25,'sine',0.14),t);
  });
}

// ══════════════════════════════════════════════════════
// TTS — Hazaragi uitspreken
// Strategie: probeer altijd lang='fa' (iOS pikt gedownloade
// Perzische stem automatisch op zonder getVoices() nodig).
// Bij fout: spreek romanisering uit met standaardstem.
// ══════════════════════════════════════════════════════

function _findRoman(hz){
  if(typeof CHAPTERS==='undefined')return null;
  for(const ch of CHAPTERS){
    for(const l of ch.lessons||[]){
      const w=(l.words||[]).find(x=>x.hz===hz);
      if(w&&w.tr)return w.tr;
    }
  }
  return null;
}

function _speakRoman(text){
  const roman=_findRoman(text)||text;
  window.speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(roman);
  utt.lang='nl-NL';
  utt.rate=0.72;
  utt.onerror=()=>{};
  window.speechSynthesis.speak(utt);
}

function speakHz(text){
  if(S.soundOn===false||!('speechSynthesis' in window)||!text)return;
  window.speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(text);
  utt.lang='fa';
  utt.rate=0.78;
  utt.pitch=1.0;
  utt.onerror=()=>{};
  window.speechSynthesis.speak(utt);
}

function testAudio(){
  if(!('speechSynthesis' in window)){showToast('❌ Spraak niet beschikbaar');return;}
  const vs=window.speechSynthesis.getVoices();
  const fa=vs.filter(v=>v.lang.startsWith('fa'));
  const ar=vs.filter(v=>v.lang.startsWith('ar'));
  if(fa.length){
    showToast('✅ Farsi stemmen: '+fa.map(v=>v.name).join(', '));
  } else if(ar.length){
    showToast('🔤 Geen Farsi, wel Arabisch: '+ar.map(v=>v.name).join(', ')+' — probeert toch fa-IR');
  } else {
    showToast('🔤 Geen fa/ar stem gevonden — romanisering als fallback');
  }
  speakHz('سلام');
}
