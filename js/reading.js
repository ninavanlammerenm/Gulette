// ══════════════════════════════════════════════════════
// VERHAALTJES DATA
// ══════════════════════════════════════════════════════

const STORIES = [
  {
    id: 'story_salam',
    icon: '👋',
    title: 'سلام',
    titleNl: 'Begroeting',
    level: 1,
    levelLabel: '⭐ Makkelijk',
    sentences: [
      { words: [
        {hz:'سلام!',tr:'Salam!',nl:'Hallo!'},
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'نینا',tr:'Nina',nl:'Nina'},
        {hz:'اَم.',tr:'am.',nl:'ben.'},
      ]},
      { words: [
        {hz:'تو',tr:'tu',nl:'jij'},
        {hz:'کی',tr:'ki',nl:'wie'},
        {hz:'اَس؟',tr:'as?',nl:'ben/is?'},
      ]},
      { words: [
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'سارا',tr:'Saara',nl:'Sara'},
        {hz:'اَم.',tr:'am.',nl:'ben.'},
      ]},
      { words: [
        {hz:'خوشحال',tr:'khoshhaal',nl:'blij'},
        {hz:'اَم',tr:'am',nl:'ben'},
        {hz:'که',tr:'ke',nl:'dat'},
        {hz:'تو',tr:'tu',nl:'jou'},
        {hz:'دیدم!',tr:'didom!',nl:'ik zag!'},
      ]},
      { words: [
        {hz:'تو',tr:'tu',nl:'jij'},
        {hz:'اَز',tr:'az',nl:'van/uit'},
        {hz:'کجا',tr:'koja',nl:'waar'},
        {hz:'اَس؟',tr:'as?',nl:'kom jij?'},
      ]},
      { words: [
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'اَز',tr:'az',nl:'uit'},
        {hz:'کابل',tr:'Kaabul',nl:'Kabul'},
        {hz:'اَم.',tr:'am.',nl:'kom/ben.'},
      ]},
    ]
  },
  {
    id: 'story_khana',
    icon: '🏠',
    title: 'خانه',
    titleNl: 'Thuis',
    level: 1,
    levelLabel: '⭐ Makkelijk',
    sentences: [
      { words: [
        {hz:'خانه',tr:'khana',nl:'huis'},
        {hz:'مه',tr:'ma',nl:'mijn'},
        {hz:'قشنگ',tr:'qashanq',nl:'mooi'},
        {hz:'اَس.',tr:'as.',nl:'is.'},
      ]},
      { words: [
        {hz:'دَ',tr:'da',nl:'in/thuis'},
        {hz:'خانه',tr:'khana',nl:'huis'},
        {hz:'مادرم',tr:'maadar-am',nl:'mijn moeder'},
        {hz:'اَس.',tr:'as.',nl:'is.'},
      ]},
      { words: [
        {hz:'مادرم',tr:'maadar-am',nl:'mijn moeder'},
        {hz:'غذا',tr:'ghaza',nl:'eten'},
        {hz:'می‌پَزه.',tr:'mi-paza.',nl:'kookt.'},
      ]},
      { words: [
        {hz:'پدرم',tr:'padar-am',nl:'mijn vader'},
        {hz:'دَ',tr:'da',nl:'op/bij'},
        {hz:'کار',tr:'kaar',nl:'werk'},
        {hz:'اَس.',tr:'as.',nl:'is.'},
      ]},
      { words: [
        {hz:'برادرم',tr:'baraadar-am',nl:'mijn broer'},
        {hz:'کوچک',tr:'kuchak',nl:'klein'},
        {hz:'اَس.',tr:'as.',nl:'is.'},
      ]},
      { words: [
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'خانه',tr:'khana',nl:'thuis'},
        {hz:'را',tr:'ra',nl:'(object)'},
        {hz:'دوست',tr:'dost',nl:'graag'},
        {hz:'دارم.',tr:'daaram.',nl:'vind.'},
      ]},
    ]
  },
  {
    id: 'story_baazaar',
    icon: '🛒',
    title: 'دَ بازار',
    titleNl: 'Op de markt',
    level: 2,
    levelLabel: '⭐⭐ Normaal',
    sentences: [
      { words: [
        {hz:'صبح',tr:'sobh',nl:'ochtend'},
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'دَ',tr:'da',nl:'naar'},
        {hz:'بازار',tr:'baazaar',nl:'markt'},
        {hz:'رفتم.',tr:'raftam.',nl:'ging.'},
      ]},
      { words: [
        {hz:'بازار',tr:'baazaar',nl:'markt'},
        {hz:'شلوغ',tr:'shaluq',nl:'druk/vol'},
        {hz:'بود.',tr:'bud.',nl:'was.'},
      ]},
      { words: [
        {hz:'یک',tr:'yak',nl:'een'},
        {hz:'دکاندار',tr:'dokaandaar',nl:'winkelier'},
        {hz:'نان',tr:'naan',nl:'brood'},
        {hz:'می‌فروخت.',tr:'mi-frokht.',nl:'verkocht.'},
      ]},
      { words: [
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'پرسیدم:',tr:'porsiidom:',nl:'vroeg:'},
        {hz:'"یک',tr:'"yak',nl:'"een'},
        {hz:'نان',tr:'naan',nl:'brood'},
        {hz:'چنده؟"',tr:'chanda?"',nl:'hoeveel?"'},
      ]},
      { words: [
        {hz:'او',tr:'oo',nl:'hij'},
        {hz:'گفت:',tr:'guft:',nl:'zei:'},
        {hz:'"ده',tr:'"dah',nl:'"tien'},
        {hz:'افغانی."',tr:'Afghaani."',nl:'afghani."'},
      ]},
      { words: [
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'نان',tr:'naan',nl:'brood'},
        {hz:'خریدم',tr:'kharidom',nl:'kocht'},
        {hz:'و',tr:'o',nl:'en'},
        {hz:'خوشحال',tr:'khoshhaal',nl:'blij'},
        {hz:'شدم.',tr:'shodom.',nl:'werd.'},
      ]},
    ]
  },
  {
    id: 'story_roz',
    icon: '☀️',
    title: 'روز خوب',
    titleNl: 'Een goede dag',
    level: 2,
    levelLabel: '⭐⭐ Normaal',
    sentences: [
      { words: [
        {hz:'صبح',tr:'sobh',nl:'ochtend'},
        {hz:'زود',tr:'zud',nl:'vroeg'},
        {hz:'مه',tr:'ma',nl:'ik'},
        {hz:'بیدار',tr:'bidaar',nl:'wakker'},
        {hz:'شدم.',tr:'shodom.',nl:'werd.'},
      ]},
      { words: [
        {hz:'آو',tr:'aaw',nl:'water'},
        {hz:'خوردم',tr:'khordom',nl:'dronk'},
        {hz:'و',tr:'o',nl:'en'},
        {hz:'ناشتا',tr:'naashta',nl:'ontbijt'},
        {hz:'خوردم.',tr:'khordom.',nl:'at.'},
      ]},
      { words: [
        {hz:'بعد',tr:"ba'd",nl:'daarna'},
        {hz:'دَ',tr:'da',nl:'naar'},
        {hz:'مکتب',tr:'maktab',nl:'school'},
        {hz:'رفتم.',tr:'raftam.',nl:'ging.'},
      ]},
      { words: [
        {hz:'دوستانم',tr:'doostaana-am',nl:'mijn vrienden'},
        {hz:'مه',tr:'ma',nl:'mij'},
        {hz:'دیدن.',tr:'didan.',nl:'zagen.'},
      ]},
      { words: [
        {hz:'مو',tr:'mo',nl:'wij'},
        {hz:'باهم',tr:'baakham',nl:'samen'},
        {hz:'بازی',tr:'baazi',nl:'spelletje'},
        {hz:'کردیم.',tr:'kardiim.',nl:'speelden.'},
      ]},
      { words: [
        {hz:'روز',tr:'roz',nl:'dag'},
        {hz:'خوب',tr:'khub',nl:'goed'},
        {hz:'بود.',tr:'bud.',nl:'was.'},
      ]},
    ]
  },
];

// ══════════════════════════════════════════════════════
// LEESLOGICA
// ══════════════════════════════════════════════════════

let _rdInReader = false;

function renderReadingList() {
  const container = document.getElementById('rd-list');
  if (!container) return;
  container.innerHTML = '';
  STORIES.forEach(story => {
    const done = (S.readStories || []).includes(story.id);
    const card = document.createElement('div');
    card.className = 'rd-card' + (done ? ' rd-card-done' : '');
    card.innerHTML = `
      <div class="rd-card-icon">${story.icon}</div>
      <div class="rd-card-body">
        <div class="rd-card-title">${story.titleNl}</div>
        <div class="rd-card-hz" style="font-family:'Noto Naskh Arabic',serif;direction:rtl;font-size:17px">${story.title}</div>
        <div class="rd-card-meta">${story.levelLabel} · ${story.sentences.length} zinnen</div>
      </div>
      <div class="rd-card-arr">${done ? '✓' : '→'}</div>
    `;
    card.onclick = () => openStory(story.id);
    container.appendChild(card);
  });
}

function openStory(id) {
  const story = STORIES.find(s => s.id === id);
  if (!story) return;
  _rdInReader = true;

  document.getElementById('rd-list-view').style.display = 'none';
  document.getElementById('rd-reader-view').style.display = 'flex';

  document.getElementById('rd-reader-title').textContent = story.titleNl + ' · ' + story.title;

  const body = document.getElementById('rd-reader-body');
  body.innerHTML = '';
  body.scrollTop = 0;

  story.sentences.forEach(sentence => {
    const sentEl = document.createElement('div');
    sentEl.className = 'rd-sent';

    // Hazaragi (RTL) – elke woord apart tappable
    const hzLine = document.createElement('div');
    hzLine.className = 'rd-hz-line';
    sentence.words.forEach(word => {
      const span = document.createElement('span');
      span.className = 'rd-word';
      span.textContent = word.hz;
      span.onclick = e => { e.stopPropagation(); showRdTooltip(e.currentTarget, word); };
      hzLine.appendChild(span);
      hzLine.appendChild(document.createTextNode(' '));
    });
    sentEl.appendChild(hzLine);

    // Romanisering
    const trLine = document.createElement('div');
    trLine.className = 'rd-tr-line';
    trLine.textContent = sentence.words.map(w => w.tr).join(' ');
    sentEl.appendChild(trLine);

    // Nederlandse vertaling (verborgen, knop om te onthullen)
    const nlWrap = document.createElement('div');
    nlWrap.className = 'rd-nl-wrap';
    const nlBtn = document.createElement('button');
    nlBtn.className = 'rd-nl-btn';
    nlBtn.textContent = '🇳🇱 Vertaling';
    const nlText = document.createElement('div');
    nlText.className = 'rd-nl-text';
    nlText.style.display = 'none';
    nlText.textContent = sentence.words
      .map(w => w.nl)
      .join(' ')
      .replace(/\(object\)/g, '')
      .replace(/  +/g, ' ')
      .trim();
    nlBtn.onclick = () => {
      const hidden = nlText.style.display === 'none';
      nlText.style.display = hidden ? 'block' : 'none';
      nlBtn.textContent = hidden ? '🇳🇱 Verberg' : '🇳🇱 Vertaling';
    };
    nlWrap.appendChild(nlBtn);
    nlWrap.appendChild(nlText);
    sentEl.appendChild(nlWrap);

    body.appendChild(sentEl);
  });

  // Markeer als gelezen
  if (!S.readStories) S.readStories = [];
  if (!S.readStories.includes(id)) {
    S.readStories.push(id);
    save();
  }
}

function closeStory() {
  _rdInReader = false;
  document.getElementById('rd-reader-view').style.display = 'none';
  document.getElementById('rd-list-view').style.display = 'flex';
  renderReadingList();
}

// ── Woordtooltip ──
let _rdTipTimer = null;

function showRdTooltip(target, word) {
  let tip = document.getElementById('rd-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'rd-tip';
    tip.className = 'rd-tip';
    document.getElementById('app').appendChild(tip);
  }
  tip.innerHTML = `<div class="rd-tip-nl">${word.nl}</div><div class="rd-tip-tr">${word.tr}</div>`;

  const rect = target.getBoundingClientRect();
  const appRect = document.getElementById('app').getBoundingClientRect();
  const left = Math.max(8, Math.min(
    rect.left - appRect.left + rect.width / 2 - 70,
    appRect.width - 148
  ));
  tip.style.left = left + 'px';
  tip.style.top = (rect.top - appRect.top - 64) + 'px';
  tip.style.display = 'block';

  clearTimeout(_rdTipTimer);
  _rdTipTimer = setTimeout(() => { tip.style.display = 'none'; }, 2800);
}

document.addEventListener('click', () => {
  const tip = document.getElementById('rd-tip');
  if (tip) tip.style.display = 'none';
  clearTimeout(_rdTipTimer);
});
