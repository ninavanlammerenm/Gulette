// ══════════════════════════════════════════════════════
// OVERHORING — standalone quiz (no hearts, no lessons)
// ══════════════════════════════════════════════════════
let _ovhWords=[], _ovhIdx=0, _ovhScore=0, _ovhErrors=[], _ovhChoices=[];
let _ovhTimer=false, _ovhTimerID=null, _ovhTimerSec=0;

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
    b.querySelector('.ovh-size-sub').textContent=total<n?'Niet genoeg woorden':b.dataset.sub;
  });
  _ovhTimer=false;
  const tb=document.getElementById('ovh-timer-toggle');
  if(tb)tb.classList.remove('on');
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

function startOvhoring(n, wordList){
  if(wordList){
    // retry-modus: wordList is array van {hz, v, dir}
    _ovhWords=wordList;
  } else {
    const words=Object.entries(S.vocab);
    const pool=Math.min(n, words.length);
    const sorted=[...words].sort(([,a],[,b])=>{
      const dueA=!a.nr||new Date(a.nr)<=new Date()?0:1;
      const dueB=!b.nr||new Date(b.nr)<=new Date()?0:1;
      if(dueA!==dueB)return dueA-dueB;
      return (a.mastery||0)-(b.mastery||0);
    });
    _ovhWords=shuffle(sorted.slice(0,pool)).map(([hz,v])=>({
      hz, v,
      dir: Math.random()>.5?'hz_nl':'nl_hz'
    }));
  }
  _ovhIdx=0; _ovhScore=0; _ovhErrors=[];
  document.getElementById('ovh-setup').style.display='none';
  document.getElementById('ovh-quiz').style.display='flex';
  renderOvh();
}

function renderOvh(){
  if(_ovhTimerID){clearInterval(_ovhTimerID);_ovhTimerID=null;}
  const total=_ovhWords.length;
  const prog=Math.round(_ovhIdx/total*100);
  document.getElementById('ovh-prog').style.width=prog+'%';
  document.getElementById('ovh-counter').textContent=_ovhIdx<total?`${_ovhIdx+1} / ${total}`:'Klaar!';

  if(_ovhIdx>=total){ renderOvhResult(); return; }

  const {hz,v,dir}=_ovhWords[_ovhIdx];
  const allWords=Object.entries(S.vocab);
  const ltrs=['A','B','C','D'];

  let prompt, correct;
  if(dir==='hz_nl'){
    const pron=(v.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>');
    const dutch=toDutchPhonetic(v.tr);
    prompt=`<div class="ovh-hz-word">${hz}</div><div class="ovh-dutch">🗣️ ${dutch}</div><div class="ovh-latin">🔊 ${pron}</div>`;
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
    <div class="type-pill">${dir==='hz_nl'?'Wat betekent dit?':'Hoe schrijf je dit?'}</div>
    <div class="ovh-prompt">${prompt}</div>
    <div class="choices">${_ovhChoices.map((c,i)=>`
      <button class="ch-btn${isRTL?' ch-rtl':''}" onclick="answerOvh(this,${i})">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}
    </div>`;

  if(_ovhTimer){
    _ovhTimerSec=10;
    _ovhTimerID=setInterval(()=>{
      _ovhTimerSec--;
      const el=document.getElementById('ovh-timer');
      if(el){el.textContent=_ovhTimerSec;if(_ovhTimerSec<=3)el.classList.add('urgent');}
      if(_ovhTimerSec<=0){
        clearInterval(_ovhTimerID);_ovhTimerID=null;
        document.querySelectorAll('#ovh-body .ch-btn').forEach((b,i)=>{
          b.disabled=true;
          if(_ovhChoices[i]===correct)b.classList.add('ok');
        });
        // ── Fout door timer: registreer als fout ──
        _registerOvhError(hz, v, '—', correct, dir);
        sfxWrong();
        setTimeout(()=>{_ovhIdx++;renderOvh();},1200);
      }
    },1000);
  }
}

// ── Centrale fout-registratie voor de overhoring ──
// Zorgt dat fouten altijd in S.vocab.errors terechtkomen,
// ook als het woord om wat voor reden nog niet in vocab zit.
function _registerOvhError(hz, v, chosen, correct, dir){
  // Zorg dat het woord in vocab staat (kan ontbreken bij retry-modus)
  if(!S.vocab[hz]){
    S.vocab[hz]={nl:v.nl, tr:v.tr||'', mastery:0, nr:null, errors:0};
  }
  // errors ophogen — dit is de kern van de fix
  S.vocab[hz].errors=(S.vocab[hz].errors||0)+1;

  // updMastery regelt mastery + next-review datum
  updMastery(hz, false);

  // Bewaar voor het eindresultaat-scherm
  _ovhErrors.push({hz, v, chosen, correct, dir});
}

function answerOvh(btn,idx){
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
    updMastery(hz,true);
  } else {
    btn.classList.add('ng');
    document.querySelectorAll('#ovh-body .ch-btn').forEach((b,i)=>{
      if(_ovhChoices[i]===correct) b.classList.add('ok');
    });
    // ── Gebruik centrale fout-registratie ──
    _registerOvhError(hz, v, chosen, correct, dir);
    sfxWrong();
  }
  save();
  setTimeout(()=>{_ovhIdx++;renderOvh();},ok?700:1300);
}

function retryOvhErrors(){
  const errorWords=_ovhErrors.map(({hz,v,dir})=>({hz,v,dir:dir==='hz_nl'?'nl_hz':'hz_nl'}));
  startOvhoring(0, errorWords);
}

function renderOvhResult(){
  const total=_ovhWords.length;
  const pct=Math.round(_ovhScore/total*100);
  const emoji=pct===100?'🌟':pct>=80?'🎉':pct>=60?'🌸':'💪';
  const msg=pct===100?'Foutloos! Absoluut perfect!':pct>=80?'Heel goed gedaan!':pct>=60?'Goed bezig, blijf oefenen!':'Meer oefenen loont!';

  const errHTML=_ovhErrors.length?`
    <div class="ovh-errs">
      <div class="ovh-errs-ttl">Fouten (${_ovhErrors.length})</div>
      ${_ovhErrors.map(({hz,v,chosen,correct,dir})=>`
        <div class="ovh-err-row">
          <div class="ovh-err-hz">${hz}</div>
          <div class="ovh-err-detail">
            <span class="ovh-err-ok">Correct: ${correct}</span>
            <span class="ovh-err-ng">Jij: ${chosen}</span>
          </div>
        </div>`).join('')}
    </div>`:'<div class="ovh-perfect">Geen fouten — perfect!</div>';

  document.getElementById('ovh-body').innerHTML=`
    <div class="ovh-result">
      <div class="ovh-res-emoji">${emoji}</div>
      <div class="ovh-res-score">${_ovhScore}<span>/${total}</span></div>
      <div class="ovh-res-pct">${pct}% correct</div>
      <div class="ovh-res-msg">${msg}</div>
      <div class="ovh-res-btns">
        <button class="btn-check" style="position:static" onclick="startOvhoring(${total})">Opnieuw</button>
        ${_ovhErrors.length?`<button class="btn-check" style="position:static;background:linear-gradient(135deg,var(--peach),#e07040)" onclick="retryOvhErrors()">🔁 Fouten herhalen (${_ovhErrors.length})</button>`:''}
        <button class="btn-check" style="position:static;background:var(--ink)" onclick="closeOvhoring()">Klaar</button>
      </div>
      ${errHTML}
    </div>`;
}