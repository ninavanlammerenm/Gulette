// ══════════════════════════════════════════════════════
// UITSPRAAK TIPS (Hazaragi-specifiek)
// ══════════════════════════════════════════════════════
const PRONUN_TIPS={
  'خ':{latin:'kh',tip:'Zachte keel-g, zoals in het Duits "Bach" of Schots "loch". Haal lucht door de keel.'},
  'غ':{latin:'gh',tip:'Rommelende keel-r, dieper dan de "g". Zoals een zachte gorgelpklank.'},
  'ق':{latin:'q',tip:'Diepe keel-k, achterin de keel gevormd. Harder dan gewone "k".'},
  'ع':{latin:'a/\'',tip:'Zachte keel-stop, glottisklank. Licht samenknijpen van de keel.'},
  'ر':{latin:'r',tip:'Gerolde "r" in Hazaragi — rolt één of twee keer, zoals Spaans "pero".'},
  'آ':{latin:'aa',tip:'Lange "aa" klank — hou hem aan, twee keer zo lang als gewone "a".'},
  'و':{latin:'w/oo',tip:'Hazaragi: "w" aan het begin van woorden (niet "v"), "oo" in het midden.'},
  'ی':{latin:'y/i',tip:'Aan het begin: "y" klank. In het midden/eind: "ie" klank.'},
};

// Wetenschappelijke leertips
const SCI_TIPS=[
  '<strong>Spaced Repetition:</strong> Herhaal woorden net vóórdat je ze vergeet — zo groeit je geheugen exponentieel!',
  '<strong>Contextleren:</strong> Woorden onthoud je 3x beter in een zin dan op zichzelf. Lees de voorbeeldzinnen!',
  '<strong>Inductief leren:</strong> Je brein herkent patronen automatisch door voorbeelden te zien — kijk goed naar de zinsbouw.',
  '<strong>Actief ophalen:</strong> Typoefeningen zijn moeilijker maar verdubbelen retentie. Oefen ze extra!',
  '<strong>Interleaving:</strong> Door te wisselen tussen woord→NL en NL→woord leer je dieper.',
  '<strong>Hazaragi vs Dari:</strong> Hazaragi heeft unieke Mongoolse & Turkse woorden — jij leert de <em>echte</em> taal!',
  '<strong>Uitspraak:</strong> Hazaragi heeft retroflexe klanken (tongtip omhoog) die Dari/Farsi niet heeft.',
  '<strong>Tip:</strong> Elke dag even leren is beter dan 1x per week lang leren. Consistentie wint!',
];

// ══════════════════════════════════════════════════════
// LESMATERIAAL
// ══════════════════════════════════════════════════════
const CHAPTERS=[

  { id:'ch1', label:'🌸 Hoofdstuk 1 · Eerste woorden', color:'#FF6B9D', lessons:[

    { id:'greet1', title:'Begroetingen', sub:'Hoi, dag, hoe gaat het', icon:'👋', xp:10,
      pronTips:['خ','ع'],
      grammar:'In Hazaragi zeg je "اس" (as) voor "is", niet "است" (ast) zoals in Farsi.',
      words:[
        {hz:'سلام',tr:'salaam',nl:'Hallo / Hoi',tip:'Universele begroeting — altijd goed!'},
        {hz:'خداحافظ',tr:'khodaahaafez',nl:'Dag / Tot ziens',tip:'"خدا" = God, "حافظ" = bewaker: "God behoede je"'},
        {hz:'خوبی؟',tr:'khobi?',nl:'Hoe gaat het?',tip:'Informele dagelijkse vraag'},
        {hz:'خوبم',tr:'khobam',nl:'Ik ben goed',tip:'"خوب" = goed + "-م" = ik ben'},
        {hz:'تشکر',tr:'tashakor',nl:'Dank je',tip:'Hazaragi bedanking — "ممنون" is Dari, Hazaragi zegt "تشکر"'},
        {hz:'بله',tr:'bale',nl:'Ja',tip:'Uitgesproken als "bale" — zelfde als Dari'},
        {hz:'نه',tr:'na',nl:'Nee',tip:'Kort en duidelijk'},
        {hz:'لطفاً',tr:'lotfan',nl:'Alsjeblieft',tip:'Beleefd verzoek'},
      ],
      sentences:[
        {hz:'سلام، خوبی؟',tr:'salaam, khobi?',nl:'Hallo, hoe gaat het?'},
        {hz:'تشکر، خوبم',tr:'tashakor, khobam',nl:'Dank je, ik ben goed'},
        {hz:'نام‌م گل اَس',tr:'naamam gol as',nl:'Mijn naam is Gol',tip:'Hazaragi: "اَس" = is (niet "است")'},
      ]
    },

    { id:'greet2', title:'Meer begroetingen', sub:'Goedemorgen, welkom!', icon:'☀️', xp:15,
      pronTips:['خ','آ'],
      grammar:'Hazaragi gebruikt "خوش" (khosh) breed: blij, lekker, fijn, mooi — leer de context!',
      words:[
        {hz:'صبح بخیر',tr:'sobh bakhair',nl:'Goedemorgen',tip:'Gebruik dit tot de middag'},
        {hz:'شب بخیر',tr:'shab bakhair',nl:'Goedenacht',tip:'Zeg dit bij het slapengaan'},
        {hz:'خوش آمدید',tr:'khosh aamodid',nl:'Welkom (formeel)',tip:'Hazaragi: "aamodid" (niet "aamadid" zoals Farsi)'},
        {hz:'بفرمایین',tr:'befarmaayin',nl:'Alsjeblieft / Kom binnen',tip:'Hazaragi meervoud/beleefd: "-ین" ipv "-ید"'},
        {hz:'مشکلی نیس',tr:'moshkeli nis',nl:'Geen probleem',tip:'Hazaragi: "نیس" (nis) ipv "نیست" (nist)'},
        {hz:'باز می‌بینیم',tr:'baaz me-binim',nl:'Tot ziens',tip:'"باز" = opnieuw, "می‌بینیم" = we zien'},
        {hz:'چتوری؟',tr:'chetoori?',nl:'Hoe is het? (informeel)',tip:'Hazaragi: "چتور" — Iraans Farsi zegt "چطور"'},
        {hz:'ایشالله',tr:'ishaallah',nl:'Hopelijk / Inshallah',tip:'Hazaragi uitspraak: "isha" (niet "insha")'},
      ],
      sentences:[
        {hz:'صبح بخیر، خوش آمدید!',tr:'sobh bakhair, khosh aamodid!',nl:'Goedemorgen, welkom!'},
        {hz:'بفرمایین، چای بیارم؟',tr:'befarmaayin, chaai biyaaram?',nl:'Kom binnen, zal ik thee brengen?'},
        {hz:'مشکلی نیس، باز می‌بینیم',tr:'moshkeli nis, baaz me-binim',nl:'Geen probleem, tot ziens'},
      ]
    },

    { id:'numbers', title:'Cijfers 1–10', sub:'Tellen in Hazaragi', icon:'🔢', xp:20,
      pronTips:['ر'],
      grammar:'Hazaragi cijfers lijken op Dari maar let op: "نه" (no = 9), "ده" (da = 10) — spreek ze Hazaragi uit!',
      words:[
        {hz:'یک',tr:'yak',nl:'Één',tip:''},
        {hz:'دو',tr:'do',nl:'Twee',tip:''},
        {hz:'سه',tr:'se',nl:'Drie',tip:'Spreek uit als "seh"'},
        {hz:'چار',tr:'chaar',nl:'Vier',tip:'Hazaragi: "chaar" — Farsi zegt "chahaar"'},
        {hz:'پنج',tr:'panj',nl:'Vijf',tip:''},
        {hz:'شش',tr:'shash',nl:'Zes',tip:'Hazaragi: "shash" — Farsi "shesh"'},
        {hz:'هفت',tr:'haft',nl:'Zeven',tip:''},
        {hz:'هشت',tr:'hasht',nl:'Acht',tip:''},
        {hz:'نه',tr:'no',nl:'Negen',tip:'Hazaragi: "no" — Farsi "noh"'},
        {hz:'ده',tr:'da',nl:'Tien',tip:'Hazaragi: "da" — Farsi "dah"'},
      ],
      sentences:[
        {hz:'یک چای بیار',tr:'yak chaai biaar',nl:'Breng één thee'},
        {hz:'مو پنج نفر هستیم',tr:'mo panj nafar hastim',nl:'Wij zijn met vijf personen',tip:'"مو" = wij (Hazaragi) — Farsi "مaa"'},
        {hz:'ده روز دیگه',tr:'da roz diga',nl:'Nog tien dagen',tip:'"دیگه" = nog/meer (Hazaragi uitspraak)'},
      ]
    },

    { id:'colors', title:'Kleuren', sub:'Rood, blauw, groen...', icon:'🎨', xp:20,
      pronTips:['ر','خ'],
      grammar:'Hazaragi: "سرخ" (sorkh = rood) — Farsi zegt "قرمز" (ghermez). Hazaragi bewaart het oudere Perzische woord!',
      words:[
        {hz:'سرخ',tr:'sorkh',nl:'Rood',tip:'Hazaragi/oud Perzisch — Farsi zegt "قرمز"'},
        {hz:'آبی',tr:'aabi',nl:'Blauw',tip:'Lange "aa" aan het begin'},
        {hz:'سبز',tr:'sabz',nl:'Groen',tip:''},
        {hz:'سفید',tr:'safaid',nl:'Wit',tip:'Hazaragi: "safaid" — Farsi "sefid"'},
        {hz:'سیا',tr:'siya',nl:'Zwart',tip:'Hazaragi: "سیا" (siya) — Farsi "سیاه" (siyaah)'},
        {hz:'زرد',tr:'zard',nl:'Geel',tip:''},
        {hz:'صورتی',tr:'sorati',nl:'Roze',tip:''},
        {hz:'بنفش',tr:'banafsh',nl:'Paars',tip:''},
        {hz:'نارنجی',tr:'naaranji',nl:'Oranje',tip:'Van "نارنج" = bittere sinaasappel'},
        {hz:'خاکی',tr:'khaaki',nl:'Beige / Aarde-kleur',tip:'"خاک" = aarde/grond'},
      ],
      sentences:[
        {hz:'لباسم سرخ اَس',tr:'lebaasam sorkh as',nl:'Mijn kleding is rood',tip:'"اَس" = is (Hazaragi)'},
        {hz:'چشمانت آبی اَس؟',tr:'chashmaanat aabi as?',nl:'Zijn jouw ogen blauw?'},
        {hz:'آسمان سبز نیس، آبی اَس',tr:'aasmaan sabz nis, aabi as',nl:'De lucht is niet groen, het is blauw'},
      ]
    },
  ]},

  { id:'ch_gram1', label:'📖 Grammatica 1 · Basis', color:'#8B6FF0', lessons:[

    { id:'gram1_pronouns', title:'Voornaamwoorden', sub:'Ik, jij, hij, wij...', icon:'🧑', xp:20,
      pronTips:['خ'],
      grammar:'Hazaragi "مو" (mo) = wij — uniek verschil met Dari "ما" (maa). Alle andere voornaamwoorden zijn vergelijkbaar.',
      words:[
        {hz:'من',tr:'man',nl:'Ik',tip:'In spreektaal ingekort tot "-م" aan het werkwoord'},
        {hz:'تو',tr:'to',nl:'Jij',tip:''},
        {hz:'او',tr:'o',nl:'Hij / Zij',tip:'Hazaragi maakt geen onderscheid tussen hij en zij'},
        {hz:'مو',tr:'mo',nl:'Wij',tip:'UNIEK Hazaragi — Dari/Farsi zegt "ما" (maa)'},
        {hz:'شما',tr:'shoma',nl:'Jullie / U',tip:'Ook beleefd enkelvoud — voor respect naar ouderen'},
        {hz:'ایشان',tr:'ishan',nl:'Zij (meervoud)',tip:'Formeel meervoud'},
      ],
      sentences:[
        {hz:'من هزاره هستم',tr:'man hazaara hastam',nl:'Ik ben Hazara'},
        {hz:'تو کجا هستی؟',tr:'to koja hasti?',nl:'Waar ben jij?'},
        {hz:'مو با هم می‌ریم',tr:'mo baa ham me-rim',nl:'Wij gaan samen',tip:'"مو" = wij — typisch Hazaragi'},
      ]
    },

    { id:'gram1_zijn', title:'Werkwoord "zijn"', sub:'Ik ben, jij bent, hij is...', icon:'🔗', xp:25,
      pronTips:['خ'],
      grammar:'"اَس" (as) is de Hazaragi korte vorm van "است" (ast = is). Leer beide — je hoort ze allebei!',
      words:[
        {hz:'هستم',tr:'hastam',nl:'Ik ben',tip:'"هست" + "-م"'},
        {hz:'هستی',tr:'hasti',nl:'Jij bent',tip:'"هست" + "-ی"'},
        {hz:'اَس',tr:'as',nl:'Hij/Zij is',tip:'Hazaragi: "اَس" — Dari: "است" (ast)'},
        {hz:'هستیم',tr:'hastim',nl:'Wij zijn',tip:'"هست" + "-یم"'},
        {hz:'هستین',tr:'hastin',nl:'Jullie zijn',tip:'Hazaragi: "-ین" ipv "-ید"'},
        {hz:'نیستم',tr:'nistam',nl:'Ik ben niet',tip:'Ontkenning van "هستم"'},
        {hz:'نیس',tr:'nis',nl:'Is niet',tip:'Hazaragi: "نیس" — Dari "نیست". Veelgebruikt!'},
      ],
      sentences:[
        {hz:'مریضم، خوب نیستم',tr:'marizham, khob nistam',nl:'Ik ben ziek, ik ben niet goed'},
        {hz:'هوا امروز گرم اَس',tr:'hawa emroz garm as',nl:'Het weer is vandaag warm',tip:'"اَس" = is (Hazaragi)'},
        {hz:'مشکلی نیس!',tr:'moshkeli nis!',nl:'Geen probleem!',tip:'Vaste uitdrukking'},
      ]
    },

    { id:'gram1_bezit', title:'Bezit: -م / -ت / -ش', sub:'Mijn, jouw, zijn/haar...', icon:'🔑', xp:25,
      pronTips:['خ'],
      grammar:'Bezit plak je direct aan het woord: "-م" = mijn, "-ت" = jouw, "-ش" = zijn/haar. Super simpel!',
      words:[
        {hz:'نامم',tr:'naamam',nl:'Mijn naam',tip:'"نام" + "-م"'},
        {hz:'نامت',tr:'naamat',nl:'Jouw naam',tip:'"نام" + "-ت"'},
        {hz:'نامش',tr:'naamashe',nl:'Zijn/haar naam',tip:'"نام" + "-ش"'},
        {hz:'خانمو',tr:'khaanamao',nl:'Ons huis',tip:'Hazaragi: "-مو" = ons — Dari heeft "-مان"'},
        {hz:'مادرم',tr:'maadaram',nl:'Mijn moeder',tip:''},
        {hz:'دوستت',tr:'dostat',nl:'Jouw vriend',tip:'"دوستت دارم" = ik hou van jou'},
        {hz:'کتابش',tr:'ketaabashe',nl:'Zijn/haar boek',tip:''},
      ],
      sentences:[
        {hz:'نامم گل اَس',tr:'naamam gol as',nl:'Mijn naam is Gol'},
        {hz:'مادرم خیلی مهربان اَس',tr:'maadaram khaili mehrabaan as',nl:'Mijn moeder is erg lief'},
        {hz:'دوستت دارم، یارم',tr:'dostat daaram, yaaram',nl:'Ik hou van jou, lieverd'},
      ]
    },
  ]},

  { id:'ch2', label:'🏡 Hoofdstuk 2 · Thuis & Familie', color:'#FF8C61', lessons:[

    { id:'family', title:'Familie', sub:'Mama, papa, broer...', icon:'👨‍👩‍👧', xp:20,
      pronTips:['ر','خ'],
      grammar:'Hazaragi gebruikt "باوا" (baawaa) voor vader — een Mongolisch leenwoord! Farsi zegt "باباا" (baabaa).',
      words:[
        {hz:'مادر',tr:'maadar',nl:'Moeder',tip:'Formeel — liefkoosnaam: "مادرجان" of "ننه" (nana)'},
        {hz:'باوا',tr:'baawaa',nl:'Vader',tip:'Hazaragi/Mongools leenwoord — Farsi "باباا"'},
        {hz:'برار',tr:'baraar',nl:'Broer',tip:'Hazaragi: "baraar" — Farsi "baraadar"'},
        {hz:'خواهر',tr:'khwahar',nl:'Zus',tip:'"خ" = zachte keel-g'},
        {hz:'بچه',tr:'bacha',nl:'Kind',tip:'Geliefd woord — ook als liefkoosnaam'},
        {hz:'دوست',tr:'dost',nl:'Vriend/Vriendin',tip:''},
        {hz:'مادرکلان',tr:'maadarkalan',nl:'Oma',tip:'Hazaragi: "kalan" = groot (Mongools: "katan")'},
        {hz:'باواکلان',tr:'baawakalan',nl:'Opa',tip:'Letterlijk: "grote vader" — typisch Hazaragi'},
        {hz:'عمه',tr:'ama',nl:'Tante (vaders zus)',tip:''},
        {hz:'خاله',tr:'khaala',nl:'Tante (moeders zus)',tip:''},
        {hz:'کاکا',tr:'kaakaa',nl:'Oom (vaders broer)',tip:'Mongools leenwoord in Hazaragi'},
        {hz:'مامو',tr:'maamoo',nl:'Oom (moeders broer)',tip:''},
      ],
      sentences:[
        {hz:'مادرم خیلی مهربان اَس',tr:'maadaram khaili mehrabaan as',nl:'Mijn moeder is erg lief'},
        {hz:'برارم ده سال داره',tr:'baraaram da saal daara',nl:'Mijn broer is tien jaar',tip:'"داره" = heeft (Hazaragi) — Farsi "دارد"'},
        {hz:'باواکلانم قصه می‌گفت',tr:'baawakalanam qessa megoft',nl:'Mijn opa vertelde verhalen'},
      ]
    },

    { id:'food', title:'Eten & Drinken', sub:'Chai, naan, bolani...', icon:'🍵', xp:20,
      pronTips:['خ','ر'],
      grammar:'Hazaragi voedselwoorden zijn deels uniek: "قروتی" (qoroti = gedroogde yoghurt) is typisch Hazara.',
      words:[
        {hz:'چای',tr:'chaai',nl:'Thee',tip:'Altijd met gast serveren — cultureel essentieel!'},
        {hz:'نان',tr:'naan',nl:'Brood',tip:'Plat brood, basisvoedsel'},
        {hz:'آو',tr:'aaw',nl:'Water',tip:'Hazaragi: "آو" (aaw) — Farsi "آب" (aab)'},
        {hz:'گوشت',tr:'gosht',nl:'Vlees',tip:''},
        {hz:'برنج',tr:'birinj',nl:'Rijst',tip:''},
        {hz:'میوه',tr:'mewa',nl:'Fruit',tip:''},
        {hz:'خوشمزه',tr:'khoshmaza',nl:'Lekker',tip:'"خوش" = goed, "مزه" = smaak'},
        {hz:'تشنه',tr:'tashna',nl:'Dorstig',tip:''},
        {hz:'گشنه',tr:'goshna',nl:'Hongerig',tip:'Hazaragi uitspraak van "گرسنه"'},
        {hz:'بولانی',tr:'bolaani',nl:'Bolani (gevulde pastei)',tip:'Traditioneel Hazara gerecht!'},
        {hz:'قروتی',tr:'qoroti',nl:'Gedroogde yoghurt',tip:'Typisch Hazara — in water opgelost gegeten'},
        {hz:'آش',tr:'aash',nl:'Soep/Stoofpot',tip:'Dikke maaltijdsoep, basis Hazara keuken'},
      ],
      sentences:[
        {hz:'یک چای بریز، لطفاً',tr:'yak chaai beriz, lotfan',nl:'Schenk een thee in, alsjeblieft'},
        {hz:'گشنمه، نان داری؟',tr:'goshname, naan daari?',nl:'Ik heb honger, heb je brood?'},
        {hz:'این بولانی خیلی خوشمزه اَس',tr:'ain bolaani khaili khoshmaza as',nl:'Deze bolani is heel lekker'},
      ]
    },

    { id:'home_vocab', title:'Thuis', sub:'Kamer, deur, raam...', icon:'🏠', xp:20,
      pronTips:['خ'],
      grammar:'Let op: Hazaragi "خو" (kho = zelf/eigen) is een Mongools element — uniek voor Hazaragi!',
      words:[
        {hz:'خانه',tr:'khaana',nl:'Huis',tip:'"خ" = zachte keel-g'},
        {hz:'اتاق',tr:'otaaq',nl:'Kamer',tip:'"ق" = diepe keel-k'},
        {hz:'آشپزخانه',tr:'aashpazkhana',nl:'Keuken',tip:'Letterlijk: "kookhuis"'},
        {hz:'دروازه',tr:'darwaaza',nl:'Deur (groot)',tip:'Hazaragi: "darwaaza" — Farsi "در" (dar)'},
        {hz:'پنجره',tr:'panjara',nl:'Raam',tip:'Spreek uit als "pan-ja-ra"'},
        {hz:'تخت',tr:'takht',nl:'Bed',tip:''},
        {hz:'صندلی',tr:'sandali',nl:'Stoel',tip:''},
        {hz:'میز',tr:'mez',nl:'Tafel',tip:''},
        {hz:'حویلی',tr:'haweli',nl:'Binnenplaats / Erf',tip:'Typisch Afghaans/Hazara huis heeft een "حویلی"'},
        {hz:'بام',tr:'baam',nl:'Dak',tip:'Hazara-huizen hebben platte daken — sociaal treffpunt'},
      ],
      sentences:[
        {hz:'خانمو دو اتاق داره',tr:'khaanamao do otaaq daara',nl:'Ons huis heeft twee kamers'},
        {hz:'دروازه باز اَس',tr:'darwaaza baaz as',nl:'De deur is open'},
        {hz:'حویلی قشنگ اَس',tr:'haweli qashanq as',nl:'De binnenplaats is mooi'},
      ]
    },

    { id:'animals', title:'Dieren', sub:'Schapen, ezel, vogels...', icon:'🐑', xp:20,
      pronTips:['ر','خ'],
      grammar:'Hazaragi heeft veel woorden voor dieren die in de bergstreek leven — essentieel voor de nomadische Hazara cultuur.',
      words:[
        {hz:'گوسفند',tr:'gosfand',nl:'Schaap',tip:'Belangrijk — de Hazara zijn herders'},
        {hz:'گاو',tr:'gaaw',nl:'Koe',tip:'Hazaragi: lange "aa"'},
        {hz:'اسپ',tr:'asp',nl:'Paard',tip:'Hazaragi: "اسپ" — Farsi "اسب" (asb)'},
        {hz:'خر',tr:'khar',nl:'Ezel',tip:'Belangrijk werkanimal in Afghanistan'},
        {hz:'مرغ',tr:'morgh',nl:'Kip',tip:''},
        {hz:'سگ',tr:'sag',nl:'Hond',tip:''},
        {hz:'گربه',tr:'gorba',nl:'Kat',tip:''},
        {hz:'پرنده',tr:'paranda',nl:'Vogel',tip:'"پرنده" = vliegend ding'},
      ],
      sentences:[
        {hz:'صد گوسفند داریم',tr:'sad gosfand darim',nl:'We hebben honderd schapen'},
        {hz:'اسپش خیلی تند می‌ره',tr:'aspash khaili tand meré',nl:'Zijn paard gaat heel snel'},
      ]
    },
  ]},

  { id:'ch3', label:'💕 Hoofdstuk 3 · Gevoel & Dagelijks', color:'#A78BFA', lessons:[

    { id:'emotions', title:'Gevoelens', sub:'Blij, moe, verliefd...', icon:'💕', xp:25,
      pronTips:['ع','غ'],
      grammar:'"دل" (del = hart) is het centrum van emoties in Hazaragi — "دلم" = mijn hart/gevoel.',
      words:[
        {hz:'خوش',tr:'khosh',nl:'Blij / Gelukkig',tip:'Hazaragi: erg breed — ook "lekker", "fijn", "mooi"'},
        {hz:'غمگین',tr:'ghamgeen',nl:'Verdrietig',tip:'"غ" = rommelende keel-r'},
        {hz:'خسته',tr:'khasta',nl:'Moe',tip:''},
        {hz:'خوشحال',tr:'khoshhaal',nl:'Vrolijk',tip:'"خوش" = goed + "حال" = toestand'},
        {hz:'عاشق',tr:'aasheq',nl:'Verliefd',tip:'"ع" = zachte keel-stop'},
        {hz:'دل‌تنگی',tr:'deltangi',nl:'Gemis / Verlangen',tip:'Prachtig woord: "nauw hart" — typisch Hazaragi uitdrukking'},
        {hz:'ترس',tr:'tars',nl:'Angst',tip:''},
        {hz:'عصبانی',tr:'asabaani',nl:'Boos',tip:''},
        {hz:'دوستت دارم',tr:'dostat daaram',nl:'Ik hou van jou',tip:'Zeg ook tegen familie en vrienden!'},
        {hz:'دلم تنگته',tr:'delam tangta',nl:'Ik mis je',tip:'Hazaragi uitdrukking — letterlijk "mijn hart is nauw naar jou"'},
        {hz:'شرمنده',tr:'sharmanda',nl:'Beschaamd / Sorry',tip:'"شرم" = schaamte — zachter dan "معذرت"'},
      ],
      sentences:[
        {hz:'امروز خیلی خوشحالم',tr:'emroz khaili khoshhaalam',nl:'Vandaag ben ik heel blij'},
        {hz:'چرا غمگین هستی؟',tr:'chera ghamgeen hasti?',nl:'Waarom ben je verdrietig?'},
        {hz:'دلم تنگته، کجایی؟',tr:'delam tangta, kojayi?',nl:'Ik mis je, waar ben je?'},
      ]
    },

    { id:'daily', title:'Dagelijks leven', sub:'Werk, tijd, geld...', icon:'📅', xp:25,
      pronTips:['ر','و'],
      grammar:'Hazaragi werkwoorden: "می‌ره" (gaat), "می‌گه" (zegt), "می‌خوره" (eet) — korter dan Farsi!',
      words:[
        {hz:'کار',tr:'kaar',nl:'Werk',tip:''},
        {hz:'وخت',tr:'wakht',nl:'Tijd',tip:'Hazaragi: "وخت" (wakht) — Farsi "وقت" (waqt)'},
        {hz:'پول',tr:'pool',nl:'Geld',tip:'Lange "oo" klank'},
        {hz:'بازار',tr:'baazaar',nl:'Markt',tip:''},
        {hz:'موبایل',tr:'mobaail',nl:'Telefoon',tip:'Leenwoord van "mobile"'},
        {hz:'امروز',tr:'emroz',nl:'Vandaag',tip:''},
        {hz:'فردا',tr:'farda',nl:'Morgen',tip:''},
        {hz:'دیروز',tr:'diroz',nl:'Gisteren',tip:''},
        {hz:'حالی',tr:'haali',nl:'Nu / Op dit moment',tip:'Hazaragi: "haali" — Farsi "haalaa"'},
        {hz:'بعد',tr:'baad',nl:'Later / Daarna',tip:''},
      ],
      sentences:[
        {hz:'امروز کار دارم',tr:'emroz kaar daaram',nl:'Vandaag heb ik werk'},
        {hz:'فردا بازار می‌ریم',tr:'farda baazaar me-rim',nl:'Morgen gaan we naar de markt'},
        {hz:'وخت نداری؟',tr:'wakht naadaari?',nl:'Heb je geen tijd?'},
      ]
    },

    { id:'weather', title:'Weer & Seizoenen', sub:'Warm, koud, sneeuw...', icon:'🌤️', xp:25,
      pronTips:['آ'],
      grammar:'Hazaragi gebruikt "هوا" (hawa) voor weer/lucht. Uitspraak van seizoenen verschilt van Farsi!',
      words:[
        {hz:'هوا',tr:'hawa',nl:'Weer / Lucht',tip:''},
        {hz:'گرم',tr:'garm',nl:'Warm',tip:''},
        {hz:'سرد',tr:'sard',nl:'Koud',tip:''},
        {hz:'باران',tr:'baaran',nl:'Regen',tip:''},
        {hz:'برف',tr:'barf',nl:'Sneeuw',tip:'Veel sneeuw in Hazarajat'},
        {hz:'آفتاب',tr:'aaftaab',nl:'Zon',tip:''},
        {hz:'زمستان',tr:'zemestaan',nl:'Winter',tip:'In Hazarajat extreem koud'},
        {hz:'تابستان',tr:'taabestaan',nl:'Zomer',tip:''},
        {hz:'بهار',tr:'bahaar',nl:'Lente',tip:''},
        {hz:'خزان',tr:'khazaan',nl:'Herfst',tip:'Hazaragi/Dari: "خزان" — Farsi "پاییز"'},
      ],
      sentences:[
        {hz:'امروز هوا گرم اَس',tr:'emroz hawa garm as',nl:'Vandaag is het weer warm'},
        {hz:'زمستان اَس، خیلی سرد اَس',tr:'zemestaan as, khaili sard as',nl:'Het is winter, het is erg koud'},
        {hz:'بهار آمد، هوا خوش شد',tr:'bahaar aamad, hawa khosh shod',nl:'De lente is gekomen, het weer is mooi geworden'},
      ]
    },

    { id:'body', title:'Het Lichaam', sub:'Hoofd, hand, hart...', icon:'🫀', xp:25,
      pronTips:['ع','خ'],
      grammar:'In Hazaragi is "دهن" (dahan = mond) gebruikelijker dan "دهان" — kortere vormen zijn typisch!',
      words:[
        {hz:'سر',tr:'sar',nl:'Hoofd',tip:''},
        {hz:'چشم',tr:'chashm',nl:'Oog',tip:'"چشم" = ook: "ja met plezier"'},
        {hz:'دهن',tr:'dahan',nl:'Mond',tip:''},
        {hz:'دست',tr:'dist',nl:'Hand / Arm',tip:'"دستت درد نکنه" = bedankt voor je moeite'},
        {hz:'پا',tr:'paa',nl:'Voet / Been',tip:''},
        {hz:'دل',tr:'del',nl:'Hart / Gevoel',tip:'"دل" is het emotiecentrum in Hazaragi!'},
        {hz:'شکم',tr:'shekam',nl:'Buik',tip:''},
        {hz:'کمر',tr:'kamar',nl:'Rug / Taille',tip:''},
        {hz:'گوش',tr:'gosh',nl:'Oor',tip:''},
        {hz:'دندان',tr:'dandaan',nl:'Tand',tip:''},
      ],
      sentences:[
        {hz:'سرم درد می‌کنه',tr:'saram dard me-kona',nl:'Mijn hoofd doet pijn'},
        {hz:'چشمانت قشنگ اَس',tr:'chashmaanat qashanq as',nl:'Jouw ogen zijn mooi'},
        {hz:'دلم درد می‌کنه',tr:'delam dard me-kona',nl:'Mijn hart doet pijn'},
      ]
    },
  ]},

  { id:'ch_gram2', label:'📖 Grammatica 2 · Werkwoorden', color:'#8B6FF0', lessons:[

    { id:'gram2_heden', title:'Tegenwoordige tijd', sub:'Ik ga, jij eet, hij zegt...', icon:'⏰', xp:30,
      pronTips:['ر','و'],
      grammar:'Patroon: "می‌" + werkwoordstam + persoonuitgang. "می‌" is het kenmerk van de tegenwoordige tijd.',
      words:[
        {hz:'می‌رم',tr:'me-ram',nl:'Ik ga',tip:'"می‌" + stam "ر" (van رفتن) + "-م"'},
        {hz:'می‌ری',tr:'me-ri',nl:'Jij gaat',tip:'"-ی" = jij'},
        {hz:'می‌ره',tr:'me-ra',nl:'Hij/Zij gaat',tip:'Hazaragi: "-ه" — Dari heeft "-د"'},
        {hz:'می‌ریم',tr:'me-rim',nl:'Wij gaan',tip:'"-یم" = wij'},
        {hz:'می‌رین',tr:'me-rin',nl:'Jullie gaan',tip:'Hazaragi: "-ین" ipv "-ید"'},
        {hz:'می‌خورم',tr:'me-khoram',nl:'Ik eet',tip:'Stam van "خوردن" = خور'},
        {hz:'می‌گم',tr:'me-gam',nl:'Ik zeg',tip:'Hazaragi stam van "گفتن"'},
        {hz:'می‌دم',tr:'me-dam',nl:'Ik geef',tip:'Stam van "دادن" = د'},
      ],
      sentences:[
        {hz:'هر روز مکتب می‌رم',tr:'har roz maktab me-ram',nl:'Elke dag ga ik naar school'},
        {hz:'چی می‌خوری؟',tr:'chi me-khori?',nl:'Wat eet jij?'},
        {hz:'مو با هم چای می‌خوریم',tr:'mo baa ham chaai me-khorim',nl:'Wij drinken samen thee'},
      ]
    },

    { id:'gram2_negatie', title:'Negatie', sub:'Niet, geen, helemaal niet...', icon:'🚫', xp:25,
      pronTips:['خ'],
      grammar:'Negatie: voeg "نه" toe vóór het werkwoord → "نمی‌". "نیس" (nis) = is niet.',
      words:[
        {hz:'نمی‌رم',tr:'nemi-ram',nl:'Ik ga niet',tip:'"نه" + "می‌رم" → "نمی‌رم"'},
        {hz:'نمی‌خوام',tr:'nemi-kham',nl:'Ik wil niet',tip:''},
        {hz:'نمی‌دانم',tr:'nemi-danam',nl:'Ik weet het niet',tip:'Veelgebruikte zin — leer dit van buiten!'},
        {hz:'نیستم',tr:'nistam',nl:'Ik ben niet',tip:''},
        {hz:'نیس',tr:'nis',nl:'Is niet',tip:'Hazaragi: "نیس" — Dari "نیست"'},
        {hz:'مشکلی نیس',tr:'moshkeli nis',nl:'Geen probleem',tip:'Leer als één vaste uitdrukking'},
        {hz:'اصلاً',tr:'aslan',nl:'Helemaal niet',tip:'Versterkt de ontkenning'},
      ],
      sentences:[
        {hz:'نمی‌دانم، مشکلی نیس',tr:'nemi-danam, moshkeli nis',nl:'Ik weet het niet, geen probleem'},
        {hz:'امروز نمی‌رم، خسته هستم',tr:'emroz nemi-ram, khasta hastam',nl:'Vandaag ga ik niet, ik ben moe'},
        {hz:'اصلاً نمی‌خوام',tr:'aslan nemi-kham',nl:'Ik wil het helemaal niet'},
      ]
    },

    { id:'gram2_vragen', title:'Vraagzinnen', sub:'Waar, wat, wie, waarom...', icon:'❓', xp:25,
      pronTips:['خ'],
      grammar:'Hazaragi vraagzinnen: zelfde zinsbouw, alleen intonatie omhoog. Vraagwoorden staan vooraan de zin.',
      words:[
        {hz:'کجا',tr:'koja',nl:'Waar',tip:'"کجایی؟" = waar ben je?'},
        {hz:'چی',tr:'chi',nl:'Wat',tip:'"چی می‌خوای؟" = wat wil je?'},
        {hz:'کی',tr:'ki',nl:'Wie / Wanneer',tip:'Context bepaalt de betekenis'},
        {hz:'چرا',tr:'chera',nl:'Waarom',tip:''},
        {hz:'چتور',tr:'chetor',nl:'Hoe',tip:'Hazaragi: "چتور" — Iraans Farsi "چطور"'},
        {hz:'چند',tr:'chand',nl:'Hoeveel',tip:'"چند پول اَس؟" = hoeveel kost het?'},
        {hz:'کدام',tr:'kodaam',nl:'Welke',tip:''},
      ],
      sentences:[
        {hz:'کجا می‌ری؟',tr:'koja me-ri?',nl:'Waar ga jij naartoe?'},
        {hz:'چرا نمی‌آیی؟',tr:'chera nemi-aayi?',nl:'Waarom kom je niet?'},
        {hz:'چتور هستی، یارم؟',tr:'chetor hasti, yaaram?',nl:'Hoe gaat het, lieverd?'},
      ]
    },
  ]},

  { id:'ch4', label:'💬 Hoofdstuk 4 · Conversatie', color:'#3DD6A3', lessons:[

    { id:'shopping', title:'Winkelen', sub:'Kopen, prijzen, handelen', icon:'🛒', xp:30,
      pronTips:['خ','ر'],
      grammar:'"چند پول اَس؟" — Hazaragi gebruikt "پول" breed voor geld/prijs.',
      words:[
        {hz:'چند پول اَس؟',tr:'chand pool as?',nl:'Hoeveel kost het?',tip:'Meest gebruikte winkelvraag'},
        {hz:'ارزان',tr:'arzaan',nl:'Goedkoop',tip:''},
        {hz:'گران',tr:'geraan',nl:'Duur',tip:''},
        {hz:'خریدن',tr:'kharidan',nl:'Kopen',tip:''},
        {hz:'تخفیف',tr:'takhfif',nl:'Korting',tip:'Vraag altijd — het is normaal!'},
        {hz:'کافی اَس',tr:'kaafi as',nl:'Genoeg',tip:''},
        {hz:'نمی‌خوام',tr:'nemi-khaam',nl:'Ik wil het niet',tip:''},
        {hz:'قیمت',tr:'qimat',nl:'Prijs',tip:''},
      ],
      sentences:[
        {hz:'این چند پول اَس؟',tr:'ain chand pool as?',nl:'Hoeveel kost dit?'},
        {hz:'خیلی گران اَس، تخفیف بده',tr:'khaili geraan as, takhfif bede',nl:'Het is te duur, geef korting'},
        {hz:'یک کیلو سیب می‌خوام',tr:'yak kilo seb me-khaam',nl:'Ik wil een kilo appels'},
      ]
    },

    { id:'directions', title:'Weg vragen', sub:'Links, rechts, ver...', icon:'🗺️', xp:30,
      pronTips:['ر'],
      grammar:'Hazaragi richtingaanduidingen: "دَ" (da = in/naar) is typisch Hazaragi voor "در".',
      words:[
        {hz:'کجا',tr:'koja',nl:'Waar',tip:''},
        {hz:'راست',tr:'raast',nl:'Rechts',tip:''},
        {hz:'چپ',tr:'chap',nl:'Links',tip:''},
        {hz:'مستقیم',tr:'mostaghim',nl:'Rechtdoor',tip:''},
        {hz:'دور',tr:'door',nl:'Ver',tip:''},
        {hz:'نزدیک',tr:'nazdik',nl:'Dichtbij',tip:''},
        {hz:'اینجه',tr:'ainja',nl:'Hier',tip:'Hazaragi: "ainja" — Farsi "ainjaa"'},
        {hz:'اونجه',tr:'onja',nl:'Daar',tip:''},
        {hz:'دَ',tr:'da',nl:'In / Naar / Bij',tip:'Hazaragi voorzetsel'},
      ],
      sentences:[
        {hz:'بازار کجاس؟',tr:'baazaar kojaas?',nl:'Waar is de markt?'},
        {hz:'مستقیم برو، بعد راست بپیچ',tr:'mostaghim bero, baad raast bepich',nl:'Ga rechtdoor, dan rechtsaf'},
        {hz:'خانت نزدیک اَس؟',tr:'khaanat nazdik as?',nl:'Is jouw huis dichtbij?'},
      ]
    },

    { id:'compliments', title:'Complimenten', sub:'Je bent mooi, goed zo!', icon:'🌸', xp:30,
      pronTips:['ق','خ'],
      grammar:'"آفرین" (aafarin) is de meest gewaardeerde aanmoediging — zeg het veel!',
      words:[
        {hz:'قشنگ',tr:'qashanq',nl:'Mooi',tip:'"ق" = diepe keel-k'},
        {hz:'آفرین',tr:'aafarin',nl:'Goed zo! Bravo!',tip:'Gebruik het veel!'},
        {hz:'ماشاالله',tr:'mashaallah',nl:'MashaAllah',tip:'Zeg bij bewondering'},
        {hz:'مهربان',tr:'mehrabaan',nl:'Lief / Vriendelijk',tip:''},
        {hz:'باهوش',tr:'baahoosh',nl:'Slim',tip:''},
        {hz:'قوی',tr:'qawi',nl:'Sterk',tip:''},
        {hz:'جالب',tr:'jaalab',nl:'Interessant',tip:''},
        {hz:'عالی',tr:'aali',nl:'Geweldig / Uitstekend',tip:''},
      ],
      sentences:[
        {hz:'تو خیلی قشنگ هستی',tr:'to khaili qashanq hasti',nl:'Jij bent heel mooi'},
        {hz:'آفرین! خوب کردی',tr:'aafarin! khob kardi',nl:'Goed zo! Je hebt het goed gedaan'},
        {hz:'ماشاالله چقدر باهوشی',tr:'mashaallah chaqadr baahooshi',nl:'MashaAllah, wat ben jij slim'},
      ]
    },

    { id:'flirt', title:'Romantiek & Gevoelens', sub:'Ik mis je, je bent mooi...', icon:'💌', xp:35,
      pronTips:['ع','غ'],
      grammar:'"دل" (hart) speelt een sleutelrol: "دل‌ربا" (hart-steler), "دل‌تنگی" (hartsverlangen).',
      words:[
        {hz:'دوستت دارم',tr:'dostat daaram',nl:'Ik hou van jou',tip:''},
        {hz:'عاشقتم',tr:'aasheqatam',nl:'Ik ben verliefd op jou',tip:''},
        {hz:'دلم تنگته',tr:'delam tangta',nl:'Ik mis je zo',tip:''},
        {hz:'خوش‌تیپ',tr:'khosh-tip',nl:'Knap / Stijlvol',tip:''},
        {hz:'دل‌ربا',tr:'delrobaa',nl:'Betoverend',tip:'Letterlijk: "hart-steler"'},
        {hz:'یارم',tr:'yaaram',nl:'Mijn geliefde',tip:''},
        {hz:'نمی‌تانم بی‌تو باشم',tr:'nemi-taanam bi-to baasham',nl:'Ik kan niet zonder jou',tip:'Hazaragi: "تانستن" — Iraans Farsi zegt "تونستن"'},
        {hz:'رویا',tr:'roya',nl:'Droom / Lieveling',tip:''},
      ],
      sentences:[
        {hz:'یارم، دلم تنگته برات',tr:'yaaram, delam tangta baraat',nl:'Lieverd, ik mis je zo'},
        {hz:'از وختی دیدمت دلم لرزید',tr:'az wakhti didamat delam larzid',nl:'Vanaf het moment dat ik je zag beefde mijn hart'},
      ]
    },
  ]},

  { id:'ch5', label:'🌟 Hoofdstuk 5 · Cultuur & Slang', color:'#FFBE3D', lessons:[

    { id:'slang', title:'Hazara spreektaal', sub:'Echte dagelijkse woorden', icon:'😎', xp:35,
      pronTips:['خ','و'],
      grammar:'Hazaragi slang combineert Mongools, Turks en Dari. "خو" (kho = nou/dan) is typisch Hazaragi!',
      words:[
        {hz:'جان',tr:'jaan',nl:'Lieverd / Schat',tip:'"Sara jaan" = lieve Sara'},
        {hz:'یار',tr:'yaar',nl:'Vriend / Kerel',tip:''},
        {hz:'والله',tr:'wallah',nl:'Echt waar!',tip:''},
        {hz:'اصلاً',tr:'aslan',nl:'Helemaal niet',tip:''},
        {hz:'نه بابا',tr:'na baabaa',nl:'Nee joh / Serieus?',tip:''},
        {hz:'آخ جان',tr:'aakh jaan',nl:'Yes! / Wauw!',tip:''},
        {hz:'خو',tr:'kho',nl:'Nou / Dan / Toch',tip:'Typisch Hazaragi verbindingswoord!'},
        {hz:'ببین',tr:'bebin',nl:'Kijk / Luister even',tip:''},
        {hz:'آره',tr:'aara',nl:'Ja (informeel)',tip:''},
      ],
      sentences:[
        {hz:'والله جان، اصلاً نمی‌دانم',tr:'wallah jaan, aslan nemi-danam',nl:'Echt waar lieverd, ik heb geen idee'},
        {hz:'آخ جان! فردا می‌ریم بازار',tr:'aakh jaan! farda me-rim baazaar',nl:'Yes! Morgen gaan we naar de markt'},
        {hz:'خو، چی می‌خوای؟',tr:'kho, chi me-khaai?',nl:'Nou, wat wil je?'},
      ]
    },

    { id:'culture', title:'Cultuur & Tradities', sub:'Gastvrijheid, feesten...', icon:'🎊', xp:35,
      pronTips:['خ','ع'],
      grammar:'"مهمان‌نوازی" (gastvrijheid) is de heiligste waarde: "مهمان حبیب خداست".',
      words:[
        {hz:'مهمانی',tr:'mehmaani',nl:'Feest / Bezoek',tip:''},
        {hz:'مهمان‌نوازی',tr:'mehmannawaazi',nl:'Gastvrijheid',tip:'Heiligste waarde in Hazara cultuur'},
        {hz:'نوروز',tr:'nowroz',nl:'Nieuwjaar (21 maart)',tip:''},
        {hz:'عروسی',tr:'arosi',nl:'Bruiloft',tip:''},
        {hz:'دستت درد نکنه',tr:'dastat dard nakona',nl:'Dank je voor je moeite',tip:'Na maaltijd!'},
        {hz:'صفا آوردید',tr:'safaa aawordid',nl:'Welkomszin voor gasten',tip:''},
        {hz:'نوش جان',tr:'nosh jaan',nl:'Smakelijk',tip:''},
        {hz:'حلال باشه',tr:'halaal baasha',nl:'Moge het u smaken',tip:''},
      ],
      sentences:[
        {hz:'نوروز مبارک! سال نو خوش',tr:'nowroz mobaarak! saal no khosh',nl:'Gelukkig Nieuwjaar!'},
        {hz:'دستت درد نکنه، خیلی خوشمزه بود',tr:'dastat dard nakona, khaili khoshmaza bood',nl:'Dank je, het was heerlijk'},
        {hz:'مهمان حبیب خداست',tr:'mehman habiib khodaast',nl:'Een gast is de geliefde van God'},
      ]
    },

    { id:'internet', title:'WhatsApp & Berichten', sub:'Online Hazaragi', icon:'📱', xp:30,
      pronTips:['خ'],
      grammar:'"هستی؟" (ben je er?) is het eerste bericht op WhatsApp!',
      words:[
        {hz:'هستی؟',tr:'hasti?',nl:'Ben je er?',tip:'Eerste WhatsApp bericht'},
        {hz:'خب',tr:'khab',nl:'Oké (informeel)',tip:''},
        {hz:'اوکی',tr:'oki',nl:'Oké',tip:''},
        {hz:'بعداً زنگ می‌زنم',tr:'baadan zang me-zanam',nl:'Ik bel je later',tip:''},
        {hz:'مراقب خودت باش',tr:'moraaqeb khodat baash',nl:'Zorg goed voor jezelf',tip:''},
        {hz:'دلم تنگته',tr:'delam tangta',nl:'Ik mis je',tip:''},
        {hz:'پیام بده',tr:'payaam bede',nl:'Stuur een bericht',tip:''},
        {hz:'رسیدی؟',tr:'rasidi?',nl:'Ben je aangekomen?',tip:''},
      ],
      sentences:[
        {hz:'هستی؟ دلم تنگته',tr:'hasti? delam tangta',nl:'Ben je er? Ik mis je'},
        {hz:'خب، بعداً زنگ می‌زنم',tr:'khab, baadan zang me-zanam',nl:'Oké, ik bel je later'},
        {hz:'مراقب خودت باش، شب بخیر',tr:'moraaqeb khodat baash, shab bakhair',nl:'Zorg voor jezelf, goedenacht'},
      ]
    },
  ]},

  { id:'ch6', label:'💎 Hoofdstuk 6 · Gevorderd', color:'#5BB8FF', lessons:[

    { id:'stories', title:'Verleden tijd', sub:'Verhalen & verleden', icon:'📖', xp:40,
      pronTips:['ر','غ'],
      grammar:'Verleden tijd: stam + uitgang. "رفت" (ging), "رفتم" (ik ging), "رفتی" (jij ging).',
      words:[
        {hz:'روزی روزگاری',tr:'rozi rozgaari',nl:'Er was eens',tip:'Begin van elk Hazara verhaal!'},
        {hz:'رفت',tr:'raft',nl:'Ging',tip:'"رفتم" = ik ging'},
        {hz:'آمد',tr:'aamad',nl:'Kwam',tip:''},
        {hz:'گفت',tr:'goft',nl:'Zei',tip:''},
        {hz:'دید',tr:'did',nl:'Zag',tip:''},
        {hz:'بود',tr:'bood',nl:'Was',tip:''},
        {hz:'خورد',tr:'khord',nl:'At',tip:''},
        {hz:'کرد',tr:'kard',nl:'Deed',tip:''},
        {hz:'گرفت',tr:'gereft',nl:'Nam / Pakte',tip:''},
        {hz:'برگشت',tr:'bargasht',nl:'Keerde terug',tip:''},
      ],
      sentences:[
        {hz:'روزی روزگاری یک دختر بود',tr:'rozi rozgaari yak dokhtar bood',nl:'Er was eens een meisje'},
        {hz:'رفت دَ بازار و نان خرید',tr:'raft da baazaar wa naan kharid',nl:'Ze ging naar de markt en kocht brood'},
        {hz:'مادرش گفت: "زود برگرد"',tr:'maadareash goft: "zod bargard"',nl:'Haar moeder zei: "kom snel terug"'},
      ]
    },

    { id:'opinions', title:'Meningen & Debat', sub:'Ik denk, ik ben het eens...', icon:'🗣️', xp:40,
      pronTips:['ع','ر'],
      grammar:'Gebruik "به نظرم" (ba nazaram = naar mijn mening) om beleefd je mening te delen.',
      words:[
        {hz:'درس اَس',tr:'doros as',nl:'Dat klopt',tip:'Hazaragi: "doros" — Farsi "درست"'},
        {hz:'اشتباه',tr:'eshtebaa',nl:'Fout / Vergissing',tip:''},
        {hz:'موافقم',tr:'mowaafeqam',nl:'Ik ben het eens',tip:''},
        {hz:'مخالفم',tr:'mokhaalfam',nl:'Ik ben het oneens',tip:''},
        {hz:'به نظرم',tr:'ba nazaram',nl:'Naar mijn mening',tip:''},
        {hz:'فکر می‌کنم',tr:'fekr me-konam',nl:'Ik denk dat...',tip:''},
        {hz:'شاید',tr:'shaayad',nl:'Misschien',tip:''},
        {hz:'یقیناً',tr:'yaqinan',nl:'Zeker / Absoluut',tip:''},
      ],
      sentences:[
        {hz:'به نظرم این اشتباه اَس',tr:'ba nazaram ain eshtebaa as',nl:'Naar mijn mening is dit fout'},
        {hz:'موافقم، درس می‌گی',tr:'mowaafeqam, doros megi',nl:'Ik ben het eens, je hebt gelijk'},
        {hz:'شاید فردا بهتر بشه',tr:'shaayad farda behtar beshe',nl:'Misschien wordt het morgen beter'},
      ]
    },

    { id:'school', title:'School & Onderwijs', sub:'Klas, toets, leraar...', icon:'🏫', xp:35,
      pronTips:['ق'],
      grammar:'"مکتب" (maktab) is het Hazaragi/Dari woord voor school.',
      words:[
        {hz:'مکتب',tr:'maktab',nl:'School',tip:''},
        {hz:'معلم',tr:'mo\'alem',nl:'Leraar',tip:''},
        {hz:'شاگرد',tr:'shaagerd',nl:'Leerling',tip:''},
        {hz:'کتاب',tr:'ketaab',nl:'Boek',tip:''},
        {hz:'درس',tr:'dars',nl:'Les / Huiswerk',tip:''},
        {hz:'امتحان',tr:'emtehaan',nl:'Toets / Examen',tip:''},
        {hz:'سبق',tr:'sabaq',nl:'Lesinhoud / Taak',tip:''},
        {hz:'قلم',tr:'qalam',nl:'Pen',tip:''},
        {hz:'تخته سیاه',tr:'takhta siyaah',nl:'Schoolbord',tip:'Letterlijk "zwart bord" — standaard Hazaragi/Dari'},
      ],
      sentences:[
        {hz:'امروز امتحان دارم',tr:'emroz emtehaan daaram',nl:'Vandaag heb ik een toets'},
        {hz:'معلمم خیلی خوب اَس',tr:'mo\'alemam khaili khob as',nl:'Mijn leraar is heel goed'},
        {hz:'سبقم را خواندم',tr:'sabaqam ra khwaadam',nl:'Ik heb mijn les bestudeerd'},
      ]
    },
  ]},

  { id:'ch_gram3', label:'📖 Grammatica 3 · Gevorderd', color:'#8B6FF0', lessons:[

    { id:'gram3_sov', title:'Zinsbouw: S-O-W', sub:'Subject · Object · Werkwoord', icon:'📐', xp:30,
      pronTips:['ر'],
      grammar:'Hazaragi is een SOW-taal: Subject + Object + Werkwoord. Het werkwoord staat ALTIJD aan het einde!',
      words:[
        {hz:'من نان می‌خورم',tr:'man naan me-khoram',nl:'Ik eet brood',tip:'S(من) + O(نان) + W(می‌خورم)'},
        {hz:'او کتاب می‌خواند',tr:'o ketaab me-khwaand',nl:'Hij/zij leest een boek',tip:'S + O + W — werkwoord altijd last'},
        {hz:'مو چای می‌خوریم',tr:'mo chaai me-khorim',nl:'Wij drinken thee',tip:'"مو" = wij (Hazaragi)'},
        {hz:'من تو را دوست دارم',tr:'man to ra dost daaram',nl:'Ik hou van jou',tip:'"را" markeert het object'},
        {hz:'مو هزارگی یاد می‌گیریم',tr:'mo hazaaragi yaad me-girim',nl:'Wij leren Hazaragi',tip:'S + O + W'},
      ],
      sentences:[
        {hz:'من هر روز چای می‌نوشم',tr:'man har roz chaai me-nosham',nl:'Ik drink elke dag thee'},
        {hz:'او دیروز بازار رفت',tr:'o diroz baazaar raft',nl:'Hij/zij ging gisteren naar de markt'},
        {hz:'شما چی کار می‌کنین؟',tr:'shoma chi kaar me-konin?',nl:'Wat doen jullie?'},
      ]
    },

    { id:'gram3_verleden', title:'Verleden tijd', sub:'Ik ging, jij at, hij zei...', icon:'⏪', xp:35,
      pronTips:['ر'],
      grammar:'Verleden tijd: werkwoordstam + persoonuitgang. Stam van "رفتن" = رفت. Geen "می‌" prefix!',
      words:[
        {hz:'رفتم',tr:'raftam',nl:'Ik ging',tip:'رفت + "-م" (ik)'},
        {hz:'رفتی',tr:'rafti',nl:'Jij ging',tip:'رفت + "-ی" (jij)'},
        {hz:'رفت',tr:'raft',nl:'Hij/Zij ging',tip:'Enkel de stam — geen uitgang'},
        {hz:'رفتیم',tr:'raftim',nl:'Wij gingen',tip:'رفت + "-یم" (wij)'},
        {hz:'خوردم',tr:'khordam',nl:'Ik at',tip:'Stam "خورد" + "-م"'},
        {hz:'گفتم',tr:'goftam',nl:'Ik zei',tip:'Stam "گفت" + "-م"'},
        {hz:'دیدم',tr:'didam',nl:'Ik zag',tip:'Stam "دید" + "-م"'},
        {hz:'نرفتم',tr:'naraftam',nl:'Ik ging niet',tip:'"نه" + "رفتم" → "نرفتم"'},
      ],
      sentences:[
        {hz:'دیروز مکتب رفتم',tr:'diroz maktab raftam',nl:'Gisteren ging ik naar school'},
        {hz:'چی خوردی؟ نان خوردم',tr:'chi khordi? naan khordam',nl:'Wat at jij? Ik at brood'},
        {hz:'نرفتم چون مریض بودم',tr:'naraftam chon mariz boodam',nl:'Ik ging niet omdat ik ziek was'},
      ]
    },

    { id:'gram3_postposities', title:'Postposities', sub:'In, van, met, voor...', icon:'🔀', xp:30,
      pronTips:['خ'],
      grammar:'Hazaragi gebruikt "دَ" (da) waar Dari "در" of "به" zegt. Postposities staan vóór het zelfstandig naamwoord.',
      words:[
        {hz:'دَ',tr:'da',nl:'In / Naar / Bij',tip:'Hazaragi kenmerkwoord — Dari gebruikt "در" of "به"'},
        {hz:'از',tr:'az',nl:'Van / Uit',tip:'"از کجا آمدی؟" = waar kom je vandaan?'},
        {hz:'با',tr:'baa',nl:'Met',tip:'"با هم" = samen (letterlijk: met elkaar)'},
        {hz:'برای',tr:'baraayi',nl:'Voor',tip:'"برای تو" = voor jou'},
        {hz:'تا',tr:'taa',nl:'Tot / Naar',tip:'"تا فردا" = tot morgen'},
        {hz:'بدون',tr:'bedoon',nl:'Zonder',tip:'"بدون تو" = zonder jou'},
        {hz:'دَ خانه',tr:'da khaana',nl:'Thuis / Naar huis',tip:'Typische Hazaragi constructie'},
      ],
      sentences:[
        {hz:'دَ مکتب می‌رم',tr:'da maktab me-ram',nl:'Ik ga naar school',tip:'"دَ" = naar (Hazaragi)'},
        {hz:'از کجا آمدی؟',tr:'az koja aamadi?',nl:'Waar kom je vandaan?'},
        {hz:'با تو می‌آیم، بدون تو نمی‌رم',tr:'baa to me-aaym, bedoon to nemi-ram',nl:'Ik kom met jou, zonder jou ga ik niet'},
      ]
    },
  ]},

  { id:'ch7', label:'🌿 Hoofdstuk 7 · Gezondheid & Sport', color:'#2ECC9A', lessons:[

    { id:'health', title:'Ziek & Gezond', sub:'Pijn, dokter, medicijn...', icon:'💊', xp:45,
      pronTips:['ع','خ'],
      grammar:'"مریض استم" (ik ben ziek) — "استم" is Hazaragi/Dari voor "هستم".',
      words:[
        {hz:'مریض',tr:'mariz',nl:'Ziek',tip:''},
        {hz:'درد',tr:'dard',nl:'Pijn',tip:''},
        {hz:'دکتر',tr:'doktor',nl:'Dokter',tip:''},
        {hz:'دوا',tr:'dawaa',nl:'Medicijn',tip:''},
        {hz:'تب',tr:'tab',nl:'Koorts',tip:''},
        {hz:'زکام',tr:'zakaam',nl:'Verkoudheid',tip:'Afghaans/Hazaragi woord — Iraans Farsi zegt "سرماخوردگی"'},
        {hz:'شفا',tr:'shafaa',nl:'Genezing',tip:''},
        {hz:'تندرست',tr:'tandorost',nl:'Gezond',tip:''},
        {hz:'استراحت',tr:'estaraahat',nl:'Rust',tip:''},
        {hz:'زخم',tr:'zakhm',nl:'Wond / Blessure',tip:''},
      ],
      sentences:[
        {hz:'مریض استم، دوا خریدم',tr:'mariz astam, dawaa kharidam',nl:'Ik ben ziek, ik heb medicijn gekocht'},
        {hz:'تب داری؟ استراحت کو',tr:'tab daari? estaraahat ko',nl:'Heb je koorts? Ga rusten'},
        {hz:'ایشالله زود شفا یابی',tr:'ishaallah zod shafaa yaabi',nl:'Inshallah word je snel beter'},
      ]
    },

    { id:'sports', title:'Sport & Hobby\'s', sub:'Voetbal, muziek, koken...', icon:'💪', xp:45,
      pronTips:['ر','غ'],
      grammar:'"بازی کردن" (baazi kardan) = spelen.',
      words:[
        {hz:'فوتبال',tr:'footbaal',nl:'Voetbal',tip:''},
        {hz:'دویدن',tr:'dawidan',nl:'Rennen',tip:''},
        {hz:'بازی',tr:'baazi',nl:'Spel / Spelen',tip:''},
        {hz:'موسیقی',tr:'musiqi',nl:'Muziek',tip:''},
        {hz:'نقاشی',tr:'naqqaashi',nl:'Schilderen / Tekenen',tip:''},
        {hz:'کتاب خواندن',tr:'ketaab khaandan',nl:'Lezen',tip:''},
        {hz:'آشپزی',tr:'aashpazi',nl:'Koken (als hobby)',tip:''},
        {hz:'قهرمان',tr:'qahramaan',nl:'Kampioen / Held',tip:''},
        {hz:'بُزکشی',tr:'buzkashi',nl:'Buzkashi (ruiterspel)',tip:'Nationaal Afghaans paardspel!'},
      ],
      sentences:[
        {hz:'هر روز فوتبال بازی می‌کنم',tr:'har roz footbaal baazi me-konam',nl:'Elke dag speel ik voetbal'},
        {hz:'موسیقی گوش می‌دم، آرام می‌شم',tr:'musiqi gosh me-dam, aaraam me-sham',nl:'Ik luister muziek, ik word rustig'},
        {hz:'بُزکشی بازی کردم — عالی بود!',tr:'buzkashi baazi kardam — aali bood!',nl:'Ik deed buzkashi mee — het was geweldig!'},
      ]
    },

    { id:'nature', title:'Natuur & Landschap', sub:'Bergen, rivieren, bloemen...', icon:'🏔️', xp:40,
      pronTips:['خ','آ'],
      grammar:'Hazarajat = het land van de Hazara — een bergachtig plateau in centraal Afghanistan.',
      words:[
        {hz:'کوه',tr:'koh',nl:'Berg',tip:''},
        {hz:'دریا',tr:'darya',nl:'Rivier / Groot water',tip:''},
        {hz:'دشت',tr:'dasht',nl:'Vlakte / Steppe',tip:''},
        {hz:'جنگل',tr:'jangal',nl:'Bos',tip:''},
        {hz:'گل',tr:'gol',nl:'Bloem',tip:'"گل" = ook een vrouwennaam'},
        {hz:'درخت',tr:'darakht',nl:'Boom',tip:''},
        {hz:'آسمان',tr:'aasmaan',nl:'Hemel / Lucht',tip:''},
        {hz:'ستاره',tr:'setaara',nl:'Ster',tip:''},
        {hz:'ماه',tr:'maah',nl:'Maan / Maand',tip:'Dubbele betekenis!'},
        {hz:'زمین',tr:'zamin',nl:'Aarde / Grond',tip:''},
      ],
      sentences:[
        {hz:'کوه‌های هزاراجات خیلی قشنگ اَس',tr:'kohhaaye hazaarajaat khaili qashanq as',nl:'De bergen van Hazarajat zijn heel mooi'},
        {hz:'شب ستاره‌ها قشنگن',tr:'shab setaarahaa qashanghan',nl:'\'s Nachts zijn de sterren mooi'},
      ]
    },
  ]},

  { id:'ch8', label:'✈️ Hoofdstuk 8 · Reizen & Werk', color:'#5BB8FF', lessons:[

    { id:'travel', title:'Reizen', sub:'Vliegtuig, hotel, paspoort...', icon:'✈️', xp:50,
      pronTips:['خ','ق'],
      grammar:'"طیاره" (tayaara = vliegtuig) is Hazaragi/Dari — Farsi zegt "هواپیما".',
      words:[
        {hz:'سفر',tr:'safar',nl:'Reis',tip:'"سفر خوش" = goede reis!'},
        {hz:'طیاره',tr:'tayaara',nl:'Vliegtuig',tip:''},
        {hz:'هوتل',tr:'hotel',nl:'Hotel',tip:''},
        {hz:'پاسپورت',tr:'paaspord',nl:'Paspoort',tip:''},
        {hz:'ویزه',tr:'wiza',nl:'Visum',tip:''},
        {hz:'سرحد',tr:'sarhad',nl:'Grens',tip:''},
        {hz:'تکت',tr:'tiket',nl:'Ticket',tip:''},
        {hz:'چمدان',tr:'chamedaan',nl:'Koffer',tip:''},
        {hz:'خارج',tr:'khaarij',nl:'Buitenland',tip:''},
        {hz:'ایستگاه',tr:'istegaah',nl:'Station / Halte',tip:''},
      ],
      sentences:[
        {hz:'فردا سفر داریم، چمدانم بستم',tr:'farda safar daarim, chamedaanam bastam',nl:'Morgen gaan we op reis, ik heb mijn koffer gepakt'},
        {hz:'پاسپورتم کجاس؟ پیدا نیس',tr:'paasportam kojaas? payda nis',nl:'Waar is mijn paspoort? Ik kan het niet vinden'},
        {hz:'سفر خوش! مراقب خودت باش',tr:'safar khosh! moraaqeb khodat baash',nl:'Goede reis! Zorg goed voor jezelf'},
      ]
    },

    { id:'work', title:'Werk & Carrière', sub:'Kantoor, baas, salaris...', icon:'💼', xp:50,
      pronTips:['ع','ر'],
      grammar:'Leenwoorden: "آفیس" (kantoor), "میتینگ" (vergadering). Moderne Hazaragi!',
      words:[
        {hz:'کار',tr:'kaar',nl:'Werk',tip:''},
        {hz:'آفیس',tr:'aafis',nl:'Kantoor',tip:'Leenwoord van "office"'},
        {hz:'رئیس',tr:'raees',nl:'Baas / Chef',tip:''},
        {hz:'همکار',tr:'hamkaar',nl:'Collega',tip:''},
        {hz:'معاش',tr:'ma\'aash',nl:'Salaris',tip:''},
        {hz:'استخدام شدم',tr:'estekhdaam shodam',nl:'Ik ben aangenomen',tip:''},
        {hz:'اخراج',tr:'ekhraaj',nl:'Ontslag',tip:''},
        {hz:'میتینگ',tr:'meeting',nl:'Vergadering',tip:''},
        {hz:'تجربه',tr:'tajroba',nl:'Ervaring',tip:''},
        {hz:'پروژه',tr:'projaa',nl:'Project',tip:''},
      ],
      sentences:[
        {hz:'کار جدید پیدا کردم',tr:'kaar jadid payda kardam',nl:'Ik heb een nieuwe baan gevonden'},
        {hz:'امروز میتینگ مهم داریم',tr:'emroz meeting mohim daarim',nl:'Vandaag hebben we een belangrijke vergadering'},
        {hz:'معاشم خوب اَس، راضی استم',tr:'ma\'aasham khob as, raazi astam',nl:'Mijn salaris is goed, ik ben tevreden'},
      ]
    },

    { id:'dreams_night', title:'Nacht & Dromen', sub:'Slaap, sterren, droom...', icon:'🌙', xp:45,
      pronTips:['خ','ر'],
      grammar:'"خواب" (khwaab) = zowel slaap als droom. "خواب دیدم" = ik heb gedroomd.',
      words:[
        {hz:'خواب',tr:'khwaab',nl:'Slaap / Droom',tip:''},
        {hz:'رویا',tr:'roya',nl:'Droom (poëtisch)',tip:''},
        {hz:'شب',tr:'shab',nl:'Nacht',tip:''},
        {hz:'ستاره',tr:'setaara',nl:'Ster',tip:''},
        {hz:'ماه',tr:'maah',nl:'Maan',tip:''},
        {hz:'آرام',tr:'aaraam',nl:'Rustig / Stil',tip:''},
        {hz:'بیدار',tr:'bidaar',nl:'Wakker',tip:''},
        {hz:'کابوس',tr:'kaabus',nl:'Nachtmerrie',tip:''},
        {hz:'خوابم برد',tr:'khaabam bord',nl:'Ik viel in slaap',tip:'Letterlijk: "slaap nam me mee"'},
        {hz:'خواب قشنگ',tr:'khwaab qashanq',nl:'Mooie droom',tip:''},
      ],
      sentences:[
        {hz:'دیشب خواب قشنگ دیدم',tr:'dishab khwaab qashanq didam',nl:'Gisteravond had ik een mooie droom'},
        {hz:'ستاره‌ها امشب خیلی قشنگن',tr:'setaarahaa emshab khaili qashanghan',nl:'De sterren zijn vanavond heel mooi'},
        {hz:'خواب قشنگ ببینی، شب بخیر',tr:'khwaab qashanq bebini, shab bakhair',nl:'Zoete dromen, goedenacht'},
      ]
    },
  ]},

  { id:'ch9', label:'🎉 Hoofdstuk 9 · Feest, Religie & Conflict', color:'#FF8C61', lessons:[

    { id:'party_music', title:'Feesten & Muziek', sub:'Dansen, zingen, vieren...', icon:'💃', xp:55,
      pronTips:['غ','ع'],
      grammar:'"دایره" (daayera = tamboerijn) is het traditionele Hazara instrument bij feesten.',
      words:[
        {hz:'جشن',tr:'jashn',nl:'Feest / Viering',tip:''},
        {hz:'رقص',tr:'raqs',nl:'Dans',tip:''},
        {hz:'آهنگ',tr:'aahang',nl:'Lied / Muziek',tip:''},
        {hz:'غزل',tr:'ghazal',nl:'Ghazal (poëtisch lied)',tip:''},
        {hz:'دایره',tr:'daayera',nl:'Tamboerijn',tip:'HET Hazara instrument!'},
        {hz:'صدا',tr:'sedaa',nl:'Stem / Geluid',tip:''},
        {hz:'شادی',tr:'shaadi',nl:'Vreugde / Geluk',tip:''},
        {hz:'مهمانی کردن',tr:'mehmaani kardan',nl:'Een feest geven',tip:''},
        {hz:'سرود',tr:'sorood',nl:'Lied / Hymne',tip:''},
        {hz:'دُهل',tr:'dohol',nl:'Grote trom',tip:''},
      ],
      sentences:[
        {hz:'عروسی بود، همه رقص کردن',tr:'arosi bood, hama raqs karden',nl:'Het was een bruiloft, iedereen danste'},
        {hz:'آهنگت خیلی قشنگه، دوباره بزن',tr:'aahangat khaili qashangha, dobaara bezan',nl:'Jouw liedje is heel mooi, speel het nog eens'},
        {hz:'شادی کو! امشب جشن داریم',tr:'shaadi ko! emshab jashn daarim',nl:'Wees blij! Vanavond hebben we een feest'},
      ]
    },

    { id:'religion', title:'Religie & Tradities', sub:'Gebed, Ramadan...', icon:'🙏', xp:55,
      pronTips:['ع','ق'],
      grammar:'De Hazara zijn overwegend Shi\'a moslims. Unieke tradities zoals "عاشورا".',
      words:[
        {hz:'نماز',tr:'namaaz',nl:'Gebed',tip:''},
        {hz:'روزه',tr:'roza',nl:'Vasten',tip:''},
        {hz:'رمضان',tr:'ramazaan',nl:'Ramadan',tip:''},
        {hz:'عید',tr:'eid',nl:'Eid-feest',tip:''},
        {hz:'دعا',tr:'do\'aa',nl:'Smeekgebed',tip:''},
        {hz:'مسجد',tr:'masjed',nl:'Moskee',tip:''},
        {hz:'ایشالله',tr:'ishaallah',nl:'Inshallah',tip:''},
        {hz:'الحمدلله',tr:'alhamdolillah',nl:'Alhamdulillah',tip:''},
        {hz:'بسم الله',tr:'bismillah',nl:'In naam van God',tip:''},
        {hz:'عاشورا',tr:'aashoora',nl:'Ashura (Shi\'a rouw)',tip:''},
      ],
      sentences:[
        {hz:'عید مبارک! سال نو خوش باشی',tr:'eid mobaarak! saal no khosh baashi',nl:'Eid Mubarak! Fijn nieuw jaar'},
        {hz:'رمضان شروع شد، روزه می‌گیری؟',tr:'ramazaan shoro shod, roza megiri?',nl:'Ramadan is begonnen, ga jij vasten?'},
        {hz:'ایشالله همه چیز درس می‌شه',tr:'ishaallah hama chiz doros meshe',nl:'Inshallah wordt alles goed'},
      ]
    },

    { id:'arguments', title:'Ruzies & Verzoening', sub:'Boos, sorry, vrede...', icon:'😤', xp:55,
      pronTips:['ع','غ'],
      grammar:'"آشتی کردن" (vrede sluiten) is in Hazara cultuur erg belangrijk.',
      words:[
        {hz:'معذرت',tr:'ma\'zerat',nl:'Sorry / Excuus',tip:''},
        {hz:'ببخشید',tr:'bebakhshid',nl:'Pardon / Vergeef me',tip:''},
        {hz:'عصبانی',tr:'asabaani',nl:'Boos',tip:''},
        {hz:'دعوا',tr:'da\'waa',nl:'Ruzie',tip:''},
        {hz:'آشتی',tr:'aashti',nl:'Vrede / Verzoening',tip:'Kern van Hazara conflictoplossing'},
        {hz:'تقصیر',tr:'taqseer',nl:'Schuld',tip:''},
        {hz:'درک کردن',tr:'darak kardan',nl:'Begrijpen',tip:''},
        {hz:'حق داری',tr:'haq daari',nl:'Je hebt gelijk',tip:''},
        {hz:'ناراحت',tr:'naaraahat',nl:'Verdrietig / Beledigd',tip:''},
        {hz:'دلم می‌سوزه',tr:'delam mesoza',nl:'Het doet me pijn (medeleven)',tip:''},
      ],
      sentences:[
        {hz:'معذرت می‌خوام، اشتباه کردم',tr:'ma\'zerat me-khaam, eshtebaa kardam',nl:'Het spijt me, ik heb een fout gemaakt'},
        {hz:'چرا عصبانی هستی؟ دعوا نکو',tr:'chera asabaani hasti? da\'waa nako',nl:'Waarom ben je boos? Maak geen ruzie'},
        {hz:'آشتی کنیم، دوستای قدیمیم',tr:'aashti konim, dostaayi qadimim',nl:'Laten we vrede sluiten, we zijn oude vrienden'},
      ]
    },
  ]},

  { id:'ch10', label:'👑 Hoofdstuk 10 · Expert Niveau', color:'#A78BFA', lessons:[

    { id:'cooking', title:'Koken & Recepten', sub:'Hazara gerechten...', icon:'🍽️', xp:60,
      pronTips:['خ','ق','ع'],
      grammar:'"مانتو" (dumplings), "قروت" (gedroogde yoghurt), "بولانی" zijn typisch Hazara gerechten.',
      words:[
        {hz:'پختن',tr:'pakhtan',nl:'Koken',tip:''},
        {hz:'روغن',tr:'roghan',nl:'Olie / Vet',tip:''},
        {hz:'نمک',tr:'namak',nl:'Zout',tip:''},
        {hz:'پیاز',tr:'pyaaz',nl:'Ui',tip:'Basis van elk Afghaans recept'},
        {hz:'گشنیز',tr:'gashniiz',nl:'Koriander',tip:''},
        {hz:'قورمه',tr:'qorma',nl:'Stoofgerecht',tip:''},
        {hz:'مانتو',tr:'maanto',nl:'Manto (dumplings)',tip:'GELIEFD Hazara gerecht!'},
        {hz:'قروت',tr:'qoroot',nl:'Gedroogde yoghurt',tip:''},
        {hz:'بریانی',tr:'beryaani',nl:'Biryani',tip:''},
        {hz:'چکنه',tr:'chakana',nl:'Hazaragi soep',tip:'Traditionele Hazara maaltijdsoep'},
      ],
      sentences:[
        {hz:'امروز مانتو پختم، بیا بخور',tr:'emroz maanto pakhtam, bia bakhoor',nl:'Vandaag heb ik manto gekookt, kom eten'},
        {hz:'قورمه بدون پیاز نمی‌شه',tr:'qorma bedoon pyaaz nemishe',nl:'Qorma kan niet zonder ui'},
        {hz:'قروت روی مانتو بریز',tr:'qoroot roi maanto beriz',nl:'Giet qoroot over de manto'},
      ]
    },

    { id:'fluent_expressions', title:'Spreekwoorden & Wijsheid', sub:'Native-level uitdrukkingen', icon:'💬', xp:65,
      pronTips:['خ','غ','ع','ق'],
      grammar:'Hazaragi spreekwoorden combineren Perzische, Mongoolse en lokale wijsheid.',
      words:[
        {hz:'دل به دل راه داره',tr:'del ba del raah daara',nl:'Harten vinden een weg',tip:'Als je aan iemand denkt, denken zij aan jou'},
        {hz:'کاچی به از هیچی',tr:'kaachi be az hichi',nl:'Iets is beter dan niets',tip:'Klassiek spreekwoord'},
        {hz:'چشم',tr:'chashm',nl:'Ja, met plezier!',tip:'Beleefd "ja" — letterlijk "oog"'},
        {hz:'نوش جانت',tr:'nosh jaanat',nl:'Smakelijk / Geniet ervan',tip:''},
        {hz:'سر به سرم نذار',tr:'sar ba saram nazaar',nl:'Doe niet moeilijk',tip:''},
        {hz:'دلم می‌خواد',tr:'delam mekhad',nl:'Ik verlang ernaar',tip:''},
        {hz:'مهمان حبیب خداست',tr:'mehman habiib khodaast',nl:'Een gast is de geliefde van God',tip:''},
        {hz:'صبر تلخ است ولی میوه‌اش شیرین',tr:'sabr talkh ast wali mewash shirin',nl:'Geduld is bitter maar de vrucht is zoet',tip:''},
      ],
      sentences:[
        {hz:'دل به دل راه داره، به تو فکر می‌کردم',tr:'del ba del raah daara, ba to fekr me-kardam',nl:'Harten vinden een weg — ik dacht net aan jou'},
        {hz:'چشم، هر کاری بگی می‌کنم',tr:'chashm, har kaari begi mekonam',nl:'Ja met plezier, wat je ook zegt zal ik doen'},
        {hz:'صبر کو، همه چیز خوش می‌شه',tr:'sabr ko, hama chiz khosh meshe',nl:'Wees geduldig, alles wordt goed'},
      ]
    },

    { id:'hazara_identity', title:'Hazara identiteit', sub:'Geschiedenis, taal, trots...', icon:'🏔️', xp:70,
      pronTips:['خ','غ','ع','ق','ر'],
      grammar:'De Hazara zijn een volk met Mongoolse, Turkse en Perzische wortels.',
      words:[
        {hz:'هزاره',tr:'hazaara',nl:'Hazara (volk)',tip:''},
        {hz:'هزاراجات',tr:'hazaarajaat',nl:'Hazarajat (land van de Hazara)',tip:''},
        {hz:'بامیان',tr:'baamiaan',nl:'Bamiyan',tip:'Hoofdstad Hazarajat'},
        {hz:'زبان مادری',tr:'zabaan maadari',nl:'Moedertaal',tip:''},
        {hz:'فرهنگ',tr:'farhang',nl:'Cultuur',tip:''},
        {hz:'تاریخ',tr:'taareekh',nl:'Geschiedenis',tip:''},
        {hz:'مقاومت',tr:'moqaawamat',nl:'Verzet / Weerstand',tip:''},
        {hz:'افتخار',tr:'eftekhar',nl:'Trots',tip:''},
        {hz:'وحدت',tr:'wahdat',nl:'Eenheid',tip:''},
        {hz:'آزادی',tr:'aazaadi',nl:'Vrijheid',tip:''},
      ],
      sentences:[
        {hz:'زبان مادریم هزارگی اَس',tr:'zabaan maadaram hazaaragi as',nl:'Mijn moedertaal is Hazaragi'},
        {hz:'به فرهنگم افتخار می‌کنم',tr:'ba farhangam eftekhar me-konam',nl:'Ik ben trots op mijn cultuur'},
        {hz:'هزاراجات قلب افغانستان اَس',tr:'hazaarajaat qalb afghaaanistaan as',nl:'Hazarajat is het hart van Afghanistan'},
      ]
    },
  ]},

  { id:'ch11', label:'🌆 Hoofdstuk 11 · Stad & Vervoer', color:'#5BB8FF', lessons:[

    { id:'transport', title:'Vervoer', sub:'Bus, taxi, motor, fiets...', icon:'🚌', xp:40,
      pronTips:['ر'],
      grammar:'"موتر" (motar) = auto in Hazaragi/Dari — Iraans Farsi zegt "ماشین". Let op dit verschil!',
      words:[
        {hz:'موتر',tr:'motar',nl:'Auto',tip:'Hazaragi/Dari — Farsi zegt "ماشین"'},
        {hz:'بس',tr:'bas',nl:'Bus',tip:''},
        {hz:'تکسی',tr:'taksi',nl:'Taxi',tip:''},
        {hz:'موترسایکل',tr:'motarsaaykl',nl:'Motorfiets',tip:''},
        {hz:'بایسیکل',tr:'baaysikal',nl:'Fiets',tip:''},
        {hz:'ریکشا',tr:'riksha',nl:'Riksja / Driewieler',tip:'Veelgebruikt vervoer in Afghanistan'},
        {hz:'ایستگاه',tr:'istegaah',nl:'Halte / Station',tip:''},
        {hz:'رانندگی',tr:'raanandagi',nl:'Rijden / Autorijden',tip:''},
        {hz:'ترافیک',tr:'trafik',nl:'Verkeer',tip:''},
        {hz:'پرواز',tr:'parwaaz',nl:'Vlucht',tip:'"پرواز" = ook vluchten (vogel)'},
      ],
      sentences:[
        {hz:'بس کجاست؟ ایستگاه نزدیک اَس؟',tr:'bas kojaast? istegaah nazdik as?',nl:'Waar is de bus? Is de halte dichtbij?'},
        {hz:'تکسی بگیر، ترافیک خیلی زیاد اَس',tr:'taksi begir, trafik khaili ziyaad as',nl:'Neem een taxi, het verkeer is heel druk'},
        {hz:'موترم خراب شد',tr:'motaram khraab shod',nl:'Mijn auto is kapot gegaan'},
      ]
    },

    { id:'city_places', title:'In de stad', sub:'Bank, ziekenhuis, winkel...', icon:'🏙️', xp:40,
      pronTips:['خ','ق'],
      grammar:'"شفاخانه" (shafaakhaana) = ziekenhuis in Hazaragi/Dari — Farsi zegt "بیمارستان". Totaal anders!',
      words:[
        {hz:'شفاخانه',tr:'shafaakhaana',nl:'Ziekenhuis',tip:'Hazaragi/Dari — Farsi "بیمارستان"'},
        {hz:'بانک',tr:'baank',nl:'Bank',tip:''},
        {hz:'دوکان',tr:'dokaan',nl:'Winkel',tip:''},
        {hz:'مارکیت',tr:'maarkit',nl:'Winkelcentrum / Markt',tip:''},
        {hz:'پارک',tr:'paark',nl:'Park',tip:''},
        {hz:'مسجد',tr:'masjed',nl:'Moskee',tip:''},
        {hz:'رستورانت',tr:'restoraat',nl:'Restaurant',tip:''},
        {hz:'پوست خانه',tr:'post khaana',nl:'Postkantoor',tip:'"پوست" = post (leenwoord)'},
        {hz:'کوچه',tr:'kocha',nl:'Steeg / Straat',tip:'Kleine straat of steeg'},
        {hz:'سرک',tr:'sarak',nl:'Weg / Straat',tip:'Hazaragi/Dari — Farsi "خیابان"'},
      ],
      sentences:[
        {hz:'شفاخانه کجاست؟ مریض هستم',tr:'shafaakhaana kojaast? mariz hastam',nl:'Waar is het ziekenhuis? Ik ben ziek'},
        {hz:'دَ بانک باید بروم',tr:'da baank baayad beram',nl:'Ik moet naar de bank'},
        {hz:'این سرک خیلی شلوغ اَس',tr:'ain sarak khaili shaloogh as',nl:'Deze straat is heel druk'},
      ]
    },

    { id:'city_life', title:'Stadsleven', sub:'Buren, flat, lift...', icon:'🏢', xp:35,
      pronTips:['خ'],
      grammar:'Afghaanse steden groeien snel — veel nieuwe woorden zijn directe leenwoorden uit het Engels.',
      words:[
        {hz:'آپارتمان',tr:'aapaartemaan',nl:'Appartement',tip:''},
        {hz:'همسایه',tr:'hamsaaya',nl:'Buur',tip:''},
        {hz:'لفت',tr:'left',nl:'Lift',tip:'Leenwoord van "lift"'},
        {hz:'پله',tr:'pala',nl:'Trap',tip:''},
        {hz:'محله',tr:'mahalla',nl:'Buurt / Wijk',tip:''},
        {hz:'شهر',tr:'shahr',nl:'Stad',tip:''},
        {hz:'ده',tr:'deh',nl:'Dorp',tip:''},
        {hz:'آدرس',tr:'aadres',nl:'Adres',tip:''},
        {hz:'پل',tr:'pol',nl:'Brug',tip:''},
      ],
      sentences:[
        {hz:'آپارتمانم دَ طبقه سوم اَس',tr:'aapaartemaanam da tabqa sowm as',nl:'Mijn appartement is op de derde verdieping'},
        {hz:'همسایمو خیلی خوب هستن',tr:'hamsaayamo khaili khob hastan',nl:'Onze buren zijn heel goed'},
        {hz:'شهر امشب خیلی قشنگ اَس',tr:'shahr emshab khaili qashanq as',nl:'De stad is vanavond heel mooi'},
      ]
    },
  ]},

  { id:'ch12', label:'💻 Hoofdstuk 12 · Technologie & Media', color:'#3DD6A3', lessons:[

    { id:'tech_devices', title:'Apparaten & Internet', sub:'Computer, internet, oplader...', icon:'💻', xp:40,
      pronTips:['خ'],
      grammar:'Moderne Hazaragi neemt veel Engelse technologiewoorden over als directe leenwoorden.',
      words:[
        {hz:'کمپیوتر',tr:'kampyutar',nl:'Computer',tip:'Hazaragi: "kampyutar" — directe uitspraak'},
        {hz:'انترنت',tr:'entarnet',nl:'Internet',tip:'Hazaragi uitspraak: "entarnet"'},
        {hz:'شارژر',tr:'shaarjar',nl:'Oplader',tip:'Van "charger"'},
        {hz:'بیتری',tr:'beetri',nl:'Batterij / Accu',tip:'Van "battery"'},
        {hz:'وای‌فای',tr:'waay-faay',nl:'Wifi',tip:''},
        {hz:'پسورد',tr:'paswerd',nl:'Wachtwoord',tip:'Van "password"'},
        {hz:'سکرین',tr:'skrin',nl:'Scherm',tip:'Van "screen"'},
        {hz:'دانلود کردن',tr:'daanlod kardan',nl:'Downloaden',tip:''},
        {hz:'آپلود کردن',tr:'aaplod kardan',nl:'Uploaden',tip:''},
      ],
      sentences:[
        {hz:'وای‌فای پسوردش چیست؟',tr:'waay-faay paswerdash chist?',nl:'Wat is het wifi-wachtwoord?'},
        {hz:'کمپیوترم خراب شد، کمک کو',tr:'kampyutaram khraab shod, kamak ko',nl:'Mijn computer is stuk gegaan, help me'},
        {hz:'بیتریم تموم شد، شارژر داری؟',tr:'beetrim tamom shod, shaarjar daari?',nl:'Mijn batterij is leeg, heb je een oplader?'},
      ]
    },

    { id:'social_media', title:'Sociale media', sub:'Sturen, liken, delen...', icon:'📲', xp:35,
      pronTips:['خ'],
      grammar:'"پیام دادن" (payaam daadan) = een bericht sturen. In Hazaragi/Dari is dit de standaard uitdrukking.',
      words:[
        {hz:'پیام',tr:'payaam',nl:'Bericht',tip:''},
        {hz:'عکس',tr:'aks',nl:'Foto',tip:''},
        {hz:'ویدیو',tr:'widyo',nl:'Video',tip:''},
        {hz:'لایک کردن',tr:'layk kardan',nl:'Liken',tip:''},
        {hz:'شیر کردن',tr:'sher kardan',nl:'Delen / Sharen',tip:'Van "share"'},
        {hz:'فالو کردن',tr:'faalo kardan',nl:'Volgen',tip:'Van "follow"'},
        {hz:'گروپ',tr:'grop',nl:'Groep',tip:'WhatsApp groep'},
        {hz:'پست',tr:'post',nl:'Post / Bericht',tip:'Social media post'},
        {hz:'کامنت',tr:'kaamant',nl:'Reactie / Comment',tip:''},
        {hz:'استوری',tr:'estori',nl:'Story',tip:'Instagram/WhatsApp story'},
      ],
      sentences:[
        {hz:'عکست قشنگ اَس، لایک کردم',tr:'aksat qashanq as, layk kardam',nl:'Jouw foto is mooi, ik heb geliket'},
        {hz:'پیام بده وختی رسیدی',tr:'payaam bede wakhti rasidi',nl:'Stuur een bericht als je bent aangekomen'},
        {hz:'این ویدیو را شیر کو',tr:'ain widyo ra sher ko',nl:'Deel deze video'},
      ]
    },

    { id:'news_media', title:'Nieuws & Actualiteit', sub:'Nieuws, oorlog, politiek...', icon:'📰', xp:45,
      pronTips:['خ','ع','غ'],
      grammar:'"خبر" (khabar) = nieuws/bericht. "خبر داری؟" = weet je het al? (informeel)',
      words:[
        {hz:'خبر',tr:'khabar',nl:'Nieuws / Bericht',tip:'"خبر داری؟" = weet je het al?'},
        {hz:'رادیو',tr:'raadyo',nl:'Radio',tip:''},
        {hz:'تلویزیون',tr:'telwizyon',nl:'Televisie',tip:''},
        {hz:'روزنامه',tr:'roznama',nl:'Krant',tip:'"روز" = dag, "نامه" = brief/letter'},
        {hz:'سیاست',tr:'siyaasat',nl:'Politiek',tip:''},
        {hz:'صلح',tr:'solh',nl:'Vrede',tip:''},
        {hz:'جنگ',tr:'jang',nl:'Oorlog',tip:''},
        {hz:'حق',tr:'haq',nl:'Recht / Waarheid',tip:'"حق داری" = je hebt gelijk'},
        {hz:'آزادی',tr:'aazaadi',nl:'Vrijheid',tip:''},
        {hz:'انتخابات',tr:'entekhaabaat',nl:'Verkiezingen',tip:''},
      ],
      sentences:[
        {hz:'خبرهای امروز چیست؟',tr:'khabarhaaye emroz chist?',nl:'Wat is het nieuws van vandaag?'},
        {hz:'ایشالله صلح می‌آید',tr:'ishaallah solh me-aayd',nl:'Inshallah komt de vrede'},
        {hz:'حق آزادی برای همه اَس',tr:'haq aazaadi baraayi hama as',nl:'Het recht op vrijheid is voor iedereen'},
      ]
    },
  ]},

  { id:'ch13', label:'🌍 Hoofdstuk 13 · Diaspora & Gemeenschap', color:'#FF8C61', lessons:[

    { id:'diaspora', title:'Leven in het buitenland', sub:'Vaderland, heimwee, integratie...', icon:'✈️', xp:50,
      pronTips:['غ','ع'],
      grammar:'"غربت" (ghorbat) = het gevoel ver van huis te zijn. Een diepgevoeld woord in de Hazara gemeenschap.',
      words:[
        {hz:'وطن',tr:'watan',nl:'Vaderland / Thuisland',tip:'Diep emotioneel woord'},
        {hz:'غربت',tr:'ghorbat',nl:'Ballingschap / Ver van huis',tip:'Veelgebruikt in Hazara poëzie'},
        {hz:'دلتنگ وطن',tr:'deltang-e watan',nl:'Heimwee naar het thuisland',tip:'Samengesteld: "دل" + "تنگ" + "وطن"'},
        {hz:'مهاجر',tr:'mohaajir',nl:'Migrant',tip:''},
        {hz:'پناهنده',tr:'panaahanda',nl:'Vluchteling',tip:''},
        {hz:'اقامت',tr:'eqaamat',nl:'Verblijfsvergunning',tip:''},
        {hz:'ویزه',tr:'wiza',nl:'Visum',tip:''},
        {hz:'سفارت',tr:'sefaarat',nl:'Ambassade',tip:''},
        {hz:'تابعیت',tr:'taabi\'iyat',nl:'Nationaliteit',tip:''},
      ],
      sentences:[
        {hz:'دَ غربت هستم اما دلم دَ وطن اَس',tr:'da ghorbat hastam ama delam da watan as',nl:'Ik ben in het buitenland maar mijn hart is thuis'},
        {hz:'دلتنگ وطنم، دلتنگ خانواده‌ام',tr:'deltang-e watanam, deltang-e khaanwadaam',nl:'Ik heb heimwee naar mijn land, naar mijn familie'},
        {hz:'اقامتم تمدید شد، الحمدلله',tr:'eqaamatam tamdid shod, alhamdolillah',nl:'Mijn verblijfsvergunning is verlengd, alhamdulillah'},
      ]
    },

    { id:'community', title:'Gemeenschap & Solidariteit', sub:'Hulp, samenwerken, eenheid...', icon:'🤝', xp:45,
      pronTips:['ع','خ'],
      grammar:'Hazara gemeenschap: "همبستگی" (hambastagi = solidariteit) is een kernwaarde.',
      words:[
        {hz:'همبستگی',tr:'hambastagi',nl:'Solidariteit',tip:'Kernwaarde Hazara gemeenschap'},
        {hz:'کمک',tr:'kamak',nl:'Hulp',tip:'"کمک کردن" = helpen'},
        {hz:'همکاری',tr:'hamkaari',nl:'Samenwerking',tip:''},
        {hz:'جامعه',tr:'jaama\'a',nl:'Gemeenschap',tip:''},
        {hz:'فامیل',tr:'faamil',nl:'Familie (groot)',tip:'Hele familiekring — breder dan "خانواده"'},
        {hz:'رهبر',tr:'rahbar',nl:'Leider',tip:''},
        {hz:'مسئولیت',tr:'mas\'ooliyat',nl:'Verantwoordelijkheid',tip:''},
        {hz:'احترام',tr:'ehtaraam',nl:'Respect',tip:'"احترام کردن" = respecteren'},
        {hz:'اعتماد',tr:'e\'temaad',nl:'Vertrouwen',tip:''},
      ],
      sentences:[
        {hz:'مو باید به هم کمک کنیم',tr:'mo baayad ba ham kamak konim',nl:'Wij moeten elkaar helpen'},
        {hz:'همبستگی ما قوی‌تر اَس از هر چیز',tr:'hambastagi maa qawitaar as az har chiz',nl:'Onze solidariteit is sterker dan alles'},
        {hz:'احترام به بزرگان واجب اَس',tr:'ehtaraam ba bozorgaan waajeb as',nl:'Respect voor ouderen is verplicht'},
      ]
    },

    { id:'identity', title:'Taal & Identiteit', sub:'Wie ben ik, mijn taal, mijn roots...', icon:'🏔️', xp:55,
      pronTips:['خ','غ','ع'],
      grammar:'"زبان مادری" = moedertaal. Voor de Hazara is Hazaragi de taal van het hart, identiteit en trots.',
      words:[
        {hz:'هویت',tr:'howiyat',nl:'Identiteit',tip:''},
        {hz:'ریشه',tr:'risha',nl:'Wortel / Afkomst',tip:'"ریشه داشتن" = geworteld zijn'},
        {hz:'زبان مادری',tr:'zabaan maadari',nl:'Moedertaal',tip:''},
        {hz:'فرهنگ',tr:'farhang',nl:'Cultuur',tip:''},
        {hz:'نسل',tr:'nasl',nl:'Generatie',tip:''},
        {hz:'میراث',tr:'miraas',nl:'Erfenis / Nalatenschap',tip:''},
        {hz:'افتخار',tr:'eftekhar',nl:'Trots',tip:'"افتخار می‌کنم" = ik ben trots'},
        {hz:'حافظه',tr:'haafeza',nl:'Geheugen / Herinneringen',tip:''},
        {hz:'آینده',tr:'aayanda',nl:'Toekomst',tip:''},
      ],
      sentences:[
        {hz:'من هزاره هستم و افتخار می‌کنم',tr:'man hazaara hastam wa eftekhar me-konam',nl:'Ik ben Hazara en ik ben er trots op'},
        {hz:'زبان مادریم را فراموش نمی‌کنم',tr:'zabaan maadaram ra faraamoosh nemi-konam',nl:'Ik vergeet mijn moedertaal niet'},
        {hz:'ریشه‌هامو قوی اَس، هر کجا باشم',tr:'rishahaamo qaawi as, har koja baasham',nl:'Mijn wortels zijn sterk, waar ik ook ben'},
      ]
    },
  ]},

  { id:'ch14', label:'🌐 Hoofdstuk 14 · Landen & Nationaliteiten', color:'#5BB8FF', lessons:[

    { id:'countries', title:'Landen', sub:'Afghanistan, Iran, Europa...', icon:'🗺️', xp:40,
      pronTips:['خ'],
      grammar:'"کشور" (keshwar) = land/staat. "افغانستان" spreek je Hazaragi uit als "afghaaanestaan".',
      words:[
        {hz:'کشور',tr:'keshwar',nl:'Land / Staat',tip:''},
        {hz:'افغانستان',tr:'afghaaanestaan',nl:'Afghanistan',tip:''},
        {hz:'ایران',tr:'iraan',nl:'Iran',tip:'Lange aa'},
        {hz:'پاکستان',tr:'paakestaan',nl:'Pakistan',tip:''},
        {hz:'هالند',tr:'haaland',nl:'Nederland',tip:''},
        {hz:'آلمان',tr:'aalemaan',nl:'Duitsland',tip:''},
        {hz:'انگلستان',tr:'engelestaan',nl:'Engeland',tip:''},
        {hz:'آمریکا',tr:'amriikaa',nl:'Amerika',tip:''},
        {hz:'اروپا',tr:'oropaa',nl:'Europa',tip:''},
        {hz:'ترکیه',tr:'torkiya',nl:'Turkije',tip:''},
        {hz:'فرانسه',tr:'farraansa',nl:'Frankrijk',tip:''},
        {hz:'آسترالیا',tr:'oostraaliya',nl:'Australië',tip:''},
      ],
      sentences:[
        {hz:'من دَ هالند زندگی می‌کنم',tr:'man da haaland zendagi me-konam',nl:'Ik woon in Nederland'},
        {hz:'وطنم افغانستان اَس',tr:'watanam afghaaanestaan as',nl:'Mijn vaderland is Afghanistan'},
        {hz:'دَ کدام کشور هستی؟',tr:'da kodaam keshwar hasti?',nl:'In welk land ben jij?'},
      ]
    },

    { id:'nationalities', title:'Nationaliteiten', sub:'Afghaans, Nederlands, Iraans...', icon:'🏳️', xp:35,
      pronTips:['خ'],
      grammar:'Nationaliteit: naam van land + "-ی" = "-i". افغان + ی = افغانی. Simpel patroon!',
      words:[
        {hz:'افغان',tr:'afghaan',nl:'Afghaan',tip:''},
        {hz:'افغانی',tr:'afghaani',nl:'Afghaans / Afghaan (bijv.nw.)',tip:'"},افغان" + "-ی"'},
        {hz:'هزاره',tr:'hazaara',nl:'Hazara',tip:''},
        {hz:'ایرانی',tr:'iraani',nl:'Iranees',tip:'Lange aa'},
        {hz:'پاکستانی',tr:'paakistaani',nl:'Pakistaans',tip:''},
        {hz:'هالندی',tr:'haalandii',nl:'Nederlands',tip:''},
        {hz:'آلمانی',tr:'aalmaaní',nl:'Duits',tip:''},
        {hz:'عربی',tr:'arabi',nl:'Arabisch',tip:''},
        {hz:'ملیت',tr:'milliyat',nl:'Nationaliteit',tip:''},
        {hz:'اصالت',tr:'asaalat',nl:'Afkomst / Herkomst',tip:''},
      ],
      sentences:[
        {hz:'من افغانی هستم، اصالتم هزاره',tr:'man afghaani hastam, asaalatam hazaara',nl:'Ik ben Afghaans, mijn afkomst is Hazara'},
        {hz:'ملیتم هالندی اَس',tr:'milliyatam haalandii as',nl:'Mijn nationaliteit is Nederlands'},
        {hz:'هزاره بودن افتخار اَس',tr:'hazaara boodan eftekhar as',nl:'Hazara zijn is een eer'},
      ]
    },

    { id:'languages', title:'Talen', sub:'Hazaragi, Dari, Duits...', icon:'💬', xp:35,
      pronTips:['خ'],
      grammar:'"زبان" (zabaan) = taal. "هزارگی" is de naam van onze taal — niet "هزاراگی".',
      words:[
        {hz:'زبان',tr:'zabaan',nl:'Taal',tip:'Lange aa'},
        {hz:'هزارگی',tr:'hazaaragi',nl:'Hazaragi',tip:'Jouw moedertaal!'},
        {hz:'دری',tr:'dari',nl:'Dari',tip:'Officiële taal Afghanistan'},
        {hz:'پشتو',tr:'pashto',nl:'Pashto',tip:''},
        {hz:'فارسی',tr:'faarsi',nl:'Farsi / Perzisch',tip:''},
        {hz:'عربی',tr:'arabi',nl:'Arabisch',tip:''},
        {hz:'انگلیسی',tr:'engelisi',nl:'Engels',tip:''},
        {hz:'هالندی',tr:'haalandii',nl:'Nederlands',tip:''},
        {hz:'ترجمه',tr:'tarjoma',nl:'Vertaling',tip:''},
        {hz:'مترجم',tr:'motarjem',nl:'Tolk / Vertaler',tip:''},
      ],
      sentences:[
        {hz:'چند زبان می‌دانی؟',tr:'chand zabaan medaani?',nl:'Hoeveel talen ken jij?'},
        {hz:'هزارگی زبان مادریم اَس',tr:'hazaaragi zabaan maadaram as',nl:'Hazaragi is mijn moedertaal'},
        {hz:'انگلیسی یاد می‌گیرم',tr:'engelisi yaad me-giram',nl:'Ik leer Engels'},
      ]
    },
  ]},

  { id:'ch15', label:'💼 Hoofdstuk 15 · Beroepen & Ambities', color:'#FF8C61', lessons:[

    { id:'professions', title:'Beroepen', sub:'Dokter, leraar, ingenieur...', icon:'👨‍💼', xp:45,
      pronTips:['ع','خ'],
      grammar:'"کار می‌کنم" = ik werk. Beroep + "هستم" = ik ben [beroep]. "دکتر هستم" = ik ben dokter.',
      words:[
        {hz:'دکتر',tr:'doktor',nl:'Dokter',tip:''},
        {hz:'معلم',tr:'mo\'alem',nl:'Leraar',tip:'"ع" = zachte keel-stop'},
        {hz:'مهندس',tr:'mohandes',nl:'Ingenieur',tip:''},
        {hz:'قاضی',tr:'qaazi',nl:'Rechter',tip:'"ق" = diepe keel-k'},
        {hz:'پولیس',tr:'polis',nl:'Politie / Agent',tip:'Hazaragi/Dari — Farsi "پلیس"'},
        {hz:'آشپز',tr:'aashpaz',nl:'Kok',tip:'"آشپزی" = koken'},
        {hz:'راننده',tr:'raananda',nl:'Chauffeur / Bestuurder',tip:''},
        {hz:'کارگر',tr:'kaarghar',nl:'Arbeider / Werker',tip:''},
        {hz:'خواننده',tr:'khwaananda',nl:'Zanger',tip:'"خواندن" = zingen/lezen'},
        {hz:'نقاش',tr:'naqqaash',nl:'Schilder / Kunstenaar',tip:''},
        {hz:'دهقان',tr:'dehqaan',nl:'Boer',tip:'Traditioneel Hazara beroep'},
      ],
      sentences:[
        {hz:'دکتر هستم، دَ شفاخانه کار می‌کنم',tr:'doktor hastam, da shafaakhaana kaar me-konam',nl:'Ik ben dokter, ik werk in het ziekenhuis'},
        {hz:'آرزومه معلم بشم',tr:'aarozomam mo\'alem besham',nl:'Mijn droom is om leraar te worden'},
        {hz:'باواکلانم دهقان بود',tr:'baawakalanam dehqaan bood',nl:'Mijn opa was boer'},
      ]
    },

    { id:'dreams_ambitions', title:'Dromen & Ambities', sub:'Willen worden, hopen, plannen...', icon:'🌟', xp:50,
      pronTips:['خ','آ'],
      grammar:'"آرزو" (aarozo) = droom/wens. "می‌خوام بشم" = ik wil worden. Toekomst: "می‌خوام" + infinitief.',
      words:[
        {hz:'آرزو',tr:'aarozo',nl:'Droom / Wens',tip:'Mooier dan "خواب" — meer als een levenswens'},
        {hz:'هدف',tr:'hadaf',nl:'Doel',tip:''},
        {hz:'امید',tr:'omid',nl:'Hoop',tip:''},
        {hz:'موفق',tr:'mowafaq',nl:'Succesvol',tip:''},
        {hz:'مشهور',tr:'mashhoor',nl:'Beroemd',tip:''},
        {hz:'ثروتمند',tr:'sarwatmand',nl:'Rijk',tip:''},
        {hz:'می‌خوام بشم',tr:'me-khaam besham',nl:'Ik wil worden',tip:'Vaste uitdrukking voor ambities'},
        {hz:'تلاش',tr:'talash',nl:'Inspanning / Moeite',tip:'"تلاش کردن" = hard werken'},
        {hz:'پیشرفت',tr:'pisharaft',nl:'Vooruitgang / Succes',tip:''},
        {hz:'رویا',tr:'roya',nl:'Droom (poëtisch)',tip:'Van "رؤیا" — mooie dromen'},
      ],
      sentences:[
        {hz:'آرزومه دکتر بشم و مردم را کمک کنم',tr:'aarozomam doktor besham wa mardom ra kamak konam',nl:'Mijn droom is dokter te worden en mensen te helpen'},
        {hz:'امید خودتو از دست نده',tr:'omid khodata az dast nada',nl:'Verlies je hoop niet'},
        {hz:'با تلاش همه چیز ممکن اَس',tr:'baa talash hama chiz momken as',nl:'Met inspanning is alles mogelijk'},
      ]
    },

    { id:'money_finance', title:'Geld & Financiën', sub:'Loon, sparen, betalen...', icon:'💰', xp:40,
      pronTips:['خ'],
      grammar:'"معاش" (ma\'aash) = salaris in Hazaragi/Dari. Farsi zegt "حقوق" (hoqooq). Let op dit verschil!',
      words:[
        {hz:'پول',tr:'pool',nl:'Geld',tip:'Lange oo'},
        {hz:'معاش',tr:'ma\'aash',nl:'Salaris / Loon',tip:'Hazaragi/Dari — Farsi "حقوق"'},
        {hz:'پس‌انداز',tr:'pasandaaz',nl:'Spaargeld',tip:'"پس‌انداز کردن" = sparen'},
        {hz:'قرض',tr:'qarz',nl:'Schuld / Lening',tip:'"قرض دادن" = uitlenen'},
        {hz:'سود',tr:'sood',nl:'Winst / Rente',tip:''},
        {hz:'ضرر',tr:'zarar',nl:'Verlies',tip:''},
        {hz:'حساب',tr:'hesaab',nl:'Rekening / Berekening',tip:''},
        {hz:'بیمه',tr:'bima',nl:'Verzekering',tip:''},
        {hz:'مالیه',tr:'maaliya',nl:'Belasting',tip:'Hazaragi/Dari — Farsi "مالیات"'},
        {hz:'سرمایه',tr:'sarmaaaya',nl:'Kapitaal / Investering',tip:''},
      ],
      sentences:[
        {hz:'معاشم کم اَس، می‌خوام بیشتر کار کنم',tr:'ma\'aasham kam as, me-khaam bishtar kaar konam',nl:'Mijn salaris is laag, ik wil meer werken'},
        {hz:'پول پس‌انداز کو، آینده مهم اَس',tr:'pool pasandaaz ko, aayanda mohim as',nl:'Spaar geld, de toekomst is belangrijk'},
        {hz:'حسابم را بررسی کردم',tr:'hesaabam ra barrasi kardam',nl:'Ik heb mijn rekening gecontroleerd'},
      ]
    },
  ]},

  { id:'ch16', label:'🌿 Hoofdstuk 16 · Natuur & Seizoenen', color:'#3DD6A3', lessons:[
    { id:'nature_seasons', title:'Seizoenen', icon:'🌸', xp:18, words:[
        {hz:'بهار',tr:'bahaar',nl:'Lente',tip:''},
        {hz:'تابستان',tr:'taabestaan',nl:'Zomer',tip:''},
        {hz:'خزان',tr:'khazaan',nl:'Herfst',tip:''},
        {hz:'زمستان',tr:'zemestaan',nl:'Winter',tip:''},
        {hz:'باران',tr:'baaraan',nl:'Regen',tip:''},
        {hz:'برف',tr:'barf',nl:'Sneeuw',tip:''},
        {hz:'آفتاب',tr:'aaftaab',nl:'Zon',tip:''},
        {hz:'هوا',tr:'hawaa',nl:'Weer / Lucht',tip:''},
      ],
      sentences:[
        {hz:'بهار آمد، گلا شگفت',tr:'bahaar aamad, golaa shegoft',nl:'De lente is gekomen, de bloemen zijn gebloeid'},
        {hz:'زمستان سرد اَس، برف می‌باره',tr:'zemestaan sard as, barf me-baara',nl:'De winter is koud, het sneeuwt'},
      ]
    },
    { id:'nature_land', title:'Natuur & Landschap', icon:'🏔️', xp:18, words:[
        {hz:'کوه',tr:'kooh',nl:'Berg',tip:'Lange oo'},
        {hz:'دریا',tr:'daryaa',nl:'Rivier / Zee',tip:''},
        {hz:'دشت',tr:'dasht',nl:'Steppe / Vlakte',tip:'Typisch Hazara landschap'},
        {hz:'درخت',tr:'darakht',nl:'Boom',tip:''},
        {hz:'گل',tr:'gol',nl:'Bloem',tip:''},
        {hz:'آب',tr:'aab',nl:'Water',tip:'Lange aa'},
        {hz:'زمین',tr:'zameen',nl:'Aarde / Grond',tip:''},
        {hz:'آسمان',tr:'aasmaan',nl:'Hemel / Lucht',tip:''},
      ],
      sentences:[
        {hz:'کوه‌های هزارستان بلند اَن',tr:'koohaaay hazaaristaan boland an',nl:'De bergen van Hazarastan zijn hoog'},
        {hz:'آب صاف دریا خوشگل اَس',tr:'aab saaf daryaa khoshgal as',nl:'Het heldere water van de rivier is mooi'},
      ]
    },
    { id:'nature_animals', title:'Dieren', icon:'🐾', xp:18, words:[
        {hz:'اسپ',tr:'asp',nl:'Paard',tip:'Hazaragi — Dari "اسب"'},
        {hz:'گاو',tr:'gaaw',nl:'Koe',tip:'Lange aa'},
        {hz:'سگ',tr:'sag',nl:'Hond',tip:''},
        {hz:'پشک',tr:'pishak',nl:'Kat',tip:''},
        {hz:'مرغ',tr:'morgh',nl:'Kip',tip:''},
        {hz:'ماهی',tr:'maahee',nl:'Vis',tip:''},
        {hz:'پرنده',tr:'paranda',nl:'Vogel',tip:''},
        {hz:'خرگوش',tr:'khargoosh',nl:'Konijn',tip:''},
      ],
      sentences:[
        {hz:'اسپ پهلوان حیوانِ مهم اَس',tr:'asp pahlawaane hayawaane mohim as',nl:'Het paard is een belangrijk dier voor de Hazara'},
        {hz:'پشکم شیر می‌خوره',tr:'pishakam sheer me-khora',nl:'Mijn kat drinkt melk'},
      ]
    },
  ]},

  { id:'ch17', label:'💊 Hoofdstuk 17 · Gezondheid & Lichaam', color:'#FF6B9D', lessons:[
    { id:'health_body', title:'Lichaamsdelen', icon:'🫀', xp:18, words:[
        {hz:'سر',tr:'sar',nl:'Hoofd',tip:''},
        {hz:'دست',tr:'dast',nl:'Hand / Arm',tip:''},
        {hz:'پا',tr:'paa',nl:'Voet / Been',tip:'Lange aa'},
        {hz:'چشم',tr:'chashm',nl:'Oog',tip:''},
        {hz:'گوش',tr:'gosh',nl:'Oor',tip:''},
        {hz:'دهن',tr:'dahan',nl:'Mond',tip:''},
        {hz:'بینی',tr:'beenee',nl:'Neus',tip:''},
        {hz:'قلب',tr:'qalb',nl:'Hart',tip:''},
      ],
      sentences:[
        {hz:'سرم درد می‌کنه',tr:'saram dard me-kona',nl:'Mijn hoofd doet pijn'},
        {hz:'چشمام خسته اَن',tr:'chashmaame khasta an',nl:'Mijn ogen zijn moe'},
      ]
    },
    { id:'health_illness', title:'Ziekte & Genezing', icon:'🏥', xp:18, words:[
        {hz:'مریض',tr:'mareez',nl:'Ziek / Patiënt',tip:''},
        {hz:'درد',tr:'dard',nl:'Pijn',tip:''},
        {hz:'تب',tr:'tab',nl:'Koorts',tip:''},
        {hz:'دوا',tr:'dawaa',nl:'Medicijn',tip:''},
        {hz:'داکتر',tr:'daaktar',nl:'Dokter',tip:'Hazaragi/Dari'},
        {hz:'شفاخانه',tr:'shafaakhaana',nl:'Ziekenhuis',tip:'"شفا" = genezing'},
        {hz:'صحی',tr:'sehhee',nl:'Gezond',tip:''},
        {hz:'آرام',tr:'aaraam',nl:'Rust / Rustig',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'مریض استم، به داکتر می‌رم',tr:'mareez astam, ba daaktar me-ram',nl:'Ik ben ziek, ik ga naar de dokter'},
        {hz:'دوا خوردم، حالا بهترم',tr:'dawaa khordam, haala bahtaram',nl:'Ik heb medicijn genomen, nu ben ik beter'},
      ]
    },
    { id:'health_habits', title:'Gezonde Gewoonten', icon:'🧘', xp:18, words:[
        {hz:'خواب',tr:'khaab',nl:'Slaap',tip:'Lange aa'},
        {hz:'ورزش',tr:'warzesh',nl:'Sport / Oefenen',tip:''},
        {hz:'خوراک',tr:'khoraak',nl:'Voedsel / Maaltijd',tip:''},
        {hz:'نوشیدن',tr:'noosheedan',nl:'Drinken',tip:''},
        {hz:'استراحت',tr:'estaahaat',nl:'Ontspanning',tip:''},
        {hz:'قوت',tr:'qowwat',nl:'Kracht / Energie',tip:''},
        {hz:'صبر',tr:'sabr',nl:'Geduld',tip:''},
        {hz:'پاک',tr:'paak',nl:'Schoon / Rein',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'هشت ساعت خواب مهم اَس',tr:'hasht saa\'at khaab mohim as',nl:'Acht uur slaap is belangrijk'},
        {hz:'روزانه ورزش کو، صحی می‌مانی',tr:'rozaana warzesh ko, sehhee me-maani',nl:'Sport dagelijks, dan blijf je gezond'},
      ]
    },
  ]},

  { id:'ch18', label:'🎭 Hoofdstuk 18 · Cultuur & Tradities', color:'#FFBE3D', lessons:[
    { id:'culture_celebrations', title:'Feesten & Tradities', icon:'🎉', xp:20, words:[
        {hz:'نوروز',tr:'nawrooz',nl:'Nieuwjaar (Perzisch)',tip:'Letterlijk "nieuwe dag" — begin lente'},
        {hz:'عید',tr:'eed',nl:'Feestdag / Eid',tip:'Islamitisch feest'},
        {hz:'جشن',tr:'jashn',nl:'Viering / Feest',tip:''},
        {hz:'مهمانی',tr:'mehmaanee',nl:'Bezoek / Bijeenkomst',tip:''},
        {hz:'سور',tr:'soor',nl:'Bruiloft / Feestmaal',tip:'Typisch Hazaragi bruiloft'},
        {hz:'هدیه',tr:'hadya',nl:'Cadeau',tip:''},
        {hz:'برکت',tr:'barakat',nl:'Zegen / Overvloed',tip:'Arabische oorsprong'},
        {hz:'دعا',tr:'do\'aa',nl:'Gebed / Wens',tip:''},
      ],
      sentences:[
        {hz:'نوروز مبارک! سال نو خوش',tr:'nawrooz mubaarak! saal-e-naw khosh',nl:'Gelukkig Nieuwjaar! Een goed nieuw jaar'},
        {hz:'سورِ عروسی شادمانه بود',tr:'soor-e-aroosee shaadmaana bood',nl:'De bruiloft was vreugdevol'},
      ]
    },
    { id:'culture_music', title:'Muziek & Kunst', icon:'🎵', xp:18, words:[
        {hz:'موزیک',tr:'moozeeq',nl:'Muziek',tip:''},
        {hz:'سرود',tr:'sorod',nl:'Lied / Hymne',tip:''},
        {hz:'دهل',tr:'dohol',nl:'Trommel / Drum',tip:'Typisch Hazara instrument'},
        {hz:'سرنی',tr:'sarnaay',nl:'Fluit',tip:'Traditionele blaasinstrument'},
        {hz:'رقص',tr:'raqs',nl:'Dans',tip:''},
        {hz:'شعر',tr:'she\'r',nl:'Gedicht',tip:'Hazara poëzie is beroemd'},
        {hz:'نقاشی',tr:'naqaashee',nl:'Tekening / Schilderij',tip:''},
        {hz:'داستان',tr:'daastaan',nl:'Verhaal',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'دهل و سرنی موزیک هزارگی اَس',tr:'dohol o sarnaay moozeeq-e hazaaragi as',nl:'Dohol en sarnai zijn Hazaragi muziek'},
        {hz:'یک شعر هزارگی بخوان',tr:'yak she\'r-e hazaaragi bakhwaan',nl:'Lees een Hazaragi gedicht voor'},
      ]
    },
    { id:'culture_food', title:'Hazaragi Keuken', icon:'🍽️', xp:18, words:[
        {hz:'بولانی',tr:'bollaanee',nl:'Gevulde flatbread',tip:'Typisch Afghaans gerecht'},
        {hz:'قورمه',tr:'qorma',nl:'Stoofschotel',tip:'Basisgerecht in Hazaragi keuken'},
        {hz:'اشک',tr:'ashak',nl:'Dumplings met prei',tip:'Beroemd Afghaans gerecht'},
        {hz:'قابلی',tr:'qaaboli',nl:'Pilav met vlees en rozijnen',tip:'Nationaal gerecht Afghanistan'},
        {hz:'چلو',tr:'challow',nl:'Gestoomde rijst',tip:''},
        {hz:'شیر',tr:'sheer',nl:'Melk',tip:''},
        {hz:'روغن',tr:'roghan',nl:'Olie / Vet',tip:''},
        {hz:'نمک',tr:'namak',nl:'Zout',tip:''},
      ],
      sentences:[
        {hz:'مادرم قورمه پختی، لذیذ بود',tr:'maadaram qorma pakhti, lazeez bood',nl:'Mijn moeder maakte stoofschotel, het was heerlijk'},
        {hz:'اشک غذای مخصوص هزاره اَس',tr:'ashak ghazaa-ye makhsos-e hazaara as',nl:'Ashak is een speciaal Hazara gerecht'},
      ]
    },
  ]},

  { id:'ch19', label:'🍎 Hoofdstuk 19 · Eten & Keuken', color:'#FF8C61', lessons:[
    { id:'food_basics', title:'Basisvoedsel', icon:'🥗', xp:18, words:[
        {hz:'نان',tr:'naan',nl:'Brood',tip:'Lange aa — staple voedsel'},
        {hz:'گوشت',tr:'gosht',nl:'Vlees',tip:''},
        {hz:'سبزی',tr:'sabzee',nl:'Groente',tip:''},
        {hz:'میوه',tr:'mewa',nl:'Fruit',tip:''},
        {hz:'چای',tr:'chaay',nl:'Thee',tip:'Lange aa — altijd aanwezig!'},
        {hz:'قهوه',tr:'qahwa',nl:'Koffie',tip:''},
        {hz:'برنج',tr:'berenj',nl:'Rijst',tip:''},
        {hz:'تخم‌مرغ',tr:'tokhm-morgh',nl:'Ei',tip:'Letterlijk "kippenei"'},
      ],
      sentences:[
        {hz:'صبحانه نان و چای می‌خورم',tr:'sobhaana naan o chaay me-khorem',nl:'\'s Ochtends eet ik brood en thee'},
        {hz:'گوشت و برنج غذای خوب اَس',tr:'gosht o berenj ghazaa-ye khob as',nl:'Vlees en rijst is goed eten'},
      ]
    },
    { id:'food_taste', title:'Smaken & Smaak', icon:'👅', xp:18, words:[
        {hz:'شیرین',tr:'shereen',nl:'Zoet',tip:''},
        {hz:'تلخ',tr:'talkh',nl:'Bitter',tip:''},
        {hz:'شور',tr:'shorr',nl:'Zout(ig)',tip:''},
        {hz:'ترش',tr:'torsh',nl:'Zuur',tip:''},
        {hz:'تند',tr:'tond',nl:'Pittig / Scherp',tip:''},
        {hz:'خوش‌مزه',tr:'khosh-maza',nl:'Lekker',tip:'"خوش" = goed + "مزه" = smaak'},
        {hz:'بدمزه',tr:'bad-maza',nl:'Vies / Niet lekker',tip:''},
        {hz:'گرم',tr:'garm',nl:'Warm / Heet',tip:''},
      ],
      sentences:[
        {hz:'این قورمه خوش‌مزه اَس',tr:'een qorma khosh-maza as',nl:'Deze stoofschotel is lekker'},
        {hz:'چای گرم می‌خوام',tr:'chaay garm me-khaam',nl:'Ik wil warme thee'},
      ]
    },
    { id:'food_cooking', title:'Koken & Keuken', icon:'👨‍🍳', xp:18, words:[
        {hz:'آشپز',tr:'aashpaz',nl:'Kok / Chef',tip:'"آشپزی" = koken'},
        {hz:'دیگ',tr:'deeg',nl:'Pan / Pot',tip:''},
        {hz:'کارد',tr:'kaard',nl:'Mes',tip:''},
        {hz:'بشقاب',tr:'boshqaab',nl:'Bord',tip:'Lange oo en aa'},
        {hz:'پختن',tr:'pakhtan',nl:'Koken (werkwoord)',tip:''},
        {hz:'بریدن',tr:'boredan',nl:'Snijden',tip:''},
        {hz:'سرختن',tr:'sorkhtan',nl:'Bakken / Braden',tip:''},
        {hz:'خوردن',tr:'khordan',nl:'Eten (werkwoord)',tip:''},
      ],
      sentences:[
        {hz:'مادرم خوب آشپزی می‌کنه',tr:'maadaram khob aashpazee me-kona',nl:'Mijn moeder kookt goed'},
        {hz:'گوشت را سرختم، بعد سبزی افزودم',tr:'gosht ra sorkhti, ba\'d sabzee afzodam',nl:'Ik bakte het vlees, daarna voegde ik groente toe'},
      ]
    },
  ]},

  { id:'ch20', label:'💭 Hoofdstuk 20 · Gevoelens & Gedachten', color:'#A78BFA', lessons:[
    { id:'emotions_basic', title:'Basisgevoelens', icon:'💕', xp:20, words:[
        {hz:'خوشحال',tr:'khoshaal',nl:'Blij / Gelukkig',tip:'"خوش" = goed + "حال" = toestand'},
        {hz:'غمگین',tr:'ghamgeen',nl:'Verdrietig / Bedroefd',tip:'Lange ee'},
        {hz:'ترسیده',tr:'tarseeda',nl:'Bang / Angstig',tip:'Van "ترسیدن" = bang zijn'},
        {hz:'خشمگین',tr:'khashmageen',nl:'Boos / Kwaad',tip:''},
        {hz:'حیران',tr:'hayraan',nl:'Verbaasd / Versteld',tip:'Lange aa'},
        {hz:'شرمنده',tr:'sharmanda',nl:'Verlegen / Beschaamd',tip:''},
        {hz:'دلتنگ',tr:'deltang',nl:'Heimwee / Gemist',tip:'"دل" = hart + "تنگ" = nauw'},
        {hz:'آرام',tr:'aaraam',nl:'Rustig / Kalm',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'وقتی خانواده‌ام رو می‌بینم خوشحالم',tr:'waqti khaanawaadam ra me-beenam khoshaalem',nl:'Als ik mijn familie zie ben ik blij'},
        {hz:'دلتنگ وطنم استم',tr:'deltang-e watnam astam',nl:'Ik mis mijn thuisland'},
      ]
    },
    { id:'emotions_thinking', title:'Gedachten & Ideeën', icon:'🧠', xp:18, words:[
        {hz:'فکر',tr:'fekr',nl:'Gedachte / Denken',tip:''},
        {hz:'خیال',tr:'khayaal',nl:'Idee / Verbeelding',tip:'Lange aa'},
        {hz:'یاد',tr:'yaad',nl:'Herinnering / Geheugen',tip:'Lange aa'},
        {hz:'رویا',tr:'royaa',nl:'Droom',tip:'Lange aa'},
        {hz:'امید',tr:'omeed',nl:'Hoop',tip:'Lange ee'},
        {hz:'باور',tr:'baawor',nl:'Geloof / Overtuiging',tip:''},
        {hz:'فهمیدن',tr:'fahmedan',nl:'Begrijpen',tip:''},
        {hz:'یاد گرفتن',tr:'yaad gereftan',nl:'Leren / Onthouden',tip:'"یاد" = geheugen + "گرفتن" = pakken'},
      ],
      sentences:[
        {hz:'فکر می‌کنم درست اَس',tr:'fekr me-konam dorost as',nl:'Ik denk dat het correct is'},
        {hz:'امیدم اَس که موفق می‌شم',tr:'omeedam as ke mawaffaq me-sham',nl:'Ik hoop dat ik succesvol word'},
      ]
    },
    { id:'emotions_character', title:'Karakter & Relaties', icon:'🤝', xp:18, words:[
        {hz:'مهربان',tr:'mehrabaan',nl:'Vriendelijk / Lief',tip:'Lange aa'},
        {hz:'دوست',tr:'dost',nl:'Vriend',tip:''},
        {hz:'دشمن',tr:'doshman',nl:'Vijand',tip:''},
        {hz:'امین',tr:'ameen',nl:'Eerlijk / Betrouwbaar',tip:'Lange ee'},
        {hz:'شجاع',tr:'shojaa',nl:'Dapper / Moedig',tip:'Hazara zijn bekend om hun moed'},
        {hz:'صادق',tr:'saadaq',nl:'Oprecht',tip:'Lange aa'},
        {hz:'احترام',tr:'ehtaraam',nl:'Respect',tip:'Lange aa'},
        {hz:'اعتماد',tr:'e\'temaad',nl:'Vertrouwen',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'دوستم مهربان و امین اَس',tr:'dostam mehrabaan o ameen as',nl:'Mijn vriend is vriendelijk en eerlijk'},
        {hz:'احترام مهم‌ترین چیز اَس',tr:'ehtaraam mohimtareen cheez as',nl:'Respect is het belangrijkste ding'},
      ]
    },
  ]},

  { id:'ch21', label:'🔢 Hoofdstuk 21 · Cijfers & Tijd', color:'#F06C78', lessons:[

    { id:'numbers_11_20', title:'Cijfers 11–20', sub:'Elf tot twintig', icon:'🔢', xp:20,
      pronTips:['ر'],
      grammar:'Patroon: "یازده" t/m "نزده" hebben elk een eigen vorm. Daarna: "بیست" (20) + "و" + eenheid.',
      words:[
        {hz:'یازده',tr:'yaazda',nl:'Elf',tip:'Hazaragi: "yaazda" — snel uitgesproken'},
        {hz:'دوازده',tr:'dwaazda',nl:'Twaalf',tip:''},
        {hz:'سیزده',tr:'sezda',nl:'Dertien',tip:'Hazaragi: "sezda"'},
        {hz:'چارده',tr:'chaarda',nl:'Veertien',tip:'Van "چار" (4) + "ده" (10)'},
        {hz:'پانزده',tr:'paanza',nl:'Vijftien',tip:''},
        {hz:'شانزده',tr:'shaanza',nl:'Zestien',tip:''},
        {hz:'هفده',tr:'hafda',nl:'Zeventien',tip:''},
        {hz:'هژده',tr:'hazda',nl:'Achttien',tip:'Hazaragi: "hazda" — unieke uitspraak!'},
        {hz:'نزده',tr:'nezda',nl:'Negentien',tip:''},
        {hz:'بیست',tr:'bist',nl:'Twintig',tip:''},
      ],
      sentences:[
        {hz:'بیست و یک روز مانده',tr:'bist o yak roz maanda',nl:'Nog eenentwintig dagen',tip:'"و" = en — zo maak je samengestelde getallen'},
        {hz:'دوازده شاگرد دَ صنف اَس',tr:'dwaazda shaagerd da sanf as',nl:'Er zijn twaalf leerlingen in de klas'},
        {hz:'هژده ساله هستم',tr:'hazda saala hastam',nl:'Ik ben achttien jaar'},
      ]
    },

    { id:'numbers_big', title:'Cijfers 30–1000', sub:'Grote getallen', icon:'💯', xp:20,
      pronTips:['ر'],
      grammar:'"صد" = honderd. "دو صد" = tweehonderd. "هزار" = duizend. Simpel combineren!',
      words:[
        {hz:'سی',tr:'si',nl:'Dertig',tip:''},
        {hz:'چل',tr:'chel',nl:'Veertig',tip:'Hazaragi: "chel" — Farsi "chehel"'},
        {hz:'پنجاه',tr:'panjaa',nl:'Vijftig',tip:''},
        {hz:'شصت',tr:'shast',nl:'Zestig',tip:''},
        {hz:'هفتاد',tr:'haftaad',nl:'Zeventig',tip:''},
        {hz:'هشتاد',tr:'hashtaad',nl:'Tachtig',tip:''},
        {hz:'نود',tr:'nawad',nl:'Negentig',tip:''},
        {hz:'صد',tr:'sad',nl:'Honderd',tip:''},
        {hz:'پنج صد',tr:'panj sad',nl:'Vijfhonderd',tip:''},
        {hz:'هزار',tr:'hazaar',nl:'Duizend',tip:'Lange aa — ook een Hazara-achternaam!'},
      ],
      sentences:[
        {hz:'هزار تشکر!',tr:'hazaar tashakor!',nl:'Duizendmaal dank!',tip:'Vaste uitdrukking voor grote dankbaarheid'},
        {hz:'صد کیلومتر دور اَس',tr:'sad kilometer door as',nl:'Het is honderd kilometer ver'},
        {hz:'پنجاه نفر آمدن',tr:'panjaa nafar aamadan',nl:'Vijftig mensen zijn gekomen'},
      ]
    },

    { id:'days_week', title:'Dagen van de week', sub:'Maandag t/m zondag', icon:'📅', xp:20,
      pronTips:['ش'],
      grammar:'"شنبه" (shanba) = zaterdag is de basis. Andere dagen = getal + "شنبه".',
      words:[
        {hz:'دوشنبه',tr:'doshanba',nl:'Maandag',tip:'"دو" = twee + "شنبه"'},
        {hz:'سه‌شنبه',tr:'seshanba',nl:'Dinsdag',tip:'"سه" = drie'},
        {hz:'چارشنبه',tr:'chaarshanba',nl:'Woensdag',tip:'"چار" = vier'},
        {hz:'پنجشنبه',tr:'panjshanba',nl:'Donderdag',tip:'"پنج" = vijf'},
        {hz:'جمعه',tr:'jome',nl:'Vrijdag',tip:'Heilige dag — vrij in Afghanistan'},
        {hz:'شنبه',tr:'shanba',nl:'Zaterdag',tip:''},
        {hz:'یکشنبه',tr:'yakshanba',nl:'Zondag',tip:'"یک" = één'},
        {hz:'هفته',tr:'hafta',nl:'Week',tip:''},
        {hz:'آخر هفته',tr:'aakhir-e-hafta',nl:'Weekend',tip:''},
        {hz:'هفته دیگه',tr:'hafta diga',nl:'Volgende week',tip:''},
      ],
      sentences:[
        {hz:'چارشنبه می‌آیم، آماده باش',tr:'chaarshanba me-aaym, aamaada baash',nl:'Woensdag kom ik, wees klaar'},
        {hz:'جمعه خانه هستم',tr:'jome khaana hastam',nl:'Vrijdag ben ik thuis'},
        {hz:'هفته دیگه مسابقه داریم',tr:'hafta diga masaabeqa daarem',nl:'Volgende week hebben we een wedstrijd'},
      ]
    },

    { id:'clock_time', title:'Klokkijken & Tijdsaanduidingen', sub:'Hoe laat is het?', icon:'⏰', xp:25,
      pronTips:['ر'],
      grammar:'"ساعت چند اَس؟" = hoe laat is het? "ساعت سه و نیم" = half vier.',
      words:[
        {hz:'ساعت',tr:'saat',nl:'Uur / Klok / Horloge',tip:''},
        {hz:'دقیقه',tr:'daqiqa',nl:'Minuut',tip:''},
        {hz:'نیم',tr:'nim',nl:'Half',tip:'"ساعت سه و نیم" = half vier (3:30)'},
        {hz:'ربع',tr:'rob',nl:'Kwart',tip:'"ربع کم" = kwart voor'},
        {hz:'صبح',tr:'sobh',nl:'Ochtend',tip:''},
        {hz:'چاشت',tr:'chaasht',nl:'Middag / Noon',tip:'Hazaragi woord — Farsi "ظهر"'},
        {hz:'بعد از چاشت',tr:'baad az chaasht',nl:'Namiddag',tip:''},
        {hz:'شام',tr:'shaam',nl:'Avond / Avondeten',tip:''},
        {hz:'نیمه شب',tr:'nima-shab',nl:'Middernacht',tip:''},
        {hz:'دیر شد',tr:'deer shod',nl:'Het is te laat',tip:'Veelgebruikte uitdrukking'},
      ],
      sentences:[
        {hz:'ساعت چند اَس؟',tr:'saat chand as?',nl:'Hoe laat is het?'},
        {hz:'ساعت هشت و نیم صبح اَس',tr:'saat hasht o nim sobh as',nl:'Het is half negen \'s ochtends'},
        {hz:'دیر شد، زود برو!',tr:'deer shod, zod bero!',nl:'Het is te laat, ga snel!'},
      ]
    },
  ]},

  { id:'ch22', label:'👗 Hoofdstuk 22 · Kleding & Uiterlijk', color:'#F9C3Cb', lessons:[

    { id:'clothing', title:'Kleding', sub:'Shirt, broek, schoenen...', icon:'👕', xp:25,
      pronTips:['خ','ش'],
      grammar:'"پوشیدن" = dragen/aantrekken. "درآوردن" = uitdoen. Tegengestelden die je allebei nodig hebt!',
      words:[
        {hz:'لباس',tr:'lebaas',nl:'Kleding (algemeen)',tip:''},
        {hz:'پیراهن',tr:'peraahan',nl:'Overhemd / Jurk',tip:''},
        {hz:'شلوار',tr:'shalwaar',nl:'Broek',tip:'Lange aa'},
        {hz:'کفش',tr:'kafsh',nl:'Schoenen',tip:''},
        {hz:'جوراب',tr:'joraab',nl:'Sokken',tip:''},
        {hz:'کت',tr:'kat',nl:'Jas / Jasje',tip:''},
        {hz:'کلاه',tr:'kolaah',nl:'Hoed / Pet / Muts',tip:''},
        {hz:'روسری',tr:'roosari',nl:'Hoofddoek',tip:''},
        {hz:'پوشیدن',tr:'poshedan',nl:'Dragen / Aantrekken',tip:''},
        {hz:'درآوردن',tr:'dar-aawordan',nl:'Uitdoen / Uittrekken',tip:''},
      ],
      sentences:[
        {hz:'لباست قشنگ اَس، کجا خریدی؟',tr:'lebaasat qashanq as, koja kharidi?',nl:'Je kleding is mooi, waar heb je het gekocht?'},
        {hz:'هوا سرد اَس، کت بپوش',tr:'hawaa sard as, kat beposh',nl:'Het is koud, trek je jas aan'},
        {hz:'کفشم تنگ اَس، درد می‌کنه',tr:'kafasham tang as, dard me-kona',nl:'Mijn schoen is strak, het doet pijn'},
      ]
    },

    { id:'appearance', title:'Uiterlijk & Beschrijving', sub:'Lang, kort, jong, oud...', icon:'🪞', xp:25,
      pronTips:['ر','خ'],
      grammar:'"قد بلند" = lang. "قد کوتاه" = kort. Eigenschap direct vóór of na het naamwoord.',
      words:[
        {hz:'مو',tr:'moo',nl:'Haar',tip:'Niet verwarren met "مو" = wij!'},
        {hz:'قد',tr:'qad',nl:'Lengte / Gestalte',tip:''},
        {hz:'بلند',tr:'boland',nl:'Lang / Hoog',tip:''},
        {hz:'کوتاه',tr:'kotaah',nl:'Kort',tip:''},
        {hz:'جوان',tr:'jawaan',nl:'Jong',tip:''},
        {hz:'پیر',tr:'peer',nl:'Oud (persoon)',tip:''},
        {hz:'لاغر',tr:'laaghar',nl:'Slank / Dun',tip:''},
        {hz:'چاق',tr:'chaaq',nl:'Dik / Mollig',tip:''},
        {hz:'ریش',tr:'rish',nl:'Baard',tip:''},
        {hz:'خوش‌تیپ',tr:'khosh-tip',nl:'Stijlvol / Knap',tip:'Moderne term'},
      ],
      sentences:[
        {hz:'برارم قد بلند و لاغر اَس',tr:'baraaram qad boland o laaghar as',nl:'Mijn broer is lang en slank'},
        {hz:'مویت خیلی قشنگ اَس',tr:'mooyat khaili qashanq as',nl:'Je haar is heel mooi'},
        {hz:'او پیر نیس، هنوز جوان اَس',tr:'o peer nis, hanoz jawaan as',nl:'Hij/zij is niet oud, nog steeds jong'},
      ]
    },

    { id:'clothing_shopping', title:'Kleding kopen', sub:'Maat, passen, betalen...', icon:'🛍️', xp:30,
      pronTips:['خ'],
      grammar:'"اندازه" = maat. "پرو کردن" = passen. Altijd vragen: "بزرگتر داری؟" = heb je iets groters?',
      words:[
        {hz:'اندازه',tr:'andaaza',nl:'Maat / Grootte',tip:''},
        {hz:'پرو کردن',tr:'paro kardan',nl:'Passen (kleding)',tip:''},
        {hz:'بزرگ',tr:'bozorg',nl:'Groot',tip:''},
        {hz:'کوچک',tr:'kochak',nl:'Klein',tip:''},
        {hz:'تنگ',tr:'tang',nl:'Strak / Nauw',tip:''},
        {hz:'گشاد',tr:'goshaad',nl:'Wijd / Ruim',tip:''},
        {hz:'نو',tr:'no',nl:'Nieuw',tip:''},
        {hz:'کهنه',tr:'kohna',nl:'Oud / Versleten',tip:''},
        {hz:'رنگ',tr:'rang',nl:'Kleur',tip:''},
        {hz:'مد',tr:'mod',nl:'Mode / Trend',tip:'Leenwoord van "mode"'},
      ],
      sentences:[
        {hz:'این اندازه‌ام درس نیس، بزرگتر داری؟',tr:'een andaazaam doros nis, bozoghtar daari?',nl:'Deze maat past niet, heb je iets groters?'},
        {hz:'پرو کنم ببینم چطور اَس',tr:'paro konam bebinam chetor as',nl:'Laat me het passen om te zien hoe het zit'},
        {hz:'این رنگ مد اَس؟',tr:'een rang mod as?',nl:'Is deze kleur in de mode?'},
      ]
    },
  ]},

  { id:'ch23', label:'🏠 Hoofdstuk 23 · Huis & Dagelijks Leven', color:'#8E9A5A', lessons:[

    { id:'rooms', title:'Kamers van het huis', sub:'Woonkamer, slaapkamer...', icon:'🛋️', xp:20,
      pronTips:['خ'],
      grammar:'"دَ اتاق خواب هستم" = ik ben in de slaapkamer. "دَ" is het Hazaragi voorzetsel voor locatie.',
      words:[
        {hz:'هال',tr:'haal',nl:'Woonkamer',tip:'Leenwoord van "hall"'},
        {hz:'اتاق خواب',tr:'otaaq-khaab',nl:'Slaapkamer',tip:'"خواب" = slaap'},
        {hz:'حمام',tr:'hamaam',nl:'Badkamer',tip:''},
        {hz:'دستشویی',tr:'dast-shoyi',nl:'Toilet / WC',tip:'Letterlijk "handenwasplaats"'},
        {hz:'آشپزخانه',tr:'aashpaz-khaana',nl:'Keuken',tip:'Letterlijk "kookhuis"'},
        {hz:'زیرزمین',tr:'zirzameen',nl:'Kelder',tip:'"زیر" = onder + "زمین" = grond'},
        {hz:'بالکن',tr:'baalkun',nl:'Balkon',tip:''},
        {hz:'پله',tr:'pala',nl:'Trap',tip:''},
        {hz:'راهرو',tr:'raahro',nl:'Gang / Hal',tip:''},
        {hz:'سقف',tr:'saqf',nl:'Plafond',tip:''},
      ],
      sentences:[
        {hz:'دَ اتاق خوابم هستم',tr:'da otaaq-khaabam hastam',nl:'Ik ben in mijn slaapkamer'},
        {hz:'حمام خراب اَس، دستشویی کار می‌کنه',tr:'hamaam khraab as, dast-shoyi kaar me-kona',nl:'De badkamer is kapot, het toilet werkt'},
        {hz:'بالکنمو قشنگ اَس، شهر دیده می‌شه',tr:'baalkuanamo qashanq as, shahr dida meshe',nl:'Ons balkon is mooi, je ziet de stad'},
      ]
    },

    { id:'furniture', title:'Meubels & Inrichting', sub:'Bank, tapijt, spiegel...', icon:'🛏️', xp:20,
      pronTips:['ر'],
      grammar:'Traditioneel Hazara huis: "تشک" (matras) op de vloer + "قالین" (tapijt) — geen Westerse meubels.',
      words:[
        {hz:'صوفه',tr:'sofa',nl:'Bank / Sofa',tip:'Leenwoord'},
        {hz:'تشک',tr:'tashak',nl:'Matras',tip:'Traditioneel: op de grond'},
        {hz:'بالشت',tr:'baalshat',nl:'Kussen',tip:''},
        {hz:'لحاف',tr:'lahaaf',nl:'Deken',tip:''},
        {hz:'قالین',tr:'qaaleen',nl:'Vloerkleed / Tapijt',tip:'Perzische tapijten zijn beroemde kunst'},
        {hz:'پرده',tr:'parda',nl:'Gordijn',tip:''},
        {hz:'آینه',tr:'aayna',nl:'Spiegel',tip:''},
        {hz:'الماری',tr:'almaaree',nl:'Kledingkast',tip:''},
        {hz:'رف',tr:'raf',nl:'Plank',tip:''},
        {hz:'فانوس',tr:'faanos',nl:'Lamp / Lantaarn',tip:''},
      ],
      sentences:[
        {hz:'دَ صوفه بنشین، چای می‌آرم',tr:'da sofa benshin, chaay me-aaram',nl:'Ga op de bank zitten, ik breng thee'},
        {hz:'قالینمو خیلی کهنه شده',tr:'qaaleenamo khaili kohna shoda',nl:'Ons vloerkleed is erg oud geworden'},
        {hz:'پرده را ببند، آفتاب می‌زنه',tr:'parda ra baband, aaftaab me-zana',nl:'Sluit het gordijn, de zon schijnt'},
      ]
    },

    { id:'household_chores', title:'Huishoudelijke taken', sub:'Schoonmaken, wassen, koken...', icon:'🧹', xp:25,
      pronTips:['ر','ش'],
      grammar:'"کردن" = doen. Taak + "کردن" = taak uitvoeren. "جارو کردن" = vegen.',
      words:[
        {hz:'جارو کردن',tr:'jaaro kardan',nl:'Vegen / Stofzuigen',tip:'"جارو" = bezem'},
        {hz:'شستن',tr:'shostan',nl:'Wassen',tip:'"لباس شستن" = kleding wassen'},
        {hz:'پاک کردن',tr:'paak kardan',nl:'Schoonmaken',tip:''},
        {hz:'ظرف شستن',tr:'zarf shostan',nl:'Afwassen',tip:'"ظرف" = vaat'},
        {hz:'خرید کردن',tr:'kharid kardan',nl:'Boodschappen doen',tip:''},
        {hz:'مرتب کردن',tr:'moratab kardan',nl:'Opruimen',tip:''},
        {hz:'آب دادن',tr:'aab daadan',nl:'Water geven (planten)',tip:''},
        {hz:'کثیف',tr:'kasif',nl:'Vies / Vuil',tip:''},
        {hz:'تمیز',tr:'tamiz',nl:'Schoon',tip:''},
        {hz:'نظافت',tr:'nazaafat',nl:'Schoonmaak / Hygiëne',tip:''},
      ],
      sentences:[
        {hz:'اتاقت را مرتب کو، خیلی کثیف اَس',tr:'otaaqat ra moratab ko, khaili kasif as',nl:'Ruim je kamer op, het is heel rommelig'},
        {hz:'ظرف‌ها را بشور، من جارو می‌کنم',tr:'zarfhaa ra beshor, man jaaro me-konam',nl:'Was de vaat, ik zal vegen'},
        {hz:'هر روز نظافت خانه مهم اَس',tr:'har roz nazaafat-e-khaana mohim as',nl:'Elke dag schoonmaken is belangrijk'},
      ]
    },
  ]},

  { id:'ch24', label:'🌾 Hoofdstuk 24 · Landbouw & Wilde Natuur', color:'#8E9A5A', lessons:[

    { id:'farming', title:'Landbouw & Gewassen', sub:'Tarwe, druiven, meloenen...', icon:'🌾', xp:30,
      pronTips:['خ','آ'],
      grammar:'Hazara zijn van oudsher landbouwers. "کشت کردن" = verbouwen. "زمین" = akker.',
      words:[
        {hz:'کشت کردن',tr:'kasht kardan',nl:'Verbouwen / Zaaien',tip:''},
        {hz:'آبیاری',tr:'aabyaari',nl:'Bevloeien / Irrigatie',tip:'Essentieel in droog Afghanistan'},
        {hz:'گندم',tr:'gandam',nl:'Tarwe',tip:'Basisgewas van Hazarajat'},
        {hz:'جو',tr:'jaw',nl:'Gerst',tip:''},
        {hz:'انگور',tr:'angoor',nl:'Druif',tip:'Afghanistan is beroemd om zijn druiven'},
        {hz:'زردآلو',tr:'zardaalo',nl:'Abrikoos',tip:'"زرد" = geel — typisch Afghaans fruit'},
        {hz:'سیب',tr:'seb',nl:'Appel',tip:''},
        {hz:'خربزه',tr:'kharboza',nl:'Meloen',tip:'Afghaanse meloenen zijn wereldberoemd'},
        {hz:'درو کردن',tr:'daro kardan',nl:'Oogsten',tip:'"درو" = het maaien van graan'},
        {hz:'محصول',tr:'mahsool',nl:'Oogst / Gewas',tip:''},
      ],
      sentences:[
        {hz:'باواکلانم هر سال گندم می‌کشت',tr:'baawakalanam har saal gandam me-kasht',nl:'Mijn opa verbouwde elk jaar tarwe'},
        {hz:'امسال محصول خوب بود',tr:'emsaal mahsool khob bood',nl:'Dit jaar was de oogst goed'},
        {hz:'انگورهای افغانستان شیرین‌ترین اَن',tr:'angoorhaayi afghanistan shireentareen an',nl:'Afghaanse druiven zijn de zoetste'},
      ]
    },

    { id:'wild_animals', title:'Wilde dieren', sub:'Wolf, arend, vlinder...', icon:'🐺', xp:25,
      pronTips:['خ','ر'],
      grammar:'Afghaanse bergen zijn rijk aan wilde dieren. Herders kennen deze dieren goed.',
      words:[
        {hz:'گرگ',tr:'gorg',nl:'Wolf',tip:'Gevaarlijk voor de kudde'},
        {hz:'خرس',tr:'khars',nl:'Beer',tip:'Leeft in de bergen van Afghanistan'},
        {hz:'روباه',tr:'robaa',nl:'Vos',tip:'"روباه" = slim in spreekwoorden'},
        {hz:'عقاب',tr:'aqaab',nl:'Arend',tip:'Nationaal symbool van Afghanistan'},
        {hz:'مار',tr:'maar',nl:'Slang',tip:''},
        {hz:'کبوتر',tr:'kabutar',nl:'Duif',tip:'Symbool van vrede'},
        {hz:'پروانه',tr:'parwaana',nl:'Vlinder',tip:'Ook een populaire vrouwennaam'},
        {hz:'زنبور',tr:'zambaar',nl:'Bij',tip:'Afghaanse bergshoning is beroemd'},
        {hz:'مورچه',tr:'morcha',nl:'Mier',tip:'"مورچه" = geduldig en ijverig in spreekwoorden'},
        {hz:'آهو',tr:'aaho',nl:'Gazelle / Reeëntje',tip:'Symbool van schoonheid in poëzie'},
      ],
      sentences:[
        {hz:'شب گرگ آمد، گوسفندا ترسیدن',tr:'shab gorg aamad, gosfandaa tarsidan',nl:'\'s Nachts kwam de wolf, de schapen werden bang'},
        {hz:'عقاب دَ آسمان بلند پرواز می‌کنه',tr:'aqaab da aasmaan boland parwaaz me-kona',nl:'De arend vliegt hoog in de lucht'},
        {hz:'پروانه دَ گل نشسته',tr:'parwaana da gol nashasta',nl:'De vlinder zit op de bloem'},
      ]
    },

    { id:'environment', title:'Milieu & Klimaat', sub:'Droogte, storm, natuur beschermen...', icon:'🌍', xp:30,
      pronTips:['آ','خ'],
      grammar:'"محیط زیست" = milieu (letterlijk "omgeving van leven"). Moderne woordenschat.',
      words:[
        {hz:'خشکسالی',tr:'khushksaalee',nl:'Droogte',tip:'Groot probleem in Afghanistan'},
        {hz:'سیلاب',tr:'silaab',nl:'Overstroming',tip:''},
        {hz:'زلزله',tr:'zalzala',nl:'Aardbeving',tip:'Afghanistan ligt in een seismische zone'},
        {hz:'آلودگی',tr:'aaloodagi',nl:'Vervuiling',tip:''},
        {hz:'درخت کاری',tr:'darakht-kaaree',nl:'Bomen planten',tip:''},
        {hz:'محیط زیست',tr:'mohit-e-zist',nl:'Milieu',tip:'Letterlijk: "omgeving van leven"'},
        {hz:'آب و هوا',tr:'aab-o-hawaa',nl:'Klimaat',tip:'"آب" = water + "هوا" = lucht'},
        {hz:'طوفان',tr:'toofaan',nl:'Storm',tip:''},
        {hz:'گرد و خاک',tr:'gard-o-khaak',nl:'Stofstorm',tip:'Typisch voor Afghanistan'},
        {hz:'حفاظت از طبیعت',tr:'hefaazat az tabiaat',nl:'Natuur beschermen',tip:''},
      ],
      sentences:[
        {hz:'امسال خشکسالی شد، زمین آب نداشت',tr:'emsaal khushksaalee shod, zameen aab nadaasht',nl:'Dit jaar was er droogte, het land had geen water'},
        {hz:'باید از محیط زیست حفاظت کنیم',tr:'baayad az mohit-e-zist hefaazat konim',nl:'We moeten het milieu beschermen'},
        {hz:'طوفان آمد، همه دَ خانه موندن',tr:'toofaan aamad, hama da khaana moondan',nl:'De storm kwam, iedereen bleef thuis'},
      ]
    },
  ]},

  { id:'ch25', label:'✍️ Hoofdstuk 25 · Verhalen & Poëzie', color:'#F06C78', lessons:[

    { id:'poetry_culture', title:'Poëzie & Dichters', sub:'Hazara literaire tradities', icon:'📜', xp:35,
      pronTips:['ع','غ'],
      grammar:'"شعر" = gedicht. "غزل" = lyrisch liefdeslied. Hazara poëzie is een levende traditie.',
      words:[
        {hz:'شعر',tr:"she'r",nl:'Gedicht',tip:''},
        {hz:'غزل',tr:'ghazal',nl:'Ghazal — lyrisch liefdeslied',tip:'Klassieke dichtvorm'},
        {hz:'شاعر',tr:"shaa'er",nl:'Dichter',tip:''},
        {hz:'بیت',tr:'bayt',nl:'Vers / Dichtregel',tip:''},
        {hz:'ترانه',tr:'taraana',nl:'Lied / Ballade',tip:''},
        {hz:'مولانا',tr:'mawlaanaa',nl:'Rumi (dichter)',tip:'Grootste Perzische dichter — uit Balkh, Afghanistan!'},
        {hz:'خیام',tr:"khayyaam",nl:'Omar Khayyam (dichter)',tip:'Beroemd om zijn Rubaiyat'},
        {hz:'حافظ',tr:'haafez',nl:'Hafiz (dichter)',tip:'Meester van de ghazal'},
        {hz:'دل‌نواز',tr:'del-nawaaz',nl:'Hartverwarmend / Ontroerend',tip:'Letterlijk: "hart-strelend"'},
        {hz:'قافیه',tr:'qaafiya',nl:'Rijm',tip:''},
      ],
      sentences:[
        {hz:'یک بیت از شعر حافظ بخوان',tr:"yak bayt az she'r-e-haafez bakhwaan",nl:'Lees een vers uit een gedicht van Hafiz'},
        {hz:'مولانا از بلخ بود — افتخار هزاره‌هاست',tr:'mawlaanaa az balkh bood — eftekhaare hazaarahaaast',nl:'Rumi was uit Balkh — hij is de trots van de Hazara'},
        {hz:'این غزل خیلی دل‌نواز اَس',tr:'een ghazal khaili del-nawaaz as',nl:'Dit ghazal is heel ontroerend'},
      ]
    },

    { id:'fairy_tales', title:'Sprookjes & Legenden', sub:'Er was eens...', icon:'🧚', xp:30,
      pronTips:['ر','غ'],
      grammar:'"روزی روزگاری" = er was eens. Begin van elk Hazara sprookje bij het haardvuur.',
      words:[
        {hz:'قصه',tr:'qessa',nl:'Verhaal / Sprookje',tip:'Hazara grootouders vertellen qessa\'s bij het vuur'},
        {hz:'افسانه',tr:'afsaana',nl:'Legende / Sage',tip:''},
        {hz:'قهرمان',tr:'qahramaan',nl:'Held',tip:''},
        {hz:'دیو',tr:'deew',nl:'Reus / Demon',tip:'De vijand in Hazara sprookjes'},
        {hz:'پری',tr:'paree',nl:'Fee / Elfje',tip:'Mooi wezen uit de volksverhalen'},
        {hz:'گنج',tr:'ganj',nl:'Schat',tip:''},
        {hz:'جادو',tr:'jaado',nl:'Magie / Toverij',tip:''},
        {hz:'پادشاه',tr:'paadishaa',nl:'Koning',tip:'"پاد" = beschermer, "شاه" = heer'},
        {hz:'شاهدخت',tr:'shaadokht',nl:'Prinses',tip:'"دخت" = dochter'},
        {hz:'عاقبت خوش',tr:'aaqebat khosh',nl:'Goed einde / Happily ever after',tip:''},
      ],
      sentences:[
        {hz:'روزی روزگاری یک پادشاه بود',tr:'rozi rozgaari yak paadishah bood',nl:'Er was eens een koning'},
        {hz:'قهرمان رفت دیو را کشت',tr:'qahramaan raft deew ra kosht',nl:'De held ging en doodde de demon'},
        {hz:'عاقبت خوش شد، دیو شکست خورد',tr:'aaqebat khosh shod, deew shekast khord',nl:'Het eindigde goed, de demon werd verslagen'},
      ]
    },

    { id:'body_expressions', title:'Lichaamsuitdrukkingen', sub:'Hart, oog, hand in spreektaal', icon:'💬', xp:35,
      pronTips:['ع','خ'],
      grammar:'In Hazaragi zijn "دل" (hart), "چشم" (oog) en "دست" (hand) de kern van taal uitdrukkingen.',
      words:[
        {hz:'دستت درد نکنه',tr:'dastat dard nakona',nl:'Dank je voor je moeite',tip:'Na maaltijd of gunst — verplicht te zeggen!'},
        {hz:'چشم',tr:'chashm',nl:'Ja, met plezier! (beleefd)',tip:'Letterlijk "oog" — mooiste manier van instemmen'},
        {hz:'دل کندن',tr:'del kandan',nl:'Loslaten / Afstand doen',tip:'Letterlijk "hart uitscheuren"'},
        {hz:'دل به دریا زدن',tr:'del ba darya zadan',nl:'Lef tonen / Het erop wagen',tip:'Letterlijk "hart in de zee gooien"'},
        {hz:'پشت کسی بودن',tr:'posht-e-kasi boodan',nl:'Iemand steunen',tip:'Letterlijk "achter iemand zijn"'},
        {hz:'سر بلند بودن',tr:'sar boland boodan',nl:'Trots zijn',tip:'"سر بلند باش" = wees trots'},
        {hz:'چشم انتظار',tr:'chashm entezaar',nl:'Uitkijken naar iemand',tip:'Letterlijk "oog-verwachting"'},
        {hz:'دل شاد',tr:'del shaad',nl:'Blij van hart',tip:'Hazara afscheidsgroet'},
        {hz:'سر به سر گذاشتن',tr:'sar ba sar gozaashtan',nl:'Plagen / Pesten',tip:'"سر به سرم نذار" = doe niet moeilijk'},
        {hz:'رو داشتن',tr:'ro daashtan',nl:'Het lef hebben',tip:''},
      ],
      sentences:[
        {hz:'دستت درد نکنه، غذا خیلی خوشمزه بود',tr:'dastat dard nakona, ghazaa khaili khoshmaza bood',nl:'Dank je, het eten was heerlijk'},
        {hz:'چشم، هر کاری بگی می‌کنم',tr:'chashm, har kaari begi me-konam',nl:'Ja met plezier, wat je ook zegt doe ik'},
        {hz:'دل به دریا بزن، برو صحبت کو!',tr:'del ba darya bezan, bero sohbat ko!',nl:'Waag het erop, ga en praat!'},
      ]
    },
  ]},

  { id:'ch_gram4', label:'📖 Grammatica 4 · Modale werkwoorden', color:'#8B6FF0', lessons:[

    { id:'gram4_modal', title:'Modale werkwoorden', sub:'Kunnen, moeten, mogen...', icon:'⚙️', xp:35,
      pronTips:['ت'],
      grammar:'"می‌تانم" (Hazaragi) = kan. Farsi zegt "می‌توانم" — markant verschil! Leer de Hazaragi vorm.',
      words:[
        {hz:'باید',tr:'baayad',nl:'Moet / Dient te',tip:'"باید بری" = je moet gaan'},
        {hz:'نباید',tr:'nabaayad',nl:'Mag niet / Moet niet',tip:''},
        {hz:'می‌تانم',tr:'me-taanam',nl:'Ik kan (Hazaragi)',tip:'HAZARAGI — Farsi: "می‌توانم"'},
        {hz:'نمی‌تانم',tr:'nemi-taanam',nl:'Ik kan niet',tip:''},
        {hz:'می‌تانی',tr:'me-taani',nl:'Jij kan',tip:''},
        {hz:'می‌تانه',tr:'me-taana',nl:'Hij/Zij kan',tip:''},
        {hz:'می‌خوام',tr:'me-khaam',nl:'Ik wil',tip:''},
        {hz:'نمی‌خوام',tr:'nemi-khaam',nl:'Ik wil niet',tip:''},
      ],
      sentences:[
        {hz:'نمی‌تانم بیام، کار دارم',tr:'nemi-taanam biyaam, kaar daaram',nl:'Ik kan niet komen, ik heb werk'},
        {hz:'باید امتحان بدی، نباید غیب بشی',tr:'baayad emtehaan bedi, nabaayad ghayb beshi',nl:'Je moet examen doen, je mag niet wegblijven'},
        {hz:'می‌خوام بیام اما نمی‌تانم',tr:'me-khaam biyaam amma nemi-taanam',nl:'Ik wil komen maar ik kan niet'},
      ]
    },

    { id:'gram4_future', title:'Toekomende tijd', sub:'Morgen ga ik, ik zal komen...', icon:'🔮', xp:35,
      pronTips:['خ'],
      grammar:'Toekomst in Hazaragi: tijdwoord ("فردا", "بعداً") + tegenwoordige tijd. Of: "می‌خوام" + werkwoord.',
      words:[
        {hz:'فردا می‌رم',tr:'farda me-ram',nl:'Morgen ga ik',tip:'"فردا" maakt het toekomstig'},
        {hz:'می‌خوام برم',tr:'me-khaam baram',nl:'Ik ga (straks)',tip:'Letterlijk "ik wil gaan"'},
        {hz:'زود می‌آم',tr:'zod me-aam',nl:'Ik kom snel',tip:''},
        {hz:'بعداً می‌گم',tr:'baadan me-gam',nl:'Ik zeg het later',tip:''},
        {hz:'ایشالله می‌شه',tr:'ishaallah meshe',nl:'Het zal lukken, inshallah',tip:'Positief toekomstdenken'},
        {hz:'وقتی بیای',tr:'wakhti biyaayi',nl:'Wanneer je komt',tip:'"وقتی" = wanneer (toekomst)'},
        {hz:'تا دیروقت',tr:'taa deerowaqt',nl:'Tot laat',tip:''},
        {hz:'حتماً می‌آم',tr:'hatman me-aam',nl:'Ik kom zeker',tip:'"حتماً" = absoluut'},
      ],
      sentences:[
        {hz:'فردا صبح زود می‌آم، آماده باش',tr:'farda sobh zod me-aam, aamaada baash',nl:'Morgenochtend vroeg kom ik, wees klaar'},
        {hz:'ایشالله همه چیز خوب می‌شه',tr:'ishaallah hama chiz khob meshe',nl:'Inshallah wordt alles goed'},
        {hz:'وقتی بیای بهت می‌گم',tr:'wakhti biyaayi bahat me-gam',nl:'Wanneer je komt vertel ik het je'},
      ]
    },

    { id:'gram4_conditional', title:'Als... dan... (Voorwaarden)', sub:'Conditionals', icon:'🔀', xp:30,
      pronTips:['ر'],
      grammar:'"اگر" (agar) = als. Patroon: "اگر [voorwaarde], [gevolg]". Werkwoord in de als-zin eindigt op "-ی".',
      words:[
        {hz:'اگر',tr:'agar',nl:'Als / Indien',tip:'Staat altijd aan het begin'},
        {hz:'اگر بیای',tr:'agar biyaayi',nl:'Als jij komt',tip:''},
        {hz:'اگر نبود',tr:'agar nabood',nl:'Als het er niet was',tip:''},
        {hz:'وگرنه',tr:'wagarna',nl:'Anders / Zo niet',tip:'"وگرنه" = anders wordt het...'},
        {hz:'حتماً',tr:'hatman',nl:'Zeker / Absoluut',tip:''},
        {hz:'شاید',tr:'shaayad',nl:'Misschien',tip:''},
        {hz:'احتمالاً',tr:'ehtemaalan',nl:'Waarschijnlijk',tip:''},
        {hz:'در صورتی که',tr:'dar sorati ke',nl:'In het geval dat (formeel)',tip:''},
      ],
      sentences:[
        {hz:'اگر بیای، چای می‌پزم',tr:'agar biyaayi, chaay me-pazam',nl:'Als jij komt, zet ik thee'},
        {hz:'اگر پول داشتم، کمکت می‌کردم',tr:'agar pool dashtam, kamaket me-kardam',nl:'Als ik geld had, had ik je geholpen'},
        {hz:'حتماً بیا، وگرنه دلم تنگته',tr:'hatman bia, wagarna delam tangta',nl:'Kom zeker, anders mis ik je'},
      ]
    },
  ]},

  { id:'ch26', label:'🍎 Hoofdstuk 26 · Fruit, Groenten & Markt', color:'#F06C78', lessons:[

    { id:'fruits', title:'Fruit', sub:'Granaatappel, druiven, abrikoos...', icon:'🍎', xp:20,
      pronTips:['آ','ر'],
      grammar:'"انار" = granaatappel — symbool van vruchtbaarheid. Afghanistan is beroemd om zijn fruit.',
      words:[
        {hz:'انار',tr:'anaar',nl:'Granaatappel',tip:'Nationaal fruit — symbool van vruchtbaarheid'},
        {hz:'انگور',tr:'angoor',nl:'Druif',tip:'Afghanistan heeft de zoetste druiven ter wereld'},
        {hz:'زردآلو',tr:'zardaalo',nl:'Abrikoos',tip:'Typisch Afghaans — "gele pruim"'},
        {hz:'توت',tr:'toot',nl:'Moerbei',tip:'Typisch Afghaanse vrucht — gekookt en gedroogd'},
        {hz:'هندوانه',tr:'hendowaana',nl:'Watermeloen',tip:'Groot en zoet in de zomer'},
        {hz:'خربزه',tr:'kharboza',nl:'Meloen',tip:'Kandahari meloenen zijn wereldberoemd'},
        {hz:'آلو',tr:'aalo',nl:'Pruim',tip:''},
        {hz:'سیب',tr:'seb',nl:'Appel',tip:''},
        {hz:'انجیر',tr:'anjeer',nl:'Vijg',tip:'Vijgenbomen groeien in Afghanistan'},
        {hz:'میوه خشک',tr:'mewa-khoshk',nl:'Gedroogd fruit',tip:'Traditioneel Hazara cadeau bij bezoek'},
      ],
      sentences:[
        {hz:'یک کیلو انار می‌خوام',tr:'yak kilo anaar me-khaam',nl:'Ik wil een kilo granaatappelen'},
        {hz:'انگورهای افغانی شیرین‌ترین اَن',tr:'angoorhaayi afghaani shireentareen an',nl:'Afghaanse druiven zijn de zoetste'},
        {hz:'میوه خشک برای مهمان خریدم',tr:'mewa-khoshk baraayi mehman kharidam',nl:'Ik kocht gedroogd fruit voor de gast'},
      ]
    },

    { id:'vegetables', title:'Groenten', sub:'Ui, tomaat, aubergine...', icon:'🥕', xp:20,
      pronTips:['خ'],
      grammar:'"سبزی" = groente én verse kruiden. "بدون پیاز نمی‌شه" = zonder ui gaat het niet.',
      words:[
        {hz:'پیاز',tr:'pyaaz',nl:'Ui',tip:'Basis van ÉLK Afghaans gerecht'},
        {hz:'گوجه فرنگی',tr:'goja-farangi',nl:'Tomaat',tip:'Letterlijk "Europese pruim"'},
        {hz:'بادنجان',tr:'baadanjaan',nl:'Aubergine',tip:'Populair in Afghaanse keuken'},
        {hz:'کدو',tr:'kado',nl:'Pompoen / Courgette',tip:''},
        {hz:'اسفناج',tr:'espanaaj',nl:'Spinazie',tip:''},
        {hz:'سیر',tr:'sir',nl:'Knoflook',tip:'Onmisbaar!'},
        {hz:'کرفس',tr:'karafs',nl:'Selderij',tip:''},
        {hz:'زنجبیل',tr:'zanjabil',nl:'Gember',tip:''},
        {hz:'سبزی',tr:'sabzee',nl:'Verse kruiden / Groente',tip:'Onmisbaar op de Afghaanse tafel'},
        {hz:'ترکاری',tr:'tarkaari',nl:'Groenteschotel',tip:'Typisch Hazara stoofgerecht met groenten'},
      ],
      sentences:[
        {hz:'بدون پیاز و سیر آشپزی نمی‌شه',tr:'bedoon pyaaz o sir aashpazi nemishe',nl:'Koken zonder ui en knoflook kan niet'},
        {hz:'بادنجان با گوشت خیلی خوشمزه می‌شه',tr:'baadanjaan baa gosht khaili khoshmaza meshe',nl:'Aubergine met vlees wordt heel lekker'},
        {hz:'یک دسته سبزی تازه بیار',tr:'yak dasta sabzee taaza biaar',nl:'Breng een bosje verse kruiden'},
      ]
    },

    { id:'market_life', title:'Op de markt', sub:'Wegen, handelen, afrekenen...', icon:'🏪', xp:25,
      pronTips:['خ','ق'],
      grammar:'"چند پول اَس؟" = hoeveel kost het? Handelen op de markt is normaal en verwacht!',
      words:[
        {hz:'وزن کردن',tr:'wazn kardan',nl:'Wegen',tip:''},
        {hz:'ترازو',tr:'tarazo',nl:'Weegschaal',tip:''},
        {hz:'نیم کیلو',tr:'nim kilo',nl:'Half kilo',tip:''},
        {hz:'تازه',tr:'taaza',nl:'Vers',tip:'Altijd vragen of iets vers is!'},
        {hz:'خراب',tr:'khraab',nl:'Bedorven / Kapot',tip:''},
        {hz:'فروشنده',tr:'foroshanda',nl:'Verkoper',tip:''},
        {hz:'خریدار',tr:'kharidaar',nl:'Koper',tip:''},
        {hz:'حساب کردن',tr:'hesaab kardan',nl:'Afrekenen',tip:''},
        {hz:'پس دادن',tr:'pas daadan',nl:'Wisselgeld teruggeven',tip:'"پس" = terug'},
        {hz:'چانه زدن',tr:'chaana zadan',nl:'Afdingen / Onderhandelen',tip:'Normaal en verwacht op de markt!'},
      ],
      sentences:[
        {hz:'این میوه تازه اَس؟ خراب نیس؟',tr:'een mewa taaza as? khraab nis?',nl:'Is dit fruit vers? Is het niet bedorven?'},
        {hz:'دو کیلو وزن کو، حسابم کو',tr:'do kilo wazn ko, hesaabam ko',nl:'Weeg twee kilo, reken me af'},
        {hz:'خیلی گران اَس، کمتر نمی‌شه؟',tr:'khaili geraan as, kamtar nemishe?',nl:'Het is te duur, kan het niet minder?'},
      ]
    },
  ]},

  { id:'ch27', label:'💪 Hoofdstuk 27 · Gezondheid & Welzijn', color:'#F9C3Cb', lessons:[

    { id:'health_doctor', title:'Bij de dokter', sub:'Symptomen, recept, behandeling...', icon:'🏥', xp:35,
      pronTips:['ع','خ'],
      grammar:'"چی دردی داری؟" = wat mankeert je? Letterlijk "welke pijn heb je?" — directe Hazaragi vraag.',
      words:[
        {hz:'نسخه',tr:'neskha',nl:'Recept (dokter)',tip:''},
        {hz:'آزمایش',tr:'aazmaaesh',nl:'Bloedonderzoek / Test',tip:''},
        {hz:'عملیات',tr:'amaliyaat',nl:'Operatie',tip:''},
        {hz:'زخم',tr:'zakhm',nl:'Wond',tip:''},
        {hz:'خون',tr:'khoon',nl:'Bloed',tip:'Lange oo'},
        {hz:'تنفس',tr:'tanafos',nl:'Ademhaling',tip:''},
        {hz:'ضعف',tr:'za\'f',nl:'Zwakte / Duizeligheid',tip:''},
        {hz:'حساسیت',tr:'hassaasiyat',nl:'Allergie',tip:''},
        {hz:'بستری شدن',tr:'bastari shodan',nl:'Opgenomen worden',tip:'"بستری" = in het ziekenhuis'},
        {hz:'مرخص شدن',tr:'markhyas shodan',nl:'Ontslagen worden (ziekenhuis)',tip:''},
      ],
      sentences:[
        {hz:'دکتر نسخه نوشت و آزمایش خواست',tr:'doktor neskha nawesht wa aazmaaesh khawast',nl:'De dokter schreef een recept en vroeg om een bloedonderzoek'},
        {hz:'تبم سی و هشت اَس، حساسیت دارم',tr:'tabam si o hasht as, hassaasiyat daaram',nl:'Mijn koorts is 38, ik heb een allergie'},
        {hz:'الحمدلله از شفاخانه مرخص شدم',tr:'alhamdolillah az shafaakhaana markhyas shodam',nl:'Alhamdulillah ben ik uit het ziekenhuis ontslagen'},
      ]
    },

    { id:'sports_advanced', title:'Sport & Wedstrijden', sub:'Trainen, scoren, winnen...', icon:'⚽', xp:30,
      pronTips:['ر','و'],
      grammar:'"گل زدن" = doelpunt scoren. Letterlijk "bloem slaan" — mooie Hazaragi voetbalterm!',
      words:[
        {hz:'تمرین',tr:'tamrin',nl:'Training / Oefening',tip:''},
        {hz:'مسابقه',tr:'masaabeqa',nl:'Wedstrijd',tip:''},
        {hz:'برنده',tr:'baranda',nl:'Winnaar',tip:''},
        {hz:'بازنده',tr:'baazanda',nl:'Verliezer',tip:''},
        {hz:'گل زدن',tr:'gol zadan',nl:'Doelpunt scoren',tip:'Letterlijk "bloem slaan"'},
        {hz:'برد',tr:'bord',nl:'Winst / Won',tip:''},
        {hz:'باخت',tr:'baakht',nl:'Verlies / Verloor',tip:''},
        {hz:'تیم',tr:'tim',nl:'Team',tip:''},
        {hz:'جام',tr:'jaam',nl:'Beker / Trofee',tip:'"جام جهانی" = WK'},
        {hz:'قهرمانی',tr:'qahremaani',nl:'Kampioenschap',tip:''},
      ],
      sentences:[
        {hz:'تیمم برد، خیلی خوشحالیم!',tr:'teamam bord, khaili khoshaaolim!',nl:'Mijn team heeft gewonnen, we zijn heel blij!'},
        {hz:'هر روز تمرین می‌کنم که قوی بشم',tr:'har roz tamrin me-konam ke qaawi besham',nl:'Elke dag train ik om sterk te worden'},
        {hz:'یک گل زد و قهرمان شد!',tr:'yak gol zad wa qahramaan shod!',nl:'Hij scoorde één doelpunt en werd kampioen!'},
      ]
    },

    { id:'mental_health', title:'Mentale gezondheid & Welzijn', sub:'Stress, rust, steun...', icon:'🧘', xp:35,
      pronTips:['ع','خ'],
      grammar:'"آرامش" = diepe innerlijke rust. Meer dan alleen "آرام" (rustig) — het gaat over welzijn.',
      words:[
        {hz:'آرامش',tr:'aaraamesh',nl:'Innerlijke rust / Kalmte',tip:''},
        {hz:'استرس',tr:'estres',nl:'Stress',tip:'Leenwoord — moderne term'},
        {hz:'نگران',tr:'negaraan',nl:'Bezorgd / Ongerust',tip:''},
        {hz:'تنها',tr:'tanhaa',nl:'Alleen / Eenzaam',tip:''},
        {hz:'حمایت',tr:'hemaayet',nl:'Steun',tip:''},
        {hz:'امیدوار',tr:'omidwaar',nl:'Hoopvol',tip:'"امید" = hoop + "-وار" = hebbend'},
        {hz:'قوی بودن',tr:'qaawi boodan',nl:'Sterk zijn',tip:'"قوی باش" = wees sterk'},
        {hz:'دل پری',tr:'del-pori',nl:'Opgekropte verdriet',tip:'Hazara uitdrukking: "vol hart"'},
        {hz:'خوش خیال',tr:'khosh-khiyaal',nl:'Optimistisch',tip:'"خوش" = goed + "خیال" = gedachten'},
        {hz:'صبر کردن',tr:'sabr kardan',nl:'Geduld hebben',tip:'"صبر تلخ است ولی میوه‌اش شیرین" — klassiek spreekwoord'},
      ],
      sentences:[
        {hz:'نگران نباش، همه چیز درس می‌شه',tr:'negaraan nabaash, hama chiz doros meshe',nl:'Wees niet ongerust, alles komt goed'},
        {hz:'استرس زیاد داری، آرامش لازم اَس',tr:'estres ziyaad daari, aaraamesh laazem as',nl:'Je hebt veel stress, je hebt rust nodig'},
        {hz:'قوی باش، مو پشتتیم',tr:'qaawi baash, mo posht-etim',nl:'Wees sterk, wij staan achter jou'},
      ]
    },
  ]},

];

// ══════════════════════════════════════════════════════
// ACHIEVEMENTS
// ══════════════════════════════════════════════════════
const ACHVS = [
  {id:'first',icon:'🌱',name:'Eerste stap',desc:'Eerste les voltooid!'},
  {id:'streak3',icon:'🔥',name:'3 dagen streak',desc:'3 dagen op rij geleerd'},
  {id:'streak7',icon:'💫',name:'Een week!',desc:'7 dagen op rij — geweldig!'},
  {id:'streak30',icon:'🏅',name:'30 dagen!',desc:'Een maand consistentie!'},
  {id:'words10',icon:'📚',name:'10 woorden',desc:'10 woorden geleerd'},
  {id:'words30',icon:'🌸',name:'30 woorden',desc:'30 woorden geleerd'},
  {id:'words60',icon:'💎',name:'60 woorden',desc:'Echt gevorderd!'},
  {id:'words100',icon:'🌟',name:'100 woorden',desc:'100 woorden — ongelofelijk!'},
  {id:'xp100',icon:'⭐',name:'100 XP',desc:'100 XP verzameld'},
  {id:'xp500',icon:'🏆',name:'500 XP',desc:'Echt gedreven!'},
  {id:'xp1000',icon:'👑',name:'1000 XP',desc:'Expert niveau!'},
  {id:'perfect',icon:'✨',name:'Foutloos!',desc:'Les zonder fouten afgemaakt'},
  {id:'ch14',icon:'🌐',name:'Landen',desc:'Hoofdstuk 14 gestart'},
  {id:'ch15',icon:'💼',name:'Beroepen',desc:'Hoofdstuk 15 gestart'},
  {id:'ch_gram1',icon:'📖',name:'Grammatica 1',desc:'Eerste grammaticales voltooid!'},
  {id:'ch_gram2',icon:'📝',name:'Grammatica 2',desc:'Werkwoorden geleerd!'},
  {id:'ch_gram3',icon:'🔬',name:'Grammatica 3',desc:'Gevorderde grammatica!'},
  {id:'ch11',icon:'🌆',name:'Stad & Vervoer',desc:'Hoofdstuk 11 gestart'},
  {id:'ch12',icon:'💻',name:'Technologie',desc:'Hoofdstuk 12 gestart'},
  {id:'ch13',icon:'🌍',name:'Diaspora',desc:'Hoofdstuk 13 gestart'},
  {id:'ch16',icon:'🌿',name:'Natuur & Seizoenen',desc:'Hoofdstuk 16 gestart'},
  {id:'ch17',icon:'💊',name:'Gezondheid',desc:'Hoofdstuk 17 gestart'},
  {id:'ch18',icon:'🎭',name:'Cultuur & Tradities',desc:'Hoofdstuk 18 gestart'},
  {id:'ch19',icon:'🍎',name:'Eten & Keuken',desc:'Hoofdstuk 19 gestart'},
  {id:'ch20',icon:'💭',name:'Gevoelens',desc:'Hoofdstuk 20 gestart'},
  {id:'ch2',icon:'🏡',name:'Hoofdstuk 2',desc:'Familie & Thuis gestart'},
  {id:'ch3',icon:'💕',name:'Hoofdstuk 3',desc:'Gevoel & Dagelijks gestart'},
  {id:'ch4',icon:'💬',name:'Hoofdstuk 4',desc:'Conversatie gestart'},
  {id:'ch5',icon:'🌟',name:'Hoofdstuk 5',desc:'Cultuur & Slang bereikt'},
  {id:'ch6',icon:'💎',name:'Hoofdstuk 6',desc:'Gevorderd niveau!'},
  {id:'ch7',icon:'🌿',name:'Hoofdstuk 7',desc:'Gezondheid & Sport'},
  {id:'ch8',icon:'✈️',name:'Hoofdstuk 8',desc:'Reizen & Werk'},
  {id:'ch9',icon:'🎉',name:'Hoofdstuk 9',desc:'Feest & Religie'},
  {id:'ch10',icon:'👑',name:'Expert!',desc:'Hoofdstuk 10 gestart — jij bent expert!'},
  {id:'ch21',icon:'🔢',name:'Cijfers & Tijd',desc:'Hoofdstuk 21 gestart'},
  {id:'ch22',icon:'👗',name:'Kleding & Uiterlijk',desc:'Hoofdstuk 22 gestart'},
  {id:'ch23',icon:'🏠',name:'Huis & Dagelijks Leven',desc:'Hoofdstuk 23 gestart'},
  {id:'ch24',icon:'🌾',name:'Landbouw & Natuur',desc:'Hoofdstuk 24 gestart'},
  {id:'ch25',icon:'✍️',name:'Verhalen & Poëzie',desc:'Hoofdstuk 25 gestart'},
  {id:'ch_gram4',icon:'📖',name:'Grammatica 4',desc:'Modale werkwoorden geleerd!'},
  {id:'ch26',icon:'🍎',name:'Fruit & Markt',desc:'Hoofdstuk 26 gestart'},
  {id:'ch27',icon:'💪',name:'Gezondheid & Welzijn',desc:'Hoofdstuk 27 gestart'},
  {id:'words200',icon:'🌺',name:'200 woorden!',desc:'200 woorden geleerd — indrukwekkend!'},
  {id:'words300',icon:'🏔️',name:'300 woorden!',desc:'300 woorden — bijna vloeiend!'},
  {id:'xp2000',icon:'💫',name:'2000 XP',desc:'Meester van het Hazaragi!'},
];