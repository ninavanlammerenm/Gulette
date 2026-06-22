// ══════════════════════════════════════════════════════
// CEFR NIVEAUTOETSEN — Realistische taalvaardigheidstoets
// A1 = Doorbraak, A2 = Drempel, B1 = Gevorderd
// ══════════════════════════════════════════════════════

const CEFR_TESTS = {
  A1: {
    label: 'A1 — Doorbraak',
    desc: 'Basiswoorden, begroetingen, eenvoudige zinnen',
    questions: 25,
    timeMinutes: 15,
    passPercent: 70,
    requiredWords: 40,
    requiredLessons: ['greet1','greet2','numbers','family','food','emotions'],
    chapters: ['ch1','ch2','ch3','ch4','ch5','ch_gram1'],
    skills: [
      {type:'vocab_hz_nl', weight:5, label:'Woordenschat: Hazaragi → Nederlands'},
      {type:'vocab_nl_hz', weight:4, label:'Woordenschat: Nederlands → Hazaragi'},
      {type:'grammar_cloze', weight:4, label:'Grammatica: invullen'},
      {type:'listening', weight:3, label:'Luistervaardigheid'},
      {type:'sentence_order', weight:3, label:'Zinsbouw'},
      {type:'situational', weight:3, label:'Situationeel gebruik'},
      {type:'reading', weight:3, label:'Leesbegrip'},
    ]
  },
  A2: {
    label: 'A2 — Drempel',
    desc: 'Dagelijks leven, verleden tijd, meningen',
    questions: 30,
    timeMinutes: 20,
    passPercent: 70,
    requiredWords: 120,
    requiredLessons: ['stories','opinions','gram2_heden','gram2_negatie','transport','health'],
    chapters: ['ch1','ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9','ch_gram1','ch_gram2'],
    skills: [
      {type:'vocab_hz_nl', weight:5, label:'Woordenschat: Hazaragi → Nederlands'},
      {type:'vocab_nl_hz', weight:5, label:'Woordenschat: Nederlands → Hazaragi'},
      {type:'grammar_cloze', weight:5, label:'Grammatica: invullen'},
      {type:'listening', weight:3, label:'Luistervaardigheid'},
      {type:'sentence_order', weight:4, label:'Zinsbouw'},
      {type:'situational', weight:4, label:'Situationeel gebruik'},
      {type:'reading', weight:4, label:'Leesbegrip'},
    ]
  },
  B1: {
    label: 'B1 — Gevorderd',
    desc: 'Complexe zinnen, nuance, cultuur & spreekwoorden',
    questions: 35,
    timeMinutes: 25,
    passPercent: 70,
    requiredWords: 250,
    requiredLessons: ['gram3_sov','gram3_verleden','fluent_expressions','hazara_identity'],
    chapters: null, // alle hoofdstukken
    skills: [
      {type:'vocab_hz_nl', weight:5, label:'Woordenschat: Hazaragi → Nederlands'},
      {type:'vocab_nl_hz', weight:5, label:'Woordenschat: Nederlands → Hazaragi'},
      {type:'grammar_cloze', weight:6, label:'Grammatica: invullen'},
      {type:'listening', weight:4, label:'Luistervaardigheid'},
      {type:'sentence_order', weight:5, label:'Zinsbouw'},
      {type:'situational', weight:5, label:'Situationeel gebruik'},
      {type:'reading', weight:5, label:'Leesbegrip'},
    ]
  }
};

// Situationele vragen per niveau
const SITUATIONAL_QS = {
  A1: [
    {q:'Je ontmoet iemand voor het eerst. Wat zeg je?', correct:'سلام، خوش وقتم', opts:['خداحافظ','تشکر','ببخشید']},
    {q:'Je wilt iets kopen op de markt. Hoe vraag je de prijs?', correct:'چنده؟', opts:['خوبی؟','چتوری؟','کجا؟']},
    {q:'Iemand bedankt je. Wat antwoord je?', correct:'قابل نداشت', opts:['تشکر','ببخشید','خداحافظ']},
    {q:'Je voelt je niet goed. Wat zeg je?', correct:'خوب نیستم', opts:['خوبم','تشکر','بله']},
    {q:'Je wilt afscheid nemen. Wat zeg je?', correct:'خداحافظ', opts:['سلام','بفرمایین','صبح بخیر']},
    {q:'Je wilt "ja" zeggen. Welk woord gebruik je?', correct:'بله', opts:['نه','خوبم','تشکر']},
    {q:'Het is ochtend. Hoe groet je iemand?', correct:'صبح بخیر', opts:['شب بخیر','خداحافظ','مشکلی نیس']},
    {q:'Iemand vraagt "خوبی؟". Hoe antwoord je positief?', correct:'خوبم', opts:['نه','خداحافظ','ببخشید']},
  ],
  A2: [
    {q:'Je bent verdwaald. Hoe vraag je de weg?', correct:'راه ره نشو بتی', opts:['چنده؟','خوبی؟','تشکر']},
    {q:'Je wilt zeggen dat je gisteren naar school ging.', correct:'دیروز مکتب رفتم', opts:['مکتب می‌رم','مکتب اس','مکتب خوب اس']},
    {q:'Je bent het niet eens met iemand. Wat zeg je?', correct:'موافق نیستم', opts:['بله','تشکر','خوبم']},
    {q:'Je wilt een taxi nemen. Wat zeg je?', correct:'تکسی کجا اس؟', opts:['موتر خوب اس','سرک بزرگ اس','مکتب اس']},
    {q:'Je wilt zeggen dat je dokter wilt worden.', correct:'می‌خوایم داکتر شوم', opts:['داکتر خوب اس','شفاخانه کجا اس','داکتر رفتم']},
    {q:'Iemand vraagt waar je vandaan komt. Wat zeg je?', correct:'از افغانستان استم', opts:['خوبم','تشکر','بله']},
  ],
  B1: [
    {q:'Je wilt een Hazaragi spreekwoord gebruiken over geduld.', correct:'صبر تلخ اس ولی ثمر شیرین داره', opts:['خوب اس','تشکر','سلام']},
    {q:'Je wilt zeggen: "Als ik geld had, ging ik op reis."', correct:'اگه پیسه می‌داشتم سفر می‌رفتم', opts:['پیسه دارم','سفر خوب اس','می‌خوایم برم']},
    {q:'Je wilt iemand\'s karakter beschrijven als geduldig.', correct:'صبور اس', opts:['خفا اس','خوش اس','کلان اس']},
    {q:'Je wilt vertellen over Nowruz.', correct:'نوروز سال نو اس', opts:['نوروز خداحافظ','نوروز نه','نوروز ببخشید']},
  ]
};

// Leesbegrip-passages per niveau
const READING_PASSAGES = {
  A1: [
    {
      passage: 'سلام، نامم فاطمه اس. ما دَ کابل زندگی می‌کنم. خانواده‌م کلان اس — سه برادر و دو خواهر دارم.',
      passageTr: 'Hallo, mijn naam is Fatima. Ik woon in Kabul. Mijn familie is groot — ik heb drie broers en twee zussen.',
      q: 'Hoeveel broers heeft Fatima?',
      correct: 'Drie',
      opts: ['Twee','Vier','Vijf']
    },
    {
      passage: 'امروز هوا گرم اس. ما آو می‌خورم و دَ سایه می‌شینم.',
      passageTr: 'Vandaag is het weer warm. Ik drink water en zit in de schaduw.',
      q: 'Wat is het weer vandaag?',
      correct: 'Warm',
      opts: ['Koud','Regenachtig','Bewolkt']
    },
    {
      passage: 'مادرم هر روز ناشتا درست می‌کنه. نان تازه و چای سبز.',
      passageTr: 'Mijn moeder maakt elke dag ontbijt. Vers brood en groene thee.',
      q: 'Wat maakt de moeder voor ontbijt?',
      correct: 'Brood en thee',
      opts: ['Rijst en vlees','Fruit','Soep']
    },
  ],
  A2: [
    {
      passage: 'دیروز دَ بازار رفتم. یک کیلو سیب و دو کیلو کچالو خریدم. دکاندار گفت "صد افغانی می‌شه". ما پیسه دادم و آمدم خانه.',
      passageTr: 'Gisteren ging ik naar de markt. Ik kocht een kilo appels en twee kilo aardappelen. De winkelier zei "dat wordt honderd afghani". Ik betaalde en kwam thuis.',
      q: 'Hoeveel kostte het boodschappen doen?',
      correct: 'Honderd afghani',
      opts: ['Vijftig afghani','Tweehonderd afghani','Tien afghani']
    },
    {
      passage: 'برادرم دَ پوهنتون درس می‌خوانه. او می‌خوایه داکتر شوه. هر روز صبح وقت می‌ره و شام پس میایه.',
      passageTr: 'Mijn broer studeert aan de universiteit. Hij wil dokter worden. Elke dag gaat hij vroeg weg en komt \'s avonds terug.',
      q: 'Wat wil de broer worden?',
      correct: 'Dokter',
      opts: ['Leraar','Ingenieur','Winkelier']
    },
  ],
  B1: [
    {
      passage: 'مردم هزاره از قرن‌ها پیش دَ افغانستان زندگی کدن. زبان‌شان هزارگی اس که شبیه فارسی اس ولی کلمات مغولی و ترکی هم داره. فرهنگ هزاره خیلی غنی اس — موسیقی، شعر، و مهمان‌نوازی بخش مهم زندگی‌شان اس.',
      passageTr: 'Het Hazara-volk leeft al eeuwen in Afghanistan. Hun taal is Hazaragi, die lijkt op Farsi maar ook Mongoolse en Turkse woorden bevat. De Hazara-cultuur is heel rijk — muziek, poëzie en gastvrijheid zijn een belangrijk deel van hun leven.',
      q: 'Welke invloeden heeft het Hazaragi naast Farsi?',
      correct: 'Mongools en Turks',
      opts: ['Arabisch en Hindi','Engels en Frans','Chinees en Koreaans']
    },
  ]
};

let _testState = null;
let _testTimerID = null;

function getTestAvailability(){
  const wordCount = Object.keys(S.vocab).length;
  const results = S.testResults || {};
  const levels = ['A1','A2','B1'];
  const available = [];

  for(const level of levels){
    const test = CEFR_TESTS[level];
    const prev = results[level];
    const prevLevel = levels[levels.indexOf(level)-1];

    // Check: vorig niveau moet gehaald zijn (behalve A1)
    if(prevLevel && (!results[prevLevel] || !results[prevLevel].passed)) continue;

    // Check: genoeg woorden geleerd
    if(wordCount < test.requiredWords) continue;

    // Check: verplichte lessen voltooid
    const allDone = test.requiredLessons.every(id => S.done.includes(id));
    if(!allDone) continue;

    // Check: cooldown na zakken (3 dagen)
    if(prev && !prev.passed && prev.date){
      const daysSince = (Date.now() - new Date(prev.date).getTime()) / 86400000;
      if(daysSince < 3){
        available.push({level, status:'cooldown', daysLeft: Math.ceil(3 - daysSince), passed:false});
        continue;
      }
    }

    // Check: al gehaald
    if(prev && prev.passed){
      available.push({level, status:'passed', score:prev.score, passed:true});
      continue;
    }

    available.push({level, status:'ready', passed:false});
  }
  return available;
}

function renderTestBanner(){
  const avail = getTestAvailability();
  let banner = document.getElementById('test-banner');
  if(!banner){
    banner = document.createElement('div');
    banner.id = 'test-banner';
    const ovhBanner = document.querySelector('.ovh-banner');
    if(ovhBanner) ovhBanner.parentNode.insertBefore(banner, ovhBanner.nextSibling);
    else return;
  }

  const ready = avail.find(a => a.status === 'ready');
  const cooldown = avail.find(a => a.status === 'cooldown');
  const lastPassed = [...avail].reverse().find(a => a.status === 'passed');

  if(ready){
    const t = CEFR_TESTS[ready.level];
    banner.className = 'ovh-banner';
    banner.style.cssText = 'background:linear-gradient(135deg,#EDE9FE,#DDD6FE);border-color:rgba(139,92,246,.3)';
    banner.onclick = () => openTestSetup(ready.level);
    banner.innerHTML = `
      <div class="rb-ico">🎓</div>
      <div class="rb-txt">
        <h3 style="color:var(--ink)">Niveautoets ${t.label}</h3>
        <p style="color:var(--ink-m)">Klaar om getoetst te worden! ${t.questions} vragen · ${t.timeMinutes} min</p>
      </div>
      <div class="rb-arr" style="color:#F28AA1">›</div>`;
    banner.style.display = 'flex';
  } else if(cooldown){
    banner.className = 'ovh-banner';
    banner.style.cssText = 'background:linear-gradient(135deg,#FEF3C7,#FDE68A);border-color:rgba(217,119,6,.2);cursor:default';
    banner.onclick = null;
    banner.innerHTML = `
      <div class="rb-ico">⏳</div>
      <div class="rb-txt">
        <h3 style="color:var(--ink)">Toets ${CEFR_TESTS[cooldown.level].label}</h3>
        <p style="color:var(--ink-m)">Nog ${cooldown.daysLeft} dag${cooldown.daysLeft===1?'':'en'} wachten — oefen je zwakke punten!</p>
      </div>
      <div class="rb-arr" style="color:#d97706;opacity:.5">🔒</div>`;
    banner.style.display = 'flex';
  } else if(lastPassed && !avail.find(a=>a.status==='ready')){
    const t = CEFR_TESTS[lastPassed.level];
    banner.className = 'ovh-banner';
    banner.style.cssText = 'background:linear-gradient(135deg,#D1FAE5,#A7F3D0);border-color:rgba(16,185,129,.3);cursor:default';
    banner.onclick = null;
    banner.innerHTML = `
      <div class="rb-ico">✅</div>
      <div class="rb-txt">
        <h3 style="color:var(--ink)">Niveau: ${t.label}</h3>
        <p style="color:var(--ink-m)">Gehaald met ${lastPassed.score}%! Leer meer woorden voor het volgende niveau.</p>
      </div>
      <div class="rb-arr" style="color:#059669">🏆</div>`;
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
  }
}

// ══════════════════════════════════════════════════════
// TEST SETUP SCHERM
// ══════════════════════════════════════════════════════
function openTestSetup(level){
  const t = CEFR_TESTS[level];
  const overlay = document.getElementById('test-overlay');
  overlay.classList.add('open');
  document.getElementById('test-setup').style.display = 'flex';
  document.getElementById('test-quiz').style.display = 'none';

  document.getElementById('test-setup').innerHTML = `
    <div class="ovh-setup-ico">🎓</div>
    <div class="ovh-setup-ttl">Niveautoets ${t.label}</div>
    <div class="ovh-setup-sub">${t.desc}</div>
    <div style="width:100%;max-width:340px;display:flex;flex-direction:column;gap:12px">
      <div style="background:var(--white);border-radius:var(--r-sm);padding:16px;box-shadow:var(--sh);text-align:left">
        <div style="font-size:13px;font-weight:900;color:var(--ink);margin-bottom:10px">📋 Toetsinfo</div>
        <div style="font-size:12px;font-weight:700;color:var(--ink-m);line-height:2">
          ⏱ Tijd: <strong>${t.timeMinutes} minuten</strong><br>
          📝 Vragen: <strong>${t.questions}</strong><br>
          ✅ Slagingsgrens: <strong>${t.passPercent}%</strong> (${Math.ceil(t.questions * t.passPercent/100)} van ${t.questions})<br>
          🔒 Bij niet halen: <strong>3 dagen wachten</strong>
        </div>
      </div>
      <div style="background:var(--white);border-radius:var(--r-sm);padding:16px;box-shadow:var(--sh);text-align:left">
        <div style="font-size:13px;font-weight:900;color:var(--ink);margin-bottom:8px">🎯 Getoetste vaardigheden</div>
        <div style="font-size:12px;font-weight:700;color:var(--ink-m);line-height:2">
          ${t.skills.map(s=>`• ${s.label}`).join('<br>')}
        </div>
      </div>
      <div style="background:#FEF3C7;border:1.5px solid rgba(217,119,6,.2);border-radius:var(--r-sm);padding:14px 16px;text-align:left">
        <div style="font-size:12px;font-weight:800;color:#92400e;line-height:1.6">
          ⚠️ Dit is een <strong>echte toets</strong> — geen oefening. Je kunt niet terug naar vorige vragen.
          Als je zakt moet je 3 dagen wachten voordat je het opnieuw mag proberen.
        </div>
      </div>
      <button class="btn-check" style="position:static;margin-top:8px;background:linear-gradient(135deg,#F28AA1,#D4607A)" onclick="startCefrTest('${level}')">
        Start toets 🎓
      </button>
      <button class="btn-skip" style="margin-top:4px" onclick="closeTest()">Annuleren</button>
    </div>`;
}

function closeTest(){
  if(_testTimerID){clearInterval(_testTimerID);_testTimerID=null;}
  document.getElementById('test-overlay').classList.remove('open');
  _testState = null;
}

// ══════════════════════════════════════════════════════
// TEST GENEREREN
// ══════════════════════════════════════════════════════
function startCefrTest(level){
  const t = CEFR_TESTS[level];
  const questions = generateTestQuestions(level, t);

  _testState = {
    level,
    questions,
    current: 0,
    answers: [],
    score: 0,
    skillScores: {},
    startTime: Date.now(),
    timeLimit: t.timeMinutes * 60 * 1000
  };
  t.skills.forEach(s => _testState.skillScores[s.type] = {correct:0, total:0});

  document.getElementById('test-setup').style.display = 'none';
  document.getElementById('test-quiz').style.display = 'flex';

  // Start timer
  _testTimerID = setInterval(updateTestTimer, 1000);
  renderTestQuestion();
}

function generateTestQuestions(level, t){
  const questions = [];
  const chapIds = t.chapters;
  const words = [];
  const sentences = [];

  // Verzamel woorden en zinnen uit relevante hoofdstukken
  for(const ch of CHAPTERS){
    if(chapIds && !chapIds.includes(ch.id)) continue;
    for(const l of ch.lessons){
      (l.words||[]).forEach(w => {
        if(S.vocab[w.hz]) words.push(w);
      });
      (l.sentences||[]).forEach(s => sentences.push(s));
    }
  }

  if(words.length < 10) return [];

  // Genereer vragen per skill-type volgens gewicht
  const totalWeight = t.skills.reduce((s,sk) => s + sk.weight, 0);

  for(const skill of t.skills){
    const count = Math.round(t.questions * skill.weight / totalWeight);

    for(let i = 0; i < count && questions.length < t.questions; i++){
      const q = generateQuestion(skill.type, words, sentences, level, questions);
      if(q) questions.push(q);
    }
  }

  // Vul aan tot exact het juiste aantal
  while(questions.length < t.questions){
    const q = generateQuestion('vocab_hz_nl', words, sentences, level, questions);
    if(q) questions.push(q);
    else break;
  }

  return shuffle(questions);
}

function generateQuestion(type, words, sentences, level, existing){
  const usedWords = new Set(existing.map(q => q.targetWord));

  switch(type){
    case 'vocab_hz_nl': {
      const pool = words.filter(w => !usedWords.has(w.hz));
      if(pool.length < 4) return null;
      const w = pool[Math.floor(Math.random()*pool.length)];
      const dists = shuffle(words.filter(x=>x.nl!==w.nl)).slice(0,3).map(x=>x.nl);
      return {
        type:'mc', skill:'vocab_hz_nl', targetWord:w.hz,
        prompt: w.hz, promptType:'hz',
        question: 'Wat betekent dit woord?',
        correct: w.nl,
        choices: shuffle([w.nl, ...dists]),
        tr: w.tr
      };
    }
    case 'vocab_nl_hz': {
      const pool = words.filter(w => !usedWords.has(w.hz));
      if(pool.length < 4) return null;
      const w = pool[Math.floor(Math.random()*pool.length)];
      const dists = shuffle(words.filter(x=>x.hz!==w.hz)).slice(0,3).map(x=>x.hz);
      return {
        type:'mc', skill:'vocab_nl_hz', targetWord:w.hz,
        prompt: w.nl, promptType:'nl',
        question: 'Hoe zeg je dit in Hazaragi?',
        correct: w.hz,
        choices: shuffle([w.hz, ...dists]),
        tr: w.tr, rtl: true
      };
    }
    case 'grammar_cloze': {
      const pool = sentences.filter(s => s.hz && s.nl && s.hz.split(' ').length >= 3);
      if(pool.length === 0) return null;
      const s = pool[Math.floor(Math.random()*pool.length)];
      const parts = s.hz.split(' ').filter(Boolean);
      const idx = Math.floor(Math.random() * parts.length);
      const answer = parts[idx];
      const blanked = [...parts]; blanked[idx] = '___';
      const dists = shuffle(words.map(w=>w.hz).filter(h=>h!==answer && h.length < answer.length+4)).slice(0,3);
      if(dists.length < 3) return generateQuestion('vocab_hz_nl', words, sentences, level, existing);
      return {
        type:'cloze', skill:'grammar_cloze', targetWord: answer,
        sentence: blanked.join(' '),
        sentenceNl: s.nl,
        sentenceTr: s.tr || '',
        correct: answer,
        choices: shuffle([answer, ...dists]),
        rtl: true
      };
    }
    case 'listening': {
      const pool = words.filter(w => !usedWords.has(w.hz));
      if(pool.length < 4) return null;
      const w = pool[Math.floor(Math.random()*pool.length)];
      const dists = shuffle(words.filter(x=>x.nl!==w.nl)).slice(0,3).map(x=>x.nl);
      return {
        type:'listen', skill:'listening', targetWord:w.hz,
        hz: w.hz,
        correct: w.nl,
        choices: shuffle([w.nl, ...dists]),
        tr: w.tr
      };
    }
    case 'sentence_order': {
      const pool = sentences.filter(s => s.hz && s.hz.split(' ').length >= 3 && s.hz.split(' ').length <= 6);
      if(pool.length === 0) return generateQuestion('vocab_hz_nl', words, sentences, level, existing);
      const s = pool[Math.floor(Math.random()*pool.length)];
      return {
        type:'order', skill:'sentence_order', targetWord: s.hz,
        correctOrder: s.hz.split(' ').filter(Boolean),
        scrambled: shuffle(s.hz.split(' ').filter(Boolean)),
        nl: s.nl,
        tr: s.tr || ''
      };
    }
    case 'situational': {
      const pool = SITUATIONAL_QS[level] || SITUATIONAL_QS.A1;
      const unused = pool.filter(q => !existing.some(e => e.correct === q.correct));
      if(unused.length === 0) return generateQuestion('vocab_hz_nl', words, sentences, level, existing);
      const sq = unused[Math.floor(Math.random()*unused.length)];
      return {
        type:'situational', skill:'situational', targetWord: sq.correct,
        question: sq.q,
        correct: sq.correct,
        choices: shuffle([sq.correct, ...sq.opts]),
        rtl: true
      };
    }
    case 'reading': {
      const pool = READING_PASSAGES[level] || READING_PASSAGES.A1;
      const unused = pool.filter(p => !existing.some(e => e.passage === p.passage));
      if(unused.length === 0) return generateQuestion('vocab_hz_nl', words, sentences, level, existing);
      const rp = unused[Math.floor(Math.random()*unused.length)];
      return {
        type:'reading', skill:'reading', targetWord: rp.correct,
        passage: rp.passage,
        passageTr: rp.passageTr,
        question: rp.q,
        correct: rp.correct,
        choices: shuffle([rp.correct, ...rp.opts])
      };
    }
  }
  return null;
}

// ══════════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════════
function updateTestTimer(){
  if(!_testState) return;
  const elapsed = Date.now() - _testState.startTime;
  const remaining = Math.max(0, _testState.timeLimit - elapsed);
  const min = Math.floor(remaining/60000);
  const sec = Math.floor((remaining%60000)/1000);
  const el = document.getElementById('test-timer');
  if(el){
    el.textContent = `${min}:${sec.toString().padStart(2,'0')}`;
    if(remaining < 60000) el.style.color = 'var(--rose-d)';
    if(remaining < 30000) el.classList.add('urgent');
  }
  if(remaining <= 0){
    clearInterval(_testTimerID); _testTimerID = null;
    finishTest();
  }
}

function renderTestQuestion(){
  if(!_testState) return;
  const {questions, current, level} = _testState;
  const t = CEFR_TESTS[level];
  const total = questions.length;

  document.getElementById('test-prog').style.width = Math.round(current/total*100)+'%';
  document.getElementById('test-counter').textContent = `${current+1} / ${total}`;

  if(current >= total){ finishTest(); return; }

  const q = questions[current];
  const body = document.getElementById('test-body');
  const ltrs = ['A','B','C','D'];

  switch(q.type){
    case 'mc':
      body.innerHTML = `
        <div class="type-pill">${q.skill==='vocab_hz_nl'?'🎯 Woordenschat':'🔤 Vertaling'}</div>
        <p style="font-size:14px;font-weight:800;color:var(--ink);margin-bottom:14px">${q.question}</p>
        <div class="hz-card hz-card-compact" style="margin-bottom:16px">
          ${q.promptType==='hz'?`
            <span class="hz-script">${q.prompt}</span>
            <button class="spk-btn" onclick="speakHz('${q.prompt}')">🔊</button>
          `:`<span style="font-size:22px;font-weight:900;color:var(--ink)">${q.prompt}</span>`}
        </div>
        <div class="choices">${q.choices.map((c,i)=>`
          <button class="ch-btn${q.rtl?' ch-rtl':''}" onclick="answerTest(this,${i})">
            <span class="ch-ltr">${ltrs[i]}</span>${c}
          </button>`).join('')}</div>`;
      if(q.promptType==='hz') speakHz(q.prompt);
      break;

    case 'cloze':
      body.innerHTML = `
        <div class="type-pill">📝 Grammatica</div>
        <p style="font-size:14px;font-weight:800;color:var(--ink);margin-bottom:8px">Vul het ontbrekende woord in:</p>
        <div style="background:var(--rose-xl);border-radius:var(--r-sm);padding:16px;margin-bottom:6px;border:1.5px solid var(--rose-l)">
          <div style="font-family:'Noto Naskh Arabic',serif;font-size:24px;direction:rtl;text-align:right;color:var(--ink);line-height:1.8">${q.sentence.replace('___','<span style="border-bottom:3px solid var(--rose);padding:0 8px;color:var(--rose-d)">___</span>')}</div>
        </div>
        <div style="font-size:12px;font-weight:700;color:var(--ink-m);margin-bottom:14px;font-style:italic">"${q.sentenceNl}"</div>
        <div class="choices">${q.choices.map((c,i)=>`
          <button class="ch-btn ch-rtl" onclick="answerTest(this,${i})">
            <span class="ch-ltr">${ltrs[i]}</span>${c}
          </button>`).join('')}</div>`;
      break;

    case 'listen':
      body.innerHTML = `
        <div class="type-pill">🎧 Luisteren</div>
        <p style="font-size:14px;font-weight:800;color:var(--ink);margin-bottom:16px">Welk woord hoor je?</p>
        <button class="listen-play-btn" onclick="speakHz('${q.hz}')">🔊 Speel af</button>
        <div class="choices" style="margin-top:16px">${q.choices.map((c,i)=>`
          <button class="ch-btn" onclick="answerTest(this,${i})">
            <span class="ch-ltr">${ltrs[i]}</span>${c}
          </button>`).join('')}</div>`;
      speakHz(q.hz);
      break;

    case 'order': {
      body.innerHTML = `
        <div class="type-pill">🔀 Zinsbouw</div>
        <p style="font-size:14px;font-weight:800;color:var(--ink);margin-bottom:8px">Zet de woorden in de juiste volgorde:</p>
        <div style="background:var(--rose-xl);border-radius:var(--r-sm);padding:12px 16px;margin-bottom:14px;border:1.5px solid var(--rose-l)">
          <div style="font-size:14px;font-weight:700;color:var(--ink-m)">"${q.nl}"</div>
          ${q.tr?`<div style="font-size:12px;font-weight:700;color:var(--rose);font-style:italic;margin-top:3px">${q.tr}</div>`:''}
        </div>
        <div class="wb-answer" id="test-ord-ans"></div>
        <div class="wb-bank" id="test-ord-bnk">${q.scrambled.map(w=>`
          <button class="w-tile" onclick="testOrdMove(this,'${w}')">${w}</button>`).join('')}</div>
        <button class="btn-check" id="test-ord-check" disabled onclick="checkTestOrder()">Controleer ✓</button>`;
      break;
    }

    case 'situational':
      body.innerHTML = `
        <div class="type-pill">💬 Situatie</div>
        <div style="background:linear-gradient(135deg,#EDE9FE,#DDD6FE);border:2px solid rgba(139,92,246,.25);border-radius:var(--r);padding:18px;margin-bottom:16px">
          <div style="font-size:15px;font-weight:800;color:var(--ink);line-height:1.6">${q.question}</div>
        </div>
        <p style="font-size:13px;font-weight:700;color:var(--ink-m);margin-bottom:12px">Wat zeg je?</p>
        <div class="choices">${q.choices.map((c,i)=>`
          <button class="ch-btn ch-rtl" onclick="answerTest(this,${i})">
            <span class="ch-ltr">${ltrs[i]}</span>${c}
          </button>`).join('')}</div>`;
      break;

    case 'reading':
      body.innerHTML = `
        <div class="type-pill">📖 Leesbegrip</div>
        <div style="background:var(--white);border:2px solid var(--ink-xl);border-radius:var(--r);padding:16px;margin-bottom:6px">
          <div style="font-family:'Noto Naskh Arabic',serif;font-size:18px;direction:rtl;text-align:right;color:var(--ink);line-height:2">${q.passage}</div>
        </div>
        <div style="font-size:12px;font-weight:600;color:var(--ink-l);margin-bottom:14px;font-style:italic;line-height:1.6">${q.passageTr}</div>
        <p style="font-size:14px;font-weight:800;color:var(--ink);margin-bottom:12px">${q.question}</p>
        <div class="choices">${q.choices.map((c,i)=>`
          <button class="ch-btn" onclick="answerTest(this,${i})">
            <span class="ch-ltr">${ltrs[i]}</span>${c}
          </button>`).join('')}</div>`;
      break;
  }
}

// ══════════════════════════════════════════════════════
// ANTWOORDEN
// ══════════════════════════════════════════════════════
function answerTest(btn, idx){
  if(!_testState) return;
  const q = _testState.questions[_testState.current];
  const chosen = q.choices[idx];
  const ok = chosen === q.correct;

  document.querySelectorAll('#test-body .ch-btn').forEach(b=>b.disabled=true);

  if(ok){
    btn.classList.add('ok');
    _testState.score++;
    _testState.skillScores[q.skill].correct++;
    sfxCorrect();
  } else {
    btn.classList.add('ng');
    document.querySelectorAll('#test-body .ch-btn').forEach((b,i)=>{
      if(q.choices[i]===q.correct) b.classList.add('ok');
    });
    sfxWrong();
  }
  _testState.skillScores[q.skill].total++;
  _testState.answers.push({...q, chosen, ok});

  if(q.targetWord && q.skill !== 'reading') speakHz(q.targetWord);

  setTimeout(()=>{
    _testState.current++;
    renderTestQuestion();
  }, ok ? 800 : 1500);
}

function testOrdMove(tile, word){
  tile.classList.add('placed');
  const zone = document.getElementById('test-ord-ans');
  const t = document.createElement('button');
  t.className = 'w-tile ans';
  t.textContent = word;
  t.dataset.word = word;
  t.onclick = ()=>{
    t.remove();
    tile.classList.remove('placed');
    document.getElementById('test-ord-check').disabled = zone.querySelectorAll('.ans').length === 0;
  };
  zone.appendChild(t);
  zone.classList.add('has');
  document.getElementById('test-ord-check').disabled = false;
}

function checkTestOrder(){
  if(!_testState) return;
  const q = _testState.questions[_testState.current];
  const tiles = document.getElementById('test-ord-ans').querySelectorAll('.ans');
  const ans = Array.from(tiles).map(t => t.dataset.word).join(' ');
  const correct = q.correctOrder.join(' ');
  const ok = ans === correct;

  if(ok){
    _testState.score++;
    _testState.skillScores[q.skill].correct++;
    sfxCorrect();
  } else {
    sfxWrong();
  }
  _testState.skillScores[q.skill].total++;
  _testState.answers.push({...q, chosen: ans, correct, ok});

  setTimeout(()=>{
    _testState.current++;
    renderTestQuestion();
  }, ok ? 800 : 1200);
}

// ══════════════════════════════════════════════════════
// RESULTAAT
// ══════════════════════════════════════════════════════
function finishTest(){
  if(_testTimerID){clearInterval(_testTimerID);_testTimerID=null;}
  if(!_testState) return;

  const {level, score, questions, skillScores, startTime} = _testState;
  const t = CEFR_TESTS[level];
  const total = questions.length;
  const pct = Math.round(score/total*100);
  const passed = pct >= t.passPercent;
  const elapsed = Math.round((Date.now() - startTime)/1000);
  const min = Math.floor(elapsed/60);
  const sec = elapsed%60;

  // Sla resultaat op
  if(!S.testResults) S.testResults = {};
  S.testResults[level] = {
    passed,
    score: pct,
    date: new Date().toISOString(),
    details: Object.entries(skillScores).map(([skill, {correct, total}])=>({
      skill, correct, total, pct: total>0 ? Math.round(correct/total*100) : 0
    }))
  };
  if(passed){
    S.xp += level==='A1'?50 : level==='A2'?100 : 200;
    logXP(level==='A1'?50 : level==='A2'?100 : 200);
  }
  save();

  // Render resultaat
  const body = document.getElementById('test-body');
  const skillHTML = Object.entries(skillScores).map(([skill, {correct, total}])=>{
    if(total===0) return '';
    const sp = Math.round(correct/total*100);
    const skillLabel = t.skills.find(s=>s.type===skill)?.label || skill;
    const color = sp>=80?'var(--mint)':sp>=t.passPercent?'var(--gold-d)':'var(--rose-d)';
    return `<div class="mastery-bar-row">
      <div class="mastery-bar-lbl">${skillLabel.split(':')[0]}</div>
      <div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${sp}%;background:${color}"></div></div>
      <div class="mastery-bar-n">${sp}%</div>
    </div>`;
  }).join('');

  const weakSkills = Object.entries(skillScores)
    .filter(([,{correct,total}])=> total>0 && Math.round(correct/total*100) < t.passPercent)
    .map(([skill])=> t.skills.find(s=>s.type===skill)?.label || skill);

  document.getElementById('test-prog').style.width = '100%';
  document.getElementById('test-counter').textContent = 'Klaar!';
  const timerEl = document.getElementById('test-timer');
  if(timerEl) timerEl.style.display='none';

  body.innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:64px;margin-bottom:12px">${passed?'🎓':'📚'}</div>
      <div style="font-size:32px;font-weight:900;color:${passed?'var(--mint)':'var(--rose-d)'};margin-bottom:4px">
        ${pct}%
      </div>
      <div style="font-size:18px;font-weight:900;color:var(--ink);margin-bottom:4px">
        ${passed?`Gefeliciteerd! Je hebt niveau ${t.label} gehaald!`:`Helaas, je hebt ${t.label} niet gehaald.`}
      </div>
      <div style="font-size:13px;font-weight:700;color:var(--ink-m);margin-bottom:4px">
        ${score} van ${total} goed · Tijd: ${min}:${sec.toString().padStart(2,'0')}
      </div>
      ${passed?`<div style="font-size:14px;font-weight:800;color:var(--mint);margin-top:4px">+${level==='A1'?50:level==='A2'?100:200} XP verdiend! 🌟</div>`:''}
    </div>
    <div style="background:var(--white);border-radius:var(--r-sm);padding:16px;box-shadow:var(--sh);margin-bottom:14px">
      <div style="font-size:13px;font-weight:900;color:var(--ink);margin-bottom:10px">📊 Score per vaardigheid</div>
      <div class="mastery-bars">${skillHTML}</div>
    </div>
    ${!passed && weakSkills.length>0 ? `
    <div style="background:#FEF3C7;border:1.5px solid rgba(217,119,6,.2);border-radius:var(--r-sm);padding:14px 16px;margin-bottom:14px">
      <div style="font-size:12px;font-weight:900;color:#92400e;margin-bottom:6px">💡 Zwakke punten — oefen deze extra:</div>
      <div style="font-size:12px;font-weight:700;color:#78350f;line-height:1.8">
        ${weakSkills.map(s=>`• ${s}`).join('<br>')}
      </div>
      <div style="font-size:11px;font-weight:700;color:#92400e;margin-top:8px">
        Je kunt de toets over 3 dagen opnieuw proberen.
      </div>
    </div>`:''}
    ${passed ? `
    <div style="background:#D1FAE5;border:1.5px solid rgba(16,185,129,.3);border-radius:var(--r-sm);padding:14px 16px;margin-bottom:14px;text-align:center">
      <div style="font-size:24px;margin-bottom:4px">🏆</div>
      <div style="font-size:14px;font-weight:900;color:#065f46">Niveau ${t.label} behaald!</div>
      <div style="font-size:12px;font-weight:700;color:#047857;margin-top:2px">Dit staat nu in je profiel.</div>
    </div>`:''}
    <button class="btn-check" style="position:static;background:linear-gradient(135deg,#F28AA1,#D4607A)" onclick="closeTest();goHome()">
      ${passed?'Terug naar huis 🌸':'Terug — blijf oefenen 💪'}
    </button>`;

  if(passed) sfxFinish();
}
