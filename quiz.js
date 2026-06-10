// ══════════════════════════════════════════════════════
// OVERHORING — adaptieve standalone quiz
// Mastery-aware: richting & oefentype worden bepaald per woord
//   mastery 0   → introductiekaart → MC
//   mastery 1   → MC + 45% kans op typoefening
//   mastery 2-3 → MC beide richtingen gemengd
//   mastery 4-5 → nl→hz (moeilijkste richting)
// Verdient XP, updatet SRS en streak.
// ══════════════════════════════════════════════════════
let _ovhWords=[], _ovhIdx=0, _ovhScore=0, _ovhErrors=[], _ovhChoices=[];
let _ovhTimer=false, _ovhTimerID=null, _ovhTimerSec=0;

// ══════════════════════════════════════════════════════
// SETUP
// ══════════════════════════════════════════════════════
function openOvhSetup(){
  const total=Object.keys(S.vocab).length;
  if(total<4){showToast('Leer eerst meer woorden! Voltooi een les. 📚');return;}
  document.getElementById('ovh-setup').style.display='flex';
  document.getElementById('ovh-quiz').style.display='none';
  document.getElementById('ovh-overlay').classList.add('open');
  document.getElementById('ovh-total-lbl').textContent=total+' woorden beschikbaar';
  document.querySelectorAll('.ovh-size-btn').forEach(b=>{
    const n=+b.dataset.n;
    b.disabled=total<n;
    b.querySelector('.ovh-size-sub').textContent=total<n?'Niet genoeg':b.dataset.sub;
  });
  _ovhTimer=false;
  const tb=document.getElementById('ovh-timer-toggle');
  if(tb){tb.textContent='Uit';tb.classList.remove('on');}
}

function closeOvhoring(){
  if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
  document.getElementById('ovh-overlay').classList.remove('open');
}

function toggleOvhTimer(btn){
  _ovhTimer=!_ovhTimer;
  btn.textContent=_ovhTimer?'Aan':'Uit';
  btn.classList.toggle('on',_ovhTimer);
}

// ══════════════════════════════════════════════════════
// HELPERS — richting & type op basis van mastery
// ══════════════════════════════════════════════════════
function _ovhDir(mastery){
  if(mastery<=1) return 'hz_nl';
  if(mastery>=4) return Math.random()>0.35?'nl_hz':'hz_nl';
  return Math.random()>0.5?'hz_nl':'nl_hz';
}

function _ovhQtype(hz, mastery){
  if(hz.includes('↔')) return 'mc';
  if(mastery===0)       return 'intro';
  // mastery 1-2: 50% kans op typoefening — consistent met dagelijkse herhaling
  if(mastery<=2&&Math.random()>0.5) return 'type';
  return 'mc';
}

// ══════════════════════════════════════════════════════
// SESSION STARTEN
// ══════════════════════════════════════════════════════
function openOvhDirect(wordList){
  document.getElementById('ovh-overlay').classList.add('open');
  startOvhoring(0,wordList);
}

function startOvhoring(n, wordList){
  if(wordList){
    _ovhWords=wordList.map(w=>({...w, qtype:w.qtype||'mc'}));
  } else {
    const words=Object.entries(S.vocab);
    const pool=Math.min(n>=9999?words.length:n, words.length);
    // Sorteer: review-klaar eerst, daarna lage mastery
    const sorted=[...words].sort(([,a],[,b])=>{
      const dA=!a.nr||new Date(a.nr)<=new Date()?0:1;
      const dB=!b.nr||new Date(b.nr)<=new Date()?0:1;
      if(dA!==dB)return dA-dB;
      return (a.mastery||0)-(b.mastery||0);
    });
    _ovhWords=shuffle(sorted.slice(0,pool)).map(([hz,v])=>{
      const m=v.mastery||0;
      return {hz, v, dir:_ovhDir(m), qtype:_ovhQtype(hz,m)};
    });
  }
  _ovhIdx=0; _ovhScore=0; _ovhErrors=[];
  document.getElementById('ovh-setup').style.display='none';
  document.getElementById('ovh-quiz').style.display='flex';
  renderOvh();
}

// ══════════════════════════════════════════════════════
// RENDER DISPATCHER
// ══════════════════════════════════════════════════════
function renderOvh(){
  if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
  const total=_ovhWords.length;
  document.getElementById('ovh-prog').style.width=Math.round(_ovhIdx/total*100)+'%';
  document.getElementById('ovh-counter').textContent=
    _ovhIdx<total?`${_ovhIdx+1} / ${total}`:'Klaar!';
  if(_ovhIdx>=total){renderOvhResult();return;}

  const {hz,v,dir,qtype}=_ovhWords[_ovhIdx];
  if(qtype==='intro') { _renderOvhIntro(hz,v); return; }
  if(qtype==='type')  { _renderOvhType(hz,v);  return; }
  _renderOvhMC(hz,v,dir);
}

// ══════════════════════════════════════════════════════
// INTRODUCTIEKAART — nieuw woord tonen vóór de vraag
// ══════════════════════════════════════════════════════
function _renderOvhIntro(hz,v){
  const dutch=toDutchPhonetic(v.tr);
  document.getElementById('ovh-body').innerHTML=`
    <div class="type-pill">📖 Nieuw woord</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:14px">Leer dit woord:</p>
    <div class="hz-card">
      <span class="hz-script">${hz}</span>
      <span class="hz-dutch">🗣️ ${dutch}</span>
      <span class="hz-nl">= ${v.nl}</span>
    </div>
    ${v.tr?`<div class="word-tip-card">🔊 <strong>${v.tr}</strong></div>`:''}
    <div style="flex:1"></div>
    <button class="btn-check" style="position:static" id="ovh-intro-next">Ik heb het! Stel me een vraag 🌸</button>`;
  document.getElementById('ovh-intro-next').addEventListener('click',()=>{
    // Zet naar MC voor hetzelfde woord (hz→nl voor nieuw woord)
    _ovhWords[_ovhIdx]={..._ovhWords[_ovhIdx], qtype:'mc', dir:'hz_nl'};
    renderOvh();
  });
}

// ══════════════════════════════════════════════════════
// MULTIPLE CHOICE VRAAG
// ══════════════════════════════════════════════════════
function _renderOvhMC(hz,v,dir){
  const allWords=Object.entries(S.vocab);
  const ltrs=['A','B','C','D'];
  let prompt, correct;

  if(dir==='hz_nl'){
    const pron=(v.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>');
    const dutch=toDutchPhonetic(v.tr);
    prompt=`<div class="ovh-hz-word">${hz}</div>
             <div class="ovh-dutch">🗣️ ${dutch}</div>
             <div class="ovh-latin">🔊 ${pron}</div>`;
    correct=v.nl;
    const dist=shuffle(allWords.filter(([h])=>h!==hz)).slice(0,3).map(([,d])=>d.nl);
    _ovhChoices=shuffle([correct,...dist]);
  } else {
    prompt=`<div class="ovh-nl-word">${v.nl}</div>`;
    correct=hz;
    const dist=shuffle(allWords.filter(([h])=>h!==hz)).slice(0,3).map(([h])=>h);
    _ovhChoices=shuffle([correct,...dist]);
  }

  const isRTL=dir==='nl_hz';
  const timerHTML=_ovhTimer?`<div class="ovh-timer" id="ovh-timer">10</div>`:'';
  document.getElementById('ovh-body').innerHTML=`
    ${timerHTML}
    <div class="type-pill">${dir==='hz_nl'?'🎯 Wat betekent dit?':'🔤 Hoe schrijf je dit?'}</div>
    <div class="ovh-prompt">${prompt}</div>
    <div class="choices">${_ovhChoices.map((c,i)=>`
      <button class="ch-btn${isRTL?' ch-rtl':''}" onclick="answerOvh(this,${i})">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}
    </div>
    <button class="wik-btn" onclick="dontKnowOvh()">Weet ik niet 🤷</button>`;

  if(_ovhTimer) _startOvhTimer(hz,v,correct,dir,10);
}

// ══════════════════════════════════════════════════════
// TYPOEFENING IN DE OVERHORING
// ══════════════════════════════════════════════════════
function _renderOvhType(hz,v){
  const dutch=toDutchPhonetic(v.tr);
  const timerHTML=_ovhTimer?`<div class="ovh-timer" id="ovh-timer">15</div>`:'';
  document.getElementById('ovh-body').innerHTML=`
    ${timerHTML}
    <div class="type-pill">⌨️ Actief ophalen</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:16px">Typ het Hazaragi woord voor:</p>
    <div class="hz-card" style="margin-bottom:16px">
      <span class="hz-nl" style="font-size:22px;font-weight:900;color:var(--ink)">${v.nl}</span>
      <span class="hz-dutch">🗣️ ${dutch}</span>
    </div>
    <input class="t-inp" id="ovh-t-inp" inputmode="text" lang="fa" dir="rtl"
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
      placeholder="Typ in Hazaragi schrift...">
    <div class="t-hint" id="ovh-t-hint"></div>
    <button class="hint-btn" id="ovh-hint-btn">💡 Toon antwoord</button>
    <div style="flex:1"></div>
    <button class="btn-check" id="ovh-type-check" style="position:static">Controleer ✓</button>`;

  const inp=document.getElementById('ovh-t-inp');
  const hintEl=document.getElementById('ovh-t-hint');
  const hintBtn=document.getElementById('ovh-hint-btn');
  const checkBtn=document.getElementById('ovh-type-check');
  let peeked=false;

  function showAnswer(){
    if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
    const timerEl=document.getElementById('ovh-timer');
    if(timerEl)timerEl.style.display='none';
    peeked=true;
    hintEl.innerHTML=`
      <div style="font-size:11px;font-weight:800;color:var(--rose-d);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">✍️ Schrijf dit over:</div>
      <div style="font-family:'Noto Naskh Arabic',serif;font-size:36px;direction:rtl;text-align:center;color:var(--ink);font-weight:700;background:var(--rose-xl);border-radius:var(--r-sm);padding:12px">${hz}</div>`;
    hintEl.classList.add('show');
    hintBtn.disabled=true;
    checkBtn.textContent='Schrijf het over ✍️';
    checkBtn.style.background='linear-gradient(135deg,var(--peach),#e07040)';
    inp.value=''; inp.focus();
  }

  if(_ovhTimer) _startOvhTimer(hz,v,hz,'nl_hz',15);

  hintBtn.addEventListener('click', showAnswer);

  function doCheck(){
    const val=inp.value.trim();
    if(!val){inp.focus();return;}
    if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
    if(normAr(val)===normAr(hz)){
      inp.classList.add('ok');
      sfxCorrect();
      if(!peeked){
        _ovhScore++;
        updMastery(hz, true);
      }
      // peeked=true: updMastery al aangeroepen bij _registerOvhError — niet nogmaals aanroepen
      save();
      setTimeout(()=>{_ovhIdx++;renderOvh();}, 600);
    } else {
      sfxWrong();
      if(!peeked) _registerOvhError(hz,v,val,hz,'nl_hz');
      inp.classList.add('ng');
      setTimeout(()=>{ inp.classList.remove('ng'); showAnswer(); }, 600);
    }
  }

  checkBtn.addEventListener('click', doCheck);
  inp.addEventListener('input', ()=>inp.classList.remove('ok','ng'));
  inp.addEventListener('keydown', e=>{ if(e.key==='Enter') doCheck(); });
  setTimeout(()=>inp.focus(), 120);
}

// ══════════════════════════════════════════════════════
// TIMER HELPER
// ══════════════════════════════════════════════════════
function _startOvhTimer(hz,v,correct,dir,secs){
  _ovhTimerSec=secs;
  _ovhTimerID=setInterval(()=>{
    _ovhTimerSec--;
    const el=document.getElementById('ovh-timer');
    if(el){ el.textContent=_ovhTimerSec; if(_ovhTimerSec<=3) el.classList.add('urgent'); }
    if(_ovhTimerSec<=0){
      clearInterval(_ovhTimerID); _ovhTimerID=null;
      // Markeer juiste antwoord zichtbaar bij MC
      document.querySelectorAll('#ovh-body .ch-btn').forEach((b,i)=>{
        b.disabled=true;
        if(_ovhChoices&&_ovhChoices[i]===correct) b.classList.add('ok');
      });
      _registerOvhError(hz,v,'—',correct,dir);
      sfxWrong();
      setTimeout(()=>{_ovhIdx++;renderOvh();}, 1200);
    }
  }, 1000);
}

// ══════════════════════════════════════════════════════
// ANTWOORD VERWERKEN (MC)
// ══════════════════════════════════════════════════════
function answerOvh(btn, idx){
  if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
  const {hz,v,dir}=_ovhWords[_ovhIdx];
  const chosen=_ovhChoices[idx];
  const correct=dir==='hz_nl'?v.nl:hz;
  document.querySelectorAll('#ovh-body .ch-btn').forEach(b=>b.disabled=true);
  const ok=chosen===correct;
  if(ok){
    btn.classList.add('ok');
    _ovhScore++;
    sfxCorrect();
    updMastery(hz, true);
  } else {
    btn.classList.add('ng');
    document.querySelectorAll('#ovh-body .ch-btn').forEach((b,i)=>{
      if(_ovhChoices[i]===correct) b.classList.add('ok');
    });
    _registerOvhError(hz,v,chosen,correct,dir);
    sfxWrong();
  }
  save();
  setTimeout(()=>{_ovhIdx++;renderOvh();}, ok?700:1300);
}

// ══════════════════════════════════════════════════════
// FOUT REGISTREREN
// ══════════════════════════════════════════════════════
function _registerOvhError(hz,v,chosen,correct,dir){
  if(!S.vocab[hz]) S.vocab[hz]={nl:v.nl,tr:v.tr||'',mastery:0,nr:null,errors:0};
  S.vocab[hz].errors=(S.vocab[hz].errors||0)+1;
  updMastery(hz, false);
  _ovhErrors.push({hz,v,chosen,correct,dir});
}

// ══════════════════════════════════════════════════════
// FOUTEN HERHALEN
// ══════════════════════════════════════════════════════
function retryOvhErrors(){
  startOvhoring(0, _ovhErrors.map(({hz,v,dir})=>({
    hz, v,
    dir: dir==='hz_nl'?'nl_hz':'hz_nl', // flip richting
    qtype: 'mc'
  })));
}

// ══════════════════════════════════════════════════════
// WEET IK NIET
// ══════════════════════════════════════════════════════
function dontKnowOvh(){
  if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
  const {hz,v,dir}=_ovhWords[_ovhIdx];
  const correct=dir==='hz_nl'?v.nl:hz;
  document.querySelectorAll('#ovh-body .ch-btn').forEach((b,i)=>{
    b.disabled=true;
    if(_ovhChoices[i]===correct)b.classList.add('ok');
  });
  document.querySelector('.wik-btn')?.remove();
  _registerOvhError(hz,v,'—',correct,dir);
  sfxWrong();
  setTimeout(()=>{_ovhIdx++;renderOvh();},1200);
}

// ══════════════════════════════════════════════════════
// RESULTATEN
// ══════════════════════════════════════════════════════
function renderOvhResult(){
  const total=_ovhWords.length;
  const pct=Math.round(_ovhScore/total*100);
  const emoji=pct===100?'🌟':pct>=80?'🎉':pct>=60?'🌸':'💪';
  const msg=pct===100?'Foutloos! Absoluut perfect!':
            pct>=80?'Heel goed gedaan!':
            pct>=60?'Goed bezig — blijf oefenen!':
            'Meer oefenen loont!';

  // XP verdienen: 3 per correct, -0.5 per fout (min 0)
  const xpEarned=Math.max(0, Math.round(_ovhScore*3 - _ovhErrors.length*0.5));
  if(xpEarned>0){
    S.xp+=xpEarned;
    logXP(xpEarned);
    updStreak();
    checkShieldAward();
    checkAchv();
    save();
  }

  const errHTML=_ovhErrors.length?`
    <div class="ovh-errs">
      <div class="ovh-errs-ttl">❌ Fouten (${_ovhErrors.length})</div>
      ${_ovhErrors.map(({hz,v,chosen,correct})=>`
        <div class="ovh-err-row">
          <div class="ovh-err-hz">${hz}</div>
          <div class="ovh-err-detail">
            <span class="ovh-err-ok">✓ ${correct}</span>
            <span class="ovh-err-ng">✗ ${chosen}</span>
          </div>
        </div>`).join('')}
    </div>`:'<div class="ovh-perfect">🎀 Geen fouten — perfect!</div>';

  document.getElementById('ovh-body').innerHTML=`
    <div class="ovh-result">
      <div class="ovh-res-emoji">${emoji}</div>
      <div class="ovh-res-score">${_ovhScore}<span>/${total}</span></div>
      <div class="ovh-res-pct">${pct}% correct</div>
      <div class="ovh-res-msg">${msg}</div>
      ${xpEarned>0?`<div style="font-size:16px;font-weight:900;color:var(--rose-d);margin:6px 0 10px">⭐ +${xpEarned} XP verdiend!</div>`:''}
      <div class="ovh-res-btns">
        <button class="btn-check" style="position:static" onclick="startOvhoring(${total})">🔄 Opnieuw</button>
        ${_ovhErrors.length?`<button class="btn-check" style="position:static;background:linear-gradient(135deg,var(--peach),#e07040)" onclick="retryOvhErrors()">🔁 Fouten (${_ovhErrors.length})</button>`:''}
        <button class="btn-check" style="position:static;background:var(--ink)" onclick="closeOvhoring()">Klaar ✓</button>
      </div>
      ${errHTML}
    </div>`;
}
