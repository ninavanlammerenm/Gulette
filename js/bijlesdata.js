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

“Waqti khaba astoom” is waarschijnlijk een typfout voor “waqti (da) khana astum” = als ik thuis ben (de b en n liggen naast elkaar op het toetsenbord).`,
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
},
{
  id:'bl4',
  title:'Les 4: tijd, dagen en planning',
  date:'2026-10-07',
  notes:`Tijd, dagen van de week en planning.

Hoe laat? Saat chand (baja) asta? → saat char-e baja asta = het is vier uur
Half = nim · 2:30 = do wa nim of do o si
Kwart over drie = se o panzda · kwart voor vijf = panzda kam panj
Minuten: da daqiqa kam do = tien voor twee · panj daqiqa tir shuda = vijf over

Hebben: emrooz … darum (vandaag heb ik) · farda … darum (morgen heb ik) · dirooz … dashtum (gisteren had ik)
Ik wil = mi-khaam (ook: mi-khayum) · Ik ben blij = khoshum / khosh-halum
Shanba (zaterdag) is de eerste dag van de Afghaanse week; juma (vrijdag) is de familiedag.

Huiswerk: beantwoord de drie sets oefenvragen hardop en oefen dialoog A, B en C met je docent (ook met de rollen omgedraaid).`,
  items:[
    {id:'bl4_w0', section:'Hoe laat is het?', hz:'ساعت چند بجه استه؟', tr:'saat chand baja asta?', nl:'Hoe laat is het nu?'},
    {id:'bl4_w1', section:'Hoe laat is het?', hz:'بجه', tr:'baja', nl:'Uur (bij het noemen van de tijd)', note:'saat char-e baja = vier uur'},
    {id:'bl4_w2', section:'Hoe laat is het?', hz:'ساعت چار بجه استه', tr:'saat char-e baja asta', nl:'Het is vier uur (met baja)'},
    {id:'bl4_w3', section:'Hoe laat is het?', hz:'نیم', tr:'nim', nl:'Half'},
    {id:'bl4_w4', section:'Hoe laat is het?', hz:'ساعت دو و نیم استه', tr:'saat do wa nim asta', nl:'Het is half drie (2:30)', note:'Ook: do o si (twee en dertig)'},
    {id:'bl4_w5', section:'Hoe laat is het?', hz:'دو و سی', tr:'do o si', nl:'2:30 (twee en dertig)'},
    {id:'bl4_w6', section:'Hoe laat is het?', hz:'ساعت سه و پانزده استه', tr:'saat se o panzda asta', nl:'Het is kwart over drie (3:15)'},
    {id:'bl4_w7', section:'Hoe laat is het?', hz:'پانزده کم پنج استه', tr:'panzda kam panj asta', nl:'Het is kwart voor vijf (4:45)'},
    {id:'bl4_w8', section:'Hoe laat is het?', hz:'ده دقیقه کم دو استه', tr:'da daqiqa kam do asta', nl:'Het is tien voor twee (1:50)'},
    {id:'bl4_w9', section:'Hoe laat is het?', hz:'پنج دقیقه تیر شده', tr:'panj daqiqa tir shuda', nl:'Het is vijf over (vijf minuten voorbij)'},
    {id:'bl4_w10', section:'Hoe laat is het?', hz:'تیر شده', tr:'tir shuda', nl:'Voorbij / over (bij de tijd)'},
    {id:'bl4_w11', section:'Hoe laat is het?', hz:'صبح', tr:'subh', nl:'Ochtend', note:'Ook: sabh'},
    {id:'bl4_w12', section:'Hoe laat is het?', hz:'چاشت', tr:'chasht', nl:'Middag (rond twaalf uur)', note:'Ook: zohr'},
    {id:'bl4_w13', section:'Hoe laat is het?', hz:'پیشین', tr:'peshin', nl:'Namiddag', note:'Ook: bad az chasht'},
    {id:'bl4_w14', section:'Hoe laat is het?', hz:'شب', tr:'shab', nl:'Avond / nacht', note:'Ook: shaw'},
    {id:'bl4_w15', section:'Hoe laat is het?', hz:'وقت چای استه!', tr:'wakht-e chai asta!', nl:'Het is theetijd!'},
    {id:'bl4_w16', section:'Hoe laat is het?', hz:'تشکر استاد، یک‌کم چای گرم می‌خوام', tr:'tashakkur ustaad, yak-kam chai-ye garm mi-khaam', nl:'Dank u, ik wil graag een beetje warme thee', note:'mi-khaam = ik wil (ook: mi-khayum)'},
    {id:'bl4_w17', section:'Dagen van de week', hz:'روز', tr:'roz', nl:'Dag'},
    {id:'bl4_w18', section:'Dagen van de week', hz:'هفته', tr:'hafta', nl:'Week'},
    {id:'bl4_w19', section:'Dagen van de week', hz:'شنبه', tr:'shanba', nl:'Zaterdag', note:'Eerste dag van de Afghaanse week'},
    {id:'bl4_w20', section:'Dagen van de week', hz:'یکشنبه', tr:'yak-shanba', nl:'Zondag'},
    {id:'bl4_w21', section:'Dagen van de week', hz:'دوشنبه', tr:'do-shanba', nl:'Maandag'},
    {id:'bl4_w22', section:'Dagen van de week', hz:'سه‌شنبه', tr:'se-shanba', nl:'Dinsdag'},
    {id:'bl4_w23', section:'Dagen van de week', hz:'چارشنبه', tr:'char-shanba', nl:'Woensdag'},
    {id:'bl4_w24', section:'Dagen van de week', hz:'پنجشنبه', tr:'panj-shanba', nl:'Donderdag'},
    {id:'bl4_w25', section:'Dagen van de week', hz:'جمعه', tr:'juma', nl:'Vrijdag', note:'Weekend en familiedag'},
    {id:'bl4_w26', section:'Dagen van de week', hz:'پس‌فردا', tr:'pas-farda', nl:'Overmorgen'},
    {id:'bl4_w27', section:'Dagen van de week', hz:'پری دیروز', tr:'pari-dirooz', nl:'Eergisteren'},
    {id:'bl4_w28', section:'Dagen van de week', hz:'این هفته', tr:'in hafta', nl:'Deze week'},
    {id:'bl4_w29', section:'Dagen van de week', hz:'هفته بعدی', tr:'hafta-ye badi', nl:'Volgende week'},
    {id:'bl4_w30', section:'Dagen van de week', hz:'امروز چه روز استه؟', tr:'emrooz che roz asta?', nl:'Welke dag is het vandaag?'},
    {id:'bl4_w31', section:'Dagen van de week', hz:'امروز دوشنبه استه', tr:'emrooz do-shanba asta', nl:'Vandaag is het maandag'},
    {id:'bl4_w32', section:'Dagen van de week', hz:'فردا سه‌شنبه استه', tr:'farda se-shanba asta', nl:'Morgen is het dinsdag'},
    {id:'bl4_w33', section:'Dagen van de week', hz:'جمعه ساعت پنج می‌ریم خانه فامیل', tr:'juma saat-e panj murem khana-ye faamil', nl:'Vrijdag om vijf uur gaan we naar de familie'},
    {id:'bl4_w34', section:'Dagen van de week', hz:'خوب استه! جمعه فامیل را می‌بینم، خیلی خوشحالم', tr:'khub asta! juma faamil ra mubinum, kheili khosh-halum', nl:'Fijn! Vrijdag zie ik de familie, ik ben heel blij'},
    {id:'bl4_w35', section:'Dagen van de week', hz:'خوشم', tr:'khoshum', nl:'Ik ben blij', note:'Ook: khosh-halum'},
    {id:'bl4_w36', section:'Dagen van de week', hz:'مکتب', tr:'maktab', nl:'School'},
    {id:'bl4_w37', section:'Dagen van de week', hz:'هیچ کار نمی‌کنم', tr:'hich kaar nami-konam', nl:'Ik doe niets'},
    {id:'bl4_w38', section:'Dagen van de week', hz:'امروز وقت دارم', tr:'emrooz wakht darum', nl:'Vandaag heb ik tijd'},
    {id:'bl4_w39', section:'Dagen van de week', hz:'فردا کار دارم', tr:'farda kaar darum', nl:'Morgen heb ik werk'},
    {id:'bl4_w40', section:'Dagen van de week', hz:'دیروز وقت داشتم', tr:'dirooz wakht dashtum', nl:'Gisteren had ik tijd', note:'dashtum = ik had'},
    {id:'bl4_w41', section:'Planning & tijdsduur', hz:'از … تا …', tr:'az … ta …', nl:'Van … tot …'},
    {id:'bl4_w42', section:'Planning & tijdsduur', hz:'چند ساعت؟', tr:'chand saat?', nl:'Hoeveel uur?'},
    {id:'bl4_w43', section:'Planning & tijdsduur', hz:'یک ساعت', tr:'yak saat', nl:'Eén uur (tijdsduur)'},
    {id:'bl4_w44', section:'Planning & tijdsduur', hz:'دو ساعت', tr:'do saat', nl:'Twee uur (tijdsduur)'},
    {id:'bl4_w45', section:'Planning & tijdsduur', hz:'خیلی وقت', tr:'kheili wakht', nl:'Lange tijd / veel tijd'},
    {id:'bl4_w46', section:'Planning & tijdsduur', hz:'وقت دارم', tr:'wakht darum', nl:'Ik heb tijd'},
    {id:'bl4_w47', section:'Planning & tijdsduur', hz:'وقت ندارم', tr:'wakht nadarum', nl:'Ik heb geen tijd'},
    {id:'bl4_w48', section:'Planning & tijdsduur', hz:'از ساعت هشت تا چار', tr:'az saat-e hasht ta char', nl:'Van acht tot vier uur'},
    {id:'bl4_w49', section:'Planning & tijdsduur', hz:'ساعت چند می‌ریم؟', tr:'saat-e chand murem?', nl:'Hoe laat gaan we?'},
    {id:'bl4_w50', section:'Planning & tijdsduur', hz:'از ساعت چند تا ساعت چند کار می‌کنی؟', tr:'az saat-e chand ta saat-e chand kaar mukuni?', nl:'Van hoe laat tot hoe laat werk je?'},
    {id:'bl4_w51', section:'Planning & tijdsduur', hz:'من از ساعت هشت صبح تا ساعت چار پیشین کار می‌کنم', tr:'ma az saat-e hasht-e subh ta saat-e char-e peshin kaar mukunum', nl:'Ik werk van acht uur in de ochtend tot vier uur in de middag'},
    {id:'bl4_w52', section:'Planning & tijdsduur', hz:'چند ساعت کار می‌کنی؟', tr:'chand saat kaar mukuni?', nl:'Hoeveel uur werk je?'},
    {id:'bl4_w53', section:'Planning & tijdsduur', hz:'بعد از کار', tr:'bad az kaar', nl:'Na het werk'},
    {id:'bl4_w54', section:'Planning & tijdsduur', hz:'چه برنامه استه؟', tr:'che programa asta?', nl:'Wat is het plan?'},
    {id:'bl4_w55', section:'Planning & tijdsduur', hz:'تیار', tr:'tayar', nl:'Klaar / gereed'},
    {id:'bl4_w56', section:'Dagritme', hz:'هر روز', tr:'har roz', nl:'Elke dag'},
    {id:'bl4_w57', section:'Dagritme', hz:'از خواب بیدار می‌شم', tr:'az khwab bedar mi-shum', nl:'Ik word wakker', note:'mi-shum: de klinker na de m spreek je nauwelijks uit (klinkt als m’shum)'},
    {id:'bl4_w58', section:'Dagritme', hz:'من هر روز ساعت هفت صبح از خواب بیدار می‌شم', tr:'ma har roz saat-e haft-e subh az khwab bedar mi-shum', nl:'Ik word elke dag om zeven uur wakker'},
    {id:'bl4_w59', section:'Dagritme', hz:'صبحانه', tr:'sobhana', nl:'Ontbijt'},
    {id:'bl4_w60', section:'Dagritme', hz:'نان پیشین', tr:'naan-e peshin', nl:'Lunch'},
    {id:'bl4_w61', section:'Dagritme', hz:'کار من خلاص می‌شه', tr:'kaar-e ma khalas mi-sha', nl:'Mijn werk is klaar'},
    {id:'bl4_w62', section:'Dagritme', hz:'مرکز خرید', tr:'markaz-e kharid', nl:'Winkelcentrum'},
    {id:'bl4_w63', section:'Dagritme', hz:'خوش بگذره!', tr:'khosh bogzara!', nl:'Veel plezier!'}
  ]
},
{
  id:'bl5',
  title:'Les 5: dagelijkse routine',
  date:'2026-10-10',
  notes:`Dagelijkse routine (ochtend, werk, avond) en het werkwoord zijn.

Zinsvolgorde: onderwerp + rest + werkwoord — het werkwoord staat altijd achteraan.
Ma khoshhal astum = ik ben blij · Dirooz ma da kaar budum = gisteren was ik op het werk

Zijn (nu): ma astum · tu asti · oo asta · mo astem · shuma asted · ona astan
Zijn (verleden): ma budum · tu budi · oo bud · mo budim · shuma budin · ona budan

Voor = qabl az · na = bad az · daarna = bad · meestal = mamullan
Met mi-: mi-shoyam (ik was) · mi-khurum (ik eet) · mi-binum (ik kijk) · mi-shum (ik word)
Bij mi-shum / mi-sha spreek je de klinker na de m nauwelijks uit: het klinkt als m’shum / m’sha.
In/op = da (niet dar): da khana = thuis · da kaar = op het werk

Huiswerk: beantwoord de zes oefenvragen en vertel je eigen dagritme (dialoog A en B).`,
  items:[
    {id:'bl5_w0', section:'Ochtend', hz:'بیدار می‌شم', tr:'bedar mi-shum', nl:'Ik word wakker (korte vorm)'},
    {id:'bl5_w1', section:'Ochtend', hz:'ساعت چند از خواب بیدار می‌شی؟', tr:'saat-e chand az khwab bedar mi-shi?', nl:'Hoe laat word je wakker?'},
    {id:'bl5_w2', section:'Ochtend', hz:'دندان', tr:'dandan', nl:'Tand / tanden'},
    {id:'bl5_w3', section:'Ochtend', hz:'صورت و دندان خود را می‌شویم', tr:'soorat wa dandan-e khud ra mi-shoyam', nl:'Ik was mijn gezicht en poets mijn tanden'},
    {id:'bl5_w4', section:'Ochtend', hz:'نان صبح', tr:'naan-e subh', nl:'Ochtendmaaltijd'},
    {id:'bl5_w5', section:'Ochtend', hz:'چای و نان صبح می‌خورم', tr:'chai wa naan-e subh mi-khurum', nl:'Ik drink thee en eet mijn ontbijt'},
    {id:'bl5_w6', section:'Ochtend', hz:'پنیر', tr:'paneer', nl:'Kaas'},
    {id:'bl5_w7', section:'Ochtend', hz:'من چای گرم، پنیر و نان می‌خورم', tr:'ma chai-ye garm, paneer wa naan mi-khurum', nl:'Ik drink warme thee en eet kaas en brood'},
    {id:'bl5_w8', section:'Ochtend', hz:'تیار می‌شم', tr:'tayar mi-shum', nl:'Ik maak me klaar'},
    {id:'bl5_w9', section:'Ochtend', hz:'از خانه بیرون می‌شم', tr:'az khana berun mi-shum', nl:'Ik ga de deur uit'},
    {id:'bl5_w10', section:'Ochtend', hz:'قبل از', tr:'qabl az', nl:'Voor (in tijd)'},
    {id:'bl5_w11', section:'Ochtend', hz:'بعد از', tr:'bad az', nl:'Na (in tijd)'},
    {id:'bl5_w12', section:'Ochtend', hz:'بعد', tr:'bad', nl:'Daarna / volgende'},
    {id:'bl5_w13', section:'Werk & lunch', hz:'از ساعت هشت تا چار کار می‌کنم', tr:'az saat-e hasht ta char kaar mukunum', nl:'Ik werk van acht tot vier'},
    {id:'bl5_w14', section:'Werk & lunch', hz:'نان چاشت', tr:'naan-e chasht', nl:'Middageten'},
    {id:'bl5_w15', section:'Werk & lunch', hz:'همراه', tr:'hamra-ye', nl:'Met (samen met)'},
    {id:'bl5_w16', section:'Werk & lunch', hz:'همکار', tr:'hamkaar', nl:'Collega'},
    {id:'bl5_w17', section:'Werk & lunch', hz:'همراه همکارها نان می‌خورم', tr:'hamra-ye hamkaar-ho naan mi-khurum', nl:'Ik eet samen met mijn collega’s'},
    {id:'bl5_w18', section:'Werk & lunch', hz:'کار تو ساعت چند خلاص می‌شه؟', tr:'kaar-e tu saat-e chand khalas mi-sha?', nl:'Hoe laat is jouw werk klaar?'},
    {id:'bl5_w19', section:'Werk & lunch', hz:'خانه می‌آیم', tr:'khana mi-yum', nl:'Ik kom thuis'},
    {id:'bl5_w20', section:'Werk & lunch', hz:'ساعت چند خانه می‌آیی؟', tr:'saat-e chand khana mi-yayi?', nl:'Hoe laat kom je thuis?'},
    {id:'bl5_w21', section:'Werk & lunch', hz:'دیروز من دَ کار بودم', tr:'dirooz ma da kaar budum', nl:'Gisteren was ik op het werk'},
    {id:'bl5_w22', section:'Werk & lunch', hz:'فرق نمی‌کنه', tr:'farq nami-kuna', nl:'Maakt niet uit / kan me niet schelen'},
    {id:'bl5_w23', section:'Avond & weekend', hz:'نان شب', tr:'naan-e shab', nl:'Avondeten'},
    {id:'bl5_w24', section:'Avond & weekend', hz:'همراه فامیل نان می‌خوریم', tr:'hamra-ye faamil naan mi-khurem', nl:'We eten samen met de familie'},
    {id:'bl5_w25', section:'Avond & weekend', hz:'تی‌وی می‌بینم', tr:'TV mi-binum', nl:'Ik kijk tv'},
    {id:'bl5_w26', section:'Avond & weekend', hz:'کتاب می‌خوانم', tr:'kitab mi-khanum', nl:'Ik lees een boek'},
    {id:'bl5_w27', section:'Avond & weekend', hz:'همراه فامیل گپ می‌زنیم', tr:'hamra-ye faamil gap mi-zanem', nl:'We praten met de familie', note:'gap = praatje / gesprek'},
    {id:'bl5_w28', section:'Avond & weekend', hz:'خواب می‌شم', tr:'khwab mi-shum', nl:'Ik ga slapen'},
    {id:'bl5_w29', section:'Avond & weekend', hz:'معمولاً', tr:'mamullan', nl:'Meestal / gewoonlijk'},
    {id:'bl5_w30', section:'Avond & weekend', hz:'من معمولاً ساعت ده یا یازده شب خواب می‌شم', tr:'ma mamullan saat-e da ya yazda-e shab khwab mi-shum', nl:'Ik ga meestal om tien of elf uur slapen'},
    {id:'bl5_w31', section:'Avond & weekend', hz:'پیش از خواب چه می‌کنی؟', tr:'pesh az khwab che mukuni?', nl:'Wat doe je voor het slapen?'},
    {id:'bl5_w32', section:'Avond & weekend', hz:'آخر هفته', tr:'aakhir-e hafta', nl:'Weekend'},
    {id:'bl5_w33', section:'Zijn: nu en verleden', hz:'من دَ خانه استم', tr:'ma da khana astum', nl:'Ik ben thuis'},
    {id:'bl5_w34', section:'Zijn: nu en verleden', hz:'تو خوشحال استی', tr:'tu khoshhal asti', nl:'Jij bent blij'},
    {id:'bl5_w35', section:'Zijn: nu en verleden', hz:'او دَ کار استه', tr:'oo da kaar asta', nl:'Hij/zij is op het werk'},
    {id:'bl5_w36', section:'Zijn: nu en verleden', hz:'مو تیار استیم', tr:'mo tayar astem', nl:'Wij zijn klaar'},
    {id:'bl5_w37', section:'Zijn: nu en verleden', hz:'شما خوب استید', tr:'shuma khub asted', nl:'Het gaat goed met u / jullie'},
    {id:'bl5_w38', section:'Zijn: nu en verleden', hz:'اونا', tr:'ona', nl:'Zij (meervoud)'},
    {id:'bl5_w39', section:'Zijn: nu en verleden', hz:'اونا دَ شهر استن', tr:'ona da shahr astan', nl:'Zij zijn in de stad'},
    {id:'bl5_w40', section:'Zijn: nu en verleden', hz:'دیروز من دَ خانه بودم', tr:'dirooz ma da khana budum', nl:'Gisteren was ik thuis'},
    {id:'bl5_w41', section:'Zijn: nu en verleden', hz:'تو دیروز خسته بودی', tr:'tu dirooz khasta budi', nl:'Jij was gisteren moe'},
    {id:'bl5_w42', section:'Zijn: nu en verleden', hz:'او دیروز دَ دفتر بود', tr:'oo dirooz da daftar bud', nl:'Hij/zij was gisteren op kantoor'},
    {id:'bl5_w43', section:'Zijn: nu en verleden', hz:'دیروز مو دَ مهمانی بودیم', tr:'dirooz mo da mehmani budim', nl:'Gisteren waren we op een feest'},
    {id:'bl5_w44', section:'Zijn: nu en verleden', hz:'شما دیروز تیار بودین', tr:'shuma dirooz tayar budin', nl:'Jullie waren gisteren klaar'},
    {id:'bl5_w45', section:'Zijn: nu en verleden', hz:'اونا دیروز دَ شهر بودن', tr:'ona dirooz da shahr budan', nl:'Zij waren gisteren in de stad'}
  ]
}
];
