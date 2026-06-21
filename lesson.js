// ══════════════════════════════════════════════════════
// LES ENGINE
// ══════════════════════════════════════════════════════
let CL=null,EXS=[],EI=0,CC=0,WC=0,LXP=0,WAITING=false;
let REQUEUED=new Set();
let WRONG_WORDS=[],WRONG_SET=new Set();
let CC_COMBO=0;
let _comboTimeout=null;
let _activeObserver=null;
let _autoAdvanceTimeout=null;
let _introTimeout=null;

function trackWrong(hz,nl,tr){
  if(WRONG_SET.has(hz))return;
  WRONG_SET.add(hz);
  WRONG_WORDS.push({hz,nl,tr:tr||''});
}

const EX_TYPE_LABELS={
  grammar:'📚 Les uitleg',
  intro:'📖 Nieuw woord',
  phase_break:'',
  context:'🔍 Patroon',
  mc_nl:'🎯 Betekenis',
  mc_hz:'🔤 Hazaragi',
  wb:'🧩 Zin',
  type:'⌨️ Typen',
  cloze:'🧩 Vul in',
  repeat:'🔁 Herhaling',
  order:'🔀 Volgorde',
  listen:'🎧 Luisteren'
};

function getLessonById(id){
  for(const ch of CHAPTERS)for(const l of ch.lessons)if(l.id===id)return l;
  return null;
}

function _launchLesson(){
  if(_activeObserver){_activeObserver.disconnect();_activeObserver=null;}
  EI=CC=WC=LXP=CC_COMBO=0;WAITING=false;
  REQUEUED=new Set();WRONG_WORDS=[];WRONG_SET=new Set();
  document.getElementById('bnav').style.display='none';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  const gramBtn=document.getElementById('btn-grammar');
  if(gramBtn)gramBtn.style.display=CL&&CL.grammar?'flex':'none';
  showScreen('lesson');renderEx();
}

function startLesson(id){
  CL=getLessonById(id);
  if(!CL)return;
  EXS=buildExercises(CL);
  _launchLesson();
}

function buildExercises(lesson){
  const exs=[];
  const doneLessons=S.done.length;
  const allWords=[...lesson.words].sort((a,b)=>a.hz.length-b.hz.length);
  const ss=lesson.sentences||[];
  const BATCH=4;

  // Taalregel
  if(lesson.grammar) exs.push({type:'grammar',grammar:lesson.grammar,pronTips:lesson.pronTips||[]});

  // ── Memrise-stijl: intro batch → oefen met oplopende moeilijkheid per ronde ──
  const seenWords=[];
  for(let i=0;i<allWords.length;i+=BATCH){
    const batch=allWords.slice(i,i+BATCH);
    const prevSeen=[...seenWords];
    const batchNum=Math.floor(i/BATCH);

    // Intro nieuwe woorden
    batch.forEach(w=>{
      const ctxSentence=ss.find(s=>s.hz.includes(w.hz))||null;
      exs.push({type:'intro',w,ctxSentence});
    });
    seenWords.push(...batch);

    exs.push({type:'phase_break',msg:`Oefen de ${seenWords.length} woorden die je hebt gezien!`});

    // Nieuwe woorden: mc_nl (eerste blootstelling)
    shuffle([...batch]).forEach(w=>{
      const d=seenWords.filter(x=>x.hz!==w.hz);
      if(d.length>=3) exs.push({type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
    });

    // Oude woorden: moeilijkheid stijgt per ronde
    if(prevSeen.length>=2){
      if(batchNum===1){
        // Ronde 2 → mc_hz + listen voor eerder geziene woorden
        shuffle([...prevSeen]).slice(0,3).forEach(w=>{
          const d=seenWords.filter(x=>x.hz!==w.hz);
          if(d.length<3)return;
          exs.push({type:'mc_hz',w,choices:shuffle([w.hz,..._pickDistractors(w.hz,d,3,doneLessons).map(x=>x.hz)])});
        });
        shuffle([...prevSeen]).slice(0,2).forEach(w=>{
          const d=seenWords.filter(x=>x.hz!==w.hz);
          if(d.length<3)return;
          exs.push({type:'listen',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
        });
      } else if(batchNum>=2){
        // Ronde 3+ → listen + mc_hz + typen voor eerder geziene woorden
        shuffle([...prevSeen]).slice(0,2).forEach(w=>{
          const d=seenWords.filter(x=>x.hz!==w.hz);
          if(d.length<3)return;
          exs.push({type:'listen',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
        });
        shuffle([...prevSeen]).slice(0,3).forEach(w=>{
          const d=seenWords.filter(x=>x.hz!==w.hz);
          if(d.length<3)return;
          exs.push({type:'mc_hz',w,choices:shuffle([w.hz,..._pickDistractors(w.hz,d,3,doneLessons).map(x=>x.hz)])});
        });
        shuffle([...prevSeen]).slice(0,2).forEach(w=>exs.push({type:'type',w}));
      }
    }
  }

  // ── Eindsfase: alle oefentypes, oplopende moeilijkheid ──

  // Luisteren: hoor het woord, kies de betekenis
  shuffle([...allWords]).slice(0,3).forEach(w=>{
    const d=allWords.filter(x=>x.hz!==w.hz);
    if(d.length<3)return;
    exs.push({type:'listen',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)])});
  });

  // Zinsoefeningen (alleen als de les sentences heeft)
  if(ss.length>0){
    exs.push({type:'context',ss});

    // Cloze: vul het ontbrekende woord in
    shuffle([...ss].filter(s=>allWords.some(w=>s.hz.includes(w.hz)))).slice(0,2).forEach(s=>{
      const match=allWords.find(w=>s.hz.includes(w.hz));
      if(!match)return;
      const d=allWords.filter(x=>x.hz!==match.hz);
      if(d.length>=3) exs.push({type:'cloze',s,w:match,choices:shuffle([match.hz,...shuffle(d).slice(0,3).map(x=>x.hz)])});
    });

    // WB: sleep woordtegels om de zin te bouwen
    shuffle([...ss]).slice(0,2).forEach(s=>exs.push({type:'wb',s}));

    // Order: zet woorden in juiste volgorde (met lokaaswoorden)
    shuffle([...ss]).slice(0,2).forEach(s=>{
      const distractors=shuffle(allWords.map(w=>w.hz).filter(hz=>!s.hz.includes(hz))).slice(0,2);
      exs.push({type:'order',s,distractors});
    });
  }

  // Schrijven: typ het Hazaragi woord
  shuffle([...allWords]).slice(0,3).forEach(w=>exs.push({type:'type',w}));

  // Interleaving: eerder geleerde woorden mixen
  const knownHzSet=new Set(allWords.map(w=>w.hz));
  const knownPool=Object.entries(S.vocab)
    .filter(([hz])=>!knownHzSet.has(hz))
    .map(([hz,v])=>({hz,nl:v.nl,tr:v.tr||'',mastery:v.mastery||0}));
  if(knownPool.length>=4){
    shuffle(knownPool).slice(0,2).forEach(w=>{
      const d=knownPool.filter(x=>x.hz!==w.hz);
      if(d.length<3)return;
      const useHz=w.mastery>=2;
      exs.push(useHz
        ?{type:'mc_hz',w,choices:shuffle([w.hz,...shuffle(d).slice(0,3).map(x=>x.hz)]),interleaved:true}
        :{type:'mc_nl',w,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)]),interleaved:true});
    });
  }

  return exs;
}

function buildReviewExercises(words){
  const exs=[];
  const fullPool=Object.entries(S.vocab).map(([hz,v])=>({hz,nl:v.nl,tr:v.tr||''}));
  const pool=fullPool.length>=4?fullPool:words.map(w=>({hz:w.hz,nl:w.nl,tr:w.tr||''}));

  shuffle(words).forEach(w=>{
    const distractors=pool.filter(x=>x.hz!==w.hz);
    if(distractors.length<3)return;
    const mastery=w.mastery||0;
    const wd={hz:w.hz,nl:w.nl,tr:w.tr||''};
    const mc_nl={type:'mc_nl',w:wd,choices:shuffle([w.nl,...shuffle(distractors).slice(0,3).map(x=>x.nl)])};
    const mc_hz={type:'mc_hz',w:wd,choices:shuffle([w.hz,...shuffle(distractors).slice(0,3).map(x=>x.hz)])};
    const listen={type:'listen',w:wd,choices:shuffle([w.nl,...shuffle(distractors).slice(0,3).map(x=>x.nl)])};

    if(mastery===0){
      // Nog nooit gezien: intro tonen, dan mc_nl
      exs.push({type:'intro',w:wd,ctxSentence:null});
      exs.push(mc_nl);
    } else if(mastery===1){
      // Pril geleerd: betekenis + typen om te verankeren
      exs.push(mc_nl);
      exs.push({type:'type',w:wd});
    } else if(mastery===2){
      // Beetje bekend: Hazaragi herkennen + typen
      exs.push(mc_hz);
      exs.push({type:'type',w:wd});
    } else if(mastery===3){
      // Redelijk bekend: luisteren + Hazaragi herkennen
      exs.push(listen);
      exs.push(mc_hz);
    } else {
      // Goed bekend (4-5): luisteren of Hazaragi, hoogste moeilijkheid
      exs.push(Math.random()>0.5?listen:mc_hz);
    }
  });

  return shuffle(exs);
}

const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};

const _ENC=['💪 Goed geprobeerd!','🧠 Je hersenen leren!','🌸 Bijna goed!','✨ Elke fout is een les!','🐰 Heel dichtbij!','💡 Nu onthoud je het!'];
function _encourageMsg(){return _ENC[~~(Math.random()*_ENC.length)];}
function _getWordTip(hz){
  if(!CL||!CL.words)return'';
  const w=CL.words.find(x=>x.hz===hz);
  return(w&&w.tip&&w.tip.length<60)?w.tip:'';
}

// Kies distractors op basis van moeilijkheid: easy = meest verschillende lengte, hard = meest gelijkende lengte
function _pickDistractors(correctHz,pool,count,difficulty){
  const sorted=[...pool].sort((a,b)=>
    difficulty<3
      ?Math.abs(b.hz.length-correctHz.length)-Math.abs(a.hz.length-correctHz.length)
      :Math.abs(a.hz.length-correctHz.length)-Math.abs(b.hz.length-correctHz.length)
  );
  return shuffle(sorted.slice(0,count+1)).slice(0,count);
}

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
    <div class="type-pill">💡 Wist je dat...</div>
    <div class="grammar-card grammar-card-soft">
      <div class="grammar-text">${ex.grammar}</div>
    </div>
    ${pronHTML?`<div class="pron-tips-list">${pronHTML}</div>`:''}
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-check" style="flex:1" onclick="nextEx()">Begin! 🌸</button>
      <button class="btn-skip" onclick="nextEx()">Sla over →</button>
    </div>`;
}

function renderEx(){
  if(EI>=EXS.length){finishLesson();return;}
  const pct=Math.round(EI/EXS.length*100);
  document.getElementById('l-prog').style.width=pct+'%';

  const ex=EXS[EI];
  const typeLabel=ex.requeued?EX_TYPE_LABELS.repeat:ex.interleaved?'🔁 Herhaling':(EX_TYPE_LABELS[ex.type]||'');
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
  else if(ex.type==='order')   rOrder(ex,body);
  else if(ex.type==='listen')     rListen(ex,body);
  else if(ex.type==='phase_break') rPhaseBreak(ex,body);
  else nextEx();
}

function rIntro(ex,body){
  const w=ex.w;
  const pron=(w.tr||'').replace(/([aeiouAEIOU])\1/g,'<span class="lv">$&</span>');
  const s=ex.ctxSentence;
  const ctxHTML=s?`
    <div class="ctx-mini intro-fade-in-2">
      <div class="ctx-mini-hz">${s.hz.replace(w.hz,`<mark>${w.hz}</mark>`)}</div>
      <div class="hz-roman" style="font-size:13px;font-weight:800;color:var(--rose-d);font-style:italic;margin:3px 0 2px">${s.tr||''}</div>
      <div class="ctx-mini-nl">"${s.nl}"</div>
    </div>`:'';
  body.innerHTML=`
    <div class="type-pill">📖 Nieuw woord</div>
    <div class="hz-card">
      <span class="hz-script">${w.hz}</span>
      <button class="spk-btn" onclick="speakHz('${w.hz}')">🔊</button>
      <span class="hz-nl">= ${w.nl}</span>
      <span class="hz-dutch intro-fade-in-1">${w.tr||''}</span>
    </div>
    ${w.tip?`<div class="word-tip-card intro-fade-in-2">💡 ${w.tip}</div>`:''}
    ${ctxHTML}
    <div class="intro-auto-bar" id="intro-bar"></div>
    <button class="btn-check" onclick="nextEx()">Begrepen! 🌸</button>`;
  if(!S.vocab[w.hz])S.vocab[w.hz]={nl:w.nl,tr:w.tr,mastery:0,nr:null};
  save();
  speakHz(w.hz);
}

function rPhaseBreak(ex,body){
  body.innerHTML=`
    <div class="phase-break-card">
      <div class="phase-break-ico">🧠</div>
      <div class="phase-break-title">Goed gedaan!</div>
      <div class="phase-break-msg">${ex.msg}</div>
    </div>
    <button class="btn-check" onclick="nextEx()">Verder →</button>`;
}

function requeueWrong(hz){
  if(REQUEUED.has(hz)) return false;
  REQUEUED.add(hz);
  const wordSource=(CL&&CL.words&&CL.words.length>0)?CL.words:Object.entries(S.vocab).map(([h,v])=>({hz:h,...v}));
  const w=wordSource.find(x=>x.hz===hz);
  if(!w) return false;
  const d=wordSource.filter(x=>x.hz!==hz);
  if(d.length<3) return false;
  const wd={hz:w.hz,nl:w.nl,tr:w.tr||''};
  // Wissel tussen mc_nl en listen — niet altijd hetzelfde
  const useListen=Math.random()>0.5;
  EXS.push(useListen
    ?{type:'listen',w:wd,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)]),requeued:true}
    :{type:'mc_nl',w:wd,choices:shuffle([w.nl,...shuffle(d).slice(0,3).map(x=>x.nl)]),requeued:true}
  );
  return true;
}

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
    <button class="btn-check" onclick="nextEx()">Ik snap het! ✓</button>`;
}

function rCloze(ex,body){
  const {s,w,choices}=ex;
  const ltrs=['A','B','C','D'];
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
          <span class="hz-roman" style="font-size:11px;font-weight:700;color:var(--ink-l);font-style:italic">${CL&&CL.words?CL.words.find(x=>x.hz===c)?.tr||'':S.vocab[c]?.tr||''}</span>
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

function rMC_nl(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];
  body.innerHTML=`
    <div class="type-pill">🎯 Wat betekent dit?</div>
    <div class="hz-card hz-card-compact">
      <span class="hz-script">${w.hz}</span>
      <button class="spk-btn" onclick="speakHz('${w.hz}')">🔊</button>
      <span class="hz-dutch">${w.tr||''}</span>
    </div>
    <div class="choices">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_nl" data-chosen="${c}" data-correct="${w.nl}" data-hz="${w.hz}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
  speakHz(w.hz);
}

function rMC_hz(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];
  // FIX Bug 2: gebruik S.vocab als CL.words niet beschikbaar is (review-modus)
  const wordSource=(CL&&CL.words&&CL.words.length>0)?CL.words:null;
  const getTr=hz=>{
    if(wordSource){const m=wordSource.find(x=>x.hz===hz);if(m)return m.tr||'';}
    return S.vocab[hz]?.tr||'';
  };
  body.innerHTML=`
    <div class="type-pill">🔤 Kies Hazaragi</div>
    <p style="font-size:16px;font-weight:800;color:var(--ink);margin-bottom:14px">Welk Hazaragi woord betekent <em style="color:var(--rose)">"${w.nl}"</em>?</p>
    <div class="choices">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_hz" data-chosen="${c}" data-correct="${w.hz}" data-nl="${w.nl}" data-tr="${w.tr}">
        <span class="ch-ltr">${ltrs[i]}</span>
        <div style="display:flex;flex-direction:column;gap:2px">
          <span style="font-family:'Noto Naskh Arabic',serif;font-size:24px;direction:rtl;line-height:1.5">${c}</span>
          ${getTr(c)?`<span class="hz-roman" style="font-size:11px;font-weight:700;color:var(--ink-l);font-style:italic">${getTr(c)}</span>`:''}
        </div>
      </button>`).join('')}</div>`;
}

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
    <button class="btn-check" id="btn-check-wb" disabled>Controleer ✓</button>`;

  const ansEl=document.getElementById('wb-ans');
  if(_activeObserver){_activeObserver.disconnect();}
  _activeObserver=new MutationObserver(()=>{
    document.getElementById('btn-check-wb').disabled=ansEl.querySelectorAll('.ans').length===0;
  });
  _activeObserver.observe(ansEl,{childList:true});
  document.getElementById('btn-check-wb').addEventListener('click',()=>{_activeObserver.disconnect();_activeObserver=null;chkWB(correct,s.nl,s.tr);});
}

function tileMove(tile, word, zoneId){
  tile.classList.add('placed');
  const zone=document.getElementById(zoneId);
  const t=document.createElement('button');
  t.className='w-tile ans';
  t.textContent=word;
  t.dataset.word=word;
  t.onclick=()=>{
    t.remove();
    tile.classList.remove('placed');
    if(zone.querySelectorAll('.ans').length===0)zone.classList.remove('has');
  };
  zone.appendChild(t);
  zone.classList.add('has');
}
function wbMove(tile,word){tileMove(tile,word,'wb-ans');}
function ordMove(tile,word){tileMove(tile,word,'ord-ans');}

function chkWB(correct,nl,tr){
  const tiles=document.getElementById('wb-ans').querySelectorAll('.ans');
  const ans=Array.from(tiles).map(t=>t.dataset.word).join(' ');
  if(ans===correct){
    CC++;LXP+=8;
    CC_COMBO++;
    if(CC_COMBO>=3){LXP+=CC_COMBO>=5?3:1;showComboIndicator(CC_COMBO);}
    sfxCorrect();
    showFB(true,'🎀 Correct!',nl,'');
    sparkles();
  }else{
    WC++;CC_COMBO=0;
    sfxWrong();
    showFB(false,_encourageMsg(),'Juist: '+tr,correct);
  }
}

function rType(ex,body){
  const w=ex.w;
  let retryMode=false;

  body.innerHTML=`
    <div class="type-pill">⌨️ Actief ophalen</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:16px">Typ het Hazaragi woord voor:</p>
    <div class="hz-card hz-card-compact">
      <span class="hz-nl" style="font-size:20px;font-weight:900;color:var(--ink);margin-bottom:4px">${w.nl}</span>
      <span class="hz-dutch">${w.tr||''}</span>
    </div>
    <input class="t-inp" id="t-inp"
      inputmode="text"
      lang="fa"
      dir="rtl"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      placeholder="Typ hier...">
    <div class="t-hint" id="t-hint"></div>
    <button class="hint-btn" id="hint-btn">💡 Toon antwoord</button>
    <button class="btn-check" id="btn-check-type">Controleer ✓</button>`;

  const correct=w.hz;
  const inp=document.getElementById('t-inp');
  attachVirtualKeyboard(inp);
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
      inp.blur();
      inp.classList.add('ok');
      sfxCorrect();
      setTimeout(()=>speakHz(correct),350);
      if(retryMode){
        CC++;LXP+=5;
        sparkles();
        showFB(true,'✅ Overgetypt! Goed gedaan!',w.nl,correct);
      } else {
        CC++;LXP+=10;
        CC_COMBO++;
        if(CC_COMBO>=3){LXP+=CC_COMBO>=5?3:1;showComboIndicator(CC_COMBO);}
        showFB(true,'✨ Uitstekend!',w.nl,correct);
        sparkles();
        updMastery(correct,true);
      }
    } else {
      if(!retryMode){
        WC++;CC_COMBO=0;
        sfxWrong();
        updMastery(correct,false);
        requeueWrong(correct);
        trackWrong(correct,w.nl,w.tr);
        retryMode=true;
      }
      inp.blur();
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

// ── FIX Bug 4: normAr — voeg ك vs ک normalisatie toe ──
const normAr=s=>s
  .replace(/[ًٌٍَُِّْ]/g,'')
  .replace(/[آأإا]/g,'ا')
  .replace(/[يیى]/g,'ی')
  .replace(/[كک]/g,'ک')
  .replace(/ة/g,'ه')
  .trim();

function showComboIndicator(combo){
  const el=document.getElementById('combo-indicator');
  if(!el)return;
  el.textContent=combo>=5?`⚡ ${combo}× Combo!`:`🔥 ${combo}× Combo`;
  el.classList.add('show');
  clearTimeout(_comboTimeout);
  _comboTimeout=setTimeout(()=>el.classList.remove('show'),1800);
}

function chkMC(btn,chosen,correct,hz,tr){
  if(WAITING)return;WAITING=true;
  document.querySelectorAll('.ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');CC++;LXP+=5;
    CC_COMBO++;
    if(CC_COMBO>=3){LXP+=CC_COMBO>=5?3:1;showComboIndicator(CC_COMBO);}
    sfxCorrect();
    showFB(true,'🌸 Goed!',correct,hz);
    sparkles();
    updMastery(hz,true);
  }else{
    CC_COMBO=0;
    btn.classList.add('ng');WC++;
    sfxWrong();
    // Gebruik data-correct om de juiste knop te vinden — robuust en betrouwbaar
    document.querySelectorAll('.ch-btn').forEach(b=>{
      if(b.dataset.chosen===correct)b.classList.add('ok');
    });
    const requeued=requeueWrong(hz);
    trackWrong(hz,correct,tr);
    const _tip1=_getWordTip(hz);
    const _smart1=getSmartHint(hz);
    showFB(false,_encourageMsg(),_smart1||(_tip1?`💡 ${_tip1}`:`${hz} = ${correct}${requeued?' · 🔁 Komt later terug':''}`),hz);
    updMastery(hz,false);
  }
}

function chkMC_hz(btn,chosen,correct,nl,tr){
  if(WAITING)return;WAITING=true;
  document.querySelectorAll('.ch-btn').forEach(b=>b.disabled=true);
  if(chosen===correct){
    btn.classList.add('ok');CC++;LXP+=5;
    CC_COMBO++;
    if(CC_COMBO>=3){LXP+=CC_COMBO>=5?3:1;showComboIndicator(CC_COMBO);}
    sfxCorrect();
    showFB(true,'🌸 Goed!',nl,correct);
    sparkles();
    updMastery(correct,true);
  }else{
    CC_COMBO=0;
    btn.classList.add('ng');WC++;
    sfxWrong();
    // FIX Bug 1: gebruik data-correct ipv fragiele querySelector op geneste spans
    document.querySelectorAll('.ch-btn').forEach(b=>{
      if(b.dataset.chosen===correct)b.classList.add('ok');
    });
    const requeued=requeueWrong(correct);
    trackWrong(correct,nl,tr);
    trackConfusion(correct, chosen);
    const _tip2=_getWordTip(correct);
    const _smart=getSmartHint(correct);
    const _pron=tr?` · ${tr}`:'';
    showFB(false,_encourageMsg(),_smart||(_tip2?`💡 ${_tip2}`:`Juist: ${correct}${_pron}${requeued?' · 🔁 Komt later terug':''}`),correct);
    updMastery(correct,false);
  }
}

function showFB(ok,title,hint,hzText){
  const bar=document.getElementById('fb-bar');
  bar.className='fb-bar '+(ok?'ok':'ng');
  document.getElementById('fb-ico').textContent=ok?'🎀':'🐰';
  document.getElementById('fb-ttl').textContent=title;
  document.getElementById('fb-sub').textContent=hint;
  const hzEl=document.getElementById('fb-hz');
  if(hzText){
    const voc=S.vocab[hzText];
    const tr=voc&&voc.tr?` — ${voc.tr}`:'';
    hzEl.textContent=hzText+tr;
    speakHz(hzText);
  } else {
    hzEl.textContent='';
  }
  WAITING=true;
}
function hideFB(){clearTimeout(_autoAdvanceTimeout);clearTimeout(_introTimeout);document.getElementById('fb-bar').className='fb-bar hide';WAITING=false;}
function nextEx(){clearTimeout(_autoAdvanceTimeout);clearTimeout(_introTimeout);EI++;WAITING=false;renderEx();}

function rOrder(ex,body){
  const s=ex.s;
  const correctWords=s.hz.split(' ').filter(Boolean);
  const distractors=(ex.distractors||[]).slice(0,2);
  const bank=shuffle([...correctWords,...distractors]);
  const correct=correctWords.join(' ');

  body.innerHTML=`
    <div class="type-pill">🔀 Zinsvolgorde</div>
    <p style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:14px">Vertaal naar Hazaragi:</p>
    <div style="background:var(--rose-xl);border-radius:var(--r-sm);padding:14px 16px;margin-bottom:16px;border:1.5px solid var(--rose-l)">
      <div style="font-size:16px;font-weight:700;color:var(--ink)">"${s.nl}"</div>
      <div class="hz-roman" style="font-size:12px;font-weight:700;color:var(--rose);font-style:italic;margin-top:4px">${s.tr}</div>
    </div>
    <div class="wb-answer" id="ord-ans"></div>
    <div class="wb-bank" id="ord-bnk">${bank.map(w=>`
      <button class="w-tile" data-action="ordmove" data-word="${w}">${w}</button>`).join('')}
    </div>
    <div style="flex:1"></div>
    <button class="btn-check" id="btn-check-ord" disabled>Controleer ✓</button>`;

  const ansEl=document.getElementById('ord-ans');
  if(_activeObserver){_activeObserver.disconnect();}
  _activeObserver=new MutationObserver(()=>{
    document.getElementById('btn-check-ord').disabled=ansEl.querySelectorAll('.ans').length!==correctWords.length;
  });
  _activeObserver.observe(ansEl,{childList:true});
  document.getElementById('btn-check-ord').addEventListener('click',()=>{_activeObserver.disconnect();_activeObserver=null;chkOrder(correct,s.nl,s.tr);});
}

function chkOrder(correct,nl,tr){
  const tiles=document.getElementById('ord-ans').querySelectorAll('.ans');
  const ans=Array.from(tiles).map(t=>t.dataset.word).join(' ');
  if(ans===correct){
    CC++;LXP+=10;
    CC_COMBO++;
    if(CC_COMBO>=3){LXP+=CC_COMBO>=5?3:1;showComboIndicator(CC_COMBO);}
    sfxCorrect();
    showFB(true,'🔀 Perfect! Juiste volgorde!',nl,'');
    sparkles();
  }else{
    WC++;CC_COMBO=0;
    sfxWrong();
    showFB(false,_encourageMsg(),'Juist: '+tr,correct);
  }
}

function startChapterReview(chId){
  const ch=CHAPTERS.find(c=>c.id===chId);
  if(!ch)return;
  const learnedWords=ch.lessons.flatMap(l=>(l.words||[]).filter(w=>S.vocab[w.hz]).map(w=>({
    hz:w.hz,nl:w.nl,tr:w.tr||'',mastery:S.vocab[w.hz]?.mastery||0
  })));
  if(learnedWords.length<4){showToast('Leer eerst meer woorden in dit hoofdstuk! 📚');return;}
  const label=ch.label.replace(/[^\p{L}\p{N}\s·]/gu,'').trim()||ch.id;
  CL={
    id:'_chrev_'+chId,
    title:label,
    xp:Math.min(40,learnedWords.length*2),
    words:learnedWords.map(w=>({hz:w.hz,nl:w.nl,tr:w.tr})),
    sentences:[]
  };
  EXS=buildReviewExercises(learnedWords);
  _launchLesson();
}

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
  modal.querySelector('#modal-leave').addEventListener('click',()=>{
    if(CC>=5){updStreak();save();}
    bg.remove();WAITING=false;hideFB();goHome();
  });
  document.body.appendChild(bg);
}

function finishLesson(){
  if(!CL.id.startsWith('_')&&!S.done.includes(CL.id))S.done.push(CL.id);

  const bonusXP=WC===0?5:0;
  LXP+=bonusXP;
  S.xp+=LXP;
  logXP(LXP);
  updStreak();checkShieldAward();save();

  document.getElementById('r-xp').textContent='+'+LXP+(bonusXP?` ✨+${bonusXP} bonus`:'');
  document.getElementById('r-acc').textContent=CC+'/'+(CC+WC);
  document.getElementById('r-str').textContent='🔥'+S.streak;
  document.getElementById('res-sub').textContent=CL.title+' voltooid! 🌸';
  const _pm=['Foutloos! 🌟','Perfect! ✨','Absoluut geweldig! 🌟','Meesterlijk! 💎','Ongeslagen! 🏆'];
  const _gm=['Geweldig! 🌸','Goed gedaan! 💪','Super! 🎀','Fantastisch! 🐇','Zo trots! 🌺'];
  if(WC===0&&CC>0){
    document.querySelector('.res-ttl').textContent=_pm[~~(Math.random()*_pm.length)];
  }else{
    document.querySelector('.res-ttl').textContent=_gm[~~(Math.random()*_gm.length)];
  }

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
  openOvhDirect(wordList);
}

function rListen(ex,body){
  const w=ex.w;
  const ltrs=['A','B','C','D'];

  // Geen Hazaragi-stem op dit apparaat? Lees het woord i.p.v. luisteren.
  if(S.skipListening===true){
    body.innerHTML=`
      <div class="type-pill">📖 Leesoefening</div>
      <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:16px">Wat betekent dit woord?</p>
      <div class="hz-card hz-card-compact">
        <span class="hz-script">${w.hz}</span>
        <button class="spk-btn" onclick="speakHz('${w.hz}')">🔊</button>
        <span class="hz-dutch">${w.tr||''}</span>
      </div>
      <div class="choices" style="margin-top:16px">${ex.choices.map((c,i)=>`
        <button class="ch-btn" data-action="mc_nl" data-chosen="${c}" data-correct="${w.nl}" data-hz="${w.hz}" data-tr="${w.tr||''}">
          <span class="ch-ltr">${ltrs[i]}</span>${c}
        </button>`).join('')}</div>`;
    return;
  }

  body.innerHTML=`
    <div class="type-pill">🎧 Luisteroefening</div>
    <p style="font-size:17px;font-weight:800;color:var(--ink);margin-bottom:20px">Welk Hazaragi woord hoor je?</p>
    <button class="listen-play-btn" onclick="speakHz('${w.hz}')">🔊 Speel opnieuw af</button>
    <div class="choices" style="margin-top:16px">${ex.choices.map((c,i)=>`
      <button class="ch-btn" data-action="mc_nl" data-chosen="${c}" data-correct="${w.nl}" data-hz="${w.hz}" data-tr="${w.tr||''}">
        <span class="ch-ltr">${ltrs[i]}</span>${c}
      </button>`).join('')}</div>`;
  speakHz(w.hz);
}

function showGrammarHint(){
  if(!CL||!CL.grammar)return;
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  modal.innerHTML=`
    <div class="modal-drag"></div>
    <div style="font-size:18px;font-weight:900;color:var(--ink);margin-bottom:12px">💡 Taalregel</div>
    <div style="font-size:14px;font-weight:700;color:var(--ink-m);line-height:1.7">${CL.grammar.replace(/\n/g,'<br>')}</div>
    <button class="btn-check" style="position:static;margin-top:16px" id="grammar-close">Verder ✓</button>`;
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  modal.querySelector('#grammar-close').addEventListener('click',()=>bg.remove());
  document.body.appendChild(bg);
}

function startDailyReview(){
  const allEntries=Object.entries(S.vocab);
  const due=allEntries.filter(([,v])=>isDue(v));
  if(due.length===0){showToast('Geen reviews nu! Kom later terug 🌸');return;}

  // Prioriteer: review-klaar, dan aanvullen met lage mastery & hoge mastery voor interleaving
  const dueSlice=shuffle(due).slice(0,25);
  const dueHzSet=new Set(dueSlice.map(([hz])=>hz));
  const notDue=allEntries.filter(([hz,v])=>!dueHzSet.has(hz)&&(v.mastery||0)>0);
  const lowMastery=notDue.filter(([,v])=>(v.mastery||0)<=2);
  const highMastery=notDue.filter(([,v])=>(v.mastery||0)>=4);
  const interleaved=[
    ...shuffle(lowMastery).slice(0,5),
    ...shuffle(highMastery).slice(0,3)
  ];
  const pool=shuffle([...dueSlice,...interleaved]);

  const reviewWords=pool.map(([hz,v])=>({
    hz, nl:v.nl, tr:v.tr||'', mastery:v.mastery||0
  }));

  CL={
    id:'_rev',
    title:'Dagelijkse herhaling',
    xp:Math.min(60,reviewWords.length*2),
    words:reviewWords.map(w=>({hz:w.hz,nl:w.nl,tr:w.tr})),
    sentences:[]
  };
  EXS=buildReviewExercises(reviewWords);
  _launchLesson();
}