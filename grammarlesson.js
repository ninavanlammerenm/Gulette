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
  'gram2_heden':{
    steps:[
      {type:'explain',text:'Tegenwoordige tijd: "می‌" + stam + uitgang. Uitgangen: -om, -i, -a, -im, -in, -an.',example:{hz:'هر روز مکتب می‌رم',tr:'har roz maktab mi-rom',nl:'Elke dag ga ik naar school'},highlight:'می‌رم'},
      {type:'explain',text:'De stam komt van het werkwoord. "رفتن" (gaan) → stam "ر". Dan: می‌ + ر + -م = می‌رم.',example:{hz:'چی می‌خوری؟',tr:'chi me-khori?',nl:'Wat eet jij?'},highlight:'می‌خوری'},
    ],
    recognition:[
      {question:'Welke zin betekent "Ik ga naar school"?',correct:'مکتب می‌رم',wrong:['مکتب رفتم','مکتب نمی‌رم'],explanation:'"می‌رم" = ik ga (tegenwoordige tijd)'},
      {question:'Welke zin betekent "Wat eet jij?"',correct:'چی می‌خوری؟',wrong:['چی خوردی؟','چی می‌خورم؟'],explanation:'"می‌خوری" = jij eet (-i = jij)'},
    ],
    fillblank:[
      {before:'هر روز مکتب',blank:'می‌رم',after:'',options:['می‌رم','رفتم','نمی‌رم'],explanation:'می‌رم = ik ga'},
      {before:'مو چای',blank:'می‌خوریم',after:'',options:['می‌خوریم','می‌خوری','می‌خورم'],explanation:'-im = wij'},
    ],
    build:[
      {nl:'Elke dag ga ik naar school',words:['می‌رم','هر','مکتب','روز'],correct:'هر روز مکتب می‌رم'},
    ]
  },
  'gram2_negatie':{
    steps:[
      {type:'explain',text:'Ontkennen: zet "نه" vóór het werkwoord. می‌رم → نمی‌رم.',example:{hz:'نمی‌فامم',tr:'na-mi-famom',nl:'Ik weet het niet'},highlight:'نمی‌فامم'},
      {type:'explain',text:'Voor "zijn": هستم → نیستم, اَس → نیس. "مشکلی نیس" = geen probleem.',example:{hz:'امروز نمی‌رم',tr:'emroz na-mi-rom',nl:'Vandaag ga ik niet'},highlight:'نمی‌رم'},
    ],
    recognition:[
      {question:'Welke zin is een ontkenning?',correct:'نمی‌خوام',wrong:['می‌خوام','می‌رم'],explanation:'"نمی‌" = niet + werkwoord'},
      {question:'Wat betekent "مشکلی نیس"?',correct:'Geen probleem',wrong:['Er is een probleem','Ik heb een probleem'],explanation:'"نیس" = is niet'},
    ],
    fillblank:[
      {before:'امروز',blank:'نمی‌رم',after:'',options:['نمی‌رم','می‌رم','رفتم'],explanation:'نمی‌رم = ik ga niet'},
      {before:'مشکلی',blank:'نیس',after:'',options:['نیس','اَس','هستم'],explanation:'نیس = is niet'},
    ],
    build:[
      {nl:'Ik weet het niet, geen probleem',words:['نیس','نمی‌فامم','مشکلی'],correct:'نمی‌فامم مشکلی نیس'},
    ]
  },
  'gram2_imperatief':{
    steps:[
      {type:'explain',text:'Gebiedende wijs: zet "بـ" (be-) vóór de stam. برو = ga! بیا = kom! بخور = eet!',example:{hz:'بیا اینجا',tr:'biya injaa',nl:'Kom hier'},highlight:'بیا'},
      {type:'explain',text:'Ontkenning: "نه" + stam, zonder "بـ". نرو = ga niet! نخور = eet niet!',example:{hz:'نرو، هنوز زوده',tr:'na-ro, hanoz zuda',nl:'Ga niet, het is nog vroeg'},highlight:'نرو'},
    ],
    recognition:[
      {question:'Welke zin betekent "Kom hier"?',correct:'بیا اینجا',wrong:['برو اینجا','نرو اینجا'],explanation:'"بیا" = kom!'},
      {question:'Welke zin is een verbod?',correct:'نرو',wrong:['برو','بیا'],explanation:'"نرو" = ga niet (نه + رو)'},
    ],
    fillblank:[
      {before:'',blank:'بیا',after:'اینجا',options:['بیا','برو','نرو'],explanation:'بیا = kom!'},
      {before:'غذا',blank:'بخور',after:'',options:['بخور','نخور','می‌خورم'],explanation:'بخور = eet!'},
    ],
    build:[
      {nl:'Kom hier, ga zitten',words:['بنشین','بیا','اینجا'],correct:'بیا اینجا بنشین'},
    ]
  },
  'gram2_vragen':{
    steps:[
      {type:'explain',text:'Vraagwoorden: کجا (waar), چی (wat), کی (wie), چرا (waarom), چتور (hoe — Hazaragi!).',example:{hz:'کجا می‌ری؟',tr:'koja me-ri?',nl:'Waar ga je naartoe?'},highlight:'کجا'},
      {type:'explain',text:'Hazaragi zegt "چتور" (chetor), niet Iraans "چطور"!',example:{hz:'چتور هستی؟',tr:'chetor hasti?',nl:'Hoe gaat het?'},highlight:'چتور'},
    ],
    recognition:[
      {question:'Welk woord betekent "waar"?',correct:'کجا',wrong:['چی','کی'],explanation:'کجا = waar (koja)'},
      {question:'Wat is het Hazaragi woord voor "hoe"?',correct:'چتور',wrong:['چطور','چرا'],explanation:'چتور = hoe (Hazaragi, niet Iraans چطور)'},
    ],
    fillblank:[
      {before:'',blank:'کجا',after:'می‌ری؟',options:['کجا','چی','کی'],explanation:'کجا = waar'},
      {before:'',blank:'چرا',after:'نمی‌آی؟',options:['چرا','کجا','چتور'],explanation:'چرا = waarom'},
    ],
    build:[
      {nl:'Waar ga je naartoe?',words:['می‌ری؟','کجا'],correct:'کجا می‌ری؟'},
    ]
  },
  'gram3_sov':{
    steps:[
      {type:'explain',text:'In Hazaragi staat het werkwoord ALTIJD aan het einde: Subject + Object + Werkwoord.',example:{hz:'من نان می‌خورم',tr:'ma naan mi-khorom',nl:'Ik eet brood'},highlight:'می‌خورم'},
      {type:'explain',text:'"را" (ra) markeert het object: من تو را دوست دارم = ik hou van jou.',example:{hz:'من تو را دوست دارم',tr:'ma tu ra dost darom',nl:'Ik hou van jou'},highlight:'را'},
    ],
    recognition:[
      {question:'Welke zinsbouw is correct Hazaragi?',correct:'من نان می‌خورم',wrong:['من می‌خورم نان','می‌خورم من نان'],explanation:'S + O + W: werkwoord staat altijd achteraan'},
    ],
    fillblank:[
      {before:'من نان',blank:'می‌خورم',after:'',options:['می‌خورم','نان','من'],explanation:'Werkwoord aan het einde!'},
    ],
    build:[
      {nl:'Ik eet brood',words:['می‌خورم','من','نان'],correct:'من نان می‌خورم'},
      {nl:'Wij drinken thee',words:['می‌خوریم','مو','چای'],correct:'مو چای می‌خوریم'},
    ]
  },
  'gram3_verleden':{
    steps:[
      {type:'explain',text:'Verleden tijd: verleden stam + uitgang. Geen "می‌"! رفتم = ik ging.',example:{hz:'دیروز مکتب رفتم',tr:'diroz maktab raftom',nl:'Gisteren ging ik naar school'},highlight:'رفتم'},
      {type:'explain',text:'Ontkenning: نرفتم = ik ging niet. "نه" vóór de stam.',example:{hz:'نرفتم چون مریض بودم',tr:'na-raftom chon mariz boodom',nl:'Ik ging niet omdat ik ziek was'},highlight:'نرفتم'},
    ],
    recognition:[
      {question:'Welke zin is verleden tijd?',correct:'مکتب رفتم',wrong:['مکتب می‌رم','مکتب نمی‌رم'],explanation:'"رفتم" = ik ging (verleden, geen می‌)'},
    ],
    fillblank:[
      {before:'دیروز مکتب',blank:'رفتم',after:'',options:['رفتم','می‌رم','نمی‌رم'],explanation:'رفتم = ik ging'},
      {before:'چی',blank:'خوردی',after:'؟',options:['خوردی','می‌خوری','بخور'],explanation:'خوردی = jij at'},
    ],
    build:[
      {nl:'Gisteren ging ik naar school',words:['رفتم','دیروز','مکتب'],correct:'دیروز مکتب رفتم'},
    ]
  },
  'gram3_postposities':{
    steps:[
      {type:'explain',text:'"دَ" (da) = het Hazaragi kenmerkwoord voor in/naar/bij. Farsi zegt "در" of "به".',example:{hz:'دَ مکتب می‌رم',tr:'da maktab mi-rom',nl:'Ik ga naar school'},highlight:'دَ'},
      {type:'explain',text:'"با" = met, "از" = van/uit, "برای" = voor, "بدون" = zonder.',example:{hz:'با تو می‌آم',tr:'baa tu mi-oom',nl:'Ik kom met jou'},highlight:'با'},
    ],
    recognition:[
      {question:'Welk woord is typisch Hazaragi voor "in/naar"?',correct:'دَ',wrong:['در','به'],explanation:'"دَ" is het Hazaragi woord — niet Iraans "در" of "به"'},
    ],
    fillblank:[
      {before:'',blank:'دَ',after:'خانه هستم',options:['دَ','از','با'],explanation:'دَ = in/bij (Hazaragi)'},
      {before:'',blank:'با',after:'تو می‌آم',options:['با','از','دَ'],explanation:'با = met'},
    ],
    build:[
      {nl:'Ik ga naar school',words:['می‌رم','دَ','مکتب'],correct:'دَ مکتب می‌رم'},
    ]
  },
  'gram4_modal':{
    steps:[
      {type:'explain',text:'"می‌تانم" = ik kan — typisch Hazaragi! (niet Iraans "می‌توانم")',example:{hz:'نمی‌تانم بیام',tr:'na-mi-taanom biyoom',nl:'Ik kan niet komen'},highlight:'نمی‌تانم'},
      {type:'explain',text:'"باید" = moet (verandert nooit). "نباید" = mag niet.',example:{hz:'باید بری',tr:'baayad beri',nl:'Je moet gaan'},highlight:'باید'},
    ],
    recognition:[
      {question:'Welke zin betekent "Ik kan niet komen"?',correct:'نمی‌تانم بیام',wrong:['نمی‌خوام بیام','باید بیام'],explanation:'"نمی‌تانم" = ik kan niet'},
    ],
    fillblank:[
      {before:'',blank:'باید',after:'بری',options:['باید','شاید','می‌تانم'],explanation:'باید = moet'},
      {before:'',blank:'نمی‌تانم',after:'بیام',options:['نمی‌تانم','نمی‌خوام','باید'],explanation:'نمی‌تانم = ik kan niet'},
    ],
    build:[
      {nl:'Ik wil komen maar ik kan niet',words:['نمی‌تانم','می‌خوام','اما','بیام'],correct:'می‌خوام بیام اما نمی‌تانم'},
    ]
  },
  'gram4_future':{
    steps:[
      {type:'explain',text:'Geen aparte toekomsttijd! Gebruik tijdwoord + tegenwoordige tijd: فردا می‌رم = morgen ga ik.',example:{hz:'فردا می‌رم',tr:'fardaa mi-rom',nl:'Morgen ga ik'},highlight:'فردا'},
      {type:'explain',text:'Of gebruik "می‌خوام" + werkwoord: می‌خوام برم = ik ga (straks).',example:{hz:'می‌خوام برم',tr:'mi-khom berom',nl:'Ik ga straks'},highlight:'می‌خوام'},
    ],
    recognition:[
      {question:'Welke zin is toekomst?',correct:'فردا می‌آم',wrong:['دیروز آمدم','الان هستم'],explanation:'"فردا" maakt het toekomstig'},
    ],
    fillblank:[
      {before:'',blank:'فردا',after:'می‌آم',options:['فردا','دیروز','الان'],explanation:'فردا = morgen → toekomst'},
    ],
    build:[
      {nl:'Morgen kom ik vroeg',words:['می‌آم','فردا','زود'],correct:'فردا زود می‌آم'},
    ]
  },
  'gram4_conditional':{
    steps:[
      {type:'explain',text:'"اگر" (agar) = als. Begint de als-dan zin.',example:{hz:'اگر بیای، چای می‌پزم',tr:'agar biyaayi, chaay mi-pazom',nl:'Als jij komt, zet ik thee'},highlight:'اگر'},
      {type:'explain',text:'"وگرنه" (wagarna) = anders. Dreiging of consequentie.',example:{hz:'بیا، وگرنه دلم تنگته',tr:'bia, wagarna delam tangta',nl:'Kom, anders mis ik je'},highlight:'وگرنه'},
    ],
    recognition:[
      {question:'Welke zin bevat een voorwaarde?',correct:'اگر بیای، چای می‌پزم',wrong:['چای می‌پزم','بیا اینجا'],explanation:'"اگر" = als → voorwaardelijke zin'},
    ],
    fillblank:[
      {before:'',blank:'اگر',after:'بیای، خوشم می‌شه',options:['اگر','چون','اما'],explanation:'اگر = als'},
    ],
    build:[
      {nl:'Als jij komt, zet ik thee',words:['می‌پزم','اگر','چای','بیای'],correct:'اگر بیای چای می‌پزم'},
    ]
  },
  'gram5_adverbs':{
    steps:[
      {type:'explain',text:'Bijwoorden staan vóór het werkwoord: خیلی خوب = heel goed.',example:{hz:'تو خیلی تند گپ می‌زنی',tr:'tu khaili tond gap mi-zani',nl:'Jij praat heel snel'},highlight:'خیلی'},
      {type:'explain',text:'همیشه = altijd, هیچ‌وقت = nooit, هنوز = nog steeds.',example:{hz:'هیچ‌وقت نمی‌رم',tr:'hich-waqt na-mi-rom',nl:'Ik ga nooit'},highlight:'هیچ‌وقت'},
    ],
    recognition:[
      {question:'Wat betekent "خیلی خوب"?',correct:'Heel goed',wrong:['Een beetje goed','Niet goed'],explanation:'خیلی = heel/erg'},
    ],
    fillblank:[
      {before:'من',blank:'همیشه',after:'صبح زود بیدار می‌شم',options:['همیشه','هیچ‌وقت','گاهی'],explanation:'همیشه = altijd'},
    ],
    build:[
      {nl:'Ik ga nooit',words:['نمی‌رم','هیچ‌وقت'],correct:'هیچ‌وقت نمی‌رم'},
    ]
  },
  'gram5_compare':{
    steps:[
      {type:'explain',text:'Vergrotende trap: voeg "-تر" toe. بزرگ → بزرگتر (groter). Uitzondering: خوب → بهتر.',example:{hz:'تو بهتر اَز من هستی',tr:'tu behtar az ma hasti',nl:'Jij bent beter dan ik'},highlight:'بهتر'},
      {type:'explain',text:'Overtreffende trap: voeg "-ترین" toe. بهترین = het beste.',example:{hz:'بهترین کار صبر اَس',tr:'behtarin kaar sabr as',nl:'Het beste is geduld'},highlight:'بهترین'},
    ],
    recognition:[
      {question:'Wat betekent "بزرگتر"?',correct:'Groter',wrong:['Groot','Grootst'],explanation:'"-تر" = vergrotende trap'},
    ],
    fillblank:[
      {before:'تو',blank:'بهتر',after:'اَز من هستی',options:['بهتر','خوب','بهترین'],explanation:'بهتر = beter (onregelmatig!)'},
    ],
    build:[
      {nl:'Jij bent beter dan ik',words:['هستی','تو','من','اَز','بهتر'],correct:'تو بهتر اَز من هستی'},
    ]
  },
  'gram5_conjunctions':{
    steps:[
      {type:'explain',text:'Voegwoorden: اما (maar), چون (omdat), یا (of), هم (ook), پس (dus).',example:{hz:'می‌خوام اما نمی‌تانم',tr:'mi-khom amma na-mi-taanom',nl:'Ik wil maar ik kan niet'},highlight:'اما'},
      {type:'explain',text:'"وختی" = wanneer (Hazaragi! niet Iraans "وقتی").',example:{hz:'وختی بچه بودم',tr:'wakhti bacha boodom',nl:'Toen ik klein was'},highlight:'وختی'},
    ],
    recognition:[
      {question:'Wat betekent "اما"?',correct:'Maar',wrong:['Omdat','Of'],explanation:'اما (amma) = maar'},
    ],
    fillblank:[
      {before:'نرفتم',blank:'چون',after:'مریض بودم',options:['چون','اما','پس'],explanation:'چون = omdat'},
    ],
    build:[
      {nl:'Ik wil maar ik kan niet',words:['نمی‌تانم','می‌خوام','اما'],correct:'می‌خوام اما نمی‌تانم'},
    ]
  },
  'gram6_questions':{
    steps:[
      {type:'explain',text:'Verdieping: samengestelde vragen. از کجا (waarvandaan), با کی (met wie), چنده (hoeveel — Hazaragi!).',example:{hz:'از کجا آمدی؟',tr:'az koja aamadi?',nl:'Waar kom je vandaan?'},highlight:'از کجا'},
    ],
    recognition:[
      {question:'Wat is het Hazaragi woord voor "hoeveel"?',correct:'چنده',wrong:['چقدر','چند'],explanation:'چنده = hoeveel (Hazaragi, niet Iraans چقدر)'},
    ],
    fillblank:[
      {before:'',blank:'با کی',after:'رفتی؟',options:['با کی','از کجا','چرا'],explanation:'با کی = met wie'},
    ],
    build:[
      {nl:'Waar kom je vandaan?',words:['آمدی؟','از','کجا'],correct:'از کجا آمدی؟'},
    ]
  },
  'gram6_time':{
    steps:[
      {type:'explain',text:'Tijdswoorden veranderen de betekenis: هنوز (nog), دیگه (niet meer), همیشه (altijd).',example:{hz:'هنوز نیامده',tr:'hanoz nayaamada',nl:'Hij is nog niet gekomen'},highlight:'هنوز'},
    ],
    recognition:[
      {question:'Wat betekent "دیگه نمی‌آم"?',correct:'Ik kom niet meer',wrong:['Ik kom altijd','Ik kom soms'],explanation:'دیگه = niet meer'},
    ],
    fillblank:[
      {before:'',blank:'بالاخره',after:'فامیدم',options:['بالاخره','هنوز','دیگه'],explanation:'بالاخره = eindelijk'},
    ],
    build:[
      {nl:'Ik kom niet meer',words:['نمی‌آم','دیگه'],correct:'دیگه نمی‌آم'},
    ]
  },
  'gram6_if':{
    steps:[
      {type:'explain',text:'Meer verbinders: وختی (wanneer — Hazaragi!), مگر (tenzij), با اینکه (hoewel).',example:{hz:'وختی رسیدی زنگ بزن',tr:'wakhti residi zang bezan',nl:'Bel me wanneer je aankomt'},highlight:'وختی'},
    ],
    recognition:[
      {question:'Wat betekent "با اینکه خسته بودم، رفتم"?',correct:'Hoewel ik moe was, ging ik',wrong:['Omdat ik moe was, ging ik niet','Als ik moe ben, ga ik'],explanation:'با اینکه = hoewel'},
    ],
    fillblank:[
      {before:'',blank:'وختی',after:'رسیدی زنگ بزن',options:['وختی','اگر','چون'],explanation:'وختی = wanneer (Hazaragi)'},
    ],
    build:[
      {nl:'Als je komt, eten we samen',words:['می‌خوریم','اگر','هم','با','بیای'],correct:'اگر بیای با هم می‌خوریم'},
    ]
  },
  'gram7_ezafe':{
    steps:[
      {type:'explain',text:'Ezafe: een "-e" koppelklank die twee woorden verbindt. خانه‌ی ما = ons huis.',example:{hz:'خانه‌ی ما بزرگ اَس',tr:'khaana-ye mah bozorg as',nl:'Ons huis is groot'},highlight:'ی'},
      {type:'explain',text:'Bijvoeglijk naamwoord staat ACHTER het zelfstandig naamwoord: چای گرم = warme thee.',example:{hz:'چای گرم بیار',tr:'chaay-e garm biaar',nl:'Breng warme thee'},highlight:'گرم'},
    ],
    recognition:[
      {question:'Wat betekent "خانه‌ی ما"?',correct:'Ons huis',wrong:['Mijn huis','Jouw huis'],explanation:'خانه + ی (ezafe) + ما (wij) = ons huis'},
    ],
    fillblank:[
      {before:'چای',blank:'گرم',after:'بیار',options:['گرم','سرد','بزرگ'],explanation:'گرم = warm (staat NA het naamwoord)'},
    ],
    build:[
      {nl:'Ons huis is groot',words:['اَس','خانه‌ی','بزرگ','ما'],correct:'خانه‌ی ما بزرگ اَس'},
    ]
  },
  'gram7_adj':{
    steps:[
      {type:'explain',text:'Bijvoeglijk naamwoord staat ACHTER het zelfst. nw: خانه بزرگ = groot huis.',example:{hz:'خانه بزرگ می‌خوام',tr:'khaana bozorg mi-khom',nl:'Ik wil een groot huis'},highlight:'بزرگ'},
    ],
    recognition:[
      {question:'Welke volgorde is correct?',correct:'خانه بزرگ',wrong:['بزرگ خانه','بزرگ اَس خانه'],explanation:'Bijv.nw. staat NA het zelfst.nw. in Hazaragi'},
    ],
    fillblank:[
      {before:'نان',blank:'تازه',after:'خوش‌مزه اَس',options:['تازه','بزرگ','کم'],explanation:'تازه = vers (NA het naamwoord)'},
    ],
    build:[
      {nl:'Het beste eten is manto',words:['اَس','بهترین','مانتو','غذا'],correct:'بهترین غذا مانتو اَس'},
    ]
  },
  'gram7_imperfect':{
    steps:[
      {type:'explain',text:'Onvoltooid verleden: می‌ + verleden stam + uitgang. Voor gewoonten: "ik ging altijd".',example:{hz:'قبلاً اینجا زندگی می‌کردم',tr:'qablan injaa zendagi mi-kardom',nl:'Vroeger woonde ik hier'},highlight:'می‌کردم'},
    ],
    recognition:[
      {question:'Welke zin beschrijft een gewoonte uit het verleden?',correct:'هر روز بازی می‌کردم',wrong:['بازی کردم','بازی می‌کنم'],explanation:'"می‌کردم" = ik deed (gewoonlijk) — met می‌ = gewoonte'},
    ],
    fillblank:[
      {before:'وختی بچه بودم هر روز',blank:'می‌کردم',after:'بازی',options:['می‌کردم','کردم','می‌کنم'],explanation:'می‌کردم = ik deed (altijd/gewoonlijk)'},
    ],
    build:[
      {nl:'Vroeger woonde ik hier',words:['می‌کردم','قبلاً','زندگی','اینجا'],correct:'قبلاً اینجا زندگی می‌کردم'},
    ]
  },
  'gram7_perfect':{
    steps:[
      {type:'explain',text:'Voltooid tegenwoordig: stam + "-ه" + suffix. رفته‌ام = ik ben gegaan. Voor iets dat klaar is.',example:{hz:'نان خورده‌ام',tr:'naan khordaam',nl:'Ik heb brood gegeten'},highlight:'خورده‌ام'},
    ],
    recognition:[
      {question:'Welke zin is voltooid tegenwoordige tijd?',correct:'رفته‌ام',wrong:['رفتم','می‌رم'],explanation:'رفته‌ام = ik ben gegaan (voltooid, "-ه" + "-ام")'},
    ],
    fillblank:[
      {before:'نان',blank:'خورده‌ام',after:'سیر هستم',options:['خورده‌ام','خوردم','می‌خورم'],explanation:'خورده‌ام = ik heb gegeten (VTT)'},
    ],
    build:[
      {nl:'Ik heb brood gegeten',words:['خورده‌ام','نان'],correct:'نان خورده‌ام'},
    ]
  },
  'gram7_ke':{
    steps:[
      {type:'explain',text:'"که" (ka) = dat/die/wat. Verbindt twee zinnen. می‌فامم که = ik weet dat.',example:{hz:'می‌فامم که فردا می‌آی',tr:'mi-famom ka fardaa mi-aayi',nl:'Ik weet dat je morgen komt'},highlight:'که'},
    ],
    recognition:[
      {question:'Wat betekent "که" in "می‌فامم که"?',correct:'dat',wrong:['wie','wanneer'],explanation:'که = dat (ka) — verbindt twee zinnen'},
    ],
    fillblank:[
      {before:'فکر می‌کنم',blank:'که',after:'خوب اَس',options:['که','با','از'],explanation:'که = dat'},
    ],
    build:[
      {nl:'Ik weet dat je morgen komt',words:['می‌آی','می‌فامم','فردا','که'],correct:'می‌فامم که فردا می‌آی'},
    ]
  },
  'gram7_maal':{
    steps:[
      {type:'explain',text:'"مال" (maal) = van/eigendom van. مال من = van mij. مال کی؟ = van wie?',example:{hz:'این مال من اَس',tr:'ain maal-e ma as',nl:'Dit is van mij'},highlight:'مال'},
    ],
    recognition:[
      {question:'Wat betekent "مال کی اَس؟"',correct:'Van wie is het?',wrong:['Wie is het?','Waar is het?'],explanation:'مال کی = van wie'},
    ],
    fillblank:[
      {before:'این',blank:'مال من',after:'اَس',options:['مال من','مال تو','مال او'],explanation:'مال من = van mij'},
    ],
    build:[
      {nl:'Dit is van mij, niet van jou',words:['مال تو','اَس','نه','این','مال من'],correct:'این مال من اَس نه مال تو'},
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
