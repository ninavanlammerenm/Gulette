// ══════════════════════════════════════════════════════
// OVERHORING — standalone quiz (no hearts, no lessons)
// ══════════════════════════════════════════════════════
let _ovhWords=[], _ovhIdx=0, _ovhScore=0, _ovhErrors=[], _ovhChoices=[];

function openOvhSetup(){
  const total=Object.keys(S.vocab).length;
  if(total<4){showToast('Leer eerst meer woorden! Voltooi een les. 📚');return;}
  const cap=n=>Math.min(n,total);
  document.getElementById('ovh-setup').style.display='flex';
  document.getElementById('ovh-quiz').style.display='none';
  document.getElementById('ovh-overlay').classList.add('open');
  document.getElementById('ovh-total-lbl').textContent=total+' woorden beschikbaar';
  // disable buttons if not enough words
  document.querySelectorAll('.ovh-size-btn').forEach(b=>{
    const n=+b.dataset.n;
    b.disabled=total<n;
    b.querySelector('.ovh-size-sub').textContent=total<n?'Niet genoeg woorden':b.dataset.sub;
  });
}

function closeOvhoring(){
  document.getElementById('ovh-overlay').classList.remove('open');
}

function startOvhoring(n){
  const words=Object.entries(S.vocab);
  const pool=Math.min(n, words.length);
  // sort: due + low mastery first, then shuffle the top pool
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
  _ovhIdx=0; _ovhScore=0; _ovhErrors=[];
  document.getElementById('ovh-setup').style.display='none';
  document.getElementById('ovh-quiz').style.display='flex';
  renderOvh();
}

function renderOvh(){
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
    prompt=`<div class="ovh-hz-word">${hz}</div><div class="ovh-latin">${v.tr||''}</div>`;
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
  document.getElementById('ovh-body').innerHTML=`
    <div class="type-pill">${dir==='hz_nl'?'Wat betekent dit?':'Hoe schrijf je dit?'}</div>
    <div class="ovh-prompt">${prompt}</div>
    <div class="choices">${_ovhChoices.map((c,i)=>`
      <button class="ch-btn${isRTL?' ch-rtl':''}" onclick="answerOvh(this,${i})">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}
    </div>`;
}

function answerOvh(btn,idx){
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
    _ovhErrors.push({hz,v,chosen,correct,dir});
    sfxWrong();
    updMastery(hz,false);
  }
  save();
  setTimeout(()=>{_ovhIdx++;renderOvh();},ok?700:1300);
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
        <button class="btn-check" style="position:static;background:var(--ink)" onclick="closeOvhoring()">Klaar</button>
      </div>
      ${errHTML}
    </div>`;
}
