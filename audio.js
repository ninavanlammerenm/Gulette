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
// Strategie: probeer altijd lang='fa' (iOS pikt gedownloade
// Perzische stem automatisch op zonder getVoices() nodig).
// Bij fout: spreek romanisering uit met standaardstem.
// ══════════════════════════════════════════════════════

const TTS_CORRECTIONS={'آو':'او','آش':'اش'};
const TTS_FALLBACK_WORDS=new Set(['آو','آش']);

function speakHz(text, trOrSlow, slow){
  if(S.soundOn===false||!('speechSynthesis' in window)||!text)return;
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
  utt.lang='fa';
  utt.rate=slow?0.5:0.78;
  utt.pitch=1.0;
  window.speechSynthesis.speak(utt);
}

function testAudio(){
  if(!('speechSynthesis' in window)){showToast('❌ Spraak niet beschikbaar op dit apparaat');return;}
  const vs=window.speechSynthesis.getVoices();
  const fa=vs.filter(v=>v.lang.startsWith('fa'));
  let msg;
  if(fa.length){
    msg='🔊 Modus: Hazaragi (fa) — '+fa[0].name;
  } else {
    msg='⚠️ Geen Perzische stem gevonden — installeer een Perzische stemenpakket voor spraak';
  }
  showToast(msg);
  speakHz('سلام');
}
