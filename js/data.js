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
  '<strong>Hazaragi:</strong> Hazaragi heeft unieke Mongoolse & Turkse woorden — jij leert de <em>echte</em> taal!',
  '<strong>Uitspraak:</strong> Hazaragi heeft retroflexe klanken (tongtip omhoog) — uniek voor deze taal!',
  '<strong>Tip:</strong> Elke dag even leren is beter dan 1x per week lang leren. Consistentie wint!',
];

// ═════════════════════════════════════════════════════
// LESMATERIAAL
// ══════════════════════════════════════════════════════
const CHAPTERS=[

  { id:'ch1', label:'🌸 Hoofdstuk 1 · Eerste woorden', color:'#FF6B9D', lessons:[

    { id:'greet1', title:'Begroetingen', sub:'Hoi, dag, hoe gaat het', icon:'👋', xp:10,
      pronTips:['خ','ع'],
      grammar:'In Hazaragi zeg je "اس" (as) voor "is".',
      words:[
        {hz:'سلام',tr:'salaam',nl:'Hallo / Hoi',tip:'Universele begroeting — altijd goed!'},
        {hz:'خداحافظ',tr:'khodaahaafez',nl:'Dag / Tot ziens',tip:'"خدا" = God, "حافظ" = bewaker: "God behoede je"'},
        {hz:'خوبی؟',tr:'khobi?',nl:'Hoe gaat het?',tip:'Informele dagelijkse vraag'},
        {hz:'خوبم',tr:'khobom',nl:'Ik ben goed',tip:'"خوب" = goed + "-م" → Hazaragi: -om'},
        {hz:'تشکر',tr:'tashakor',nl:'Dank je',tip:'Typisch Hazaragi'},
        {hz:'بله',tr:'bale',nl:'Ja',tip:'Uitgesproken als "bale"'},
        {hz:'نه',tr:'na',nl:'Nee',tip:'Kort en duidelijk'},
        {hz:'لطفاً',tr:'lotfan',nl:'Alsjeblieft',tip:'Beleefd verzoek'},
        {hz:'ببخشید',tr:'bebakhshid',nl:'Pardon / Neem me niet kwalijk',tip:'Om aandacht vragen of verontschuldigen'},
        {hz:'معذرت',tr:'ma\'zerat',nl:'Sorry / Excuses',tip:'"معذرت می‌خوام" = het spijt me'},
        {hz:'خوش وقتم',tr:'khosh waqtam',nl:'Aangenaam kennis te maken',tip:'Bij een eerste ontmoeting'},
        {hz:'قابل نداشت',tr:'qaabil nadaasht',nl:'Graag gedaan / Geen probleem',tip:'Hazaragi antwoord op "تشکر" — letterlijk: "het had geen waarde" (hoeft niet bedankt)'},
        {hz:'خوب نیستم',tr:'khob nistom',nl:'Ik ben niet goed / Ik voel me niet goed',tip:'Eerlijk antwoord op "خوبی؟"'},
        {hz:'خدا خیرت بده',tr:'khuda khayret bada',nl:'Hartelijk bedankt',tip:'Typisch Hazaragi/Afghaans: God vergelde het je — warmer dan "تشکر"'},
        {hz:'نامم',tr:'naamam',nl:'Mijn naam',tip:'"نام" + "-م" = bezit: mijn naam — essentieel om jezelf voor te stellen'},
      ],
      sentences:[
        {hz:'سلام، خوبی؟',tr:'salaam, khobi?',nl:'Hallo, hoe gaat het?'},
        {hz:'تشکر، خوبم',tr:'tashakor, khobom',nl:'Dank je, ik ben goed'},
        {hz:'نام‌م گل اَس',tr:'naamam gol as',nl:'Mijn naam is Gol',tip:'Hazaragi: "اَس" = is (niet "است")'},
        {hz:'ببخشید، خوب نیستم',tr:'bebakhshid, khob nistom',nl:'Sorry, ik voel me niet goed'},
        {hz:'خدا خیرت بده، تشکر',tr:'khuda khayret bada, tashakor',nl:'God vergelde het je, bedankt'},
      ]
    },

    { id:'greet2', title:'Meer begroetingen', sub:'Goedemorgen, welkom!', icon:'☀️', xp:15,
      pronTips:['خ','آ'],
      grammar:'Hazaragi gebruikt "خوش" (khosh) breed: blij, lekker, fijn, mooi — leer de context!',
      words:[
        {hz:'صبح بخیر',tr:'sobh bakhair',nl:'Goedemorgen',tip:'Gebruik dit tot de middag'},
        {hz:'شب بخیر',tr:'shab bakhair',nl:'Goedenacht',tip:'Zeg dit bij het slapengaan'},
        {hz:'خوش آمدید',tr:'khosh aamadid',nl:'Welkom (formeel)',tip:'Hazaragi: "aamadid"'},
        {hz:'بفرمایین',tr:'befarmaayin',nl:'Alsjeblieft / Kom binnen',tip:'Hazaragi meervoud/beleefd: "-ین" ipv "-ید"'},
        {hz:'مشکلی نیس',tr:'moshkeli nis',nl:'Geen probleem',tip:'Hazaragi: "نیس" (nis) ipv "نیست" (nist)'},
        {hz:'باز می‌بینیم',tr:'baaz me-binim',nl:'Tot ziens',tip:'"باز" = opnieuw, "می‌بینیم" = we zien'},
        {hz:'چتوری؟',tr:'chetoori?',nl:'Hoe is het? (informeel)',tip:'Typisch Hazaragi uitspraak'},
        {hz:'ایشالله',tr:'ishaallah',nl:'Hopelijk / Inshallah',tip:'Hazaragi uitspraak: "isha" (niet "insha")'},
        {hz:'قابلی نداره',tr:'qaabeli naadaara',nl:'Graag gedaan / Het stelt niets voor',tip:'Bescheiden antwoord op dankbaarheid'},
        {hz:'مراقب باش',tr:'muraaqeb baash',nl:'Pas op jezelf',tip:'Zorgzame afsluiting van een gesprek'},
        {hz:'خوش بگذره',tr:'khosh bogzara',nl:'Veel plezier / Geniet ervan',tip:'Wens iemand een fijne tijd'},
        {hz:'در امان خدا',tr:'dar amaan-e khoda',nl:'Vaarwel — God zij met je',tip:'Traditionele/formele afscheid'},
        {hz:'نوبت تو اَس',tr:'nowbat-e tu as',nl:'Het is jouw beurt',tip:'"نوبت" = beurt — ook: afspraak'},
        {hz:'زود باش',tr:'zud baash',nl:'Schiet op / Vlug',tip:'Vriendelijke aansporing'},
      ],
      sentences:[
        {hz:'صبح بخیر، خوش آمدید!',tr:'sobh bakhair, khosh aamadid!',nl:'Goedemorgen, welkom!'},
        {hz:'بفرمایین، چای بیارم؟',tr:'befarmaayin, chaay biyaarom?',nl:'Kom binnen, zal ik thee brengen?'},
        {hz:'مشکلی نیس، باز می‌بینیم',tr:'moshkeli nis, baaz me-binim',nl:'Geen probleem, tot ziens'},
        {hz:'مراقب باش، شب بخیر',tr:'muraaqeb baash, shab bakhair',nl:'Pas op jezelf, goedenacht'},
        {hz:'زود باش، دیر شده',tr:'zud baash, der shoda',nl:'Schiet op, het is laat geworden'},
      ]
    },

    { id:'numbers', title:'Cijfers 1–10', sub:'Tellen in Hazaragi', icon:'🔢', xp:20,
      pronTips:['ر'],
      grammar:'Let op: "نه" (naw = 9), "ده" (da = 10) — spreek ze Hazaragi uit!',
      words:[
        {hz:'یک',tr:'yak',nl:'Één',tip:'Hazaragi: "yak" — korte klinker (niet "yek" zoals sommige Dari-sprekers)'},
        {hz:'دو',tr:'do',nl:'Twee',tip:'"دو تا" = twee stuks — "تا" als telwoord voor voorwerpen'},
        {hz:'سه',tr:'se',nl:'Drie',tip:'Spreek uit als "seh"'},
        {hz:'چار',tr:'chaar',nl:'Vier',tip:'Hazaragi: "chaar"'},
        {hz:'پنج',tr:'panj',nl:'Vijf',tip:'"پنج وقت نماز" = vijf gebedstijden — getal met religieuze betekenis'},
        {hz:'شش',tr:'shash',nl:'Zes',tip:'Hazaragi: "shash"'},
        {hz:'هفت',tr:'haft',nl:'Zeven',tip:'"هفت روز" = zeven dagen — een week'},
        {hz:'هشت',tr:'hasht',nl:'Acht',tip:'Hazaragi: klinkt hetzelfde als Dari'},
        {hz:'نه',tr:'naw',nl:'Negen',tip:'Hazaragi: "naw" — let op: "نه" is ook "nee"! Context bepaalt de betekenis'},
        {hz:'ده',tr:'da',nl:'Tien',tip:'Hazaragi: "da"'},
      ],
      sentences:[
        {hz:'یک چای بیار',tr:'yak chaay biaar',nl:'Breng één thee'},
        {hz:'مو پنج نفر هستیم',tr:'mo panj nafar hastim',nl:'Wij zijn met vijf personen',tip:'"مو" = wij (Hazaragi)'},
        {hz:'ده روز دیگه',tr:'da roz diga',nl:'Nog tien dagen',tip:'"دیگه" = nog/meer (Hazaragi uitspraak)'},
      ]
    },

    { id:'colors', title:'Kleuren', sub:'Rood, blauw, groen...', icon:'🎨', xp:20,
      pronTips:['ر','خ'],
      grammar:'Hazaragi: "سرخ" (sorkh = rood). Hazaragi bewaart het oudere Perzische woord!',
      words:[
        {hz:'سرخ',tr:'sorkh',nl:'Rood',tip:'Hazaragi/oud Perzisch woord'},
        {hz:'آبی',tr:'aabi',nl:'Blauw',tip:'Lange "aa" aan het begin'},
        {hz:'سبز',tr:'sabz',nl:'Groen',tip:'"سبز شو" = kom tot bloei — ook figuurlijk in Hazaragi wensen'},
        {hz:'سفید',tr:'safaid',nl:'Wit',tip:'Hazaragi: "safaid"'},
        {hz:'سیا',tr:'siya',nl:'Zwart',tip:'Hazaragi: "سیا" (siya)'},
        {hz:'زرد',tr:'zard',nl:'Geel',tip:'"زرد" ook in "زردچوبه" = kurkuma (letterlijk: geel-hout)'},
        {hz:'گلابی',tr:'gulaabi',nl:'Roze',tip:'Letterlijk "roos-kleurig" — Afghaans/Hazaragi, niet Iraans "صورتی"'},
        {hz:'بنفش',tr:'banafsh',nl:'Paars',tip:'Ook de naam van de plant "banafsha" = viooltje'},
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
      grammar:'Hazaragi gebruikt "باوا" (baawaa) voor vader — een Mongolisch leenwoord!',
      words:[
        {hz:'مادر',tr:'maadar',nl:'Moeder',tip:'Formeel — liefkoosnaam: "مادرجان" of "ننه" (nana)'},
        {hz:'باوا',tr:'baawaa',nl:'Vader',tip:'Hazaragi/Mongools leenwoord'},
        {hz:'برار',tr:'baraar',nl:'Broer',tip:'Typisch Hazaragi'},
        {hz:'خواهر',tr:'khwahar',nl:'Zus',tip:'"خ" = zachte keel-g'},
        {hz:'بچه',tr:'bacha',nl:'Kind',tip:'Geliefd woord — ook als liefkoosnaam'},
        {hz:'دوست',tr:'dost',nl:'Vriend/Vriendin',tip:'"دوستت دارم" = ik hou van jou — zeg je ook gewoon tegen goede vrienden'},
        {hz:'مادرکلان',tr:'maadarkalan',nl:'Oma',tip:'Hazaragi: "kalan" = groot (Mongools: "katan")'},
        {hz:'باواکلان',tr:'baawakalan',nl:'Opa',tip:'Letterlijk: "grote vader" — typisch Hazaragi'},
        {hz:'عمه',tr:'ama',nl:'Tante (vaders zus)',tip:'Vaders kant van de familie — "عمه جان" = lieve tante'},
        {hz:'خاله',tr:'khaala',nl:'Tante (moeders zus)',tip:'Moeders kant — "خاله‌ام" = mijn tante; een warm woord in Hazaragi families'},
        {hz:'کاکا',tr:'kaakaa',nl:'Oom (vaders broer)',tip:'Mongools leenwoord in Hazaragi'},
        {hz:'مامو',tr:'maamoo',nl:'Oom (moeders broer)',tip:'Moeders broer — "مامو جان" = lieve oom; belangrijk onderscheid in Hazara familie'},
      ],
      sentences:[
        {hz:'مادرم خیلی مهربان اَس',tr:'maadaram khaili mehrabaan as',nl:'Mijn moeder is erg lief'},
        {hz:'برارم ده سال داره',tr:'baraaram da saal daara',nl:'Mijn broer is tien jaar',tip:'"داره" = heeft (Hazaragi)'},
        {hz:'باواکلانم قصه می‌گفت',tr:'baawakalanam qessa megoft',nl:'Mijn opa vertelde verhalen'},
        {hz:'خواهرم دَ مکتب درس می‌خوانه',tr:'khwaahoram da maktab dars mi-khwaana',nl:'Mijn zus studeert op school'},
        {hz:'خانواده مو کلان اَس',tr:'khaanwaada-ye mo kalaan as',nl:'Onze familie is groot'},
      ]
    },

    { id:'food', title:'Eten & Drinken', sub:'Chai, naan, bolani...', icon:'🍵', xp:20,
      pronTips:['خ','ر'],
      grammar:'Hazaragi voedselwoorden zijn deels uniek: "قروتی" (qoroti = gedroogde yoghurt) is typisch Hazara.',
      words:[
        {hz:'چای',tr:'chaay',nl:'Thee',tip:'Altijd met gast serveren — cultureel essentieel!'},
        {hz:'نان',tr:'naan',nl:'Brood',tip:'Plat brood, basisvoedsel'},
        {hz:'آو',tr:'aaw',nl:'Water',tip:'Hazaragi: "آو" (aaw)'},
        {hz:'گوشت',tr:'gosht',nl:'Vlees',tip:'"گوشت گوسفند" = schapenvlees — meest gegeten vlees bij Hazara'},
        {hz:'برنج',tr:'berenj',nl:'Rijst',tip:'Basis van قابلی — het nationale Afghaanse gerecht'},
        {hz:'میوه',tr:'mewa',nl:'Fruit',tip:'"میوه" in Hazaragi klinkt als "mewa" — korte e'},
        {hz:'خوشمزه',tr:'khoshmaza',nl:'Lekker',tip:'"خوش" = goed, "مزه" = smaak'},
        {hz:'تشنه',tr:'toshna',nl:'Dorstig',tip:'"آو می‌خوام، تشنه‌ام" = ik wil water, ik heb dorst — merk "آو" (Hazaragi voor water)'},
        {hz:'گشنه',tr:'goshna',nl:'Hongerig',tip:'Hazaragi uitspraak van "گرسنه"'},
        {hz:'بولانی',tr:'bolaani',nl:'Bolani (gevulde pastei)',tip:'Traditioneel Hazara gerecht!'},
        {hz:'قروتی',tr:'qoroti',nl:'Gedroogde yoghurt',tip:'Typisch Hazara — in water opgelost gegeten'},
        {hz:'آش',tr:'aash',nl:'Soep/Stoofpot',tip:'Dikke maaltijdsoep, basis Hazara keuken'},
      ],
      sentences:[
        {hz:'یک چای بریز، لطفاً',tr:'yak chaay beriz, lotfan',nl:'Schenk een thee in, alsjeblieft'},
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
        {hz:'آشپزخانه',tr:'aashpazkhaana',nl:'Keuken',tip:'Letterlijk: "kookhuis"'},
        {hz:'دروازه',tr:'darwaaza',nl:'Deur (groot)',tip:'Hazaragi: "darwaaza"'},
        {hz:'کلکین',tr:'kalkin',nl:'Raam',tip:'Hazaragi: "کلکین" — niet Iraans "پنجره"'},
        {hz:'تخت',tr:'takht',nl:'Bed',tip:'"روی تخت" = op bed; "تخت" ook voor troon of platform'},
        {hz:'چوکی',tr:'chawki',nl:'Stoel',tip:'Hazaragi/Afghaans: "چوکی" — niet Iraans "صندلی"'},
        {hz:'میز',tr:'mez',nl:'Tafel',tip:'"سر میز" = aan tafel — "سر" hier = bovenop/bij'},
        {hz:'حویلی',tr:'haweli',nl:'Binnenplaats / Erf',tip:'Typisch Afghaans/Hazara huis heeft een "حویلی"'},
        {hz:'بام',tr:'baam',nl:'Dak',tip:'Hazara-huizen hebben platte daken — sociaal treffpunt'},
      ],
      sentences:[
        {hz:'خانمو دو اتاق داره',tr:'khaanamao do otaaq daara',nl:'Ons huis heeft twee kamers'},
        {hz:'دروازه باز اَس',tr:'darwaaza baaz as',nl:'De deur is open'},
        {hz:'حویلی گوشکیل اَس',tr:'haweli goshkil as',nl:'De binnenplaats is mooi'},
      ]
    },

    { id:'animals', title:'Dieren', sub:'Schapen, ezel, vogels...', icon:'🐑', xp:20,
      pronTips:['ر','خ'],
      grammar:'Hazaragi heeft veel woorden voor dieren die in de bergstreek leven — essentieel voor de nomadische Hazara cultuur.',
      words:[
        {hz:'گوسفند',tr:'gosfand',nl:'Schaap',tip:'Belangrijk — de Hazara zijn herders'},
        {hz:'گاو',tr:'gaaw',nl:'Koe',tip:'Hazaragi: lange "aa"'},
        {hz:'اسپ',tr:'asp',nl:'Paard',tip:'Hazaragi: "اسپ"'},
        {hz:'خر',tr:'khar',nl:'Ezel',tip:'Belangrijk werkanimal in Afghanistan'},
        {hz:'مرغ',tr:'murgh',nl:'Kip',tip:'"مرغ" = ook vogel in het algemeen — "مرغ پخته" = gekookte kip'},
        {hz:'سگ',tr:'sag',nl:'Hond',tip:'In Hazara/Afghaanse cultuur wordt hond als onrein beschouwd — "سگ!" als scheldwoord'},
        {hz:'پشک',tr:'pishak',nl:'Kat',tip:'Hazaragi: "پشک" — niet Iraans "گربه"'},
        {hz:'پرنده',tr:'paranda',nl:'Vogel',tip:'"پرنده" = vliegend ding'},
      ],
      sentences:[
        {hz:'صد گوسفند داریم',tr:'sad gosfand darim',nl:'We hebben honderd schapen'},
        {hz:'اسپش خیلی تند می‌ره',tr:'aspash khaili tond meré',nl:'Zijn paard gaat heel snel'},
        {hz:'پشک شیر می‌خوره',tr:'pishak shir mi-khora',nl:'De kat drinkt melk'},
        {hz:'مرغ‌ها هر روز تخم میته',tr:'murghaa har rooz tukhm meeta',nl:'De kippen leggen elke dag eieren'},
        {hz:'سگ دَ دروازه پهره می‌ده',tr:'sag da darwaaza pahra mi-da',nl:'De hond bewaakt bij de deur'},
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
        {hz:'خسته',tr:'khasta',nl:'Moe',tip:'"خسته نباشی" = Hazaragi voor "goed werk!" — letterlijk "moge je niet moe zijn"'},
        {hz:'خوشحال',tr:'khoshhaal',nl:'Vrolijk',tip:'"خوش" = goed + "حال" = toestand'},
        {hz:'عاشق',tr:'aasheq',nl:'Verliefd',tip:'"ع" = zachte keel-stop'},
        {hz:'دل‌تنگی',tr:'deltangi',nl:'Gemis / Verlangen',tip:'Prachtig woord: "nauw hart" — typisch Hazaragi uitdrukking'},
        {hz:'ترس',tr:'tars',nl:'Angst',tip:'"ترسیدم" = ik schrok / werd bang — verleden tijd'},
        {hz:'خفا',tr:'khafaa',nl:'Boos',tip:'Hazaragi: "خفا" — "خفا شدم" = ik werd boos — "خفا نشو" = word niet boos'},
        {hz:'دوستت دارم',tr:'dostat darom',nl:'Ik hou van jou',tip:'Zeg ook tegen familie en vrienden!'},
        {hz:'دلم تنگته',tr:'delam tangta',nl:'Ik mis je',tip:'Hazaragi uitdrukking — letterlijk "mijn hart is nauw naar jou"'},
        {hz:'شرمنده',tr:'sharmanda',nl:'Beschaamd / Sorry',tip:'"شرم" = schaamte — zachter dan "معذرت"'},
      ],
      sentences:[
        {hz:'امروز خیلی خوشحالم',tr:'emroz khaili khoshhaalom',nl:'Vandaag ben ik heel blij'},
        {hz:'چرا غمگین هستی؟',tr:'chera ghamgeen hasti?',nl:'Waarom ben je verdrietig?'},
        {hz:'دلم تنگته، کجایی؟',tr:'delam tangta, kojayi?',nl:'Ik mis je, waar ben je?'},
      ]
    },

    { id:'daily', title:'Dagelijks leven', sub:'Werk, tijd, geld...', icon:'📅', xp:25,
      pronTips:['ر','و'],
      grammar:'Hazaragi werkwoorden: "می‌ره" (gaat), "می‌گه" (zegt), "می‌خوره" (eet) — kort en krachtig!',
      words:[
        {hz:'کار',tr:'kaar',nl:'Werk',tip:'"کار می‌کنم" = ik werk — "کار دارم" = ik heb het druk'},
        {hz:'وخت',tr:'wakht',nl:'Tijd',tip:'Hazaragi: "وخت" (wakht)'},
        {hz:'پول',tr:'pool',nl:'Geld',tip:'Lange "oo" klank'},
        {hz:'بازار',tr:'baazaar',nl:'Markt',tip:'Het hart van Afghaans stadsleven — "دَ بازار رفتم" = ik ging naar de markt'},
        {hz:'موبایل',tr:'mobaayel',nl:'Telefoon',tip:'Leenwoord van "mobile"'},
        {hz:'امروز',tr:'emroz',nl:'Vandaag',tip:'Hazaragi: "emroz" — Dari ook "emruz" maar Hazaragi: korte u'},
        {hz:'فردا',tr:'fardaa',nl:'Morgen',tip:'"فردا می‌آم" = ik kom morgen — in Hazaragi cultuur flexibel tijdsbegrip!'},
        {hz:'دیروز',tr:'diroz',nl:'Gisteren',tip:'Hazaragi: "diroz" — let op: korte i'},
        {hz:'حالی',tr:'haali',nl:'Nu / Op dit moment',tip:'Hazaragi: "haali"'},
        {hz:'بعد',tr:'ba\'d',nl:'Later / Daarna',tip:'"بعداً می‌آم" = ik kom later — "بعد از" = na (tijdsaanduiding)'},
      ],
      sentences:[
        {hz:'امروز کار دارم',tr:'emroz kaar darom',nl:'Vandaag heb ik werk'},
        {hz:'فردا بازار می‌ریم',tr:'fardaa baazaar me-rim',nl:'Morgen gaan we naar de markt'},
        {hz:'وخت نداری؟',tr:'wakht naadaari?',nl:'Heb je geen tijd?'},
      ]
    },

    { id:'weather', title:'Weer & Seizoenen', sub:'Warm, koud, sneeuw...', icon:'🌤️', xp:25,
      pronTips:['آ'],
      grammar:'Hazaragi gebruikt "هوا" (hawaa) voor weer/lucht.',
      words:[
        {hz:'هوا',tr:'hawaa',nl:'Weer / Lucht',tip:'"هوا خوش اَس" = het weer is mooi — ook: "هوای تو دارم" = ik denk aan jou (figuurlijk)'},
        {hz:'گرم',tr:'garm',nl:'Warm',tip:'"گرم" ook voor hartelijkheid: "خوش‌آمدید، گرم باش" = welkom, wees warm (vriendelijk)'},
        {hz:'سرد',tr:'sard',nl:'Koud',tip:'"سرد" ook voor koel karakter: "سرد بود" = hij/zij was koel/afstandelijk'},
        {hz:'باران',tr:'baaraan',nl:'Regen',tip:'"باران رحمت اَس" = regen is genade — religieuze uitdrukking in Hazaragi'},
        {hz:'برف',tr:'barf',nl:'Sneeuw',tip:'Veel sneeuw in Hazarajat'},
        {hz:'آفتاب',tr:'aaftaab',nl:'Zon',tip:'"آفتاب" ook voor warmte en geluk: "آفتاب زندگیم" = de zon van mijn leven'},
        {hz:'زمستان',tr:'zemestaan',nl:'Winter',tip:'In Hazarajat extreem koud'},
        {hz:'تابستان',tr:'taabestaan',nl:'Zomer',tip:'Hazarajat: hete droge zomers, cruciale oogstperiode'},
        {hz:'بهار',tr:'bahaar',nl:'Lente',tip:'"بهار" ook voor nieuw begin — Nowruz (Naw Ruz) = Afghaans Nieuwjaar in de lente'},
        {hz:'خزان',tr:'khazaan',nl:'Herfst',tip:'Hazaragi: "خزان"'},
      ],
      sentences:[
        {hz:'امروز هوا گرم اَس',tr:'emroz hawaa garm as',nl:'Vandaag is het weer warm'},
        {hz:'زمستان اَس، خیلی سرد اَس',tr:'zemestaan as, khaili sard as',nl:'Het is winter, het is erg koud'},
        {hz:'بهار آمد، هوا خوش شد',tr:'bahaar aamad, hawaa khosh shod',nl:'De lente is gekomen, het weer is mooi geworden'},
      ]
    },

    { id:'body', title:'Het Lichaam', sub:'Hoofd, hand, hart...', icon:'🫀', xp:25,
      pronTips:['ع','خ'],
      grammar:'In Hazaragi is "دهن" (dahan = mond) gebruikelijker dan "دهان" — kortere vormen zijn typisch!',
      words:[
        {hz:'سر',tr:'sar',nl:'Hoofd',tip:'"سردرد دارم" = ik heb hoofdpijn — "سر" ook voor bovenaan/begin'},
        {hz:'چشم',tr:'chashm',nl:'Oog',tip:'"چشم" = ook: "ja met plezier"'},
        {hz:'دهن',tr:'dahan',nl:'Mond',tip:'Hazaragi: "دهن" (dahan) — "دهنت را ببند!" = hou je mond!'},
        {hz:'دست',tr:'dast',nl:'Hand / Arm',tip:'"دستت درد نکنه" = bedankt voor je moeite'},
        {hz:'پا',tr:'paa',nl:'Voet / Been',tip:'"پادرد دارم" = ik heb pijn aan mijn been'},
        {hz:'دل',tr:'del',nl:'Hart / Gevoel',tip:'"دل" is het emotiecentrum in Hazaragi!'},
        {hz:'شکم',tr:'shekam',nl:'Buik',tip:'"شکمم درد می‌کنه" = mijn buik doet pijn'},
        {hz:'کمر',tr:'kamar',nl:'Rug / Taille',tip:'"کمردرد" = rugpijn — frequent bij zwaar werk'},
        {hz:'گوش',tr:'gosh',nl:'Oor',tip:'"گوش کو" = luister! — "گوش کردن" = luisteren'},
        {hz:'دندان',tr:'dandaan',nl:'Tand',tip:'"دندانم درد می‌کنه" = mijn tond doet pijn'},
      ],
      sentences:[
        {hz:'سرم درد می‌کنه',tr:'saram dard me-kona',nl:'Mijn hoofd doet pijn'},
        {hz:'چشمانت گوشکیل اَس',tr:'chashmaanat goshkil as',nl:'Jouw ogen zijn mooi'},
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
        {hz:'ارزان',tr:'arzaan',nl:'Goedkoop',tip:'"ارزان‌تر کو" = maak het goedkoper — handig bij onderhandelen op de markt'},
        {hz:'گران',tr:'geraan',nl:'Duur',tip:'"خیلی گران اَس" = het is veel te duur — eerste zin bij onderhandelen'},
        {hz:'خریدن',tr:'kharidan',nl:'Kopen',tip:'"خریدم" = ik heb het gekocht; "می‌خرم" = ik koop het'},
        {hz:'تخفیف',tr:'takhfif',nl:'Korting',tip:'Vraag altijd — het is normaal!'},
        {hz:'کافی اَس',tr:'kaafi as',nl:'Genoeg',tip:'"کافی اَس، تشکر" = genoeg, dankjewel — stopzin bij eten serveren'},
        {hz:'نمی‌خوام',tr:'na-mi-khom',nl:'Ik wil het niet',tip:'Beleefde weigering — zeg dit rustig, niet bruusk'},
        {hz:'قیمت',tr:'qimat',nl:'Prijs',tip:'"قیمتش چنده؟" = wat is de prijs? — essentieel op de markt'},
      ],
      sentences:[
        {hz:'این چند پول اَس؟',tr:'ain chand pool as?',nl:'Hoeveel kost dit?'},
        {hz:'خیلی گران اَس، تخفیف بده',tr:'khaili geraan as, takhfif bede',nl:'Het is te duur, geef korting'},
        {hz:'یک کیلو سیب می‌خوام',tr:'yak kilo seb mi-khom',nl:'Ik wil een kilo appels'},
      ]
    },

    { id:'directions', title:'Weg vragen', sub:'Links, rechts, ver...', icon:'🗺️', xp:30,
      pronTips:['ر'],
      grammar:'Hazaragi richtingaanduidingen: "دَ" (da = in/naar) is typisch Hazaragi voor "در".',
      words:[
        {hz:'کجا',tr:'koja',nl:'Waar',tip:'"کجا هستی؟" = waar ben je? — eerste SMS die iedere Hazara stuurt'},
        {hz:'راست',tr:'raast',nl:'Rechts',tip:'"راست برو" = ga rechts — "راست" ook: "juist/correct"'},
        {hz:'چپ',tr:'chap',nl:'Links',tip:'"چپ برو" = ga links — "چپ" ook voor linkshanded'},
        {hz:'مستقیم',tr:'mostaghim',nl:'Rechtdoor',tip:'"مستقیم برو" = ga rechtdoor — van Arabisch "مستقیم"'},
        {hz:'دور',tr:'door',nl:'Ver',tip:'"دور اَس" = het is ver — "دور" ook voor "rond/kring"'},
        {hz:'نزدیک',tr:'nazdik',nl:'Dichtbij',tip:'"نزدیک اَس" = het is dichtbij — ook figuurlijk: "نزدیکانم" = mijn naasten'},
        {hz:'اینجه',tr:'ainja',nl:'Hier',tip:'Hazaragi: "ainja"'},
        {hz:'اونجه',tr:'onja',nl:'Daar',tip:'Hazaragi: "اونجه" (onja) — typisch Hazaragi vs Dari "آنجا"'},
        {hz:'دَ',tr:'da',nl:'In / Naar / Bij',tip:'Hazaragi voorzetsel'},
      ],
      sentences:[
        {hz:'بازار کجاس؟',tr:'baazaar kojaas?',nl:'Waar is de markt?'},
        {hz:'مستقیم برو، بعد راست بپیچ',tr:'mostaghim bero, ba\'d raast bepich',nl:'Ga rechtdoor, dan rechtsaf'},
        {hz:'خانت نزدیک اَس؟',tr:'khaanat nazdik as?',nl:'Is jouw huis dichtbij?'},
      ]
    },

    { id:'compliments', title:'Complimenten', sub:'Je bent mooi, goed zo!', icon:'🌸', xp:30,
      pronTips:['ق','خ'],
      grammar:'"آفرین" (aafarin) is de meest gewaardeerde aanmoediging — zeg het veel!',
      words:[
        {hz:'گوشکیل',tr:'goshkil',nl:'Mooi',tip:'"ق" = diepe keel-k'},
        {hz:'آفرین',tr:'aafarin',nl:'Goed zo! Bravo!',tip:'Gebruik het veel!'},
        {hz:'ماشاالله',tr:'mashaallah',nl:'MashaAllah',tip:'Zeg bij bewondering'},
        {hz:'مهربان',tr:'mehrabaan',nl:'Lief / Vriendelijk',tip:'"خیلی مهربان اَس" = hij/zij is heel lief — het hoogste compliment in Hazaragi cultuur'},
        {hz:'باهوش',tr:'baahosh',nl:'Slim',tip:'"باهوش" = letterlijk met-verstand — groot compliment voor Hazara kinderen'},
        {hz:'قوی',tr:'qawi',nl:'Sterk',tip:'"قوی باش" = wees sterk — aanmoedigingszin bij tegenspoed'},
        {hz:'جالب',tr:'jaalab',nl:'Interessant',tip:'"جالب اَس!" = dat is interessant! — neutrale positieve reactie'},
        {hz:'عالی',tr:'aali',nl:'Geweldig / Uitstekend',tip:'"عالی!" = geweldig! — krachtige goedkeuring, universeel gebruikt'},
      ],
      sentences:[
        {hz:'تو خیلی گوشکیل هستی',tr:'tu khaili goshkil hasti',nl:'Jij bent heel mooi'},
        {hz:'آفرین! خوب کردی',tr:'aafarin! khob kardi',nl:'Goed zo! Je hebt het goed gedaan'},
        {hz:'ماشاالله چنده باهوشی',tr:'mashaallah chanda baahoshi',nl:'MashaAllah, wat ben jij slim'},
      ]
    },

    { id:'flirt', title:'Romantiek & Gevoelens', sub:'Ik mis je, je bent mooi...', icon:'💌', xp:35,
      pronTips:['ع','غ'],
      grammar:'"دل" (hart) speelt een sleutelrol: "دل‌ربا" (hart-steler), "دل‌تنگی" (hartsverlangen).',
      words:[
        {hz:'عاشقتم',tr:'aasheqatom',nl:'Ik ben verliefd op jou',tip:'Sterker dan "دوستت دارم" — alleen romantisch gebruikt'},
        {hz:'دلم تنگته',tr:'delam tangta',nl:'Ik mis je zo',tip:'Letterlijk: "mijn hart is nauw/klein" — prachtige Hazaragi uitdrukking'},
        {hz:'خوش‌تیپ',tr:'khosh-tip',nl:'Knap / Stijlvol',tip:'Van "tip" = Engels type — modern Hazaragi leenwoord'},
        {hz:'دل‌ربا',tr:'delrobaa',nl:'Betoverend',tip:'Letterlijk: "hart-steler"'},
        {hz:'یارم',tr:'yaaram',nl:'Mijn geliefde',tip:'"یار" = vriend/geliefde in Hazaragi poëzie — ook als los compliment gebruikt'},
        {hz:'نمی‌تانم بی‌تو باشم',tr:'na-mi-taanom bi-tu baashom',nl:'Ik kan niet zonder jou',tip:'Hazaragi: "تانستن"'},
        {hz:'رویا',tr:'royaa',nl:'Droom / Lieveling',tip:'Zowel "droom" als vrouwennaam — "رویایم" = mijn droom'},
      ],
      sentences:[
        {hz:'یارم، دلم تنگته برات',tr:'yaaram, delam tangta baraat',nl:'Lieverd, ik mis je zo'},
        {hz:'از وختی دیدمت دلم لرزید',tr:'az wakhti didomat delam larzid',nl:'Vanaf het moment dat ik je zag beefde mijn hart'},
        {hz:'تو خوش‌تیپ‌ترین آدم استی',tr:'tu khosh-tip-tareen aadam asti',nl:'Jij bent de knapste persoon'},
        {hz:'هر شب رویای ته می‌بینم',tr:'har shab royaay-e ta mi-binom',nl:'Elke nacht droom ik van jou'},
        {hz:'نمی‌تانم بی‌تو زندگی کنم',tr:'na-mi-taanom bi-tu zendagi konom',nl:'Ik kan niet zonder jou leven'},
      ]
    },
  ]},

  { id:'ch5', label:'🌟 Hoofdstuk 5 · Cultuur & Slang', color:'#FFBE3D', lessons:[

    { id:'slang', title:'Hazara spreektaal', sub:'Echte dagelijkse woorden', icon:'😎', xp:35,
      pronTips:['خ','و'],
      grammar:'Hazaragi slang combineert Mongools, Turkse en eigen elementen. "خو" (kho = nou/dan) is typisch Hazaragi!',
      words:[
        {hz:'جان',tr:'jaan',nl:'Lieverd / Schat',tip:'"Sara jaan" = lieve Sara'},
        {hz:'یار',tr:'yaar',nl:'Vriend / Kerel',tip:'Centraal woord in Hazaragi poëzie en muziek — verbondenheid'},
        {hz:'والله',tr:'wallah',nl:'Echt waar!',tip:'Arabisch leenwoord — bij God — gebruikt als sterke bevestiging'},
        {hz:'اصلاً',tr:'aslan',nl:'Helemaal niet',tip:'"اصلاً نمی‌فامم" = ik heb werkelijk geen idee — versterker van ontkenning'},
        {hz:'نه بابا',tr:'na baabaa',nl:'Nee joh / Serieus?',tip:'"بابا" hier niet "vader" maar een uitroep van verbazing of afwijzing'},
        {hz:'آخ جان',tr:'aakh jaan',nl:'Yes! / Wauw!',tip:'Uitroep van vreugde — "آخ" + "جان" = hartelijk uitroep'},
        {hz:'خو',tr:'kho',nl:'Nou / Dan / Toch',tip:'Typisch Hazaragi verbindingswoord!'},
        {hz:'ببین',tr:'bebin',nl:'Kijk / Luister even',tip:'Aandachtstrekker in gesprek — ook als "luister eens" zonder echte bevelsvorm'},
        {hz:'آره',tr:'aara',nl:'Ja (informeel)',tip:'Informeel "ja" in gesprek — formeler is "بله"'},
      ],
      sentences:[
        {hz:'والله جان، اصلاً نمی‌فامم',tr:'wallah jaan, aslan na-mi-famom',nl:'Echt waar lieverd, ik heb geen idee'},
        {hz:'آخ جان! فردا می‌ریم بازار',tr:'aakh jaan! fardaa me-rim baazaar',nl:'Yes! Morgen gaan we naar de markt'},
        {hz:'خو، چی می‌خوای؟',tr:'kho, chi me-khaai?',nl:'Nou, wat wil je?'},
      ]
    },

    { id:'culture', title:'Cultuur & Tradities', sub:'Gastvrijheid, feesten...', icon:'🎊', xp:35,
      pronTips:['خ','ع'],
      grammar:'"مهمان‌نوازی" (gastvrijheid) is de heiligste waarde: "مهمان حبیب خداس".',
      words:[
        {hz:'مهمانی',tr:'mehmaani',nl:'Feest / Bezoek',tip:'"مهمانی رفتن" = op bezoek gaan — centraal in Hazara sociaal leven'},
        {hz:'مهمان‌نوازی',tr:'mehmannawaazi',nl:'Gastvrijheid',tip:'Heiligste waarde in Hazara cultuur'},
        {hz:'نوروز',tr:'nawroz',nl:'Nieuwjaar (21 maart)',tip:'"نو" = nieuw + "روز" = dag — Afghaans nieuwjaar op 21 maart, begin lente'},
        {hz:'عروسی',tr:'arosi',nl:'Bruiloft',tip:'Hazara bruiloft met dohol en sarnai — feest duurt meerdere dagen'},
        {hz:'دستت درد نکنه',tr:'dastat dard nakona',nl:'Dank je voor je moeite',tip:'Na maaltijd!'},
        {hz:'صفا آوردید',tr:'safaa aawordid',nl:'Welkomszin voor gasten',tip:'Letterlijk "jullie brachten vreugde" — verplicht zeggen bij gasten'},
        {hz:'نوش جان',tr:'nosh jaan',nl:'Smakelijk',tip:'Letterlijk "zoet voor je leven" — zeg bij aanvang of na een maaltijd'},
        {hz:'حلال باشه',tr:'halaal baasha',nl:'Moge het u smaken',tip:'Na een maaltijd of cadeau — "moge het jou toegestaan zijn"'},
      ],
      sentences:[
        {hz:'نوروز مبارک! سال نو خوش',tr:'nawroz mobaarak! saal naw khosh',nl:'Gelukkig Nieuwjaar!'},
        {hz:'دستت درد نکنه، خیلی خوشمزه بود',tr:'dastat dard nakona, khaili khoshmaza bood',nl:'Dank je, het was heerlijk'},
        {hz:'مهمان حبیب خداس',tr:'mehman habiib khodaas',nl:'Een gast is de geliefde van God'},
      ]
    },

    { id:'internet', title:'WhatsApp & Berichten', sub:'Online Hazaragi', icon:'📱', xp:30,
      pronTips:['خ'],
      grammar:'"هستی؟" (ben je er?) is het eerste bericht op WhatsApp!',
      words:[
        {hz:'هستی؟',tr:'hasti?',nl:'Ben je er?',tip:'Eerste WhatsApp bericht'},
        {hz:'خب',tr:'khab',nl:'Oké (informeel)',tip:'Informele OK — sneller en makkelijker dan "اوکی" of "باشه"'},
        {hz:'اوکی',tr:'oki',nl:'Oké',tip:'Directe leenwoord van het Engelse "OK"'},
        {hz:'بعداً زنگ می‌زنم',tr:'ba\'dan zang mi-zanom',nl:'Ik bel je later',tip:'"زنگ زدن" = bellen — vaste telefonische afscheidszin'},
        {hz:'مراقب خودت باش',tr:'moraaqeb khodat baash',nl:'Zorg goed voor jezelf',tip:'Warme afsluiting van WhatsApp gesprek — "مراقب" = oppassen op'},
        {hz:'پیام بده',tr:'payaam bede',nl:'Stuur een bericht',tip:'"پیام" = bericht — digitale versie van "زنگ بزن"'},
        {hz:'رسیدی؟',tr:'rasidi?',nl:'Ben je aangekomen?',tip:'Altijd sturen na een reis — "ben je veilig aangekomen?"'},
      ],
      sentences:[
        {hz:'هستی؟ دلم تنگته',tr:'hasti? delam tangta',nl:'Ben je er? Ik mis je'},
        {hz:'خب، بعداً زنگ می‌زنم',tr:'khab, baadan zang mi-zanom',nl:'Oké, ik bel je later'},
        {hz:'مراقب خودت باش، شب بخیر',tr:'moraaqeb khodat baash, shab bakhair',nl:'Zorg voor jezelf, goedenacht'},
      ]
    },
  ]},

  { id:'ch_gram1', label:'📖 Grammatica 1 · Basis', color:'#8B6FF0', lessons:[

    { id:'gram1_pronouns', title:'Voornaamwoorden', sub:'Ik, jij, hij, wij...', icon:'🧑', xp:20,
      pronTips:['خ'],
      grammar:'De 6 voornaamwoorden in Hazaragi:\nمن = ma (ik) · تو = tu (jij) · او = oo (hij/zij) · مو = mah (wij) · شما = shoma (jullie/u) · آنا = ana (zij)\n\nLet op: او spreek je uit als "oo" (lange oo). Er is geen verschil tussen hij en zij.\n\nDeze voornaamwoorden bepalen ook de werkwoordsuitgang: ma → -om, tu → -i, oo → -a, mah → -im, shoma → -in, ana → -an.',
      words:[
        {hz:'من',tr:'ma',nl:'Ik',tip:'Hazaragi: "ma" — kort a'},
        {hz:'تو',tr:'tu',nl:'Jij',tip:'Hazaragi: "tu" — NIET Iraans "to"'},
        {hz:'او',tr:'oo',nl:'Hij / Zij',tip:'Uitspraak: "oo" (lange oo-klank) — Hazaragi maakt geen onderscheid tussen hij en zij'},
        {hz:'مو',tr:'mah',nl:'Wij',tip:'Typisch Hazaragi — NIET Iraans "ما"'},
        {hz:'شما',tr:'shoma',nl:'Jullie / U',tip:'Ook beleefd enkelvoud — voor respect naar ouderen'},
        {hz:'آنا',tr:'ana',nl:'Zij (meervoud)',tip:'Hazaragi: "آنا" — NIET Iraans "آنها" of formeel "ایشان"'},
      ],
      sentences:[
        {hz:'من هزاره هستم',tr:'ma hazaara hastom',nl:'Ik ben Hazara'},
        {hz:'تو کجا هستی؟',tr:'tu koja hasti?',nl:'Waar ben jij?'},
        {hz:'مو با هم می‌ریم',tr:'mah baa ham me-rim',nl:'Wij gaan samen',tip:'"مو" = mah (wij) — typisch Hazaragi'},
      ]
    },

    { id:'gram1_zijn', title:'Werkwoord "zijn"', sub:'Ik ben, jij bent, hij is...', icon:'🔗', xp:25,
      pronTips:['خ'],
      grammar:'Zijn in Hazaragi:\nhastom (ik ben) · hasti (jij bent) · as (hij/zij is) · hastim (wij zijn) · hastin (jullie zijn) · hastan (zij zijn)\n\nNiet zijn:\nnistom · nisti · nis (is niet) · nistim · nistin · nistan\n\n"اَس" (as) is de Hazaragi vorm voor "is" — dit hoor je het meest in de spreektaal. "نیس" (nis) is "is niet".',
      words:[
        {hz:'هستم',tr:'hastom',nl:'Ik ben',tip:'"هست" + "-م" → Hazaragi: -om'},
        {hz:'هستی',tr:'hasti',nl:'Jij bent',tip:'"هست" + "-ی"'},
        {hz:'اَس',tr:'as',nl:'Hij/Zij is',tip:'Hazaragi: "اَس"'},
        {hz:'هستیم',tr:'hastim',nl:'Wij zijn',tip:'"هست" + "-یم"'},
        {hz:'هستین',tr:'hastin',nl:'Jullie zijn',tip:'Hazaragi: "-ین" ipv "-ید"'},
        {hz:'نیستم',tr:'nistom',nl:'Ik ben niet',tip:'Ontkenning van "هستم"'},
        {hz:'نیس',tr:'nis',nl:'Is niet',tip:'Hazaragi: "نیس". Veelgebruikt!'},
      ],
      sentences:[
        {hz:'مریضم، خوب نیستم',tr:'marizom, khob nistom',nl:'Ik ben ziek, ik ben niet goed'},
        {hz:'هوا امروز گرم اَس',tr:'hawaa emroz garm as',nl:'Het weer is vandaag warm',tip:'"اَس" = is (Hazaragi)'},
        {hz:'مشکلی نیس!',tr:'moshkeli nis!',nl:'Geen probleem!',tip:'Vaste uitdrukking'},
      ]
    },

    { id:'gram1_bezit', title:'Bezit: -م / -ت / -ش', sub:'Mijn, jouw, zijn/haar...', icon:'🔑', xp:25,
      pronTips:['خ'],
      grammar:'Bezit plak je als uitgang aan het woord:\n-م = mijn · -ت = jouw · -ش = zijn/haar · -مو = ons · -تون = jullie · -شون = hun\n\nVoorbeelden: نامم (mijn naam) · نامت (jouw naam) · نامش (zijn/haar naam)\n\nEindigt het woord op een klinker? Dan voeg je "-یم/-یت/-یش" toe: خانه‌ام = mijn huis.',
      words:[
        {hz:'نامم',tr:'naamam',nl:'Mijn naam',tip:'"نام" + "-م"'},
        {hz:'نامت',tr:'naamat',nl:'Jouw naam',tip:'"نام" + "-ت"'},
        {hz:'نامش',tr:'naamash',nl:'Zijn/haar naam',tip:'"نام" + "-ش" → "نامش" — Hazaragi uitspraak: naamash'},
        {hz:'خانمو',tr:'khaanamao',nl:'Ons huis',tip:'Hazaragi: "-مو" = ons'},
        {hz:'مادرم',tr:'maadaram',nl:'Mijn moeder',tip:'"مادرم" = mijn moeder — meest gebruikte bezitsvorm in Hazaragi'},
        {hz:'دوستت',tr:'dostat',nl:'Jouw vriend',tip:'"دوستت دارم" = ik hou van jou — ook voor familie'},
        {hz:'کتابش',tr:'ketaabash',nl:'Zijn/haar boek',tip:'"کتابش کجاس؟" = waar is zijn/haar boek?'},
      ],
      sentences:[
        {hz:'نامم گل اَس',tr:'naamam gol as',nl:'Mijn naam is Gol'},
        {hz:'مادرم خیلی مهربان اَس',tr:'maadaram khaili mehrabaan as',nl:'Mijn moeder is erg lief'},
        {hz:'دوستت دارم، یارم',tr:'dostat darom, yaaram',nl:'Ik hou van jou, lieverd'},
      ]
    },

    { id:'gram1_meervoud', title:'Meervoud: -ها / -ان', sub:'Boeken, kinderen, vrienden...', icon:'📚', xp:25,
      pronTips:['ه'],
      grammar:'Meervoud maken in Hazaragi is simpel: plak "-ها" achter het woord.\nکتاب‌ها (boeken) · بچه‌ها (kinderen) · خانه‌ها (huizen) · دوست‌ها (vrienden)\n\n"-ان" bestaat ook maar dat is formeler en meer schrijftaal. In dagelijks Hazaragi gebruik je altijd "-ها".\n\nMeervoud + mijn: "-های" + "-م" = "-هایم". Bijv. کتاب‌هایم = mijn boeken.',
      words:[
        {hz:'کتاب‌ها',tr:'ketaab-haa',nl:'Boeken',tip:'"کتاب" + "-ها" — zo simpel!'},
        {hz:'بچه‌ها',tr:'bacha-haa',nl:'Kinderen',tip:'Meest gebruikte meervoud in Hazaragi'},
        {hz:'خانه‌ها',tr:'khaana-haa',nl:'Huizen',tip:'"خانه" + "-ها"'},
        {hz:'دوست‌ها',tr:'dost-haa',nl:'Vrienden (dagelijks)',tip:'Hazaragi spreektaal — "-ها" voor mensen'},
        {hz:'دوستان',tr:'dostaan',nl:'Vrienden (formeel)',tip:'"-ان" = formeler, meer schrijftaal'},
        {hz:'مردها',tr:'mard-haa',nl:'Mannen',tip:''},
        {hz:'زن‌ها',tr:'zan-haa',nl:'Vrouwen',tip:''},
        {hz:'گل‌ها',tr:'gol-haa',nl:'Bloemen',tip:'"بهار آمد، گل‌ها شگفت" = lente is er, bloemen bloeien'},
      ],
      sentences:[
        {hz:'بچه‌ها بازی می‌کنن',tr:'bacha-haa baazi mi-konan',nl:'De kinderen spelen'},
        {hz:'کتاب‌هایم کجاس؟',tr:'ketaab-haayam kojas?',nl:'Waar zijn mijn boeken?',tip:'"-هایم" = mijn ... (meervoud bezit)'},
        {hz:'دوست‌هایم همه اینجا اَن',tr:'dost-haayam hama injaa an',nl:'Al mijn vrienden zijn hier'},
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
        {hz:'آمد',tr:'aamad',nl:'Kwam',tip:'Verleden stam van "آمدن" — "آمدم" = ik kwam'},
        {hz:'گفت',tr:'goft',nl:'Zei',tip:'Verleden stam van "گفتن" — "گفتم" = ik zei'},
        {hz:'دید',tr:'did',nl:'Zag',tip:'Verleden stam van "دیدن" — "دیدم" = ik zag'},
        {hz:'بود',tr:'bood',nl:'Was',tip:'Verleden van "بودن/اَس" — "بودم" = ik was'},
        {hz:'خورد',tr:'khord',nl:'At',tip:'Verleden stam van "خوردن" — "خوردم" = ik at'},
        {hz:'کرد',tr:'kard',nl:'Deed',tip:'Verleden stam van "کردن" — meest gebruikte werkwoord'},
        {hz:'گرفت',tr:'gereft',nl:'Nam / Pakte',tip:'Verleden stam van "گرفتن" — "گرفتم" = ik pakte'},
        {hz:'برگشت',tr:'bargasht',nl:'Keerde terug',tip:'"بر" + "گشت" = terug + draaide — ook: "برگرد!" = kom terug!'},
      ],
      sentences:[
        {hz:'روزی روزگاری یک دختر بود',tr:'rozi rozgaari yak dokhtar bood',nl:'Er was eens een meisje'},
        {hz:'رفت دَ بازار و نان خرید',tr:'raft da baazaar wa naan kharid',nl:'Ze ging naar de markt en kocht brood'},
        {hz:'مادرش گفت: "زود برگرد"',tr:'maadarash goft: "zod bargard"',nl:'Haar moeder zei: "kom snel terug"'},
      ]
    },

    { id:'opinions', title:'Meningen & Debat', sub:'Ik denk, ik ben het eens...', icon:'🗣️', xp:40,
      pronTips:['ع','ر'],
      grammar:'Gebruik "به نظرم" (ba nazaram = naar mijn mening) om beleefd je mening te delen.',
      words:[
        {hz:'درس اَس',tr:'doros as',nl:'Dat klopt',tip:'Hazaragi: "doros" — NIET "درست" (dat is formeler/Iraans)'},
        {hz:'اشتباه',tr:'eshtebaa',nl:'Fout / Vergissing',tip:'Hazaragi: uitgesproken als "eshtebaa" — de t-slot valt weg'},
        {hz:'موافقم',tr:'mowaafeqom',nl:'Ik ben het eens',tip:'"موافق" = akkoord + "-م" → ik ben akkoord'},
        {hz:'مخالفم',tr:'mokhaalefom',nl:'Ik ben het oneens',tip:'Tegengestelde van "موافقم" — "مخالف" = tegenstander'},
        {hz:'به نظرم',tr:'ba nazaram',nl:'Naar mijn mening',tip:'Letterlijk: "in mijn oog/blik" — beleefde opener'},
        {hz:'فکر می‌کنم',tr:'fekr mi-konom',nl:'Ik denk dat...',tip:'Inleidingszin voor meningen — volg altijd met "که" + zin'},
        {hz:'شاید',tr:'shaayad',nl:'Misschien',tip:'Uitdrukt echte twijfel — niet neerbuigend'},
        {hz:'یقیناً',tr:'yaqinan',nl:'Zeker / Absoluut',tip:'100% zeker — sterker dan "حتماً"'},
      ],
      sentences:[
        {hz:'به نظرم این اشتباه اَس',tr:'ba nazaram ain eshtebaa as',nl:'Naar mijn mening is dit fout'},
        {hz:'موافقم، درس می‌گی',tr:'mowaafeqom, doros megi',nl:'Ik ben het eens, je hebt gelijk'},
        {hz:'شاید فردا بهتر بشه',tr:'shaayad fardaa behtar besha',nl:'Misschien wordt het morgen beter'},
      ]
    },

    { id:'school', title:'School & Onderwijs', sub:'Klas, toets, leraar...', icon:'🏫', xp:35,
      pronTips:['ق'],
      grammar:'"مکتب" (maktab) is het Hazaragi woord voor school.',
      words:[
        {hz:'مکتب',tr:'maktab',nl:'School',tip:'Hazaragi/Afghaans woord voor school — van Arabisch "کتب" = schriften'},
        {hz:'معلم',tr:'mo\'allem',nl:'Leraar',tip:'"ع" = zachte keel-stop — van Arabisch "علم" = kennis'},
        {hz:'شاگرد',tr:'shaagerd',nl:'Leerling',tip:'Typisch Hazaragi woord voor leerling/student'},
        {hz:'کتاب',tr:'ketaab',nl:'Boek',tip:'"کتاب خواندن" = boek lezen EN studeren'},
        {hz:'درس',tr:'dars',nl:'Les / Huiswerk',tip:'"درس خواندن" = studeren — letterlijk "les lezen"'},
        {hz:'امتحان',tr:'emtehaan',nl:'Toets / Examen',tip:'"امتحان دادن" = examen doen — letterlijk "examen geven"'},
        {hz:'سبق',tr:'sabaq',nl:'Lesinhoud / Taak',tip:'Van Arabisch "سبق" = vooruitgaan — ook de les van de dag'},
        {hz:'قلم',tr:'qalam',nl:'Pen',tip:'Van Arabisch "قلم" = rietpen — oud schrijfgereedschap'},
        {hz:'تخته سیاه',tr:'takhta siyaah',nl:'Schoolbord',tip:'Letterlijk "zwart bord" — "تخته" = plank/bord'},
      ],
      sentences:[
        {hz:'امروز امتحان دارم',tr:'emroz emtehaan darom',nl:'Vandaag heb ik een toets'},
        {hz:'معلمم خیلی خوب اَس',tr:'mo\'allemam khaili khob as',nl:'Mijn leraar is heel goed'},
        {hz:'سبقم را خواندم',tr:'sabaqam ra khwaadom',nl:'Ik heb mijn les bestudeerd'},
      ]
    },
  ]},

  { id:'ch7', label:'🌿 Hoofdstuk 7 · Gezondheid & Sport', color:'#2ECC9A', lessons:[

    { id:'health', title:'Ziek & Gezond', sub:'Pijn, dokter, medicijn...', icon:'💊', xp:45,
      pronTips:['ع','خ'],
      grammar:'"مریض استم" (ik ben ziek) — "استم" is de Hazaragi variant voor "هستم".',
      words:[
        {hz:'مریض',tr:'mariz',nl:'Ziek',tip:'"مریض استم" = ik ben ziek — Hazaragi: "استم" ipv "هستم"'},
        {hz:'درد',tr:'dard',nl:'Pijn',tip:'"کجا درد می‌کنه؟" = waar doet het pijn? — veelgebruikte doktersvraag'},
        {hz:'داکتر',tr:'daaktar',nl:'Dokter',tip:'"داکتر" = typisch Hazaragi/Afghaanse uitspraak (niet Iraans "پزشک")'},
        {hz:'دوا',tr:'dawaa',nl:'Medicijn',tip:'"دوا خوردن" = medicijn innemen — letterlijk eten'},
        {hz:'تب',tr:'tab',nl:'Koorts',tip:'"تب داری؟" = heb je koorts? — veelgebruikte bezorgde vraag'},
        {hz:'زکام',tr:'zakaam',nl:'Verkoudheid',tip:'Typisch Hazaragi woord'},
        {hz:'شفا',tr:'shafaa',nl:'Genezing',tip:'"ایشالله زود شفا یابی" = moge je snel beter worden'},
        {hz:'تندرست',tr:'tandorost',nl:'Gezond',tip:'Letterlijk "sterk van lijf" — oud Perzisch woord voor gezond'},
        {hz:'استراحت',tr:'esteraahat',nl:'Rust',tip:'"استراحت کو!" = ga rusten! — ook als bevel bij ziekte'},
        {hz:'زخم',tr:'zakhm',nl:'Wond / Blessure',tip:'"زخم دارم" = ik heb een wond — ook figuurlijk: innerlijke pijn'},
      ],
      sentences:[
        {hz:'مریض استم، دوا خریدم',tr:'mariz astom, dawaa kharidom',nl:'Ik ben ziek, ik heb medicijn gekocht'},
        {hz:'تب داری؟ استراحت کو',tr:'tab daari? esteraahat ko',nl:'Heb je koorts? Ga rusten'},
        {hz:'ایشالله زود شفا یابی',tr:'ishaallah zod shafaa yaabi',nl:'Inshallah word je snel beter'},
      ]
    },

    { id:'sports', title:'Sport & Hobby\'s', sub:'Voetbal, muziek, koken...', icon:'💪', xp:45,
      pronTips:['ر','غ'],
      grammar:'"بازی کردن" (baazi kardan) = spelen.',
      words:[
        {hz:'فوتبال',tr:'footbaal',nl:'Voetbal',tip:'Directe leenwoord — populairste sport in Afghanistan'},
        {hz:'دویدن',tr:'dawidan',nl:'Rennen',tip:'"می‌دوم" = ik ren — stam "دو" + "-م"'},
        {hz:'بازی',tr:'baazi',nl:'Spel / Spelen',tip:'"بازی نکو" = doe niet alsof — ook figuurlijk: niet serieus'},
        {hz:'موسیقی',tr:'musiqi',nl:'Muziek',tip:'"موسیقی گوش می‌دم" = ik luister muziek — van Arabisch "موسیقی"'},
        {hz:'نقاشی',tr:'naqqaashi',nl:'Schilderen / Tekenen',tip:'"نقاش" = kunstenaar — "-ی" maakt het het handwerk zelf'},
        {hz:'کتاب خواندن',tr:'ketaab khaandan',nl:'Lezen',tip:'"خواندن" = lezen ÉN zingen — twee betekenissen in één werkwoord'},
        {hz:'آشپزی',tr:'aashpazi',nl:'Koken (als hobby)',tip:'Van "آشپز" = kok — "-ی" = de bezigheid'},
        {hz:'قهرمان',tr:'qahramaan',nl:'Kampioen / Held',tip:'"قهرمان داستان" = de held van het verhaal — ook sportterm'},
        {hz:'بُزکشی',tr:'buzkashi',nl:'Buzkashi (ruiterspel)',tip:'Nationaal Afghaans paardspel!'},
      ],
      sentences:[
        {hz:'هر روز فوتبال بازی می‌کنم',tr:'har roz footbaal baazi mi-konom',nl:'Elke dag speel ik voetbal'},
        {hz:'موسیقی گوش می‌دم، آرام می‌شم',tr:'musiqi gosh mi-dom, aaraam mi-shom',nl:'Ik luister muziek, ik word rustig'},
        {hz:'بُزکشی بازی کردم — عالی بود!',tr:'buzkashi baazi kardom — aali bood!',nl:'Ik deed buzkashi mee — het was geweldig!'},
      ]
    },

    { id:'nature', title:'Natuur & Landschap', sub:'Bergen, rivieren, bloemen...', icon:'🏔️', xp:40,
      pronTips:['خ','آ'],
      grammar:'Hazarajat = het land van de Hazara — een bergachtig plateau in centraal Afghanistan.',
      words:[
        {hz:'کوه',tr:'kooh',nl:'Berg',tip:'Hazarajat = land van de bergen — "کوه‌های هزاراجات"'},
        {hz:'دریا',tr:'daryaa',nl:'Rivier / Groot water',tip:'Betekent zowel rivier als zee — context bepaalt'},
        {hz:'دشت',tr:'dasht',nl:'Vlakte / Steppe',tip:'Typisch Centraal-Aziatisch landschap tussen de bergen'},
        {hz:'جنگل',tr:'jangal',nl:'Bos',tip:'Bossen zijn zeldzaam in droog Afghanistan — kostbaar'},
        {hz:'گل',tr:'gol',nl:'Bloem',tip:'"گل" = ook een vrouwennaam'},
        {hz:'درخت',tr:'darakht',nl:'Boom',tip:'"درخت کاری" = bomen planten — milieuzorg in Afghanistan'},
        {hz:'آسمان',tr:'aasmaan',nl:'Hemel / Lucht',tip:'"آسمان صاف" = heldere lucht — veelgebruikt in Hazaragi poëzie'},
        {hz:'ستاره',tr:'setaara',nl:'Ster',tip:'Sterren zijn belangrijk in Hazara folklore en poëzie'},
        {hz:'ماه',tr:'maah',nl:'Maan / Maand',tip:'Dubbele betekenis — "ماه رمضان" = maand Ramadan'},
        {hz:'زمین',tr:'zamin',nl:'Aarde / Grond',tip:'"زمین کشاورزی" = landbouwgrond — vitaal voor de Hazara'},
      ],
      sentences:[
        {hz:'کوه‌های هزاراجات خیلی گوشکیل اَس',tr:'koohhaaye hazaarajaat khaili goshkil as',nl:'De bergen van Hazarajat zijn heel mooi'},
        {hz:'شب ستاره‌ها گوشکیلن',tr:'shab setaarahaa goshkilan',nl:'\'s Nachts zijn de sterren mooi'},
        {hz:'دریا از کوه جاری اَس',tr:'daryaa az kooh jaari as',nl:'De rivier stroomt van de berg'},
        {hz:'درخت‌ها دَ بهار گل می‌ده',tr:'darakhthaa da bahaar gol mi-da',nl:'De bomen bloeien in de lente'},
        {hz:'زمین بعد از بارون سبز می‌شه',tr:'zameen ba\'d az baaroon sabz mi-sha',nl:'De grond wordt groen na de regen'},
      ]
    },
  ]},

  { id:'ch8', label:'✈️ Hoofdstuk 8 · Reizen & Werk', color:'#5BB8FF', lessons:[

    { id:'travel', title:'Reizen', sub:'Vliegtuig, hotel, paspoort...', icon:'✈️', xp:50,
      pronTips:['خ','ق'],
      grammar:'"طیاره" (tayaara = vliegtuig) is het Hazaragi woord.',
      words:[
        {hz:'سفر',tr:'safar',nl:'Reis',tip:'"سفر خوش" = goede reis!'},
        {hz:'طیاره',tr:'tayaara',nl:'Vliegtuig',tip:'Hazaragi/Afghaans woord — niet "هواپیما" (dat is Iraans)'},
        {hz:'هوتل',tr:'hotel',nl:'Hotel',tip:'Hazaragi uitspraak van "hotel" — van het Frans/Engels'},
        {hz:'پاسپورت',tr:'paaspord',nl:'Paspoort',tip:'Leenwoord van "passport" — "پاسپورتت کجاس؟"'},
        {hz:'ویزه',tr:'wiza',nl:'Visum',tip:'"ویزه گرفتن" = visum aanvragen — cruciaal voor diaspora'},
        {hz:'سرحد',tr:'sarhad',nl:'Grens',tip:'Van Arabisch "حد" = grens/limiet'},
        {hz:'تکت',tr:'tiket',nl:'Ticket',tip:'Hazaragi uitspraak van "ticket"'},
        {hz:'چمدان',tr:'chamedaan',nl:'Koffer',tip:'"چمدان بستن" = koffer inpakken'},
        {hz:'خارج',tr:'khaarij',nl:'Buitenland',tip:'"دَ خارج زندگی می‌کنم" = ik woon in het buitenland'},
        {hz:'ایستگاه',tr:'istgaah',nl:'Station / Halte',tip:'"ایستگاه بس کجاس؟" = waar is de bushalte?'},
      ],
      sentences:[
        {hz:'فردا سفر داریم، چمدانم بستم',tr:'fardaa safar daarim, chamedaanam bastom',nl:'Morgen gaan we op reis, ik heb mijn koffer gepakt'},
        {hz:'پاسپورتم کجاس؟ پیدا نیس',tr:'paasportam kojaas? payda nis',nl:'Waar is mijn paspoort? Ik kan het niet vinden'},
        {hz:'سفر خوش! مراقب خودت باش',tr:'safar khosh! moraaqeb khodat baash',nl:'Goede reis! Zorg goed voor jezelf'},
      ]
    },

    { id:'work', title:'Werk & Carrière', sub:'Kantoor, baas, salaris...', icon:'💼', xp:50,
      pronTips:['ع','ر'],
      grammar:'Leenwoorden: "آفیس" (kantoor), "میتینگ" (vergadering). Moderne Hazaragi!',
      words:[
        {hz:'کار',tr:'kaar',nl:'Werk',tip:'"کار پیدا کردن" = werk vinden — urgente uitdrukking in de diaspora'},
        {hz:'آفیس',tr:'aafis',nl:'Kantoor',tip:'Leenwoord van "office"'},
        {hz:'رئیس',tr:'raees',nl:'Baas / Chef',tip:'Van Arabisch "رأس" = hoofd — "رئیسم" = mijn baas'},
        {hz:'همکار',tr:'hamkaar',nl:'Collega',tip:'"هم" = samen + "کار" = werk — letterlijk "samen-werker"'},
        {hz:'معاش',tr:'ma\'aash',nl:'Salaris',tip:'Hazaragi woord — van Arabisch "معیشت" = levensonderhoud'},
        {hz:'استخدام شدم',tr:'estekhdaam shodom',nl:'Ik ben aangenomen',tip:'"استخدام" = aangenomen worden — formeel werkwoord'},
        {hz:'اخراج',tr:'ekhraaj',nl:'Ontslag',tip:'"اخراج شدم" = ik ben ontslagen — letterlijk "eruit gestuurd"'},
        {hz:'میتینگ',tr:'meeting',nl:'Vergadering',tip:'Directe leenwoord van "meeting" — modern Hazaragi zakelijk'},
        {hz:'تجربه',tr:'tajroba',nl:'Ervaring',tip:'"تجربه دارم" = ik heb ervaring — van Arabisch "تجربة"'},
        {hz:'پروژه',tr:'projaa',nl:'Project',tip:'Van "project" — uitgesproken als "projaa" in Hazaragi'},
      ],
      sentences:[
        {hz:'کار جدید پیدا کردم',tr:'kaar jadid payda kardom',nl:'Ik heb een nieuwe baan gevonden'},
        {hz:'امروز میتینگ مهم داریم',tr:'emroz meeting mohim daarim',nl:'Vandaag hebben we een belangrijke vergadering'},
        {hz:'معاشم خوب اَس، راضی استم',tr:'ma\'aasham khob as, raazi astom',nl:'Mijn salaris is goed, ik ben tevreden'},
      ]
    },

    { id:'dreams_night', title:'Nacht & Dromen', sub:'Slaap, sterren, droom...', icon:'🌙', xp:45,
      pronTips:['خ','ر'],
      grammar:'"خواب" (khwaab) = zowel slaap als droom. "خواب دیدم" = ik heb gedroomd.',
      words:[
        {hz:'خواب',tr:'khwaab',nl:'Slaap / Droom',tip:'"خواب دیدم" = ik heb gedroomd — dual betekenis slaap/droom'},
        {hz:'رویا',tr:'royaa',nl:'Droom (poëtisch)',tip:'Poetischer dan "خواب" — gebruikt in Hazaragi liefdesliederen'},
        {hz:'شب',tr:'shab',nl:'Nacht',tip:'"شب بخیر" = goedenacht — "شب" ook in samenstellingen'},
        {hz:'ستاره',tr:'setaara',nl:'Ster',tip:'Sterren zijn symbool van hoop in Hazara folklore'},
        {hz:'ماه',tr:'maah',nl:'Maan',tip:'"ماه" = ook maand — "ماه رمضان" = maand Ramadan'},
        {hz:'آرام',tr:'aaraam',nl:'Rustig / Stil',tip:'"آرام باش" = wees kalm/rustig — ook troostend'},
        {hz:'بیدار',tr:'bidaar',nl:'Wakker',tip:'"بیدار شدن" = wakker worden — "بیدارم" = ik ben wakker'},
        {hz:'کابوس',tr:'kaabus',nl:'Nachtmerrie',tip:'"کابوس دیدم" = ik had een nachtmerrie'},
        {hz:'خوابم برد',tr:'khwaabam bord',nl:'Ik viel in slaap',tip:'Letterlijk: "slaap nam me mee"'},
        {hz:'خواب گوشکیل',tr:'khwaab goshkil',nl:'Mooie droom',tip:'"خواب گوشکیل ببینی" = zoete dromen — afscheidsgroet voor de nacht'},
      ],
      sentences:[
        {hz:'دیشب خواب گوشکیل دیدم',tr:'dishab khwaab goshkil didom',nl:'Gisteravond had ik een mooie droom'},
        {hz:'ستاره‌ها امشب خیلی گوشکیلن',tr:'setaarahaa emshab khaili goshkilan',nl:'De sterren zijn vanavond heel mooi'},
        {hz:'خواب گوشکیل ببینی، شب بخیر',tr:'khwaab goshkil bebini, shab bakhair',nl:'Zoete dromen, goedenacht'},
      ]
    },
  ]},

  { id:'ch9', label:'🎉 Hoofdstuk 9 · Feest, Religie & Conflict', color:'#FF8C61', lessons:[

    { id:'party_music', title:'Feesten & Muziek', sub:'Dansen, zingen, vieren...', icon:'💃', xp:55,
      pronTips:['غ','ع'],
      grammar:'"دایره" (daayera = tamboerijn) is het traditionele Hazara instrument bij feesten.',
      words:[
        {hz:'جشن',tr:'jashn',nl:'Feest / Viering',tip:'"جشن گرفتن" = een feest vieren — ook: "جشن تولد" = verjaardagsfeest'},
        {hz:'رقص',tr:'raqs',nl:'Dans',tip:'"رقص کردن" = dansen — verplicht bij elke Hazara bruiloft!'},
        {hz:'آهنگ',tr:'aahang',nl:'Lied / Muziek',tip:'"آهنگ گوشکیل" = mooi liedje — "آهنگ" ook voor melodie'},
        {hz:'غزل',tr:'ghazal',nl:'Ghazal (poëtisch lied)',tip:'Klassieke Perzische dichtvorm — vaak over liefde en verlangen'},
        {hz:'دایره',tr:'daayera',nl:'Tamboerijn',tip:'HET Hazara instrument!'},
        {hz:'صدا',tr:'sadaa',nl:'Stem / Geluid',tip:'"صدای گوشکیل" = mooie stem — "صدات قطع می‌شه" = je valt weg (telefoon)'},
        {hz:'شادی',tr:'shaadi',nl:'Vreugde / Geluk',tip:'"شادی کردن" = vreugde uitdrukken — niet verwarren met "عروسی"'},
        {hz:'مهمانی کردن',tr:'mehmaani kardan',nl:'Een feest geven',tip:'"مهمانی دادن" ook gebruikt — gasten thuis ontvangen'},
        {hz:'سرود',tr:'sorood',nl:'Lied / Hymne',tip:'"سرود خواندن" = een lied zingen — formeler dan "آهنگ"'},
        {hz:'دُهل',tr:'dohol',nl:'Grote trom',tip:'Geen Hazara bruiloft zonder dohol — samen met sarnai het rituele duo'},
      ],
      sentences:[
        {hz:'عروسی بود، همه رقص کردن',tr:'arosi bood, hama raqs karden',nl:'Het was een bruiloft, iedereen danste'},
        {hz:'آهنگت خیلی گوشکیله، ازوال بزن',tr:'aahangat khaili goshkila, azawal bezan',nl:'Jouw liedje is heel mooi, speel het nog eens'},
        {hz:'شادی کو! امشب جشن داریم',tr:'shaadi ko! emshab jashn daarim',nl:'Wees blij! Vanavond hebben we een feest'},
      ]
    },

    { id:'religion', title:'Religie & Tradities', sub:'Gebed, Ramadan...', icon:'🙏', xp:55,
      pronTips:['ع','ق'],
      grammar:'De Hazara zijn overwegend Shi\'a moslims. Unieke tradities zoals "عاشورا".',
      words:[
        {hz:'نماز',tr:'namaaz',nl:'Gebed',tip:'"نماز خواندن" = bidden — vijf keer per dag in de Islam'},
        {hz:'روزه',tr:'roza',nl:'Vasten',tip:'"روزه گرفتن" = vasten — gedurende Ramadan'},
        {hz:'رمضان',tr:'ramazaan',nl:'Ramadan',tip:'Heilige vastenmaand — "رمضان مبارک" = gezegende Ramadan'},
        {hz:'عید',tr:'eid',nl:'Eid-feest',tip:'"عید مبارک" = gelukkige Eid — ná Ramadan of Eid al-Adha'},
        {hz:'دعا',tr:'do\'aa',nl:'Smeekgebed',tip:'"دعا می‌کنم" = ik bid voor je — persoonlijker dan نماز'},
        {hz:'مسجد',tr:'masjed',nl:'Moskee',tip:'Van Arabisch "سجود" = knielen — gebedshuis'},
        {hz:'ایشالله',tr:'ishaallah',nl:'Inshallah',tip:'Hazaragi uitspraak: "isha" — NIET "insha" zoals in Arabisch'},
        {hz:'الحمدلله',tr:'alhamdolillah',nl:'Alhamdulillah',tip:'Bij goed nieuws of na een maaltijd — dank aan God'},
        {hz:'بسم الله',tr:'bismillah',nl:'In naam van God',tip:'Zeg bij het beginnen van elke handeling of maaltijd'},
        {hz:'عاشورا',tr:'aashoora',nl:'Ashura (Shi\'a rouw)',tip:'Shi\'a herdenking van de marteldood van Imam Hussain — uniek in Hazara gemeenschap'},
      ],
      sentences:[
        {hz:'عید مبارک! سال نو خوش باشی',tr:'eid mobaarak! saal naw khosh baashi',nl:'Eid Mubarak! Fijn nieuw jaar'},
        {hz:'رمضان شروع شد، روزه می‌گیری؟',tr:'ramazaan shoro shod, roza megiri?',nl:'Ramadan is begonnen, ga jij vasten?'},
        {hz:'ایشالله همه چیز درس می‌شه',tr:'ishaallah hama chiz doros mi-sha',nl:'Inshallah wordt alles goed'},
      ]
    },

    { id:'arguments', title:'Ruzies & Verzoening', sub:'Boos, sorry, vrede...', icon:'😤', xp:55,
      pronTips:['ع','غ'],
      grammar:'"آشتی کردن" (vrede sluiten) is in Hazara cultuur erg belangrijk.',
      words:[
        {hz:'معذرت',tr:'ma\'zerat',nl:'Sorry / Excuus',tip:'"معذرت می‌خوام" = het spijt me — formeler dan "ببخشید"'},
        {hz:'ببخشید',tr:'bebakhshid',nl:'Pardon / Vergeef me',tip:'Van "بخشیدن" = vergeven — ook om aandacht te vragen'},
        {hz:'خفا',tr:'khafaa',nl:'Boos',tip:'Hazaragi: "خفا" — "خفا شدم" = ik werd boos — "خفا نشو" = word niet boos'},
        {hz:'دعوا',tr:'da\'waa',nl:'Ruzie',tip:'"دعوا نکو" = maak geen ruzie — veelgehoorde aansporing'},
        {hz:'آشتی',tr:'aashti',nl:'Vrede / Verzoening',tip:'Kern van Hazara conflictoplossing'},
        {hz:'تقصیر',tr:'taqseer',nl:'Schuld',tip:'"تقصیر من نیس" = het is niet mijn schuld'},
        {hz:'درک کردن',tr:'darak kardan',nl:'Begrijpen',tip:'"درک می‌کنم" = ik begrijp het — empathische reactie'},
        {hz:'حق داری',tr:'haq daari',nl:'Je hebt gelijk',tip:'"حق" = recht/waarheid — een van de mooiste dingen om te horen'},
        {hz:'ناراحت',tr:'naaraahat',nl:'Verdrietig / Beledigd',tip:'"ناراحت نشو" = wees niet verdrietig — troostende zin'},
        {hz:'دلم می‌سوزه',tr:'delam mesoza',nl:'Het doet me pijn (medeleven)',tip:'Letterlijk "mijn hart brandt" — diepe empathie uitdrukken'},
      ],
      sentences:[
        {hz:'معذرت می‌خوام، اشتباه کردم',tr:'ma\'zerat mi-khom, eshtebaa kardom',nl:'Het spijt me, ik heb een fout gemaakt'},
        {hz:'چرا خفا هستی؟ دعوا نکو',tr:'chera khafaa hasti? da\'waa nako',nl:'Waarom ben je boos? Maak geen ruzie'},
        {hz:'آشتی کنیم، دوستای قدیمیم',tr:'aashti konim, dostaayi qadimim',nl:'Laten we vrede sluiten, we zijn oude vrienden'},
      ]
    },
  ]},

  { id:'ch10', label:'👑 Hoofdstuk 10 · Expert Niveau', color:'#A78BFA', lessons:[

    { id:'cooking', title:'Koken & Recepten', sub:'Hazara gerechten...', icon:'🍽️', xp:60,
      pronTips:['خ','ق','ع'],
      grammar:'"مانتو" (dumplings), "قروت" (gedroogde yoghurt), "بولانی" zijn typisch Hazara gerechten.',
      words:[
        {hz:'پختن',tr:'pokhtan',nl:'Koken',tip:'"پخت" = verleden stam — "پختم" = ik kookte'},
        {hz:'روغن',tr:'roghan',nl:'Olie / Vet',tip:'"روغن دنبه" = schapenvet — traditioneel kookvet bij Hazara'},
        {hz:'نمک',tr:'namak',nl:'Zout',tip:'"نمک زیاد بد اَس" = te veel zout is slecht'},
        {hz:'پیاز',tr:'pyaaz',nl:'Ui',tip:'Basis van elk Afghaans recept'},
        {hz:'گشنیز',tr:'gashniz',nl:'Koriander',tip:'Onmisbaar in Afghaanse keuken — vers of gedroogd'},
        {hz:'قورمه',tr:'qorma',nl:'Stoofgerecht',tip:'"قورمه بدون پیاز نمی‌شه" = qorma zonder ui bestaat niet'},
        {hz:'مانتو',tr:'maanto',nl:'Manto (dumplings)',tip:'GELIEFD Hazara gerecht!'},
        {hz:'قروت',tr:'qoroot',nl:'Gedroogde yoghurt',tip:'Typisch Hazara — opgelost in water over manto gegoten'},
        {hz:'بریانی',tr:'beryaani',nl:'Biryani',tip:'Feestelijk rijstgerecht — ook in Afghanistan populair'},
        {hz:'چکنه',tr:'chakana',nl:'Hazaragi soep',tip:'Traditionele Hazara maaltijdsoep'},
      ],
      sentences:[
        {hz:'امروز مانتو پختم، بیا بخور',tr:'emroz maanto pakhtom, bia bakhoor',nl:'Vandaag heb ik manto gekookt, kom eten'},
        {hz:'قورمه بدون پیاز نمی‌شه',tr:'qorma bedoon pyaaz nemi-sha',nl:'Qorma kan niet zonder ui'},
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
        {hz:'سر به سرم نهل',tr:'sar ba saram nahol',nl:'Doe niet moeilijk',tip:'Hazaragi: "نهل" = laat het (van هشتن) — Iraans zegt "نذار"'},
        {hz:'دلم می‌خواد',tr:'delam mekhad',nl:'Ik verlang ernaar',tip:''},
        {hz:'مهمان حبیب خداس',tr:'mehman habiib khodaas',nl:'Een gast is de geliefde van God',tip:''},
        {hz:'صبر تلخ اَس ولی میوه‌اش شیرین',tr:'sabr talkh as wali mewash shirin',nl:'Geduld is bitter maar de vrucht is zoet',tip:'Hazaragi: "اَس" ipv "است"'},
      ],
      sentences:[
        {hz:'دل به دل راه داره، به تو فکر می‌کردم',tr:'del ba del raah daara, ba tu fekr mi-kardom',nl:'Harten vinden een weg — ik dacht net aan jou'},
        {hz:'چشم، هر کاری بگی می‌کنم',tr:'chashm, har kaari begi mi-konom',nl:'Ja met plezier, wat je ook zegt zal ik doen'},
        {hz:'صبر کو، همه چیز خوش می‌شه',tr:'sabr ko, hama chiz khosh mi-sha',nl:'Wees geduldig, alles wordt goed'},
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
        {hz:'تاریخ',tr:'taarikh',nl:'Geschiedenis',tip:''},
        {hz:'مقاومت',tr:'moqaawamat',nl:'Verzet / Weerstand',tip:''},
        {hz:'افتخار',tr:'eftekhar',nl:'Trots',tip:''},
        {hz:'وحدت',tr:'wahdat',nl:'Eenheid',tip:''},
        {hz:'آزادی',tr:'aazaadi',nl:'Vrijheid',tip:''},
      ],
      sentences:[
        {hz:'زبان مادریم هزارگی اَس',tr:'zabaan maadaram hazaaragi as',nl:'Mijn moedertaal is Hazaragi'},
        {hz:'به فرهنگم افتخار می‌کنم',tr:'ba farhangam eftekhar mi-konom',nl:'Ik ben trots op mijn cultuur'},
        {hz:'هزاراجات قلب افغانستان اَس',tr:'hazaarajaat qalb afghaaanistaan as',nl:'Hazarajat is het hart van Afghanistan'},
      ]
    },
  ]},

  { id:'ch_gram2', label:'📖 Grammatica 2 · Werkwoorden', color:'#8B6FF0', lessons:[

    { id:'gram2_heden', title:'Tegenwoordige tijd', sub:'Ik ga, jij eet, hij zegt...', icon:'⏰', xp:30,
      pronTips:['ر','و'],
      grammar:'Tegenwoordige tijd: "می‌" + stam + uitgang.\nUitgangen: -om (ik) · -i (jij) · -a (hij/zij) · -im (wij) · -in (jullie) · -an (zij)\n\nVoorbeeld "gaan" (رفتن, stam رو-):\nmi-rom · mi-ri · mi-ra · mi-rim · mi-rin · mi-ran\n\nDezelfde uitgangen gebruik je ook in de verleden tijd! Wat verandert is alleen de stam. Daarom lijken tijden soms op elkaar — dat is normaal in Hazaragi.',
      words:[
        {hz:'می‌رم',tr:'mi-rom',nl:'Ik ga',tip:'"می‌" + stam "ر" (van رفتن) + "-م" → Hazaragi: -om'},
        {hz:'می‌ری',tr:'me-ri',nl:'Jij gaat',tip:'"-ی" = jij'},
        {hz:'می‌ره',tr:'me-ra',nl:'Hij/Zij gaat',tip:'Hazaragi: "-ه" uitgang'},
        {hz:'می‌ریم',tr:'me-rim',nl:'Wij gaan',tip:'"-یم" = wij'},
        {hz:'می‌رین',tr:'me-rin',nl:'Jullie gaan',tip:'Hazaragi: "-ین" ipv "-ید"'},
        {hz:'می‌خورم',tr:'mi-khorom',nl:'Ik eet',tip:'Stam van "خوردن" = خور'},
        {hz:'می‌گم',tr:'mi-gom',nl:'Ik zeg',tip:'Hazaragi stam van "گفتن"'},
        {hz:'می‌دم',tr:'mi-dom',nl:'Ik geef',tip:'Stam van "دادن" = د'},
      ],
      sentences:[
        {hz:'هر روز مکتب می‌رم',tr:'har roz maktab mi-rom',nl:'Elke dag ga ik naar school'},
        {hz:'چی می‌خوری؟',tr:'chi me-khori?',nl:'Wat eet jij?'},
        {hz:'مو با هم چای می‌خوریم',tr:'mo baa ham chaay me-khorim',nl:'Wij drinken samen thee'},
      ]
    },

    { id:'gram2_negatie', title:'Negatie', sub:'Niet, geen, helemaal niet...', icon:'🚫', xp:25,
      pronTips:['خ'],
      grammar:'Ontkennen is simpel: zet "نه" vóór het werkwoord.\nمی‌رم (ik ga) → نمی‌رم (ik ga niet) · می‌خوام (ik wil) → نمی‌خوام (ik wil niet)\n\nVoor "zijn": هستم → نیستم (ik ben niet) · اَس → نیس (is niet)\n\nVaste uitdrukking: مشکلی نیس = geen probleem!\nVersterking: اصلاً نمی‌خوام = ik wil het helemaal niet.',
      words:[
        {hz:'نمی‌رم',tr:'na-mi-rom',nl:'Ik ga niet',tip:'"نه" + "می‌رم" → "نمی‌رم"'},
        {hz:'نمی‌خوام',tr:'na-mi-khom',nl:'Ik wil niet',tip:''},
        {hz:'نمی‌فامم',tr:'na-mi-famom',nl:'Ik weet het niet',tip:'Veelgebruikte zin — leer dit van buiten!'},
        {hz:'نیستم',tr:'nistom',nl:'Ik ben niet',tip:''},
        {hz:'نیس',tr:'nis',nl:'Is niet',tip:'Hazaragi: "نیس"'},
        {hz:'مشکلی نیس',tr:'moshkeli nis',nl:'Geen probleem',tip:'Leer als één vaste uitdrukking'},
        {hz:'اصلاً',tr:'aslan',nl:'Helemaal niet',tip:'Versterkt de ontkenning'},
      ],
      sentences:[
        {hz:'نمی‌فامم، مشکلی نیس',tr:'na-mi-famom, moshkeli nis',nl:'Ik weet het niet, geen probleem'},
        {hz:'امروز نمی‌رم، خسته هستم',tr:'emroz na-mi-rom, khasta hastom',nl:'Vandaag ga ik niet, ik ben moe'},
        {hz:'اصلاً نمی‌خوام',tr:'aslan na-mi-khom',nl:'Ik wil het helemaal niet'},
      ]
    },

    { id:'gram2_imperatief', title:'Gebiedende wijs', sub:'Ga! Eet! Kom! Zeg!', icon:'📢', xp:30,
      pronTips:['ب'],
      grammar:'Gebiedende wijs: zet "بـ" (be-) vóór de werkwoordstam.\nبرو (ga!) · بیا (kom!) · بخور (eet!) · بده (geef!) · بگوی (zeg! — Hazaragi: bogoi) · بخون (lees!)\n\nLet op: Hazaragi zegt "بگوی" (bogoi), niet Iraans "بگو" (bego).\n\nOntkenning: "نه" + stam, zonder "بـ": نرو (ga niet!) · نخور (eet niet!)\n\nVoor jullie: voeg "-ین" toe: بروین (gaan jullie!) · بیاین (kom jullie!)',
      words:[
        {hz:'برو',tr:'boro',nl:'Ga! (jij)',tip:'"نرو" = ga niet!'},
        {hz:'بیا',tr:'biya',nl:'Kom! (jij)',tip:'Meest gebruikte bevelsvorm — hoor je overal'},
        {hz:'بخور',tr:'bekhoor',nl:'Eet! (jij)',tip:'"نخور" = eet niet!'},
        {hz:'بگوی',tr:'bogoi',nl:'Zeg! / Vertel! (jij)',tip:'"چی بگوم؟" = wat moet ik zeggen? — Hazaragi: "بگوی" ipv Iraans "بگو"'},
        {hz:'بده',tr:'beda',nl:'Geef! (jij)',tip:'"بدش" = geef het aan hem/haar'},
        {hz:'بخون',tr:'bekhoon',nl:'Lees! / Studeer! (jij)',tip:'Van "خواندن" — zowel lezen als zingen'},
        {hz:'ببین',tr:'bebin',nl:'Kijk! (jij)',tip:'"ببین" ook als "luister eens!" in gesprek'},
        {hz:'نرو',tr:'na-ro',nl:'Ga niet!',tip:'"نه" + werkwoordstam = verbod'},
      ],
      sentences:[
        {hz:'بیا اینجا، بنشین',tr:'biya injaa, benshin',nl:'Kom hier, ga zitten'},
        {hz:'غذا بخور، سرد می‌شه',tr:'ghazaa bekhoor, sard mi-sha',nl:'Eet je eten, het wordt koud'},
        {hz:'نرو، هنوز زوده',tr:'na-ro, hanoz zuda',nl:'Ga niet, het is nog vroeg'},
      ]
    },

    { id:'gram2_vragen', title:'Vraagzinnen', sub:'Waar, wat, wie, waarom...', icon:'❓', xp:25,
      pronTips:['خ'],
      grammar:'Een vraag stellen in Hazaragi: gebruik een vraagwoord vooraan, of spreek de zin gewoon met een vragende toon uit.\n\nDe belangrijkste vraagwoorden:\nکجا (waar) · چی (wat) · کی (wie/wanneer) · چرا (waarom) · چتور (hoe — Hazaragi!) · چند (hoeveel) · کدام (welke)\n\nLet op: Hazaragi zegt چتور, niet چطور (dat is Iraans).',
      words:[
        {hz:'کجا',tr:'koja',nl:'Waar',tip:'"کجایی؟" = waar ben je?'},
        {hz:'چی',tr:'chi',nl:'Wat',tip:'"چی می‌خوای؟" = wat wil je?'},
        {hz:'کی',tr:'ki',nl:'Wie / Wanneer',tip:'Context bepaalt de betekenis'},
        {hz:'چرا',tr:'chera',nl:'Waarom',tip:'"چرا نمی‌آمدی؟" = waarom ben je niet gekomen? — veelgehoorde Hazaragi zin'},
        {hz:'چتور',tr:'chetor',nl:'Hoe',tip:'Hazaragi: "چتور" — NIET Iraans "چطور"'},
        {hz:'چند',tr:'chand',nl:'Hoeveel',tip:'"چند پول اَس؟" = hoeveel kost het?'},
        {hz:'کدام',tr:'kodaam',nl:'Welke',tip:'"کدام یکی؟" = welke? — bij kiezen tussen opties'},
      ],
      sentences:[
        {hz:'کجا می‌ری؟',tr:'koja me-ri?',nl:'Waar ga jij naartoe?'},
        {hz:'چرا نمی‌آی؟',tr:'chera nemi-aayi?',nl:'Waarom kom je niet?'},
        {hz:'چتور هستی، یارم؟',tr:'chetor hasti, yaaram?',nl:'Hoe gaat het, lieverd?'},
      ]
    },
  ]},

  { id:'ch11', label:'🌆 Hoofdstuk 11 · Stad & Vervoer', color:'#5BB8FF', lessons:[

    { id:'transport', title:'Vervoer', sub:'Bus, taxi, motor, fiets...', icon:'🚌', xp:40,
      pronTips:['ر'],
      grammar:'"موتر" (motar) = auto in Hazaragi.',
      words:[
        {hz:'موتر',tr:'motar',nl:'Auto',tip:'Hazaragi woord'},
        {hz:'بس',tr:'bas',nl:'Bus',tip:'"بس سوار شدن" = in de bus stappen'},
        {hz:'تکسی',tr:'taksi',nl:'Taxi',tip:'"تکسی گرفتن" = een taxi nemen'},
        {hz:'موترسایکل',tr:'motarsaaykl',nl:'Motorfiets',tip:'Van "motor" + "cycle" — veelgebruikt in Afghaanse steden'},
        {hz:'بایسیکل',tr:'baaysikal',nl:'Fiets',tip:'Van "bicycle" — minder gebruikelijk dan motersaaykl'},
        {hz:'ریکشا',tr:'riksha',nl:'Riksja / Driewieler',tip:'Veelgebruikt vervoer in Afghanistan'},
        {hz:'ایستگاه',tr:'istgaah',nl:'Halte / Station',tip:'"ایستگاه بس" = bushalte — ook voor treinstations'},
        {hz:'رانندگی',tr:'raanandagi',nl:'Rijden / Autorijden',tip:'"رانندگی کردن" = autorijden — "راننده" = chauffeur'},
        {hz:'ترافیک',tr:'trafik',nl:'Verkeer',tip:'Leenwoord — Kabul staat bekend om zijn druk verkeer'},
        {hz:'پرواز',tr:'parwaaz',nl:'Vlucht',tip:'"پرواز" = ook vluchten (vogel)'},
      ],
      sentences:[
        {hz:'بس کجاس؟ ایستگاه نزدیک اَس؟',tr:'bas kojas? istgaah nazdik as?',nl:'Waar is de bus? Is de halte dichtbij?'},
        {hz:'تکسی بگیر، ترافیک خیلی زیاد اَس',tr:'taksi begir, trafik khaili ziyaad as',nl:'Neem een taxi, het verkeer is heel druk'},
        {hz:'موترم خراب شد',tr:'motaram khraab shod',nl:'Mijn auto is kapot gegaan'},
      ]
    },

    { id:'city_places', title:'In de stad', sub:'Bank, ziekenhuis, winkel...', icon:'🏙️', xp:40,
      pronTips:['خ','ق'],
      grammar:'"شفاخانه" (shafaakhaana) = ziekenhuis in Hazaragi. Letterlijk "huis van genezing".',
      words:[
        {hz:'شفاخانه',tr:'shafaakhaana',nl:'Ziekenhuis',tip:'"شفا" = genezing + "خانه" = huis'},
        {hz:'بانک',tr:'baank',nl:'Bank',tip:'"دَ بانک رفتم" = ik ging naar de bank'},
        {hz:'دوکان',tr:'dokaan',nl:'Winkel',tip:'Hazaragi woord voor winkel — klein en persoonlijk'},
        {hz:'مارکیت',tr:'maarkit',nl:'Winkelcentrum / Markt',tip:'Van "market" — groter dan "دوکان"'},
        {hz:'پارک',tr:'paark',nl:'Park',tip:'Leenwoord — "دَ پارک رفتن" = naar het park gaan'},
        {hz:'مسجد',tr:'masjed',nl:'Moskee',tip:'Van Arabisch "سجود" = knielen — centrum van gemeenschap'},
        {hz:'رستورانت',tr:'restoraat',nl:'Restaurant',tip:'Van "restaurant" — ook "رستوران" geschreven'},
        {hz:'پوست خانه',tr:'post khaana',nl:'Postkantoor',tip:'"پوست" = post (leenwoord)'},
        {hz:'کوچه',tr:'kocha',nl:'Steeg / Straat',tip:'Kleine straat of steeg'},
        {hz:'سرک',tr:'sarak',nl:'Weg / Straat',tip:'Hazaragi woord'},
      ],
      sentences:[
        {hz:'شفاخانه کجاس؟ مریض هستم',tr:'shafaakhaana kojas? mariz hastom',nl:'Waar is het ziekenhuis? Ik ben ziek'},
        {hz:'دَ بانک باید بروم',tr:'da baank baayad berom',nl:'Ik moet naar de bank'},
        {hz:'این سرک خیلی شلوغ اَس',tr:'ain sarak khaili shaloogh as',nl:'Deze straat is heel druk'},
      ]
    },

    { id:'city_life', title:'Stadsleven', sub:'Buren, flat, lift...', icon:'🏢', xp:35,
      pronTips:['خ'],
      grammar:'Afghaanse steden groeien snel — veel nieuwe woorden zijn directe leenwoorden uit het Engels.',
      words:[
        {hz:'آپارتمان',tr:'aapaartemaan',nl:'Appartement',tip:'Van "appartement" — modern stadswoord'},
        {hz:'همسایه',tr:'hamsaaya',nl:'Buur',tip:'"هم" = samen + "سایه" = schaduw — letterlijk "samen onder dezelfde schaduw"'},
        {hz:'لفت',tr:'left',nl:'Lift',tip:'Leenwoord van "lift"'},
        {hz:'پله',tr:'pala',nl:'Trap',tip:'"از پله بالا رفتم" = ik liep de trap op'},
        {hz:'محله',tr:'mahalla',nl:'Buurt / Wijk',tip:'Van Arabisch "محل" = plek — de buurt als gemeenschap'},
        {hz:'شهر',tr:'shahr',nl:'Stad',tip:'"شهر" tegenover "ده" (dorp) — tegenstelling stad/platteland'},
        {hz:'ده',tr:'deh',nl:'Dorp',tip:'In Hazaragi ook: "10" — context bepaalt de betekenis!'},
        {hz:'آدرس',tr:'aadres',nl:'Adres',tip:'Van "adres" — leenwoord in Hazaragi'},
        {hz:'پل',tr:'pol',nl:'Brug',tip:'"پل خشتی" = beroemde historische brug in Kabul'},
      ],
      sentences:[
        {hz:'آپارتمانم دَ طبقه سوم اَس',tr:'aapaartemaanam da tabqa sowm as',nl:'Mijn appartement is op de derde verdieping'},
        {hz:'همسایمو خیلی خوب هستن',tr:'hamsaayamo khaili khob hastan',nl:'Onze buren zijn heel goed'},
        {hz:'شهر امشب خیلی گوشکیل اَس',tr:'shahr emshab khaili goshkil as',nl:'De stad is vanavond heel mooi'},
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
        {hz:'وای‌فای پسوردش چیس؟',tr:'waay-faay paswerdash chis?',nl:'Wat is het wifi-wachtwoord?'},
        {hz:'کمپیوترم خراب شد، کمک کو',tr:'kampyutaram khraab shod, kamak ko',nl:'Mijn computer is stuk gegaan, help me'},
        {hz:'بیتریم تموم شد، شارژر داری؟',tr:'beetrim tamom shod, shaarjar daari?',nl:'Mijn batterij is leeg, heb je een oplader?'},
      ]
    },

    { id:'social_media', title:'Sociale media', sub:'Sturen, liken, delen...', icon:'📲', xp:35,
      pronTips:['خ'],
      grammar:'"پیام دادن" (payaam daadan) = een bericht sturen. In Hazaragi is dit de standaard uitdrukking.',
      words:[
        {hz:'پیام',tr:'payaam',nl:'Bericht',tip:'"پیام دادن" = een bericht sturen — ook: nieuws/boodschap'},
        {hz:'عکس',tr:'aks',nl:'Foto',tip:'"عکس گرفتن" = foto nemen — van Arabisch "عکس" = spiegel/reflectie'},
        {hz:'ویدیو',tr:'widyo',nl:'Video',tip:'Leenwoord van "video" — Hazaragi uitspraak: "widyo"'},
        {hz:'لایک کردن',tr:'layk kardan',nl:'Liken',tip:'Van "like" + "کردن" — moderne samenstelling'},
        {hz:'شیر کردن',tr:'sher kardan',nl:'Delen / Sharen',tip:'Van "share"'},
        {hz:'فالو کردن',tr:'faalo kardan',nl:'Volgen',tip:'Van "follow"'},
        {hz:'گروپ',tr:'grop',nl:'Groep',tip:'WhatsApp groep'},
        {hz:'پست',tr:'post',nl:'Post / Bericht',tip:'Social media post'},
        {hz:'کامنت',tr:'kaamant',nl:'Reactie / Comment',tip:'Van "comment" — kaamant schrijven = reageren'},
        {hz:'استوری',tr:'estori',nl:'Story',tip:'Instagram/WhatsApp story'},
      ],
      sentences:[
        {hz:'عکست گوشکیل اَس، لایک کردم',tr:'aksat goshkil as, layk kardom',nl:'Jouw foto is mooi, ik heb geliket'},
        {hz:'پیام بده وختی رسیدی',tr:'payaam bede wakhti rasidi',nl:'Stuur een bericht als je bent aangekomen'},
        {hz:'این ویدیو را شیر کو',tr:'ain widyo ra sher ko',nl:'Deel deze video'},
      ]
    },

    { id:'news_media', title:'Nieuws & Actualiteit', sub:'Nieuws, oorlog, politiek...', icon:'📰', xp:45,
      pronTips:['خ','ع','غ'],
      grammar:'"خبر" (khabar) = nieuws/bericht. "خبر داری؟" = weet je het al? (informeel)',
      words:[
        {hz:'خبر',tr:'khabar',nl:'Nieuws / Bericht',tip:'"خبر داری؟" = weet je het al?'},
        {hz:'رادیو',tr:'raadyo',nl:'Radio',tip:'Leenwoord — "رادیو گوش می‌دم" = ik luister radio'},
        {hz:'تلویزیون',tr:'telwizyon',nl:'Televisie',tip:'Leenwoord — Hazaragi uitspraak: "telwizyon"'},
        {hz:'روزنامه',tr:'roznama',nl:'Krant',tip:'"روز" = dag, "نامه" = brief/letter'},
        {hz:'سیاست',tr:'siyaasat',nl:'Politiek',tip:'Van Arabisch "سیاسة" = bestuur — "سیاست‌مدار" = politicus'},
        {hz:'صلح',tr:'solh',nl:'Vrede',tip:'"ایشالله صلح می‌آید" = inshallah komt de vrede'},
        {hz:'جنگ',tr:'jang',nl:'Oorlog',tip:'"جنگ" ook figuurlijk: ruzie/conflict'},
        {hz:'حق',tr:'haq',nl:'Recht / Waarheid',tip:'"حق داری" = je hebt gelijk'},
        {hz:'آزادی',tr:'aazaadi',nl:'Vrijheid',tip:'Van "آزاد" = vrij + "-ی" — diep woord voor diaspora'},
        {hz:'انتخابات',tr:'entekhaabaat',nl:'Verkiezingen',tip:'Van Arabisch "انتخاب" = keuze + "-ات" meervoud'},
      ],
      sentences:[
        {hz:'خبرهای امروز چیس؟',tr:'khabarhaaye emroz chis?',nl:'Wat is het nieuws van vandaag?'},
        {hz:'ایشالله صلح می‌آد',tr:'ishaallah solh mi-aad',nl:'Inshallah komt de vrede'},
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
        {hz:'مهاجر',tr:'mohaajir',nl:'Migrant',tip:'Van Arabisch "هجرت" = migratie — het lot van velen in de diaspora'},
        {hz:'پناهنده',tr:'panaahanda',nl:'Vluchteling',tip:'Van "پناه" = bescherming + "-نده" = zoeker — pijnlijk woord'},
        {hz:'اقامت',tr:'eqaamat',nl:'Verblijfsvergunning',tip:'"اقامت گرفتن" = verblijfsvergunning krijgen — eerste stap'},
        {hz:'ویزه',tr:'wiza',nl:'Visum',tip:'"ویزه گرفتن" = visum aanvragen — niet vanzelfsprekend voor Afghanen'},
        {hz:'سفارت',tr:'sefaarat',nl:'Ambassade',tip:'"سفارت افغانستان" = Afghaanse ambassade — eerste hulp in het buitenland'},
        {hz:'تابعیت',tr:'taabi\'iyat',nl:'Nationaliteit',tip:'"تابعیت هالندی" = Nederlandse nationaliteit — mijlpaal'},
      ],
      sentences:[
        {hz:'دَ غربت هستم اما دلم دَ وطن اَس',tr:'da ghorbat hastom ama delam da watan as',nl:'Ik ben in het buitenland maar mijn hart is thuis'},
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
        {hz:'همکاری',tr:'hamkaari',nl:'Samenwerking',tip:'"هم" = samen + "کاری" = werk — kern van Hazara gemeenschapsleven'},
        {hz:'جامعه',tr:'jaama\'a',nl:'Gemeenschap',tip:'Van Arabisch "جماعت" — breder dan één familie'},
        {hz:'فامیل',tr:'faamil',nl:'Familie (groot)',tip:'Hele familiekring — breder dan "خانواده"'},
        {hz:'رهبر',tr:'rahbar',nl:'Leider',tip:'"راه" = weg + "بر" = drager — letterlijk "wegbrenger"'},
        {hz:'مسئولیت',tr:'mas\'ooliyat',nl:'Verantwoordelijkheid',tip:'"مسئولیت داشتن" = verantwoordelijkheid hebben'},
        {hz:'احترام',tr:'ehtaraam',nl:'Respect',tip:'"احترام کردن" = respecteren'},
        {hz:'اعتماد',tr:'e\'temaad',nl:'Vertrouwen',tip:'"اعتماد کردن" = vertrouwen op — basis van elke relatie'},
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
        {hz:'هویت',tr:'howiyat',nl:'Identiteit',tip:'Van Arabisch "هُویَّة" — wie je bent en waar je vandaan komt'},
        {hz:'ریشه',tr:'risha',nl:'Wortel / Afkomst',tip:'"ریشه داشتن" = geworteld zijn'},
        {hz:'زبان مادری',tr:'zabaan maadari',nl:'Moedertaal',tip:'"زبان" = taal + "مادری" = van moeder — de taal van het hart'},
        {hz:'فرهنگ',tr:'farhang',nl:'Cultuur',tip:'Van oud Perzisch — alles wat een volk kenmerkt'},
        {hz:'نسل',tr:'nasl',nl:'Generatie',tip:'"نسل جدید" = nieuwe generatie — ook: nakomelingen'},
        {hz:'میراث',tr:'miraas',nl:'Erfenis / Nalatenschap',tip:'"میراث فرهنگی" = cultureel erfgoed — wat we doorgeven'},
        {hz:'افتخار',tr:'eftekhar',nl:'Trots',tip:'"افتخار می‌کنم" = ik ben trots'},
        {hz:'حافظه',tr:'haafeza',nl:'Geheugen / Herinneringen',tip:'"حافظه داشتن" = iets onthouden — ook: de dichter Hafiz (حافظ)'},
        {hz:'آینده',tr:'aayanda',nl:'Toekomst',tip:'"آینده روشن" = heldere toekomst — hoop voor de diaspora'},
      ],
      sentences:[
        {hz:'من هزاره هستم و افتخار می‌کنم',tr:'ma hazaara hastom wa eftekhar mi-konom',nl:'Ik ben Hazara en ik ben er trots op'},
        {hz:'زبان مادریم را فراموش نمی‌کنم',tr:'zabaan maadaram ra faraamoosh na-mi-konom',nl:'Ik vergeet mijn moedertaal niet'},
        {hz:'ریشه‌هامو قوی اَس، هر کجا باشم',tr:'rishahaamo qawi as, har koja baashom',nl:'Mijn wortels zijn sterk, waar ik ook ben'},
      ]
    },
  ]},

  { id:'ch14', label:'🌐 Hoofdstuk 14 · Landen & Nationaliteiten', color:'#5BB8FF', lessons:[

    { id:'countries', title:'Landen', sub:'Afghanistan, Iran, Europa...', icon:'🗺️', xp:40,
      pronTips:['خ'],
      grammar:'"کشور" (keshwar) = land/staat. "افغانستان" spreek je Hazaragi uit als "afghaanestaan".',
      words:[
        {hz:'کشور',tr:'keshwar',nl:'Land / Staat',tip:'"کدام کشور؟" = welk land? — van oud Perzisch "کشور"'},
        {hz:'افغانستان',tr:'afghaanestaan',nl:'Afghanistan',tip:'Geboorteland van de Hazara — "ستان" = land van'},
        {hz:'ایران',tr:'iraan',nl:'Iran',tip:'Lange aa'},
        {hz:'پاکستان',tr:'paakestaan',nl:'Pakistan',tip:'Buurland — veel Hazara vluchtten hierheen'},
        {hz:'هالند',tr:'haaland',nl:'Nederland',tip:'"هالند" = Hazaragi/Afghaans voor Nederland'},
        {hz:'آلمان',tr:'aalemaan',nl:'Duitsland',tip:'Van oud Arabisch/Perzisch "Almanya"'},
        {hz:'انگلستان',tr:'engelestaan',nl:'Engeland',tip:'"انگل" + "ستان" = land van de Engelsen'},
        {hz:'آمریکا',tr:'amriikaa',nl:'Amerika',tip:'Doel van veel diaspora Hazara'},
        {hz:'اروپا',tr:'oropaa',nl:'Europa',tip:'"دَ اروپا زندگی می‌کنم" = ik woon in Europa'},
        {hz:'ترکیه',tr:'torkiya',nl:'Turkije',tip:'Doorreisland voor veel Afghaanse vluchtelingen'},
        {hz:'فرانسه',tr:'farraansa',nl:'Frankrijk',tip:'Van "France"'},
        {hz:'آسترالیا',tr:'oostraaliya',nl:'Australië',tip:'Van "Australia" — Hazaragi uitspraak'},
      ],
      sentences:[
        {hz:'من دَ هالند زندگی می‌کنم',tr:'ma da haaland zendagi mi-konom',nl:'Ik woon in Nederland'},
        {hz:'وطنم افغانستان اَس',tr:'watanam afghaanestaan as',nl:'Mijn vaderland is Afghanistan'},
        {hz:'دَ کدام کشور هستی؟',tr:'da kodaam keshwar hasti?',nl:'In welk land ben jij?'},
      ]
    },

    { id:'nationalities', title:'Nationaliteiten', sub:'Afghaans, Nederlands, Iraans...', icon:'🏳️', xp:35,
      pronTips:['خ'],
      grammar:'Nationaliteit: naam van land + "-ی" = "-i". افغان + ی = افغانی. Simpel patroon!',
      words:[
        {hz:'افغان',tr:'afghaan',nl:'Afghaan',tip:'"افغان" = het volk, "افغانستان" = het land'},
        {hz:'افغانی',tr:'afghaani',nl:'Afghaans / Afghaan (bijv.nw.)',tip:'"},افغان" + "-ی"'},
        {hz:'هزاره',tr:'hazaara',nl:'Hazara',tip:'Eigen naam voor het volk — met trots uitgesproken'},
        {hz:'ایرانی',tr:'iraani',nl:'Iranees',tip:'Lange aa'},
        {hz:'پاکستانی',tr:'paakistaani',nl:'Pakistaans',tip:'"پاکستانی" = iemand uit Pakistan'},
        {hz:'هالندی',tr:'haalandii',nl:'Nederlands',tip:'"ملیتم هالندی اَس" = mijn nationaliteit is Nederlands'},
        {hz:'آلمانی',tr:'aalmaaní',nl:'Duits',tip:'Van "Almanya" — Duits burger'},
        {hz:'عربی',tr:'arabi',nl:'Arabisch',tip:'"عربی خواندن" = Arabisch lezen — ook de Koran taal'},
        {hz:'ملیت',tr:'milliyat',nl:'Nationaliteit',tip:'Van Arabisch "ملت" = natie — je officiële nationaliteit'},
        {hz:'اصالت',tr:'asaalat',nl:'Afkomst / Herkomst',tip:'"اصالتم هزاره" = mijn afkomst is Hazara — identiteitsverklaring'},
      ],
      sentences:[
        {hz:'من افغانی هستم، اصالتم هزاره',tr:'ma afghaani hastom, asaalatam hazaara',nl:'Ik ben Afghaans, mijn afkomst is Hazara'},
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
        {hz:'چند زبان می‌فامی؟',tr:'chand zabaan me-faami?',nl:'Hoeveel talen ken jij?'},
        {hz:'هزارگی زبان مادریم اَس',tr:'hazaaragi zabaan maadaram as',nl:'Hazaragi is mijn moedertaal'},
        {hz:'انگلیسی یاد می‌گیرم',tr:'engelisi yaad mi-girom',nl:'Ik leer Engels'},
      ]
    },
  ]},

  { id:'ch15', label:'💼 Hoofdstuk 15 · Beroepen & Ambities', color:'#FF8C61', lessons:[

    { id:'professions', title:'Beroepen', sub:'Dokter, leraar, ingenieur...', icon:'👨‍💼', xp:45,
      pronTips:['ع','خ'],
      grammar:'"کار می‌کنم" = ik werk. Beroep + "هستم" = ik ben [beroep]. "داکتر هستم" = ik ben dokter.',
      words:[
        {hz:'داکتر',tr:'daaktar',nl:'Dokter',tip:'"داکتر" = Hazaragi/Afghaans (niet Iraans "پزشک")'},
        {hz:'معلم',tr:'mo\'allem',nl:'Leraar',tip:'"ع" = zachte keel-stop'},
        {hz:'مهندس',tr:'mohandes',nl:'Ingenieur',tip:'Van Arabisch "هندسة" = geometrie/meetkunde'},
        {hz:'قاضی',tr:'qaazi',nl:'Rechter',tip:'"ق" = diepe keel-k — van Arabisch "قضاء" = rechtspraak'},
        {hz:'پولیس',tr:'polis',nl:'Politie / Agent',tip:'Hazaragi woord'},
        {hz:'آشپز',tr:'aashpaz',nl:'Kok',tip:'"آشپزی" = koken'},
        {hz:'راننده',tr:'raananda',nl:'Chauffeur / Bestuurder',tip:'Van "راندن" = rijden + "-نده" = doer'},
        {hz:'کارگر',tr:'kaarghar',nl:'Arbeider / Werker',tip:'"کار" = werk + "-گر" = doer — ook: vakman'},
        {hz:'خواننده',tr:'khwaananda',nl:'Zanger',tip:'"خواندن" = zingen/lezen'},
        {hz:'نقاش',tr:'naqqaash',nl:'Schilder / Kunstenaar',tip:'Van Arabisch "نقش" = tekenen/graveren'},
        {hz:'دهقان',tr:'dehqaan',nl:'Boer',tip:'Traditioneel Hazara beroep'},
      ],
      sentences:[
        {hz:'داکتر هستم، دَ شفاخانه کار می‌کنم',tr:'daaktar hastom, da shafaakhaana kaar mi-konom',nl:'Ik ben dokter, ik werk in het ziekenhuis'},
        {hz:'آرزومه معلم بشم',tr:'aarozomam mo\'allem beshom',nl:'Mijn droom is om leraar te worden'},
        {hz:'باواکلانم دهقان بود',tr:'baawakalanam dehqaan bood',nl:'Mijn opa was boer'},
      ]
    },

    { id:'dreams_ambitions', title:'Dromen & Ambities', sub:'Willen worden, hopen, plannen...', icon:'🌟', xp:50,
      pronTips:['خ','آ'],
      grammar:'"آرزو" (aarzo) = droom/wens. "می‌خوام بشم" = ik wil worden. Toekomst: "می‌خوام" + infinitief.',
      words:[
        {hz:'آرزو',tr:'aarzo',nl:'Droom / Wens',tip:'Mooier dan "خواب" — meer als een levenswens'},
        {hz:'هدف',tr:'hadaf',nl:'Doel',tip:''},
        {hz:'امید',tr:'omid',nl:'Hoop',tip:''},
        {hz:'موفق',tr:'mowafaq',nl:'Succesvol',tip:''},
        {hz:'مشهور',tr:'mashhoor',nl:'Beroemd',tip:''},
        {hz:'ثروتمند',tr:'sarwatmand',nl:'Rijk',tip:''},
        {hz:'می‌خوام بشم',tr:'mi-khom beshom',nl:'Ik wil worden',tip:'Vaste uitdrukking voor ambities'},
        {hz:'تلاش',tr:'talaash',nl:'Inspanning / Moeite',tip:'"تلاش کردن" = hard werken'},
        {hz:'پیشرفت',tr:'pishraft',nl:'Vooruitgang / Succes',tip:''},
        {hz:'رویا',tr:'royaa',nl:'Droom (poëtisch)',tip:'Van "رؤیا" — mooie dromen'},
      ],
      sentences:[
        {hz:'آرزومه داکتر بشم و مردم را کمک کنم',tr:'aarozomam daaktar beshom wa mardom ra kamak konom',nl:'Mijn droom is dokter te worden en mensen te helpen'},
        {hz:'امید خودتو از دست نده',tr:'omid khodata az dast nada',nl:'Verlies je hoop niet'},
        {hz:'با تلاش همه چیز ممکن اَس',tr:'baa talaash hama chiz momken as',nl:'Met inspanning is alles mogelijk'},
      ]
    },

    { id:'money_finance', title:'Geld & Financiën', sub:'Loon, sparen, betalen...', icon:'💰', xp:40,
      pronTips:['خ'],
      grammar:'"معاش" (ma\'aash) = salaris in Hazaragi.',
      words:[
        {hz:'پول',tr:'pool',nl:'Geld',tip:'Lange oo'},
        {hz:'معاش',tr:'ma\'aash',nl:'Salaris / Loon',tip:'Hazaragi woord'},
        {hz:'پس‌انداز',tr:'pas-andaaz',nl:'Spaargeld',tip:'"پس‌انداز کردن" = sparen'},
        {hz:'قرض',tr:'qarz',nl:'Schuld / Lening',tip:'"قرض دادن" = uitlenen'},
        {hz:'سود',tr:'sood',nl:'Winst / Rente',tip:''},
        {hz:'ضرر',tr:'zarar',nl:'Verlies',tip:''},
        {hz:'حساب',tr:'hesaab',nl:'Rekening / Berekening',tip:''},
        {hz:'بیمه',tr:'bima',nl:'Verzekering',tip:''},
        {hz:'مالیه',tr:'maaliya',nl:'Belasting',tip:'Hazaragi woord'},
        {hz:'سرمایه',tr:'sarmaaya',nl:'Kapitaal / Investering',tip:''},
      ],
      sentences:[
        {hz:'معاشم کم اَس، می‌خوام بیشتر کار کنم',tr:'ma\'aasham kam as, mi-khom bishtar kaar konom',nl:'Mijn salaris is laag, ik wil meer werken'},
        {hz:'پول پس‌انداز کو، آینده مهم اَس',tr:'pool pas-andaaz ko, aayanda mohim as',nl:'Spaar geld, de toekomst is belangrijk'},
        {hz:'حسابم را بررسی کردم',tr:'hesaabam ra barrasi kardom',nl:'Ik heb mijn rekening gecontroleerd'},
      ]
    },
  ]},

  { id:'ch_gram3', label:'📖 Grammatica 3 · Gevorderd', color:'#8B6FF0', lessons:[

    { id:'gram3_sov', title:'Zinsbouw: S-O-W', sub:'Subject · Object · Werkwoord', icon:'📐', xp:30,
      pronTips:['ر'],
      grammar:'In Hazaragi staat het werkwoord altijd aan het EINDE van de zin — anders dan in het Nederlands.\n\n"Ik eet brood" → من نان می‌خورم (letterlijk: ik brood eet)\n"Jij leest een boek" → تو کتاب می‌خونی (letterlijk: jij boek leest)\n\nTijd en plaats komen vóór het werkwoord: "من دیروز مکتب رفتم" = ik gisteren school ging (ik ging gisteren naar school).\n\nHet object wordt soms gemarkeerd met "را" (ra): تو را دوست دارم = ik hou van jou.',
      words:[
        {hz:'من نان می‌خورم',tr:'ma naan mi-khorom',nl:'Ik eet brood',tip:'S(من) + O(نان) + W(می‌خورم)'},
        {hz:'او کتاب می‌خواند',tr:'oo ketaab me-khwaand',nl:'Hij/zij leest een boek',tip:'S + O + W — werkwoord altijd last'},
        {hz:'مو چای می‌خوریم',tr:'mo chaay me-khorim',nl:'Wij drinken thee',tip:'"مو" = wij (Hazaragi)'},
        {hz:'من تو را دوست دارم',tr:'ma tu ra dost darom',nl:'Ik hou van jou',tip:'"را" markeert het object'},
        {hz:'مو هزارگی یاد می‌گیریم',tr:'mo hazaaragi yaad me-girim',nl:'Wij leren Hazaragi',tip:'S + O + W'},
      ],
      sentences:[
        {hz:'من هر روز چای می‌نوشم',tr:'ma har roz chaay mi-noshom',nl:'Ik drink elke dag thee'},
        {hz:'او دیروز بازار رفت',tr:'oo diroz baazaar raft',nl:'Hij/zij ging gisteren naar de markt'},
        {hz:'شما چی کار می‌کنین؟',tr:'shoma chi kaar me-konin?',nl:'Wat doen jullie?'},
      ]
    },

    { id:'gram3_verleden', title:'Verleden tijd', sub:'Ik ging, jij at, hij zei...', icon:'⏪', xp:35,
      pronTips:['ر'],
      grammar:'Verleden tijd: verleden stam + uitgang. Geen "می‌"!\n\nDe uitgangen zijn precies hetzelfde als in de tegenwoordige tijd: -om · -i · -a · -im · -in · -an\nAlleen de stam verandert. Dat is waarom tijden soms op elkaar lijken — volkomen normaal!\n\nVoorbeeldstammen: رفت (gaan) · خورد (eten) · گفت (zeggen) · دید (zien) · آمد (komen) · کرد (doen)\n\nVoorbeeld: رفتم (raftom=ik ging) · رفتی (rafti=jij ging) · رفت (raft=hij/zij ging)\nOntkenning: نرفتم (ik ging niet)',
      words:[
        {hz:'رفتم',tr:'raftom',nl:'Ik ging',tip:'رفت + "-م" → Hazaragi: -om'},
        {hz:'رفتی',tr:'rafti',nl:'Jij ging',tip:'رفت + "-ی" (jij)'},
        {hz:'رفت',tr:'raft',nl:'Hij/Zij ging',tip:'Enkel de stam — geen uitgang'},
        {hz:'رفتیم',tr:'raftim',nl:'Wij gingen',tip:'رفت + "-یم" (wij)'},
        {hz:'خوردم',tr:'khordom',nl:'Ik at',tip:'Stam "خورد" + "-م" → Hazaragi: -om'},
        {hz:'گفتم',tr:'goftom',nl:'Ik zei',tip:'Stam "گفت" + "-م" → Hazaragi: -om'},
        {hz:'دیدم',tr:'didom',nl:'Ik zag',tip:'Stam "دید" + "-م" → Hazaragi: -om'},
        {hz:'نرفتم',tr:'na-raftom',nl:'Ik ging niet',tip:'"نه" + "رفتم" → "نرفتم"'},
      ],
      sentences:[
        {hz:'دیروز مکتب رفتم',tr:'diroz maktab raftom',nl:'Gisteren ging ik naar school'},
        {hz:'چی خوردی؟ نان خوردم',tr:'chi khordi? naan khordom',nl:'Wat at jij? Ik at brood'},
        {hz:'نرفتم چون مریض بودم',tr:'na-raftom chon mariz boodom',nl:'Ik ging niet omdat ik ziek was'},
      ]
    },

    { id:'gram3_postposities', title:'Voorzetsels', sub:'In, van, met, voor...', icon:'🔀', xp:30,
      pronTips:['خ'],
      grammar:'Hazaragi heeft voorzetsels — ze staan VÓÓR het zelfstandig naamwoord. Het belangrijkste: "دَ" (da) = Hazaragi kenmerkwoord voor "in/naar/bij". Farsi zegt "در" of "به" — Hazaragi zegt gewoon "دَ".',
      words:[
        {hz:'دَ',tr:'da',nl:'In / Naar / Bij',tip:'Hazaragi kenmerkwoord — doet het werk van meerdere voorzetsels'},
        {hz:'از',tr:'az',nl:'Van / Uit',tip:'"از کجا آمدی؟" = waar kom je vandaan?'},
        {hz:'با',tr:'baa',nl:'Met',tip:'"با هم" = samen (letterlijk: met elkaar)'},
        {hz:'برای',tr:'baraayi',nl:'Voor',tip:'"برای تو" = voor jou'},
        {hz:'تا',tr:'taa',nl:'Tot / Naar',tip:'"تا فردا" = tot morgen'},
        {hz:'بدون',tr:'bedoon',nl:'Zonder',tip:'"بدون تو" = zonder jou'},
        {hz:'دَ خانه',tr:'da khaana',nl:'Thuis / Naar huis',tip:'Typische Hazaragi constructie'},
      ],
      sentences:[
        {hz:'دَ مکتب می‌رم',tr:'da maktab mi-rom',nl:'Ik ga naar school',tip:'"دَ" = naar (Hazaragi)'},
        {hz:'از کجا آمدی؟',tr:'az koja aamadi?',nl:'Waar kom je vandaan?'},
        {hz:'با تو می‌آم، بدون تو نمی‌رم',tr:'baa tu mi-oom, bedoon tu na-mi-rom',nl:'Ik kom met jou, zonder jou ga ik niet'},
      ]
    },
  ]},

  { id:'ch16', label:'🌿 Hoofdstuk 16 · Natuur & Seizoenen', color:'#3DD6A3', lessons:[
    { id:'nature_seasons', title:'Seizoenen', sub:'Lente, zomer, herfst, winter...', icon:'🌸', xp:18,
      pronTips:['خ','آ'],
      grammar:'Let op: "خزان" is het Hazaragi/Dari woord voor herfst — niet "پاییز" (Farsi). Hazaragi bewaart het oudere woord!',
      words:[
        {hz:'بهار',tr:'bahaar',nl:'Lente',tip:'Lange aa — seizoen van Nowruz'},
        {hz:'تابستان',tr:'taabestaan',nl:'Zomer',tip:'Warm en lang in Hazarajat'},
        {hz:'خزان',tr:'khazaan',nl:'Herfst',tip:'Hazaragi/Dari woord — niet "پاییز"'},
        {hz:'زمستان',tr:'zemestaan',nl:'Winter',tip:'In Hazarajat extreem koud en sneeuwrijk'},
        {hz:'باران',tr:'baaraan',nl:'Regen',tip:'Lange aa — "باران آمد" = het regent'},
        {hz:'برف',tr:'barf',nl:'Sneeuw',tip:'"برف می‌باره" = het sneeuwt'},
        {hz:'آفتاب',tr:'aaftaab',nl:'Zon',tip:'"آفتاب می‌زنه" = de zon schijnt'},
        {hz:'هوا',tr:'hawaa',nl:'Weer / Lucht',tip:'"هوا خوش اَس" = het weer is mooi'},
      ],
      sentences:[
        {hz:'بهار آمد، گلا شگفت',tr:'bahaar aamad, golaa shegoft',nl:'De lente is gekomen, de bloemen zijn gebloeid'},
        {hz:'زمستان سرد اَس، برف می‌باره',tr:'zemestaan sard as, barf me-baara',nl:'De winter is koud, het sneeuwt'},
        {hz:'خزان آمد، دیگه هوا سرد می‌شه',tr:'khazaan aamad, diga hawaa sard mi-sha',nl:'De herfst is gekomen, het wordt nu koud'},
      ]
    },
    { id:'nature_land', title:'Natuur & Landschap', sub:'Bergen, rivieren, bomen, bloemen...', icon:'🏔️', xp:18,
      pronTips:['خ','آ'],
      grammar:'"کوه" (berg) is het symbool van Hazarajat. "دریا" betekent zowel rivier als zee in Hazaragi — context bepaalt de betekenis.',
      words:[
        {hz:'کوه',tr:'kooh',nl:'Berg',tip:'Lange oo — Hazarajat is een bergplateau'},
        {hz:'دریا',tr:'daryaa',nl:'Rivier / Zee',tip:'Betekent beide — context bepaalt'},
        {hz:'دشت',tr:'dasht',nl:'Steppe / Vlakte',tip:'Typisch Hazara landschap tussen de bergen'},
        {hz:'درخت',tr:'darakht',nl:'Boom',tip:'"درخت کاری" = bomen planten'},
        {hz:'گل',tr:'gol',nl:'Bloem',tip:'"گل" = ook een vrouwennaam'},
        {hz:'آو',tr:'aaw',nl:'Water',tip:'Hazaragi: "آو" — niet Iraans "آب"'},
        {hz:'زمین',tr:'zamin',nl:'Aarde / Grond',tip:'"زمین کشاورزی" = landbouwgrond'},
        {hz:'آسمان',tr:'aasmaan',nl:'Hemel / Lucht',tip:'Lange aa — "آسمان صاف" = heldere lucht'},
      ],
      sentences:[
        {hz:'کوه‌های هزارستان بلند اَن',tr:'koohaa-ye hazaaristaan boland an',nl:'De bergen van Hazarastan zijn hoog'},
        {hz:'آو صاف دریا گوشکیل اَس',tr:'aaw saaf daryaa goshkil as',nl:'Het heldere water van de rivier is mooi'},
        {hz:'دشت پر از گل شده، بهار اَس',tr:'dasht por az gol shoda, bahaar as',nl:'De vlakte staat vol bloemen, het is lente'},
      ]
    },
    { id:'nature_animals', title:'Dieren', sub:'Paard, koe, kat, vis, konijn...', icon:'🐾', xp:18,
      pronTips:['خ','ر'],
      grammar:'"اسپ" (paard) is het heilige dier van de Hazara — "بزکشی" is het nationale paardspel. "پشک" is het Hazaragi woord voor kat — niet "گربه" (Farsi).',
      words:[
        {hz:'اسپ',tr:'asp',nl:'Paard',tip:'Typisch Hazaragi — Farsi zegt "اسب"'},
        {hz:'گاو',tr:'gaaw',nl:'Koe',tip:'Lange aa — belangrijk werkdier'},
        {hz:'سگ',tr:'sag',nl:'Hond',tip:''},
        {hz:'پشک',tr:'pishak',nl:'Kat',tip:'Hazaragi woord — niet "گربه"'},
        {hz:'مرغ',tr:'murgh',nl:'Kip',tip:'"مرغابی" = eend'},
        {hz:'ماهی',tr:'maahee',nl:'Vis',tip:'"ماهی گرفتن" = vissen'},
        {hz:'پرنده',tr:'paranda',nl:'Vogel',tip:'Letterlijk "vliegend ding"'},
        {hz:'خرگوش',tr:'khargoosh',nl:'Konijn',tip:'Lange oo — ook het mascotte van Gulette!'},
      ],
      sentences:[
        {hz:'اسپ پهلوان حیوانِ مهم اَس',tr:'asp pahlawaane hayawaane mohim as',nl:'Het paard is een belangrijk dier voor de Hazara'},
        {hz:'پشکم شیر می‌خوره',tr:'pishakam sheer me-khora',nl:'Mijn kat drinkt melk'},
        {hz:'گاومو ده تا اَس، بزرگ اَس',tr:'gaawamo da taa as, bozorg as',nl:'We hebben tien koeien, het is groot'},
      ]
    },
  ]},

  { id:'ch17', label:'💊 Hoofdstuk 17 · Gezondheid & Lichaam', color:'#FF6B9D', lessons:[
    { id:'health_body', title:'Lichaamsdelen', sub:'Hoofd, hand, oog, mond...', icon:'🫀', xp:18,
      pronTips:['خ','ع'],
      grammar:'"دستت درد نکنه" — letterlijk "moge je hand geen pijn hebben". De mooiste manier om iemand te bedanken in Hazaragi!',
      words:[
        {hz:'سر',tr:'sar',nl:'Hoofd',tip:'"سردرد دارم" = ik heb hoofdpijn — "سر" ook voor bovenaan/begin'},
        {hz:'دست',tr:'dast',nl:'Hand / Arm',tip:'"دستت درد نکنه" = dank je voor je moeite'},
        {hz:'پا',tr:'paa',nl:'Voet / Been',tip:'Lange aa'},
        {hz:'چشم',tr:'chashm',nl:'Oog',tip:'"چشم" = ook "ja, met plezier!" — prachtig woord'},
        {hz:'گوش',tr:'gosh',nl:'Oor',tip:'"گوش بده" = luister op'},
        {hz:'دهن',tr:'dahan',nl:'Mond',tip:'Hazaragi: korter dan "دهان"'},
        {hz:'بینی',tr:'beenee',nl:'Neus',tip:''},
        {hz:'قلب',tr:'qalb',nl:'Hart',tip:'"قلب" = medisch hart; "دل" = gevoelshart'},
      ],
      sentences:[
        {hz:'سرم درد می‌کنه',tr:'saram dard me-kona',nl:'Mijn hoofd doet pijn'},
        {hz:'چشمام خسته اَن',tr:'chashmaame khasta an',nl:'Mijn ogen zijn moe'},
        {hz:'دستت درد نکنه، خوب پختی',tr:'dastat dard nakona, khob pakhti',nl:'Dank je voor je moeite, je hebt goed gekookt'},
      ]
    },
    { id:'health_illness', title:'Ziekte & Genezing', sub:'Ziek, medicijn, dokter...', icon:'🏥', xp:18,
      pronTips:['خ','ع'],
      grammar:'"داکتر" (daaktar) is de Hazaragi uitspraak. "شفاخانه" = ziekenhuis — letterlijk "huis van genezing". "شفا" betekent ook: herstelling van binnenuit.',
      words:[
        {hz:'مریض',tr:'mariz',nl:'Ziek / Patiënt',tip:'"مریض استم" = ik ben ziek — "مریض" ook voor patiënt'},
        {hz:'درد',tr:'dard',nl:'Pijn',tip:'"سرم درد می‌کنه" = mijn hoofd doet pijn'},
        {hz:'تب',tr:'tab',nl:'Koorts',tip:'"تب داری؟" = heb je koorts?'},
        {hz:'دوا',tr:'dawaa',nl:'Medicijn',tip:'"دوا خوردن" = medicijn innemen — letterlijk "eten"'},
        {hz:'داکتر',tr:'daaktar',nl:'Dokter',tip:'Typisch Hazaragi uitspraak'},
        {hz:'شفاخانه',tr:'shafaakhaana',nl:'Ziekenhuis',tip:'"شفا" = genezing + "خانه" = huis'},
        {hz:'صحی',tr:'sehhee',nl:'Gezond',tip:'"صحی باش" = blijf gezond — veelgehoorde afscheidswens'},
        {hz:'آرام',tr:'aaraam',nl:'Rust / Rustig',tip:'Lange aa — ook: "آرام باش" = kalmeer'},
      ],
      sentences:[
        {hz:'مریض استم، به داکتر می‌رم',tr:'mariz astom, ba daaktar mi-rom',nl:'Ik ben ziek, ik ga naar de dokter'},
        {hz:'دوا خوردم، حالا بهترم',tr:'dawaa khordom, haala bahtarom',nl:'Ik heb medicijn genomen, nu ben ik beter'},
        {hz:'ایشالله زود شفا می‌یابی',tr:'ishaallah zod shafaa me-yaabi',nl:'Inshallah word je snel beter'},
      ]
    },
    { id:'health_habits', title:'Gezonde Gewoonten', sub:'Slapen, sporten, eten, rusten...', icon:'🧘', xp:18,
      pronTips:['خ','و'],
      grammar:'"ورزش کردن" = sporten. Koppel taak + "کردن" voor dagelijkse gewoonten: "ورزش کردن", "استراحت کردن".',
      words:[
        {hz:'خواب',tr:'khwaab',nl:'Slaap',tip:'Lange aa — ook: "خواب دیدم" = ik heb gedroomd'},
        {hz:'ورزش',tr:'warzesh',nl:'Sport / Oefenen',tip:'"ورزش کردن" = sporten'},
        {hz:'خوراک',tr:'khoraak',nl:'Voedsel / Maaltijd',tip:''},
        {hz:'نوشیدن',tr:'noosheedan',nl:'Drinken',tip:'"آو نوشیدن" = water drinken'},
        {hz:'استراحت',tr:'esteraahat',nl:'Ontspanning',tip:'"استراحت کو" = ga rusten'},
        {hz:'قوت',tr:'qowwat',nl:'Kracht / Energie',tip:'"قوت داری؟" = heb je energie?'},
        {hz:'صبر',tr:'sabr',nl:'Geduld',tip:'"صبر کو" = wacht even / wees geduldig'},
        {hz:'پاک',tr:'paak',nl:'Schoon / Rein',tip:'"پاک بودن" = schoon zijn'},
      ],
      sentences:[
        {hz:'هشت ساعت خواب مهم اَس',tr:'hasht saa\'at khwaab mohim as',nl:'Acht uur slaap is belangrijk'},
        {hz:'روزانه ورزش کو، صحی می‌مانی',tr:'rozaana warzesh ko, sehhee me-maani',nl:'Sport dagelijks, dan blijf je gezond'},
        {hz:'آو زیاد بنوش، قوت می‌گیری',tr:'aaw ziyaad benoosh, qowwat me-giri',nl:'Drink veel water, je krijgt energie'},
      ]
    },
  ]},

  { id:'ch18', label:'🎭 Hoofdstuk 18 · Cultuur & Tradities', color:'#FFBE3D', lessons:[
    { id:'culture_celebrations', title:'Feesten & Tradities', sub:'Nowruz, bruiloft, feestdagen...', icon:'🎉', xp:20,
      pronTips:['خ','ع'],
      grammar:'"نوروز" valt op 21 maart — de eerste dag van de lente. "سور" is de Hazaragi bruiloft. "مبارک" zeg je bij elk feest: "مبارک باشه!"',
      words:[
        {hz:'نوروز',tr:'nawroz',nl:'Nieuwjaar (Perzisch)',tip:'Letterlijk "nieuwe dag" — begin lente'},
        {hz:'عید',tr:'eid',nl:'Feestdag / Eid',tip:'Islamitisch feest'},
        {hz:'جشن',tr:'jashn',nl:'Viering / Feest',tip:''},
        {hz:'مهمانی',tr:'mehmaanee',nl:'Bezoek / Bijeenkomst',tip:'"مهمانی رفتن" = op bezoek gaan'},
        {hz:'سور',tr:'soor',nl:'Bruiloft / Feestmaal',tip:'Typisch Hazaragi bruiloft met dohol en sarnai'},
        {hz:'هدیه',tr:'hadya',nl:'Cadeau',tip:'"هدیه دادن" = een cadeau geven'},
        {hz:'برکت',tr:'barakat',nl:'Zegen / Overvloed',tip:'"برکت داشته باشه" = moge het gezegend zijn'},
        {hz:'دعا',tr:'do\'aa',nl:'Gebed / Wens',tip:'"دعا می‌کنم" = ik bid voor je'},
      ],
      sentences:[
        {hz:'نوروز مبارک! سال نو خوش',tr:'nawroz mubaarak! saal-e-naw khosh',nl:'Gelukkig Nieuwjaar! Een goed nieuw jaar'},
        {hz:'سورِ عروسی شادمانه بود',tr:'soor-e-arosi shaadmaana bood',nl:'De bruiloft was vreugdevol'},
        {hz:'عید مبارک باشه، هدیه بیار!',tr:'eid mubaarak baasha, hadya biaar!',nl:'Gelukkige Eid, breng een cadeau!'},
      ]
    },
    { id:'culture_music', title:'Muziek & Kunst', sub:'Dohol, sarnai, gedicht, dans...', icon:'🎵', xp:18,
      pronTips:['خ','ر'],
      grammar:'"دهل" (dohol = grote trom) en "سرنی" (sarnai = hobo/fluit) zijn de twee onmisbare instrumenten bij elke Hazara bruiloft. Geen soor zonder dohol!',
      words:[
        {hz:'موزیک',tr:'moozeeq',nl:'Muziek',tip:''},
        {hz:'سرود',tr:'sorood',nl:'Lied / Hymne',tip:'"سرود خواندن" = zingen'},
        {hz:'دهل',tr:'dohol',nl:'Trommel / Drum',tip:'HET Hazara instrument bij feesten'},
        {hz:'سرنی',tr:'sarnaay',nl:'Hobo / Fluit',tip:'Traditioneel blaasinstrument — klinkt krachtig'},
        {hz:'رقص',tr:'raqs',nl:'Dans',tip:'"رقص کردن" = dansen'},
        {hz:'شعر',tr:'she\'r',nl:'Gedicht',tip:'Hazara poëzie is een levende traditie'},
        {hz:'نقاشی',tr:'naqqaashi',nl:'Tekening / Schilderij',tip:''},
        {hz:'داستان',tr:'daastaan',nl:'Verhaal',tip:'"داستان گفتن" = een verhaal vertellen'},
      ],
      sentences:[
        {hz:'دهل و سرنی موزیک هزارگی اَس',tr:'dohol o sarnaay moozeeq-e hazaaragi as',nl:'Dohol en sarnai zijn Hazaragi muziek'},
        {hz:'یک شعر هزارگی بخوان',tr:'yak she\'r-e hazaaragi bakhwaan',nl:'Lees een Hazaragi gedicht voor'},
        {hz:'عروسی بود، همه رقص کردن',tr:'arosi bood, hama raqs karden',nl:'Het was een bruiloft, iedereen danste'},
      ]
    },
    { id:'culture_food', title:'Hazaragi Keuken', sub:'Bolani, qorma, ashak, qaboli...', icon:'🍽️', xp:18,
      pronTips:['خ','ق'],
      grammar:'"بولانی" (gevulde flatbread), "اشک" (dumplings met prei en yoghurt) en "قابلی" (pilav met vlees en rozijnen) zijn de drie beroemdste Hazara gerechten. Elk heeft een eigen verhaal.',
      words:[
        {hz:'بولانی',tr:'bolaani',nl:'Gevulde flatbread',tip:'Gevuld met prei of aardappel — typisch Afghaans'},
        {hz:'قورمه',tr:'qorma',nl:'Stoofschotel',tip:'Basisgerecht — vlees met ui en kruiden'},
        {hz:'اشک',tr:'ashak',nl:'Dumplings met prei',tip:'Beroemd Afghaans gerecht — met qoroot erop'},
        {hz:'قابلی',tr:'qaaboli',nl:'Pilav met vlees en rozijnen',tip:'Nationaal gerecht Afghanistan — feestelijk'},
        {hz:'چلو',tr:'chalo',nl:'Gestoomde rijst',tip:'Witte rijst als basis'},
        {hz:'شیر',tr:'sheer',nl:'Melk',tip:'"شیر چای" = thee met melk'},
        {hz:'روغن',tr:'roghan',nl:'Olie / Vet',tip:'"روغن دنبه" = schapenvet — traditioneel'},
        {hz:'نمک',tr:'namak',nl:'Zout',tip:''},
      ],
      sentences:[
        {hz:'مادرم قورمه پختی، لذیذ بود',tr:'maadaram qorma pakhti, lazeez bood',nl:'Mijn moeder maakte stoofschotel, het was heerlijk'},
        {hz:'اشک غذای مخصوص هزاره اَس',tr:'ashak ghazaa-ye makhsos-e hazaara as',nl:'Ashak is een speciaal Hazara gerecht'},
        {hz:'امروز بولانی پختم، بیا بخور',tr:'emroz bolaani pakhtom, bia bakhoor',nl:'Vandaag heb ik bolani gemaakt, kom eten'},
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
        {hz:'تخم‌مرغ',tr:'tokhm-murgh',nl:'Ei',tip:'Letterlijk "kippenei"'},
      ],
      sentences:[
        {hz:'ناشتا نان و چای می‌خورم',tr:'naashta naan o chaay mi-khorom',nl:'\'s Ochtends eet ik brood en thee'},
        {hz:'گوشت و برنج غذای خوب اَس',tr:'gosht o berenj ghazaa-ye khob as',nl:'Vlees en rijst is goed eten'},
        {hz:'تخم‌مرغ و نان ناشتای خوب اَس',tr:'tukhm-morgh o naan naashta-ye khob as',nl:'Eieren en brood is een goed ontbijt'},
        {hz:'سبزی تازه از بازار خریدم',tr:'sabzee taaza az baazaar kharidom',nl:'Ik kocht verse groente van de markt'},
        {hz:'میوه شیرین دَ تابستان خوب اَس',tr:'mewa sheerin da taabestaan khob as',nl:'Zoet fruit is lekker in de zomer'},
      ]
    },
    { id:'food_taste', title:'Smaken & Smaak', icon:'👅', xp:18, words:[
        {hz:'شیرین',tr:'shirin',nl:'Zoet',tip:''},
        {hz:'تلخ',tr:'talkh',nl:'Bitter',tip:''},
        {hz:'شور',tr:'shor',nl:'Zout(ig)',tip:''},
        {hz:'ترش',tr:'torsh',nl:'Zuur',tip:''},
        {hz:'تند',tr:'tond',nl:'Pittig / Scherp',tip:''},
        {hz:'خوش‌مزه',tr:'khosh-maza',nl:'Lekker',tip:'"خوش" = goed + "مزه" = smaak'},
        {hz:'بدمزه',tr:'bad-maza',nl:'Vies / Niet lekker',tip:''},
        {hz:'گرم',tr:'garm',nl:'Warm / Heet',tip:''},
      ],
      sentences:[
        {hz:'این قورمه خوش‌مزه اَس',tr:'een qorma khosh-maza as',nl:'Deze stoofschotel is lekker'},
        {hz:'چای گرم می‌خوام',tr:'chaay garm mi-khom',nl:'Ik wil warme thee'},
        {hz:'مرچ تند اَس، آو بیار',tr:'morch tond as, aaw biyaar',nl:'De peper is pittig, breng water'},
        {hz:'این شیرینی خیلی شیرین اَس',tr:'een sheerini khaili sheerin as',nl:'Dit snoep is heel zoet'},
        {hz:'ترشی ترش اَس ولی خوش‌مزه',tr:'torshi torsh as wali khosh-maza',nl:'De augurk is zuur maar lekker'},
      ]
    },
    { id:'food_cooking', title:'Koken & Keuken', icon:'👨‍🍳', xp:18, words:[
        {hz:'آشپز',tr:'aashpaz',nl:'Kok / Chef',tip:'"آشپزی" = koken'},
        {hz:'دیگ',tr:'deg',nl:'Pan / Pot',tip:''},
        {hz:'کارد',tr:'kaard',nl:'Mes',tip:''},
        {hz:'بشقاب',tr:'boshqaab',nl:'Bord',tip:'Lange oo en aa'},
        {hz:'پختن',tr:'pokhtan',nl:'Koken (werkwoord)',tip:''},
        {hz:'بریدن',tr:'boredan',nl:'Snijden',tip:''},
        {hz:'سرختن',tr:'sorkhtan',nl:'Bakken / Braden',tip:''},
        {hz:'خوردن',tr:'khordan',nl:'Eten (werkwoord)',tip:''},
      ],
      sentences:[
        {hz:'مادرم خوب آشپزی می‌کنه',tr:'maadaram khob aashpazee me-kona',nl:'Mijn moeder kookt goed'},
        {hz:'گوشت را سرختم، بعد سبزی افزودم',tr:'gosht ra sorkhtom, ba\'d sabzee afzodom',nl:'Ik bakte het vlees, daarna voegde ik groente toe'},
        {hz:'کارد ره بیار، سبزی ره می‌بُرم',tr:'kaard ra biyaar, sabzee ra mi-burom',nl:'Breng het mes, ik snijd de groente'},
        {hz:'دیگ ره سر بار بان',tr:'deeg ra sar-e baar baan',nl:'Zet de pan op het vuur'},
        {hz:'بشقاب‌ها ره بشور لطفاً',tr:'boshqaabhaa ra boshor lotfan',nl:'Was de borden af alsjeblieft'},
      ]
    },
  ]},

  { id:'ch20', label:'💭 Hoofdstuk 20 · Gevoelens & Gedachten', color:'#A78BFA', lessons:[
    { id:'emotions_basic', title:'Basisgevoelens', icon:'💕', xp:20, words:[
        {hz:'خوشحال',tr:'khoshhaal',nl:'Blij / Gelukkig',tip:'"خوش" = goed + "حال" = toestand'},
        {hz:'غمگین',tr:'ghamgeen',nl:'Verdrietig / Bedroefd',tip:'Lange ee'},
        {hz:'ترسیده',tr:'tarseeda',nl:'Bang / Angstig',tip:'Van "ترسیدن" = bang zijn'},
        {hz:'خشمگین',tr:'khashmageen',nl:'Boos / Kwaad',tip:''},
        {hz:'حیران',tr:'hayraan',nl:'Verbaasd / Versteld',tip:'Lange aa'},
        {hz:'شرمنده',tr:'sharmanda',nl:'Verlegen / Beschaamd',tip:''},
        {hz:'دلتنگ',tr:'deltang',nl:'Heimwee / Gemist',tip:'"دل" = hart + "تنگ" = nauw'},
        {hz:'آرام',tr:'aaraam',nl:'Rustig / Kalm',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'وختی خانواده‌ام را می‌بینم خوشحالم',tr:'wakhti khaanawaadam ra mi-binom khoshhaalom',nl:'Als ik mijn familie zie ben ik blij'},
        {hz:'دلتنگ وطنم استم',tr:'deltang-e watnam astom',nl:'Ik mis mijn thuisland'},
        {hz:'چرا غمگینی؟ چی شده؟',tr:'cheraa ghamgeeni? chi shoda?',nl:'Waarom ben je verdrietig? Wat is er gebeurd?'},
        {hz:'نترس، مو باتو استیم',tr:'natars, mo baatu astim',nl:'Wees niet bang, wij zijn bij je'},
        {hz:'آرام باش، مشکلی نیس',tr:'aaraam baash, moshkeli nis',nl:'Wees rustig, er is geen probleem'},
      ]
    },
    { id:'emotions_thinking', title:'Gedachten & Ideeën', icon:'🧠', xp:18, words:[
        {hz:'فکر',tr:'fekr',nl:'Gedachte / Denken',tip:''},
        {hz:'خیال',tr:'khayaal',nl:'Idee / Verbeelding',tip:'Lange aa'},
        {hz:'یاد',tr:'yaad',nl:'Herinnering / Geheugen',tip:'Lange aa'},
        {hz:'رویا',tr:'royaa',nl:'Droom',tip:'Lange aa'},
        {hz:'امید',tr:'omid',nl:'Hoop',tip:'Lange ee'},
        {hz:'باور',tr:'baawor',nl:'Geloof / Overtuiging',tip:''},
        {hz:'فامیدن',tr:'famidan',nl:'Begrijpen',tip:''},
        {hz:'یاد گرفتن',tr:'yaad gereftan',nl:'Leren / Onthouden',tip:'"یاد" = geheugen + "گرفتن" = pakken'},
      ],
      sentences:[
        {hz:'فکر می‌کنم خوبَم',tr:'fekr mi-konom khobam',nl:'Ik denk dat het correct is'},
        {hz:'امیدم اَس که موفق می‌شم',tr:'omidam as ke mawaffaq mi-shom',nl:'Ik hoop dat ik succesvol word'},
        {hz:'یاد گرفتن هزارگی مهم اَس',tr:'yaad gereftan hazaaragi mohem as',nl:'Hazaragi leren is belangrijk'},
        {hz:'خیالم خوب نیس امروز',tr:'khayaalom khob nis emrooz',nl:'Ik voel me niet goed vandaag'},
        {hz:'باور دارم که موفق می‌شی',tr:'baawer daarem ke mawaffaq mi-shi',nl:'Ik geloof dat jij succesvol wordt'},
      ]
    },
    { id:'emotions_character', title:'Karakter & Relaties', icon:'🤝', xp:18, words:[
        {hz:'مهربان',tr:'mehrabaan',nl:'Vriendelijk / Lief',tip:'Lange aa'},
        {hz:'دوست',tr:'dost',nl:'Vriend',tip:''},
        {hz:'دشمن',tr:'doshman',nl:'Vijand',tip:''},
        {hz:'امین',tr:'amin',nl:'Eerlijk / Betrouwbaar',tip:'Lange ee'},
        {hz:'شجاع',tr:'shojaa',nl:'Dapper / Moedig',tip:'Hazara zijn bekend om hun moed'},
        {hz:'صادق',tr:'saadeq',nl:'Oprecht',tip:'Lange aa'},
        {hz:'احترام',tr:'ehtaraam',nl:'Respect',tip:'Lange aa'},
        {hz:'اعتماد',tr:'e\'temaad',nl:'Vertrouwen',tip:'Lange aa'},
      ],
      sentences:[
        {hz:'دوستم مهربان و امین اَس',tr:'dostam mehrabaan o amin as',nl:'Mijn vriend is vriendelijk en eerlijk'},
        {hz:'احترام مهم‌ترین چیز اَس',tr:'ehtaraam mohimtareen cheez as',nl:'Respect is het belangrijkste ding'},
        {hz:'شجاع باش، نترس',tr:'shojaa\' baash, natars',nl:'Wees dapper, wees niet bang'},
        {hz:'اعتماد خپکی ساخته می‌شه',tr:'e\'temaad khapki saakhta mi-sha',nl:'Vertrouwen wordt langzaam opgebouwd'},
        {hz:'دشمن ره دوست ساختن بهتر اَس',tr:'doshman ra dost saakhtan behtar as',nl:'Van een vijand een vriend maken is beter'},
      ]
    },
  ]},

  { id:'ch_gram4', label:'📖 Grammatica 4 · Modale werkwoorden', color:'#8B6FF0', lessons:[

    { id:'gram4_modal', title:'Modale werkwoorden', sub:'Kunnen, moeten, mogen...', icon:'⚙️', xp:35,
      pronTips:['ت'],
      grammar:'De drie belangrijkste modale werkwoorden:\n\nمی‌تانم (mi-taanom) = ik kan — dit is typisch Hazaragi (niet می‌توانم).\nVervoeging: mi-taanom · mi-taani · mi-taana · mi-taanim · mi-taanin · mi-taanan\n\nباید (baayad) = moet — dit verandert nooit! Gewoon باید + werkwoord.\nباید بری = je moet gaan · نباید بری = je mag niet gaan\n\nمی‌خوام (mi-khom) = ik wil / ik ga — ook als toekomsttijd.',
      words:[
        {hz:'باید',tr:'baayad',nl:'Moet / Dient te',tip:'"باید بری" = je moet gaan'},
        {hz:'نباید',tr:'nabaayad',nl:'Mag niet / Moet niet',tip:''},
        {hz:'می‌تانم',tr:'mi-taanom',nl:'Ik kan (Hazaragi)',tip:'Typisch Hazaragi werkwoord'},
        {hz:'نمی‌تانم',tr:'na-mi-taanom',nl:'Ik kan niet',tip:''},
        {hz:'می‌تانی',tr:'mi-taani',nl:'Jij kan',tip:''},
        {hz:'می‌تانه',tr:'mi-taana',nl:'Hij/Zij kan',tip:''},
        {hz:'می‌خوام',tr:'mi-khom',nl:'Ik wil',tip:''},
        {hz:'نمی‌خوام',tr:'na-mi-khom',nl:'Ik wil niet',tip:''},
      ],
      sentences:[
        {hz:'نمی‌تانم بیام، کار دارم',tr:'na-mi-taanom biyoom, kaar darom',nl:'Ik kan niet komen, ik heb werk'},
        {hz:'باید امتحان بدی، نباید غیب بشی',tr:'baayad emtehaan bedi, nabaayad ghayb beshi',nl:'Je moet examen doen, je mag niet wegblijven'},
        {hz:'می‌خوام بیام اما نمی‌تانم',tr:'mi-khom biyoom amma na-mi-taanom',nl:'Ik wil komen maar ik kan niet'},
      ]
    },

    { id:'gram4_future', title:'Toekomende tijd', sub:'Morgen ga ik, ik zal komen...', icon:'🔮', xp:35,
      pronTips:['خ'],
      grammar:'Hazaragi heeft geen aparte toekomsttijdsvorm. Je maakt toekomst door:\n\n① Tijdwoord + tegenwoordige tijd: فردا می‌رم = morgen ga ik (فردا = morgen maakt het toekomst)\n② می‌خوام + werkwoord: می‌خوام بیام = ik ga komen / ik wil komen\n\nایشالله erbij zetten maakt het ook duidelijk dat het nog moet gebeuren!',
      words:[
        {hz:'فردا می‌رم',tr:'fardaa mi-rom',nl:'Morgen ga ik',tip:'"فردا" maakt het toekomstig'},
        {hz:'می‌خوام برم',tr:'mi-khom berom',nl:'Ik ga (straks)',tip:'Letterlijk "ik wil gaan"'},
        {hz:'زود می‌آم',tr:'zod mi-oom',nl:'Ik kom snel',tip:''},
        {hz:'بعداً می‌گم',tr:'ba\'dan mi-gom',nl:'Ik zeg het later',tip:''},
        {hz:'ایشالله می‌شه',tr:'ishaallah mi-sha',nl:'Het zal lukken, inshallah',tip:'Positief toekomstdenken'},
        {hz:'وختی بیای',tr:'wakhti biyaayi',nl:'Wanneer je komt',tip:'"وختی" = wanneer (Hazaragi) — Dari standaard zegt "وقتی"'},
        {hz:'تا دیروقت',tr:'taa deerowaqt',nl:'Tot laat',tip:''},
        {hz:'حتماً می‌آم',tr:'hatman mi-oom',nl:'Ik kom zeker',tip:'"حتماً" = absoluut'},
      ],
      sentences:[
        {hz:'فردا صبح زود می‌آم، آماده باش',tr:'fardaa sobh zod mi-oom, aamaada baash',nl:'Morgenochtend vroeg kom ik, wees klaar'},
        {hz:'ایشالله همه چیز خوب می‌شه',tr:'ishaallah hama chiz khob mi-sha',nl:'Inshallah wordt alles goed'},
        {hz:'وختی بیای بهت می‌گم',tr:'wakhti biyaayi bahat mi-gom',nl:'Wanneer je komt vertel ik het je'},
      ]
    },

    { id:'gram4_conditional', title:'Als... dan... (Voorwaarden)', sub:'Conditionals', icon:'🔀', xp:30,
      pronTips:['ر'],
      grammar:'Als...dan zinnen in Hazaragi beginnen met اگر (agar = als).\n\nEchte conditie (het kán): اگر + werkwoord op -ی\nاگر بیای، چای می‌پزم = als jij komt, zet ik thee\n\nHypothetisch (het kon niet): اگر + verleden tijd\nاگر پول داشتم، کمکت می‌کردم = als ik geld had gehad, had ik geholpen\n\nوگرنه (wagarna) = anders: بیا، وگرنه دلم تنگته = kom, anders mis ik je.',
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
        {hz:'اگر بیای، چای می‌پزم',tr:'agar biyaayi, chaay mi-pazom',nl:'Als jij komt, zet ik thee'},
        {hz:'اگر پول داشتم، کمکت می‌کردم',tr:'agar pool dashtom, kamaket mi-kardom',nl:'Als ik geld had, had ik je geholpen'},
        {hz:'حتماً بیا، وگرنه دلم تنگته',tr:'hatman bia, wagarna delam tangta',nl:'Kom zeker, anders mis ik je'},
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
        {hz:'هژده ساله هستم',tr:'hazda saala hastom',nl:'Ik ben achttien jaar'},
      ]
    },

    { id:'numbers_big', title:'Cijfers 30–1000', sub:'Grote getallen', icon:'💯', xp:20,
      pronTips:['ر'],
      grammar:'"صد" = honderd. "دو صد" = tweehonderd. "هزار" = duizend. Simpel combineren!',
      words:[
        {hz:'سی',tr:'si',nl:'Dertig',tip:''},
        {hz:'چل',tr:'chel',nl:'Veertig',tip:'Hazaragi: "chel"'},
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
        {hz:'چارشنبه می‌آم، آماده باش',tr:'chaarshanba mi-oom, aamaada baash',nl:'Woensdag kom ik, wees klaar'},
        {hz:'جمعه خانه هستم',tr:'jome khaana hastom',nl:'Vrijdag ben ik thuis'},
        {hz:'هفته دیگه مسابقه داریم',tr:'hafta diga masaabeqa daarim',nl:'Volgende week hebben we een wedstrijd'},
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
        {hz:'چاشت',tr:'chaasht',nl:'Middag / Noon',tip:'Typisch Hazaragi woord'},
        {hz:'بعد از چاشت',tr:'ba\'d az chaasht',nl:'Namiddag',tip:''},
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
    { id:'months', title:'Maanden van het jaar', sub:'Januari t/m december', icon:'📆', xp:20,
      pronTips:['ر'],
      grammar:'In Nederland gebruik je de Gregoriaanse maanden. Hazaragi heeft ook Shamsi maanden (Hamal t/m Howt) voor de Afghaanse kalender.',
      words:[
        {hz:'جنوری',tr:'janawaari',nl:'Januari',tip:''},
        {hz:'فبروری',tr:'febrawaari',nl:'Februari',tip:''},
        {hz:'مارچ',tr:'maarch',nl:'Maart',tip:''},
        {hz:'اپریل',tr:'aprel',nl:'April',tip:''},
        {hz:'می',tr:'mey',nl:'Mei',tip:''},
        {hz:'جون',tr:'joon',nl:'Juni',tip:''},
        {hz:'جولای',tr:'jolaayi',nl:'Juli',tip:''},
        {hz:'آگست',tr:'aagast',nl:'Augustus',tip:''},
        {hz:'سپتمبر',tr:'septambar',nl:'September',tip:''},
        {hz:'اکتوبر',tr:'oktobar',nl:'Oktober',tip:''},
        {hz:'نومبر',tr:'nawambar',nl:'November',tip:''},
        {hz:'دسمبر',tr:'desembar',nl:'December',tip:'Koudste maand — "زمستان" begint'},
      ],
      sentences:[
        {hz:'نوروز دَ مارچ اَس',tr:'nawroz da maarch as',nl:'Nowruz is in maart'},
        {hz:'دَ کدام ماه تولدت اَس؟',tr:'da kodaam maah tawallodat as?',nl:'In welke maand is je verjaardag?'},
        {hz:'دسمبر خیلی سرد اَس دَ هالند',tr:'desembar khaili sard as da haaland',nl:'December is heel koud in Nederland'},
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
        {hz:'چادر',tr:'chaadar',nl:'Hoofddoek',tip:'Afghaans/Hazaragi, niet Iraans "روسری"'},
        {hz:'پوشیدن',tr:'poshedan',nl:'Dragen / Aantrekken',tip:''},
        {hz:'درآوردن',tr:'dar-aawordan',nl:'Uitdoen / Uittrekken',tip:''},
      ],
      sentences:[
        {hz:'لباست گوشکیل اَس، کجا خریدی؟',tr:'lebaasat goshkil as, koja kharidi?',nl:'Je kleding is mooi, waar heb je het gekocht?'},
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
        {hz:'مویت خیلی گوشکیل اَس',tr:'mooyat khaili goshkil as',nl:'Je haar is heel mooi'},
        {hz:'او پیر نیس، هنوز جوان اَس',tr:'oo peer nis, hanoz jawaan as',nl:'Hij/zij is niet oud, nog steeds jong'},
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
        {hz:'نو',tr:'naw',nl:'Nieuw',tip:''},
        {hz:'کهنه',tr:'kohna',nl:'Oud / Versleten',tip:''},
        {hz:'رنگ',tr:'rang',nl:'Kleur',tip:''},
        {hz:'مد',tr:'mod',nl:'Mode / Trend',tip:'Leenwoord van "mode"'},
      ],
      sentences:[
        {hz:'این اندازه‌ام درس نیس، بزرگتر داری؟',tr:'een andaazaam doros nis, bozoghtar daari?',nl:'Deze maat past niet, heb je iets groters?'},
        {hz:'پرو کنم ببینم چتور اَس',tr:'paro konom bebinom chetor as',nl:'Laat me het passen om te zien hoe het zit'},
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
        {hz:'اتاق خواب',tr:'otaaq-khwaab',nl:'Slaapkamer',tip:'"خواب" = slaap'},
        {hz:'حمام',tr:'hamaam',nl:'Badkamer',tip:''},
        {hz:'تشناب',tr:'tashnaab',nl:'Toilet / WC',tip:'Hazaragi/Afghaans: "تشناب" — niet Iraans "دستشویی"'},
        {hz:'آشپزخانه',tr:'aashpazkhaana',nl:'Keuken',tip:'Letterlijk "kookhuis"'},
        {hz:'زیرزمین',tr:'zirzamin',nl:'Kelder',tip:'"زیر" = onder + "زمین" = grond'},
        {hz:'بالکن',tr:'baalkun',nl:'Balkon',tip:''},
        {hz:'پله',tr:'pala',nl:'Trap',tip:''},
        {hz:'دهلیز',tr:'dahliiz',nl:'Gang / Hal',tip:'Hazaragi/Afghaans: "دهلیز" — niet Iraans "راهرو"'},
        {hz:'سقف',tr:'saqf',nl:'Plafond',tip:''},
      ],
      sentences:[
        {hz:'دَ اتاق خوابم هستم',tr:'da otaaq-khwaabam hastom',nl:'Ik ben in mijn slaapkamer'},
        {hz:'حمام خراب اَس، تشناب کار می‌کنه',tr:'hamaam khraab as, tashnaab kaar me-kona',nl:'De badkamer is kapot, het toilet werkt'},
        {hz:'بالکنمو گوشکیل اَس، شهر دیده می‌شه',tr:'baalkuanamo goshkil as, shahr dida mi-sha',nl:'Ons balkon is mooi, je ziet de stad'},
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
        {hz:'دَ صوفه بنشین، چای می‌آرم',tr:'da sofa benshin, chaay mi-aarom',nl:'Ga op de bank zitten, ik breng thee'},
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
        {hz:'آو دادن',tr:'aaw daadan',nl:'Water geven (planten)',tip:''},
        {hz:'کثیف',tr:'kasif',nl:'Vies / Vuil',tip:''},
        {hz:'پاک',tr:'paak',nl:'Schoon',tip:'Hazaragi: "پاک" — niet Iraans "تمیز"'},
        {hz:'نظافت',tr:'nazaafat',nl:'Schoonmaak / Hygiëne',tip:''},
      ],
      sentences:[
        {hz:'اتاقت را مرتب کو، خیلی کثیف اَس',tr:'otaaqat ra moratab ko, khaili kasif as',nl:'Ruim je kamer op, het is heel rommelig'},
        {hz:'ظرف‌ها را بشور، من جارو می‌کنم',tr:'zarfhaa ra beshor, ma jaaro mi-konom',nl:'Was de vaat, ik zal vegen'},
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
        {hz:'انگورهای افغانستان شیرین‌ترین اَن',tr:'angoorhaayi afghaanestaan shirintareen an',nl:'Afghaanse druiven zijn de zoetste'},
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
        {hz:'زنبور',tr:'zambur',nl:'Bij',tip:'Afghaanse bergshoning is beroemd'},
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
        {hz:'خشکسالی',tr:'khoshksaali',nl:'Droogte',tip:'Groot probleem in Afghanistan'},
        {hz:'سیلاب',tr:'silaab',nl:'Overstroming',tip:''},
        {hz:'زلزله',tr:'zalzala',nl:'Aardbeving',tip:'Afghanistan ligt in een seismische zone'},
        {hz:'آلودگی',tr:'aaloodagi',nl:'Vervuiling',tip:''},
        {hz:'درخت کاری',tr:'darakht-kaaree',nl:'Bomen planten',tip:''},
        {hz:'محیط زیست',tr:'mohit-e-zist',nl:'Milieu',tip:'Letterlijk: "omgeving van leven"'},
        {hz:'آو و هوا',tr:'aaw-o-hawaa',nl:'Klimaat',tip:'"آو" = water + "هوا" = lucht — Hazaragi: آو ipv آب'},
        {hz:'طوفان',tr:'toofaan',nl:'Storm',tip:''},
        {hz:'گرد و خاک',tr:'gard-o-khaak',nl:'Stofstorm',tip:'Typisch voor Afghanistan'},
        {hz:'حفاظت از طبیعت',tr:'hefaazat az tabiaat',nl:'Natuur beschermen',tip:''},
      ],
      sentences:[
        {hz:'امسال خشکسالی شد، زمین آو نداشت',tr:'emsaal khoshksaali shod, zamin aaw nadaasht',nl:'Dit jaar was er droogte, het land had geen water'},
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
        {hz:'دل به دریا زدن',tr:'del ba daryaa zadan',nl:'Lef tonen / Het erop wagen',tip:'Letterlijk "hart in de zee gooien"'},
        {hz:'پشت کسی بودن',tr:'posht-e-kasi boodan',nl:'Iemand steunen',tip:'Letterlijk "achter iemand zijn"'},
        {hz:'سر بلند بودن',tr:'sar boland boodan',nl:'Trots zijn',tip:'"سر بلند باش" = wees trots'},
        {hz:'چشم انتظار',tr:'chashm entezaar',nl:'Uitkijken naar iemand',tip:'Letterlijk "oog-verwachting"'},
        {hz:'دل شاد',tr:'del shaad',nl:'Blij van hart',tip:'Hazara afscheidsgroet'},
        {hz:'سر به سر هشتن',tr:'sar ba sar hashtan',nl:'Plagen / Pesten',tip:'"سر به سرم نهل" = doe niet moeilijk — Hazaragi: هشتن ipv گذاشتن'},
        {hz:'رو داشتن',tr:'ro daashtan',nl:'Het lef hebben',tip:''},
      ],
      sentences:[
        {hz:'دستت درد نکنه، غذا خیلی خوشمزه بود',tr:'dastat dard nakona, ghazaa khaili khoshmaza bood',nl:'Dank je, het eten was heerlijk'},
        {hz:'چشم، هر کاری بگی می‌کنم',tr:'chashm, har kaari begi mi-konom',nl:'Ja met plezier, wat je ook zegt doe ik'},
        {hz:'دل به دریا بزن، برو صحبت کو!',tr:'del ba daryaa bezan, bero sohbat ko!',nl:'Waag het erop, ga en praat!'},
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
        {hz:'تربوز',tr:'tarbuuz',nl:'Watermeloen',tip:'Hazaragi/Afghaans: "تربوز" — niet Iraans "هندوانه"'},
        {hz:'خربزه',tr:'kharboza',nl:'Meloen',tip:'Kandahari meloenen zijn wereldberoemd'},
        {hz:'آلو',tr:'aalo',nl:'Pruim',tip:''},
        {hz:'سیب',tr:'seb',nl:'Appel',tip:''},
        {hz:'انجیر',tr:'anjeer',nl:'Vijg',tip:'Vijgenbomen groeien in Afghanistan'},
        {hz:'میوه خشک',tr:'mewa-khoshk',nl:'Gedroogd fruit',tip:'Traditioneel Hazara cadeau bij bezoek'},
      ],
      sentences:[
        {hz:'یک کیلو انار می‌خوام',tr:'yak kilo anaar mi-khom',nl:'Ik wil een kilo granaatappelen'},
        {hz:'انگورهای افغانی شیرین‌ترین اَن',tr:'angoorhaayi afghaani shirintareen an',nl:'Afghaanse druiven zijn de zoetste'},
        {hz:'میوه خشک برای مهمان خریدم',tr:'mewa-khoshk baraayi mehman kharidom',nl:'Ik kocht gedroogd fruit voor de gast'},
      ]
    },

    { id:'vegetables', title:'Groenten', sub:'Ui, tomaat, aubergine...', icon:'🥕', xp:20,
      pronTips:['خ'],
      grammar:'"سبزی" = groente én verse kruiden. "بدون پیاز نمی‌شه" = zonder ui gaat het niet.',
      words:[
        {hz:'پیاز',tr:'pyaaz',nl:'Ui',tip:'Basis van ÉLK Afghaans gerecht'},
        {hz:'بادنجان رومی',tr:'baadenjaan-e roomi',nl:'Tomaat',tip:'Letterlijk "Romeinse aubergine" — Afghaans/Hazaragi, niet Iraans "گوجه فرنگی"'},
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
        {hz:'بدون پیاز و سیر آشپزی نمی‌شه',tr:'bedoon pyaaz o sir aashpazi nemi-sha',nl:'Koken zonder ui en knoflook kan niet'},
        {hz:'بادنجان با گوشت خیلی خوشمزه می‌شه',tr:'baadanjaan baa gosht khaili khoshmaza mi-sha',nl:'Aubergine met vlees wordt heel lekker'},
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
        {hz:'خیلی گران اَس، کمتر نمی‌شه؟',tr:'khaili geraan as, kamtar nemi-sha?',nl:'Het is te duur, kan het niet minder?'},
      ]
    },
  ]},

  { id:'ch27', label:'💪 Hoofdstuk 27 · Gezondheid & Welzijn', color:'#F9C3Cb', lessons:[

    { id:'health_doctor', title:'Bij de dokter', sub:'Symptomen, recept, behandeling...', icon:'🏥', xp:35,
      pronTips:['ع','خ'],
      grammar:'"چی دردی داری؟" = wat mankeert je? Letterlijk "welke pijn heb je?" — directe Hazaragi vraag.',
      words:[
        {hz:'نسخه',tr:'noskha',nl:'Recept (dokter)',tip:''},
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
        {hz:'داکتر نسخه نوشت و آزمایش خواست',tr:'daaktar noskha nawesht wa aazmaaesh khawast',nl:'De dokter schreef een recept en vroeg om een bloedonderzoek'},
        {hz:'تبم سی و هشت اَس، حساسیت دارم',tr:'tabam si o hasht as, hassaasiyat darom',nl:'Mijn koorts is 38, ik heb een allergie'},
        {hz:'الحمدلله از شفاخانه مرخص شدم',tr:'alhamdolillah az shafaakhaana markhyas shodom',nl:'Alhamdulillah ben ik uit het ziekenhuis ontslagen'},
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
        {hz:'تیمم برد، خیلی خوشحالیم!',tr:'teamam bord, khaili khoshhaalim!',nl:'Mijn team heeft gewonnen, we zijn heel blij!'},
        {hz:'هر روز تمرین می‌کنم که قوی بشم',tr:'har roz tamrin mi-konom ke qawi beshom',nl:'Elke dag train ik om sterk te worden'},
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
        {hz:'حمایت',tr:'hamaayat',nl:'Steun',tip:''},
        {hz:'امیدوار',tr:'omidwaar',nl:'Hoopvol',tip:'"امید" = hoop + "-وار" = hebbend'},
        {hz:'قوی بودن',tr:'qawi boodan',nl:'Sterk zijn',tip:'"قوی باش" = wees sterk'},
        {hz:'دل پری',tr:'del-pori',nl:'Opgekropte verdriet',tip:'Hazara uitdrukking: "vol hart"'},
        {hz:'خوش خیال',tr:'khosh-khiyaal',nl:'Optimistisch',tip:'"خوش" = goed + "خیال" = gedachten'},
        {hz:'صبر کردن',tr:'sabr kardan',nl:'Geduld hebben',tip:'"صبر تلخ اَس ولی میوه‌اش شیرین" — klassiek spreekwoord'},
      ],
      sentences:[
        {hz:'نگران نباش، همه چیز درس می‌شه',tr:'negaraan nabaash, hama chiz doros mi-sha',nl:'Wees niet ongerust, alles komt goed'},
        {hz:'استرس زیاد داری، آرامش لازم اَس',tr:'estres ziyaad daari, aaraamesh laazem as',nl:'Je hebt veel stress, je hebt rust nodig'},
        {hz:'قوی باش، مو پشتتیم',tr:'qawi baash, mo posht-etim',nl:'Wees sterk, wij staan achter jou'},
      ]
    },
  ]},

  { id:'ch28', label:'🔄 Hoofdstuk 28 · Tegenstellingen', color:'#F06C78', lessons:[

    { id:'opp_adj', title:'Tegengestelde bijvoeglijke naamwoorden', sub:'Groot↔Klein, Snel↔Langzaam...', icon:'↔️', xp:25,
      pronTips:['خ','ر'],
      grammar:'Tegenstellingen leren verdubbelt je woordenschat in één keer! Leer altijd beide woorden samen.',
      words:[
        {hz:'بزرگ ↔ کوچک',tr:'bozorg ↔ kochak',nl:'Groot ↔ Klein',tip:''},
        {hz:'بلند ↔ کوتاه',tr:'boland ↔ kotaah',nl:'Lang/Hoog ↔ Kort/Laag',tip:''},
        {hz:'تند ↔ آسته',tr:'tond ↔ asta',nl:'Snel ↔ Langzaam',tip:'Hazaragi: "آسته" (asta) = langzaam'},
        {hz:'گرم ↔ سرد',tr:'garm ↔ sard',nl:'Warm ↔ Koud',tip:''},
        {hz:'سنگین ↔ سبک',tr:'sangeen ↔ sabok',nl:'Zwaar ↔ Licht',tip:''},
        {hz:'تازه ↔ کهنه',tr:'taaza ↔ kohna',nl:'Vers/Nieuw ↔ Oud/Versleten',tip:''},
        {hz:'قوی ↔ ضعیف',tr:'qawi ↔ za\'if',nl:'Sterk ↔ Zwak',tip:''},
        {hz:'خوش ↔ بد',tr:'khosh ↔ bad',nl:'Goed/Fijn ↔ Slecht',tip:'"خوش" = breed gebruikt voor fijn/goed'},
        {hz:'پاک ↔ کثیف',tr:'paak ↔ kasif',nl:'Schoon ↔ Vies',tip:''},
        {hz:'راست ↔ دروغ',tr:'raast ↔ doroogh',nl:'Waar ↔ Leugen',tip:'"دروغ" = leugen — links is "چپ", niet "دروغ"'},
      ],
      sentences:[
        {hz:'این کیف سنگین اَس — آن یکی سبک اَس',tr:'een kif sangeen as — aan yaki sabok as',nl:'Deze tas is zwaar — die andere is licht'},
        {hz:'هوا گرم نیس، خیلی سرد اَس',tr:'hawaa garm nis, khaili sard as',nl:'Het weer is niet warm, het is heel koud'},
        {hz:'قوی باش، ضعیف نباش',tr:'qawi baash, za\'if nabaash',nl:'Wees sterk, wees niet zwak'},
      ]
    },

    { id:'opp_verbs', title:'Tegengestelde werkwoorden', sub:'Gaan↔Komen, Kopen↔Verkopen...', icon:'🔃', xp:25,
      pronTips:['ر'],
      grammar:'"رفتن" (gaan) ↔ "آمدن" (komen). Werkwoordstegenstellingen zijn essentieel voor conversatie.',
      words:[
        {hz:'رفتن ↔ آمدن',tr:'raftan ↔ aamadan',nl:'Gaan ↔ Komen',tip:'De twee meest gebruikte werkwoorden'},
        {hz:'خریدن ↔ فروختن',tr:'kharidan ↔ forookhtan',nl:'Kopen ↔ Verkopen',tip:''},
        {hz:'گرفتن ↔ دادن',tr:'gereftan ↔ daadan',nl:'Nemen ↔ Geven',tip:''},
        {hz:'باز کردن ↔ بستن',tr:'baaz kardan ↔ bastan',nl:'Openen ↔ Sluiten',tip:''},
        {hz:'بلند کردن ↔ هشتن',tr:'boland kardan ↔ hashtan',nl:'Optillen ↔ Neerzetten',tip:'Hazaragi: "هشتن" = neerzetten/laten — Iraans zegt "گذاشتن"'},
        {hz:'پوشیدن ↔ درآوردن',tr:'poshedan ↔ dar-aawordan',nl:'Aandoen ↔ Uitdoen',tip:''},
        {hz:'یاد گرفتن ↔ فراموش کردن',tr:'yaad gereftan ↔ faraamoosh kardan',nl:'Leren ↔ Vergeten',tip:'"فراموش" = vergeten — Leer dit niet vergeten!'},
        {hz:'شروع کردن ↔ تموم کردن',tr:'shoro kardan ↔ tamoom kardan',nl:'Beginnen ↔ Eindigen/Afmaken',tip:''},
        {hz:'خوابیدن ↔ بیدار شدن',tr:'khwaabidan ↔ bidaar shodan',nl:'Slapen ↔ Wakker worden',tip:''},
        {hz:'خندیدن ↔ گریستن',tr:'khandidan ↔ geriistan',nl:'Lachen ↔ Huilen',tip:''},
      ],
      sentences:[
        {hz:'فراموش نکو، یاد داشته باش',tr:'faraamoosh nako, yaad daashta baash',nl:'Vergeet het niet, onthoud het'},
        {hz:'دروازه را ببند، سرد اَس',tr:'darwaaza ra baband, sard as',nl:'Doe de deur dicht, het is koud'},
        {hz:'شروع کو — وقت داری',tr:'shoro ko — waqt daari',nl:'Begin — je hebt tijd'},
      ]
    },

    { id:'opp_context', title:'Tegenstellingen in gesprek', sub:'Toepassen in zinnen', icon:'💬', xp:30,
      pronTips:['خ'],
      grammar:'Tegenstellingen maken je uitdrukkingsvermogen veel rijker. Gebruik "اما" (maar) om ze te verbinden.',
      words:[
        {hz:'دور ↔ نزدیک',tr:'door ↔ nazdik',nl:'Ver ↔ Dichtbij',tip:''},
        {hz:'زود ↔ دیر',tr:'zod ↔ deer',nl:'Vroeg/Snel ↔ Laat/Langzaam',tip:'"زود بیا" = kom snel, "دیر شد" = te laat'},
        {hz:'همیشه ↔ هیچ‌وقت',tr:'hamesha ↔ hichawaqt',nl:'Altijd ↔ Nooit',tip:''},
        {hz:'قبل ↔ بعد',tr:'qabl ↔ ba\'d',nl:'Vóór ↔ Na',tip:''},
        {hz:'کم ↔ زیاد',tr:'kam ↔ ziyaad',nl:'Weinig ↔ Veel',tip:''},
        {hz:'تنها ↔ با هم',tr:'tanhaa ↔ baa ham',nl:'Alleen ↔ Samen',tip:'"با هم" = letterlijk "met elkaar"'},
        {hz:'شاد ↔ غمگین',tr:'shaad ↔ ghamgeen',nl:'Blij ↔ Verdrietig',tip:''},
        {hz:'درس ↔ اشتباه',tr:'doros ↔ eshtebaa',nl:'Juist ↔ Fout',tip:'Hazaragi: "doros" niet "dorost"'},
      ],
      sentences:[
        {hz:'همیشه راست بگوی، هیچ‌وقت دروغ نگو',tr:'hamesha raast bogoi, hichawaqt doroogh nago',nl:'Zeg altijd de waarheid, zeg nooit een leugen'},
        {hz:'زود بیا، دیر نشه',tr:'zod bia, deer nasha',nl:'Kom snel, laat het niet te laat worden'},
        {hz:'تنها بودم اما حالا با هم هستیم',tr:'tanhaa boodom amma haala baa ham hastim',nl:'Ik was alleen maar nu zijn we samen'},
      ]
    },
  ]},

  { id:'ch29', label:'🎭 Hoofdstuk 29 · Rollenspel-scenario\'s', color:'#F9C3Cb', lessons:[

    { id:'role_cafe', title:'In een Afghaans restaurant', sub:'Bestellen, betalen, complimenteren', icon:'🍵', xp:35,
      pronTips:['خ','ر'],
      grammar:'Bestellen doe je met "می‌خوام" + gerecht. Betalen: "حساب بیار" = breng de rekening.',
      words:[
        {hz:'چی داری؟',tr:'chi daari?',nl:'Wat heb je? (menukaart)',tip:'Directe manier om het menu te vragen'},
        {hz:'یک بشقاب',tr:'yak boshqaab',nl:'Één bord (portie)',tip:'"بشقاب" = bord'},
        {hz:'چای سبز',tr:'chaay sabz',nl:'Groene thee',tip:''},
        {hz:'حساب بیار',tr:'hesaab biaar',nl:'Breng de rekening',tip:''},
        {hz:'مزه‌اش خوب بود؟',tr:'mazash khob bood?',nl:'Was het lekker?',tip:'Na het eten vragen'},
        {hz:'نوش جانت',tr:'nosh jaanat',nl:'Eet smakelijk',tip:'Zeg dit als iemand eet'},
        {hz:'دستت درد نکنه',tr:'dastat dard nakona',nl:'Dank je voor de moeite',tip:'Na de maaltijd verplicht!'},
        {hz:'بفرمایین',tr:'befarmaayin',nl:'Alstublieft / Kom binnen',tip:'Gastvrije uitnodiging'},
        {hz:'صفا آوردید',tr:'safaa aawordid',nl:'Welkom (bij aankomst gast)',tip:'Typisch Hazara gastvrijheid'},
        {hz:'سیر شدم',tr:'seer shodom',nl:'Ik ben vol / Ik heb genoeg gegeten',tip:'Zeg dit na de maaltijd'},
      ],
      sentences:[
        {hz:'یک بشقاب قابلی و دو چای سبز می‌خوام',tr:'yak boshqaab qaaboli o do chaay sabz mi-khom',nl:'Ik wil één bord qaboli en twee groene theeën'},
        {hz:'خیلی خوشمزه بود، دستت درد نکنه',tr:'khaili khoshmaza bood, dastat dard nakona',nl:'Het was heel lekker, dank je voor de moeite'},
        {hz:'حساب بیار، می‌خوام بروم',tr:'hesaab biaar, mi-khom berom',nl:'Breng de rekening, ik wil gaan'},
      ]
    },

    { id:'role_visit', title:'Iemand bezoeken', sub:'Binnenkomen, zitten, afscheid', icon:'🏡', xp:35,
      pronTips:['خ','ع'],
      grammar:'Gastvrijheid is heilig in Hazara cultuur. Leer de volledige rituelen van aankomst tot vertrek.',
      words:[
        {hz:'در زدن',tr:'dar zadan',nl:'Kloppen / Aanbellen',tip:'Letterlijk "deur slaan"'},
        {hz:'بفرمایین داخل',tr:'befarmaayin daakhel',nl:'Kom maar binnen',tip:'"داخل" = binnen'},
        {hz:'مزاحم نیستم؟',tr:'mozaahem nistom?',nl:'Stoor ik niet?',tip:'Beleefd vragen bij aankomst'},
        {hz:'خیر خوش آمدی',tr:'khayr khosh aamadi',nl:'Welkom, fijn dat je er bent',tip:'Hartelijk welkom'},
        {hz:'بنشینید',tr:'benshinnid',nl:'Gaat u zitten',tip:'Beleefd meervoud/formeel'},
        {hz:'چای بیارم؟',tr:'chaay biyaarom?',nl:'Zal ik thee brengen?',tip:'Eerste vraag aan elke gast'},
        {hz:'نه تشکر، زحمت نکشید',tr:'na tashakor, zahmat nakashid',nl:'Nee dank u, doe geen moeite',tip:'Beleefd weigeren (maar ga toch thee drinken!)'},
        {hz:'وقتم تنگ اَس',tr:'waqtam tang as',nl:'Mijn tijd is krap / Ik moet gaan',tip:'Beleefd vertrekaankondiging'},
        {hz:'باز بیا',tr:'baaz bia',nl:'Kom nog eens',tip:'Altijd zeggen bij afscheid'},
        {hz:'خدا حافظ',tr:'khodaa haafez',nl:'Vaarwel',tip:'Formeel afscheid'},
      ],
      sentences:[
        {hz:'صفا آوردید، بفرمایین داخل، بنشینید',tr:'safaa aawordid, befarmaayin daakhel, benshinnid',nl:'Welkom, kom binnen, gaat u zitten'},
        {hz:'مزاحم نیستم؟ — نه جان، خوش آمدی!',tr:'mozaahem nistom? — na jaan, khosh aamadi!',nl:'Stoor ik niet? — Nee lieverd, welkom!'},
        {hz:'وقتم تنگ اَس، باید برم — باز بیا!',tr:'waqtam tang as, baayad berom — baaz bia!',nl:'Ik moet gaan — Kom nog eens!'},
      ]
    },

    { id:'role_phone', title:'Bellen & WhatsApp', sub:'Gesprek starten, sluiten', icon:'📱', xp:30,
      pronTips:['خ'],
      grammar:'"هستی؟" = ben je er? — het typische eerste WhatsApp-bericht bij Hazara. Daarna volgt alles vanzelf.',
      words:[
        {hz:'الو؟',tr:'aloo?',nl:'Hallo? (telefoon)',tip:'Altijd "الو" bij bellen, nooit "سلام" als eerste'},
        {hz:'کی هستی؟',tr:'ki hasti?',nl:'Wie ben jij?',tip:'Als je het nummer niet kent'},
        {hz:'صدات قطع می‌شه',tr:'sadaat qat mi-sha',nl:'Je valt weg / Slechte verbinding',tip:''},
        {hz:'ازوال زنگ بزن',tr:'azawal zang bezan',nl:'Bel nog eens',tip:'Hazaragi: "ازوال" = opnieuw'},
        {hz:'مسیج بده',tr:'mesij bede',nl:'Stuur een bericht',tip:'Leenwoord van "message"'},
        {hz:'آنلاین هستی؟',tr:'onlayn hasti?',nl:'Ben je online?',tip:''},
        {hz:'ویس بده',tr:'weys bede',nl:'Stuur een voicemail',tip:'Leenwoord van "voice"'},
        {hz:'تماس گرفتم',tr:'tamaas gereftom',nl:'Ik heb gebeld',tip:'"تماس" = contact/verbinding'},
        {hz:'جواب نمی‌دی',tr:'jawaab nemi-di',nl:'Je neemt niet op',tip:''},
        {hz:'قطع کو',tr:'qat ko',nl:'Hang op',tip:'Letterlijk "snij af"'},
      ],
      sentences:[
        {hz:'هستی؟ دلم تنگته',tr:'hasti? delam tangta',nl:'Ben je er? Ik mis je'},
        {hz:'صدات قطع می‌شه، ویس بده',tr:'sadaat qat mi-sha, weys bede',nl:'Je valt weg, stuur een voicemail'},
        {hz:'جواب نمی‌دی، مسیج دادم',tr:'jawaab nemi-di, mesij daadom',nl:'Je neemt niet op, ik heb een bericht gestuurd'},
      ]
    },
  ]},

  // ══════════════════════════════════════════════════════
  // CH30 — GRAMMATICA 5: BIJWOORDEN & VERGELIJKINGEN
  // ══════════════════════════════════════════════════════
  { id:'ch30', label:'📖 Hoofdstuk 30 · Grammatica 5 — Bijwoorden & Vergelijkingen', color:'#6366f1',
    lessons:[

    { id:'gram5_adverbs', title:'Bijwoorden', sub:'Hoe, wanneer, hoeveel...', icon:'⚡', xp:35,
      pronTips:['خ','آ'],
      grammar:'Bijwoorden staan vóór het werkwoord of vóór het bijvoeglijk naamwoord.\n\nVeelgebruikte bijwoorden:\nخیلی (heel) · زیاد (veel) · کم (weinig) · تند (snel) · آسته (langzaam — Hazaragi: asta)\nهمیشه (altijd) · هیچ‌وقت (nooit) · گاهی (soms) · هنوز (nog steeds) · دیگه (niet meer)\n\nخیلی خوب = heel goed · هیچ‌وقت نمی‌رم = ik ga nooit',
      words:[
        {hz:'خیلی',tr:'kheli',nl:'Heel / Erg',tip:'"خیلی خوب" = heel goed'},
        {hz:'زیاد',tr:'ziyaad',nl:'Veel',tip:'"زیاد نه" = niet veel'},
        {hz:'کم',tr:'kam',nl:'Weinig',tip:'Tegenstelling van زیاد'},
        {hz:'تند',tr:'tond',nl:'Snel',tip:'"تند رفتن" = snel gaan'},
        {hz:'آسته',tr:'asta',nl:'Langzaam / Rustig',tip:'Hazaragi: "آسته" (asta) — "آسته‌تر بگوی" = zeg het langzamer'},
        {hz:'همیشه',tr:'hamesha',nl:'Altijd',tip:''},
        {hz:'هیچ‌وقت',tr:'hich-waqt',nl:'Nooit',tip:'"هیچ‌وقت نه" = nooit niet'},
        {hz:'هنوز',tr:'hanoz',nl:'Nog steeds',tip:'"هنوز نرفتم" = ik ben nog niet gegaan'},
        {hz:'دیگه',tr:'diga',nl:'Niet meer / Al',tip:'"دیگه نمی‌رم" = ik ga niet meer'},
        {hz:'پقط',tr:'paqat',nl:'Alleen maar',tip:'Hazaragi: "پقط" (ف→پ) — Iraans zegt "فقط" — "پقط یک بار" = slechts één keer'},
        {hz:'البته',tr:'albatta',nl:'Natuurlijk / Zeker',tip:'Bevestigend antwoord'},
        {hz:'شاید',tr:'shaayad',nl:'Misschien',tip:''},
      ],
      sentences:[
        {hz:'تو خیلی تند گپ می‌زنی، آسته‌تر بگوی',tr:'tu khaili tond gap mi-zani, asta-tar bogoi',nl:'Jij praat heel snel, spreek wat langzamer'},
        {hz:'من همیشه صبح زود بیدار می‌شم',tr:'ma hamesha sobh zud bediaar mi-shom',nl:'Ik word altijd vroeg in de ochtend wakker'},
        {hz:'شاید فردا بیام، هنوز مطمئن نیستم',tr:'shaayad fardaa biyoom, hanoz motma\'en nistom',nl:'Misschien kom ik morgen, ik weet het nog niet zeker'},
      ]
    },

    { id:'gram5_compare', title:'Vergelijkingen', sub:'Groter, beter, het beste...', icon:'📊', xp:40,
      pronTips:['خ','آ'],
      grammar:'Vergelijkingen maken:\n• Groter, sneller, beter: voeg "-تر" toe aan het bijvoeglijk naamwoord.\n  بزرگتر (groter) · کوچکتر (kleiner) · بهتر (beter)\n• Grootst, best: voeg "-ترین" toe.\n  بزرگترین (grootst) · بهترین (best) · بدترین (slechtst)\n\nVergelijken met "اَز" (dan): تو بهتر اَز من هستی = jij bent beter dan ik.\nLet op: خوب → بهتر/بهترین (onregelmatig, niet "خوبتر").',
      words:[
        {hz:'بزرگ‌تر',tr:'bozorg-tar',nl:'Groter',tip:'"بزرگ‌تر اَز من" = groter dan ik'},
        {hz:'کوچک‌تر',tr:'kochak-tar',nl:'Kleiner',tip:''},
        {hz:'بهتر',tr:'behtar',nl:'Beter',tip:'"بهتر اَس" = het is beter'},
        {hz:'بدتر',tr:'bad-tar',nl:'Slechter',tip:''},
        {hz:'بهترین',tr:'behtarin',nl:'Het beste',tip:''},
        {hz:'بدترین',tr:'bad-tarin',nl:'Het slechtste',tip:''},
        {hz:'بیشتر',tr:'bishtar',nl:'Meer',tip:'"بیشتر کار کن" = werk meer'},
        {hz:'کمتر',tr:'kamtar',nl:'Minder',tip:''},
        {hz:'مثل',tr:'mesl',nl:'Zoals / Als',tip:'"مثل تو" = zoals jij'},
        {hz:'فرق',tr:'farq',nl:'Verschil',tip:'"فرق داره" = het maakt verschil'},
        {hz:'همون',tr:'hamoon',nl:'Hetzelfde',tip:'"همون اَس" = het is hetzelfde'},
        {hz:'اَز',tr:'az',nl:'Dan (vergelijking)',tip:'"بزرگ‌تر اَز" = groter dan'},
      ],
      sentences:[
        {hz:'این خونه بزرگ‌تر اَز اون خونه اَس',tr:'in khona bozorg-tar az aan khona as',nl:'Dit huis is groter dan dat huis'},
        {hz:'بهترین کار صبر کردن اَس',tr:'behtarin kaar sabr kardan as',nl:'Het beste wat je kunt doen is geduld hebben'},
        {hz:'تو بهتر اَز دیروز گپ می‌زنی',tr:'tu behtar az diroz gap mi-zani',nl:'Jij praat beter dan gisteren'},
      ]
    },

    { id:'gram5_conjunctions', title:'Voegwoorden', sub:'Maar, omdat, als, wanneer...', icon:'🔗', xp:35,
      pronTips:['خ','ع'],
      grammar:'Voegwoorden verbinden zinnen. In elke deelzin staat het werkwoord nog steeds aan het einde.\n\nاما (maar) · یا (of) · هم (ook) · پس (dus)\nچون (omdat) · که (dat/die) · وختی (wanneer — Hazaragi!) · تا (totdat) · اگه (als)\n\nVoorbeelden:\nمی‌خوام اما نمی‌تانم = ik wil maar ik kan niet\nنرفتم چون مریض بودم = ik ging niet omdat ik ziek was',
      words:[
        {hz:'اما',tr:'amma',nl:'Maar',tip:'"می‌خوام اما نمی‌تانم" = ik wil maar kan niet'},
        {hz:'چون',tr:'chon',nl:'Omdat',tip:'"نرفتم چون مریض بودم" = ging niet omdat ik ziek was'},
        {hz:'پس',tr:'pas',nl:'Dus / Dan',tip:'"پس بریم" = laten we dan gaan'},
        {hz:'هم',tr:'ham',nl:'Ook',tip:'"من هم اومدم" = ik ben ook gekomen'},
        {hz:'یا',tr:'yaa',nl:'Of',tip:'"چای یا قهوه؟" = thee of koffie?'},
        {hz:'اگه',tr:'aga',nl:'Als (voorwaarde)',tip:'"اگه بیای..." = als jij komt...'},
        {hz:'وختی',tr:'wakhti',nl:'Wanneer',tip:'"وختی کوچک بودم" = toen ik klein was — Hazaragi: وختی ipv وقتی'},
        {hz:'که',tr:'ka',nl:'Dat',tip:'"فکر می‌کنم که..." = ik denk dat...'},
        {hz:'تا',tr:'taa',nl:'Zodat / Totdat',tip:'"صبر کن تا بیام" = wacht totdat ik kom'},
        {hz:'بعد',tr:'ba\'d',nl:'Daarna / Nadat',tip:'"بعد از کار" = na het werk'},
      ],
      sentences:[
        {hz:'می‌خوام بیام اما وقت ندارم',tr:'mi-khom biyoom amma waqt nadarom',nl:'Ik wil komen maar ik heb geen tijd'},
        {hz:'اگه خسته هستی، استراحت کن',tr:'aga khasta hasti, esteraahat kon',nl:'Als je moe bent, rust dan uit'},
        {hz:'وختی بچه بودم، هزارستان زندگی می‌کردم',tr:'wakhti bacha boodom, hazaarastaan zendagi mi-kardom',nl:'Toen ik klein was, woonde ik in Hazarajat'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH31 — KARAKTER & PERSOONLIJKHEID
  // ══════════════════════════════════════════════════════
  { id:'ch31', label:'👤 Hoofdstuk 31 · Karakter & Persoonlijkheid', color:'#ec4899',
    lessons:[

    { id:'character_pos', title:'Positieve Eigenschappen', sub:'Geduldig, eerlijk, vriendelijk...', icon:'😊', xp:35,
      pronTips:['ص','ع'],
      grammar:'"صادق" = eerlijk/oprecht. Eigenschappen worden bijvoeglijk naamwoord gebruikt: "آدم صادق" = een eerlijk mens. "آدم" = persoon/mens in Hazaragi.',
      words:[
        {hz:'صبور',tr:'sabor',nl:'Geduldig',tip:'"صبور باش" = wees geduldig'},
        {hz:'صادق',tr:'saadeq',nl:'Eerlijk / Oprecht',tip:''},
        {hz:'سخاوتمند',tr:'sakhaawatmand',nl:'Vrijgevig / Gul',tip:'Letterlijk: vol van vrijgevigheid'},
        {hz:'مهربان',tr:'mehrabaan',nl:'Vriendelijk / Lief',tip:'"خیلی مهربان اَس" = heel vriendelijk'},
        {hz:'شجاع',tr:'shojaa',nl:'Moedig',tip:''},
        {hz:'باهوش',tr:'baahosh',nl:'Slim / Intelligent',tip:''},
        {hz:'کوشا',tr:'kosha',nl:'Ijverig / Werkzaam',tip:''},
        {hz:'متواضع',tr:'motawaaze\'',nl:'Bescheiden',tip:''},
        {hz:'دلسوز',tr:'delsoz',nl:'Meelevend / Bezorgd',tip:'"دلسوز خانواده" = bezorgd om de familie'},
        {hz:'امین',tr:'amin',nl:'Betrouwbaar',tip:''},
      ],
      sentences:[
        {hz:'اون آدم خیلی صادق و امین اَس',tr:'oon aadam kheli saadeq wa amin as',nl:'Die persoon is heel eerlijk en betrouwbaar'},
        {hz:'مادرم خیلی مهربان و دلسوز اَس',tr:'maadaram kheli mehrabaan wa delsoz as',nl:'Mijn moeder is heel lief en meelevend'},
        {hz:'برای موفق شدن، باید کوشا بود',tr:'baraaye mowafeq shodan, baayad kosha bood',nl:'Om succesvol te zijn moet je ijverig zijn'},
      ]
    },

    { id:'character_neg', title:'Negatieve Eigenschappen', sub:'Lui, jaloers, ontrouw...', icon:'😤', xp:35,
      pronTips:['ح','غ'],
      grammar:'"بی-" is een negatief voorvoegsel: "بی‌وفا" = ontrouw (zonder trouw), "بی‌ادب" = onbeleefd (zonder beleefdheid). Zo ook: "بی‌صبر" = ongeduldig.',
      words:[
        {hz:'تنبل',tr:'tanbal',nl:'Lui',tip:''},
        {hz:'حسود',tr:'hasood',nl:'Jaloers',tip:'"حسادت کردن" = jaloers zijn'},
        {hz:'دروغگو',tr:'dorugh-go',nl:'Leugenaar',tip:'"دروغ گفتن" = liegen'},
        {hz:'بی‌وفا',tr:'bi-wafaa',nl:'Ontrouw',tip:'"بی-" voorvoegsel = zonder'},
        {hz:'خودخواه',tr:'khod-khaah',nl:'Egocentrisch',tip:'Letterlijk: degene die zichzelf wil'},
        {hz:'بی‌ادب',tr:'bi-adab',nl:'Onbeleefd',tip:''},
        {hz:'خفا',tr:'khafaa',nl:'Opvliegend / Boos',tip:'Hazaragi: "خفا شدن" = boos worden'},
        {hz:'لجباز',tr:'lajbaaz',nl:'Koppig / Eigenwijs',tip:''},
        {hz:'غرور',tr:'ghoroor',nl:'Arrogantie',tip:'"غرور داشتن" = arrogant zijn'},
        {hz:'بی‌مسئولیت',tr:'bi-mas\'ooliyat',nl:'Onverantwoordelijk',tip:''},
      ],
      sentences:[
        {hz:'حسود هیچ‌وقت راحت نیس',tr:'hasood hich-waqt raahat nis',nl:'Een jaloers persoon heeft nooit rust'},
        {hz:'دروغ گفتن اعتماد را خراب می‌کنه',tr:'dorugh goftan e\'temaad ra kharaab mi-kona',nl:'Liegen vernietigt het vertrouwen'},
        {hz:'غرور انسان را کور می‌کنه',tr:'ghoroor ensaan ra kor mi-kona',nl:'Arrogantie maakt een mens blind'},
      ]
    },

    { id:'character_describe', title:'Iemand Beschrijven', sub:'Hoe is hij/zij? Karakter, gedrag...', icon:'💬', xp:30,
      pronTips:['خ','ع'],
      grammar:'"چه جور آدمی اَس؟" = Wat voor iemand is hij/zij? "به نظرم" = naar mijn mening. "انگار" = het lijkt alsof (typisch Hazaragi gebruik).',
      words:[
        {hz:'چه جور',tr:'che jor',nl:'Wat voor soort',tip:'"چه جور آدم؟" = wat voor persoon?'},
        {hz:'رفتار',tr:'raftaar',nl:'Gedrag',tip:'"رفتار خوب" = goed gedrag'},
        {hz:'شخصیت',tr:'shakhsiyat',nl:'Persoonlijkheid',tip:''},
        {hz:'ذات',tr:'zaat',nl:'Aard / Wezen',tip:'"ذات خوب داره" = heeft een goed karakter'},
        {hz:'به نظرم',tr:'ba nazaram',nl:'Naar mijn mening',tip:''},
        {hz:'حس می‌کنم',tr:'has mi-konom',nl:'Ik heb het gevoel dat',tip:''},
        {hz:'انگار',tr:'angaar',nl:'Het lijkt alsof',tip:'Typisch Hazaragi uitdrukking'},
        {hz:'واقعاً',tr:'waaqe\'an',nl:'Echt / Werkelijk',tip:''},
        {hz:'بامزه',tr:'baamoza',nl:'Grappig / Leuk',tip:'Positief: leuk van karakter'},
        {hz:'آدم',tr:'aadam',nl:'Persoon / Mens',tip:'Informeel: "آدم خوب" = goed persoon'},
      ],
      sentences:[
        {hz:'به نظرم اون آدم خیلی ذات خوب داره',tr:'ba nazaram oon aadam kheli zaat khob daara',nl:'Naar mijn mening heeft die persoon een heel goed karakter'},
        {hz:'رفتار خوب از هر چیز مهم‌تر اَس',tr:'raftaar khob az har chiz mohemtar as',nl:'Goed gedrag is belangrijker dan alles'},
        {hz:'انگار اون ناراحت اَس، ببین چی شده',tr:'angaar oon naaraahat as, bebin chi shoda',nl:'Het lijkt alsof hij/zij van streek is, kijk wat er is'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH32 — VAKKEN & STUDIE
  // ══════════════════════════════════════════════════════
  { id:'ch32', label:'📚 Hoofdstuk 32 · Vakken & Studie', color:'#0ea5e9',
    lessons:[

    { id:'school_subjects', title:'Schoolvakken', sub:'Wiskunde, geschiedenis, talen...', icon:'🏫', xp:35,
      pronTips:['ج','ر'],
      grammar:'"درس خواندن" = studeren (letterlijk: les lezen). "درس دادن" = lesgeven. "مضمون" is het Hazaragi woord voor schoolvak (ipv "ماده درسی" in standaard Dari).',
      words:[
        {hz:'ریاضیات',tr:'riyaaziyaat',nl:'Wiskunde',tip:'"ریاضی" als verkorte vorm'},
        {hz:'تاریخ',tr:'taarikh',nl:'Geschiedenis',tip:'Ook: datum'},
        {hz:'علوم',tr:'oloom',nl:'Wetenschap / Natuur',tip:'Meervoud van "علم" (kennis)'},
        {hz:'ادبیات',tr:'adabiyaat',nl:'Taal & Literatuur',tip:''},
        {hz:'جغرافیا',tr:'jografiyaa',nl:'Aardrijkskunde',tip:''},
        {hz:'دین',tr:'din',nl:'Godsdienst',tip:'"درس دین" = godsdienstles'},
        {hz:'هنر',tr:'honar',nl:'Kunst',tip:'Ook: talent, vaardigheid'},
        {hz:'ورزش',tr:'warzesh',nl:'Lichamelijke Opvoeding',tip:'LO — ook gewoon: sport'},
        {hz:'زبان',tr:'zabaan',nl:'Taal',tip:'"زبان انگلیسی" = Engelse taal'},
        {hz:'مضمون',tr:'mazmon',nl:'Schoolvak',tip:'Hazaragi woord voor vak'},
      ],
      sentences:[
        {hz:'مضمون دلخواه من ریاضیات اَس',tr:'mazmon delkhwaahom riyaaziyaat as',nl:'Mijn favoriete vak is wiskunde'},
        {hz:'تاریخ هزاره را باید بدانیم',tr:'taarikh hazaara ra baayad bedaanim',nl:'We moeten de geschiedenis van de Hazara kennen'},
        {hz:'هنر و ادبیات روح را غنی می‌کنه',tr:'honar wa adabiyaat rooh ra ghani mi-kona',nl:'Kunst en literatuur verrijken de ziel'},
      ]
    },

    { id:'university', title:'Universiteit & Hogere Studies', sub:'Studeren, diploma, docent...', icon:'🎓', xp:40,
      pronTips:['ف','پ'],
      grammar:'"پوهنتون" = universiteit in Afghaans Dari/Hazaragi. Van "پوهنه" (wetenschap) + "تون" (plaats). Standaard Dari gebruikt ook "دانشگاه".',
      words:[
        {hz:'پوهنتون',tr:'pohantoon',nl:'Universiteit',tip:'Afghaans woord — typisch Hazaragi gebruik'},
        {hz:'استاد',tr:'ostaad',nl:'Docent / Professor',tip:'Ook: meester, expert'},
        {hz:'فارغ‌التحصیل',tr:'faarigh-ottahsil',nl:'Afgestudeerd',tip:'"فارغ شدم" = ik ben afgestudeerd'},
        {hz:'محصل',tr:'mohassil',nl:'Student',tip:'"محصل" = Hazaragi/Afghaans voor universiteitsstudent — niet Iraans "دانشجو"'},
        {hz:'امتحان',tr:'emtahaan',nl:'Examen',tip:'"امتحان دادن" = examen doen'},
        {hz:'نمره',tr:'nomra',nl:'Cijfer',tip:'"نمره خوب گرفتم" = ik haalde een goed cijfer'},
        {hz:'رشته',tr:'reshta',nl:'Studierichting',tip:'"رشته طب" = geneeskunde — "طب" is Hazaragi/Afghaans (niet Iraans "پزشکی")'},
        {hz:'دیپلوم',tr:'diploma',nl:'Diploma',tip:''},
        {hz:'کتابخانه',tr:'ketaabkhaana',nl:'Bibliotheek',tip:''},
        {hz:'تحقیق',tr:'tahqiq',nl:'Onderzoek',tip:'"تحقیق کردن" = onderzoek doen'},
      ],
      sentences:[
        {hz:'دَ پوهنتون کابل درس می‌خونم',tr:'da pohantoon kabol dars mi-khwoom',nl:'Ik studeer aan de universiteit van Kabul'},
        {hz:'امتحان سخت بود اما نمره خوب گرفتم',tr:'emtahaan sakht bood amma nomra khob geraftom',nl:'Het examen was moeilijk maar ik haalde een goed cijfer'},
        {hz:'رشته‌ام طب اَس',tr:'reshtam tibb as',nl:'Mijn studierichting is geneeskunde'},
      ]
    },

    { id:'learning_knowledge', title:'Leren & Kennis', sub:'Weten, oefenen, begrijpen...', icon:'💡', xp:35,
      pronTips:['ع','ف'],
      grammar:'"بلد بودن" = iets kunnen/weten. "یاد گرفتن" = iets leren. "یاد داشتن" = iets weten/onthouden. Dit zijn drie verschillende structuren voor kennis in Hazaragi.',
      words:[
        {hz:'بلد',tr:'balad',nl:'Kunnen / Kennen',tip:'"بلدم" = ik kan het / ik ken het'},
        {hz:'یاد گرفتن',tr:'yaad gereftan',nl:'Leren',tip:'"یاد گرفتم" = ik heb geleerd'},
        {hz:'یاد داشتن',tr:'yaad daashtan',nl:'Weten / Onthouden',tip:'"یاد دارم" = ik weet het nog'},
        {hz:'مرور کردن',tr:'moror kardan',nl:'Herhalen / Doornemen',tip:''},
        {hz:'فامیدن',tr:'famidan',nl:'Begrijpen',tip:'"نفامیدم" = ik begreep het niet'},
        {hz:'سوال کردن',tr:'soaal kardan',nl:'Een vraag stellen',tip:''},
        {hz:'تمرین',tr:'tamrin',nl:'Oefening',tip:'"تمرین کردن" = oefenen'},
        {hz:'دانش',tr:'daanesh',nl:'Kennis',tip:''},
        {hz:'مشق',tr:'mashq',nl:'Huiswerk',tip:'"مشق نوشتن" = huiswerk maken'},
        {hz:'کتاب',tr:'ketaab',nl:'Boek',tip:''},
      ],
      sentences:[
        {hz:'هر روز تمرین کن تا بلد شی',tr:'har roz tamrin kon taa balad shi',nl:'Oefen elke dag zodat je het leert'},
        {hz:'اگه نفامیدی، سوال کو',tr:'aga nafamidi, soaal ko',nl:'Als je het niet begrijpt, stel dan een vraag'},
        {hz:'دانش بهترین چیزی اَس که داری',tr:'daanesh behtarin chizi as ka daari',nl:'Kennis is het beste wat je hebt'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH33 — AFGHANISTAN & GEOGRAFIE
  // ══════════════════════════════════════════════════════
  { id:'ch33', label:'🗺️ Hoofdstuk 33 · Afghanistan & Geografie', color:'#059669',
    lessons:[

    { id:'afghan_cities', title:'Steden van Afghanistan', sub:'Kabul, Bamyan, Mazar...', icon:'🏙️', xp:40,
      pronTips:['ب','ق'],
      grammar:'"ولایت" = provincie. "شهر" = stad. Afghanistan heeft 34 provinciën. Bamyan en Daikundi zijn de twee hoofdzakelijk Hazara-provincies.',
      words:[
        {hz:'کابل',tr:'kabol',nl:'Kabul',tip:'Hoofdstad van Afghanistan'},
        {hz:'بامیان',tr:'baamiaan',nl:'Bamyan',tip:'Hazara provincie — thuis van de Boeddhabeelden'},
        {hz:'مزار شریف',tr:'mazaar sharif',nl:'Mazar-i-Sharif',tip:'Heilige stad in het noorden'},
        {hz:'هرات',tr:'heraat',nl:'Herat',tip:'Westelijke stad, cultuurcentrum'},
        {hz:'جلال‌آباد',tr:'jalalaabaad',nl:'Jalalabad',tip:'Oostelijk, warm klimaat'},
        {hz:'غزنی',tr:'ghazni',nl:'Ghazni',tip:'Historische stad, gemengde bevolking'},
        {hz:'دایکندی',tr:'daaikundi',nl:'Daikundi',tip:'Hazara provincie'},
        {hz:'بهسود',tr:'bahsood',nl:'Behsood',tip:'Hazara district in Wardak'},
        {hz:'ولایت',tr:'welaayat',nl:'Provincie',tip:'"ولایت بامیان" = provincie Bamyan'},
        {hz:'شهر',tr:'shahr',nl:'Stad',tip:''},
      ],
      sentences:[
        {hz:'کابل پایتخت افغانستان اَس',tr:'kabol paayetakht afghaanestaan as',nl:'Kabul is de hoofdstad van Afghanistan'},
        {hz:'بامیان خانه اجدادی هزاره‌ها اَس',tr:'baamiaan khaana-ye ajdaadi hazaara-haa as',nl:'Bamyan is de voorouderlijke thuisbasis van de Hazara\'s'},
        {hz:'آرزو دارم یک بار به مزار شریف بروم',tr:'aarzo darom yak baar ba mazaar sharif berom',nl:'Ik wil ooit een keer naar Mazar-i-Sharif gaan'},
      ]
    },

    { id:'hazarajat_geo', title:'Hazarajat & Natuur', sub:'Bergen, valleien, meren...', icon:'🏔️', xp:40,
      pronTips:['خ','غ'],
      grammar:'"هزارجات" = Hazarajat: het historische thuisland van de Hazara in het centrum van Afghanistan. "بند امیر" = Band-e Amir: het eerste nationale park van Afghanistan, met azuurblauwe meren.',
      words:[
        {hz:'هزارجات',tr:'hazaarajaat',nl:'Hazarajat',tip:'Historisch Hazara thuisland'},
        {hz:'بند امیر',tr:'band-e amir',nl:'Band-e Amir',tip:'Nationaal park met blauwe meren — schitterend!'},
        {hz:'دره',tr:'dara',nl:'Vallei',tip:'"دره‌های سبز" = groene valleien'},
        {hz:'ییلاق',tr:'yilaaq',nl:'Zomerkamp / Bergweide',tip:'Seizoenstrek naar koelere hooglanden'},
        {hz:'کوچ',tr:'kooch',nl:'Trekvee / Nomadentrek',tip:'"کوچ کردن" = migreren/trekken'},
        {hz:'چراگاه',tr:'charaagaah',nl:'Weiland',tip:''},
        {hz:'چشمه',tr:'cheshma',nl:'Bron',tip:'"آو چشمه" = bronwater'},
        {hz:'دشت',tr:'dasht',nl:'Vlakte / Steppe',tip:''},
        {hz:'دامنه',tr:'daama',nl:'Berghelling',tip:'"دامنه کوه" = berghelling'},
        {hz:'تپه',tr:'tapa',nl:'Heuvel',tip:''},
      ],
      sentences:[
        {hz:'بند امیر گوشکیل‌ترین جای افغانستان اَس',tr:'band-e amir goshkiltarin jaaye afghaanestaan as',nl:'Band-e Amir is de mooiste plek van Afghanistan'},
        {hz:'هزارجات سرزمین کوه‌ها و دره‌ها اَس',tr:'hazaarajaat sarzamin-e koohhaa wa darahaa as',nl:'Hazarajat is het land van bergen en valleien'},
        {hz:'تابستان به ییلاق می‌رفتیم',tr:'taabestaan ba yilaaq mi-raftim',nl:'In de zomer gingen we naar de bergweide'},
      ]
    },

    { id:'afghan_landmarks', title:'Bezienswaardigheden', sub:'Historische plaatsen, monumenten...', icon:'🏛️', xp:35,
      pronTips:['م','ب'],
      grammar:'"تاریخی" = historisch. "میراث جهانی یونسکو" = UNESCO Werelderfgoed. De Boeddhabeelden van Bamyan (بت‌های بامیان) waren UNESCO Werelderfgoed voor hun vernietiging in 2001.',
      words:[
        {hz:'مسجد کبود',tr:'masjed-e kabood',nl:'Blauwe Moskee',tip:'Beroemde moskee in Mazar-i-Sharif'},
        {hz:'بت‌های بامیان',tr:'bot-haaye baamiaan',nl:'Boeddhabeelden Bamyan',tip:'Vernietigd in 2001 — grote culturele tragedie'},
        {hz:'ارگ',tr:'arg',nl:'Citadel / Paleis',tip:'"ارگ کابل" = presidentieel paleis Kabul'},
        {hz:'قلعه',tr:'qal\'a',nl:'Fort / Burcht',tip:'"قلعه تاریخی" = historisch fort'},
        {hz:'باغ',tr:'baagh',nl:'Tuin',tip:'"باغ بابر" = Babur Garden in Kabul'},
        {hz:'مزار',tr:'mazaar',nl:'Heiligdom / Graf',tip:'Heilige bedevaartplaats'},
        {hz:'تاریخی',tr:'taarikhi',nl:'Historisch',tip:''},
        {hz:'میراث',tr:'miraas',nl:'Erfgoed',tip:'"میراث فرهنگی" = cultureel erfgoed'},
        {hz:'موزیم',tr:'moziom',nl:'Museum',tip:''},
        {hz:'یادگار',tr:'yaadgaar',nl:'Monument / Aandenken',tip:''},
      ],
      sentences:[
        {hz:'مسجد کبود مزار شریف خیلی گوشکیل اَس',tr:'masjed-e kabood mazaar sharif kheli goshkil as',nl:'De Blauwe Moskee van Mazar-i-Sharif is heel mooi'},
        {hz:'بت‌های بامیان میراث جهانی بود',tr:'bot-haaye baamiaan miraas-e jahaaani bood',nl:'De Boeddhabeelden van Bamyan waren werelderfgoed'},
        {hz:'موزیم کابل تاریخ افغانستان را نگه می‌داره',tr:'moziom-e kabol taarikhe afghaanestaan ra negah mi-daara',nl:'Het museum van Kabul bewaart de geschiedenis van Afghanistan'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH34 — SPECIALE GELEGENHEDEN
  // ══════════════════════════════════════════════════════
  { id:'ch34', label:'🕯️ Hoofdstuk 34 · Speciale Gelegenheden', color:'#d97706',
    lessons:[

    { id:'birth_baby', title:'Geboorte & Baby', sub:'Pasgeboren, naam geven, vieren...', icon:'👶', xp:35,
      pronTips:['ماشاالله','چله'],
      grammar:'"ماشاالله" zeggen bij een baby of kind is verplichte etiquette — beschermt tegen het boze oog. "چله" = de eerste 40 dagen na de geboorte. Niet storen tijdens چله.',
      words:[
        {hz:'نوزاد',tr:'nawzaad',nl:'Pasgeboren baby',tip:''},
        {hz:'ماشاالله',tr:'mashaallah',nl:'Wat mooi/geweldig (bescherming boze oog)',tip:'Zeg dit altijd bij een baby!'},
        {hz:'اسم هشتن',tr:'esm hashtan',nl:'Een naam geven',tip:'"اسم هشتن رو بچه" = naam geven aan kind — Hazaragi: هشتن ipv گذاشتن'},
        {hz:'شیرینی',tr:'shirini',nl:'Snoep / Zoetigheidstractatie',tip:'Bij goed nieuws wordt شیرینی uitgedeeld'},
        {hz:'تولد',tr:'tawallod',nl:'Geboorte / Verjaardag',tip:'"تولدت مبارک" = gefeliciteerd met je verjaardag'},
        {hz:'به دنیا آمدن',tr:'ba donyaa aamadan',nl:'Geboren worden',tip:'"به دنیا اومد" = is geboren'},
        {hz:'چله',tr:'chela',nl:'40 dagen (na geboorte)',tip:'Traditionele periode van rust na bevalling'},
        {hz:'گهواره',tr:'gahowaara',nl:'Wieg',tip:'Traditionele Hazara wieg'},
        {hz:'مبارک',tr:'mobaarak',nl:'Gefeliciteerd',tip:'"مبارک باشه" = van harte gefeliciteerd'},
        {hz:'دعا',tr:'do\'aa',nl:'Gebed / Zegen',tip:'"دعا کردن" = bidden/zegenen'},
      ],
      sentences:[
        {hz:'بچه‌ات به دنیا اومد، مبارک باشه!',tr:'bachaat ba donyaa oomad, mobaarak baasha!',nl:'Je kind is geboren, van harte gefeliciteerd!'},
        {hz:'ماشاالله، خیلی گوشکیل اَس!',tr:'mashaallah, kheli goshkil as!',nl:'Mashallah, wat is het mooi!'},
        {hz:'چه اسمی رویش هشتین؟',tr:'cha esmi rowesh hashtin?',nl:'Welke naam hebben jullie hem/haar gegeven?'},
      ]
    },

    { id:'wedding_details', title:'Bruiloft & Huwelijk', sub:'Verloving, bruidegom, bruid...', icon:'💍', xp:40,
      pronTips:['ع','خ'],
      grammar:'"مهر" = bruidsschat (islamitisch huwelijkscontract). "جهیز" = uitzet van de bruid. "خطبه عقد" = huwelijksinzegening. Hazara bruiloften duren meerdere dagen.',
      words:[
        {hz:'نامزدی',tr:'naamzadi',nl:'Verloving',tip:'"نامزد کردن" = verloven'},
        {hz:'عروسی',tr:'arosi',nl:'Bruiloft',tip:'De viering zelf'},
        {hz:'عروس',tr:'aros',nl:'Bruid',tip:''},
        {hz:'داماد',tr:'daamaad',nl:'Bruidegom',tip:''},
        {hz:'مهر',tr:'mehr',nl:'Bruidsschat (islamitisch)',tip:'Islamitisch recht: betaling aan de bruid'},
        {hz:'جهیز',tr:'jahiz',nl:'Uitzet van de bruid',tip:'Meegegeven spullen vanuit bruids familie'},
        {hz:'خطبه',tr:'khotba',nl:'Huwelijksinzegening',tip:'"خطبه عقد" = islamitische trouwerij'},
        {hz:'دعوت',tr:'da\'wat',nl:'Uitnodiging',tip:'"دعوت کردن" = uitnodigen'},
        {hz:'رقص',tr:'raqs',nl:'Dans',tip:'"رقص کردن" = dansen'},
        {hz:'حلوا',tr:'halwaa',nl:'Zoet gerecht bij feesten',tip:'Traditioneel feestgerecht'},
      ],
      sentences:[
        {hz:'عروسی‌شان ماه آینده اَس',tr:'arosishaan maah-e aaayanda as',nl:'Hun bruiloft is volgende maand'},
        {hz:'عروس خیلی گوشکیل بود، ماشاالله',tr:'aros kheli goshkil bood, mashaallah',nl:'De bruid was heel mooi, mashallah'},
        {hz:'دعوت عروسی گرفتم، خوشحال شدم',tr:'da\'wat-e arosi gereftom, khoshhaal shodom',nl:'Ik heb een bruiloftsuitnodiging gekregen, ik werd blij'},
      ]
    },

    { id:'condolences', title:'Condoleances & Rouw', sub:'Overlijden, troost, gebed...', icon:'🕊️', xp:35,
      pronTips:['خ','ف'],
      grammar:'"خدا رحمت کنه" = moge God hem/haar genadig zijn — zeg dit altijd na het noemen van een overledene. "تسلیت" = condoleances. "فاتحه" = het lezen van Al-Fatiha voor de overledene.',
      words:[
        {hz:'تسلیت',tr:'tasliyat',nl:'Condoleances',tip:'"تسلیت می‌گم" = mijn condoleances'},
        {hz:'فوت کردن',tr:'fowt kardan',nl:'Overlijden',tip:'Beleefd: "فوت کرد" = is gestorven'},
        {hz:'خدا رحمت کنه',tr:'khoda rahmat kona',nl:'Moge God hem/haar genadig zijn',tip:'Zeg dit altijd na overledene te noemen'},
        {hz:'مرگ',tr:'marg',nl:'Dood',tip:''},
        {hz:'غم',tr:'gham',nl:'Verdriet',tip:'"غم دارم" = ik heb verdriet'},
        {hz:'عزاداری',tr:'azaadaari',nl:'Rouwperiode / Rouwen',tip:''},
        {hz:'دفن',tr:'dafn',nl:'Begrafenis',tip:'"دفن کردن" = begraven'},
        {hz:'فاتحه',tr:'faateha',nl:'Al-Fatiha lezen',tip:'"فاتحه خواندن" = Al-Fatiha reciteren voor overledene'},
        {hz:'صبر',tr:'sabr',nl:'Geduld (bij verdriet)',tip:'"صبر داشته باش" = houd geduld'},
        {hz:'خدا صبر بده',tr:'khoda sabr beda',nl:'Moge God u geduld geven',tip:'Troostende uitdrukking bij rouw'},
      ],
      sentences:[
        {hz:'تسلیت می‌گم، خدا صبر بده',tr:'tasliyat mi-gom, khoda sabr beda',nl:'Mijn condoleances, moge God u geduld geven'},
        {hz:'پدرم فوت کرد، خدا رحمتش کنه',tr:'padaram fowt kard, khoda rahmatash kona',nl:'Mijn vader is gestorven, moge God hem genadig zijn'},
        {hz:'فاتحه بخوانیم برای روح‌شان',tr:'faateha bekhwaanim baraaye rooheshaan',nl:'Laten we Al-Fatiha lezen voor hun ziel'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH35 — SPREEKWOORDEN & WIJSHEID
  // ══════════════════════════════════════════════════════
  { id:'ch35', label:'🌿 Hoofdstuk 35 · Spreekwoorden & Wijsheid', color:'#16a34a',
    lessons:[

    { id:'proverbs_nature', title:'Spreekwoorden: Natuur', sub:'Wijsheid uit bergen, water, seizoenen...', icon:'🏔️', xp:45,
      pronTips:['خ','آ'],
      grammar:'Hazaragi spreekwoorden zijn compact en beeldend. Ze gebruiken natuur als metafoor. "مثل" = zoals — veel spreekwoorden beginnen met een vergelijking met de natuur.',
      words:[
        {hz:'آو رو سنگ اَس',tr:'aaw ro sang as',nl:'Water gaat over steen (volharding)',tip:'Spreekwoord: zachtheid overwint hardheid'},
        {hz:'کوه به کوه نمی‌رسه',tr:'kooh ba kooh nami-resa',nl:'Berg naar berg komt niet (mensen wel)',tip:'Spreekwoord: mensen ontmoeten elkaar altijd'},
        {hz:'خار خار را می‌شناسه',tr:'khaar khaar ra mi-shenasa',nl:'Doorn kent doorn (gelijken begrijpen elkaar)',tip:'Spreekwoord: gelijkgestemden herkennen elkaar'},
        {hz:'باد می‌آید، ریشه می‌ماند',tr:'baad mi-aayad, risha mi-maana',nl:'Wind komt en gaat, wortels blijven',tip:'Spreekwoord: wat wortels heeft, blijft staan'},
        {hz:'دریا قطره قطره پر می‌شه',tr:'daryaa qatra qatra por mi-sha',nl:'Een rivier vult zich druppel voor druppel',tip:'Spreekwoord: grote dingen beginnen klein'},
        {hz:'برف زمستان را می‌گیره، بهار آزادش می‌کنه',tr:'barf zemestaan ra mi-gira, bahaar aazaadash mi-kona',nl:'Sneeuw pakt de winter, lente maakt het vrij',tip:'Spreekwoord: moeilijkheid heeft een eind'},
        {hz:'قطره',tr:'qatra',nl:'Druppel',tip:''},
        {hz:'ریشه',tr:'risha',nl:'Wortel',tip:'"ریشه داشتن" = geworteld zijn'},
        {hz:'خار',tr:'khaar',nl:'Doorn',tip:''},
        {hz:'باد',tr:'baad',nl:'Wind',tip:''},
      ],
      sentences:[
        {hz:'کوه به کوه نمی‌رسه، آدم به آدم می‌رسه',tr:'kooh ba kooh nami-resa, aadam ba aadam mi-resa',nl:'Berg naar berg niet, maar mensen zullen elkaar altijd ontmoeten'},
        {hz:'دریا قطره قطره پر می‌شه — صبر داشته باش',tr:'daryaa qatra qatra por mi-sha — sabr daashte baash',nl:'Een rivier vult zich druppel voor druppel — wees geduldig'},
        {hz:'باد می‌آید اما ریشه می‌ماند',tr:'baad mi-aayad amma risha mi-maana',nl:'Wind komt en gaat maar de wortel blijft'},
      ]
    },

    { id:'proverbs_life', title:'Spreekwoorden: Levenswijsheid', sub:'Geduld, arbeid, hoop...', icon:'💫', xp:45,
      pronTips:['ص','ع'],
      grammar:'"صبر تلخ اَس، میوه‌اش شیرین اَس" = Geduld is bitter, maar zijn vrucht is zoet. Dit is het bekendste Hazaragi levenswijsheidsspreekwoord — leer het uit je hoofd.',
      words:[
        {hz:'صبر تلخ اَس میوه‌اش شیرین',tr:'sabr talkh as, mewa-ash shirin',nl:'Geduld is bitter, zijn vrucht is zoet',tip:'Het bekendste Hazaragi spreekwoord!'},
        {hz:'کار کن و دعا کن',tr:'kaar kon wa do\'aa kon',nl:'Werk en bid',tip:'Spreekwoord: inspanning + gebed'},
        {hz:'امید آخرین چیزی اَس که می‌میره',tr:'omid aakherin chizi as ka mi-mira',nl:'Hoop is het laatste wat sterft',tip:''},
        {hz:'تلخ',tr:'talkh',nl:'Bitter',tip:'"تلخ اَس" = het is bitter'},
        {hz:'شیرین',tr:'shirin',nl:'Zoet',tip:'Ook: een vrouwennaam'},
        {hz:'میوه',tr:'mewa',nl:'Vrucht / Fruit',tip:'Letterlijk en figuurlijk: resultaat'},
        {hz:'امید',tr:'omid',nl:'Hoop',tip:'"امیدوارم" = ik hoop'},
        {hz:'زحمت',tr:'zahmat',nl:'Moeite / Inspanning',tip:'"زحمت کشیدن" = hard werken'},
        {hz:'نتیجه',tr:'natija',nl:'Resultaat',tip:''},
        {hz:'عاقبت',tr:'aaqebat',nl:'Uiteindelijk / Lot',tip:'"عاقبت خوب" = goed uiteinde'},
      ],
      sentences:[
        {hz:'صبر تلخ اَس اما میوه‌اش شیرین اَس',tr:'sabr talkh as amma mewa-ash shirin as',nl:'Geduld is bitter maar zijn vrucht is zoet'},
        {hz:'زحمت بکش، نتیجه خوب می‌گیری',tr:'zahmat bokesh, natija khob mi-giri',nl:'Doe je best, je zult een goed resultaat krijgen'},
        {hz:'امید داشته باش، عاقبت خیر اَس',tr:'omid daashte baash, aaqebat kheer as',nl:'Houd hoop, het eindigt goed'},
      ]
    },

    { id:'proverbs_hazara', title:'Hazaragi Uitdrukkingen', sub:'Typisch Hazaragi gezegdes en woorden...', icon:'🐇', xp:40,
      pronTips:['خ','گ'],
      grammar:'"خو چطو" = hoe gaat het? (typisch Hazaragi — letterlijk: "nu hoe?"). "جُور اَس" = het is goed / alles klopt. "گپ زدن" = praten/kletsen (Hazaragi term voor gesprek voeren).',
      words:[
        {hz:'خو چطو',tr:'kho chato',nl:'Hoe gaat het? (typisch Hazaragi)',tip:'Kenmerkend Hazaragi groet'},
        {hz:'جُور اَس',tr:'jor as',nl:'Goed / Klopt / Prima',tip:'"همه چیز جور اَس" = alles is prima'},
        {hz:'گپ زدن',tr:'gap zadan',nl:'Praten / Kletsen',tip:'"یک گپ بزنیم" = laten we even praten'},
        {hz:'خیر اَس',tr:'kheer as',nl:'Het is goed / Geen probleem',tip:'Geruststellende uitdrukking'},
        {hz:'اَس',tr:'as',nl:'Is (Hazaragi)',tip:'"خوب اَس" = het is goed — "اَس" ipv "است"'},
        {hz:'بُوم',tr:'boom',nl:'Was (Hazaragi)',tip:'"خوب بُوم" = ik was goed — "بُوم" ipv "بودم"'},
        {hz:'می‌رُوم',tr:'mi-room',nl:'Ik ga (Hazaragi)',tip:'"الان می‌رُوم" — "رُوم" ipv "روم"'},
        {hz:'چِرا نیستی؟',tr:'chera nisti?',nl:'Waarom ben je er niet?',tip:'Hazaragi variatie: "چِرا" ipv "چرا"'},
        {hz:'باز',tr:'baaz',nl:'Weer / Opnieuw',tip:'"باز اومدی؟" = ben je er weer?'},
        {hz:'هان',tr:'haan',nl:'Ja / Juist (bevestigend)',tip:'Informeel "ja" in Hazaragi'},
      ],
      sentences:[
        {hz:'خو چطو، همه چیز جور اَس؟',tr:'kho chato, hama chiz jor as?',nl:'Hoe gaat het, is alles prima?'},
        {hz:'هان، الحمدلله، جور اَس',tr:'haan, alhamdolillah, jor as',nl:'Ja, alhamdulillah, het is goed'},
        {hz:'بیا یک گپ بزنیم، وقت داری؟',tr:'biya yak gap bezanim, waqt daari?',nl:'Kom, laten we even praten, heb je tijd?'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH36 — DAGELIJKSE DIENSTEN
  // ══════════════════════════════════════════════════════
  { id:'ch36', label:'🏪 Hoofdstuk 36 · Dagelijkse Diensten', color:'#7c3aed',
    lessons:[

    { id:'pharmacy', title:'Apotheek & Medicijnen', sub:'Drogist, recept, pillen...', icon:'💊', xp:35,
      pronTips:['ف','ق'],
      grammar:'"فارمسی" = apotheek (van "pharmacy") — het Afghaanse woord. "دوا" = medicijn (algemeen Dari/Hazaragi). "نسخه" = recept van de dokter.',
      words:[
        {hz:'فارمسی',tr:'faarmasi',nl:'Apotheek',tip:'Afghaans woord (van pharmacy)'},
        {hz:'نسخه',tr:'noskha',nl:'Recept',tip:'"نسخه داکتر" = recept van de dokter'},
        {hz:'قرص',tr:'qors',nl:'Pil / Tablet',tip:'"قرص درد" = pijnstiller'},
        {hz:'مرهم',tr:'marham',nl:'Zalf / Crème',tip:'"مرهم برای زخم" = zalf voor wond'},
        {hz:'درد',tr:'dard',nl:'Pijn',tip:'"درد دارم" = ik heb pijn'},
        {hz:'تب',tr:'tab',nl:'Koorts',tip:'"تب دارم" = ik heb koorts'},
        {hz:'دوا',tr:'dawaa',nl:'Medicijn',tip:'"دوا خوردن" = medicijn innemen'},
        {hz:'آلرژی',tr:'aalarji',nl:'Allergie',tip:''},
        {hz:'ویتامین',tr:'witaamin',nl:'Vitamine',tip:''},
        {hz:'بیمه',tr:'bima',nl:'Verzekering',tip:'"بیمه درمانی" = zorgverzekering'},
      ],
      sentences:[
        {hz:'نسخه داکتر را دارم، دوا می‌خوام',tr:'noskha-ye daaktar ra darom, dawaa mi-khom',nl:'Ik heb een recept van de dokter, ik wil medicijnen'},
        {hz:'این قرص برای تب اَس؟',tr:'in qors baraaye tab as?',nl:'Is deze pil voor koorts?'},
        {hz:'آلرژی به پنی‌سیلین دارم',tr:'aalarji ba penisilin darom',nl:'Ik ben allergisch voor penicilline'},
      ]
    },

    { id:'barbershop', title:'Kapper', sub:'Haarsnijden, scheren, kapsel...', icon:'✂️', xp:30,
      pronTips:['س','ر'],
      grammar:'"سلمانی" = kapper/barbier (het woord en de zaak). "اصلاح" = scheren (letterlijk: verbeteren/corrigeren) — "اصلاح کردن" = scheren. In Hazarajat is de kapper ook een sociale ontmoetingsplek.',
      words:[
        {hz:'سلمانی',tr:'salmaani',nl:'Kapper / Barbierszaak',tip:''},
        {hz:'مو کوتاه کردن',tr:'moo kotaah kardan',nl:'Haar knippen',tip:'"موهامو کوتاه کن" = knip mijn haar'},
        {hz:'اصلاح',tr:'eslaah',nl:'Scheren',tip:'"اصلاح کردن" = scheren'},
        {hz:'ریش',tr:'rish',nl:'Baard',tip:'"ریش تراشیدن" = baard scheren'},
        {hz:'قاش',tr:'qaash',nl:'Wenkbrauw',tip:'Hazaragi: "قاش" — Iraans zegt "ابرو"'},
        {hz:'مدل',tr:'madal',nl:'Kapsel / Model',tip:'"چه مدلی می‌خوای؟" = welk kapsel wil je?'},
        {hz:'قیچی',tr:'qaychi',nl:'Schaar',tip:''},
        {hz:'آینه',tr:'aayna',nl:'Spiegel',tip:''},
        {hz:'نوبت',tr:'nowbat',nl:'Beurt',tip:'"نوبت دارم" = ik heb een afspraak/beurt'},
        {hz:'کوتاه',tr:'kotaah',nl:'Kort',tip:'"کوتاه‌تر" = korter'},
      ],
      sentences:[
        {hz:'می‌خوام موهامو کوتاه کنم',tr:'mi-khom moo-haamo kotaah konom',nl:'Ik wil mijn haar laten knippen'},
        {hz:'چه مدلی می‌خوای؟',tr:'cha madali mi-khwaayi?',nl:'Welk kapsel wil je?'},
        {hz:'ریشم را هم اصلاح کو',tr:'risham ra ham eslaah ko',nl:'Scheer ook mijn baard'},
      ]
    },

    { id:'bank_post', title:'Bank & Post', sub:'Overschrijving, storten, brief sturen...', icon:'🏦', xp:35,
      pronTips:['ح','و'],
      grammar:'"حواله" = overschrijving/wissel — heel gangbaar in Afghanistan omdat veel Hazara\'s in diaspora geld naar huis sturen via "حواله‌داری" (hawala-systeem, informeel geldovermakingssysteem).',
      words:[
        {hz:'بانک',tr:'baank',nl:'Bank',tip:''},
        {hz:'حواله',tr:'hawaala',nl:'Overschrijving / Hawala',tip:'Informeel geldovermakingssysteem — veel gebruikt'},
        {hz:'واریز',tr:'waarez',nl:'Storten',tip:'"واریز کردن" = storten op rekening'},
        {hz:'برداشت',tr:'bardaasht',nl:'Opnemen',tip:'"پول برداشتن" = geld opnemen'},
        {hz:'اسکناس',tr:'esknaans',nl:'Bankbiljet',tip:''},
        {hz:'پست',tr:'post',nl:'Post',tip:'"دفتر پست" = postkantoor'},
        {hz:'پاکت',tr:'paaket',nl:'Envelop',tip:''},
        {hz:'کارت',tr:'kaart',nl:'(Bank)kaart',tip:'"کارت بانکی" = bankpas'},
        {hz:'پس‌انداز',tr:'pas-andaaz',nl:'Spaargeld',tip:'"پس‌انداز کردن" = sparen'},
        {hz:'رسید',tr:'rasid',nl:'Bon / Ontvangstbewijs',tip:''},
      ],
      sentences:[
        {hz:'می‌خوام پول به کابل حواله کنم',tr:'mi-khom pool ba kabol hawaala konom',nl:'Ik wil geld overmaken naar Kabul'},
        {hz:'حساب بانکی باز کردن می‌خوام',tr:'hesaab-e baanki baaz kardan mi-khom',nl:'Ik wil een bankrekening openen'},
        {hz:'رسید را نگه دار، ممکن لازم شه',tr:'rasid ra negah daar, momken laazem sha',nl:'Bewaar de bon, die is misschien nodig'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH37 — MINDSET & MOTIVATIE
  // ══════════════════════════════════════════════════════
  { id:'ch37', label:'🧘 Hoofdstuk 37 · Mindset & Motivatie', color:'#7c3aed',
    lessons:[

    { id:'mindset_growth', title:'Groeimindset', sub:'Doelen, inzet, volhouden...', icon:'💪', xp:40,
      pronTips:['ص','ع'],
      grammar:'"تلاش کردن" = je best doen/proberen. "موفق شدن" = slagen/succesvol zijn. "ناامید شدن" = teleurgesteld raken — "نا-" is het negatieve voorvoegsel.',
      words:[
        {hz:'تلاش',tr:'talaash',nl:'Inspanning / Inzet',tip:'"تلاش کردن" = je best doen'},
        {hz:'موفقیت',tr:'mowafaqiyat',nl:'Succes',tip:'"موفق شدن" = slagen'},
        {hz:'هدف',tr:'hadaf',nl:'Doel',tip:'"هدف داشتن" = een doel hebben'},
        {hz:'امید',tr:'omid',nl:'Hoop',tip:'"امیدوارم" = ik hoop'},
        {hz:'اراده',tr:'eraada',nl:'Wilskracht',tip:'"اراده قوی داره" = heeft sterke wilskracht'},
        {hz:'ناامید',tr:'naa-omid',nl:'Teleurgesteld / Hopeloos',tip:'"نا-" = negatief voorvoegsel'},
        {hz:'ادامه دادن',tr:'edaama daadan',nl:'Doorgaan / Volhouden',tip:'"ادامه بده!" = ga door!'},
        {hz:'باور',tr:'baawor',nl:'Geloof / Vertrouwen',tip:'"باور دارم" = ik geloof erin'},
        {hz:'پیشرفت',tr:'pishraft',nl:'Vooruitgang',tip:'"پیشرفت کردن" = vooruitgang boeken'},
        {hz:'تجربه',tr:'tajroba',nl:'Ervaring',tip:'"تجربه کسب کردن" = ervaring opdoen'},
        {hz:'اشتباه',tr:'eshtebaa',nl:'Fout / Vergissing',tip:'"اشتباه کردن" = een fout maken — normaal!'},
        {hz:'درس گرفتن',tr:'dars gereftan',nl:'Leren van (iets)',tip:'"از اشتباه درس بگیر" = leer van fouten'},
      ],
      sentences:[
        {hz:'ناامید نشو، تلاشت ادامه بده',tr:'naa-omid nashao, talaashat edaama beda',nl:'Raak niet teleurgesteld, blijf je best doen'},
        {hz:'هر اشتباه یک درس اَس',tr:'har eshtebaa yak dars as',nl:'Elke fout is een les'},
        {hz:'با اراده قوی هر هدفی رسیدنی اَس',tr:'baa eraada-ye qawi har hadafi rasidani as',nl:'Met sterke wilskracht is elk doel bereikbaar'},
      ]
    },

    { id:'mindset_feelings', title:'Positieve Gevoelens & Kracht', sub:'Blij, sterk, dankbaar...', icon:'🌟', xp:35,
      pronTips:['خ','ق'],
      grammar:'"خوشحال" = blij (letterlijk: goed-toestand). "شاکر" = dankbaar — Hazaragi/Afghaans woord voor dankbaarheid. "قوی" = sterk — ook figuurlijk: een sterk geloof, een sterke persoon.',
      words:[
        {hz:'خوشحال',tr:'khoshhaal',nl:'Blij / Gelukkig',tip:'"خوشحال شدم" = ik werd blij'},
        {hz:'شاکر',tr:'shaakir',nl:'Dankbaar',tip:'"شاکر هستم" = ik ben dankbaar — typisch Hazaragi/Afghaans'},
        {hz:'قوی',tr:'qawi',nl:'Sterk',tip:'"قوی باش" = wees sterk'},
        {hz:'آرام',tr:'aaraam',nl:'Rustig / Kalm',tip:'"آرام باش" = wees kalm'},
        {hz:'راضی',tr:'raazi',nl:'Tevreden',tip:'"راضی هستم" = ik ben tevreden'},
        {hz:'افتخار',tr:'eftekhar',nl:'Trots',tip:'"افتخار می‌کنم" = ik ben trots'},
        {hz:'شاد',tr:'shaad',nl:'Vrolijk / Vreugdevol',tip:'Iets sterker dan خوشحال'},
        {hz:'مطمئن',tr:'motma\'en',nl:'Zeker / Zelfverzekerd',tip:'"مطمئن هستم" = ik ben zeker'},
        {hz:'انرژی',tr:'enerji',nl:'Energie',tip:'"انرژی دارم" = ik heb energie'},
        {hz:'الهام',tr:'elhaam',nl:'Inspiratie',tip:''},
      ],
      sentences:[
        {hz:'خوشحالم که دارم هزارگی یاد می‌گیرم',tr:'khoshhaalom ka darom hazaaragi yaad mi-girom',nl:'Ik ben blij dat ik Hazaragi aan het leren ben'},
        {hz:'قوی باش، می‌تانی!',tr:'qawi baash, mi-taani!',nl:'Wees sterk, je kunt het!'},
        {hz:'از تلاشت افتخار می‌کنم',tr:'az talaashat eftekhar mi-konom',nl:'Ik ben trots op jouw inzet'},
      ]
    },

    { id:'mindset_daily', title:'Dagelijkse Motivatiezinnen', sub:'Aanmoediging, felicitaties...', icon:'🌸', xp:35,
      pronTips:['ب','م'],
      grammar:'"بتانی" = je kunt het (aanmoediging). "مبارک باشه" = van harte gefeliciteerd. "دست مریزاد" = goed gedaan! (letterlijk: moge je hand niet moe worden) — typisch Hazaragi compliment voor goed werk.',
      words:[
        {hz:'دست مریزاد',tr:'dast morizaad',nl:'Goed gedaan! (Hazaragi compliment)',tip:'Letterlijk: moge je hand niet moe worden'},
        {hz:'آفرین',tr:'aafarin',nl:'Bravo! / Goed zo!',tip:'Aanmoediging voor kinderen en volwassenen'},
        {hz:'می‌تانی',tr:'mi-taani',nl:'Je kunt het',tip:'"می‌تانی!" = je kunt het! — typisch Hazaragi (niet Iraans "می‌تونی")'},
        {hz:'بیا',tr:'biya',nl:'Kom / Laten we',tip:'"بیا بریم" = kom laten we gaan'},
        {hz:'خوش بگذره',tr:'khosh bogzara',nl:'Veel plezier / Geniet ervan',tip:'Wenst iemand plezier'},
        {hz:'موفق باشی',tr:'mowafaq baashi',nl:'Veel succes',tip:'Veelgebruikte wens bij vertrek'},
        {hz:'انشاالله',tr:'enshaallaah',nl:'God willing / Hopelijk',tip:'Hazaragi: "eshaallaah" ook gangbaar'},
        {hz:'حالا',tr:'haala',nl:'Nu / Toch',tip:'"حالا بریم" = laten we nu gaan'},
        {hz:'بکن',tr:'bokon',nl:'Doe het (aanmoediging)',tip:'"تلاش بکن" = doe je best'},
        {hz:'خوشبختی',tr:'khoshbakhti',nl:'Geluk / Gelukzaligheid',tip:'"خوشبخت باش" = wees gelukkig'},
      ],
      sentences:[
        {hz:'دست مریزاد، خیلی خوب کردی',tr:'dast morizaad, kheli khob kardi',nl:'Goed gedaan, je hebt het heel goed gedaan'},
        {hz:'موفق باشی، انشاالله',tr:'mowafaq baashi, enshaallaah',nl:'Veel succes, hopelijk'},
        {hz:'آفرین، داری پیشرفت می‌کنی',tr:'aafarin, daari pishraft mi-koni',nl:'Bravo, je maakt vooruitgang'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH38 — LIEFDE & RELATIES
  // ══════════════════════════════════════════════════════
  { id:'ch38', label:'🌺 Hoofdstuk 38 · Liefde & Relaties', color:'#e11d48',
    lessons:[

    { id:'love_feelings', title:'Liefde & Genegenheid', sub:'Liefhebben, missen, koesteren...', icon:'❤️', xp:40,
      pronTips:['ع','خ'],
      grammar:'"دوستت دارم" = ik hou van jou (letterlijk: vriend-jou-ik-heb). Dit is de standaard manier om liefde/genegenheid uit te drukken in Hazaragi. "عاشق" = verliefd/verliefd zijn op iemand.',
      words:[
        {hz:'دوستت دارم',tr:'dostat darom',nl:'Ik hou van jou',tip:'De meest directe manier — gebruikt voor iedereen die je lief hebt'},
        {hz:'عاشق',tr:'aasheq',nl:'Verliefd / Liefhebber',tip:'"عاشقت هستم" = ik ben verliefd op jou'},
        {hz:'دلتنگی',tr:'deltangi',nl:'Heimwee / Je missen',tip:'"دلتنگتم" = ik mis jou'},
        {hz:'محبت',tr:'mohabbat',nl:'Liefde / Genegenheid',tip:'Diepere liefde dan دوستی'},
        {hz:'قلب',tr:'qalb',nl:'Hart',tip:'"قلبم برات می‌تپه" = mijn hart klopt voor jou'},
        {hz:'وفادار',tr:'wafaadaar',nl:'Trouw / Loyaal',tip:'Van "وفا" (trouw) + "-دار" (hebbend)'},
        {hz:'با هم',tr:'baa ham',nl:'Samen',tip:'"با هم بودن" = samen zijn'},
        {hz:'همیشه',tr:'hamesha',nl:'Altijd',tip:'"همیشه کنارت هستم" = ik ben er altijd voor jou'},
        {hz:'یاد',tr:'yaad',nl:'Herinnering / Denken aan',tip:'"یادت هستم" = ik denk aan jou'},
        {hz:'آرزو',tr:'aarzo',nl:'Wens / Verlangen',tip:'"آرزویم داری" = jij bent mijn wens'},
      ],
      sentences:[
        {hz:'دوستت دارم، همیشه یادت هستم',tr:'dostat darom, hamesha yaadot hastom',nl:'Ik hou van jou, ik denk altijd aan jou'},
        {hz:'دلتنگتم وختی نیستی',tr:'deltangatom wakhti nisti',nl:'Ik mis je wanneer je er niet bent'},
        {hz:'با هم بودن بهترین چیز اَس',tr:'baa ham boodan behtarin chiz as',nl:'Samen zijn is het beste'},
      ]
    },

    { id:'love_family_bonds', title:'Familiebanden', sub:'Ouders, broers, zussen...', icon:'👨‍👩‍👧‍👦', xp:35,
      pronTips:['خ','م'],
      grammar:'In Hazaragi cultuur zijn familiebanden heilig. "خانواده" = gezin/familie. "فامیل" = de bredere familie/clan. Een Hazara zegt nooit "ik" — altijd "wij" als familie.',
      words:[
        {hz:'خانواده',tr:'khaanwaada',nl:'Gezin / Familie',tip:'Naaste familiekring'},
        {hz:'بزرگ خانواده',tr:'bozorg-e khaanwaada',nl:'Hoofd van de familie',tip:''},
        {hz:'نزدیک',tr:'nazdik',nl:'Dichtbij / Nauw',tip:'"نزدیکانم" = mijn naasten'},
        {hz:'حمایت',tr:'hamaayat',nl:'Steun / Ondersteuning',tip:'"حمایت کردن" = steunen'},
        {hz:'فداکاری',tr:'fedaakaari',nl:'Opoffering / Toewijding',tip:'"فداکار" = toegewijd persoon'},
        {hz:'ریشه',tr:'risha',nl:'Wortel / Afkomst',tip:'"ریشه‌ام هزاره اَس" = mijn wortels zijn Hazara'},
        {hz:'نسل',tr:'nasl',nl:'Generatie',tip:'"نسل جوان" = de jonge generatie'},
        {hz:'میراث',tr:'miraas',nl:'Erfenis / Nalatenschap',tip:''},
        {hz:'پیوند',tr:'peywand',nl:'Band / Verbinding',tip:'"پیوند خانوادگی" = familieband'},
        {hz:'دلسوزی',tr:'delsozi',nl:'Bezorgdheid / Medeleven',tip:''},
      ],
      sentences:[
        {hz:'خانواده‌ام برام از همه چیز مهم‌تر اَس',tr:'khaanwaadaam baaram az hama chiz mohemtar as',nl:'Mijn familie is voor mij belangrijker dan alles'},
        {hz:'از فداکاری مادرم شاکر هستم',tr:'az fedaakaari maadaram shaakir hastom',nl:'Ik ben dankbaar voor de opoffering van mijn moeder'},
        {hz:'پیوند ما را هیچ‌چیز نمی‌تانه بشکنه',tr:'peywand-e maa ra hich-chiz nami-taana beshkana',nl:'Niets kan onze band breken'},
      ]
    },

    { id:'love_friendship', title:'Vriendschap', sub:'Vrienden, vertrouwen, loyaliteit...', icon:'🤝', xp:35,
      pronTips:['ر','د'],
      grammar:'"دوست" = vriend — ook gebruikt als liefdevolle aanspreekvorm. "رفیق" = dikke vriend/kameraad (sterker dan دوست) — typisch Hazaragi informeel woord. "یار" = gezel/makker — poëtisch.',
      words:[
        {hz:'دوست',tr:'dost',nl:'Vriend',tip:'"دوست داشتن" = houden van / vrienden zijn'},
        {hz:'رفیق',tr:'rafiq',nl:'Dikke vriend / Kameraad',tip:'Sterker dan دوست — echte vriendschap'},
        {hz:'یار',tr:'yaar',nl:'Gezel / Makker',tip:'Poëtisch/traditioneel woord voor vriend'},
        {hz:'اعتماد',tr:'e\'temaad',nl:'Vertrouwen',tip:'"اعتماد کردن" = vertrouwen'},
        {hz:'وفا',tr:'wafaa',nl:'Trouw / Loyaliteit',tip:'"با وفا" = trouw'},
        {hz:'شریک',tr:'sharik',nl:'Partner / Metgezel',tip:'"شریک زندگی" = levenspartner'},
        {hz:'خوش‌خلق',tr:'khosh-kholq',nl:'Goedgehumeurd / Aardig',tip:'"خوش‌خلق بودن" = aardig zijn'},
        {hz:'درد دل',tr:'dard-e del',nl:'Hartje luchten / Biecht',tip:'"درد دل کردن" = je hart luchten bij een vriend'},
        {hz:'کنار',tr:'kenaar',nl:'Naast / Aan de kant van',tip:'"کنارت هستم" = ik sta aan jouw kant'},
        {hz:'تنها',tr:'tanhaa',nl:'Alleen / Eenzaam',tip:'"تنها نیستی" = je bent niet alleen'},
      ],
      sentences:[
        {hz:'رفیق واقعی کنارت اَس دَ سختی',tr:'rafiq-e waaqe\'i kenaarot as da sakhti',nl:'Een echte vriend staat naast jou in moeilijke tijden'},
        {hz:'درد دلت را باهام بگوی',tr:'dard-e delat ra baahaam bogoi',nl:'Vertel mij wat je op je hart hebt'},
        {hz:'تنها نیستی، من اینجام',tr:'tanhaa nisti, man injaam',nl:'Je bent niet alleen, ik ben hier'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH39 — VRIJE TIJD & HOBBY'S
  // ══════════════════════════════════════════════════════
  { id:'ch39', label:'🎮 Hoofdstuk 39 · Vrije Tijd & Hobby\'s', color:'#0891b2',
    lessons:[

    { id:'hobbies_sports', title:'Sport & Beweging', sub:'Voetbal, zwemmen, wandelen...', icon:'⚽', xp:35,
      pronTips:['ف','و'],
      grammar:'"ورزش کردن" = sporten. In Hazaragi: "فوتبال" = voetbal, "والیبال" = volleybal. "برنده شدن" = winnen, "باختن" = verliezen — beide veel gebruikt in sporten.',
      words:[
        {hz:'ورزش',tr:'warzesh',nl:'Sport',tip:'"ورزش کردن" = sporten'},
        {hz:'فوتبال',tr:'footbaal',nl:'Voetbal',tip:'Populairste sport in Afghanistan'},
        {hz:'والیبال',tr:'waalibaal',nl:'Volleybal',tip:'Veel gespeeld door Hazara jongeren'},
        {hz:'دویدن',tr:'dawidan',nl:'Rennen / Hardlopen',tip:'"می‌دوم" = ik ren'},
        {hz:'شنا کردن',tr:'shanaa kardan',nl:'Zwemmen',tip:'"شنا بلدم" = ik kan zwemmen'},
        {hz:'کوه‌نوردی',tr:'kooh-nawardi',nl:'Bergwandelen',tip:'Populair in Hazarajat'},
        {hz:'برنده',tr:'baranda',nl:'Winnaar',tip:'"برنده شدن" = winnen'},
        {hz:'باختن',tr:'baakhtan',nl:'Verliezen',tip:'"باختیم" = we verloren'},
        {hz:'تیم',tr:'tim',nl:'Team',tip:'"هم‌تیمی" = teamgenoot'},
        {hz:'مسابقه',tr:'masaabeqa',nl:'Wedstrijd',tip:'"مسابقه دادن" = meedoen aan een wedstrijd'},
        {hz:'ورزشگاه',tr:'warzeshgaah',nl:'Sporthal / Stadion',tip:''},
        {hz:'قهرمان',tr:'qahramaan',nl:'Kampioen / Held',tip:'"قهرمان شدن" = kampioen worden'},
      ],
      sentences:[
        {hz:'هر روز صبح می‌دوم، خیلی خوب اَس',tr:'har roz sobh mi-dawom, kheli khob as',nl:'Elke ochtend ren ik, het is heel goed'},
        {hz:'فوتبال بازی کردن دوست دارم',tr:'footbaal baazi kardan dost darom',nl:'Ik hou van voetbal spelen'},
        {hz:'تیم ما برنده شد، خوشحال شدیم',tr:'tim-e maa baranda shod, khoshhaal shodim',nl:'Ons team won, we werden blij'},
      ]
    },

    { id:'hobbies_creative', title:'Creatieve Hobby\'s', sub:'Tekenen, lezen, koken...', icon:'🎨', xp:35,
      pronTips:['خ','ن'],
      grammar:'"نقاشی کردن" = tekenen/schilderen. "کتاب خواندن" = een boek lezen (letterlijk: boek lezen). "آشپزی کردن" = koken. De structuur "[activiteit] + کردن" maakt van elk zelfstandig naamwoord een werkwoord.',
      words:[
        {hz:'نقاشی',tr:'naqqaashi',nl:'Tekenen / Schilderen',tip:'"نقاشی کردن" = tekenen'},
        {hz:'کتاب خواندن',tr:'ketaab khaanadan',nl:'Lezen',tip:'"کتاب می‌خونم" = ik lees'},
        {hz:'آشپزی',tr:'aashpazi',nl:'Koken',tip:'"آشپزی کردن" = koken'},
        {hz:'موسیقی',tr:'musiqi',nl:'Muziek',tip:'"موسیقی گوش دادن" = muziek luisteren'},
        {hz:'خیاطی',tr:'khayaati',nl:'Naaien',tip:'Traditioneel Hazara vaardigheid'},
        {hz:'باغبانی',tr:'baaqbaani',nl:'Tuinieren',tip:''},
        {hz:'عکاسی',tr:'okaasi',nl:'Fotografie',tip:'"عکس گرفتن" = een foto nemen'},
        {hz:'بافتن',tr:'baaftan',nl:'Weven / Breien',tip:'Hazaragi vloerkleden zijn beroemd'},
        {hz:'شعر',tr:'she\'r',nl:'Poëzie / Gedicht',tip:'"شعر خواندن" = poëzie lezen/voordragen'},
        {hz:'سفر',tr:'safar',nl:'Reizen',tip:'"سفر کردن" = reizen'},
      ],
      sentences:[
        {hz:'نقاشی کردن آرامشم می‌ده',tr:'naqqaashi kardan aaraamasham mi-da',nl:'Tekenen geeft mij rust'},
        {hz:'دَ وقت آزادم کتاب می‌خونم',tr:'da waqt-e aazaadam ketaab mi-khwoom',nl:'In mijn vrije tijd lees ik'},
        {hz:'خواهرم خیاطی بلده، خیلی خوب می‌کنه',tr:'khaaharom khayaati balada, kheli khob mi-kona',nl:'Mijn zus kan naaien, ze doet het heel goed'},
      ]
    },

    { id:'hobbies_social', title:'Sociale Activiteiten', sub:'Bezoeken, spelletjes, theekrans...', icon:'☕', xp:30,
      pronTips:['م','چ'],
      grammar:'"مهمانی" = feestje/bijeenkomst/visite. "مهمان" = gast. "میزبان" = gastheer/gastvrouw. In de Hazara cultuur is gastvrijheid een erespunt — een gast afwijzen is ondenkbaar.',
      words:[
        {hz:'مهمانی',tr:'mehmaani',nl:'Feestje / Bijeenkomst',tip:'"مهمانی رفتن" = op visite gaan'},
        {hz:'مهمان',tr:'mehmaan',nl:'Gast',tip:'"مهمان عزیز" = gewaardeerde gast'},
        {hz:'میزبان',tr:'mizbaan',nl:'Gastheer / Gastvrouw',tip:'Gastvrijheid is een eer'},
        {hz:'چای نوشیدن',tr:'chaay nooshidan',nl:'Thee drinken',tip:'Sociale activiteit bij uitstek'},
        {hz:'بازی کردن',tr:'baazi kardan',nl:'Spelen / Spel spelen',tip:'"چی بازی بکنیم؟" = welk spel spelen we?'},
        {hz:'سرگرمی',tr:'sargarmi',nl:'Tijdverdrijf / Entertainment',tip:''},
        {hz:'تفریح',tr:'tafriih',nl:'Recreatie / Uitje',tip:'"تفریح رفتن" = een uitje maken'},
        {hz:'گردش',tr:'gardesh',nl:'Uitstap / Wandeling',tip:'"گردش رفتن" = gaan wandelen'},
        {hz:'جمع',tr:'jam\'',nl:'Bij elkaar',tip:'"جمع شدن" = bijeenkomen'},
        {hz:'خندیدن',tr:'khandidan',nl:'Lachen',tip:'"خیلی خندیدیم" = we lachten heel veel'},
      ],
      sentences:[
        {hz:'جمعه مهمانی داریم، میای؟',tr:'jome mehmaani daarim, miyaai?',nl:'Vrijdag hebben we een bijeenkomst, kom je?'},
        {hz:'مهمان نعمت اَس — این رسم ماس',tr:'mehmaan ne\'mat as — in rasom maas',nl:'Een gast is een zegen — dat is onze traditie'},
        {hz:'با هم چای بخوریم و گپ بزنیم',tr:'baa ham chaay bekhorim wa gap bezanim',nl:'Laten we samen thee drinken en kletsen'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH40 — ISLAMITISCHE DAGELIJKSE UITDRUKKINGEN
  // ══════════════════════════════════════════════════════
  { id:'ch40', label:'🌙 Hoofdstuk 40 · Islamitische Dagelijkse Uitdrukkingen', color:'#065f46',
    lessons:[

    { id:'islamic_daily', title:'Dagelijkse Islamitische Uitdrukkingen', sub:'Bismillah, Alhamdulillah, Mashallah...', icon:'🌙', xp:40,
      pronTips:['ع','خ'],
      grammar:'Deze uitdrukkingen zijn onlosmakelijk verbonden met Hazaragi dagelijks leven. Ze zijn geen formele religie maar normale spreektaal — je hoort ze tientallen keren per dag.',
      words:[
        {hz:'بسم الله',tr:'bismillaah',nl:'In de naam van God',tip:'Vóór elke activiteit: eten, beginnen, rijden'},
        {hz:'الحمدلله',tr:'alhamdolillah',nl:'Lof zij God / Gelukkig',tip:'Na goed nieuws of als antwoord op "hoe gaat het?"'},
        {hz:'ایشالله',tr:'ishaallah',nl:'Als God het wil',tip:'Bij toekomstplannen — altijd zeggen!'},
        {hz:'ماشاالله',tr:'mashaallah',nl:'God zij geprezen (bij iets moois)',tip:'Bij complimenteren van een kind, prestatie — beschermt tegen boze oog'},
        {hz:'سبحان الله',tr:'sobhaan-allaah',nl:'Geprezen zij God (bij verbazing)',tip:'Bij iets wonderlijks of moois'},
        {hz:'استغفرالله',tr:'astaghferollaah',nl:'Ik zoek Gods vergiffenis',tip:'Bij slecht nieuws, fout of als schrik'},
        {hz:'انا لله',tr:'innaa lillaah',nl:'Wij zijn van God (bij overlijden)',tip:'Bij slecht nieuws, overlijdensbericht'},
        {hz:'یا الله',tr:'yaa allaah',nl:'Oh God! / Goede hemel!',tip:'Uitroep van verbazing, pijn of smeekbede'},
        {hz:'جزاک الله',tr:'jazaak allaah',nl:'God moge je belonen',tip:'Dankbaarheid uitdrukken — sterker dan "تشکر"'},
        {hz:'فی امان الله',tr:'fi amaan allaah',nl:'In Gods bescherming (afscheid)',tip:'Formeel/traditioneel afscheid'},
        {hz:'خدا حافظ',tr:'khodaa haafez',nl:'God behoede je (tot ziens)',tip:'Letterlijke betekenis van "tot ziens" in Hazaragi'},
        {hz:'توکل به خدا',tr:'tawakkal ba khodaa',nl:'Vertrouw op God',tip:'"توکل کردن" = op God vertrouwen'},
      ],
      sentences:[
        {hz:'بسم الله، شروع می‌کنیم',tr:'bismillaah, shoroo mi-konim',nl:'In de naam van God, laten we beginnen'},
        {hz:'الحمدلله خوبم، تشکر که پرسیدی',tr:'alhamdolillah khobom, tashakor ka porsidi',nl:'Alhamdulillah ik ben goed, bedankt dat je het vraagt'},
        {hz:'ماشاالله، چنده گوشکیل اَس!',tr:'mashaallah, chanda goshkil as!',nl:'Mashallah, wat is het mooi!'},
      ]
    },

    { id:'islamic_prayer', title:'Gebed & Moskee', sub:'Salah, moskee, Quran...', icon:'🕌', xp:40,
      pronTips:['ص','ع'],
      grammar:'"نماز" = het islamitische gebed (salah). "مسجد" = moskee. Hazara moslims zijn overwegend sjiïtisch — het gebed volgt de sjiïtische vorm. "وضو" = rituele reiniging vóór gebed.',
      words:[
        {hz:'نماز',tr:'namaaz',nl:'Gebed (salah)',tip:'"نماز خواندن" = bidden'},
        {hz:'مسجد',tr:'masjed',nl:'Moskee',tip:''},
        {hz:'وضو',tr:'wozoo',nl:'Rituele reiniging',tip:'Verplicht vóór gebed'},
        {hz:'قبله',tr:'qebla',nl:'Richting van Mekka',tip:'"قبله کجاس؟" = welke kant is Mekka?'},
        {hz:'اذان',tr:'azaan',nl:'Gebedsoproep',tip:'Vijf keer per dag'},
        {hz:'قرآن',tr:'qoraan',nl:'De Koran',tip:'"قرآن خواندن" = Koran lezen'},
        {hz:'دعا',tr:'do\'aa',nl:'Smeekgebed / Zegen',tip:'"دعا کردن" = bidden/zegenen'},
        {hz:'روزه',tr:'roza',nl:'Vasten (Ramadan)',tip:'"روزه داشتن" = vasten'},
        {hz:'رمضان',tr:'ramazaan',nl:'Ramadan',tip:'Heilige vastenmaand'},
        {hz:'عید',tr:'eid',nl:'Eid / Feestdag',tip:'"عید مبارک" = gelukkig eid'},
        {hz:'زکات',tr:'zakaat',nl:'Zakat (armenbelasting)',tip:'Derde zuil van de islam'},
        {hz:'حج',tr:'hajj',nl:'Hadj / Bedevaart',tip:'"حج رفتن" = naar Mekka gaan'},
      ],
      sentences:[
        {hz:'وقت نماز اَس، برویم مسجد',tr:'waqt-e namaaz as, baravim masjed',nl:'Het is tijd voor gebed, laten we naar de moskee gaan'},
        {hz:'رمضان ماه رحمت و برکت اَس',tr:'ramazaan maah-e rahmat wa barakat as',nl:'Ramadan is de maand van genade en zegen'},
        {hz:'عید مبارک، خدا قبول کنه',tr:'eid mobaarak, khodaa qabol kona',nl:'Gelukkig eid, moge God het aanvaarden'},
      ]
    },

    { id:'islamic_dua', title:'Zegenwensen & Duaas', sub:'Gebeden voor dagelijkse situaties...', icon:'🤲', xp:35,
      pronTips:['خ','ع'],
      grammar:'Duaas zijn korte gebeden voor specifieke situaties. Ze worden in het Arabisch uitgesproken maar zijn diep geïntegreerd in de Hazaragi spreektaal. Je hoeft ze niet te begrijpen — ze worden als geheel gebruikt.',
      words:[
        {hz:'خدا رحمتش کنه',tr:'khodaa rahmatash kona',nl:'Moge God hem/haar genadig zijn',tip:'Na het noemen van een overledene — altijd zeggen'},
        {hz:'خدا شفا بده',tr:'khodaa shafaa beda',nl:'Moge God genezing geven',tip:'Bij ziekte van iemand'},
        {hz:'خدا نگهت داره',tr:'khodaa negahat daara',nl:'Moge God je beschermen',tip:'Bezorgde zegen — bij vertrek'},
        {hz:'خدا خیرت بده',tr:'khodaa kheyrat beda',nl:'Moge God je belonen met goed',tip:'Bij gulheid, goede daad'},
        {hz:'خدا قبول کنه',tr:'khodaa qabol kona',nl:'Moge God het aanvaarden',tip:'Na gebed, vasten, goed werk'},
        {hz:'خدا صبر بده',tr:'khodaa sabr beda',nl:'Moge God geduld geven',tip:'Bij verdriet, rouw'},
        {hz:'برکت',tr:'barakat',nl:'Zegen / Overvloed',tip:'"برکت داشته باش" = wees gezegend'},
        {hz:'رحمت',tr:'rahmat',nl:'Genade / Barmhartigheid',tip:'Van God of mensen'},
        {hz:'امین',tr:'aameen',nl:'Amen',tip:'Na elke dua gezegd'},
        {hz:'شفا',tr:'shafaa',nl:'Genezing',tip:'"شفا پیدا کن" = herstel snel'},
      ],
      sentences:[
        {hz:'خدا شفا بده، زود خوب شو',tr:'khodaa shafaa beda, zud khob sho',nl:'Moge God genezing geven, word snel beter'},
        {hz:'الحمدلله، خدا خیر بده برات',tr:'alhamdolillah, khodaa kheyr beda baraat',nl:'Alhamdulillah, moge God je het goede geven'},
        {hz:'خدا نگهت داره، مراقب باش',tr:'khodaa negahat daara, muraaqeb baash',nl:'Moge God je beschermen, pas op jezelf'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH41 — CONVERSATIESTRATEGIEËN
  // ══════════════════════════════════════════════════════
  { id:'ch41', label:'🗣️ Hoofdstuk 41 · Conversatiestrategieën', color:'#1d4ed8',
    lessons:[

    { id:'conv_clarify', title:'Verduidelijken & Herhalen', sub:'Ik begrijp niet, zeg het opnieuw...', icon:'🔄', xp:35,
      pronTips:['خ','ف'],
      grammar:'"ازوال بگوی" = zeg het opnieuw. "آسته‌تر بگوی" = zeg het langzamer. Hazaragi: "بگوی" (bogoi) ipv Iraans "بگو" (bego). "ازوال" (azawal) ipv Iraans "دوباره".',
      words:[
        {hz:'ازوال',tr:'azawal',nl:'Opnieuw / Nog een keer',tip:'"ازوال بگوی" = zeg het opnieuw — Hazaragi ipv Iraans "دوباره"'},
        {hz:'آسته',tr:'asta',nl:'Langzaam',tip:'"آسته‌تر بگوی" = zeg het langzamer — Hazaragi: asta'},
        {hz:'بلند',tr:'boland',nl:'Harder / Luid',tip:'"بلندتر بگوی" = spreek harder'},
        {hz:'نفامیدم',tr:'nafamidom',nl:'Ik begreep het niet',tip:'Eerlijk en beleefd zeggen'},
        {hz:'یعنی چی؟',tr:'yani chi?',nl:'Wat betekent dat?',tip:'Universele verduidelijkingsvraag'},
        {hz:'مطمئنی؟',tr:'motma\'eni?',nl:'Weet je het zeker?',tip:'Vriendelijk twijfelen'},
        {hz:'دروسه؟',tr:'dorosa?',nl:'Klopt dat? / Is dat juist?',tip:'Bevestiging vragen'},
        {hz:'یادم نیس',tr:'yaadamnis',nl:'Ik weet het niet meer',tip:'Hazaragi: "نیس" = niet'},
        {hz:'چتور می‌گن؟',tr:'chetor mi-gan?',nl:'Hoe zeggen ze dat?',tip:'Vragen hoe je iets zegt'},
        {hz:'به هزارگی چه می‌گن؟',tr:'ba hazaaragi cha mi-gan?',nl:'Hoe zeg je dat in Hazaragi?',tip:'Perfecte leervraag!'},
      ],
      sentences:[
        {hz:'ازوال بگوی، آسته‌تر',tr:'azawal bogoi, asta-tar',nl:'Zeg het opnieuw, langzamer'},
        {hz:'نفامیدم، یعنی چی؟',tr:'nafamidom, yani chi?',nl:'Ik begreep het niet, wat betekent dat?'},
        {hz:'به هزارگی چتور می‌گن "bedankt"؟',tr:'ba hazaaragi chetor mi-gan "bedankt"?',nl:'Hoe zeg je "bedankt" in Hazaragi?'},
      ]
    },

    { id:'conv_agree', title:'Eens of Oneens', sub:'Akkoord, precies, absoluut...', icon:'👍', xp:30,
      pronTips:['ع','خ'],
      grammar:'"خوبَم؟" = klopt dit? / is het goed? (Hazaragi). "راست اَس" = dat is waar. "موافق هستم" = ik ben het ermee eens. "مخالفم" = ik ben het er niet mee eens.',
      words:[
        {hz:'خوبَم',tr:'khobam',nl:'Dat klopt / Prima zo',tip:'Hazaragi bevestiging — "خوبَم؟" = klopt dit?'},
        {hz:'راست اَس',tr:'raast as',nl:'Dat is waar / Precies',tip:''},
        {hz:'موافقم',tr:'mowaafeqom',nl:'Ik ben het ermee eens',tip:'"موافق هستم" = ik ga akkoord'},
        {hz:'مخالفم',tr:'mokhaalefom',nl:'Ik ben het er niet mee eens',tip:'Vriendelijk oneens zijn'},
        {hz:'بله، دقیقاً',tr:'bale, daqiqan',nl:'Ja, precies / Exact',tip:'Sterke bevestiging'},
        {hz:'نه، اشتباه اَس',tr:'na, eshtebaa as',nl:'Nee, dat is fout',tip:'Vriendelijk corrigeren'},
        {hz:'شاید',tr:'shaayad',nl:'Misschien',tip:'Onzekerheid uitdrukken'},
        {hz:'نمی‌فامم',tr:'na-mi-famom',nl:'Ik weet het niet',tip:'Eerlijk antwoord'},
        {hz:'فکر می‌کنم',tr:'fekr mi-konom',nl:'Ik denk dat...',tip:'"فکر می‌کنم خوبَم" = ik denk dat het klopt'},
        {hz:'به نظرم',tr:'ba nazaram',nl:'Naar mijn mening',tip:'Mening geven'},
      ],
      sentences:[
        {hz:'به نظرم خوبَم، موافقم',tr:'ba nazaram khobam, mowaafeqom',nl:'Naar mijn mening klopt het, ik ben het ermee eens'},
        {hz:'شاید، ولی مطمئن نیستم',tr:'shaayad, wali motma\'en nistom',nl:'Misschien, maar ik ben er niet zeker van'},
        {hz:'نه، اشتباه اَس — اینطور نیس',tr:'na, eshtebaa as — intoor nis',nl:'Nee, dat klopt niet — zo is het niet'},
      ]
    },

    { id:'conv_feelings_live', title:'Gevoel Uitdrukken in Gesprek', sub:'Verbaasd, boos, blij reageren...', icon:'😮', xp:35,
      pronTips:['و','آ'],
      grammar:'"وای!" = wow / ach! (verrassing of schrik). "آخ!" = au! (pijn). "واقعاً؟" = echt waar? (verbazing). Dit zijn spontane reacties — ze maken je Hazaragi klinken als een echte spreker.',
      words:[
        {hz:'وای!',tr:'waay!',nl:'Wauw! / Ach! / Oh nee!',tip:'Verbazing of schrik — heel veel gebruikt'},
        {hz:'آخ!',tr:'aakh!',nl:'Au! / Oef!',tip:'Pijn of onplezierige verrassing'},
        {hz:'واقعاً؟',tr:'waaqe\'an?',nl:'Echt waar?',tip:'Verbazing uitdrukken'},
        {hz:'عالی اَس!',tr:'aali as!',nl:'Geweldig! / Fantastisch!',tip:'"عالی" = uitstekend'},
        {hz:'چه بد!',tr:'cha bad!',nl:'Wat erg! / Wat jammer!',tip:'Medeleven of teleurstelling'},
        {hz:'باور نمی‌کنم',tr:'baawor nami-konom',nl:'Ik kan het niet geloven',tip:''},
        {hz:'خوشم می‌آد',tr:'khosham mi-aad',nl:'Ik vind het leuk / Ik hou ervan',tip:'"خوشم نمی‌آد" = ik hou er niet van'},
        {hz:'ناراحت شدم',tr:'naaraahat shodom',nl:'Ik ben van streek geraakt',tip:'"ناراحت" = verdrietig / van streek'},
        {hz:'تعجب کردم',tr:'ta\'ajjob kardam',nl:'Ik was verbaasd',tip:'"تعجب آور اَس" = het is verbazingwekkend'},
        {hz:'خنده‌ام گرفت',tr:'khandaam gereft',nl:'Ik moest lachen',tip:'Letterlijk: het lachen pakte me'},
      ],
      sentences:[
        {hz:'وای، واقعاً؟ باور نمی‌کنم!',tr:'waay, waaqe\'an? baawor nami-konom!',nl:'Wauw, echt waar? Ik kan het niet geloven!'},
        {hz:'عالی اَس، خوشم آد!',tr:'aali as, khosham aad!',nl:'Geweldig, ik vind het leuk!'},
        {hz:'چه بد، ناراحت شدم برات',tr:'cha bad, naaraahat shodom baraat',nl:'Wat erg, ik voel met je mee'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH42 — WINKELEN & ONDERHANDELEN
  // ══════════════════════════════════════════════════════
  { id:'ch42', label:'🛒 Hoofdstuk 42 · Winkelen & Onderhandelen', color:'#b45309',
    lessons:[

    { id:'shopping_bazaar', title:'Op de Bazaar', sub:'Kopen, verkopen, prijzen...', icon:'🏪', xp:40,
      pronTips:['خ','ق'],
      grammar:'"بازار" = markt/bazaar. "دکان" = winkel. "چانه زدن" = afdingen — ALTIJD doen op een Afghaanse markt, het is verwacht en een sociale kunst.',
      words:[
        {hz:'بازار',tr:'baazaar',nl:'Bazaar / Markt',tip:'De hartslag van elke Afghaanse stad'},
        {hz:'دکان',tr:'dokaan',nl:'Winkel',tip:''},
        {hz:'فروشنده',tr:'foroshanda',nl:'Verkoper',tip:'"فروختن" = verkopen'},
        {hz:'خریدار',tr:'kharidaar',nl:'Koper / Klant',tip:'"خریدن" = kopen'},
        {hz:'قیمت',tr:'qimat',nl:'Prijs',tip:'"قیمت چنده؟" = hoeveel kost het?'},
        {hz:'چانه زدن',tr:'chaana zadan',nl:'Afdingen / Onderhandelen',tip:'Normale en verwachte praktijk'},
        {hz:'ارزان',tr:'arzaan',nl:'Goedkoop',tip:'"ارزان‌تر بده" = geef het goedkoper'},
        {hz:'گران',tr:'geraan',nl:'Duur',tip:'"زیاد گران اَس" = het is te duur'},
        {hz:'تخفیف',tr:'takhfif',nl:'Korting',tip:'"تخفیف بده" = geef korting'},
        {hz:'پول',tr:'pool',nl:'Geld',tip:'"پول ندارم" = ik heb geen geld'},
        {hz:'حساب',tr:'hesaab',nl:'Rekening / Betaling',tip:'"حساب کن" = maak de rekening op'},
        {hz:'وزن',tr:'wazn',nl:'Gewicht',tip:'"وزن کن" = weeg het af'},
      ],
      sentences:[
        {hz:'این چنده اَس؟',tr:'in chanda as?',nl:'Hoeveel kost dit?'},
        {hz:'کمی تخفیف بده، خیلی گران اَس',tr:'kami takhfif beda, kheli geraan as',nl:'Geef wat korting, het is te duur'},
        {hz:'یک کیلو وزن کو، حساب می‌کنیم',tr:'yak kilo wazn ko, hesaab mi-konim',nl:'Weeg een kilo af, dan rekenen we af'},
      ]
    },

    { id:'shopping_bargain', title:'Afdingen', sub:'Onderhandelen, laatste prijs, deal...', icon:'🤝', xp:35,
      pronTips:['آ','خ'],
      grammar:'Afdingen is NIET onbeleefd — het is een sociale kunst. Begin op 50-60% van de gevraagde prijs. "آخرین قیمت" = laatste prijs. "معامله شد" = we hebben een deal.',
      words:[
        {hz:'آخرین قیمت',tr:'aakherin qimat',nl:'Laatste prijs / Bodemprijs',tip:'"آخرین قیمت چنده؟" = wat is je laagste prijs?'},
        {hz:'نمی‌ارزه',tr:'nami-arza',nl:'Het is het niet waard',tip:'Klassieke onderhandelingstactiek'},
        {hz:'جای دیگه',tr:'jaaye diga',nl:'Ergens anders',tip:'"جای دیگه می‌رم" = ik ga ergens anders heen'},
        {hz:'قبول',tr:'qabol',nl:'Akkoord / Aanvaard',tip:'"قبول کردم" = ik ga akkoord'},
        {hz:'معامله',tr:'mo\'aamala',nl:'Deal / Transactie',tip:'"معامله شد" = we hebben een deal'},
        {hz:'نه بیشتر',tr:'na bishtar',nl:'Niet meer (prijs)',tip:'"نه بیشتر می‌دم" = ik geef niet meer'},
        {hz:'نصف',tr:'nesf',nl:'De helft',tip:'"نصف قیمت" = halveer de prijs'},
        {hz:'راضی',tr:'raazi',nl:'Tevreden / Akkoord',tip:'"راضی هستی؟" = ben je tevreden?'},
        {hz:'سود',tr:'sood',nl:'Winst',tip:'"سود داری" = je maakt winst'},
        {hz:'ضرر',tr:'zarar',nl:'Verlies',tip:'"ضرر می‌کنم" = ik maak verlies'},
      ],
      sentences:[
        {hz:'آخرین قیمت چنده؟ راست بگوی',tr:'aakherin qimat chanda? raast bogoi',nl:'Wat is je laatste prijs? Zeg het eerlijk'},
        {hz:'نمی‌ارزه، جای دیگه می‌رم',tr:'nami-arza, jaaye diga mi-rom',nl:'Het is het niet waard, ik ga ergens anders heen'},
        {hz:'قبول کردم، معامله شد!',tr:'qabol kardom, mo\'aamala shod!',nl:'Ik ga akkoord, we hebben een deal!'},
      ]
    },

    { id:'shopping_clothes', title:'Kleding Kopen', sub:'Maat, passen, kleur, stof...', icon:'👗', xp:35,
      pronTips:['س','پ'],
      grammar:'"سایز" = maat (van "size"). "پرو کردن" = passen. "تنگ" = strak/nauw, "گشاد" = wijd. "پارچه" = stof/materiaal — kwaliteit van stof is heel belangrijk in Afghaanse handel.',
      words:[
        {hz:'سایز',tr:'saayez',nl:'Maat',tip:'"سایزم چنده؟" = wat is mijn maat?'},
        {hz:'پرو کردن',tr:'paro kardan',nl:'Passen',tip:'"می‌تانم پرو کنم؟" = mag ik het passen?'},
        {hz:'تنگ',tr:'tang',nl:'Nauw / Strak',tip:'"زیاد تنگ اَس" = te strak'},
        {hz:'گشاد',tr:'goshaad',nl:'Wijd / Los',tip:'"کمی گشاده" = een beetje wijd'},
        {hz:'اندازه',tr:'andaaza',nl:'Maat / Afmeting',tip:'"اندازه‌ام اَس" = het is mijn maat'},
        {hz:'پارچه',tr:'paarcha',nl:'Stof / Materiaal',tip:'"پارچه خوب اَس؟" = is de stof goed?'},
        {hz:'نو',tr:'naw',nl:'Nieuw',tip:''},
        {hz:'مد',tr:'mod',nl:'Mode',tip:'"مد اَس" = het is modieus'},
        {hz:'دوختن',tr:'dokhtan',nl:'Naaien / Op maat maken',tip:'"دوزنده" = kleermaker'},
        {hz:'رنگ',tr:'rang',nl:'Kleur',tip:'"رنگ دیگه داری؟" = heb je een andere kleur?'},
      ],
      sentences:[
        {hz:'می‌تانم این را پرو کنم؟',tr:'mi-taanom in ra paro konom?',nl:'Mag ik dit passen?'},
        {hz:'کمی تنگ اَس، سایز بزرگ‌تر داری؟',tr:'kami tang as, saayez bozorgtar daari?',nl:'Het is een beetje strak, heb je een grotere maat?'},
        {hz:'رنگ دیگه‌ای داری؟ سرخ می‌خوام',tr:'rang-e digayi daari? sorkh mi-khom',nl:'Heb je een andere kleur? Ik wil rood'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH43 — WEER & KLIMAAT
  // ══════════════════════════════════════════════════════
  { id:'ch43', label:'🌤️ Hoofdstuk 43 · Weer & Klimaat', color:'#0369a1',
    lessons:[

    { id:'weather_vocab', title:'Weerwoorden', sub:'Zon, regen, sneeuw, wind...', icon:'⛅', xp:35,
      pronTips:['آ','ب'],
      grammar:'"هوا" = lucht/weer. "آفتابی" = zonnig. Let op: "هوا گرم اَس" (het is warm weer) vs "گرمم اَس" (ik heb het warm) — twee heel verschillende zinnen!',
      words:[
        {hz:'هوا',tr:'hawaa',nl:'Weer / Lucht',tip:'"هوا چتور اَس؟" = hoe is het weer?'},
        {hz:'آفتاب',tr:'aaftaab',nl:'Zon / Zonlicht',tip:'"آفتابی" = zonnig'},
        {hz:'باران',tr:'baaraan',nl:'Regen',tip:'"باران می‌باره" = het regent'},
        {hz:'برف',tr:'barf',nl:'Sneeuw',tip:'"برف می‌باره" = het sneeuwt'},
        {hz:'باد',tr:'baad',nl:'Wind',tip:'"باد می‌وزه" = het waait'},
        {hz:'ابر',tr:'abr',nl:'Wolk',tip:'"ابری" = bewolkt'},
        {hz:'رعد و برق',tr:'ra\'d wa barq',nl:'Onweer / Bliksem',tip:'Ruwe Hazaragi: "غرمب"'},
        {hz:'مه',tr:'mah',nl:'Mist',tip:'"مه گرفته" = het is mistig'},
        {hz:'طوفان',tr:'toofaan',nl:'Storm',tip:'"طوفان می‌آد" = er komt een storm'},
        {hz:'گرم',tr:'garm',nl:'Warm',tip:'"هوا گرم اَس" = het is warm'},
        {hz:'سرد',tr:'sard',nl:'Koud',tip:'"هوا خیلی سرد اَس" = het is heel koud'},
        {hz:'خنک',tr:'khonak',nl:'Koel / Aangenaam fris',tip:'Fijner dan سرد — frisheid, geen kou'},
      ],
      sentences:[
        {hz:'هوا امروز آفتابی اَس، بریم بیرون',tr:'hawaa emroz aaftaabi as, barim biron',nl:'Het is vandaag zonnig, laten we naar buiten gaan'},
        {hz:'باران می‌باره، چتر بیار',tr:'baaraan mi-baara, chatar biyaar',nl:'Het regent, neem een paraplu mee'},
        {hz:'هوا خیلی سرد اَس، لباس گرم بپوش',tr:'hawaa kheli sard as, lebaas-e garm bepoosh',nl:'Het is heel koud, trek warme kleren aan'},
      ]
    },

    { id:'weather_describe', title:'Weer Beschrijven', sub:'IJzig, nat, droog, temperatuur...', icon:'🌡️', xp:30,
      pronTips:['خ','ر'],
      grammar:'"یخ زده" = bevroren. "خیس" = nat. "خشک" = droog. In Hazarajat (2500-3500m hoogte) zijn de winters extreem — "سرمای استخوان‌سوز" = vrieskou die door de botten gaat.',
      words:[
        {hz:'یخ زده',tr:'yakh zada',nl:'Bevroren / IJzig',tip:'"جاده یخ زده" = de weg is bevroren'},
        {hz:'خیس',tr:'kheys',nl:'Nat',tip:'"خیس شدم" = ik ben nat geworden'},
        {hz:'خشک',tr:'khoshk',nl:'Droog',tip:'"هوای خشک" = droog weer'},
        {hz:'رطوبت',tr:'ratobat',nl:'Vochtigheid',tip:'"رطوبت" — de "ط" klinkt als gewone "t" in Hazaragi'},
        {hz:'درجه',tr:'daraja',nl:'Graad (temperatuur)',tip:'"سی درجه" = 30 graden'},
        {hz:'سایه',tr:'saaya',nl:'Schaduw',tip:'"دَ سایه بنشین" = ga in de schaduw zitten'},
        {hz:'چتر',tr:'chatar',nl:'Paraplu',tip:''},
        {hz:'کوت',tr:'kot',nl:'Jas / Overjas',tip:'"کوت بپوش" = trek een jas aan'},
        {hz:'دستکش',tr:'dastakesh',nl:'Handschoenen',tip:''},
        {hz:'یخ',tr:'yakh',nl:'IJs / Bevriezen',tip:'"یخ زده" = bevroren'},
      ],
      sentences:[
        {hz:'بیرون خیلی سرد اَس، کوت بپوش',tr:'biron kheli sard as, kot bepoosh',nl:'Buiten is het heel koud, trek een jas aan'},
        {hz:'جاده یخ زده، آسته بران',tr:'jaada yakh zada, asta beraan',nl:'De weg is bevroren, rij langzaam'},
        {hz:'گرمای آفتاب خوب اَس برای استخوان',tr:'garmaa-ye aaftaab khob as baraaye ostakhwaan',nl:'De warmte van de zon is goed voor de botten'},
      ]
    },

    { id:'climate_afghan', title:'Klimaat & Natuur van Afghanistan', sub:'Droogte, overstromingen, bergen...', icon:'🏔️', xp:40,
      pronTips:['خ','ز'],
      grammar:'"خشکسالی" = droogte (letterlijk: droog-jaar). Afghanistan kent extreme klimaatsverschillen: Hazarajat winters -30°C, zomers +35°C. Water ("آو") is heilig en kostbaar.',
      words:[
        {hz:'خشکسالی',tr:'khoshksaali',nl:'Droogte',tip:'Groot terugkerend probleem'},
        {hz:'سیل',tr:'seyl',nl:'Overstroming',tip:'"سیل آمد" = er is een overstroming'},
        {hz:'زلزله',tr:'zalzala',nl:'Aardbeving',tip:'Afghanistan ligt seismisch actief gebied'},
        {hz:'بهمن',tr:'bahman',nl:'Lawine',tip:'Gevaar in Hazarajat in de winter'},
        {hz:'آو و هوا',tr:'aaw wa hawaa',nl:'Klimaat',tip:'Hazaragi: آو (water) en هوا (lucht)'},
        {hz:'ارتفاع',tr:'ertafaa\'',nl:'Hoogte boven zeeniveau',tip:'Hazarajat gemiddeld 2500-3500m'},
        {hz:'فصل برداشت',tr:'fasl-e bardaasht',nl:'Oogstseizoen',tip:'Cruciaal voor boerengemeenschappen'},
        {hz:'چشمه',tr:'cheshma',nl:'Bron / Waterbron',tip:'Levensader in berggebieden'},
        {hz:'آو',tr:'aaw',nl:'Water (Hazaragi)',tip:'Hazaragi: "آو" ipv standaard Dari "آب"'},
        {hz:'طوفان خاک',tr:'toofaan-e khaak',nl:'Zandstorm',tip:'Fenomeen in de vlaktes'},
      ],
      sentences:[
        {hz:'امسال خشکسالی بده، آو کم اَس',tr:'emsal khoshksaali bada, aaw kam as',nl:'Dit jaar is er droogte, er is weinig water'},
        {hz:'دَ زمستان از بهمن بترس، مراقب باش',tr:'da zemestaan az bahman betars, muraaqeb baash',nl:'Wees in de winter bang voor lawines, wees voorzichtig'},
        {hz:'آو زندگی اَس، نگهش بدار',tr:'aaw zendagi as, negahash bedaar',nl:'Water is leven, zorg ervoor'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH44 — KINDEREN & OPVOEDING
  // ══════════════════════════════════════════════════════
  { id:'ch44', label:'👶 Hoofdstuk 44 · Kinderen & Opvoeding', color:'#db2777',
    lessons:[

    { id:'kids_vocab', title:'Kindertaal & Spelletjes', sub:'Spelen, rennen, lachen, huilen...', icon:'🎈', xp:35,
      pronTips:['ب','ک'],
      grammar:'"بچه" = kind (Hazaragi). "کودک" = formeler. Hazaragi kindertaal gebruikt herhalende klanken: "مامو" (mama), "بابو" (papa). Kinderen zijn het absolute centrum van de Hazara familie.',
      words:[
        {hz:'بچه',tr:'bacha',nl:'Kind',tip:'Dagelijks Hazaragi woord'},
        {hz:'کودک',tr:'kodak',nl:'Kind (formeel)',tip:''},
        {hz:'بازی',tr:'baazi',nl:'Spel / Spelletje',tip:'"بازی کردن" = spelen'},
        {hz:'اسباب‌بازی',tr:'asbaab-baazi',nl:'Speelgoed',tip:''},
        {hz:'گریه کردن',tr:'gerya kardan',nl:'Huilen',tip:'"گریه نکو" = huil niet'},
        {hz:'خندیدن',tr:'khandidan',nl:'Lachen',tip:'"بخند!" = lach!'},
        {hz:'دویدن',tr:'dawidan',nl:'Rennen',tip:'"آسته بدو" = ren langzaam'},
        {hz:'مکتب',tr:'maktab',nl:'School (Afghaans)',tip:'Afghaans woord voor school'},
        {hz:'نقاشی',tr:'naqqaashi',nl:'Tekenen',tip:''},
        {hz:'شعر',tr:'she\'r',nl:'Gedicht / Rijmpje',tip:'Kinderen leren traditioneel gedichten van buiten'},
        {hz:'جیغ زدن',tr:'jeegh zadan',nl:'Gillen / Schreeuwen',tip:'"جیغ نزن" = gil niet'},
        {hz:'بغل کردن',tr:'baghal kardan',nl:'Knuffelen / Omhelzen',tip:'Warm gebruik in Hazara familie'},
      ],
      sentences:[
        {hz:'بچه‌ها بازی می‌کنن، نگاشان کو',tr:'bacha-haa baazi mi-konan, negaashaan ko',nl:'De kinderen spelen, kijk naar ze'},
        {hz:'گریه نکو، همه چیز درس می‌شه',tr:'gerya nako, hama chiz doros mi-sha',nl:'Huil niet, alles komt goed'},
        {hz:'برو مکتب، درس بخون',tr:'baro maktab, dars bekhoon',nl:'Ga naar school, ga studeren'},
      ]
    },

    { id:'parenting_phrases', title:'Opvoedingszinnen', sub:'Wat ouders zeggen...', icon:'👨‍👩‍👧', xp:35,
      pronTips:['ج','م'],
      grammar:'"جان" = lieverd/schat — aangehecht na naam: "مامان جان" = lieverds mama. In Hazara cultuur is opvoeding de verantwoordelijkheid van de hele gemeenschap. "آفرین" = bravo/goed zo.',
      words:[
        {hz:'جان',tr:'jaan',nl:'Lieverd / Schat (aanspreking)',tip:'"پسرم جان" = mijn lieve jongen'},
        {hz:'مامان',tr:'maamaan',nl:'Mama',tip:''},
        {hz:'بابا',tr:'baabaa',nl:'Papa',tip:''},
        {hz:'آفرین',tr:'aafarin',nl:'Bravo / Goed zo',tip:'Aanmoediging voor kinderen én volwassenen'},
        {hz:'نه بکو',tr:'na bako',nl:'Doe dat niet',tip:'"نه" + werkwoord = verbod'},
        {hz:'احتیاط',tr:'ehtiyaat',nl:'Voorzichtigheid',tip:'"احتیاط کو" = wees voorzichtig'},
        {hz:'ادب',tr:'adab',nl:'Beleefdheid / Manieren',tip:'"ادب داشته باش" = wees beleefd'},
        {hz:'احترام',tr:'ehtaraam',nl:'Respect',tip:'"احترام کو" = toon respect'},
        {hz:'دست بده',tr:'dast beda',nl:'Geef een hand',tip:'Bij begroeting — kinderen leren dit vroeg'},
        {hz:'غذا بخور',tr:'ghazaa bekhoor',nl:'Eet je eten',tip:'De meest gezegde zin door Hazara moeders'},
      ],
      sentences:[
        {hz:'مامان جان، بیا اینجا',tr:'maamaan jaan, biya injaa',nl:'Lieve mama, kom hier'},
        {hz:'آفرین بچه‌ام، خیلی خوب کردی',tr:'aafarin bacham, kheli khob kardi',nl:'Goed zo van je, je hebt het heel goed gedaan'},
        {hz:'ادب داشته باش، احترام به بزرگترا',tr:'adab daashte baash, ehtaraam ba bozorg-taraa',nl:'Wees beleefd, respect voor ouderen'},
      ]
    },

    { id:'school_daily', title:'Schoolleven', sub:'Klas, leraar, bel, pauze...', icon:'📝', xp:35,
      pronTips:['م','ش'],
      grammar:'"معلم" = leraar/lerares. "صنف" = klas (Afghaans). "زنگ خورد" = de bel ging. Onderwijs voor Hazara vrouwen is historisch een strijd geweest — elke dag naar school is betekenisvol.',
      words:[
        {hz:'صنف',tr:'sanf',nl:'Klas / Klaslokaal',tip:'Afghaans — "داخل صنف" = in de klas'},
        {hz:'معلم',tr:'mo\'allem',nl:'Leraar / Lerares',tip:''},
        {hz:'شاگرد',tr:'shaagerd',nl:'Leerling',tip:''},
        {hz:'تخته',tr:'takhta',nl:'Schoolbord',tip:''},
        {hz:'قلم',tr:'qalam',nl:'Pen / Potlood',tip:''},
        {hz:'کاپی',tr:'kaapi',nl:'Schrift',tip:'Afghaans: "کاپی" = schrift/cahier'},
        {hz:'زنگ',tr:'zang',nl:'Schoolbel',tip:'"زنگ خورد" = de bel ging'},
        {hz:'تنفس',tr:'tanafos',nl:'Pauze',tip:'"وقت تنفس" = pauzetijd'},
        {hz:'سوال',tr:'soaal',nl:'Vraag',tip:'"سوال دارم" = ik heb een vraag'},
        {hz:'جواب',tr:'jawaab',nl:'Antwoord',tip:'"جواب بده" = geef antwoord'},
        {hz:'حاضر',tr:'haazir',nl:'Aanwezig / Klaar',tip:'"حاضر هستم" = ik ben er'},
        {hz:'غیرحاضر',tr:'ghair-haazir',nl:'Afwezig',tip:''},
      ],
      sentences:[
        {hz:'معلم صنف را شروع کرد',tr:'mo\'allem sanf ra shoroo kard',nl:'De leraar begon de les'},
        {hz:'سوال دارم، معلم صاحب',tr:'soaal darom, mo\'allem-saaheb',nl:'Ik heb een vraag, meester/juffrouw'},
        {hz:'زنگ خورد، وقت تنفس اَس',tr:'zang khoord, waqt-e tanafos as',nl:'De bel ging, het is pauzetijd'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH45 — GESCHIEDENIS & SAMENLEVING
  // ══════════════════════════════════════════════════════
  { id:'ch45', label:'🏛️ Hoofdstuk 45 · Geschiedenis & Samenleving', color:'#4c1d95',
    lessons:[

    { id:'history_hazara', title:'Hazara Geschiedenis', sub:'Strijd, identiteit, trots...', icon:'🏔️', xp:50,
      pronTips:['م','ت'],
      grammar:'"مقاومت" = verzet/weerstand — een kernwoord in de Hazara geschiedenis. De Hazara hebben eeuwenlang zwaar geleden onder onderdrukking. Hun taal bewaren is daadwerkelijk een daad van verzet.',
      words:[
        {hz:'تاریخ',tr:'taarikh',nl:'Geschiedenis',tip:'Ook: datum'},
        {hz:'قرن',tr:'qarn',nl:'Eeuw',tip:'"قرن بیستم" = de twintigste eeuw'},
        {hz:'مقاومت',tr:'moqaawamat',nl:'Verzet / Weerstand',tip:'Centrale waarde in Hazara identiteit'},
        {hz:'مهاجرت',tr:'mohaajaratat',nl:'Migratie',tip:'"مهاجر" = migrant/vluchteling'},
        {hz:'پناهنده',tr:'panaahanda',nl:'Vluchteling',tip:''},
        {hz:'وطن',tr:'watan',nl:'Vaderland',tip:'"دلتنگ وطنم" = ik heb heimwee naar mijn vaderland'},
        {hz:'آزادی',tr:'aazaadi',nl:'Vrijheid',tip:'"آزادی می‌خوایم" = we willen vrijheid'},
        {hz:'ستم',tr:'setam',nl:'Onderdrukking / Onrecht',tip:'"ستم‌دیده" = onderdrukte'},
        {hz:'هویت',tr:'howiyat',nl:'Identiteit',tip:'"هویت هزاره" = Hazara identiteit'},
        {hz:'افتخار',tr:'eftekhar',nl:'Trots / Eer',tip:'"با افتخار هزاره‌ام" = ik ben trots een Hazara te zijn'},
        {hz:'نسل',tr:'nasl',nl:'Generatie',tip:'"نسل آینده" = de volgende generatie'},
        {hz:'میراث',tr:'miraas',nl:'Erfenis / Nalatenschap',tip:'"میراث فرهنگی" = culturele erfenis'},
      ],
      sentences:[
        {hz:'تاریخ هزاره پر از مقاومت اَس',tr:'taarikh-e hazaara por az moqaawamat as',nl:'De geschiedenis van de Hazara is vol van verzet'},
        {hz:'مو هزاره هستیم و با افتخار اَس',tr:'mo hazaara hastim wa baa eftekhar as',nl:'Wij zijn Hazara en dat is met trots'},
        {hz:'نسل جوان باید تاریخ خود را بدانه',tr:'nasl-e jawaan baayad taarikh-e khod ra bedaana',nl:'De jonge generatie moet haar eigen geschiedenis kennen'},
      ]
    },

    { id:'society_rights', title:'Samenleving & Rechten', sub:'Wet, recht, gelijkheid, vrede...', icon:'⚖️', xp:40,
      pronTips:['ق','ع'],
      grammar:'"حق" = recht/waarheid (meerdere betekenissen). "حق داری" = je hebt gelijk / je hebt recht. "عدالت" = gerechtigheid. De strijd voor gelijkheid is diep verweven met de Hazara identiteit.',
      words:[
        {hz:'حق',tr:'haq',nl:'Recht / Waarheid',tip:'"حق داری" = je hebt gelijk / recht'},
        {hz:'قانون',tr:'qaanoon',nl:'Wet',tip:''},
        {hz:'عدالت',tr:'adaalat',nl:'Gerechtigheid',tip:'"عدالت می‌خوایم" = we willen gerechtigheid'},
        {hz:'مساوات',tr:'masaawaat',nl:'Gelijkheid',tip:'"مساوی" = gelijk'},
        {hz:'انتخابات',tr:'entekhaabaat',nl:'Verkiezingen',tip:''},
        {hz:'رأی',tr:'ra\'y',nl:'Stem / Kiesrecht',tip:'"رأی دادن" = stemmen'},
        {hz:'دولت',tr:'dawlat',nl:'Regering / Staat',tip:''},
        {hz:'شهروند',tr:'shahrawand',nl:'Burger (staatsburger)',tip:''},
        {hz:'حقوق بشر',tr:'hoqooq-e bashar',nl:'Mensenrechten',tip:''},
        {hz:'صلح',tr:'solh',nl:'Vrede',tip:'"صلح می‌خوایم" = we willen vrede'},
      ],
      sentences:[
        {hz:'هر کس حق آموزش داره',tr:'har kas haq-e aamozesh daara',nl:'Iedereen heeft recht op onderwijs'},
        {hz:'عدالت و مساوات حق همه اَس',tr:'adaalat wa masaawaat haq-e hama as',nl:'Gerechtigheid en gelijkheid is ieders recht'},
        {hz:'صلح بهترین هدیه برای مردم اَس',tr:'solh behtarin hadya baraaye mardom as',nl:'Vrede is het beste geschenk voor het volk'},
      ]
    },

    { id:'conflict_hope', title:'Oorlog & Hoop op Vrede', sub:'Vluchten, terugkeer, verzoening...', icon:'🕊️', xp:45,
      pronTips:['ج','ف'],
      grammar:'"جنگ" = oorlog. "فرار کردن" = vluchten. Miljoenen Hazara zijn gevlucht naar Iran, Pakistan, Europa en Australië. "آواره" = ontheemd. Deze woorden zijn voor velen persoonlijk en pijnlijk.',
      words:[
        {hz:'جنگ',tr:'jang',nl:'Oorlog',tip:'"جنگ تمام شه" = laat de oorlog eindigen'},
        {hz:'فرار کردن',tr:'faraar kardan',nl:'Vluchten',tip:'"فرار کردیم" = we zijn gevlucht'},
        {hz:'آواره',tr:'aawara',nl:'Ontheemd / Vluchteling',tip:'"آواره شدیم" = we werden ontheemd'},
        {hz:'آتش‌بس',tr:'aatesh-bas',nl:'Staakt-het-vuren',tip:'Letterlijk: stop het vuur'},
        {hz:'امنیت',tr:'amniyat',nl:'Veiligheid',tip:'"امنیت داریم" = we zijn veilig'},
        {hz:'خطر',tr:'khatar',nl:'Gevaar',tip:'"خطر داره" = het is gevaarlijk'},
        {hz:'بازگشت',tr:'baazgasht',nl:'Terugkeer',tip:'"بازگشت به وطن" = terugkeer naar vaderland'},
        {hz:'امید',tr:'omid',nl:'Hoop',tip:'"هنوز امید دارم" = ik heb nog hoop'},
        {hz:'آشتی',tr:'aashti',nl:'Verzoening / Vrede maken',tip:'"آشتی کردن" = vrede sluiten'},
        {hz:'بازسازی',tr:'baazaazi',nl:'Wederopbouw',tip:'"بازسازی کردن" = herbouwen'},
      ],
      sentences:[
        {hz:'جنگ همه چیز را خراب می‌کنه',tr:'jang hama chiz ra kharaab mi-kona',nl:'Oorlog vernietigt alles'},
        {hz:'دلم می‌خواد به وطنم برگردم',tr:'delam mi-khaad ba watanam bargardoom',nl:'Ik wil terugkeren naar mijn vaderland'},
        {hz:'امید به صلح هیچ‌وقت نمی‌میره',tr:'omid ba solh hich-waqt nami-mira',nl:'De hoop op vrede sterft nooit'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH46 — KOKEN & AFGHAANSE KEUKEN
  // ══════════════════════════════════════════════════════
  { id:'ch46', label:'🍳 Hoofdstuk 46 · Koken & Afghaanse Keuken', color:'#92400e',
    lessons:[

    { id:'cooking_methods', title:'Kooktechnieken', sub:'Bakken, braden, stomen, koken...', icon:'👨‍🍳', xp:35,
      pronTips:['پ','س'],
      grammar:'"پختن" = koken (algemeen). "سرخ کردن" = bakken in olie. "دیگ" = grote kookpot — essentieel in elke Hazara keuken. Maaltijden worden altijd voor meerdere mensen gemaakt.',
      words:[
        {hz:'پختن',tr:'pokhtan',nl:'Koken / Bereiden',tip:'"پختم" = ik heb gekookt'},
        {hz:'سرخ کردن',tr:'sorkh kardan',nl:'Bakken in olie',tip:'"سرخ کو" = bak het'},
        {hz:'آو‌پز کردن',tr:'aaw-paz kardan',nl:'Koken in water',tip:''},
        {hz:'دیگ',tr:'deg',nl:'Grote kookpot',tip:'Essentieel keukengereedschap'},
        {hz:'تابه',tr:'taawa',nl:'Koekenpan',tip:'Vlak — voor naan en boulani'},
        {hz:'کارد',tr:'kaard',nl:'Mes',tip:''},
        {hz:'قاشق',tr:'qaashoq',nl:'Lepel',tip:'"قاشق چنگال" = bestek'},
        {hz:'مزه',tr:'maza',nl:'Smaak',tip:'"مزه داره" = het is lekker'},
        {hz:'نمک',tr:'namak',nl:'Zout',tip:'"نمک بزن" = doe zout erin'},
        {hz:'دستور پخت',tr:'dastor-e pokht',nl:'Recept',tip:'Letterlijk: kookinstructie'},
        {hz:'خام',tr:'khaam',nl:'Rauw / Ongaar',tip:'"هنوز خام اَس" = het is nog rauw'},
        {hz:'پخته',tr:'pokhta',nl:'Gaar / Klaar',tip:'"پخته شد" = het is gaar'},
      ],
      sentences:[
        {hz:'امشب قابلی می‌پزم، دیگ بزرگ می‌خواد',tr:'emshab qaaboli mi-pazom, deg bozorg mi-khaad',nl:'Vanavond maak ik qabuli, het heeft een grote pot nodig'},
        {hz:'سرخ کو تا رنگ طلایی بشه',tr:'sorkh ko taa rang-e talaai besha',nl:'Bak het tot het goudkleurig wordt'},
        {hz:'مزه بده ببین نمک کم‌داره؟',tr:'maza beda bebin namak kam-daara?',nl:'Proef even of er te weinig zout in zit'},
      ]
    },

    { id:'spices_ingredients', title:'Kruiden & Ingrediënten', sub:'Specerijen, groenten, vlees...', icon:'🌶️', xp:35,
      pronTips:['ز','گ'],
      grammar:'"زردچوبه" = kurkuma — het goud van de Afghaanse keuken. "گشنیز" = koriander. "زیره" = komijn. Deze drie zijn de basis van bijna elk Afghaans gerecht. Verse kruiden zijn altijd beter.',
      words:[
        {hz:'زردچوبه',tr:'zard-choba',nl:'Kurkuma',tip:'Basis van Afghaanse keuken — gele kleur'},
        {hz:'زیره',tr:'zira',nl:'Komijn',tip:'Essentieel in qabuli en vlees'},
        {hz:'گشنیز',tr:'gashniz',nl:'Koriander',tip:'Vers als garnering gebruikt'},
        {hz:'فلفل',tr:'felfel',nl:'Peper',tip:'"فلفل سیاه" = zwarte peper'},
        {hz:'پیاز',tr:'piyaaz',nl:'Ui',tip:'In elk Afghaans gerecht aanwezig'},
        {hz:'سیر',tr:'seer',nl:'Knoflook',tip:'"سیر کوب شده" = fijngehakte knoflook'},
        {hz:'بادنجان رومی',tr:'baadenjaan-e roomi',nl:'Tomaat',tip:''},
        {hz:'روغن',tr:'roghan',nl:'Olie / Vet',tip:''},
        {hz:'گوشت',tr:'gosht',nl:'Vlees',tip:'"گوشت گوسفند" = schapenvlees'},
        {hz:'برنج',tr:'berenj',nl:'Rijst',tip:'Basis van qabuli en plov'},
        {hz:'آرد',tr:'aard',nl:'Meel',tip:'Voor naan en boulani'},
        {hz:'تازه',tr:'taaza',nl:'Vers',tip:'"تازه اَس" = het is vers'},
      ],
      sentences:[
        {hz:'زردچوبه و زیره اضافه کو',tr:'zard-choba wa zira ezaafa ko',nl:'Doe kurkuma en komijn erbij'},
        {hz:'پیاز را سرخ کو تا طلایی شه',tr:'piyaaz ra sorkh ko taa talaai sha',nl:'Bak de ui tot hij goudkleurig is'},
        {hz:'گوشت تازه از بازار بیار',tr:'gosht-e taaza az baazaar biyaar',nl:'Breng vers vlees van de markt mee'},
      ]
    },

    { id:'afghan_dishes', title:'Afghaanse Gerechten', sub:'Qabuli, manto, boulani, naan...', icon:'🍲', xp:40,
      pronTips:['ق','م'],
      grammar:'"قابلی" = het nationale gerecht: rijst met lam, wortelen en rozijnen. "مانتو" = Afghaanse dumplings. "بولانی" = gevuld platbrood — geliefde straatsnack. "نان" = Afghaans plat brood.',
      words:[
        {hz:'قابلی',tr:'qaaboli',nl:'Qabuli (nationaal gerecht)',tip:'Rijst met lam, wortelen, rozijnen'},
        {hz:'مانتو',tr:'maanto',nl:'Manto (Afghaanse dumplings)',tip:'Gevuld deg met gehakt en yoghurtsaus'},
        {hz:'بولانی',tr:'bolaani',nl:'Boulani (gevuld platbrood)',tip:'Met aardappel of prei — gefrituurd'},
        {hz:'آش',tr:'aash',nl:'Asj (dikke soep)',tip:'Soep met peulvruchten, noedels, yoghurt'},
        {hz:'کباب',tr:'kabaab',nl:'Kebab',tip:'"کباب کردن" = grillen'},
        {hz:'چلو',tr:'chalo',nl:'Gestoomde rijst',tip:'"چلو کباب" = rijst met kebab'},
        {hz:'نان',tr:'naan',nl:'Naan (Afghaans brood)',tip:'Groot, plat, vers uit de tandoor'},
        {hz:'دوغ',tr:'dogh',nl:'Doogh (yoghurtdrank)',tip:'Gefermenteerd, verfrissend'},
        {hz:'حلوا',tr:'halwaa',nl:'Halwa (zoet dessert)',tip:'Bij feesten en herdenkingen'},
        {hz:'شیرچای',tr:'shir-chaay',nl:'Melkthee',tip:'Groene thee met gecondenseerde melk'},
        {hz:'فرنی',tr:'farni',nl:'Farni (rijstepap)',tip:'Dessert van rijstmeel, suiker, rozenwater'},
        {hz:'کچری',tr:'kachri',nl:'Kachri (eenpansgerecht)',tip:'Rijst en peulvruchten — eenvoudig en voedzaam'},
      ],
      sentences:[
        {hz:'امشب قابلی داریم، بیا خانه ما',tr:'emshab qaaboli daarim, biya khaana maa',nl:'Vanavond hebben we qabuli, kom naar ons huis'},
        {hz:'مانتو خوشمزه‌ترین غذای افغانیه',tr:'maanto khoshmazatarin ghazaa-ye afghaanis',nl:'Manto is het lekkerste Afghaanse eten'},
        {hz:'نان تازه از تنور خوش‌بوی اَس',tr:'naan-e taaza az tanoor khoshbooy as',nl:'Vers brood uit de tandoor ruikt heerlijk'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH47 — VERVOER & RIJDEN
  // ══════════════════════════════════════════════════════
  { id:'ch47', label:'🚗 Hoofdstuk 47 · Vervoer & Rijden', color:'#1e3a5f',
    lessons:[

    { id:'transport_road', title:'Op de Weg', sub:'Rijden, verkeer, parkeren...', icon:'🛣️', xp:35,
      pronTips:['ت','م'],
      grammar:'"موتر" = auto (Afghaans, van "motor"). Hazara zeggen "موتر" ipv Iraans "ماشین". "چهارراه" = kruispunt. "یک‌طرفه" = eenrichtingsverkeer.',
      words:[
        {hz:'موتر',tr:'motar',nl:'Auto (Afghaans)',tip:'"موتر سوار شو" = stap in de auto'},
        {hz:'جاده',tr:'jaada',nl:'Weg / Straat',tip:'"جاده خاکی" = onverharde weg'},
        {hz:'ترافیک',tr:'trafik',nl:'Verkeer / File',tip:'"ترافیک زیاد اَس" = het is druk verkeer'},
        {hz:'چهارراه',tr:'chahaar-raah',nl:'Kruispunt',tip:''},
        {hz:'چراغ راهنما',tr:'cheraagh raahnamaa',nl:'Verkeerslicht',tip:'"چراغ قرمز" = rood licht'},
        {hz:'سرعت',tr:'sor\'at',nl:'Snelheid',tip:'"سرعت کم کو" = rij langzamer'},
        {hz:'تصادف',tr:'tasaadef',nl:'Ongeluk / Botsing',tip:'"تصادف شد" = er was een ongeluk'},
        {hz:'پارکینگ',tr:'paarking',nl:'Parkeerplaats',tip:''},
        {hz:'راننده',tr:'raananda',nl:'Chauffeur / Bestuurder',tip:''},
        {hz:'پل',tr:'pol',nl:'Brug',tip:''},
        {hz:'یک‌طرفه',tr:'yak-tarafa',nl:'Eenrichtingsverkeer',tip:''},
        {hz:'اجازه‌نامه',tr:'ejaaza-naama',nl:'Rijbewijs',tip:'Letterlijk: toestemmingsdocument'},
      ],
      sentences:[
        {hz:'ترافیک زیاد اَس، دیر می‌رسیم',tr:'trafik ziyaad as, deer mi-rasim',nl:'Er is veel verkeer, we komen te laat'},
        {hz:'چراغ قرمز اَس، بایست',tr:'cheraagh qermez as, baayest',nl:'Het licht is rood, stop'},
        {hz:'جاده بد اَس، آسته بران',tr:'jaada bad as, asta beraan',nl:'De weg is slecht, rij langzaam'},
      ]
    },

    { id:'transport_public', title:'Openbaar Vervoer', sub:'Bus, taxi, minibus, halte...', icon:'🚌', xp:30,
      pronTips:['ب','ت'],
      grammar:'"تکسی" = taxi. "سرویس" = minibus langs vaste routes — goedkoop en populair in Afghanistan. "کرایه" = huur/tarief. "پیاده شدن" = uitstappen.',
      words:[
        {hz:'بس',tr:'bas',nl:'Bus',tip:'Van "bus" — bekend leenwoord'},
        {hz:'تکسی',tr:'taksi',nl:'Taxi',tip:''},
        {hz:'سرویس',tr:'sarwis',nl:'Minibus / Busje',tip:'Populair openbaar vervoer'},
        {hz:'ایستگاه',tr:'istgaah',nl:'Station / Halte',tip:'"ایستگاه بس" = bushalte'},
        {hz:'تکت',tr:'tiket',nl:'Kaartje / Ticket',tip:'"تکت بخر" = koop een kaartje — Afghaans/Hazaragi, niet Iraans "بلیت"'},
        {hz:'کرایه',tr:'karaaya',nl:'Tarief / Huur',tip:'"کرایه چنده؟" = hoeveel kost de rit?'},
        {hz:'منتظر ماندن',tr:'montazer maandan',nl:'Wachten',tip:'"منتظر باش" = wacht'},
        {hz:'پیاده شدن',tr:'piyaada shodan',nl:'Uitstappen',tip:'"پیاده شو" = stap uit'},
        {hz:'سوار شدن',tr:'sawaar shodan',nl:'Instappen',tip:'"سوار شو" = stap in'},
        {hz:'مسافر',tr:'musaafar',nl:'Passagier / Reiziger',tip:''},
      ],
      sentences:[
        {hz:'کرایه تکسی چنده؟',tr:'karaaya taksi chanda?',nl:'Hoeveel kost de taxi?'},
        {hz:'دَ ایستگاه منتظر بس بودم',tr:'da istgaah montazer-e bas boodom',nl:'Ik wachtte bij de bushalte op de bus'},
        {hz:'اینجا پیاده می‌شم، تشکر',tr:'injaa piyaada mi-shom, tashakur',nl:'Ik stap hier uit, bedankt'},
      ]
    },

    { id:'transport_problems', title:'Autopech & Problemen', sub:'Lekke band, benzine, monteur...', icon:'🔧', xp:30,
      pronTips:['پ','م'],
      grammar:'"پنچر" = lekke band (van "puncture"). "بنزین" = benzine. "مکانیک" = monteur. In Hazarajat zijn wegen zwaar en autopech normaal — elke bestuurder kan zelf een band wisselen.',
      words:[
        {hz:'پنچر',tr:'panchar',nl:'Lekke band',tip:'Van "puncture"'},
        {hz:'بنزین',tr:'benzin',nl:'Benzine',tip:'"بنزین تمام شد" = de benzine is op'},
        {hz:'مکانیک',tr:'mekanik',nl:'Monteur / Automonteur',tip:''},
        {hz:'تعمیرگاه',tr:'ta\'mirgaah',nl:'Garage / Werkplaats',tip:''},
        {hz:'باتری',tr:'baateri',nl:'Accu / Batterij',tip:'"باتری خالی اَس" = de accu is leeg'},
        {hz:'روغن',tr:'roghan',nl:'Motorolie',tip:'"روغن عوض کن" = ververs de olie'},
        {hz:'خرابی',tr:'kharaabi',nl:'Storing / Defect',tip:''},
        {hz:'یدکی',tr:'yadaki',nl:'Reserveonderdeel',tip:'"چرخ یدکی" = reserveband'},
        {hz:'سوخت',tr:'sokht',nl:'Brandstof',tip:''},
        {hz:'تنظیم',tr:'tanzim',nl:'Afstellen / Instellen',tip:''},
      ],
      sentences:[
        {hz:'پنچر شدم، کمک کن',tr:'panchar shodom, komak kon',nl:'Ik heb een lekke band, help me'},
        {hz:'بنزین تمام شد، نزدیک‌ترین پمپ کجاس؟',tr:'benzin tamaam shod, nazdiktarin pomp kojas?',nl:'De benzine is op, waar is het dichtstbijzijnde tankstation?'},
        {hz:'موتر خراب شده، مکانیک می‌خوام',tr:'motar kharaab shoda, mekanik mi-khom',nl:'De auto is kapot, ik heb een monteur nodig'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH48 — BIJ DE DOKTER
  // ══════════════════════════════════════════════════════
  { id:'ch48', label:'🩺 Hoofdstuk 48 · Bij de Dokter', color:'#0f766e',
    lessons:[

    { id:'doctor_symptoms', title:'Klachten Beschrijven', sub:'Pijn, koorts, duizelig...', icon:'🤒', xp:40,
      pronTips:['د','س'],
      grammar:'"درد" = pijn. "تب" = koorts. "زکام" = verkoudheid. In Hazaragi: "خوب نیسم" = ik voel me niet goed. "جای درد کجاس؟" = waar doet het pijn?',
      words:[
        {hz:'درد',tr:'dard',nl:'Pijn',tip:'"درد دارم" = ik heb pijn'},
        {hz:'تب',tr:'tab',nl:'Koorts',tip:'"تب دارم" = ik heb koorts'},
        {hz:'زکام',tr:'zakaam',nl:'Verkoudheid',tip:'"زکام دارم" = ik ben verkouden — Hazaragi: زکام ipv سرماخوردگی'},
        {hz:'سرفه',tr:'sorfa',nl:'Hoest',tip:'"سرفه می‌کنم" = ik hoest'},
        {hz:'تهوع',tr:'tahawwo\'',nl:'Misselijkheid',tip:'"تهوع دارم" = ik ben misselijk'},
        {hz:'سرگیجه',tr:'sargija',nl:'Duizeligheid',tip:'"سرم می‌چرخه" = mijn hoofd draait'},
        {hz:'خستگی',tr:'khastagi',nl:'Vermoeidheid',tip:'"خسته‌ام" = ik ben moe'},
        {hz:'بی‌خوابی',tr:'bi-khwaabi',nl:'Slapeloosheid',tip:''},
        {hz:'زخم',tr:'zakhm',nl:'Wond / Blessure',tip:''},
        {hz:'تورم',tr:'toram',nl:'Zwelling',tip:'"تورم داره" = het is gezwollen'},
        {hz:'خونریزی',tr:'khoon-rezi',nl:'Bloeding',tip:'"خون می‌آد" = het bloedt'},
        {hz:'حساسیت',tr:'hassaasiyat',nl:'Allergie',tip:'"حساسیت دارم به..." = ik ben allergisch voor...'},
      ],
      sentences:[
        {hz:'داکتر، شکمم درد می‌کنه',tr:'daaktar, shekamam dard mi-kona',nl:'Dokter, mijn buik doet pijn'},
        {hz:'از دیشب تب دارم و سرفه می‌کنم',tr:'az doshab tab darom wa sorfa mi-konom',nl:'Ik heb al vanaf gisternacht koorts en ik hoest'},
        {hz:'جای درد دقیقاً کجاس؟',tr:'jaaye dard daqiqan kojas?',nl:'Waar precies doet het pijn?'},
      ]
    },

    { id:'doctor_medicines', title:'Medicijnen & Behandeling', sub:'Pillen, drankje, spuit, recept...', icon:'💊', xp:35,
      pronTips:['د','ت'],
      grammar:'"دوا" = medicijn (Hazaragi/Afghaans woord — niet het Iraanse "دارو"). "قرص" = pil. "نسخه" = recept. "دوز" = dosering. In Afghanistan zijn sommige medicijnen zonder recept beschikbaar — maar een arts raadplegen is altijd beter.',
      words:[
        {hz:'دوا',tr:'dawaa',nl:'Medicijn',tip:'"دوا بخور" = neem je medicijn — typisch Hazaragi/Afghaans (niet Iraans "دارو")'},
        {hz:'قرص',tr:'qors',nl:'Pil / Tablet',tip:'"قرص مسکن" = pijnstiller'},
        {hz:'شربت',tr:'sharbat',nl:'Drankje / Stroop',tip:'"شربت سرفه" = hoestdrank'},
        {hz:'آمپول',tr:'aampol',nl:'Injectie / Spuit',tip:'"آمپول زدن" = een injectie geven'},
        {hz:'نسخه',tr:'noskha',nl:'Recept',tip:'"نسخه بده" = geef een recept'},
        {hz:'دوز',tr:'doz',nl:'Dosering',tip:'"دو قرص در روز" = twee pillen per dag'},
        {hz:'فارمسی',tr:'faarmasi',nl:'Apotheek',tip:'"فارمسی کجاس؟" = waar is de apotheek?'},
        {hz:'ویتامین',tr:'witaamin',nl:'Vitamine',tip:''},
        {hz:'آنتی‌بیوتیک',tr:'anti-biyotik',nl:'Antibioticum',tip:''},
        {hz:'زخم‌بند',tr:'zakhm-band',nl:'Verband / Pleister',tip:''},
      ],
      sentences:[
        {hz:'این نسخه را به فارمسی ببر',tr:'in noskha ra ba faarmasi bebor',nl:'Breng dit recept naar de apotheek'},
        {hz:'روزی سه بار، بعد از غذا بخور',tr:'rozi se baar, ba\'d az ghazaa bekhoor',nl:'Drie keer per dag, na het eten innemen'},
        {hz:'به آنتی‌بیوتیک حساسیت دارم',tr:'ba anti-biyotik hassaasiyat darom',nl:'Ik ben allergisch voor antibiotica'},
      ]
    },

    { id:'doctor_advice', title:'Gezondheidsadvies', sub:'Bewegen, rusten, eten, slapen...', icon:'🏃', xp:30,
      pronTips:['ر','ش'],
      grammar:'"استراحت" = rust/herstel. "پرهیز کردن" = vermijden. "فشار خون" = bloeddruk. Gezondheidsadvies komt in Hazara cultuur van arts én ouderen — beiden worden gerespecteerd.',
      words:[
        {hz:'استراحت',tr:'esteraahat',nl:'Rust / Herstel',tip:'"استراحت کو" = rust uit'},
        {hz:'پرهیز کردن',tr:'parhiz kardan',nl:'Vermijden / Onthouden',tip:'"از چرب پرهیز کن" = vermijd vette dingen'},
        {hz:'فشار خون',tr:'fashaare khoon',nl:'Bloeddruk',tip:'"فشار خون بالاَس" = de bloeddruk is hoog'},
        {hz:'قند خون',tr:'qand-e khoon',nl:'Bloedsuiker',tip:''},
        {hz:'وزن',tr:'wazn',nl:'Gewicht (lichaams-)',tip:''},
        {hz:'ورزش',tr:'warzesh',nl:'Lichaamsbeweging / Sport',tip:'"روزانه ورزش کن" = beweeg dagelijks'},
        {hz:'خواب کافی',tr:'khwaab-e kaafi',nl:'Voldoende slaap',tip:''},
        {hz:'چکاپ',tr:'chekaap',nl:'Check-up',tip:'"چکاپ سالانه" = jaarlijkse check-up'},
        {hz:'سبزیجات',tr:'sabzijaat',nl:'Groenten',tip:'"بیشتر سبزیجات بخور" = eet meer groenten'},
        {hz:'آو زیاد',tr:'aaw-e ziyaad',nl:'Veel water drinken',tip:'Universeel gezondheidsadvies'},
      ],
      sentences:[
        {hz:'استراحت کو و آو زیاد بخور',tr:'esteraahat ko wa aaw ziyaad bekhoor',nl:'Rust uit en drink veel water'},
        {hz:'از غذای چرب پرهیز کو',tr:'az ghazaa-ye charb parhiz ko',nl:'Vermijd vet eten'},
        {hz:'هر روز نیم ساعت ورزش کو',tr:'har roz nim saa\'at warzesh ko',nl:'Doe elke dag een halfuur aan beweging'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH49 — TELEFOON & TECHNOLOGIE
  // ══════════════════════════════════════════════════════
  { id:'ch49', label:'📱 Hoofdstuk 49 · Telefoon & Technologie', color:'#1d4ed8',
    lessons:[

    { id:'phone_calling', title:'Bellen & Berichten', sub:'Opnemen, sms, WhatsApp...', icon:'📞', xp:35,
      pronTips:['ز','پ'],
      grammar:'"زنگ زدن" = bellen (letterlijk: bel slaan). "جواب دادن" = opnemen. "مشغول اَس" = bezet/in gesprek. Hazara families in diaspora communiceren veel via "واتساپ" — WhatsApp is het levensbloed.',
      words:[
        {hz:'زنگ زدن',tr:'zang zadan',nl:'Bellen',tip:'"زنگ بزن" = bel me'},
        {hz:'جواب دادن',tr:'jawaab daadan',nl:'Opnemen / Antwoorden',tip:'"جواب نداد" = nam niet op'},
        {hz:'قطع کردن',tr:'qat\' kardan',nl:'Ophangen / Verbinding verbreken',tip:''},
        {hz:'پیام',tr:'payaam',nl:'Bericht',tip:'"پیام فرستادن" = een bericht sturen'},
        {hz:'واتساپ',tr:'waatsaap',nl:'WhatsApp',tip:'Meest gebruikte communicatie in diaspora'},
        {hz:'مشغول اَس',tr:'mashghool as',nl:'In gesprek / Bezet',tip:'"لاین مشغول اَس" = de lijn is bezet'},
        {hz:'سیگنال',tr:'signal',nl:'Bereik / Signaal',tip:'"سیگنال نیس" = geen bereik'},
        {hz:'شماره',tr:'shomaara',nl:'Telefoonnummer',tip:'"شماره‌ات چیس؟" = wat is je nummer?'},
        {hz:'تماس',tr:'tamaas',nl:'Contact / Verbinding',tip:'"در تماس باش" = houd contact'},
        {hz:'صدا',tr:'sadaa',nl:'Geluid / Stem (aan telefoon)',tip:'"صدات نمی‌آد" = ik kan je niet horen'},
      ],
      sentences:[
        {hz:'زنگ بزن، منتظرم',tr:'zang bezan, montazeram',nl:'Bel me, ik wacht'},
        {hz:'شماره‌ات را بده، واتساپ می‌فرستم',tr:'shomaarat ra beda, waatsaap mi-ferestom',nl:'Geef me je nummer, ik stuur je een WhatsApp'},
        {hz:'سیگنال نیس، بعداً زنگ می‌زنم',tr:'signal nis, ba\'dan zang mi-zanom',nl:'Geen bereik, ik bel je later'},
      ]
    },

    { id:'internet_social', title:'Internet & Social Media', sub:'Wifi, likes, volgen, uploaden...', icon:'📲', xp:30,
      pronTips:['اینت','آپ'],
      grammar:'"اینترنت" = internet. "لایک" = like. "فالو" = volgen. Jonge Hazara zijn actief op sociale media — veel creators delen hun taal en cultuur online. "وای‌فای پسورد چیس؟" = wat is het wifi-wachtwoord?',
      words:[
        {hz:'اینترنت',tr:'internet',nl:'Internet',tip:'"اینترنت ندارم" = ik heb geen internet'},
        {hz:'وای‌فای',tr:'waay-faay',nl:'Wifi',tip:'"وای‌فای پسورد چیس؟" = wat is het wifi-wachtwoord?'},
        {hz:'لایک',tr:'layk',nl:'Like',tip:'"لایک کو" = geef een like'},
        {hz:'فالو',tr:'faaloo',nl:'Volgen',tip:'"فالو کو" = volg me'},
        {hz:'آپلود',tr:'aaplood',nl:'Uploaden',tip:''},
        {hz:'دانلود',tr:'daanlood',nl:'Downloaden',tip:'"دانلود کو" = download het'},
        {hz:'جستجو',tr:'jostojoo',nl:'Zoeken',tip:'"جستجو کو" = zoek op'},
        {hz:'پسورد',tr:'paswerd',nl:'Wachtwoord',tip:'Van "password"'},
        {hz:'اپلیکیشن',tr:'aplikeyshan',nl:'App / Applicatie',tip:'"اپ نصب کو" = installeer de app'},
        {hz:'ویدیو',tr:'widyo',nl:'Video',tip:'"ویدیو بفرست" = stuur een video'},
      ],
      sentences:[
        {hz:'وای‌فای پسورد چیس؟',tr:'waay-faay paswerd chis?',nl:'Wat is het wifi-wachtwoord?'},
        {hz:'لایک کو و فالو کو، تشکر!',tr:'layk ko wa faaloo ko, tashakur!',nl:'Geef een like en volg me, bedankt!'},
        {hz:'اینترنت کُنده اَس، ویدیو بار نمی‌شه',tr:'internet konda as, widyo baar nami-sha',nl:'Het internet is traag, de video laadt niet'},
      ]
    },

    { id:'tech_devices', title:'Apparaten & Computers', sub:'Laptop, lader, batterij...', icon:'💻', xp:30,
      pronTips:['ک','ش'],
      grammar:'"کمپیوتر" = computer (Afghaans). "لپ‌تاپ" = laptop. "شارج" = opladen. "موبایل" = mobiele telefoon. Technologievocabulaire is grotendeels geleend uit het Engels.',
      words:[
        {hz:'کمپیوتر',tr:'kampyutar',nl:'Computer',tip:'Afghaans woord'},
        {hz:'لپ‌تاپ',tr:'lap-taap',nl:'Laptop',tip:''},
        {hz:'موبایل',tr:'mobaayel',nl:'Mobiele telefoon',tip:''},
        {hz:'شارج',tr:'shaarj',nl:'Opladen',tip:'"شارج کو" = laad het op'},
        {hz:'باتری',tr:'baateri',nl:'Batterij',tip:'"باتری خالی اَس" = batterij is leeg'},
        {hz:'بلوتوث',tr:'bluutos',nl:'Bluetooth',tip:''},
        {hz:'صفحه',tr:'safha',nl:'Scherm',tip:'"صفحه شکست" = het scherm is gebarsten'},
        {hz:'کیبورد',tr:'kibord',nl:'Toetsenbord',tip:''},
        {hz:'پرینتر',tr:'prenter',nl:'Printer',tip:''},
        {hz:'حافظه',tr:'haafeza',nl:'Geheugen / Opslag',tip:'"حافظه پر اَس" = de opslag is vol'},
      ],
      sentences:[
        {hz:'موبایلم شارج نیس، شارجر می‌خوام',tr:'mobaayelam shaarj nis, shaarjar mi-khom',nl:'Mijn telefoon is niet opgeladen, ik heb een lader nodig'},
        {hz:'لپ‌تاپ کار نمی‌کنه، خراب شده',tr:'lap-taap kaar nami-kona, kharaab shoda',nl:'De laptop werkt niet, hij is kapot'},
        {hz:'حافظه پر اَس، باید چیز پاک کنم',tr:'haafeza por as, baayad chiz paak konom',nl:'De opslag is vol, ik moet iets verwijderen'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH50 — DAGELIJKSE ROUTINE
  // ══════════════════════════════════════════════════════
  { id:'ch50', label:'☀️ Hoofdstuk 50 · Dagelijkse Routine', color:'#d97706',
    lessons:[

    { id:'morning_routine', title:'Ochtendrutine', sub:'Opstaan, douche, ontbijt...', icon:'🌅', xp:35,
      pronTips:['ب','ص'],
      grammar:'"بیدار شدن" = wakker worden. "ناشتا" = ontbijt. Een Hazara ochtend begint vaak vroeg — gebed, groene thee en naan zijn de basis. "چای صبح" = de heilige ochtendthee.',
      words:[
        {hz:'بیدار شدن',tr:'bidaar shodan',nl:'Wakker worden',tip:'"بیدار شدم" = ik ben wakker geworden'},
        {hz:'دوش گرفتن',tr:'dosh gereftan',nl:'Douchen',tip:''},
        {hz:'ناشتا',tr:'naashta',nl:'Ontbijt',tip:'Hazaragi/Afghaans: "ناشتا" — niet Iraans "صبحانه". "ناشتا خوردی؟" = heb je ontbeten?'},
        {hz:'چای صبح',tr:'chaay-e sobh',nl:'Ochtendthee',tip:'Ritueel begin van de Hazara dag'},
        {hz:'مسواک زدن',tr:'meswak zadan',nl:'Tanden poetsen',tip:''},
        {hz:'حاضر شدن',tr:'haazir shodan',nl:'Klaar maken',tip:'"حاضر شدم" = ik ben klaar'},
        {hz:'دیر شدن',tr:'deer shodan',nl:'Te laat worden',tip:'"دیرم شد" = ik kom te laat'},
        {hz:'سر وقت',tr:'sar-e waqt',nl:'Op tijd',tip:'"سر وقت باش" = wees op tijd'},
        {hz:'لباس پوشیدن',tr:'lebaas poshedan',nl:'Zich aankleden',tip:''},
        {hz:'آینه',tr:'aayna',nl:'Spiegel',tip:''},
        {hz:'شانه زدن',tr:'shaana zadan',nl:'Haar kammen',tip:''},
        {hz:'عطر',tr:'etar',nl:'Parfum',tip:'"عطر زدن" = parfum opdoen'},
      ],
      sentences:[
        {hz:'صبح بیدار شدم و چای خوردم',tr:'sobh bidaar shodom wa chaay khordom',nl:'Ochtends werd ik wakker en dronk thee'},
        {hz:'دیر می‌شه، زود حاضر شو',tr:'deer mi-sha, zood haazir sho',nl:'We komen te laat, maak je snel klaar'},
        {hz:'ناشتا نخوردم، گشنه‌ام',tr:'naashta nakhordom, goshnaam',nl:'Ik heb niet ontbeten, ik heb honger'},
      ]
    },

    { id:'work_school_day', title:'Werkdag & Schooldag', sub:'Werk, lunch, vergadering...', icon:'💼', xp:30,
      pronTips:['ک','ج'],
      grammar:'"کار" = werk. "دفتر" = kantoor. "جلسه" = vergadering. "ناهار" = lunch. "همکار" = collega. Hazaragi werkwoord staat altijd aan het einde van de zin.',
      words:[
        {hz:'کار',tr:'kaar',nl:'Werk',tip:'"کار کردن" = werken'},
        {hz:'دفتر',tr:'daftar',nl:'Kantoor',tip:''},
        {hz:'همکار',tr:'hamkaar',nl:'Collega',tip:'Letterlijk: mede-werker'},
        {hz:'ناهار',tr:'naahaar',nl:'Lunch',tip:'"ناهار خوردی؟" = heb je geluncht?'},
        {hz:'جلسه',tr:'jalsa',nl:'Vergadering',tip:'"جلسه داریم" = we hebben een vergadering'},
        {hz:'وقفه',tr:'waqfa',nl:'Pauze',tip:''},
        {hz:'خسته',tr:'khasta',nl:'Moe / Vermoeid',tip:'"خسته شدم" = ik ben moe geworden'},
        {hz:'دستمزد',tr:'dastmazd',nl:'Loon / Salaris',tip:''},
        {hz:'زحمت',tr:'zahmat',nl:'Moeite / Inspanning',tip:'"زحمت می‌کشی" = je werkt hard'},
        {hz:'برگشتن',tr:'bargashtan',nl:'Teruggaan',tip:'"به خانه برگشتم" = ik keerde terug naar huis'},
      ],
      sentences:[
        {hz:'امروز کار زیاد داشتم، خسته شدم',tr:'emroz kaar ziyaad daashdom, khasta shodom',nl:'Vandaag had ik veel werk, ik ben moe geworden'},
        {hz:'ناهار با همکارانم خوردم',tr:'naahaar baa hamkaaraanam khordom',nl:'Ik at de lunch met mijn collega\'s'},
        {hz:'جلسه مهم داریم، سر وقت باش',tr:'jalsa-ye mohemm daarim, sar-e waqt baash',nl:'We hebben een belangrijke vergadering, wees op tijd'},
      ]
    },

    { id:'evening_rest', title:'Avond & Rust', sub:'Avondeten, televisie, slapen...', icon:'🌙', xp:30,
      pronTips:['ش','خ'],
      grammar:'"شام" = avondmaaltijd. "خوابیدن" = slapen. Het Hazara avond begint altijd met het gezamenlijke avondeten — niemand eet alleen. "شب بخیر" = goedenacht. "خواب خوش" = slaap lekker.',
      words:[
        {hz:'شام',tr:'shaam',nl:'Avondeten',tip:'"شام خوردی؟" = heb je gegeten?'},
        {hz:'تلویزیون',tr:'telwizyon',nl:'Televisie',tip:'"تلویزیون تماشا کردن" = televisie kijken'},
        {hz:'کتاب خواندن',tr:'ketaab khaandan',nl:'Boek lezen',tip:''},
        {hz:'خوابیدن',tr:'khwaabedan',nl:'Slapen',tip:'"خوابیدم" = ik sliep'},
        {hz:'استراحت کردن',tr:'esteraahat kardan',nl:'Rusten',tip:''},
        {hz:'فردا',tr:'fardaa',nl:'Morgen',tip:'"فردا می‌بینمت" = ik zie je morgen'},
        {hz:'شب بخیر',tr:'shab bakheer',nl:'Goedenacht',tip:'Standaard afscheidsgroet'},
        {hz:'خواب خوش',tr:'khwaab-e khosh',nl:'Slaap lekker',tip:'Warmere variant'},
        {hz:'آرام',tr:'aaraam',nl:'Rustig / Kalm',tip:'"آرام باش" = wees rustig'},
        {hz:'رویا',tr:'royaa',nl:'Droom',tip:'"خواب خوب ببینی" = mooie dromen'},
      ],
      sentences:[
        {hz:'شام خوردیم و تلویزیون دیدیم',tr:'shaam khordim wa telwizyon dedim',nl:'We aten en keken televisie'},
        {hz:'شب بخیر، خواب خوش',tr:'shab bakheer, khwaab-e khosh',nl:'Goedenacht, slaap lekker'},
        {hz:'فردا زود بیدار شو، کار داریم',tr:'fardaa zood bidaar sho, kaar daarim',nl:'Word morgen vroeg wakker, we hebben werk'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH51 — FEESTEN & VIERINGEN
  // ══════════════════════════════════════════════════════
  { id:'ch51', label:'🎊 Hoofdstuk 51 · Feesten & Vieringen', color:'#6d28d9',
    lessons:[

    { id:'nowruz', title:'Norooz (Afghaans Nieuwjaar)', sub:'Lente, bezoeken, cadeautjes...', icon:'🌸', xp:40,
      pronTips:['ن','ع'],
      grammar:'"نوروز" = Norooz — 21 maart, het begin van de lente en het nieuwe jaar. "عید مبارک" = gelukkig feest. Hazara vieren Norooz uitbundig na de harde Hazarajat-winters.',
      words:[
        {hz:'نوروز',tr:'nawroz',nl:'Norooz (Afghaans nieuwjaar)',tip:'21 maart — begin van de lente'},
        {hz:'عید مبارک',tr:'eid mobaarak',nl:'Gelukkig Feest!',tip:'Standaard wens bij elk Afghaans feest'},
        {hz:'سال نو',tr:'saal-e naw',nl:'Nieuw jaar',tip:'"سال نو مبارک" = gelukkig nieuwjaar'},
        {hz:'بهار',tr:'bahaar',nl:'Lente',tip:'"بهار آمد" = de lente is gekomen'},
        {hz:'هفت‌سین',tr:'haft-seen',nl:'Haft-sin tafel',tip:'7 items met "س" voor Norooz'},
        {hz:'دید و بازدید',tr:'deed wa baazdeed',nl:'Familiebezoeken uitwisselen',tip:'Traditie: iedereen bezoeken'},
        {hz:'عیدی',tr:'eidi',nl:'Feestcadeautje',tip:'Geld of cadeau voor kinderen'},
        {hz:'مبارک باد',tr:'mobaarak baad',nl:'Gefeliciteerd! / Gelukkig!',tip:'Felicitaties bij alle feesten'},
        {hz:'رخصتی',tr:'rakhsati',nl:'Vrije dag / Vakantie',tip:'Hazaragi/Afghaans: "رخصتی" — niet Iraans "تعطیل". "رخصتی هستیم" = we zijn vrij'},
        {hz:'بزم',tr:'bazm',nl:'Feestbijeenkomst',tip:'Muziek, eten, dans — samen'},
      ],
      sentences:[
        {hz:'نوروز مبارک، سال نو خوش',tr:'nawroz mobaarak, saal-e naw khosh',nl:'Gelukkig Norooz, een goed nieuwjaar'},
        {hz:'دید و بازدید رفتیم، عیدی گرفتیم',tr:'deed wa baazdeed raftim, eidi gereftim',nl:'We gingen op bezoek en kregen geschenkjes'},
        {hz:'بهار آمد، طبیعت سبز شد',tr:'bahaar aamad, tabee\'at sabz shod',nl:'De lente is gekomen, de natuur is groen geworden'},
      ]
    },

    { id:'eid_celebration', title:'Eid Viering', sub:'Gebed, familie, Eid-eten...', icon:'🕌', xp:40,
      pronTips:['ع','ق'],
      grammar:'"عید فطر" = Eid ul-Fitr (na Ramadan). "عید قربان" = Eid ul-Adha (offerfeest). "نماز عید" = Eid-gebed vroeg in de ochtend. Hazara Eid = uren van familiebezoek.',
      words:[
        {hz:'عید فطر',tr:'eid-e fetr',nl:'Eid ul-Fitr',tip:'Einde van de Ramadan'},
        {hz:'عید قربان',tr:'eid-e qorbaan',nl:'Eid ul-Adha',tip:'Offerfeest'},
        {hz:'نماز عید',tr:'namaaz-e eid',nl:'Eid-gebed',tip:'Vroeg in de ochtend buiten of in moskee'},
        {hz:'قربانی',tr:'qorbaani',nl:'Offerschaap',tip:''},
        {hz:'حلوا',tr:'halwaa',nl:'Halwa (Eid-snoep)',tip:'Traditioneel op Eid gemaakt'},
        {hz:'صله رحم',tr:'sela-ye rahim',nl:'Familiebezoek (plicht)',tip:'Islamitische plicht'},
        {hz:'خیرات',tr:'khairaat',nl:'Liefdadigheid / Aalmoezen',tip:'"خیرات دادن" = aalmoezen geven'},
        {hz:'روزه',tr:'roza',nl:'Vasten',tip:'"روزه گرفتم" = ik vastte'},
        {hz:'افطار',tr:'eftaar',nl:'Iftar (vasten breken)',tip:'"وقت افطار" = tijd om het vasten te breken'},
        {hz:'سحر',tr:'sahar',nl:'Suhoor (vroege maaltijd)',tip:'Maaltijd voor zonsopgang in Ramadan'},
      ],
      sentences:[
        {hz:'عید مبارک، سالم و شاد باشی',tr:'eid mobaarak, saalam wa shaad baashi',nl:'Gelukkig Eid, wees gezond en blij'},
        {hz:'نماز عید خواندیم، بعد دید و بازدید رفتیم',tr:'namaaz-e eid khaandim, ba\'d deed wa baazdeed raftim',nl:'We deden het Eid-gebed, daarna gingen we op bezoek'},
        {hz:'دَ رمضان روزه گرفتم، سخت بود ولی خوب',tr:'da ramazaan roza gereftom, sakht bood wali khob',nl:'Ik vastte in de Ramadan, het was zwaar maar goed'},
      ]
    },

    { id:'birthday_celebrate', title:'Verjaardag & Jubileum', sub:'Taart, kaars, wens, cadeau...', icon:'🎂', xp:30,
      pronTips:['ت','ج'],
      grammar:'"تولد" = verjaardag. "مبارک باد" = gefeliciteerd. "آرزو" = wens. "هزار سال زندگی کو" = moge je duizend jaar leven — de mooiste Hazaragi verjaarsdagwens.',
      words:[
        {hz:'تولد',tr:'tawallod',nl:'Verjaardag',tip:'"تولدت مبارک" = gelukkige verjaardag'},
        {hz:'تولدت مبارک',tr:'tawallod-at mobaarak',nl:'Gelukkige verjaardag!',tip:'De standaard wens'},
        {hz:'کیک',tr:'keyk',nl:'Taart',tip:'Van "cake"'},
        {hz:'شمع',tr:'sham\'',nl:'Kaars',tip:'"شمع را فوت کو" = blaas de kaars uit'},
        {hz:'هدیه',tr:'hadya',nl:'Cadeau',tip:'"هدیه دادن" = een cadeau geven'},
        {hz:'آرزو',tr:'aarzo',nl:'Wens',tip:'"آرزو کو" = doe een wens'},
        {hz:'جشن',tr:'jashn',nl:'Feest',tip:'"جشن گرفتن" = een feest houden'},
        {hz:'دعوت',tr:'da\'wat',nl:'Uitnodiging',tip:'"دعوت شدم" = ik ben uitgenodigd'},
        {hz:'خوشی',tr:'khoshi',nl:'Vreugde / Blijdschap',tip:'"خوشی‌ات را می‌خوام" = ik wil jouw geluk — warme Hazaragi wens'},
        {hz:'هزار سال زندگی کو',tr:'hazaar saal zendagi ko',nl:'Moge je duizend jaar leven',tip:'De mooiste Hazaragi verjaardagswens'},
      ],
      sentences:[
        {hz:'تولدت مبارک، هزار سال زندگی کو',tr:'tawallod-at mobaarak, hazaar saal zendagi ko',nl:'Gelukkige verjaardag, moge je duizend jaar leven'},
        {hz:'کیک را ببُر، شمع را فوت کو',tr:'keyk ra bobor, sham\' ra foot ko',nl:'Snijd de taart, blaas de kaars uit'},
        {hz:'چه هدیه‌ای بخرم برات؟',tr:'cha hadyayi bekhorom baraat?',nl:'Wat voor cadeau zal ik voor je kopen?'},
      ]
    },

  ]},

  // ══════════════════════════════════════════════════════
  // CH52 — GRAMMATICA 6 · VRAAGZINNEN & TIJDSUITDRUKKINGEN
  // ══════════════════════════════════════════════════════
  { id:'ch52', label:'📖 Hoofdstuk 52 · Grammatica 6 — Vraagzinnen & Tijdsuitdrukkingen', color:'#065f46',
    lessons:[

    { id:'gram6_questions', title:'Vraagwoorden (verdieping)', sub:'Wie, wat, waar, wanneer, hoe...', icon:'❓', xp:45,
      pronTips:['ک','چ'],
      grammar:'Verdieping vraagwoorden:\nکجا (waar) · چی (wat) · کی (wie) · کِی (wanneer) · چرا (waarom) · چتور (hoe) · چنده (hoeveel) · کدام (welke)\n\nSamengestelde vragen:\nاز کجا (van waar) · با کی (met wie) · برای کی (voor wie) · چه وقت (hoe laat)\n\nHazaragi zegt چتور (niet چطور) en چنده (niet چقدر) — die zijn Iraans. Vraagwoord staat vooraan, werkwoord achteraan.',
      words:[
        {hz:'کجا',tr:'koja',nl:'Waar',tip:'"کجا هستی؟" = waar ben je?'},
        {hz:'کِی',tr:'kay',nl:'Wanneer',tip:'"کِی می‌آی؟" = wanneer kom je?'},
        {hz:'کی',tr:'ki',nl:'Wie',tip:'"کی گفت؟" = wie zei dat?'},
        {hz:'چی',tr:'chi',nl:'Wat',tip:'"چی گفتی؟" = wat zei je?'},
        {hz:'چرا',tr:'chera',nl:'Waarom',tip:'"چرا نیامدی؟" = waarom ben je niet gekomen?'},
        {hz:'چتور',tr:'chetor',nl:'Hoe (Hazaragi)',tip:'Hazaragi: "چتور" — Dari/Iraans zegt "چطور", wij NIET'},
        {hz:'چنده',tr:'chanda',nl:'Hoeveel',tip:'Hazaragi: "چنده" — niet Iraans "چقدر". "چنده اَس؟" = hoeveel kost het?'},
        {hz:'کدام',tr:'kodaam',nl:'Welke',tip:'"کدام یکی؟" = welke (van de twee)?'},
        {hz:'از کجا',tr:'az koja',nl:'Waarvan daan',tip:'"از کجا آمدی؟" = waar kom je vandaan?'},
        {hz:'با کی',tr:'baa ki',nl:'Met wie',tip:'"با کی رفتی؟" = met wie ben je gegaan?'},
        {hz:'چند',tr:'chand',nl:'Hoeveel (stuks)',tip:'"چند نفر؟" = hoeveel mensen?'},
        {hz:'چه وقت',tr:'cha waqt',nl:'Op welk tijdstip',tip:'"چه وقت می‌آی؟" = hoe laat kom je?'},
      ],
      sentences:[
        {hz:'کجا می‌ری؟ با کی؟',tr:'koja mi-ri? baa ki?',nl:'Waar ga je heen? Met wie?'},
        {hz:'چرا دیر آمدی؟ کِی بیرون شدی؟',tr:'chera deer aamadi? kay biron shodi?',nl:'Waarom ben je laat? Wanneer ben je weggegaan?'},
        {hz:'کدام را می‌خوای؟ چنده می‌دی؟',tr:'kodaam ra mi-khaay? chanda mi-di?',nl:'Welke wil je? Hoeveel geef je?'},
      ]
    },

    { id:'gram6_time', title:'Tijdsuitdrukkingen', sub:'Altijd, nooit, soms, al, nog...', icon:'⏰', xp:40,
      pronTips:['ه','گ'],
      grammar:'Tijdswoorden veranderen de betekenis van een zin helemaal.\n\nهنوز (nog steeds/nog niet) · دیگه (niet meer/al) · قبلاً (vroeger)\nهمیشه (altijd) · هیچ‌وقت (nooit) · گاهی (soms)\nزود (snel/vroeg) · دیر (laat) · بالاخره (eindelijk)\n\nZe staan vóór het werkwoord: من هنوز نرفتم = ik ben nog niet gegaan.',
      words:[
        {hz:'هنوز',tr:'hanoz',nl:'Nog / Nog steeds',tip:'"هنوز اینجاس" = hij is er nog steeds'},
        {hz:'دیگه',tr:'diga',nl:'Al / Niet meer',tip:'"دیگه نمی‌آم" = ik kom niet meer'},
        {hz:'همیشه',tr:'hamesha',nl:'Altijd',tip:'"همیشه اینطور اَس" = het is altijd zo'},
        {hz:'هیچ‌وقت',tr:'hich-waqt',nl:'Nooit',tip:'"هیچ‌وقت فراموش نمی‌کنم" = ik vergeet het nooit'},
        {hz:'گاهی',tr:'gaahi',nl:'Soms',tip:'"گاهی می‌آم" = ik kom soms'},
        {hz:'اکثراً',tr:'aksaran',nl:'Meestal / Overwegend',tip:''},
        {hz:'زود',tr:'zood',nl:'Vroeg / Snel / Gauw',tip:'"زود بیا" = kom snel'},
        {hz:'دیر',tr:'deer',nl:'Laat / Traag',tip:'"دیر آمدم" = ik ben laat gekomen'},
        {hz:'بالاخره',tr:'baalakhera',nl:'Uiteindelijk / Eindelijk',tip:'"بالاخره آمد" = eindelijk is hij gekomen'},
        {hz:'فوری',tr:'foori',nl:'Direct / Meteen',tip:'"فوری بیا" = kom direct'},
        {hz:'قبلاً',tr:'qablan',nl:'Vroeger / Voorheen',tip:'"قبلاً اینطور نبود" = vroeger was het niet zo'},
        {hz:'از اون وقت',tr:'az on waqt',nl:'Sindsdien',tip:'"از اون وقت نیامده" = sindsdien is hij niet meer gekomen'},
      ],
      sentences:[
        {hz:'هنوز نیامده، منتظریم',tr:'hanoz nayaamada, montazerim',nl:'Hij is nog niet gekomen, we wachten'},
        {hz:'همیشه دیر می‌آی، هیچ‌وقت سر وقت نیستی',tr:'hamesha deer mi-aay, hich-waqt sar-e waqt nisti',nl:'Je komt altijd te laat, je bent nooit op tijd'},
        {hz:'بالاخره فامیدم، گاهی اشتباه می‌کنم',tr:'baalakhera fahmidom, gaahi eshtebaa mi-konom',nl:'Eindelijk begrijp ik het, soms maak ik fouten'},
      ]
    },

    { id:'gram6_if', title:'Voorwaardelijke Zinnen', sub:'Als...dan, wanneer, tenzij...', icon:'🔀', xp:45,
      pronTips:['ا','ب'],
      grammar:'Verdieping: meer verbinders voor voorwaardelijke zinnen.\n\nاگر بیای، با هم می‌خوریم = als je komt, eten we samen (echt mogelijk)\nاگر پول داشتم، کمکت می‌کردم = als ik geld had gehad, had ik geholpen (hypothetisch)\n\nوختی رسیدی زنگ بزن = bel me wanneer je aankomt (وختی = Hazaragi voor wanneer)\nنمی‌رم مگر اینکه بیای = ik ga niet tenzij je meekomt\nبا اینکه خسته بودم، رفتم = hoewel ik moe was, ging ik',
      words:[
        {hz:'اگر',tr:'agar',nl:'Als / Indien',tip:'"اگر بیای، خوشم می‌شه" = als je komt, ben ik blij'},
        {hz:'وختی',tr:'wakhti',nl:'Wanneer (tijdstip)',tip:'"وختی رسیدی، زنگ بزن" = wanneer je aankomt, bel me — Hazaragi: وختی ipv وقتی'},
        {hz:'مگر',tr:'magar',nl:'Tenzij / Behalve',tip:'"مگر اینکه" = tenzij dat'},
        {hz:'با اینکه',tr:'baa inke',nl:'Hoewel / Ondanks dat',tip:'"با اینکه خسته بودم" = hoewel ik moe was'},
        {hz:'بدون اینکه',tr:'bedoon inke',nl:'Zonder dat',tip:'"بدون اینکه بدانم" = zonder dat ik het wist'},
        {hz:'به شرطی که',tr:'ba sharti ke',nl:'Op voorwaarde dat',tip:'"به شرطی که بیای" = op voorwaarde dat je komt'},
        {hz:'هر چند',tr:'har chand',nl:'Hoewel / Al is het ook zo',tip:''},
        {hz:'چون',tr:'chon',nl:'Omdat',tip:'"چون خوب بودی" = omdat je goed was'},
        {hz:'پس',tr:'pas',nl:'Dus / Dan',tip:'"پس بیا" = dus kom dan'},
        {hz:'ولی',tr:'wali',nl:'Maar / Echter',tip:'"می‌خوام ولی نمی‌تانم" = ik wil maar ik kan niet'},
      ],
      sentences:[
        {hz:'اگر بیای، با هم می‌خوریم',tr:'agar biyaay, baa ham mi-khorim',nl:'Als je komt, eten we samen'},
        {hz:'چون دیر آمدی، ناهار تمام شد',tr:'chon deer aamadi, naahaar tamaam shod',nl:'Omdat je te laat kwam, was de lunch op'},
        {hz:'با اینکه سخت بود، بالاخره تمام کردم',tr:'baa inke sakht bood, baalakhera tamaam kardom',nl:'Hoewel het moeilijk was, heb ik het uiteindelijk afgemaakt'},
      ]
    },

  ]},

  { id:'ch_gram7', label:'📖 Grammatica 7 · Tijden & Ezafe', color:'#8B6FF0', lessons:[

    { id:'gram7_ezafe', title:'Ezafe: de koppel-e', sub:'Ons huis, mijn vriend, het grote kind...', icon:'🔗', xp:35,
      pronTips:['ه','ی'],
      grammar:'Ezafe is een klein koppelklankie ("-e" of "-ye") dat twee woorden verbindt.\n\nVoor bezit: خانه‌ی ما (ons huis) · نام پدر (naam van vader)\nVoor bijv. naamwoorden: پسر بزرگ (de grote jongen)\n\nLet op: in Hazaragi staat het bijvoeglijk naamwoord ACHTER het zelfstandig naamwoord, en de bezitter staat ook ACHTER het bezit. Andersom dan in het Nederlands!',
      words:[
        {hz:'خانه‌ی ما',tr:'khaana-ye mah',nl:'Ons huis',tip:'"خانه" + ezafe "-ye" + "ما" — bezitsvorm'},
        {hz:'خانه‌ی تو',tr:'khaana-ye tu',nl:'Jouw huis',tip:'"تو" = tu (NIET "to"!)'},
        {hz:'پسر بزرگ',tr:'pesar-e bozorg',nl:'De grote jongen',tip:'Bijv.nw. staat NA het zelfstandig naamwoord'},
        {hz:'کتاب خوب',tr:'ketaab-e khob',nl:'Het goede boek',tip:'"خوب" staat achter "کتاب"'},
        {hz:'دوست من',tr:'dost-e ma',nl:'Mijn vriend',tip:'Ezafe: "دوست" + "-e" + "من"'},
        {hz:'مادر خوب',tr:'maadar-e khob',nl:'De lieve moeder',tip:'Bijv.nw. "خوب" achter het naamwoord'},
        {hz:'نام پدر',tr:'naam-e padar',nl:'De naam van vader',tip:'Ezafe voor bezit: naam van vader'},
        {hz:'چای گرم',tr:'chaay-e garm',nl:'Warme thee',tip:'"گرم" staat NA "چای"'},
      ],
      sentences:[
        {hz:'خانه‌ی ما بزرگ اَس',tr:'khaana-ye mah bozorg as',nl:'Ons huis is groot'},
        {hz:'دوست خوب داشتن مهم اَس',tr:'dost-e khob daashtan mohim as',nl:'Een goede vriend hebben is belangrijk'},
        {hz:'چای گرم بیار',tr:'chaay-e garm biaar',nl:'Breng warme thee'},
      ]
    },

    { id:'gram7_adj', title:'Bijvoeglijke naamwoorden', sub:'Groot, mooi, snel, goed...', icon:'🎨', xp:30,
      pronTips:['ی'],
      grammar:'Bijvoeglijke naamwoorden staan in Hazaragi ACHTER het zelfstandig naamwoord:\nخانه بزرگ = groot huis (letterlijk: huis groot)\n\nGroter/groost: voeg "-تر" of "-ترین" toe:\nbozorg (groot) → bozorgtar (groter) → bozorgtarin (grootst)\n\nUitzondering: خوب (goed) → بهتر (beter) → بهترین (best)\n\nAls predicaat: gebruik gewoon اَس: این خانه بزرگ اَس = dit huis is groot.',
      words:[
        {hz:'بزرگ',tr:'bozorg',nl:'Groot',tip:'"خانه بزرگ" = groot huis — bijv.nw. NA zelfst.nw.'},
        {hz:'کوچک',tr:'kochak',nl:'Klein',tip:'"کوچکتر" = kleiner'},
        {hz:'خوب',tr:'khob',nl:'Goed',tip:'"بهتر" = beter — onregelmatig!'},
        {hz:'بد',tr:'bad',nl:'Slecht',tip:'"بدتر" = slechter'},
        {hz:'تازه',tr:'taaza',nl:'Vers / Nieuw',tip:'"نان تازه" = vers brood'},
        {hz:'گوشکیل',tr:'goshkil',nl:'Mooi',tip:'Hazaragi/Afghaans woord voor mooi'},
        {hz:'پیر',tr:'peer',nl:'Oud (persoon)',tip:'"آدم پیر" = oude persoon'},
        {hz:'جوان',tr:'jawaan',nl:'Jong',tip:'"جوانتر" = jonger'},
        {hz:'بزرگتر',tr:'bozorgtar',nl:'Groter',tip:'"-تر" toevoegen aan bijv.nw.'},
        {hz:'بهترین',tr:'behtarin',nl:'Het beste',tip:'"بهترین دوست" = de beste vriend'},
      ],
      sentences:[
        {hz:'خانه‌ی بزرگ می‌خوام',tr:'khaana-ye bozorg mi-khom',nl:'Ik wil een groot huis'},
        {hz:'او بزرگتر اَز من اَس',tr:'oo bozorgtar az ma as',nl:'Hij/zij is groter dan ik'},
        {hz:'بهترین غذا مانتو اَس!',tr:'behtarin ghazaa maanto as!',nl:'Het beste eten is manto!'},
      ]
    },

    { id:'gram7_imperfect', title:'Onvoltooid verleden tijd', sub:'Ik ging altijd, ik was aan het gaan...', icon:'⏪', xp:40,
      pronTips:['ت','د'],
      grammar:'Onvoltooid verleden tijd gebruik je voor gewoonten uit het verleden of een lopende actie: "ik ging altijd" of "ik was aan het gaan".\n\nPatroon: می‌ + verleden stam + uitgang (zelfde uitgangen als tegenwoordige tijd!)\nمی‌رفتم (mi-raftom) = ik ging altijd · می‌رفتی = jij ging · می‌رفت = hij/zij ging\n\nVerschil: رفتم (ik ging, eenmalig) vs می‌رفتم (ik ging altijd/was aan het gaan)',
      words:[
        {hz:'می‌رفتم',tr:'mi-raftom',nl:'Ik ging (altijd/was aan het gaan)',tip:'"می‌" + verleden stam "رفت" + "-م"'},
        {hz:'می‌رفتی',tr:'mi-rafti',nl:'Jij ging (altijd)',tip:'Zelfde uitgang -i als tegenwoordige tijd!'},
        {hz:'می‌رفت',tr:'mi-raft',nl:'Hij/zij ging (altijd)',tip:'Stam zonder uitgang voor hij/zij'},
        {hz:'می‌خوردم',tr:'mi-khordom',nl:'Ik at (gewoonlijk)',tip:'"خورد" = verleden stam van "خوردن"'},
        {hz:'می‌گفتم',tr:'mi-goftom',nl:'Ik zei (altijd)',tip:'"گفت" = verleden stam van "گفتن"'},
        {hz:'می‌کردم',tr:'mi-kardom',nl:'Ik deed (gewoonlijk)',tip:'"کرد" = verleden stam — Hazaragi: -om!'},
        {hz:'می‌بودم',tr:'mi-boodom',nl:'Ik was (vroeger)',tip:'"بود" = verleden stam van "بودن"'},
      ],
      sentences:[
        {hz:'وختی بچه بودم، هر روز بازی می‌کردم',tr:'wakhti bacha boodom, har roz baazi mi-kardom',nl:'Toen ik klein was, speelde ik elke dag'},
        {hz:'قبلاً اینجا زندگی می‌کردم',tr:'qablan injaa zendagi mi-kardom',nl:'Vroeger woonde ik hier'},
        {hz:'داشتم غذا می‌خوردم که زنگ زد',tr:'daashdom ghazaa mi-khordom ka zang zad',nl:'Ik was aan het eten toen hij/zij belde'},
      ]
    },

    { id:'gram7_perfect', title:'Voltooid tegenwoordige tijd', sub:'Ik ben gegaan, ik heb gegeten...', icon:'✅', xp:40,
      pronTips:['ه'],
      grammar:'Voltooid tegenwoordige tijd: voor iets dat al klaar is en nog relevant is.\n\nPatroon: verleden stam + "-ه" + bezitssuffix:\nرفته‌ام (raftaam) = ik ben gegaan · رفته‌ای = jij bent gegaan · رفته = hij/zij is gegaan\n\nIn Hazaragi spreektaal klinkt "رفته‌ام" als "raftaam" — de grens met رفتم (ik ging) is smal, context bepaalt.\nOntkenning: نرفته‌ام = ik ben niet gegaan.',
      words:[
        {hz:'رفته‌ام',tr:'raftaam',nl:'Ik ben gegaan',tip:'رفت + "-ه" + "-ام" → voltooide handeling'},
        {hz:'خورده‌ام',tr:'khordaam',nl:'Ik heb gegeten',tip:'"خورد" + "-ه" + "-ام"'},
        {hz:'دیده‌ام',tr:'didaam',nl:'Ik heb gezien',tip:'"دید" + "-ه" + "-ام"'},
        {hz:'گفته‌ام',tr:'goftaam',nl:'Ik heb gezegd',tip:'"گفت" + "-ه" + "-ام"'},
        {hz:'آمده‌ام',tr:'aamdaam',nl:'Ik ben gekomen',tip:'"آمد" + "-ه" + "-ام"'},
        {hz:'نرفته‌ام',tr:'na-raftaam',nl:'Ik ben niet gegaan',tip:'"نه" + verleden stam = negatie VTT'},
      ],
      sentences:[
        {hz:'نان خورده‌ام، سیر هستم',tr:'naan khordaam, seer hastom',nl:'Ik heb brood gegeten, ik ben vol'},
        {hz:'این فیلم را دیده‌ام، خیلی خوب بود',tr:'in film ra didaam, kheli khob bood',nl:'Ik heb deze film gezien, het was heel goed'},
        {hz:'هیچ‌وقت کابل نرفته‌ام',tr:'hich-waqt kaabul na-raftaam',nl:'Ik ben nooit naar Kabul gegaan'},
      ]
    },

    { id:'gram7_ke', title:'که-bijzinnen', sub:'Ik weet dat..., de man die...', icon:'🔀', xp:40,
      pronTips:['ک'],
      grammar:'"که" (ka) is Hazaragi voor "dat", "die" of "wat" in een bijzin.\n\nAls "dat": می‌فامم که آمده = ik weet dat hij/zij is gekomen\nAls "die": مردی که آمد = de man die gekomen is\n\nIn de bijzin staat het werkwoord nog steeds aan het einde. "که" klinkt als een korte "ka".',
      words:[
        {hz:'که',tr:'ka',nl:'Dat / Die / Wat',tip:'"که" verbindt twee zinnen — uitgesproken als "ka"'},
        {hz:'می‌فامم که',tr:'mi-famom ka',nl:'Ik weet dat',tip:'Veelgebruikte combinatie — leer als één blok'},
        {hz:'فکر می‌کنم که',tr:'fekr mi-konom ka',nl:'Ik denk dat',tip:'"فکر" = gedachte/mening'},
        {hz:'می‌گم که',tr:'mi-gom ka',nl:'Ik zeg dat',tip:''},
        {hz:'کسی که',tr:'kasi ka',nl:'De persoon die',tip:'"کسی" = iemand'},
        {hz:'چیزی که',tr:'chizi ka',nl:'Iets dat',tip:'"چیزی" = iets'},
        {hz:'وختی که',tr:'wakhti ka',nl:'Op het moment dat',tip:'"وختی" = Hazaragi voor "wanneer"'},
      ],
      sentences:[
        {hz:'می‌فامم که فردا می‌آی',tr:'mi-famom ka fardaa mi-aayi',nl:'Ik weet dat je morgen komt'},
        {hz:'فکر می‌کنم که خوبَم',tr:'fekr mi-konom ka khobam',nl:'Ik denk dat het klopt'},
        {hz:'مردی که آمد دوستم اَس',tr:'mardi ka aamad dostam as',nl:'De man die gekomen is is mijn vriend'},
      ]
    },

    { id:'gram7_maal', title:'مال — Bezit als zelfstandig woord', sub:'Van mij, van jou, het mijne...', icon:'👤', xp:25,
      pronTips:['م'],
      grammar:'"مال" (maal) = van / eigendom van. Je gebruikt dit als het bezit zelfstandig staat.\n\nمال من = van mij · مال تو = van jou · مال او = van hem/haar · مال کی؟ = van wie?\n\nVerschil: کتابم = mijn boek (suffix aan het woord) vs این کتاب مال من اَس = dit boek is van mij (zelfstandig).',
      words:[
        {hz:'مال من',tr:'maal-e ma',nl:'Van mij',tip:'"این مال من اَس" = dit is van mij'},
        {hz:'مال تو',tr:'maal-e tu',nl:'Van jou',tip:'"تو" = tu — NIET "to"!'},
        {hz:'مال او',tr:'maal-e oo',nl:'Van hem/haar',tip:'"oo" = lange oo-klank'},
        {hz:'مال ما',tr:'maal-e mah',nl:'Van ons',tip:'Hazaragi: mah voor wij'},
        {hz:'مال شما',tr:'maal-e shoma',nl:'Van jullie',tip:'Ook beleefd enkelvoud'},
        {hz:'مال کی؟',tr:'maal-e ki?',nl:'Van wie?',tip:'"مال کی اَس؟" = van wie is het?'},
      ],
      sentences:[
        {hz:'این مال من اَس، نه مال تو',tr:'ain maal-e ma as, na maal-e tu',nl:'Dit is van mij, niet van jou'},
        {hz:'مال کی اَس این کتاب؟',tr:'maal-e ki as ain ketaab?',nl:'Van wie is dit boek?'},
        {hz:'مال ماس، با هم کار می‌کنیم',tr:'maal-e maas, baa ham kaar mi-konim',nl:'Het is van ons, we werken samen'},
      ]
    },

  ]},

  { id:'ch_eten', label:'🍽️ Eten & Drinken · Hazaragi Keuken', color:'#e07040', lessons:[

    { id:'eten_basis', title:'Eten & Drinken Basis', sub:'Naan, chai, gosht, kachaalo...', icon:'🍽️', xp:30,
      pronTips:['آ','خ'],
      grammar:'Eten in Hazaragi: خوردن = eten. Ik eet: می‌خورم (mi-khorom).\n\nHongerig: گشنه (goshna) — NIET گرسنه (Iraans!)\nWater: آو (aaw) — NIET آب (Iraans!)\n\nAanbieden: بخور! = eet! · چای بخور = drink thee\nVragen: گشنه هستی؟ = ben je hongerig?',
      words:[
        {hz:'نان',tr:'naan',nl:'Brood / Eten',tip:'"نان خوردی؟" = heb je gegeten? (letterlijk: heb je brood gegeten?)'},
        {hz:'چای',tr:'chaay',nl:'Thee',tip:'Hazara drinken altijd chai — groen of zwart met kardemon'},
        {hz:'آو',tr:'aaw',nl:'Water',tip:'Hazaragi: آو (aaw) — Iraans zegt "آب" (aab) — wij zeggen آو!'},
        {hz:'گوشت',tr:'gosht',nl:'Vlees',tip:'"گوشت گوسفند" = schapenvlees — meest gegeten vlees bij Hazara'},
        {hz:'مرغ',tr:'murgh',nl:'Kip',tip:'"مرغ پختی؟" = heb je kip gekookt?'},
        {hz:'کچالو',tr:'kachaalo',nl:'Aardappel',tip:'Echt Afghaans woord — in bijna elk Hazara gerecht'},
        {hz:'برنج',tr:'berenj',nl:'Rijst (ongekookt)',tip:'"پلو" = bereide feestrijst met vlees en rozijnen'},
        {hz:'شیر',tr:'sheer',nl:'Melk',tip:'"شیر چای" = thee met melk'},
        {hz:'ماست',tr:'maast',nl:'Yoghurt',tip:'Basisvoedsel bij elke Hazara maaltijd'},
        {hz:'تربوز',tr:'tarbuuz',nl:'Watermeloen',tip:'Afghaans: تربوز — Iraans zegt "هندوانه" (dat zeggen wij niet)'},
        {hz:'انار',tr:'anaar',nl:'Granaatappel',tip:'Symbool van Afghanistan — zoet, zuur, prachtig'},
        {hz:'گشنه',tr:'goshna',nl:'Hongerig',tip:'Hazaragi: گشنه (goshna) — NIET گرسنه (Iraans)'},
      ],
      sentences:[
        {hz:'چای می‌خوری؟ یا آو؟',tr:'chaay mi-khori? ya aaw?',nl:'Wil je thee? Of water?'},
        {hz:'نان با ماست خوردم، خوش‌مزه بود',tr:'naan baa maast khordom, khosh-maza bood',nl:'Ik at brood met yoghurt, het was lekker'},
        {hz:'مرغ پختم، بیا بخور',tr:'murgh pakhtom, bia bakhoor',nl:'Ik heb kip gemaakt, kom eten'},
      ]
    },

    { id:'eten_smaak', title:'Smaken & Maaltijden', sub:'Lekker, zout, zoet, ontbijt...', icon:'😋', xp:25,
      pronTips:['ش','ز'],
      grammar:'Smaakwoorden in Hazaragi:\nخوش‌مزه (lekker) · بی‌مزه (flauw) · شور (gezouten) · شیرین (zoet) · تند (pittig)\n\nMaaltijden: ناشتا (ontbijt) · ناهار (lunch) · شام (avondeten)\n\nReacties: خوش‌مزه اَس! = het is lekker! · سیر شدم = ik ben vol · تشنه اَستم = ik ben dorstig',
      words:[
        {hz:'خوش‌مزه',tr:'khosh-maza',nl:'Lekker / Smakelijk',tip:'"خوش‌مزه اَس!" = het is lekker!'},
        {hz:'بی‌مزه',tr:'bi-maza',nl:'Flauw / Smakeloos',tip:'"این بی‌مزه اَس" = dit is smakeloos'},
        {hz:'شور',tr:'shor',nl:'Zout / Gezouten',tip:'"خیلی شور اَس" = het is te zout'},
        {hz:'شیرین',tr:'shirin',nl:'Zoet',tip:'"شیرینی" = snoep/gebak'},
        {hz:'تند',tr:'tond',nl:'Pittig / Scherp',tip:'"تند اَس، آو می‌خوام" = het is pittig, ik wil water'},
        {hz:'ناشتا',tr:'naashta',nl:'Ontbijt',tip:'Hazaragi/Afghaans: "ناشتا" — "ناشتا خوردی؟" = heb je ontbeten?'},
        {hz:'ناهار',tr:'naahaar',nl:'Lunch / Middageten',tip:'"وقت ناهار" = lunchtijd'},
        {hz:'شام',tr:'shaam',nl:'Avondeten',tip:'"وقت شام" = eettijd (avond)'},
        {hz:'تشنه',tr:'toshna',nl:'Dorstig',tip:'"تشنه هستم" = ik ben dorstig'},
        {hz:'سیر',tr:'seer',nl:'Vol / Verzadigd',tip:'"سیر شدم، تشکر" = ik ben vol, dankjewel'},
        {hz:'نمک',tr:'namak',nl:'Zout (het)',tip:'"نمک بده" = geef het zout'},
        {hz:'پختم',tr:'pakhtom',nl:'Ik heb gekookt',tip:'"مرغ پختم" = ik heb kip gemaakt'},
      ],
      sentences:[
        {hz:'این غذا خیلی خوش‌مزه اَس!',tr:'in ghazaa kheylee khosh-maza as!',nl:'Dit eten is heel erg lekker!'},
        {hz:'سیر شدم، تشکر',tr:'seer shodom, tashakor',nl:'Ik ben vol, dankjewel'},
        {hz:'تشنه هستم، آو می‌خوام',tr:'toshna hastom, aaw mi-khom',nl:'Ik ben dorstig, ik wil water'},
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
  {id:'ch0',icon:'🆘',name:'Overlevingsgids!',desc:'De allereerste basis-zinnen geleerd'},
  {id:'ch28',icon:'🔄',name:'Tegenstellingen',desc:'Hoofdstuk 28 gestart'},
  {id:'ch29',icon:'🎭',name:'Rollenspel',desc:'Echte gesprekken geoefend'},
  {id:'ch30',icon:'📖',name:'Grammatica 5',desc:'Bijwoorden & vergelijkingen geleerd'},
  {id:'ch31',icon:'👤',name:'Karakter & Persoonlijkheid',desc:'Hoofdstuk 31 gestart'},
  {id:'ch32',icon:'📚',name:'Vakken & Studie',desc:'Hoofdstuk 32 gestart'},
  {id:'ch33',icon:'🗺️',name:'Afghanistan & Geografie',desc:'Hoofdstuk 33 gestart'},
  {id:'ch34',icon:'🕯️',name:'Speciale Gelegenheden',desc:'Hoofdstuk 34 gestart'},
  {id:'ch35',icon:'🌿',name:'Spreekwoorden & Wijsheid',desc:'Hoofdstuk 35 gestart'},
  {id:'ch36',icon:'🏪',name:'Dagelijkse Diensten',desc:'Hoofdstuk 36 gestart'},
  {id:'ch37',icon:'🧘',name:'Mindset & Motivatie',desc:'Hoofdstuk 37 gestart'},
  {id:'ch38',icon:'🌺',name:'Liefde & Relaties',desc:'Hoofdstuk 38 gestart'},
  {id:'ch39',icon:'🎮',name:'Vrije Tijd & Hobby\'s',desc:'Hoofdstuk 39 gestart'},
  {id:'ch40',icon:'🌙',name:'Islamitische Uitdrukkingen',desc:'Hoofdstuk 40 gestart'},
  {id:'ch41',icon:'🗣️',name:'Conversatiestrategieën',desc:'Hoofdstuk 41 gestart'},
  {id:'ch42',icon:'🛒',name:'Winkelen & Onderhandelen',desc:'Hoofdstuk 42 gestart'},
  {id:'ch43',icon:'🌤️',name:'Weer & Klimaat',desc:'Hoofdstuk 43 gestart'},
  {id:'ch44',icon:'👶',name:'Kinderen & Opvoeding',desc:'Hoofdstuk 44 gestart'},
  {id:'ch45',icon:'🏛️',name:'Geschiedenis & Samenleving',desc:'Hoofdstuk 45 gestart'},
  {id:'ch46',icon:'🍳',name:'Koken & Afghaanse Keuken',desc:'Hoofdstuk 46 gestart'},
  {id:'ch47',icon:'🚗',name:'Vervoer & Rijden',desc:'Hoofdstuk 47 gestart'},
  {id:'ch48',icon:'🩺',name:'Bij de Dokter',desc:'Hoofdstuk 48 gestart'},
  {id:'ch49',icon:'📱',name:'Telefoon & Technologie',desc:'Hoofdstuk 49 gestart'},
  {id:'ch50',icon:'☀️',name:'Dagelijkse Routine',desc:'Hoofdstuk 50 gestart'},
  {id:'ch51',icon:'🎊',name:'Feesten & Vieringen',desc:'Hoofdstuk 51 gestart'},
  {id:'ch52',icon:'📖',name:'Grammatica 6',desc:'Vraagzinnen & tijdsuitdrukkingen geleerd'},
  {id:'ch_gram7',icon:'🔬',name:'Grammatica 7',desc:'Tijden & ezafe geleerd — bijna native!'},
  {id:'ch_eten',icon:'🍽️',name:'Eten & Drinken',desc:'Hazaragi keukenwoorden geleerd!'},
];