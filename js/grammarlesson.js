// ══════════════════════════════════════════════════════
// GRAMMAR LESSON ENGINE — custom exercise types per rule
// ══════════════════════════════════════════════════════

const GRAM_EX={

  // ─── VOORNAAMWOORDEN: koppel persoon ↔ voornaamwoord ───
  'gram1_pronouns':{exercises:[
    {type:'explain',text:'Hazaragi heeft 6 voornaamwoorden. Elk bepaalt de werkwoorduitgang.',example:{hz:'من هزاره هستم',tr:'ma hazaara hastom',nl:'Ik ben Hazara'},highlight:'من'},
    {type:'explain',text:'"مو" (mah) = wij — typisch Hazaragi! Iraans zegt "ما".',example:{hz:'مو با هم می‌ریم',tr:'mah baa ham me-rim',nl:'Wij gaan samen'},highlight:'مو'},
    {type:'match',instruction:'Koppel elk voornaamwoord aan de juiste persoon',pairs:[
      {left:'من',right:'ik'},{left:'تو',right:'jij'},{left:'او',right:'hij/zij'},{left:'مو',right:'wij'},{left:'شما',right:'jullie'},{left:'آنا',right:'zij (mv)'}
    ]},
    {type:'fillblank',instruction:'Vul het juiste voornaamwoord in',before:'',blank:'مو',after:'با هم می‌ریم',options:['من','مو','شما'],explanation:'"مو" (mah) = wij — typisch Hazaragi'},
    {type:'fillblank',instruction:'Wie spreekt hier?',before:'',blank:'تو',after:'کجا هستی؟',options:['من','تو','او'],explanation:'"تو" (tu) = jij'},
  ]},

  // ─── WERKWOORD ZIJN: vervoeg "zijn" per persoon ───
  'gram1_zijn':{exercises:[
    {type:'explain',text:'"اَس" (as) = is — dit hoor je constant in Hazaragi. "نیس" (nis) = is niet.',example:{hz:'هوا گرم اَس',tr:'hawaa garm as',nl:'Het weer is warm'},highlight:'اَس'},
    {type:'conjugate',instruction:'Kies de juiste vorm van "zijn"',verb:'zijn',items:[
      {person:'من (ik)',correct:'هستم',options:['هستم','هستی','اَس']},
      {person:'تو (jij)',correct:'هستی',options:['هستم','هستی','اَس']},
      {person:'او (hij/zij)',correct:'اَس',options:['هستم','هستی','اَس']},
      {person:'مو (wij)',correct:'هستیم',options:['هستیم','هستین','هستم']},
    ]},
    {type:'transform',instruction:'Maak deze zin negatief',items:[
      {given:'هستم',answer:'نیستم',hint:'هستم → نیستم'},
      {given:'اَس',answer:'نیس',hint:'اَس → نیس'},
      {given:'هستی',answer:'نیستی',hint:'هستی → نیستی'},
    ]},
  ]},

  // ─── BEZIT: plak de juiste bezitsuitgang ───
  'gram1_bezit':{exercises:[
    {type:'explain',text:'Bezit maak je door een uitgang te plakken: -م (mijn), -ت (jouw), -ش (zijn/haar).',example:{hz:'نامم گل اَس',tr:'naamam gol as',nl:'Mijn naam is Gol'},highlight:'م'},
    {type:'suffix',instruction:'Plak de juiste bezitsuitgang aan het woord',items:[
      {word:'نام',owner:'mijn',correct:'م',options:['م','ت','ش'],result:'نامم'},
      {word:'نام',owner:'jouw',correct:'ت',options:['م','ت','ش'],result:'نامت'},
      {word:'نام',owner:'zijn/haar',correct:'ش',options:['م','ت','ش'],result:'نامش'},
      {word:'مادر',owner:'mijn',correct:'م',options:['م','ت','ش'],result:'مادرم'},
      {word:'کتاب',owner:'zijn/haar',correct:'ش',options:['م','ت','ش'],result:'کتابش'},
    ]},
  ]},

  // ─── MEERVOUD: maak enkelvoud → meervoud ───
  'gram1_meervoud':{exercises:[
    {type:'explain',text:'Meervoud: plak "-ها" achter het woord. Altijd. کتاب → کتاب‌ها.',example:{hz:'بچه‌ها بازی می‌کنن',tr:'bacha-haa baazi mi-konan',nl:'De kinderen spelen'},highlight:'ها'},
    {type:'transform',instruction:'Maak het woord meervoud (voeg -ها toe)',items:[
      {given:'کتاب',answer:'کتاب‌ها',hint:'کتاب + ها = کتاب‌ها (boeken)'},
      {given:'بچه',answer:'بچه‌ها',hint:'بچه + ها = بچه‌ها (kinderen)'},
      {given:'خانه',answer:'خانه‌ها',hint:'خانه + ها = خانه‌ها (huizen)'},
      {given:'دوست',answer:'دوست‌ها',hint:'دوست + ها = دوست‌ها (vrienden)'},
    ]},
    {type:'suffix',instruction:'Maak meervoud + bezit: "-هایم" = mijn (meervoud)',items:[
      {word:'کتاب‌',owner:'mijn (mv)',correct:'هایم',options:['ها','هایم','هایت'],result:'کتاب‌هایم'},
      {word:'دوست‌',owner:'mijn (mv)',correct:'هایم',options:['ها','هایم','هایش'],result:'دوست‌هایم'},
    ]},
  ]},

  // ─── TEGENWOORDIGE TIJD: vervoeg werkwoorden ───
  'gram2_heden':{exercises:[
    {type:'explain',text:'Tegenwoordige tijd: "می‌" + stam + uitgang. Uitgangen: -om (ik), -i (jij), -a (hij/zij).',example:{hz:'هر روز مکتب می‌رم',tr:'har roz maktab mi-rom',nl:'Elke dag ga ik naar school'},highlight:'می‌رم'},
    {type:'conjugate',instruction:'Vervoeg "رفتن" (gaan) in de tegenwoordige tijd',verb:'gaan (رفتن)',items:[
      {person:'من',correct:'می‌رم',options:['می‌رم','می‌ری','می‌ره']},
      {person:'تو',correct:'می‌ری',options:['می‌رم','می‌ری','می‌ره']},
      {person:'او',correct:'می‌ره',options:['می‌رم','می‌ری','می‌ره']},
      {person:'مو',correct:'می‌ریم',options:['می‌ریم','می‌رین','می‌رن']},
    ]},
    {type:'conjugate',instruction:'Vervoeg "خوردن" (eten)',verb:'eten (خوردن)',items:[
      {person:'من',correct:'می‌خورم',options:['می‌خورم','می‌خوری','می‌خوره']},
      {person:'تو',correct:'می‌خوری',options:['می‌خورم','می‌خوری','می‌خوره']},
    ]},
  ]},

  // ─── NEGATIE: maak zinnen negatief ───
  'gram2_negatie':{exercises:[
    {type:'explain',text:'Ontkennen: "نه" vóór het werkwoord. می‌رم → نمی‌رم. اَس → نیس.',example:{hz:'نمی‌فامم',tr:'na-mi-famom',nl:'Ik weet het niet'},highlight:'نمی‌فامم'},
    {type:'transform',instruction:'Maak deze zin negatief',items:[
      {given:'می‌رم',answer:'نمی‌رم',hint:'می‌رم → نمی‌رم (ik ga niet)'},
      {given:'می‌خوام',answer:'نمی‌خوام',hint:'می‌خوام → نمی‌خوام (ik wil niet)'},
      {given:'می‌فامم',answer:'نمی‌فامم',hint:'می‌فامم → نمی‌فامم (ik weet niet)'},
      {given:'اَس',answer:'نیس',hint:'اَس → نیس (is niet)'},
      {given:'هستم',answer:'نیستم',hint:'هستم → نیستم (ik ben niet)'},
    ]},
  ]},

  // ─── GEBIEDENDE WIJS: maak bevelen ───
  'gram2_imperatief':{exercises:[
    {type:'explain',text:'Gebiedende wijs: "بـ" vóór de stam. برو = ga! Ontkenning: نرو = ga niet!',example:{hz:'بیا اینجا',tr:'biya injaa',nl:'Kom hier'},highlight:'بیا'},
    {type:'match',instruction:'Koppel het bevel aan de betekenis',pairs:[
      {left:'برو',right:'Ga!'},{left:'بیا',right:'Kom!'},{left:'بخور',right:'Eet!'},{left:'بده',right:'Geef!'},{left:'ببین',right:'Kijk!'}
    ]},
    {type:'transform',instruction:'Maak het bevel negatief (verbod)',items:[
      {given:'برو (ga!)',answer:'نرو',hint:'برو → نرو (ga niet!)'},
      {given:'بخور (eet!)',answer:'نخور',hint:'بخور → نخور (eet niet!)'},
      {given:'بیا (kom!)',answer:'نیا',hint:'بیا → نیا (kom niet!)'},
    ]},
  ]},

  // ─── VRAAGZINNEN: koppel vraagwoord ↔ betekenis ───
  'gram2_vragen':{exercises:[
    {type:'explain',text:'Vraagwoorden: کجا (waar), چی (wat), چرا (waarom), چتور (hoe — Hazaragi!).',example:{hz:'کجا می‌ری؟',tr:'koja me-ri?',nl:'Waar ga je naartoe?'},highlight:'کجا'},
    {type:'match',instruction:'Koppel elk vraagwoord aan de juiste betekenis',pairs:[
      {left:'کجا',right:'waar'},{left:'چی',right:'wat'},{left:'کی',right:'wie'},{left:'چرا',right:'waarom'},{left:'چتور',right:'hoe'},{left:'چند',right:'hoeveel'}
    ]},
    {type:'fillblank',instruction:'Welk vraagwoord past?',before:'',blank:'چرا',after:'نمی‌آی؟',options:['چرا','کجا','چتور'],explanation:'چرا = waarom'},
  ]},

  // ─── ZINSBOUW S-O-W: zet woorden in Hazaragi volgorde ───
  'gram3_sov':{exercises:[
    {type:'explain',text:'Hazaragi: werkwoord ALTIJD aan het einde. "Ik eet brood" → من نان می‌خورم.',example:{hz:'من نان می‌خورم',tr:'ma naan mi-khorom',nl:'Ik eet brood'},highlight:'می‌خورم'},
    {type:'build',nl:'Ik eet brood',words:['می‌خورم','من','نان'],correct:'من نان می‌خورم'},
    {type:'build',nl:'Wij drinken thee',words:['می‌خوریم','مو','چای'],correct:'مو چای می‌خوریم'},
    {type:'build',nl:'Hij leest een boek',words:['می‌خوانه','او','کتاب'],correct:'او کتاب می‌خوانه'},
  ]},

  // ─── VERLEDEN TIJD: herken verleden vs tegenwoordig ───
  'gram3_verleden':{exercises:[
    {type:'explain',text:'Verleden tijd: verleden stam + uitgang, ZONDER "می‌". رفتم = ik ging.',example:{hz:'دیروز مکتب رفتم',tr:'diroz maktab raftom',nl:'Gisteren ging ik naar school'},highlight:'رفتم'},
    {type:'conjugate',instruction:'Vervoeg "رفتن" (gaan) in de verleden tijd',verb:'gaan — verleden',items:[
      {person:'من',correct:'رفتم',options:['رفتم','رفتی','رفت']},
      {person:'تو',correct:'رفتی',options:['رفتم','رفتی','رفت']},
      {person:'او',correct:'رفت',options:['رفتم','رفتی','رفت']},
    ]},
    {type:'transform',instruction:'Maak deze verleden zin negatief',items:[
      {given:'رفتم',answer:'نرفتم',hint:'رفتم → نرفتم (ik ging niet)'},
      {given:'خوردم',answer:'نخوردم',hint:'خوردم → نخوردم (ik at niet)'},
    ]},
  ]},

  // ─── VOORZETSELS: kies het juiste voorzetsel ───
  'gram3_postposities':{exercises:[
    {type:'explain',text:'"دَ" (da) = Hazaragi voor in/naar/bij. Farsi zegt "در" of "به" — Hazaragi zegt "دَ".',example:{hz:'دَ مکتب می‌رم',tr:'da maktab mi-rom',nl:'Ik ga naar school'},highlight:'دَ'},
    {type:'match',instruction:'Koppel elk voorzetsel aan de betekenis',pairs:[
      {left:'دَ',right:'in/naar (Hazaragi!)'},{left:'از',right:'van/uit'},{left:'با',right:'met'},{left:'برای',right:'voor'},{left:'بدون',right:'zonder'}
    ]},
    {type:'fillblank',instruction:'Kies het juiste voorzetsel',before:'',blank:'دَ',after:'خانه هستم',options:['دَ','از','با'],explanation:'"دَ" = in/bij — typisch Hazaragi!'},
  ]},

  // ─── MODALE WERKWOORDEN: kunnen/moeten/willen ───
  'gram4_modal':{exercises:[
    {type:'explain',text:'"می‌تانم" = ik kan (Hazaragi!). "باید" = moet (verandert nooit). "می‌خوام" = ik wil.',example:{hz:'نمی‌تانم بیام',tr:'na-mi-taanom biyoom',nl:'Ik kan niet komen'},highlight:'نمی‌تانم'},
    {type:'match',instruction:'Koppel de modale werkwoorden',pairs:[
      {left:'می‌تانم',right:'ik kan'},{left:'باید',right:'moet'},{left:'نباید',right:'mag niet'},{left:'می‌خوام',right:'ik wil'}
    ]},
    {type:'fillblank',instruction:'Welk modaal werkwoord past?',before:'',blank:'باید',after:'بری',options:['باید','شاید','می‌تانم'],explanation:'باید = moet — verandert nooit'},
    {type:'fillblank',instruction:'Welk modaal werkwoord past?',before:'',blank:'نمی‌تانم',after:'بیام',options:['نمی‌تانم','نمی‌خوام','باید'],explanation:'نمی‌تانم = ik kan niet (Hazaragi)'},
  ]},

  // ─── TOEKOMST: herken hoe toekomst wordt gemaakt ───
  'gram4_future':{exercises:[
    {type:'explain',text:'Geen aparte toekomsttijd! Gebruik tijdwoord + tegenwoordige tijd: فردا می‌رم = morgen ga ik.',example:{hz:'فردا می‌رم',tr:'fardaa mi-rom',nl:'Morgen ga ik'},highlight:'فردا'},
    {type:'fillblank',instruction:'Welk tijdwoord maakt deze zin toekomstig?',before:'',blank:'فردا',after:'می‌آم',options:['فردا','دیروز','الان'],explanation:'"فردا" (morgen) maakt de zin toekomstig'},
    {type:'build',nl:'Morgen kom ik vroeg',words:['می‌آم','فردا','زود'],correct:'فردا زود می‌آم'},
  ]},

  // ─── CONDITIONALS: bouw als...dan zinnen ───
  'gram4_conditional':{exercises:[
    {type:'explain',text:'"اگر" (agar) = als. Start de voorwaardelijke zin.',example:{hz:'اگر بیای، چای می‌پزم',tr:'agar biyaayi, chaay mi-pazom',nl:'Als jij komt, zet ik thee'},highlight:'اگر'},
    {type:'build',nl:'Als jij komt, zet ik thee',words:['می‌پزم','اگر','چای','بیای'],correct:'اگر بیای چای می‌پزم'},
    {type:'fillblank',instruction:'Welk woord begint een als-dan zin?',before:'',blank:'اگر',after:'بیای، خوشم می‌شه',options:['اگر','چون','اما'],explanation:'اگر = als'},
  ]},

  // ─── BIJWOORDEN: koppel bijwoord ↔ betekenis ───
  'gram5_adverbs':{exercises:[
    {type:'explain',text:'Bijwoorden staan vóór het werkwoord: خیلی خوب = heel goed. هیچ‌وقت نمی‌رم = ik ga nooit.',example:{hz:'خیلی خوب',tr:'kheli khob',nl:'Heel goed'},highlight:'خیلی'},
    {type:'match',instruction:'Koppel elk bijwoord aan de betekenis',pairs:[
      {left:'خیلی',right:'heel/erg'},{left:'همیشه',right:'altijd'},{left:'هیچ‌وقت',right:'nooit'},{left:'هنوز',right:'nog steeds'},{left:'دیگه',right:'niet meer'}
    ]},
  ]},

  // ─── VERGELIJKINGEN: maak de vergrotende/overtreffende trap ───
  'gram5_compare':{exercises:[
    {type:'explain',text:'Vergrotende trap: voeg "-تر" toe. بزرگ → بزرگتر. Uitzondering: خوب → بهتر.',example:{hz:'تو بهتر اَز من هستی',tr:'tu behtar az ma hasti',nl:'Jij bent beter dan ik'},highlight:'بهتر'},
    {type:'transform',instruction:'Maak de vergrotende trap (voeg -تر toe)',items:[
      {given:'بزرگ (groot)',answer:'بزرگتر',hint:'بزرگ + تر = بزرگتر (groter)'},
      {given:'کوچک (klein)',answer:'کوچکتر',hint:'کوچک + تر = کوچکتر (kleiner)'},
      {given:'خوب (goed)',answer:'بهتر',hint:'خوب → بهتر (onregelmatig!)'},
      {given:'بد (slecht)',answer:'بدتر',hint:'بد + تر = بدتر (slechter)'},
    ]},
    {type:'transform',instruction:'Maak de overtreffende trap (voeg -ترین toe)',items:[
      {given:'خوب',answer:'بهترین',hint:'خوب → بهترین (het beste)'},
      {given:'بزرگ',answer:'بزرگترین',hint:'بزرگ + ترین = بزرگترین (het grootst)'},
    ]},
  ]},

  // ─── VOEGWOORDEN: koppel en gebruik in context ───
  'gram5_conjunctions':{exercises:[
    {type:'explain',text:'اما (maar), چون (omdat), وختی (wanneer — Hazaragi!), یا (of).',example:{hz:'می‌خوام اما نمی‌تانم',tr:'mi-khom amma na-mi-taanom',nl:'Ik wil maar ik kan niet'},highlight:'اما'},
    {type:'match',instruction:'Koppel elk voegwoord aan de betekenis',pairs:[
      {left:'اما',right:'maar'},{left:'چون',right:'omdat'},{left:'وختی',right:'wanneer'},{left:'یا',right:'of'},{left:'پس',right:'dus'}
    ]},
    {type:'fillblank',instruction:'Welk voegwoord past?',before:'نرفتم',blank:'چون',after:'مریض بودم',options:['چون','اما','پس'],explanation:'چون = omdat'},
  ]},

  // ─── VRAAGWOORDEN VERDIEPING: samengestelde vragen ───
  'gram6_questions':{exercises:[
    {type:'explain',text:'Samengestelde vragen: از کجا (waarvandaan), با کی (met wie), چنده (hoeveel — Hazaragi!).',example:{hz:'از کجا آمدی؟',tr:'az koja aamadi?',nl:'Waar kom je vandaan?'},highlight:'از کجا'},
    {type:'match',instruction:'Koppel de samengestelde vragen',pairs:[
      {left:'از کجا',right:'waarvandaan'},{left:'با کی',right:'met wie'},{left:'برای کی',right:'voor wie'},{left:'چنده',right:'hoeveel (Hazaragi)'}
    ]},
  ]},

  // ─── TIJDSUITDRUKKINGEN: koppel en gebruik ───
  'gram6_time':{exercises:[
    {type:'explain',text:'Tijdswoorden: هنوز (nog), دیگه (niet meer), همیشه (altijd), بالاخره (eindelijk).',example:{hz:'هنوز نیامده',tr:'hanoz nayaamada',nl:'Hij is nog niet gekomen'},highlight:'هنوز'},
    {type:'match',instruction:'Koppel het tijdswoord aan de betekenis',pairs:[
      {left:'هنوز',right:'nog steeds'},{left:'دیگه',right:'niet meer'},{left:'همیشه',right:'altijd'},{left:'هیچ‌وقت',right:'nooit'},{left:'بالاخره',right:'eindelijk'}
    ]},
    {type:'fillblank',instruction:'Welk tijdswoord past?',before:'',blank:'دیگه',after:'نمی‌آم',options:['دیگه','هنوز','همیشه'],explanation:'دیگه = niet meer'},
  ]},

  // ─── VOORWAARDELIJKE ZINNEN VERDIEPING ───
  'gram6_if':{exercises:[
    {type:'explain',text:'"وختی" = wanneer (Hazaragi!). "مگر" = tenzij. "با اینکه" = hoewel.',example:{hz:'وختی رسیدی زنگ بزن',tr:'wakhti residi zang bezan',nl:'Bel wanneer je aankomt'},highlight:'وختی'},
    {type:'match',instruction:'Koppel de verbinders',pairs:[
      {left:'وختی',right:'wanneer'},{left:'مگر',right:'tenzij'},{left:'با اینکه',right:'hoewel'},{left:'چون',right:'omdat'}
    ]},
    {type:'build',nl:'Als je komt, eten we samen',words:['می‌خوریم','اگر','هم','با','بیای'],correct:'اگر بیای با هم می‌خوریم'},
  ]},

  // ─── EZAFE: combineer woorden met de koppel-e ───
  'gram7_ezafe':{exercises:[
    {type:'explain',text:'Ezafe: "-e" koppelklank. خانه‌ی ما = ons huis. Bijv.nw. staat ACHTER het naamwoord.',example:{hz:'خانه‌ی ما بزرگ اَس',tr:'khaana-ye mah bozorg as',nl:'Ons huis is groot'},highlight:'ی'},
    {type:'build',nl:'Ons huis is groot',words:['اَس','خانه‌ی','بزرگ','ما'],correct:'خانه‌ی ما بزرگ اَس'},
    {type:'build',nl:'Breng warme thee',words:['بیار','چای','گرم'],correct:'چای گرم بیار'},
  ]},

  // ─── BIJVOEGLIJKE NAAMWOORDEN: volgorde oefenen ───
  'gram7_adj':{exercises:[
    {type:'explain',text:'Bijv.nw. staat ACHTER het zelfst.nw.: خانه بزرگ = groot huis (niet "بزرگ خانه").',example:{hz:'خانه بزرگ می‌خوام',tr:'khaana bozorg mi-khom',nl:'Ik wil een groot huis'},highlight:'بزرگ'},
    {type:'recognition',question:'Welke woordvolgorde is correct Afghaans?',correct:'خانه بزرگ',wrong:['بزرگ خانه','بزرگ اَس خانه'],explanation:'Bijv.nw. staat NA het zelfst.nw.'},
    {type:'recognition',question:'Hoe zeg je "vers brood" in het Afghaans?',correct:'نان تازه',wrong:['تازه نان','تازه اَس نان'],explanation:'Bijv.nw. (تازه) NA het naamwoord (نان)'},
    {type:'build',nl:'Het beste eten is manto',words:['اَس','بهترین','مانتو','غذا'],correct:'بهترین غذا مانتو اَس'},
  ]},

  // ─── ONVOLTOOID VERLEDEN: herken gewoonte vs eenmalig ───
  'gram7_imperfect':{exercises:[
    {type:'explain',text:'Onvoltooid verleden: می‌ + verleden stam + uitgang. Voor gewoonten uit het verleden.',example:{hz:'قبلاً اینجا زندگی می‌کردم',tr:'qablan injaa zendagi mi-kardom',nl:'Vroeger woonde ik hier'},highlight:'می‌کردم'},
    {type:'recognition',question:'Welke zin beschrijft een GEWOONTE uit het verleden?',correct:'هر روز بازی می‌کردم',wrong:['بازی کردم','بازی می‌کنم'],explanation:'"می‌کردم" (met می‌) = gewoonte. "کردم" = eenmalig.'},
    {type:'conjugate',instruction:'Vervoeg "کردن" (doen) in de onvoltooid verleden tijd',verb:'doen — gewoonte',items:[
      {person:'من',correct:'می‌کردم',options:['می‌کردم','کردم','می‌کنم']},
      {person:'تو',correct:'می‌کردی',options:['می‌کردی','کردی','می‌کنی']},
      {person:'او',correct:'می‌کرد',options:['می‌کرد','کرد','می‌کنه']},
    ]},
  ]},

  // ─── VOLTOOID TEGENWOORDIGE TIJD: herken de vorm ───
  'gram7_perfect':{exercises:[
    {type:'explain',text:'Voltooid: stam + "-ه" + suffix. رفته‌ام = ik ben gegaan. Voor iets dat klaar is en nu relevant.',example:{hz:'نان خورده‌ام',tr:'naan khordaam',nl:'Ik heb brood gegeten'},highlight:'خورده‌ام'},
    {type:'transform',instruction:'Maak de voltooid tegenwoordige tijd (stam + ه + ام)',items:[
      {given:'رفتن (gaan)',answer:'رفته‌ام',hint:'رفت + ه + ام = رفته‌ام (ik ben gegaan)'},
      {given:'خوردن (eten)',answer:'خورده‌ام',hint:'خورد + ه + ام = خورده‌ام (ik heb gegeten)'},
      {given:'دیدن (zien)',answer:'دیده‌ام',hint:'دید + ه + ام = دیده‌ام (ik heb gezien)'},
    ]},
  ]},

  // ─── که-BIJZINNEN: bouw samengestelde zinnen ───
  'gram7_ke':{exercises:[
    {type:'explain',text:'"که" (ka) = dat/die. Verbindt twee zinnen. می‌فامم که = ik weet dat.',example:{hz:'می‌فامم که فردا می‌آی',tr:'mi-famom ka fardaa mi-aayi',nl:'Ik weet dat je morgen komt'},highlight:'که'},
    {type:'build',nl:'Ik weet dat je morgen komt',words:['می‌آی','می‌فامم','فردا','که'],correct:'می‌فامم که فردا می‌آی'},
    {type:'fillblank',instruction:'Welk woord verbindt de twee zinnen?',before:'فکر می‌کنم',blank:'که',after:'خوب اَس',options:['که','با','از'],explanation:'که = dat'},
  ]},

  // ─── مال — BEZIT ALS ZELFSTANDIG WOORD ───
  'gram7_maal':{exercises:[
    {type:'explain',text:'"مال" (maal) = van. مال من = van mij. مال کی؟ = van wie?',example:{hz:'این مال من اَس',tr:'ain maal-e ma as',nl:'Dit is van mij'},highlight:'مال'},
    {type:'match',instruction:'Koppel de bezitsvormen',pairs:[
      {left:'مال من',right:'van mij'},{left:'مال تو',right:'van jou'},{left:'مال او',right:'van hem/haar'},{left:'مال کی؟',right:'van wie?'}
    ]},
    {type:'build',nl:'Dit is van mij, niet van jou',words:['مال تو','اَس','نه','این','مال من'],correct:'این مال من اَس نه مال تو'},
  ]},
};

// ══════════════════════════════════════════════════════
// ENGINE
// ══════════════════════════════════════════════════════
let _GL=null,_GSteps=[],_GI=0;

function openGrammarLesson(ruleId){
  let lesson=null;
  for(const ch of CHAPTERS){
    const found=(ch.lessons||[]).find(l=>l.id===ruleId);
    if(found){lesson=found;break;}
  }
  if(!lesson)return;
  _GL=lesson;
  const ex=GRAM_EX[ruleId];
  if(!ex||!ex.exercises||!ex.exercises.length){showToast('Geen oefeningen beschikbaar');return;}
  _GSteps=ex.exercises;
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
  else if(step.type==='conjugate') _renderConjugate(step,body);
  else if(step.type==='transform') _renderTransform(step,body);
  else if(step.type==='match') _renderMatch(step,body);
  else if(step.type==='suffix') _renderSuffix(step,body);
  else if(step.type==='fillblank') _renderFillblank(step,body);
  else if(step.type==='recognition') _renderRecognition(step,body);
  else if(step.type==='build') _renderBuild(step,body);
  else nextGrammarStep();
}

function nextGrammarStep(){_GI++;renderGrammarStep();}

// ── EXPLAIN ──
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

// ── CONJUGATE: vervoeg een werkwoord ──
function _renderConjugate(step,body){
  let html=`<div class="gl-card">
    <div class="gl-phase-tag">🔄 Vervoegen</div>
    <div class="gl-question">${step.instruction}</div>
    <div style="font-size:13px;font-weight:700;color:var(--ink-m);margin-bottom:14px">${step.verb}</div>`;
  step.items.forEach((item,i)=>{
    const qid='conj_'+i;
    html+=`<div class="gl-conj-row" id="${qid}">
      <span class="gl-conj-person">${item.person}</span>
      <span class="gl-conj-arrow">→</span>
      <div class="gl-conj-opts">${shuffle(item.options).map(o=>
        `<button class="gl-fill-opt" onclick="_checkConj(this,'${o}','${item.correct}','${qid}')">${o}</button>`
      ).join('')}</div>
    </div>`;
  });
  html+=`<div class="gl-fb" id="gl-fb"></div></div>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:12px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
  body.innerHTML=html;
}
function _checkConj(btn,chosen,correct,qid){
  const row=document.getElementById(qid);
  row.querySelectorAll('.gl-fill-opt').forEach(b=>b.disabled=true);
  if(chosen===correct) btn.classList.add('gl-correct');
  else{btn.classList.add('gl-wrong');row.querySelectorAll('.gl-fill-opt').forEach(b=>{if(b.textContent===correct)b.classList.add('gl-correct');});}
  const step=_GSteps[_GI];
  const rows=document.querySelectorAll('.gl-conj-row');
  const answered=[...rows].filter(r=>r.querySelector('.gl-fill-opt:disabled')).length;
  if(answered>=step.items.length) document.getElementById('gl-next').style.display='block';
}

// ── TRANSFORM: verander een woord/zin ──
function _renderTransform(step,body){
  let html=`<div class="gl-card">
    <div class="gl-phase-tag">🔄 Omvormen</div>
    <div class="gl-question">${step.instruction}</div>`;
  step.items.forEach((item,i)=>{
    const qid='tf_'+i;
    html+=`<div class="gl-tf-row" id="${qid}">
      <span class="gl-tf-given">${item.given}</span>
      <span class="gl-conj-arrow">→</span>
      <input class="gl-tf-input" id="${qid}_inp" dir="rtl" placeholder="..." autocomplete="off" autocorrect="off">
      <button class="gl-tf-check" onclick="_checkTransform('${qid}','${item.answer}','${item.hint}')">✓</button>
    </div>`;
  });
  html+=`<div class="gl-fb" id="gl-fb"></div></div>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:12px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
  body.innerHTML=html;
}
let _tfAnswered=0;
function _checkTransform(qid,correct,hint){
  const inp=document.getElementById(qid+'_inp');
  const row=document.getElementById(qid);
  const val=inp.value.trim();
  if(!val)return;
  inp.disabled=true;
  row.querySelector('.gl-tf-check').disabled=true;
  const norm=s=>s.replace(/[‌\s‌]/g,'').replace(/[يیى]/g,'ی').replace(/[كک]/g,'ک').replace(/[ًٌٍَُِّْ]/g,'');
  if(norm(val)===norm(correct)){
    inp.style.borderColor='#8AAF7A';inp.style.background='#EEF5E8';
  }else{
    inp.style.borderColor='#E05060';inp.style.background='#FFF0F2';
    const fb=document.createElement('div');
    fb.style.cssText='font-size:11px;font-weight:700;color:var(--ink-m);margin-top:4px';
    fb.textContent='→ '+hint;
    row.appendChild(fb);
  }
  const step=_GSteps[_GI];
  const allDone=document.querySelectorAll('.gl-tf-input:disabled').length;
  if(allDone>=step.items.length) document.getElementById('gl-next').style.display='block';
}

// ── MATCH: koppel links ↔ rechts ──
function _renderMatch(step,body){
  const pairs=step.pairs;
  const lefts=shuffle(pairs.map(p=>p.left));
  const rights=shuffle(pairs.map(p=>p.right));
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">🔗 Koppelen</div>
      <div class="gl-question">${step.instruction}</div>
      <div class="gl-match-wrap">
        <div class="gl-match-col" id="gl-match-left">${lefts.map(l=>
          `<button class="gl-match-btn gl-match-l" onclick="_matchSelect(this,'left','${l}')">${l}</button>`).join('')}</div>
        <div class="gl-match-col" id="gl-match-right">${rights.map(r=>
          `<button class="gl-match-btn gl-match-r" onclick="_matchSelect(this,'right','${r}')">${r}</button>`).join('')}</div>
      </div>
      <div class="gl-fb" id="gl-fb"></div>
    </div>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:12px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
  window._matchState={selected:null,side:null,pairs:pairs,matched:0};
}
function _matchSelect(btn,side,value){
  const st=window._matchState;
  if(btn.disabled)return;
  document.querySelectorAll('.gl-match-btn').forEach(b=>b.classList.remove('gl-match-active'));
  if(!st.selected||st.side===side){st.selected=value;st.side=side;st.btn=btn;btn.classList.add('gl-match-active');return;}
  const left=side==='left'?value:st.selected;
  const right=side==='right'?value:st.selected;
  const leftBtn=side==='left'?btn:st.btn;
  const rightBtn=side==='right'?btn:st.btn;
  const isCorrect=st.pairs.some(p=>p.left===left&&p.right===right);
  if(isCorrect){
    leftBtn.classList.add('gl-correct');leftBtn.disabled=true;
    rightBtn.classList.add('gl-correct');rightBtn.disabled=true;
    st.matched++;
    if(st.matched>=st.pairs.length) document.getElementById('gl-next').style.display='block';
  }else{
    leftBtn.classList.add('gl-wrong');rightBtn.classList.add('gl-wrong');
    setTimeout(()=>{leftBtn.classList.remove('gl-wrong');rightBtn.classList.remove('gl-wrong');},600);
  }
  st.selected=null;st.side=null;st.btn=null;
}

// ── SUFFIX: plak een uitgang aan een woord ──
function _renderSuffix(step,body){
  let html=`<div class="gl-card">
    <div class="gl-phase-tag">✂️ Uitgang plakken</div>
    <div class="gl-question">${step.instruction}</div>`;
  step.items.forEach((item,i)=>{
    const qid='sfx_'+i;
    html+=`<div class="gl-suffix-row" id="${qid}">
      <span class="gl-suffix-word">${item.word}<span class="gl-suffix-slot" id="${qid}_slot">___</span></span>
      <span class="gl-suffix-owner">(${item.owner})</span>
      <div class="gl-conj-opts">${shuffle(item.options).map(o=>
        `<button class="gl-fill-opt" onclick="_checkSuffix(this,'${o}','${item.correct}','${qid}','${item.result}')">${o}</button>`
      ).join('')}</div>
    </div>`;
  });
  html+=`<div class="gl-fb" id="gl-fb"></div></div>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:12px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
  body.innerHTML=html;
}
function _checkSuffix(btn,chosen,correct,qid,result){
  const row=document.getElementById(qid);
  row.querySelectorAll('.gl-fill-opt').forEach(b=>b.disabled=true);
  const slot=document.getElementById(qid+'_slot');
  if(chosen===correct){btn.classList.add('gl-correct');slot.textContent=correct;slot.style.color='#8AAF7A';}
  else{btn.classList.add('gl-wrong');row.querySelectorAll('.gl-fill-opt').forEach(b=>{if(b.textContent===correct)b.classList.add('gl-correct');});slot.textContent=correct;slot.style.color='#E05060';}
  const step=_GSteps[_GI];
  const rows=document.querySelectorAll('.gl-suffix-row');
  const answered=[...rows].filter(r=>r.querySelector('.gl-fill-opt:disabled')).length;
  if(answered>=step.items.length) document.getElementById('gl-next').style.display='block';
}

// ── FILLBLANK ──
function _renderFillblank(step,body){
  const opts=shuffle([...step.options]);
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">✏️ Invullen</div>
      ${step.instruction?`<div class="gl-question">${step.instruction}</div>`:''}
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
  if(chosen===correct){btn.classList.add('gl-correct');blank.textContent=correct;blank.classList.add('gl-filled');fb.innerHTML=`<div class="gl-fb-ok">✓ ${explanation}</div>`;}
  else{btn.classList.add('gl-wrong');document.querySelectorAll('.gl-fill-opt').forEach(b=>{if(b.textContent===correct)b.classList.add('gl-correct');});blank.textContent=correct;blank.classList.add('gl-filled');fb.innerHTML=`<div class="gl-fb-ng">✗ Het was: ${correct} — ${explanation}</div>`;}
  document.getElementById('gl-next').style.display='block';
}

// ── RECOGNITION ──
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
  if(chosen===correct){btn.classList.add('gl-correct');fb.innerHTML=`<div class="gl-fb-ok">✓ ${explanation}</div>`;}
  else{btn.classList.add('gl-wrong');document.querySelectorAll('.gl-choice').forEach(b=>{if(b.querySelector('span').textContent===correct)b.classList.add('gl-correct');});fb.innerHTML=`<div class="gl-fb-ng">✗ ${explanation}</div>`;}
  document.getElementById('gl-next').style.display='block';
}

// ── BUILD ──
function _renderBuild(step,body){
  const words=shuffle([...step.words]);
  body.innerHTML=`
    <div class="gl-card">
      <div class="gl-phase-tag">🧩 Bouwen</div>
      <div class="gl-build-prompt">Vertaal: "${step.nl}"</div>
      <div class="gl-build-answer" id="gl-build-ans"></div>
      <div class="gl-build-bank" id="gl-build-bank">${words.map(w=>
        `<button class="gl-build-tile" onclick="_glBuildTap(this,'${w}')">${w}</button>`).join('')}</div>
      <div class="gl-fb" id="gl-fb"></div>
    </div>
    <button class="btn-check" style="position:static;margin-top:12px" id="gl-build-check" onclick="_checkBuild('${step.correct.replace(/'/g,"\\'")}')" disabled>Controleer ✓</button>
    <button class="btn-check gl-next-btn" style="position:static;margin-top:8px;display:none" id="gl-next" onclick="nextGrammarStep()">Verder →</button>`;
}
function _glBuildTap(tile,word){
  tile.classList.add('placed');
  const ans=document.getElementById('gl-build-ans');
  const t=document.createElement('button');
  t.className='gl-build-tile gl-build-placed';t.textContent=word;
  t.onclick=()=>{t.remove();tile.classList.remove('placed');document.getElementById('gl-build-check').disabled=document.getElementById('gl-build-ans').children.length===0;};
  ans.appendChild(t);
  document.getElementById('gl-build-check').disabled=false;
}
function _checkBuild(correct){
  const ans=Array.from(document.getElementById('gl-build-ans').children).map(t=>t.textContent).join(' ');
  const fb=document.getElementById('gl-fb');
  document.getElementById('gl-build-check').style.display='none';
  document.querySelectorAll('.gl-build-tile').forEach(b=>b.disabled=true);
  if(ans===correct) fb.innerHTML=`<div class="gl-fb-ok">✓ Perfect!</div>`;
  else fb.innerHTML=`<div class="gl-fb-ng">✗ Juiste volgorde: <span style="font-family:'Noto Naskh Arabic',serif;direction:rtl;font-size:18px">${correct}</span></div>`;
  document.getElementById('gl-next').style.display='block';
}

// ── FINISH ──
function finishGrammarLesson(){
  if(!S.gramDone) S.gramDone=[];
  if(_GL&&_GL.id&&!S.gramDone.includes(_GL.id)){S.gramDone.push(_GL.id);save();}
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
