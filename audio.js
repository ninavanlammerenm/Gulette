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
let _ttsGood=false; // heeft een Arabisch-capabele stem

function _loadVoices(){
  if(!('speechSynthesis' in window))return;
  const vs=window.speechSynthesis.getVoices();
  if(!vs.length)return;
  _ttsReady=true;
  const good=
    vs.find(v=>v.lang==='fa-AF')||
    vs.find(v=>v.lang.startsWith('fa'))||
    vs.find(v=>v.lang.startsWith('ar'))||
    vs.find(v=>v.lang.startsWith('ur'));
  if(good){
    _ttsVoice=good;_ttsGood=true;
  }else{
    // Geen Arabisch-capabele stem — gebruik standaardstem (nl/whatever)
    _ttsVoice=vs.find(v=>v.default)||vs[0]||null;
    _ttsGood=false;
  }
}

if('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged=_loadVoices;
  _loadVoices();
}

// Zoek romanisering (tr) van een Arabisch woord op in de lesdata
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

function speakHz(text){
  if(S.soundOn===false||!('speechSynthesis' in window)||!text)return;
  if(!_ttsReady)_loadVoices();

  let speak=text;
  let lang=_ttsVoice?_ttsVoice.lang:'fa';

  if(!_ttsGood){
    // Geen Arabische stem — spreek de romanisering uit met beschikbare stem
    const roman=_findRoman(text);
    if(!roman)return; // kan niet zonder romanisering
    speak=roman;
    lang=_ttsVoice?_ttsVoice.lang:'nl';
  }

  window.speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(speak);
  if(_ttsVoice)utt.voice=_ttsVoice;
  utt.lang=lang;
  utt.rate=_ttsGood?0.78:0.72;
  utt.pitch=1.0;
  utt.onerror=()=>{};
  window.speechSynthesis.speak(utt);
}

function testAudio(){
  if(!('speechSynthesis' in window)){showToast('❌ Spraak niet beschikbaar');return;}
  _loadVoices();
  if(!_ttsReady){showToast('❌ Geen stemmen — probeer Chrome');return;}
  if(_ttsGood){
    showToast(`✅ ${_ttsVoice.name} (${_ttsVoice.lang})`);
    speakHz('سلام');
  }else{
    showToast(`🔤 Stem: ${_ttsVoice?_ttsVoice.name:'geen'} — spreekt romanisering uit`);
    // Spreek "salam" direct uit als test
    window.speechSynthesis.cancel();
    const utt=new SpeechSynthesisUtterance('salam');
    if(_ttsVoice)utt.voice=_ttsVoice;
    utt.lang=_ttsVoice?_ttsVoice.lang:'nl';
    utt.rate=0.72;
    window.speechSynthesis.speak(utt);
  }
}
