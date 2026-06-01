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
        {hz:'خداحافظ',tr:'khodaahaafeZ',nl:'Dag / Tot ziens',tip:'"خدا" = God, "حافظ" = bewaker: "God behoede je"'},
        {hz:'خوبی؟',tr:'khobi?',nl:'Hoe gaat het?',tip:'Informele dagelijkse vraag'},
        {hz:'خوبم',tr:'khobam',nl:'Ik ben goed',tip:'"خوب" = goed + "-م" = ik ben'},
        {hz:'ممنون',tr:'mamnoon',nl:'Dank je',tip:'Standaard bedanking'},
        {hz:'بله',tr:'bala',nl:'Ja',tip:'Hazaragi: "bala" — anders dan Farsi "bale"'},
        {hz:'نه',tr:'na',nl:'Nee',tip:'Kort en duidelijk'},
        {hz:'لطفاً',tr:'lotfan',nl:'Alsjeblieft',tip:'Beleefd verzoek'},
      ],
      sentences:[
        {hz:'سلام، خوبی؟',tr:'salaam, khobi?',nl:'Hallo, hoe gaat het?'},
        {hz:'ممنون، خوبم',tr:'mamnoon, khobam',nl:'Dank je, ik ben goed'},
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
        {hz:'چطوری؟',tr:'chetori?',nl:'Hoe is het? (informeel)',tip:'Nog informeler dan "خوبی؟"'},
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

  { id:'ch2', label:'🏡 Hoofdstuk 2 · Thuis & Familie', color:'#FF8C61', lessons:[

    { id:'family', title:'Familie', sub:'Mama, papa, broer...', icon:'👨‍👩‍👧', xp:20,
      pronTips:['ر','خ'],
      grammar:'Hazaragi gebruikt "باوا" (baawaa) voor vader — een Mongolisch leenwoord! Farsi zegt "باباا" (baabaa).',
      words:[
        {hz:'مادر',tr:'maadar',nl:'Moeder',tip:'Formeel — ook "خانم" (khaanom) informeel'},
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
        {hz:'دست',tr:'dast',nl:'Hand / Arm',tip:'"دستت درد نکنه" = bedankt voor je moeite'},
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
        {hz:'قوی',tr:'ghawi',nl:'Sterk',tip:''},
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
        {hz:'نمی‌تونم بی‌تو باشم',tr:'nemi-tonam bi-to baasham',nl:'Ik kan niet zonder jou',tip:''},
        {hz:'رویا',tr:'roya',nl:'Droom / Lieveling',tip:''},
      ],
      sentences:[
        {hz:'یارم، دلم تنگته برات',tr:'yaaram, delam tangta baraat',nl:'Lieverd, ik mis je zo'},
        {hz:'از وختی دیدمت دلم لرزید',tr:'az wakhti didamat delam larzid',nl:'Vanaf het moment dat ik je zag klopte mijn hart'},
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
        {hz:'تختخوان',tr:'takhtakhwaan',nl:'Schoolbord',tip:''},
      ],
      sentences:[
        {hz:'امروز امتحان دارم',tr:'emroz emtehaan daaram',nl:'Vandaag heb ik een toets'},
        {hz:'معلمم خیلی خوب اَس',tr:'mo\'alemam khaili khob as',nl:'Mijn leraar is heel goed'},
        {hz:'سبقم را خواندم',tr:'sabaqam ra khwaadam',nl:'Ik heb mijn huiswerk gedaan'},
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
        {hz:'سرماخوردگی',tr:'sarmaakhordagi',nl:'Verkoudheid',tip:''},
        {hz:'شفا',tr:'shafaa',nl:'Genezing',tip:''},
        {hz:'تندرست',tr:'tandorost',nl:'Gezond',tip:''},
        {hz:'استراحت',tr:'estaraahat',nl:'Rust',tip:''},
        {hz:'زخم',tr:'zakhm',nl:'Wond / Blessure',tip:''},
      ],
      sentences:[
        {hz:'مریض استم، دوا خریدم',tr:'mariz astam, dawaa kharidim',nl:'Ik ben ziek, ik heb medicijn gekocht'},
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
  {id:'ch2',icon:'🏡',name:'Hoofdstuk 2',desc:'Familie & Thuis gestart'},
  {id:'ch3',icon:'💕',name:'Hoofdstuk 3',desc:'Gevoel & Dagelijks gestart'},
  {id:'ch4',icon:'💬',name:'Hoofdstuk 4',desc:'Conversatie gestart'},
  {id:'ch5',icon:'🌟',name:'Hoofdstuk 5',desc:'Cultuur & Slang bereikt'},
  {id:'ch6',icon:'💎',name:'Hoofdstuk 6',desc:'Gevorderd niveau!'},
  {id:'ch7',icon:'🌿',name:'Hoofdstuk 7',desc:'Gezondheid & Sport'},
  {id:'ch8',icon:'✈️',name:'Hoofdstuk 8',desc:'Reizen & Werk'},
  {id:'ch9',icon:'🎉',name:'Hoofdstuk 9',desc:'Feest & Religie'},
  {id:'ch10',icon:'👑',name:'Expert!',desc:'Hoofdstuk 10 gestart — jij bent expert!'},
];