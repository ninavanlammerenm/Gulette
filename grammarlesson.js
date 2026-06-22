// ══════════════════════════════════════════════════════
// GRAMMAR LESSON ENGINE
// ══════════════════════════════════════════════════════
const GRAM_EX={
  'gram1_pronouns':{
    steps:[
      {type:'explain',text:'Hazaragi heeft 6 voornaamwoorden. Elk bepaalt de werkwoorduitgang.',example:{hz:'من هزاره هستم',tr:'ma hazaara hastom',nl:'Ik ben Hazara'},highlight:'من'},
      {type:'explain',text:'Let op: "مو" (mah) = wij — typisch Hazaragi. In Iraans Farsi zeg je "ما".',example:{hz:'مو با هم می‌ریم',tr:'mah baa ham me-rim',nl:'Wij gaan samen'},highlight:'مو'},
    ],
    recognition:[
      {question:'Welke zin betekent "Wij gaan samen"?',correct:'مو با هم می‌ریم',wrong:['من با هم می‌ریم','تو با هم می‌ری'],explanation:'"مو" = wij (mah) — typisch Hazaragi'},
      {question:'Welke zin betekent "Waar ben jij?"',correct:'تو کجا هستی؟',wrong:['من کجا هستم؟','او کجا اَس؟'],explanation:'"تو" = jij (tu)'},
    ],
    fillblank:[
      {before:'',blank:'من',after:'هزاره هستم',options:['من','تو','او'],explanation:'من (ma) = ik'},
      {before:'',blank:'مو',after:'با هم می‌ریم',options:['من','مو','شما'],explanation:'مو (mah) = wij — Hazaragi!'},
    ],
    build:[
      {nl:'Ik ben Hazara',words:['هستم','من','هزاره'],correct:'من هزاره هستم'},
      {nl:'Wij gaan samen',words:['می‌ریم','مو','هم','با'],correct:'مو با هم می‌ریم'},
    ]
  },
  'gram1_zijn':{
    steps:[
      {type:'explain',text:'"Zijn" is het belangrijkste werkwoord. "اَس" (as) = is — dit hoor je constant.',example:{hz:'هوا گرم اَس',tr:'hawaa garm as',nl:'Het weer is warm'},highlight:'اَس'},
      {type:'explain',text:'Ontkenning: "نیس" (nis) = is niet. "نیستم" (nistom) = ik ben niet.',example:{hz:'مشکلی نیس',tr:'moshkeli nis',nl:'Geen probleem!'},highlight:'نیس'},
    ],
    recognition:[
      {question:'Welke zin betekent "Het weer is warm"?',correct:'هوا گرم اَس',wrong:['هوا گرم نیس','هوا سرد اَس'],explanation:'"اَس" = is, "گرم" = warm'},
      {question:'Welke zin betekent "Ik ben niet goed"?',correct:'خوب نیستم',wrong:['خوب هستم','خوب اَس'],explanation:'"نیستم" = ik ben niet'},
    ],
    fillblank:[
      {before:'هوا گرم',blank:'اَس',after:'',options:['اَس','هستم','نیس'],explanation:'اَس (as) = is'},
      {before:'مشکلی',blank:'نیس',after:'',options:['نیس','اَس','هستم'],explanation:'نیس (nis) = is niet'},
      {before:'من خوب',blank:'هستم',after:'',options:['هستم','هستی','اَس'],explanation:'هستم (hastom) = ik ben'},
    ],
    build:[
      {nl:'Het weer is warm',words:['اَس','هوا','گرم'],correct:'هوا گرم اَس'},
      {nl:'Geen probleem!',words:['نیس','مشکلی'],correct:'مشکلی نیس'},
    ]
  },
  'gram1_bezit':{
    steps:[
      {type:'explain',text:'Bezit maak je door een uitgang te plakken: -م (mijn), -ت (jouw), -ش (zijn/haar).',example:{hz:'نامم گل اَس',tr:'naamam gol as',nl:'Mijn naam is Gol'},highlight:'م'},
      {type:'explain',text:'Bij woorden op een klinker voeg je -یم/-یت/-یش toe. Bijv. خانه + م = خانه‌ام.',example:{hz:'مادرم مهربان اَس',tr:'maadaram mehrabaan as',nl:'Mijn moeder is lief'},highlight:'م'},
    ],
    recognition:[
      {question:'Welke zin betekent "Mijn naam is Gol"?',correct:'نامم گل اَس',wrong:['نامت گل اَس','نامش گل اَس'],explanation:'-م = mijn → نامم'},
      {question:'Wat betekent "کتابش"?',correct:'Zijn/haar boek',wrong:['Mijn boek','Jouw boek'],explanation:'-ش = zijn/haar'},
    ],
    fillblank:[
      {before:'نام',blank:'م',after:'گل اَس',options:['م','ت','ش'],explanation:'-م = mijn'},
      {before:'مادر',blank:'ش',after:'مهربان اَس',options:['م','ت','ش'],explanation:'-ش = zijn/haar'},
    ],
    build:[
      {nl:'Mijn naam is Gol',words:['اَس','نامم','گل'],correct:'نامم گل اَس'},
      {nl:'Mijn moeder is lief',words:['اَس','مادرم','مهربان'],correct:'مادرم مهربان اَس'},
    ]
  },
  'gram1_meervoud':{
    steps:[
      {type:'explain',text:'Meervoud is simpel: plak "-ها" achter het woord. Altijd. Klaar.',example:{hz:'بچه‌ها بازی می‌کنن',tr:'bacha-haa baazi mi-konan',nl:'De kinderen spelen'},highlight:'ها'},
      {type:'explain',text:'Meervoud + bezit: "-هایم" = mijn (meervoud). Bijv. کتاب‌هایم = mijn boeken.',example:{hz:'کتاب‌هایم کجاس؟',tr:'ketaab-haayam kojas?',nl:'Waar zijn mijn boeken?'},highlight:'هایم'},
    ],
    recognition:[
      {question:'Welke zin betekent "De kinderen spelen"?',correct:'بچه‌ها بازی می‌کنن',wrong:['بچه بازی می‌کنه','بچه‌ها بازی نمی‌کنن'],explanation:'"بچه‌ها" = kinderen (-ها meervoud)'},
      {question:'Wat betekent "دوست‌ها"?',correct:'Vrienden',wrong:['Vriend','Mijn vriend'],explanation:'-ها maakt het meervoud'},
    ],
    fillblank:[
      {before:'کتاب',blank:'ها',after:'کجاس؟',options:['ها','م','ش'],explanation:'-ها = meervoud'},
      {before:'دوست',blank:'هایم',after:'اینجا اَن',options:['هایم','ها','ش'],explanation:'-هایم = mijn (meervoud)'},
    ],
    build:[
      {nl:'De kinderen spelen',words:['می‌کنن','بچه‌ها','بازی'],correct:'بچه‌ها بازی می‌کنن'},
      {nl:'Waar zijn mijn boeken?',words:['کجاس؟','کتاب‌هایم'],correct:'کتاب‌هایم کجاس؟'},
    ]
  },
};

let _GL=null,_GSteps=[],_GI=0;

function _buildGramSteps(ruleId){
  const ex=GRAM_EX[ruleId];
  if(!ex)return[];
  const steps=[];
  (ex.steps||[]).forEach(s=>steps.push({...s,phase:'explain'}));
  (ex.recognition||[]).forEach(s=>steps.push({...s,type:'recognition',phase:'recognition'}));
  (ex.fillblank||[]).forEach(s=>steps.push({...s,type:'fillblank',phase:'fillblank'}));
  (ex.build||[]).forEach(s=>steps.push({...s,type:'build',phase:'build'}));
  return steps;
}

function openGrammarLesson(ruleId){
  let lesson=null;
  for(const ch of CHAPTERS){
    const found=(ch.lessons||[]).find(l=>l.id===ruleId);
    if(found){lesson=found;break;}
  }
  if(!lesson)return;
  _GL=lesson;
  _GSteps=_buildGramSteps(ruleId);
  if(!_GSteps.length){showToast('Geen oefeningen beschikbaar');return;}
  _GI=0;
  document.getElementById('bnav').style.display='none';
  showScreen('grammar-lesson');
  renderGrammarStep();
}

function renderGrammarStep(){
  if(_GI>=_GSteps.length){finishGrammarLesson();return;}
  const pct=Math.round(_GI/_GSteps.length*100);
  document.getElementById('gl-prog').style.width=pct+'%';
  document.getElementById('gl-counter').textContent=`Stap ${_GI+1} van ${_GSteps.length}`;
  const step=_GSteps[_GI];
  const body=document.getElementById('gl-body');
  body.scrollTop=0;
  if(step.type==='explain') _renderExplain(step,body);
  else if(step.type==='recognition') _renderRecognition(step,body);
  else if(step.type==='fillblank') _renderFillblank(step,body);
  else if(step.type==='build') _renderBuild(step,body);
}

function nextGrammarStep(){_GI++;renderGrammarStep();}

function _renderExplain(step,body){
  const ex=step.example;
  const hzHTML=ex.hz.replace(step.highlight,`<span style="color:#F28AA1;font-weight:900">${step.highlight}</span>`);
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">📖 Uitleg</div>
      <div class="gl-rule-title">${_GL.title}</div>
      <div class="gl-explain-text">${step.text}</div>
      <div class="gl-example">
        <div class="gl-example-hz">${hzHTML}</div>
        <div class="gl-example-tr">${ex.tr}</div>
        <div class="gl-example-nl">"${ex.nl}"</div>
      </div>
    </div>
    <button class="btn-check" style="position:static;margin-top:12px" onclick="nextGrammarStep()">Volgende →</button>`;
}

function _renderRecognition(step,body){
  const opts=shuffle([step.correct,...step.wrong]);
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">🎯 Herkennen</div>
      <div class="gl-question">${step.question}</div>
      <div class="gl-choices">${opts.map(o=>`
        <button class="gl-choice" onclick="_checkRecognition(this,'${o.replace(/'/g,"\\'")}','${step.correct.replace(/'/g,"\\'")}','${step.explanation.replace(/'/g,"\\'")}')">
          <span style="font-family:'Noto Naskh Arabic',serif;font-size:18px;direction:rtl">${o}</span>
        </button>`).join('')}
      </div>
      <div class="gl-fb" id="gl-fb"></div>
    </div>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:12px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
}

function _checkRecognition(btn,chosen,correct,explanation){
  document.querySelectorAll('.gl-choice').forEach(b=>b.disabled=true);
  const fb=document.getElementById('gl-fb');
  const next=document.getElementById('gl-next');
  if(chosen===correct){
    btn.classList.add('gl-correct');
    fb.innerHTML=`<div class="gl-fb-ok">✓ Goed! ${explanation}</div>`;
  }else{
    btn.classList.add('gl-wrong');
    document.querySelectorAll('.gl-choice').forEach(b=>{
      if(b.querySelector('span').textContent===correct) b.classList.add('gl-correct');
    });
    fb.innerHTML=`<div class="gl-fb-ng">✗ ${explanation}</div>`;
  }
  next.style.display='block';
}

function _renderFillblank(step,body){
  const opts=shuffle([...step.options]);
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">✏️ Invullen</div>
      <div class="gl-fill-sentence" id="gl-fill-sent">
        <span class="gl-fill-hz">${step.before}</span>
        <span class="gl-fill-blank" id="gl-blank">___</span>
        <span class="gl-fill-hz">${step.after}</span>
      </div>
      <div class="gl-fill-opts">${opts.map(o=>`
        <button class="gl-fill-opt" onclick="_checkFillblank(this,'${o}','${step.blank}','${step.explanation}')">${o}</button>`).join('')}
      </div>
      <div class="gl-fb" id="gl-fb"></div>
    </div>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:12px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
}

function _checkFillblank(btn,chosen,correct,explanation){
  document.querySelectorAll('.gl-fill-opt').forEach(b=>b.disabled=true);
  const blank=document.getElementById('gl-blank');
  const fb=document.getElementById('gl-fb');
  const next=document.getElementById('gl-next');
  if(chosen===correct){
    btn.classList.add('gl-correct');
    blank.textContent=correct;
    blank.classList.add('gl-filled');
    fb.innerHTML=`<div class="gl-fb-ok">✓ Goed! ${explanation}</div>`;
  }else{
    btn.classList.add('gl-wrong');
    document.querySelectorAll('.gl-fill-opt').forEach(b=>{if(b.textContent===correct)b.classList.add('gl-correct');});
    blank.textContent=correct;
    blank.classList.add('gl-filled');
    fb.innerHTML=`<div class="gl-fb-ng">✗ Het was: ${correct} — ${explanation}</div>`;
  }
  next.style.display='block';
}

function _renderBuild(step,body){
  const words=shuffle([...step.words]);
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">🧩 Bouwen</div>
      <div class="gl-build-prompt">Vertaal: "${step.nl}"</div>
      <div class="gl-build-answer" id="gl-build-ans"></div>
      <div class="gl-build-bank" id="gl-build-bank">${words.map(w=>
        `<button class="gl-build-tile" onclick="_glBuildTap(this,'${w}')">${w}</button>`).join('')}
      </div>
      <div class="gl-fb" id="gl-fb"></div>
    </div>
    <button class="btn-check" style="position:static;margin-top:12px" id="gl-build-check" onclick="_checkBuild('${step.correct.replace(/'/g,"\\'")}')" disabled>Controleer ✓</button>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:8px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
}

function _glBuildTap(tile,word){
  tile.classList.add('placed');
  const ans=document.getElementById('gl-build-ans');
  const t=document.createElement('button');
  t.className='gl-build-tile gl-build-placed';
  t.textContent=word;
  t.onclick=()=>{t.remove();tile.classList.remove('placed');
    document.getElementById('gl-build-check').disabled=document.getElementById('gl-build-ans').children.length===0;};
  ans.appendChild(t);
  document.getElementById('gl-build-check').disabled=false;
}

function _checkBuild(correct){
  const ans=Array.from(document.getElementById('gl-build-ans').children).map(t=>t.textContent).join(' ');
  const fb=document.getElementById('gl-fb');
  const check=document.getElementById('gl-build-check');
  const next=document.getElementById('gl-next');
  check.style.display='none';
  document.querySelectorAll('.gl-build-tile').forEach(b=>b.disabled=true);
  if(ans===correct){
    fb.innerHTML=`<div class="gl-fb-ok">✓ Perfect!</div>`;
  }else{
    fb.innerHTML=`<div class="gl-fb-ng">✗ Juiste volgorde: <span style="font-family:'Noto Naskh Arabic',serif;direction:rtl;font-size:18px">${correct}</span></div>`;
  }
  next.style.display='block';
}

function finishGrammarLesson(){
  const body=document.getElementById('gl-body');
  document.getElementById('gl-prog').style.width='100%';
  document.getElementById('gl-counter').textContent='Klaar!';
  body.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;padding:40px 0;text-align:center;gap:12px">
      <div style="font-size:64px">🐇</div>
      <div style="font-size:24px;font-weight:900;color:var(--ink)">Grammaticaregel begrepen!</div>
      <div style="font-size:15px;font-weight:700;color:var(--ink-m);margin-bottom:8px">${_GL.title}</div>
      <div class="gl-card" style="text-align:left;width:100%">
        <div style="font-size:13px;font-weight:700;color:var(--ink-m);line-height:1.7">${_GL.grammar.replace(/\n/g,'<br>')}</div>
      </div>
      <button class="btn-check" style="position:static;margin-top:12px" onclick="leaveGrammarLesson()">Terug naar grammatica</button>
    </div>`;
}

function leaveGrammarLesson(){
  document.getElementById('bnav').style.display='flex';
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.nb')[2].classList.add('on');
  showScreen('grammar');
  renderGrammarLibrary();
}
