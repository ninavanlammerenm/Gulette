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
  try{
    if(ctx.state==='suspended')ctx.resume();
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.connect(gain);gain.connect(ctx.destination);
    osc.type=type;osc.frequency.setValueAtTime(freq,ctx.currentTime);
    gain.gain.setValueAtTime(vol,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);
    osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);
  }catch(e){}
}

function sfxCorrect(){
  if(S.soundOn===false)return;
  // vrolijk oplopend akkoord
  playTone(520,0.12,'sine',0.15);
  setTimeout(()=>playTone(660,0.12,'sine',0.15),80);
  setTimeout(()=>playTone(780,0.18,'sine',0.15),160);
}

function sfxWrong(){
  if(S.soundOn===false)return;
  // zacht dalend signaal
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
// ══════════════════════════════════════════════════════
let _ttsVoice=null;
let _ttsReady=false;

function _loadVoices(){
  if(!('speechSynthesis' in window))return;
  const vs=window.speechSynthesis.getVoices();
  if(!vs.length)return;
  _ttsReady=true;
  // Zoek beste stem voor Arabisch schrift: fa > ar > ur > fallback
  _ttsVoice=
    vs.find(v=>v.lang==='fa-AF')||
    vs.find(v=>v.lang.startsWith('fa'))||
    vs.find(v=>v.lang.startsWith('ar'))||
    vs.find(v=>v.lang.startsWith('ur'))||
    vs.find(v=>v.default)||
    vs[0]||null;
}

if('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged=_loadVoices;
  _loadVoices();
}

function speakHz(text){
  if(S.soundOn===false||!('speechSynthesis' in window)||!text)return;
  // Voices kunnen nog niet geladen zijn — probeer opnieuw
  if(!_ttsReady)_loadVoices();
  window.speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(text);
  if(_ttsVoice) utt.voice=_ttsVoice;
  utt.lang=_ttsVoice?_ttsVoice.lang:'fa';
  utt.rate=0.78;
  utt.pitch=1.0;
  utt.onerror=()=>{};
  window.speechSynthesis.speak(utt);
}

function testAudio(){
  if(!('speechSynthesis' in window)){
    showToast('❌ Spraak niet beschikbaar in deze browser');return;
  }
  _loadVoices();
  const vs=window.speechSynthesis.getVoices();
  if(!vs.length){
    showToast('❌ Geen stemmen gevonden — probeer Chrome');return;
  }
  const label=_ttsVoice?`✅ Stem: ${_ttsVoice.name} (${_ttsVoice.lang})`:'⚠️ Geen geschikte stem';
  showToast(label);
  speakHz('سلام');
}
