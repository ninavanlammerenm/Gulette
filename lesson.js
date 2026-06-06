// ══════════════════════════════════════════════════════
// LES ENGINE
// ══════════════════════════════════════════════════════
let CL=null,EXS=[],EI=0,CC=0,WC=0,LXP=0,WAITING=false;
let REQUEUED=new Set();
let WRONG_WORDS=[],WRONG_SET=new Set();

function trackWrong(hz,nl,tr){
  if(WRONG_SET.has(hz))return;
  WRONG_SET.add(hz);
  WRONG_WORDS.push({hz,nl,tr:tr||''});
}

// Oefentype labels voor de voortgangsbalk
const EX_TYPE_LABELS={
  grammar:'📚 Les uitleg',
  intro:'📖 Nieuw woord',
  context:'🔍 Patroon',
  mc_nl:'🎯 Betekenis',
  mc_hz:'🔤 Hazaragi',
  wb:'🧩 Zin',
  type:'⌨️ Typen',
  cloze:'🧩 Vul in',
  repeat:'🔁 Herhaling'
};

function getLessonById(id){
  for(const ch of CHAPTERS)for(const l of ch.lessons)if(l.id===id)return l;
  return null;
}

function startLesson(id){
  CL=getLessonById(id);
  if(!CL)return;
  EXS=buildExercises(CL);
  EI=CC=WC=LXP=0;
  HEARTS=3;
  WAITING=false;
  REQUEUED=new Set();
  WRONG_WORDS=[];WRONG_SET=new Set();
  showScreen('lesson');
  document.getElementById('bnav').style.display='none';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  renderHearts();
  renderEx();
}

function buildExercises(lesson){
  const exs=[];
  const ws=[...lesson.words];
  const ss=lesson.sentences||[];

  // 0. Grammatica/taalregel kaart als eerste
  if(lesson.grammar) exs.push({type:'grammar',grammar:lesson.grammar,pronTips:lesson.pronTips||[]});

  // 1. Intro: contextual encoding — show word + matching sentence if available
  ws.slice(0,6).forEach(w=>{
    const ctxSentence=ss.find(s=>s.hz.includes(w.hz))||null;
    exs.push({type:'intro',w,ctxSentence});
  });

  // 2. Context card (inductive pattern recognition)
  if(ss.length>0)exs.push({type:'context',ss});

  // 3. Cloze: fill-in-the-blank in a sentence — contextual active recall
  ss.forEach(s=>{
    const match=ws.find(w=>s.hz.includes(w.hz));
    if(match){
      const d=ws.filter(x=>x.hz!==match.hz);
      if(d.length>=3)exs.push({type:'cloze',s,w:match,choices:shuffle([match.hz,...shuffle(d).slice(0,3).map(x=>x.hz)])});
    }
  });

  // 4. MC meaning (hz→nl): recognition
  shuffle(ws).slice(0,5).forEach(w=>{
    const d=ws.filter(x=>x.hz!==w.hz);
    if(d.length>=3)exs.push({type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
  });

  // 5. MC hazaragi (nl→hz): production recognition
  shuffle(ws).slice(0,4).forEach(w=>{
    const d=ws.filter(x=>x.hz!==w.hz);
    if(d.length>=3)exs.push({type:'mc_hz',w,choices:shuffle([w.hz,...shuffle(d).slice(0,3).map(x=>x.hz)])});
  });

  // 6. Word bank (sentence ordering): output production
  ss.slice(0,2).forEach(s=>exs.push({type:'wb',s}));

  // 7. Typing (active recall): strongest encoding
  shuffle(ws).slice(0,3).forEach(w=>exs.push({type:'type',w}));

  // 8. Final MC round: spaced retrieval within session (interleaving effect)
  shuffle(ws).slice(0,4).forEach(w=>{
    const d=ws.filter(x=>x.hz!==w.hz);
    if(d.length>=3)exs.push({type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
  });

  return exs;
}

const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};

// ── Grammatica/taalregel kaart ──
function rGrammar(ex,body){
  const pronHTML=(ex.pronTips||[]).map(char=>{
    const t=PRONUN_TIPS[char];
    if(!t)return '';
    return `<div class="pron-badge">
      <span class="pron-badge-char">${char}</span>
      <div class="pron-badge-info"><strong>${t.latin}</strong> — ${t.tip}</div>
    </div>`;
  }).filter(Boolean).join('');

  body.innerHTML=`
    <div class="type-pill">📚 Les uitleg</div>
    <div class="grammar-card">
      <div class="grammar-title">💡 Taalregel van deze les</div>
      <div class="grammar-text">${ex.grammar}</div>
    </div>
    ${pronHTML?`<p style="font-size:12px;font-weight:900;color:var(--ink-l);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">🔊 Uitspraaktips</p><div class="pron-tips-list">${pronHTML}</div>`:''}
    <div style="flex:1"></div>
    <button class="btn-check" onclick="nextEx()">Start de les! 🌸</button>`;
}

function renderEx(){
  if(EI>=EXS.length){finishLesson();return;}
  const pct=Math.round(EI/EXS.length*100);
  document.getElementById('l-prog').style.width=pct+'%';

  const ex=EXS[EI];
  const typeLabel=ex.requeued?EX_TYPE_LABELS.repeat:(EX_TYPE_LABELS[ex.type]||'');
  document.getElementById('l-counter').textContent=`${typeLabel}  ${EI+1}/${EXS.length}`;

  hideFB();
  const body=document.getElementById('l-body');
  body.innerHTML='';
  body.scrollTop=0;
  window.scrollTo(0,0);

  if(ex.type==='grammar')  rGrammar(ex,body);
  else if(ex.type==='intro')    rIntro(ex,body);
  else if(ex.type==='context') rContext(ex,body);
  else if(ex.type==='cloze')   rCloze(ex,body);
  else if(ex.type==='mc_nl')   rMC_nl(ex,body);
  else if(ex.type==='mc_hz')   rMC_hz(ex,body);
  else if(ex.type==='wb')      rWB(ex,body);
  else if(ex.type==='type')    rType(ex,body);
  else nextEx();
}

// ── Intro card ──
function rIntro(ex,body){
  const w=ex.w;
  const pron=(w.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>');
  const s=ex.ctxSentence;
  // Highlight the word in the context sentence
  const ctxHTML=s?`
    <div class="ctx-mini">
      <div class="ctx-mini-hz">${s.hz.replace(w.hz,`<mark>${w.hz}</mark>`)}</div>
      <div class="hz-roman" style="font-size:13px;font-weight:800;color:var(--rose-d);font-style:italic;margin:3px 0 2px">🗣️ ${toDutchPhonetic(s.tr)}</div>
      <div class="ctx-mini-nl">"${s.nl}"</div>
    </div>`:'';
  const dutch=toDutchPhonetic(w.tr);
  body.innerHTML=`
    <div class="type-pill">📖 Nieuw woord</div>
    <div class="hz-card">
      <span class="hz-script">${w.hz}</span>
      <span class="hz-dutch">🗣️ ${dutch}</span>
      <span class="hz-nl">= ${w.nl}</span>
    </div>
    ${w.tip?`<div class="word-tip-card">💡 ${w.tip}</div>`:''}
    ${ctxHTML}
    <div style="flex:1"></div>
    <button class="btn-check" onclick="nextEx()">Begrepen! 🌸</button>`;
  if(!S.vocab[w.hz])S.vocab[w.hz]={nl:w.nl,tr:w.tr,mastery:0,nr:null};
  save();
}

// ── Herhaling bij fout antwoord ──
function requeueWrong(hz){
  if(REQUEUED.has(hz)) return false;
  REQUEUED.add(hz);
  const w=CL.words.find(x=>x.hz===hz);
  if(!w) return false;
  const d=CL.words.filter(x=>x.hz!==hz);
  if(d.length<3) return false;
  EXS.push({type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)]),requeued:true});
  return true;
}

// ── Context / inductief leren ──
function rContext(ex,body){
  const ss=ex.ss;
  const s=ss[Math.floor(Math.random()*ss.length)];
  body.innerHTML=`
    <div class="type-pill">🔍 Zie het patroon</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:14px">Lees de zin en ontdek de Hazaragi patronen:</p>
    <div class="ctx-card">
      <div class="ctx-title">🌐 Hazaragi zin</div>
      <div class="ctx-sentence">${s.hz}</div>
      <div class="ctx-tr">${s.tr}</div>
      <div class="ctx-nl">"${s.nl}"</div>
    </div>
    <div style="flex:1"></div>
    <button class="btn-check" onclick="nextEx()">Ik snap het! ✓</button>`;
}

// ── Cloze (fill-in-the-blank) ──
// Science: combines contextual encoding + active recall = highest retention
function rCloze(ex,body){
  const {s,w,choices}=ex;
  const ltrs=['A','B','C','D'];
  // Blank out the word in the sentence
  const blankedHz=s.hz.replace(w.hz,'<span class="cloze-blank">___</span>');
  body.innerHTML=`
    <div class="type-pill">🧩 Vul de zin aan</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:14px">Welk woord past in de zin?</p>
    <div class="ctx-card" style="margin-bottom:20px">
      <div class="ctx-sentence">${blankedHz}</div>
      <div class="ctx-tr">${s.tr.replace(w.tr,'___')}</div>
      <div class="ctx-nl">"${s.nl}"</div>
    </div>
    <div class="choices">${choices.map((c,i)=>`
      <button class="ch-btn ch-rtl" data-action="mc_hz" data-chosen="${c}" data-correct="${w.hz}" data-nl="${w.nl}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>
        <div style="display:flex;flex-direction:column;gap:2px">
          <span style="font-family:'Noto Naskh Arabic',serif;font-size:24px;direction:rtl;line-height:1.5">${c}</span>
          <span class="hz-roman" style="font-size:11px;font-weight:700;color:var(--ink-l);font-style:italic">${CL.words.find(x=>x.hz===c)?.tr||''}</span>
        </div>
      </button>`).join('')}
    </div>`;
}

function getPronTip(hz){
  for(const [char,data] of Object.entries(PRONUN_TIPS)){
    if(hz.includes(char))return `De letter <strong>${char}</strong> (${data.latin}): ${data.tip}`;
  }
  return null;
}

// ── MC nl (hz→nl) ──
function rMC_nl(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];
  body.innerHTML=`
    <div class="type-pill">🎯 Wat betekent dit?</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:18px">Wat betekent dit Hazaragi woord?</p>
    <div class="hz-card" style="margin-bottom:20px">
      <span class="hz-script">${w.hz}</span>
      <span class="hz-dutch">🗣️ ${toDutchPhonetic(w.tr)}</span>
      <span class="hz-latin">🔊 ${(w.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>')}</span>
    </div>
    <div class="choices">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_nl" data-chosen="${c}" data-correct="${w.nl}" data-hz="${w.hz}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
}

// ── MC hz (nl→hz) ──
function rMC_hz(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];
  const trMap={};
  ex.choices.forEach(c=>{
    const match=CL.words.find(x=>x.hz===c);
    if(match)trMap[c]=match.tr;
  });
  body.innerHTML=`
    <div class="type-pill">🔤 Kies Hazaragi</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:20px">Welk Hazaragi woord betekent <em style="color:var(--rose)">"${w.nl}"</em>?</p>
    <div class="choices">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_hz" data-chosen="${c}" data-correct="${w.hz}" data-nl="${w.nl}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>
        <div style="display:flex;flex-direction:column;gap:2px">
          <span style="font-family:'Noto Naskh Arabic',serif;font-size:24px;direction:rtl;line-height:1.5">${c}</span>
          ${trMap[c]?`<span class="hz-roman" style="font-size:11px;font-weight:700;color:var(--ink-l);font-style:italic">${trMap[c]}</span>`:''}
        </div>
      </button>`).join('')}</div>`;
}

// ── Word bank ──
function rWB(ex,body){
  const s=ex.s;
  const words=s.hz.split(' ').filter(Boolean);
  const shuf=shuffle(words);
  const correct=words.join(' ');

  body.innerHTML=`
    <div class="type-pill">🧩 Zin samenstellen</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:14px">Zet de Hazaragi woorden in volgorde:</p>
    <div style="background:var(--rose-xl);border-radius:var(--r-sm);padding:14px 16px;margin-bottom:16px">
      <div style="font-size:14px;font-weight:700;color:var(--ink-m)">"${s.nl}"</div>
      <div class="hz-roman" style="font-size:12px;font-weight:700;color:var(--rose);font-style:italic;margin-top:4px">${s.tr}</div>
    </div>
    <div class="wb-answer" id="wb-ans"></div>
    <div class="wb-bank" id="wb-bnk">${shuf.map(w=>`
      <button class="w-tile" data-action="wbmove" data-word="${w}">${w}</button>`).join('')}</div>
    <div style="flex:1"></div>
    <button class="btn-check" id="btn-check-wb" disabled>Controleer ✓</button>`;

  // Schakel knop in zodra er minstens één tegel geplaatst is
  const ansEl=document.getElementById('wb-ans');
  const observer=new MutationObserver(()=>{
    const count=ansEl.querySelectorAll('.ans').length;
    document.getElementById('btn-check-wb').disabled=count===0;
  });
  observer.observe(ansEl,{childList:true});

  document.getElementById('btn-check-wb').addEventListener('click', ()=>{ observer.disconnect(); chkWB(correct, s.nl, s.tr); });
}

function wbMove(tile, word){
  tile.classList.add('placed');
  const zone=document.getElementById('wb-ans');
  const t=document.createElement('button');
  t.className='w-tile ans';
  t.textContent=word;
  t.dataset.word=word;
  t.onclick=()=>{
    t.remove();
    tile.classList.remove('placed');
    const remaining=document.getElementById('wb-ans').querySelectorAll('.ans').length;
    if(remaining===0)document.getElementById('wb-ans').classList.remove('has');
  };
  zone.appendChild(t);
  zone.classList.add('has');
}

function chkWB(correct,nl,tr){
  const tiles=document.getElementById('wb-ans').querySelectorAll('.ans');
  const ans=Array.from(tiles).map(t=>t.dataset.word).join(' ');
  if(ans===correct){
    CC++;LXP+=8;
    sfxCorrect();
    showFB(true,'🎀 Correct!',nl,'');
    sparkles();
  }else{
    WC++;
    sfxWrong();
    loseHeart();
    showFB(false,'Niet helemaal!','Juist: '+tr,correct);
  }
}

// ── Type ──
function rType(ex,body){
  const w=ex.w;
  let hintLevel=0;
  let retryMode=false;

  body.innerHTML=`
    <div class="type-pill">⌨️ Actief ophalen</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:16px">Typ het Hazaragi woord voor:</p>
    <div class="hz-card" style="margin-bottom:18px">
      <span class="hz-nl" style="font-size:24px;font-weight:900;color:var(--ink)">${w.nl}</span>
      <span class="hz-dutch">🗣️ ${toDutchPhonetic(w.tr)}</span>
      <span class="hz-latin" style="margin-top:2px">${w.tr}</span>
    </div>
    <input class="t-inp" id="t-inp"
      inputmode="text"
      lang="fa"
      dir="rtl"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      placeholder="Typ in Hazaragi schrift...">
    <div class="t-hint" id="t-hint"></div>
    <button class="hint-btn" id="hint-btn">💡 Toon antwoord</button>
    <div style="flex:1"></div>
    <button class="btn-check" id="btn-check-type">Controleer ✓</button>`;

  const correct=w.hz;
  const inp=document.getElementById('t-inp');
  const hintBtn=document.getElementById('hint-btn');
  const hintEl=document.getElementById('t-hint');
  const checkBtn=document.getElementById('btn-check-type');

  function showCorrectAnswer(){
    hintEl.innerHTML=`
      <div style="font-size:12px;font-weight:800;color:var(--rose-d);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">✍️ Schrijf dit over:</div>
      <div style="font-family:'Noto Naskh Arabic',serif;font-size:42px;direction:rtl;text-align:center;color:var(--ink);line-height:1.6;font-weight:700;background:var(--rose-xl);border-radius:var(--r-sm);padding:12px">${correct}</div>`;
    hintEl.classList.add('show');
  }

  inp.addEventListener('input', ()=>{ inp.classList.remove('ok','ng'); });
  inp.addEventListener('keydown', e=>{ if(e.key==='Enter') doCheckType(); });
  checkBtn.addEventListener('click', doCheckType);

  hintBtn.addEventListener('click', ()=>{
    showCorrectAnswer();
    // Toon antwoord maar vul NOOIT het veld in — gebruiker moet zelf typen
    inp.value='';
    inp.focus();
    hintBtn.disabled=true;
    hintBtn.textContent='✓ Bekijk het antwoord hierboven';
    retryMode=true;
    checkBtn.textContent='Schrijf het over ✍️';
    checkBtn.style.background='linear-gradient(135deg,var(--peach),#e07040)';
  });

  function doCheckType(){
    const val=inp.value.trim();
    if(!val){ inp.focus(); return; }

    if(normAr(val)===normAr(correct)){
      inp.blur(); // toetsenbord sluiten zodat feedbackbalk op de juiste plek staat
      inp.classList.add('ok');
      sfxCorrect();
      if(retryMode){
        CC++;LXP+=5;
        sparkles();
        updMastery(correct,false);
        showFB(true,'✅ Overgetypt! Goed gedaan!',w.nl,correct);
      } else {
        CC++;LXP+=10;
        showFB(true,'✨ Uitstekend!',w.nl,correct);
        sparkles();
        updMastery(correct,true);
      }
    } else {
      if(!retryMode){
        WC++;
        sfxWrong();
        loseHeart();
        updMastery(correct,false);
        requeueWrong(correct);
        trackWrong(correct,w.nl,w.tr);
        retryMode=true;
      }
      // Fout: schud het veld, toon correct antwoord prominent, leeg het veld
      inp.blur(); // toetsenbord weg zodat animatie goed zichtbaar is
      inp.classList.add('ng');
      sfxWrong();
      showCorrectAnswer();
      hintBtn.style.display='none';
      checkBtn.textContent='Schrijf het over ✍️';
      checkBtn.style.background='linear-gradient(135deg,var(--peach),#e07040)';
      setTimeout(()=>{
        inp.value='';
        inp.classList.remove('ng');
        inp.focus();
      },700);
    }
  }

  setTimeout(()=>inp.focus(), 120);
}

const normAr=s=>s.replace(/[ًٌٍَُِّْ]/g,'').replace(/[آأإا]/g,'ا').replace(/[يی]/g,'ی').replace(/ة/g,'ه').trim();

// ── MC checks ──
function chkMC(btn,chosen,correct,hz,tr){
  if(WAITING)return;WAITING=true;
  document.querySelectorAll('.ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');CC++;LXP+=5;
    sfxCorrect();
    showFB(true,'🌸 Goed!',correct,hz);
    sparkles();
    updMastery(hz,true);
  }else{
    btn.classList.add('ng');WC++;
    sfxWrong();
    loseHeart();
    document.querySelectorAll('.ch-btn').forEach(b=>{
      const txt=b.childNodes[1]?.textContent?.trim()||b.querySelector('span:last-child')?.textContent?.trim()||'';
      if(txt===correct)b.classList.add('ok');
    });
    const requeued=requeueWrong(hz);
    trackWrong(hz,correct,tr);
    showFB(false,'Bijna!',`${hz} = ${correct}${requeued?' · 🔁 Komt later terug':''}`,hz);
    updMastery(hz,false);
  }
}

function chkMC_hz(btn,chosen,correct,nl,tr){
  if(WAITING)return;WAITING=true;
  document.querySelectorAll('.ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');CC++;LXP+=5;
    sfxCorrect();
    showFB(true,'🌸 Goed!',nl,correct);
    sparkles();
    updMastery(correct,true);
  }else{
    btn.classList.add('ng');WC++;
    sfxWrong();
    loseHeart();
    document.querySelectorAll('.ch-btn').forEach(b=>{
      const s=b.querySelector('span:last-child');
      if(s&&s.querySelector&&s.querySelector('[style*="direction"]')?.textContent?.trim()===correct)b.classList.add('ok');
      if(s&&!s.children.length&&s.textContent.trim()===correct)b.classList.add('ok');
    });
    const requeued=requeueWrong(correct);
    trackWrong(correct,nl,tr);
    showFB(false,'Bijna!',`Juist: ${correct} (${tr})${requeued?' · 🔁 Komt later terug':''}`,correct);
    updMastery(correct,false);
  }
}

// ── Feedback ──
function showFB(ok,title,hint,hzText){
  const bar=document.getElementById('fb-bar');
  bar.className='fb-bar '+(ok?'ok':'ng');
  document.getElementById('fb-ico').textContent=ok?'🎀':'🐰';
  document.getElementById('fb-ttl').textContent=title;
  document.getElementById('fb-sub').textContent=hint;
  document.getElementById('fb-hz').textContent=hzText||'';
  WAITING=true;
}
function hideFB(){document.getElementById('fb-bar').className='fb-bar hide';WAITING=false;}
function nextEx(){EI++;WAITING=false;renderEx();}

function leaveLesson(){
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  modal.innerHTML=`
    <div class="modal-drag"></div>
    <div style="font-size:18px;font-weight:900;color:var(--ink);margin-bottom:8px">Les verlaten? 🎀</div>
    <div style="font-size:14px;font-weight:600;color:var(--ink-m);margin-bottom:24px">Je voortgang in deze les gaat verloren.</div>
    <div style="display:flex;gap:10px">
      <button id="modal-stay" style="flex:1;background:linear-gradient(135deg,var(--rose),var(--rose-d));color:#fff;border:none;border-radius:var(--r-sm);padding:17px;font-size:15px;font-weight:900;font-family:Nunito,sans-serif;cursor:pointer">Doorgaan 💪</button>
      <button id="modal-leave" style="flex:1;background:var(--rose-xl);color:var(--rose-d);border:2px solid var(--rose-l);border-radius:var(--r-sm);padding:17px;font-size:15px;font-weight:900;font-family:Nunito,sans-serif;cursor:pointer">Verlaten</button>
    </div>`;
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  modal.querySelector('#modal-stay').addEventListener('click',()=>bg.remove());
  modal.querySelector('#modal-leave').addEventListener('click',()=>{bg.remove();WAITING=false;hideFB();goHome();});
  document.body.appendChild(bg);
}

// ── Finish ──
function finishLesson(){
  if(!S.done.includes(CL.id))S.done.push(CL.id);
  const bonusXP=HEARTS===3?5:0;
  LXP+=bonusXP;
  S.xp+=LXP;
  logXP(LXP);
  updStreak();checkAchv();save();

  document.getElementById('r-xp').textContent='+'+LXP+(bonusXP?` ✨+${bonusXP} bonus`:'');
  document.getElementById('r-acc').textContent=CC+'/'+(CC+WC);
  document.getElementById('r-str').textContent='🔥'+S.streak;
  document.getElementById('res-sub').textContent=CL.title+' voltooid! 🌸';

  if(WC===0&&CC>0){
    document.querySelector('.res-ttl').textContent='Foutloos! 🌟';
  }else{
    document.querySelector('.res-ttl').textContent='Geweldig!';
  }

  // Foutwoorden sectie
  const wrongSec=document.getElementById('res-wrong-section');
  const wrongList=document.getElementById('res-wrong-list');
  if(wrongSec&&wrongList){
    if(WRONG_WORDS.length>0){
      wrongSec.style.display='block';
      wrongList.innerHTML=WRONG_WORDS.map(w=>`
        <div class="res-wrong-row">
          <div class="res-wrong-hz">${w.hz}</div>
          <div class="res-wrong-nl">${w.nl}</div>
        </div>`).join('');
    }else{
      wrongSec.style.display='none';
    }
  }

  showScreen('result');
  sfxFinish();
  confetti();
}

function retryLessonWrong(){
  if(!WRONG_WORDS.length)return;
  const wordList=WRONG_WORDS.map(w=>({hz:w.hz,v:{nl:w.nl,tr:w.tr,mastery:0,nr:null},dir:'hz_nl'}));
  startOvhoring(0,wordList);
}


// ══════════════════════════════════════════════════════
// DAILY REVIEW
// ══════════════════════════════════════════════════════
function startDailyReview(){
  const now=new Date();
  const allEntries=Object.entries(S.vocab);
  const due=allEntries.filter(([,v])=>!v.nr||new Date(v.nr)<=now);
  if(due.length===0){showToast('Geen reviews nu! Kom later terug 🌸');return;}

  // Interleaving: take up to 10 due words, then add 2-4 words from other mastery levels
  // Science: interleaving different difficulty levels improves long-term retention
  const dueSlice=shuffle(due).slice(0,10);
  const dueHzSet=new Set(dueSlice.map(([hz])=>hz));
  const notDue=allEntries.filter(([hz,v])=>!dueHzSet.has(hz)&&(v.mastery||0)>0);
  // Pick interleaved words: mix of low-mastery (hard) and high-mastery (easy)
  const lowMastery=notDue.filter(([,v])=>(v.mastery||0)<=2);
  const highMastery=notDue.filter(([,v])=>(v.mastery||0)>=4);
  const interleaved=[...shuffle(lowMastery).slice(0,2),...shuffle(highMastery).slice(0,2)];
  const pool=shuffle([...dueSlice,...interleaved]);

  const rw=pool.map(([hz,v])=>({hz,nl:v.nl,tr:v.tr,tip:''}));
  CL={id:'_rev',title:'Dagelijkse herhaling',xp:Math.min(30,rw.length*2),words:rw,sentences:[]};
  EXS=buildExercises(CL);EI=CC=WC=LXP=0;
  HEARTS=3;
  document.getElementById('bnav').style.display='none';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  showScreen('lesson');
  renderHearts();
  renderEx();
}
