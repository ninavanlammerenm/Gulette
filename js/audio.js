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

function haptic(pattern){
  if(navigator.vibrate) navigator.vibrate(pattern);
}

function sfxCorrect(){
  haptic(50);
  if(S.soundOn===false)return;
  playTone(520,0.12,'sine',0.15);
  setTimeout(()=>playTone(660,0.12,'sine',0.15),80);
  setTimeout(()=>playTone(780,0.18,'sine',0.15),160);
}

function sfxWrong(){
  haptic([40,30,80]);
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
// Strategie: kies expliciet de Perzische stem (fa/fa-IR) als die er is,
// anders lang='fa-IR' en laat het systeem kiezen.
// Bij fout: spreek romanisering uit met standaardstem.
// ══════════════════════════════════════════════════════

const TTS_CORRECTIONS={'آو':'او','آش':'اش','چتوری':'چه‌طوری'};
const TTS_FALLBACK_WORDS=new Set(['آو','آش']);

function speakHz(text, trOrSlow, slow){
  if(S.soundOn===false||!('speechSynthesis' in window)||!text)return;
  if(typeof bjKey==='function') text=bjKey(text);
  window.speechSynthesis.cancel();
  let tr=null;
  if(typeof trOrSlow==='string') tr=trOrSlow;
  else if(typeof trOrSlow==='boolean') slow=trOrSlow;

  if(TTS_FALLBACK_WORDS.has(text)&&tr){
    const utt=new SpeechSynthesisUtterance(tr);
    utt.lang='nl';
    utt.rate=slow?0.5:0.82;
    utt.pitch=1.0;
    window.speechSynthesis.speak(utt);
    return;
  }

  let corrected=text;
  for(const [from,to] of Object.entries(TTS_CORRECTIONS)){
    corrected=corrected.split(from).join(to);
  }
  const utt=new SpeechSynthesisUtterance(corrected);
  // Na telefoon-updates pikt lang='fa' alleen niet altijd meer de stem op:
  // kies de Perzische stem daarom expliciet als die er is
  const v=_faVoice||_pickFaVoice();
  if(v){ utt.voice=v; utt.lang=v.lang; } else utt.lang='fa-IR';
  utt.rate=slow?0.5:0.78;
  utt.pitch=1.0;
  // iOS slikt soms een spreekopdracht direct na cancel(): even wachten
  setTimeout(()=>{ try{ window.speechSynthesis.resume(); }catch(e){} window.speechSynthesis.speak(utt); },60);
}

let _faVoice=null;
function _pickFaVoice(){
  if(!('speechSynthesis' in window)) return null;
  const vs=window.speechSynthesis.getVoices()||[];
  _faVoice=vs.find(v=>/^(fa|prs|pes)([-_]|$)/i.test(v.lang))||vs.find(v=>/persian|farsi|dari|perzisch|persisch/i.test(v.name))||null;
  return _faVoice;
}
if('speechSynthesis' in window){
  _pickFaVoice();
  try{ window.speechSynthesis.addEventListener('voiceschanged',_pickFaVoice); }catch(e){ window.speechSynthesis.onvoiceschanged=_pickFaVoice; }
}

function testAudio(){
  if(!('speechSynthesis' in window)){showToast('❌ Spraak niet beschikbaar op dit apparaat');return;}
  const v=_pickFaVoice();
  const isIOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  let msg;
  if(v){
    msg='🔊 Perzische stem: '+v.name+' ('+v.lang+')';
  } else if(isIOS){
    msg='⚠️ Geen Perzische stem gevonden. Ga naar Instellingen › Toegankelijkheid › Gesproken materiaal › Stemmen › Perzisch en download een stem. Sluit daarna de app helemaal af en open hem opnieuw.';
  } else {
    msg='⚠️ Geen Perzische stem gevonden. Ga naar Instellingen › Tekst-naar-spraak › Google Spraakservices › Spraakgegevens installeren › Perzisch. Sluit daarna de app af en open hem opnieuw.';
  }
  showToast(msg,v?3000:10000);
  speakHz('سلام');
}
