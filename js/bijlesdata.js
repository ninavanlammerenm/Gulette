// ══════════════════════════════════════════════════════
// BIJLES-PRESETS — verwerkte bijles-PDF's
// Elk item heeft een permanent `id` (bl{les}_w{index}) — NOOIT wijzigen of
// hergebruiken, daar hangt de voortgang aan. Tekst (hz/tr/nl/note) mag wel
// aangepast worden: bijles.js zet die wijziging door zonder voortgang te verliezen.
// ══════════════════════════════════════════════════════
const BIJLES_PRESET=[
{
  id:'bl1',
  title:'Proefles: kennismaking',
  date:'2026-09-25',
  notes:`Proefles met vier onderwerpen: groeten, jezelf voorstellen, familie en het weer.

Werkwoorduitgangen:
• -um = ik (astum, mukunum)
• -i = jij (asti, mukuni)
• -a = hij/zij/het (asta, mukuna)
• -ed = u of jullie (asted)

“is” = ast / asta
Ik heb … = (ma) … daram · Ik heb geen … = (ma) … nadaram · Nog niet = hanuz na
Wanneer: “kai” in een vraag, “waqti” in een bijzin (als/wanneer …).

Groet voor iemand die gewerkt heeft: Manda nabashid! → antwoord: Zinda bashid!

Nog navragen bij je docent: “Waqti khaba astoom” — wat betekent dit precies?`,
  items:[
    // ── Groeten ──
    {id:'bl1_w0', section:'Groeten', hz:'سلام', tr:'salaam', nl:'Hallo'},
    {id:'bl1_w1', section:'Groeten', hz:'چطور استی؟', tr:'chetor asti?', nl:'Hoe gaat het met je?', note:'Informeel: tegen vrienden en familie'},
    {id:'bl1_w2', section:'Groeten', hz:'چطور استید؟', tr:'chetor asted?', nl:'Hoe gaat het met u?', note:'Beleefd: tegen ouderen of meerdere mensen'},
    {id:'bl1_w3', section:'Groeten', hz:'خوب استی؟', tr:'khub asti?', nl:'Gaat het goed met je?'},
    {id:'bl1_w4', section:'Groeten', hz:'خوب استم، خدا را شکر', tr:'khub astum, khoda ra shukr', nl:'Het gaat goed, God zij dank'},
    {id:'bl1_w5', section:'Groeten', hz:'تو چطور استی؟', tr:'tu chetor asti?', nl:'En hoe gaat het met jou?'},
    {id:'bl1_w6', section:'Groeten', hz:'من هم خوب استم', tr:'ma ham khub astum', nl:'Met mij gaat het ook goed', note:'Snel uitgesproken klinkt “ma ham” als “mam”'},
    {id:'bl1_w7', section:'Groeten', hz:'حال تو چطوره؟', tr:'hal-e tu chetora?', nl:'Hoe is het met je?', note:'Beleefd: حال شمو چطوره؟ (hal-e shumo chetora?)'},
    {id:'bl1_w8', section:'Groeten', hz:'چه خبر؟', tr:'che khabar?', nl:'Hoe is het? / Wat is het nieuws?'},
    {id:'bl1_w9', section:'Groeten', hz:'خیر و خیریت', tr:'khair o khairiyat', nl:'Alles goed', note:'Antwoord op چه خبر؟'},
    {id:'bl1_w10', section:'Groeten', hz:'هیچی!', tr:'hichi!', nl:'Niks bijzonders!', note:'Antwoord op چه خبر؟'},
    {id:'bl1_w11', section:'Groeten', hz:'خبر خاص نیست', tr:'khabar-e khas nest', nl:'Niets bijzonders'},
    {id:'bl1_w12', section:'Groeten', hz:'همه خوب استه', tr:'hama khub asta', nl:'Alles is goed'},
    {id:'bl1_w13', section:'Groeten', hz:'مانده نباشید', tr:'manda nabashid', nl:'Goed gewerkt! (letterlijk: moge je niet moe zijn)', note:'Groet voor iemand die gewerkt heeft'},
    {id:'bl1_w14', section:'Groeten', hz:'زنده باشید', tr:'zinda bashid', nl:'Dank je (letterlijk: moge je lang leven)', note:'Vaste reactie op مانده نباشید'},
    {id:'bl1_w15', section:'Groeten', hz:'تشکر', tr:'tashakkur', nl:'Dank je'},
    {id:'bl1_w16', section:'Groeten', hz:'رحمت', tr:'rahmat', nl:'Bedankt (ander woord dan tashakkur)', note:'Betekent hetzelfde als تشکر'},
    {id:'bl1_w17', section:'Groeten', hz:'استاد', tr:'ustaad', nl:'Leraar / meester'},
    {id:'bl1_w18', section:'Groeten', hz:'جان', tr:'jaan', nl:'Lieve (achter een naam)', note:'Nina jaan = lieve Nina'},
    // ── Kennismaking ──
    {id:'bl1_w19', section:'Kennismaking', hz:'نام تو چی استه؟', tr:'naam-e tu che asta?', nl:'Hoe heet je?'},
    {id:'bl1_w20', section:'Kennismaking', hz:'نام من نینا استه', tr:'naam-e ma Nina asta', nl:'Ik heet Nina'},
    {id:'bl1_w21', section:'Kennismaking', hz:'تو از کجا استی؟', tr:'tu az kuja asti?', nl:'Waar kom je vandaan?'},
    {id:'bl1_w22', section:'Kennismaking', hz:'من از هالند استم', tr:'ma az Holland astum', nl:'Ik kom uit Nederland'},
    {id:'bl1_w23', section:'Kennismaking', hz:'کجا زندگی می‌کنی؟', tr:'kuja zendagi mukuni?', nl:'Waar woon je?'},
    {id:'bl1_w24', section:'Kennismaking', hz:'من دَ هالند زندگی می‌کنم', tr:'ma da Holland zendagi mukunum', nl:'Ik woon in Nederland', note:'In de PDF staat “dar”; in gesproken Hazaragi zeg je meestal “da”'},
    {id:'bl1_w25', section:'Kennismaking', hz:'تو کار می‌کنی یا درس می‌خوانی؟', tr:'tu kaar mukuni ya dars mukhani?', nl:'Werk je of studeer je?'},
    {id:'bl1_w26', section:'Kennismaking', hz:'من کار می‌کنم', tr:'ma kaar mukunum', nl:'Ik werk'},
    {id:'bl1_w27', section:'Kennismaking', hz:'من درس می‌خوانم', tr:'ma dars mi-khanum', nl:'Ik studeer'},
    {id:'bl1_w28', section:'Kennismaking', hz:'فکر', tr:'fekr', nl:'Gedachte / denken', note:'فکر می‌کنم = ik denk'},
    {id:'bl1_w29', section:'Kennismaking', hz:'نامزد', tr:'namzad', nl:'Verloofde'},
    // ── Familie ──
    {id:'bl1_w30', section:'Familie', hz:'آته', tr:'ata', nl:'Vader (Hazaragi-woord)', note:'Typisch Hazaragi'},
    {id:'bl1_w31', section:'Familie', hz:'پدر', tr:'pedar', nl:'Vader'},
    {id:'bl1_w32', section:'Familie', hz:'بابه', tr:'baba', nl:'Papa', note:'Ook: babai'},
    {id:'bl1_w33', section:'Familie', hz:'آیه', tr:'aya', nl:'Moeder (Hazaragi-woord)', note:'Typisch Hazaragi'},
    {id:'bl1_w34', section:'Familie', hz:'مادر', tr:'madar', nl:'Moeder'},
    {id:'bl1_w35', section:'Familie', hz:'ننه', tr:'nana', nl:'Mama', note:'Ook: nanai'},
    {id:'bl1_w36', section:'Familie', hz:'ننه و بابه', tr:'nana-baba', nl:'Ouders', note:'Je docent schreef ook “babai-ayai”. In de PDF: ata-aya'},
    {id:'bl1_w37', section:'Familie', hz:'برار', tr:'braar', nl:'Broer', note:'Ook: baradar (برادر)'},
    {id:'bl1_w38', section:'Familie', hz:'خوار', tr:'khuaar', nl:'Zus', note:'Ook: khahar (خواهر)'},
    {id:'bl1_w39', section:'Familie', hz:'شوهر', tr:'shohar', nl:'Echtgenoot', note:'In spreektaal ook: shoye'},
    {id:'bl1_w40', section:'Familie', hz:'زن', tr:'zan', nl:'Echtgenote / vrouw', note:'Ook: khatun (خاتون)'},
    {id:'bl1_w41', section:'Familie', hz:'بچه', tr:'bacha', nl:'Zoon / jongen'},
    {id:'bl1_w42', section:'Familie', hz:'دختر', tr:'dokhtar', nl:'Dochter / meisje'},
    {id:'bl1_w43', section:'Familie', hz:'فامیل', tr:'faamil', nl:'Familie (hele familiekring)'},
    {id:'bl1_w44', section:'Familie', hz:'خانواده', tr:'khanawada', nl:'Gezin / familie'},
    {id:'bl1_w45', section:'Familie', hz:'چند نفر دَ فامیل تو استه؟', tr:'chand nafar da faamil-e tu asta?', nl:'Uit hoeveel mensen bestaat je familie?'},
    {id:'bl1_w46', section:'Familie', hz:'دَ فامیل من چار نفر استه', tr:'da faamil-e ma char nafar asta', nl:'Mijn familie bestaat uit vier mensen'},
    {id:'bl1_w47', section:'Familie', hz:'تو برار یا خوار داری؟', tr:'tu braar ya khuaar dari?', nl:'Heb je broers of zussen?'},
    {id:'bl1_w48', section:'Familie', hz:'من یک برار و یک خوار دارم', tr:'ma yak braar wa yak khuaar darum', nl:'Ik heb één broer en één zus'},
    {id:'bl1_w49', section:'Familie', hz:'دارم', tr:'daram', nl:'Ik heb'},
    {id:'bl1_w50', section:'Familie', hz:'ندارم', tr:'nadaram', nl:'Ik heb geen / ik heb niet'},
    {id:'bl1_w51', section:'Familie', hz:'هنوز نه', tr:'hanuz na', nl:'Nog niet'},
    {id:'bl1_w52', section:'Familie', hz:'آته و آیه تو کجا زندگی می‌کنه؟', tr:'ata wa aya-e tu kuja zendagi mukuna?', nl:'Waar wonen je ouders?'},
    {id:'bl1_w53', section:'Familie', hz:'شوهر تو چی کار می‌کنه؟', tr:'shohar-e tu chi kaar mukuna?', nl:'Wat voor werk doet je man?'},
    // ── Weer ──
    {id:'bl1_w54', section:'Weer', hz:'آب و هوا', tr:'aab-o-hawa', nl:'Klimaat / weer'},
    {id:'bl1_w55', section:'Weer', hz:'هوا', tr:'hawa', nl:'Weer / lucht'},
    {id:'bl1_w56', section:'Weer', hz:'گرم', tr:'garm', nl:'Warm'},
    {id:'bl1_w57', section:'Weer', hz:'سرد', tr:'sard', nl:'Koud', note:'Je docent verving “yakh” (= ijs) door “sard”'},
    {id:'bl1_w58', section:'Weer', hz:'آفتابی', tr:'aftaabi', nl:'Zonnig'},
    {id:'bl1_w59', section:'Weer', hz:'ابری', tr:'abri', nl:'Bewolkt'},
    {id:'bl1_w60', section:'Weer', hz:'بارانی', tr:'baaraani', nl:'Regenachtig'},
    {id:'bl1_w61', section:'Weer', hz:'برفی', tr:'barfi', nl:'Met sneeuw'},
    {id:'bl1_w62', section:'Weer', hz:'توفانی', tr:'tufaani', nl:'Stormachtig'},
    {id:'bl1_w63', section:'Weer', hz:'آفتاب', tr:'aftaab', nl:'Zon'},
    {id:'bl1_w64', section:'Weer', hz:'باران', tr:'baaraan', nl:'Regen'},
    {id:'bl1_w65', section:'Weer', hz:'برف', tr:'barf', nl:'Sneeuw'},
    {id:'bl1_w66', section:'Weer', hz:'آسمان', tr:'aasmaan', nl:'Lucht / hemel'},
    {id:'bl1_w67', section:'Weer', hz:'خیلی گرم', tr:'kheili garm', nl:'Heel warm / heet'},
    {id:'bl1_w68', section:'Weer', hz:'خیلی سرد', tr:'kheili sard', nl:'Heel koud'},
    {id:'bl1_w69', section:'Weer', hz:'امروز', tr:'emrooz', nl:'Vandaag'},
    {id:'bl1_w70', section:'Weer', hz:'امروز هوا دَ شهر تو چطور استه؟', tr:'emrooz hawa da shahr-e tu chetor asta?', nl:'Hoe is het weer vandaag in jouw stad?'},
    {id:'bl1_w71', section:'Weer', hz:'امروز هوا یک‌کم سرد و ابری استه', tr:'emrooz hawa yak-kam sard wa abri asta', nl:'Vandaag is het een beetje koud en bewolkt'},
    {id:'bl1_w72', section:'Weer', hz:'باران هم می‌باره؟', tr:'baaraan ham mubaara?', nl:'Regent het ook?'},
    {id:'bl1_w73', section:'Weer', hz:'نه، امروز باران نمی‌باره، فقط ابری استه', tr:'ney, emrooz baaraan nemubaara, faqat abri asta', nl:'Nee, vandaag regent het niet, het is alleen bewolkt'},
    {id:'bl1_w74', section:'Weer', hz:'تو هوای گرم را خوش داری یا هوای سرد را؟', tr:'tu hawa-ye garm ra khosh dari ya hawa-ye sard ra?', nl:'Hou je van warm of van koud weer?'},
    {id:'bl1_w75', section:'Weer', hz:'من هوای آفتابی و گرم را خوش دارم', tr:'ma hawa-ye aftaabi wa garm ra khosh darum', nl:'Ik hou van zonnig en warm weer'},
    {id:'bl1_w76', section:'Weer', hz:'کی؟', tr:'kai?', nl:'Wanneer?', note:'Vraagwoord'},
    {id:'bl1_w77', section:'Weer', hz:'وقتی', tr:'waqti', nl:'Wanneer / als', note:'In een bijzin, niet in een vraag'}
  ]
},
{
  id:'bl2',
  title:'Les 2: eten, tijd en wensen',
  date:'2026-09-25',
  notes:`Eten, thee en gastvrijheid · getallen en tijd · wensen en hulp vragen.

Ik wil … = (ma) … mi-khayum · Ik wil niet … = (ma) … nami-khayum
Veel = ziad · weinig = kam · een beetje = yak-kam
Heel/erg = kheili (niet “sakht”)
Is = asta · was = bood: Emrooz hawa chetor asta? / Dirooz hawa chetor bood?
Tijd: 10:12 = da o dawazda dagha asta (dagha = minuut)
Vandaag = emrooz · morgen = farda · gisteren = dirooz
Ja (spreektaal) = aree

Huiswerk: beantwoord de 10 oefenvragen uit de PDF hardop, zonder te spieken.`,
  items:[
    {id:'bl2_w0', section:'Eten & thee', hz:'چای', tr:'chai', nl:'Thee'},
    {id:'bl2_w1', section:'Eten & thee', hz:'نان', tr:'naan', nl:'Brood / eten'},
    {id:'bl2_w2', section:'Eten & thee', hz:'آب', tr:'aab', nl:'Water'},
    {id:'bl2_w3', section:'Eten & thee', hz:'میوه', tr:'mewa', nl:'Fruit'},
    {id:'bl2_w4', section:'Eten & thee', hz:'زیاد', tr:'ziad', nl:'Veel'},
    {id:'bl2_w5', section:'Eten & thee', hz:'کم', tr:'kam', nl:'Weinig'},
    {id:'bl2_w6', section:'Eten & thee', hz:'یک‌کم', tr:'yak-kam', nl:'Een beetje'},
    {id:'bl2_w7', section:'Eten & thee', hz:'چای می‌خوری؟', tr:'chai mukhuri?', nl:'Wil je thee?'},
    {id:'bl2_w8', section:'Eten & thee', hz:'نان خوردید؟', tr:'naan khurdid?', nl:'Heb je gegeten?'},
    {id:'bl2_w9', section:'Eten & thee', hz:'آری، خوردم', tr:'aree, khurdam', nl:'Ja, ik heb gegeten'},
    {id:'bl2_w10', section:'Eten & thee', hz:'گشنه استی؟', tr:'gushna asti?', nl:'Heb je honger?'},
    {id:'bl2_w11', section:'Eten & thee', hz:'می‌خایم', tr:'mi-khayum', nl:'Ik wil', note:'(ma) … mi-khayum = ik wil …'},
    {id:'bl2_w12', section:'Eten & thee', hz:'نمی‌خایم', tr:'nami-khayum', nl:'Ik wil niet'},
    {id:'bl2_w13', section:'Eten & thee', hz:'چای می‌خایم', tr:'chai mi-khayum', nl:'Ik wil thee'},
    {id:'bl2_w14', section:'Eten & thee', hz:'آب می‌خایم', tr:'aab mi-khayum', nl:'Ik wil water'},
    {id:'bl2_w15', section:'Eten & thee', hz:'یک‌کم می‌خایم', tr:'yak-kam mi-khayum', nl:'Ik wil een beetje'},
    {id:'bl2_w16', section:'Eten & thee', hz:'بفرمایید!', tr:'be-farmaeed!', nl:'Ga je gang! / Neem wat!', note:'Als je iemand iets aanbiedt of binnenlaat'},
    {id:'bl2_w17', section:'Eten & thee', hz:'تشکر، سیر استم', tr:'tashakkur, seer astum', nl:'Dank je, ik zit vol'},
    {id:'bl2_w18', section:'Eten & thee', hz:'خیلی مزه‌دار استه!', tr:'kheili mazadar asta!', nl:'Het is heel lekker!'},
    {id:'bl2_w19', section:'Eten & thee', hz:'من یک‌کم چای می‌خایم', tr:'ma yak-kam chai mi-khayum', nl:'Ik wil graag een beetje thee'},
    {id:'bl2_w20', section:'Eten & thee', hz:'میوه هم استه، یک‌کم میوه بخور!', tr:'mewa ham asta, yak-kam mewa bukhur!', nl:'Er is ook fruit, eet een beetje fruit!'},
    {id:'bl2_w21', section:'Eten & thee', hz:'تشکر استاد! نان و میوه شما خیلی مزه‌دار استه', tr:'tashakkur ustaad! naan wa mewa-ye shuma kheili mazadar asta', nl:'Dank u, leraar! Uw eten en fruit zijn heel lekker'},
    {id:'bl2_w22', section:'Getallen', hz:'یک', tr:'yak', nl:'1 (een)'},
    {id:'bl2_w23', section:'Getallen', hz:'دو', tr:'do', nl:'2 (twee)'},
    {id:'bl2_w24', section:'Getallen', hz:'سه', tr:'se', nl:'3 (drie)'},
    {id:'bl2_w25', section:'Getallen', hz:'چار', tr:'char', nl:'4 (vier)'},
    {id:'bl2_w26', section:'Getallen', hz:'پنج', tr:'panj', nl:'5 (vijf)'},
    {id:'bl2_w27', section:'Getallen', hz:'شش', tr:'shash', nl:'6 (zes)'},
    {id:'bl2_w28', section:'Getallen', hz:'هفت', tr:'haft', nl:'7 (zeven)'},
    {id:'bl2_w29', section:'Getallen', hz:'هشت', tr:'hasht', nl:'8 (acht)'},
    {id:'bl2_w30', section:'Getallen', hz:'نه', tr:'noh', nl:'9 (negen)'},
    {id:'bl2_w31', section:'Getallen', hz:'ده', tr:'da', nl:'10 (tien)'},
    {id:'bl2_w32', section:'Getallen', hz:'یازده', tr:'yazda', nl:'11 (elf)'},
    {id:'bl2_w33', section:'Getallen', hz:'دوازده', tr:'dawazda', nl:'12 (twaalf)'},
    {id:'bl2_w34', section:'Getallen', hz:'سیزده', tr:'sizda', nl:'13 (dertien)'},
    {id:'bl2_w35', section:'Getallen', hz:'چارده', tr:'charda', nl:'14 (veertien)'},
    {id:'bl2_w36', section:'Getallen', hz:'پانزده', tr:'panzda', nl:'15 (vijftien)'},
    {id:'bl2_w37', section:'Getallen', hz:'شانزده', tr:'shanzda', nl:'16 (zestien)'},
    {id:'bl2_w38', section:'Getallen', hz:'هفده', tr:'hafda', nl:'17 (zeventien)'},
    {id:'bl2_w39', section:'Getallen', hz:'هژده', tr:'hazhda', nl:'18 (achttien)'},
    {id:'bl2_w40', section:'Getallen', hz:'نزده', tr:'nuzda', nl:'19 (negentien)'},
    {id:'bl2_w41', section:'Getallen', hz:'بیست', tr:'bist', nl:'20 (twintig)'},
    {id:'bl2_w42', section:'Tijd & dagen', hz:'ساعت', tr:'saat', nl:'Klok / uur / tijd'},
    {id:'bl2_w43', section:'Tijd & dagen', hz:'ساعت چند استه؟', tr:'saat chand asta?', nl:'Hoe laat is het?'},
    {id:'bl2_w44', section:'Tijd & dagen', hz:'ساعت چار استه', tr:'saat char asta', nl:'Het is vier uur'},
    {id:'bl2_w45', section:'Tijd & dagen', hz:'دقیقه', tr:'dagha (daghigha)', nl:'Minuut'},
    {id:'bl2_w46', section:'Tijd & dagen', hz:'ده و دوازده دقیقه استه', tr:'da o dawazda dagha asta', nl:'Het is 10:12 (twaalf over tien)'},
    {id:'bl2_w47', section:'Tijd & dagen', hz:'امروز', tr:'emrooz', nl:'Vandaag'},
    {id:'bl2_w48', section:'Tijd & dagen', hz:'فردا', tr:'farda', nl:'Morgen'},
    {id:'bl2_w49', section:'Tijd & dagen', hz:'دیروز', tr:'dirooz', nl:'Gisteren'},
    {id:'bl2_w50', section:'Tijd & dagen', hz:'امروز هوا چطور استه؟', tr:'emrooz hawa chetor asta?', nl:'Hoe is het weer vandaag?', note:'asta = is'},
    {id:'bl2_w51', section:'Tijd & dagen', hz:'دیروز هوا چطور بود؟', tr:'dirooz hawa chetor bood?', nl:'Hoe was het weer gisteren?', note:'bood = was'},
    {id:'bl2_w52', section:'Tijd & dagen', hz:'فردا وقت داری؟', tr:'farda wakht dari?', nl:'Heb je morgen tijd?'},
    {id:'bl2_w53', section:'Tijd & dagen', hz:'فردا ساعت دو وقت دارم', tr:'farda saat do wakht darum', nl:'Morgen om twee uur heb ik tijd'},
    {id:'bl2_w54', section:'Tijd & dagen', hz:'خبر داری؟', tr:'khabar dari?', nl:'Weet je het? / Ben je op de hoogte?'},
    {id:'bl2_w55', section:'Tijd & dagen', hz:'خیلی خوب!', tr:'kheili khub!', nl:'Heel goed!'},
    {id:'bl2_w56', section:'Tijd & dagen', hz:'من خیلی خوشحال استم', tr:'ma kheili khushhal astum', nl:'Ik ben heel blij'},
    {id:'bl2_w57', section:'Wensen & hulp', hz:'کمک می‌کنی؟', tr:'kumak mukuni?', nl:'Kun je helpen?'},
    {id:'bl2_w58', section:'Wensen & hulp', hz:'کمک می‌خایم', tr:'kumak mi-khayum', nl:'Ik heb hulp nodig'},
    {id:'bl2_w59', section:'Wensen & hulp', hz:'زحمت نکشید!', tr:'zahmat nakashid!', nl:'Doe geen moeite!'},
    {id:'bl2_w60', section:'Wensen & hulp', hz:'مشکل نیه', tr:'moshkel neya', nl:'Geen probleem'},
    {id:'bl2_w61', section:'Wensen & hulp', hz:'گپی نیه', tr:'gapi neya', nl:'Maakt niet uit / geen probleem'},
    {id:'bl2_w62', section:'Wensen & hulp', hz:'کار دارم', tr:'kaar darum', nl:'Ik heb werk te doen'},
    {id:'bl2_w63', section:'Wensen & hulp', hz:'نمی‌دانم', tr:'nami-danom', nl:'Ik weet het niet'},
    {id:'bl2_w64', section:'Wensen & hulp', hz:'نمی‌فهمم', tr:'nami-famum', nl:'Ik begrijp het niet'},
    {id:'bl2_w65', section:'Wensen & hulp', hz:'فکر می‌کنم', tr:'fekr mi-konam', nl:'Ik denk'},
    {id:'bl2_w66', section:'Wensen & hulp', hz:'فامیل تو چطور استه؟', tr:'famil-e tu chetor asta?', nl:'Hoe gaat het met je familie?'}
  ]
},
{
  id:'bl3',
  title:'Les 3: uiterlijk',
  date:'2026-10-04',
  notes:`Uiterlijk beschrijven: lengte en postuur, haar, ogen en gezicht, kenmerken.

Patroon: (ma) … darum = ik heb … · (oo) … daara = hij/zij heeft …
Kleur vragen: Tu che rang … daari? (moo = haar, cheshm = ogen)
moo-ye + kleur/soort: moo-ye siaah = zwart haar · cheshm-e aabi = blauwe ogen
Heel = kheili (niet “sakht”)

Schoonfamilie: khusoor = schoonvader · khoshoo / khusoor madar = schoonmoeder
Wie = ki · wie nog meer = diga ki · welke = kudam

Huiswerk: beantwoord de vier oefenvragen-sets uit de PDF hardop en speel rollenspel A, B en C met je docent (ook met de rollen omgedraaid).`,
  items:[
    {id:'bl3_w0', section:'Lengte & postuur', hz:'قد بلند', tr:'ghad-boland', nl:'Lang (van lengte)'},
    {id:'bl3_w1', section:'Lengte & postuur', hz:'قد کوتاه', tr:'ghad-kootah', nl:'Klein (van lengte)'},
    {id:'bl3_w2', section:'Lengte & postuur', hz:'قد متوسط', tr:'ghad-motevaset', nl:'Gemiddelde lengte'},
    {id:'bl3_w3', section:'Lengte & postuur', hz:'لاغر', tr:'laaghar', nl:'Dun / slank'},
    {id:'bl3_w4', section:'Lengte & postuur', hz:'چاق', tr:'chaaq', nl:'Mollig / dik'},
    {id:'bl3_w5', section:'Lengte & postuur', hz:'خوش‌اندام', tr:'khosh-andaam', nl:'Goed gebouwd / fit'},
    {id:'bl3_w6', section:'Lengte & postuur', hz:'قد تو چطور استه؟', tr:'ghad-e tu chetor asta?', nl:'Hoe lang ben je?'},
    {id:'bl3_w7', section:'Lengte & postuur', hz:'تو قد بلند استی یا قد کوتاه؟', tr:'tu ghad-boland asti ya ghad-kootah?', nl:'Ben je lang of klein?'},
    {id:'bl3_w8', section:'Lengte & postuur', hz:'من قد بلند استم', tr:'ma ghad-boland astum', nl:'Ik ben lang'},
    {id:'bl3_w9', section:'Lengte & postuur', hz:'من قد متوسط استم، نه قد بلند و نه قد کوتاه', tr:'ma ghad-motevaset astum, na ghad-boland wa na ghad-kootah', nl:'Ik ben gemiddeld lang, niet lang en niet klein'},
    {id:'bl3_w10', section:'Lengte & postuur', hz:'برار من لاغر استه', tr:'braar-e ma laaghar asta', nl:'Mijn broer is dun'},
    {id:'bl3_w11', section:'Lengte & postuur', hz:'آته من خیلی قد بلند و خوش‌اندام استه', tr:'ata-e ma kheili ghad-boland wa khosh-andaam asta', nl:'Mijn vader is heel lang en goed gebouwd'},
    {id:'bl3_w12', section:'Haar', hz:'مو', tr:'moo', nl:'Haar'},
    {id:'bl3_w13', section:'Haar', hz:'رنگ', tr:'rang', nl:'Kleur'},
    {id:'bl3_w14', section:'Haar', hz:'موی سیاه', tr:'moo-ye siaah', nl:'Zwart haar'},
    {id:'bl3_w15', section:'Haar', hz:'موی بور', tr:'moo-ye boor', nl:'Blond haar'},
    {id:'bl3_w16', section:'Haar', hz:'موی قهوه‌ای', tr:'moo-ye ghahve-i', nl:'Bruin haar'},
    {id:'bl3_w17', section:'Haar', hz:'موی بلند', tr:'moo-ye boland', nl:'Lang haar'},
    {id:'bl3_w18', section:'Haar', hz:'موی کوتاه', tr:'moo-ye kootah', nl:'Kort haar'},
    {id:'bl3_w19', section:'Haar', hz:'موی صاف', tr:'moo-ye saaf', nl:'Steil haar'},
    {id:'bl3_w20', section:'Haar', hz:'موی موج‌دار', tr:'moo-ye moj-daar', nl:'Golvend haar'},
    {id:'bl3_w21', section:'Haar', hz:'موی فری', tr:'moo-ye feri', nl:'Krullend haar', note:'Ook: koshk'},
    {id:'bl3_w22', section:'Haar', hz:'کچل', tr:'kachal', nl:'Kaal'},
    {id:'bl3_w23', section:'Haar', hz:'تو چه رنگ مو داری؟', tr:'tu che rang moo daari?', nl:'Welke kleur haar heb je?'},
    {id:'bl3_w24', section:'Haar', hz:'من موی قهوه‌ای دارم', tr:'ma moo-ye ghahve-i darum', nl:'Ik heb bruin haar'},
    {id:'bl3_w25', section:'Haar', hz:'من موی قهوه‌ای و موج‌دار دارم', tr:'ma moo-ye ghahve-i wa moj-daar darum', nl:'Ik heb bruin, golvend haar'},
    {id:'bl3_w26', section:'Haar', hz:'آیه من موی بور و صاف داره', tr:'aya-e ma moo-ye boor wa saaf daara', nl:'Mijn moeder heeft blond, steil haar'},
    {id:'bl3_w27', section:'Haar', hz:'برار من موی سیاه و کوتاه داره', tr:'braar-e ma moo-ye siaah wa kootah daara', nl:'Mijn broer heeft zwart, kort haar'},
    {id:'bl3_w28', section:'Ogen & gezicht', hz:'چشم', tr:'cheshm', nl:'Oog / ogen'},
    {id:'bl3_w29', section:'Ogen & gezicht', hz:'چشم قهوه‌ای', tr:'cheshm-e ghahve-i', nl:'Bruine ogen'},
    {id:'bl3_w30', section:'Ogen & gezicht', hz:'چشم آبی', tr:'cheshm-e aabi', nl:'Blauwe ogen'},
    {id:'bl3_w31', section:'Ogen & gezicht', hz:'چشم سبز', tr:'cheshm-e sabz', nl:'Groene ogen'},
    {id:'bl3_w32', section:'Ogen & gezicht', hz:'چشم سیاه', tr:'cheshm-e siaah', nl:'Donkere ogen'},
    {id:'bl3_w33', section:'Ogen & gezicht', hz:'صورت', tr:'soorat', nl:'Gezicht'},
    {id:'bl3_w34', section:'Ogen & gezicht', hz:'صورت گرد', tr:'soorat-e gerd', nl:'Rond gezicht'},
    {id:'bl3_w35', section:'Ogen & gezicht', hz:'صورت کشیده', tr:'soorat-e keshide', nl:'Ovaal / lang gezicht'},
    {id:'bl3_w36', section:'Ogen & gezicht', hz:'پوست', tr:'poost', nl:'Huid'},
    {id:'bl3_w37', section:'Ogen & gezicht', hz:'پوست روشن', tr:'poost-e rooshan', nl:'Lichte huid'},
    {id:'bl3_w38', section:'Ogen & gezicht', hz:'پوست گندم‌گون', tr:'poost-e gandum-gun', nl:'Getinte huid', note:'Letterlijk: tarwekleurig'},
    {id:'bl3_w39', section:'Ogen & gezicht', hz:'تو چه رنگ چشم داری؟', tr:'tu che rang cheshm daari?', nl:'Welke kleur ogen heb je?'},
    {id:'bl3_w40', section:'Ogen & gezicht', hz:'من چشم آبی دارم', tr:'ma cheshm-e aabi darum', nl:'Ik heb blauwe ogen'},
    {id:'bl3_w41', section:'Ogen & gezicht', hz:'صورت من گرد استه', tr:'soorat-e ma gerd asta', nl:'Mijn gezicht is rond'},
    {id:'bl3_w42', section:'Ogen & gezicht', hz:'شبیه', tr:'shabi', nl:'Lijkend op'},
    {id:'bl3_w43', section:'Ogen & gezicht', hz:'همه می‌گن، من شبیه مادرم استم', tr:'hama mugan, ma shabi-ye madaram astum', nl:'Iedereen zegt dat ik op mijn moeder lijk'},
    {id:'bl3_w44', section:'Uiterlijk', hz:'زیبا', tr:'ziba', nl:'Mooi'},
    {id:'bl3_w45', section:'Uiterlijk', hz:'مقبول', tr:'maqbool', nl:'Knap / aantrekkelijk', note:'Ook: khosh-shakl'},
    {id:'bl3_w46', section:'Uiterlijk', hz:'خوش‌تیپ', tr:'khosh-tip', nl:'Stijlvol / goed gekleed'},
    {id:'bl3_w47', section:'Uiterlijk', hz:'خوش‌خنده', tr:'khosh-khanda', nl:'Vrolijk / lacht graag'},
    {id:'bl3_w48', section:'Uiterlijk', hz:'عینکی', tr:'aynaki', nl:'Met bril'},
    {id:'bl3_w49', section:'Uiterlijk', hz:'ریش‌دار', tr:'reesh-daar', nl:'Met baard'},
    {id:'bl3_w50', section:'Uiterlijk', hz:'جوان', tr:'jawan', nl:'Jong'},
    {id:'bl3_w51', section:'Uiterlijk', hz:'پیر', tr:'peer', nl:'Oud (van een persoon)'},
    {id:'bl3_w52', section:'Uiterlijk', hz:'مهربان', tr:'mehrabaan', nl:'Lief / vriendelijk'},
    {id:'bl3_w53', section:'Uiterlijk', hz:'نادر', tr:'nader', nl:'Zeldzaam'},
    {id:'bl3_w54', section:'Uiterlijk', hz:'شوهر تو عینکی استه؟', tr:'shohar-e tu aynaki asta?', nl:'Draagt je man een bril?'},
    {id:'bl3_w55', section:'Uiterlijk', hz:'بله، او عینکی استه', tr:'bale, oo aynaki asta', nl:'Ja, hij draagt een bril'},
    {id:'bl3_w56', section:'Uiterlijk', hz:'او همیشه خوش‌خنده استه', tr:'oo hamesha khosh-khanda asta', nl:'Hij/zij lacht altijd'},
    {id:'bl3_w57', section:'Mensen & vragen', hz:'کی', tr:'ki', nl:'Wie?', note:'Zelfde letters als kai (wanneer), andere uitspraak'},
    {id:'bl3_w58', section:'Mensen & vragen', hz:'دیگه کی؟', tr:'diga ki?', nl:'Wie nog meer?'},
    {id:'bl3_w59', section:'Mensen & vragen', hz:'کدام', tr:'kudam', nl:'Welke'},
    {id:'bl3_w60', section:'Mensen & vragen', hz:'همه', tr:'hama', nl:'Iedereen / alles'},
    {id:'bl3_w61', section:'Mensen & vragen', hz:'خسر', tr:'khusoor', nl:'Schoonvader'},
    {id:'bl3_w62', section:'Mensen & vragen', hz:'خشو', tr:'khoshoo', nl:'Schoonmoeder', note:'Ook: khusoor madar'},
    {id:'bl3_w63', section:'Mensen & vragen', hz:'دوست پسر', tr:'dust pesar', nl:'Vriend (relatie)', note:'Mijn vriend = dust pesar-am'},
    {id:'bl3_w64', section:'Mensen & vragen', hz:'رفیق', tr:'rafeeq', nl:'Vriend / vriendin'},
    {id:'bl3_w65', section:'Mensen & vragen', hz:'پسر', tr:'pesar', nl:'Jongen'},
    {id:'bl3_w66', section:'Mensen & vragen', hz:'آفرین!', tr:'aafarin!', nl:'Goed zo!'},
    {id:'bl3_w67', section:'Mensen & vragen', hz:'دقیق استه', tr:'daqeeq asta', nl:'Precies / dat klopt'},
    {id:'bl3_w68', section:'Mensen & vragen', hz:'گم شده', tr:'gum shuda', nl:'Verdwaald / kwijt'}
  ]
}
];
