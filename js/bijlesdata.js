// ══════════════════════════════════════════════════════
// BIJLES-PRESETS — verwerkte bijles-PDF's
// Elk item heeft een permanent `id` (bl{les}_w{index}) — NOOIT wijzigen of
// hergebruiken, daar hangt de voortgang aan. Tekst (hz/tr/nl/note) mag wel
// aangepast worden: bijles.js zet die wijziging door zonder voortgang te verliezen.
// ══════════════════════════════════════════════════════
// Items die uit een bijles zijn gehaald — ids nooit hergebruiken
const BIJLES_RETIRED=['bl4_w16'];
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
},
{
  id:'bl6',
  title:'Les 6: thuis en kamers',
  date:'2026-10-20',
  notes:`Je huis beschrijven, meubels en waar iets staat, en gasten ontvangen.

Groot = kalaan / buzurg · klein = khurd / kuchak · hoog = buland · hoeveel = chand
Open = baaz · dicht = basta · verdieping = tabagha · boven = tabagh-e bala
Waar staat het? rooye (op) · zir-e (onder) · pesh-e (voor) · pusht-e (achter) · paloo-ye (naast) · gusha-e (in de hoek van)
Zitkamer = otagh-e nesheman · plafond = saghf · bed = takht · knus = danj

Huiswerk: geef een rondleiding door je huis (dialoog A) en oefen het ontvangen van gasten (dialoog B).`,
  items:[
    {id:'bl6_w0', section:'Huis & kamers', hz:'خانه', tr:'khana', nl:'Huis / thuis'},
    {id:'bl6_w1', section:'Huis & kamers', hz:'اتاق', tr:'otagh', nl:'Kamer'},
    {id:'bl6_w2', section:'Huis & kamers', hz:'اتاق خواب', tr:'otagh-e khwab', nl:'Slaapkamer'},
    {id:'bl6_w3', section:'Huis & kamers', hz:'اتاق مهمان', tr:'otagh-e mehmaan', nl:'Gastenkamer / woonkamer'},
    {id:'bl6_w4', section:'Huis & kamers', hz:'اتاق نشیمن', tr:'otagh-e nesheman', nl:'Zitkamer'},
    {id:'bl6_w5', section:'Huis & kamers', hz:'آشپزخانه', tr:'ashpaz-khana', nl:'Keuken'},
    {id:'bl6_w6', section:'Huis & kamers', hz:'تشناب', tr:'tashnaab', nl:'Badkamer / toilet', note:'Ook: hammam'},
    {id:'bl6_w7', section:'Huis & kamers', hz:'باغچه', tr:'baghcha', nl:'Tuin'},
    {id:'bl6_w8', section:'Huis & kamers', hz:'حیاط', tr:'hayat', nl:'Binnenplaats / erf'},
    {id:'bl6_w9', section:'Huis & kamers', hz:'بام', tr:'baam', nl:'Dak'},
    {id:'bl6_w10', section:'Huis & kamers', hz:'سقف', tr:'saghf', nl:'Plafond'},
    {id:'bl6_w11', section:'Huis & kamers', hz:'دروازه', tr:'darwaza', nl:'Deur / poort', note:'Ook: dar'},
    {id:'bl6_w12', section:'Huis & kamers', hz:'کلکین', tr:'kalkin', nl:'Raam', note:'Ook: panjara'},
    {id:'bl6_w13', section:'Huis & kamers', hz:'طبقه', tr:'tabagha', nl:'Verdieping'},
    {id:'bl6_w14', section:'Huis & kamers', hz:'طبقه بالا', tr:'tabagh-e bala', nl:'Bovenverdieping'},
    {id:'bl6_w15', section:'Huis & kamers', hz:'کلان', tr:'kalaan', nl:'Groot', note:'Ook: buzurg'},
    {id:'bl6_w16', section:'Huis & kamers', hz:'خورد', tr:'khurd', nl:'Klein', note:'Ook: kuchak'},
    {id:'bl6_w17', section:'Huis & kamers', hz:'بلند', tr:'buland', nl:'Hoog'},
    {id:'bl6_w18', section:'Huis & kamers', hz:'باز', tr:'baaz', nl:'Open'},
    {id:'bl6_w19', section:'Huis & kamers', hz:'بسته', tr:'basta', nl:'Dicht / gesloten'},
    {id:'bl6_w20', section:'Huis & kamers', hz:'چند', tr:'chand', nl:'Hoeveel'},
    {id:'bl6_w21', section:'Huis & kamers', hz:'درخت', tr:'derakht', nl:'Boom'},
    {id:'bl6_w22', section:'Huis & kamers', hz:'خانه تو چطور استه؟ کلان استه یا خورد؟', tr:'khana-ye tu chetor asta? kalaan asta ya khurd?', nl:'Hoe is je huis? Is het groot of klein?'},
    {id:'bl6_w23', section:'Huis & kamers', hz:'خانه من یک‌کم کلان و خیلی مقبول استه', tr:'khana-ye ma yak-kam kalaan wa kheili maqbool asta', nl:'Mijn huis is vrij groot en heel mooi'},
    {id:'bl6_w24', section:'Huis & kamers', hz:'خانه تو چند اتاق خواب داره؟', tr:'khana-ye tu chand otagh-e khwab daara?', nl:'Hoeveel slaapkamers heeft je huis?'},
    {id:'bl6_w25', section:'Huis & kamers', hz:'خانه من سه اتاق خواب و دو تشناب داره', tr:'khana-ye ma se otagh-e khwab wa do tashnaab daara', nl:'Mijn huis heeft drie slaapkamers en twee badkamers'},
    {id:'bl6_w26', section:'Huis & kamers', hz:'من یک باغچه خورد و مقبول هم دارم', tr:'ma yak baghcha-ye khurd wa maqbool ham darum', nl:'Ik heb ook een kleine, mooie tuin'},
    {id:'bl6_w27', section:'Huis & kamers', hz:'خانه من دَ طبقه دوم استه', tr:'khana-ye ma da tabagha-ye dowum asta', nl:'Mijn huis is op de tweede verdieping'},
    {id:'bl6_w28', section:'Meubels & waar iets staat', hz:'روی', tr:'rooye', nl:'Op (bovenop)', note:'Ook: bala-ye'},
    {id:'bl6_w29', section:'Meubels & waar iets staat', hz:'زیر', tr:'zir-e', nl:'Onder'},
    {id:'bl6_w30', section:'Meubels & waar iets staat', hz:'پیش', tr:'pesh-e', nl:'Voor (vóór iets)'},
    {id:'bl6_w31', section:'Meubels & waar iets staat', hz:'پشت', tr:'pusht-e', nl:'Achter'},
    {id:'bl6_w32', section:'Meubels & waar iets staat', hz:'پهلوی', tr:'paloo-ye', nl:'Naast', note:'Ook: kenaar-e'},
    {id:'bl6_w33', section:'Meubels & waar iets staat', hz:'میان', tr:'miyan-e', nl:'Tussen / in het midden'},
    {id:'bl6_w34', section:'Meubels & waar iets staat', hz:'گوشه', tr:'gusha-e', nl:'In de hoek van'},
    {id:'bl6_w35', section:'Meubels & waar iets staat', hz:'میز', tr:'mez', nl:'Tafel'},
    {id:'bl6_w36', section:'Meubels & waar iets staat', hz:'چوکی', tr:'chawkai', nl:'Stoel', note:'Ook: sanli'},
    {id:'bl6_w37', section:'Meubels & waar iets staat', hz:'کوپ', tr:'kope', nl:'Bank (om op te zitten)'},
    {id:'bl6_w38', section:'Meubels & waar iets staat', hz:'تخت', tr:'takht', nl:'Bed'},
    {id:'bl6_w39', section:'Meubels & waar iets staat', hz:'گلیم', tr:'gilaam', nl:'Kleed / tapijt', note:'Ook: farsh'},
    {id:'bl6_w40', section:'Meubels & waar iets staat', hz:'بخاری', tr:'bukhari', nl:'Kachel'},
    {id:'bl6_w41', section:'Meubels & waar iets staat', hz:'صفا و روشن', tr:'safa wa rooshan', nl:'Schoon en licht'},
    {id:'bl6_w42', section:'Meubels & waar iets staat', hz:'جابه‌جا', tr:'jaa-ba-jaa', nl:'Opgeruimd / op zijn plek'},
    {id:'bl6_w43', section:'Meubels & waar iets staat', hz:'دَ اتاق نشیمن کوپ‌ها پیش میز استه', tr:'da otagh-e nesheman kope-ho pesh-e mez asta', nl:'In de zitkamer staan de banken voor de tafel'},
    {id:'bl6_w44', section:'Meubels & waar iets staat', hz:'همه چیز جابه‌جا استه', tr:'hama chiz jaa-ba-jaa asta', nl:'Alles staat op zijn plek'},
    {id:'bl6_w45', section:'Meubels & waar iets staat', hz:'تخت دَ گوشه اتاق استه', tr:'takht da gusha-e otagh asta', nl:'Het bed staat in de hoek van de kamer'},
    {id:'bl6_w46', section:'Gasten ontvangen', hz:'خوش آمدید', tr:'khush amadid', nl:'Welkom'},
    {id:'bl6_w47', section:'Gasten ontvangen', hz:'خانه خود تو استه!', tr:'khana-ye khud-e tu asta!', nl:'Doe alsof je thuis bent!'},
    {id:'bl6_w48', section:'Gasten ontvangen', hz:'جای تو دَ قلب مو استه', tr:'jaa-ye tu da qalb-e mo asta', nl:'Je hebt een plek in ons hart', note:'Ook: dil (hart)'},
    {id:'bl6_w49', section:'Gasten ontvangen', hz:'بفرمایید بشینید، زحمت نکشید!', tr:'be-farmaeed neshined, zahmat nakashid!', nl:'Ga zitten, doe geen moeite!'},
    {id:'bl6_w50', section:'Gasten ontvangen', hz:'پیش بخاری بشینید، سرد استه!', tr:'pesh-e bukhari neshined, sard asta!', nl:'Ga bij de kachel zitten, het is koud!'},
    {id:'bl6_w51', section:'Gasten ontvangen', hz:'خانه مو را روشن کدید!', tr:'khana-ye mo ra rooshan kadid!', nl:'Jullie brengen licht in ons huis!', note:'Om gasten welkom te heten'},
    {id:'bl6_w52', section:'Gasten ontvangen', hz:'هر وقت بیایید، خوش آمدید!', tr:'har wakht biyaid, khush amadid!', nl:'Kom wanneer je wilt, je bent altijd welkom!'},
    {id:'bl6_w53', section:'Gasten ontvangen', hz:'آب و چای تیار استه!', tr:'aab wa chai tayar asta!', nl:'Water en thee staan klaar!'},
    {id:'bl6_w54', section:'Gasten ontvangen', hz:'خانه دنج و گرم', tr:'khana-ye danj wa garm', nl:'Een knus en warm huis'},
    {id:'bl6_w55', section:'Gasten ontvangen', hz:'خانه شما آباد باشه!', tr:'khana-ye shuma aabaad basha!', nl:'Moge uw huis bloeien!', note:'Zegen bij het weggaan'}
  ]
},
{
  id:'bl7',
  title:'Les 7: spullen zoeken',
  date:'2026-10-20',
  notes:`Spullen in huis, vragen waar iets is en zeggen dat je iets kwijt bent of gevonden hebt.

Waar is mijn …? = … -e ma kojast? · Van wie is dit? = in … az ki asta? → in … az ma asta (van mij)
Dit / dat = in / aan · deze / die (meervoud) = inha (inaa) / aanha (oona)
Bril dragen: aynak mi-zanum (ik) · aynak mi-zana (hij/zij)
Iets kwijt: … gum shuda · gevonden: paida kadum · waar heb je het gelegd? kuja guzashti?
Ra staat achter het lijdend voorwerp: mobile-e khud ra (je eigen telefoon)

Let op: de PDF was deels verkeerd afgedrukt (de dialogen vallen van de pagina af).`,
  items:[
    {id:'bl7_w0', section:'Spullen', hz:'کلید', tr:'kelid', nl:'Sleutel'},
    {id:'bl7_w1', section:'Spullen', hz:'پیسه', tr:'pisa', nl:'Geld', note:'Ook: pool'},
    {id:'bl7_w2', section:'Spullen', hz:'پولدار', tr:'pool-daar', nl:'Rijk'},
    {id:'bl7_w3', section:'Spullen', hz:'کیف', tr:'keef', nl:'Tas / portemonnee'},
    {id:'bl7_w4', section:'Spullen', hz:'پاسپورت', tr:'passport', nl:'Paspoort'},
    {id:'bl7_w5', section:'Spullen', hz:'موبایل', tr:'mobile', nl:'Mobiele telefoon'},
    {id:'bl7_w6', section:'Spullen', hz:'عینک', tr:'aynak', nl:'Bril'},
    {id:'bl7_w7', section:'Spullen', hz:'عینک می‌زنم', tr:'aynak mi-zanum', nl:'Ik draag een bril'},
    {id:'bl7_w8', section:'Spullen', hz:'عینک می‌زنه', tr:'aynak mi-zana', nl:'Hij/zij draagt een bril'},
    {id:'bl7_w9', section:'Spullen', hz:'کتاب', tr:'kitaab', nl:'Boek'},
    {id:'bl7_w10', section:'Spullen', hz:'قلم', tr:'qalam', nl:'Pen'},
    {id:'bl7_w11', section:'Spullen', hz:'ریموت', tr:'remot', nl:'Afstandsbediening'},
    {id:'bl7_w12', section:'Spullen', hz:'این', tr:'in', nl:'Dit / deze'},
    {id:'bl7_w13', section:'Spullen', hz:'آن', tr:'aan', nl:'Dat / die'},
    {id:'bl7_w14', section:'Spullen', hz:'اینها', tr:'inha', nl:'Deze (meervoud)', note:'Ook: inaa'},
    {id:'bl7_w15', section:'Spullen', hz:'آنها', tr:'aanha', nl:'Die (meervoud)', note:'Ook: oona'},
    {id:'bl7_w16', section:'Spullen', hz:'هر کس', tr:'har kas', nl:'Ieder persoon', note:'Ook: hama'},
    {id:'bl7_w17', section:'Spullen', hz:'را', tr:'ra', nl:'Woordje achter het lijdend voorwerp', note:'Bijv. mobile-e khud ra = je (eigen) telefoon'},
    {id:'bl7_w18', section:'Waar is…?', hz:'داخل', tr:'daakhil-e', nl:'In / binnenin'},
    {id:'bl7_w19', section:'Waar is…?', hz:'کلید من کجاست؟', tr:'kelid-e ma kojast?', nl:'Waar is mijn sleutel?'},
    {id:'bl7_w20', section:'Waar is…?', hz:'موبایل تو کجاست؟', tr:'mobile-e tu kojast?', nl:'Waar is jouw telefoon?'},
    {id:'bl7_w21', section:'Waar is…?', hz:'این کیف از کی استه؟', tr:'in keef az ki asta?', nl:'Van wie is deze tas?'},
    {id:'bl7_w22', section:'Waar is…?', hz:'این کیف از من استه', tr:'in keef az ma asta', nl:'Deze tas is van mij'},
    {id:'bl7_w23', section:'Waar is…?', hz:'نه، این از من نیست', tr:'ney, in az ma nest', nl:'Nee, dit is niet van mij'},
    {id:'bl7_w24', section:'Waar is…?', hz:'روی میز استه', tr:'rooye mez asta', nl:'Het ligt op tafel'},
    {id:'bl7_w25', section:'Waar is…?', hz:'داخل کیف تو استه', tr:'daakhil-e keef-e tu asta', nl:'Het zit in jouw tas'},
    {id:'bl7_w26', section:'Waar is…?', hz:'پهلوی موبایل استه', tr:'paloo-ye mobile asta', nl:'Het ligt naast de telefoon'},
    {id:'bl7_w27', section:'Waar is…?', hz:'گوشه اتاق استه', tr:'gusha-e otagh asta', nl:'Het staat in de hoek van de kamer'},
    {id:'bl7_w28', section:'Kwijt en gevonden', hz:'کلید من گم شده!', tr:'kelid-e ma gum shuda!', nl:'Mijn sleutel is kwijt!'},
    {id:'bl7_w29', section:'Kwijt en gevonden', hz:'کجا گذاشتی؟', tr:'kuja guzashti?', nl:'Waar heb je het gelegd?'},
    {id:'bl7_w30', section:'Kwijt en gevonden', hz:'یاد من رفته!', tr:'yad-e ma rafta!', nl:'Ik ben het vergeten!'},
    {id:'bl7_w31', section:'Kwijt en gevonden', hz:'خبر داری کجا استه؟', tr:'khabar dari kuja asta?', nl:'Weet je waar het is?'},
    {id:'bl7_w32', section:'Kwijt en gevonden', hz:'من پیدا کدم!', tr:'ma paida kadum!', nl:'Ik heb het gevonden!'},
    {id:'bl7_w33', section:'Kwijt en gevonden', hz:'اینجا استه، بیا بگیر!', tr:'inja asta, biya beger!', nl:'Hier is het, kom het pakken!'},
    {id:'bl7_w34', section:'Kwijt en gevonden', hz:'کمک می‌کنی پیدا کنیم؟', tr:'kumak mukuni paida kunem?', nl:'Help je mee zoeken?'}
  ]
},
{
  id:'bl8',
  title:'Les 8: eten en smaak',
  date:'2026-10-28',
  notes:`Wat je lekker vindt, Afghaanse en Hazaragi gerechten, ingrediënten en smaak.

Ik hou van … = ma … ra khosh darum · ik hou niet van … = ma … ra khosh nadarum
Ik vind … heerlijk = maana … khosh me-ya · hou jij van …? = tu … ra khosh dari?
Smaak: tund (pittig) · shor (te zout) · namakin (hartig) · shirin (zoet) · tursh (zuur) · bimaza (flauw)

Deze PDF had (nog) geen aantekeningen van je docent. Vaste verbeteringen zijn toegepast (kheili, gushna, sard, mi-khurem).
Weggelaten: de zinnen met me-soorem (erin doen / opdienen) — dat werkwoord heeft je docent eerder vervangen; vraag na wat het moet zijn.

Huiswerk: beantwoord de vijf huiswerkvragen hardop en oefen dialoog 1 tot en met 4.`,
  items:[
    {id:'bl8_w0', section:'Lekker of niet', hz:'غذا', tr:'ghaza', nl:'Eten / maaltijd'},
    {id:'bl8_w1', section:'Lekker of niet', hz:'خوش دارم', tr:'khosh darum', nl:'Ik hou van / ik vind lekker', note:'ma … ra khosh darum'},
    {id:'bl8_w2', section:'Lekker of niet', hz:'خوش ندارم', tr:'khosh nadarum', nl:'Ik hou niet van / ik vind niet lekker'},
    {id:'bl8_w3', section:'Lekker of niet', hz:'خوش داری؟', tr:'khosh dari?', nl:'Vind jij het lekker?'},
    {id:'bl8_w4', section:'Lekker of niet', hz:'غذای مزه‌دار', tr:'ghaza-ye mazadar', nl:'Lekker eten'},
    {id:'bl8_w5', section:'Lekker of niet', hz:'تند', tr:'tund', nl:'Pittig / scherp'},
    {id:'bl8_w6', section:'Lekker of niet', hz:'شور', tr:'shor', nl:'Te zout'},
    {id:'bl8_w7', section:'Lekker of niet', hz:'گشنه استم', tr:'gushna astum', nl:'Ik heb honger'},
    {id:'bl8_w8', section:'Lekker of niet', hz:'سیر استم', tr:'seer astum', nl:'Ik zit vol'},
    {id:'bl8_w9', section:'Lekker of niet', hz:'تو چه غذا را خوش داری؟', tr:'tu che ghaza ra khosh dari?', nl:'Wat voor eten vind je lekker?'},
    {id:'bl8_w10', section:'Lekker of niet', hz:'من غذای مزه‌دار و گرم را خوش دارم', tr:'ma ghaza-ye mazadar wa garm ra khosh darum', nl:'Ik hou van lekker, warm eten'},
    {id:'bl8_w11', section:'Lekker of niet', hz:'من غذای تند را خوش ندارم', tr:'ma ghaza-ye tund ra khosh nadarum', nl:'Ik hou niet van pittig eten'},
    {id:'bl8_w12', section:'Lekker of niet', hz:'نان افغانی خیلی مزه‌دار استه', tr:'naan-e afghani kheili mazadar asta', nl:'Afghaans brood is heel lekker'},
    {id:'bl8_w13', section:'Lekker of niet', hz:'مانه غذای گرم خوش میایه', tr:'maana ghaza-ye garm khosh me-ya', nl:'Ik geniet van warm eten', note:'maana … khosh me-ya = ik vind … heerlijk'},
    {id:'bl8_w14', section:'Gerechten', hz:'قروتی', tr:'qorooti', nl:'Qorooti (Hazaragi gerecht met gedroogde yoghurt en brood)'},
    {id:'bl8_w15', section:'Gerechten', hz:'آشک', tr:'ashak', nl:'Ashak (pasteitjes met prei)'},
    {id:'bl8_w16', section:'Gerechten', hz:'منتو', tr:'manto', nl:'Manto (pasteitjes met gehakt)'},
    {id:'bl8_w17', section:'Gerechten', hz:'شوربا', tr:'shorba', nl:'Soep (shorba)'},
    {id:'bl8_w18', section:'Gerechten', hz:'کچری قروت', tr:'kichiri qoroot', nl:'Kichiri (rijst met mungbonen en qoroot)'},
    {id:'bl8_w19', section:'Gerechten', hz:'قابلی پلو', tr:'qabili palaw', nl:'Qabili palaw (rijst met wortel en rozijnen)', note:'In de PDF: pulao'},
    {id:'bl8_w20', section:'Gerechten', hz:'نان افغانی', tr:'naan-e afghani', nl:'Afghaans brood'},
    {id:'bl8_w21', section:'Gerechten', hz:'سبزی', tr:'sabzi', nl:'Spinaziegerecht', note:'Ook: palak'},
    {id:'bl8_w22', section:'Gerechten', hz:'سیخ کباب', tr:'seekh-kabaab', nl:'Kebab aan een spies'},
    {id:'bl8_w23', section:'Gerechten', hz:'من قروتی و منتو خوردم، خیلی مزه‌دار بود!', tr:'ma qorooti wa manto khurdam, kheili mazadar bud!', nl:'Ik heb qorooti en manto gegeten, het was heel lekker!'},
    {id:'bl8_w24', section:'Gerechten', hz:'مانه قروتی همراه نان گرم خوش میایه', tr:'maana qorooti hamra-ye naan-e garm khosh me-ya', nl:'Ik vind qorooti met warm brood heerlijk'},
    {id:'bl8_w25', section:'Gerechten', hz:'جمعه بعدی بیا خانه مو، آشک و شوربا می‌خوریم', tr:'juma-ye badi biya khana-ye mo, ashak wa shorba mi-khurem', nl:'Kom volgende vrijdag bij ons, we eten ashak en soep'},
    {id:'bl8_w26', section:'Ingrediënten & smaak', hz:'گوشت گوسفند', tr:'goosht-e gospand', nl:'Lamsvlees'},
    {id:'bl8_w27', section:'Ingrediënten & smaak', hz:'گوشت مرغ', tr:'goosht-e murgh', nl:'Kip (vlees)'},
    {id:'bl8_w28', section:'Ingrediënten & smaak', hz:'گوشت گاو', tr:'goosht-e gow', nl:'Rundvlees'},
    {id:'bl8_w29', section:'Ingrediënten & smaak', hz:'سبزیجات', tr:'sabzijat', nl:'Groenten'},
    {id:'bl8_w30', section:'Ingrediënten & smaak', hz:'پیاز', tr:'piaaz', nl:'Ui'},
    {id:'bl8_w31', section:'Ingrediënten & smaak', hz:'سیر', tr:'seer', nl:'Knoflook', note:'Zelfde schrijfwijze als seer = vol'},
    {id:'bl8_w32', section:'Ingrediënten & smaak', hz:'روغن', tr:'roghan', nl:'Olie'},
    {id:'bl8_w33', section:'Ingrediënten & smaak', hz:'نمک', tr:'namak', nl:'Zout (het product)'},
    {id:'bl8_w34', section:'Ingrediënten & smaak', hz:'زردچوبه', tr:'zarchuba', nl:'Kurkuma'},
    {id:'bl8_w35', section:'Ingrediënten & smaak', hz:'مصاله', tr:'masala', nl:'Kruiden'},
    {id:'bl8_w36', section:'Ingrediënten & smaak', hz:'کچالو', tr:'kachalo', nl:'Aardappel'},
    {id:'bl8_w37', section:'Ingrediënten & smaak', hz:'نخود', tr:'nakhod', nl:'Kikkererwten'},
    {id:'bl8_w38', section:'Ingrediënten & smaak', hz:'نمکین', tr:'namakin', nl:'Hartig / zoutig'},
    {id:'bl8_w39', section:'Ingrediënten & smaak', hz:'شیرین', tr:'shirin', nl:'Zoet'},
    {id:'bl8_w40', section:'Ingrediënten & smaak', hz:'ترش', tr:'tursh', nl:'Zuur'},
    {id:'bl8_w41', section:'Ingrediënten & smaak', hz:'بی‌مزه', tr:'bimaza', nl:'Smakeloos / flauw'},
    {id:'bl8_w42', section:'Ingrediënten & smaak', hz:'من غذای نمکین را خوش دارم، اما میوه شیرین را هم خوش دارم', tr:'ma ghaza-ye namakin ra khosh darum, amma mewa-ye shirin ra ham khosh darum', nl:'Ik hou van hartig eten, maar ook van zoet fruit'},
    {id:'bl8_w43', section:'Koken & gasten', hz:'پخته می‌کنم', tr:'pukhsa mukunum', nl:'Ik kook', note:'In de PDF: pukhsa — vraag of het pukhta is'},
    {id:'bl8_w44', section:'Koken & gasten', hz:'من قابلی پلو، منتو و سبزی پخته می‌کنم', tr:'ma qabili palaw, manto wa sabzi pukhsa mukunum', nl:'Ik kook qabili palaw, manto en spinazie'},
    {id:'bl8_w45', section:'Koken & gasten', hz:'نان گرم هم می‌خرم', tr:'naan-e garm ham mi-kharum', nl:'Ik koop ook warm brood'},
    {id:'bl8_w46', section:'Koken & gasten', hz:'چای سبز', tr:'chai-ye sabz', nl:'Groene thee'}
  ]
},
{
  id:'bl9',
  title:'Les 9: café en thee',
  date:'2026-10-29',
  notes:`Bestellen in een theehuis of café, iets zoets erbij en de rekening betalen.

Ik wil … = ma … mi-khayum (of mi-khaam) · breng … = … biyar / beleefd: biyared
Ik ook = man ham (manam, maam) · alleen = faghat · met = ba (baa)
Zoet of bitter: shirin / talkh (zonder suiker) · suiker = ghand
Betalen: ma pisa me-dum (ik betaal / ik geef het geld)
Bedanken: khair bebini · khana aabaad! (in plaats van rahmat)

Huiswerk: beantwoord de vijf huiswerkvragen hardop en speel het rollenspel in het theehuis.`,
  items:[
    {id:'bl9_w0', section:'Drankjes & iets zoets', hz:'چای سیاه', tr:'chai-ye siaah', nl:'Zwarte thee'},
    {id:'bl9_w1', section:'Drankjes & iets zoets', hz:'شیرچای', tr:'shir-chai', nl:'Melkthee'},
    {id:'bl9_w2', section:'Drankjes & iets zoets', hz:'قهوه', tr:'qahwa', nl:'Koffie'},
    {id:'bl9_w3', section:'Drankjes & iets zoets', hz:'آب معدنی', tr:'aab-e madani', nl:'Mineraalwater'},
    {id:'bl9_w4', section:'Drankjes & iets zoets', hz:'آب یخ', tr:'aab-e yakh', nl:'Koud water / ijswater'},
    {id:'bl9_w5', section:'Drankjes & iets zoets', hz:'جلیبی', tr:'jalabi', nl:'Jalebi (zoete lekkernij)'},
    {id:'bl9_w6', section:'Drankjes & iets zoets', hz:'شیرینی', tr:'shirini', nl:'Zoetigheden / gebak'},
    {id:'bl9_w7', section:'Drankjes & iets zoets', hz:'کلچه و کیک', tr:'kolcha wa kak', nl:'Koekjes en cake', note:'Je docent markeerde de laatste a van kaka'},
    {id:'bl9_w8', section:'Drankjes & iets zoets', hz:'میوه خشک', tr:'mewa-ye khushk', nl:'Gedroogd fruit en noten'},
    {id:'bl9_w9', section:'Drankjes & iets zoets', hz:'چایخانه', tr:'chai-khana', nl:'Theehuis'},
    {id:'bl9_w10', section:'Drankjes & iets zoets', hz:'نوشیدنی', tr:'nowshidani', nl:'Drankje'},
    {id:'bl9_w11', section:'Drankjes & iets zoets', hz:'نوشیدن', tr:'nowshidan', nl:'Drinken'},
    {id:'bl9_w12', section:'Drankjes & iets zoets', hz:'پیاله', tr:'piyaala', nl:'Kop (theekop)'},
    {id:'bl9_w13', section:'Drankjes & iets zoets', hz:'فنجان', tr:'fenjan', nl:'Kopje (koffiekop)'},
    {id:'bl9_w14', section:'Drankjes & iets zoets', hz:'قند', tr:'ghand', nl:'Suiker'},
    {id:'bl9_w15', section:'Drankjes & iets zoets', hz:'تلخ', tr:'talkh', nl:'Bitter / zonder suiker'},
    {id:'bl9_w16', section:'Bestellen', hz:'لطفاً', tr:'lotfan', nl:'Alstublieft'},
    {id:'bl9_w17', section:'Bestellen', hz:'بیار', tr:'biyar', nl:'Breng! (tegen één persoon)', note:'Ook: biyaresh'},
    {id:'bl9_w18', section:'Bestellen', hz:'بیارید', tr:'biyared', nl:'Breng! (beleefd)'},
    {id:'bl9_w19', section:'Bestellen', hz:'با', tr:'ba', nl:'Met (kort woord)', note:'Ook: baa'},
    {id:'bl9_w20', section:'Bestellen', hz:'فقط', tr:'faghat', nl:'Alleen / maar'},
    {id:'bl9_w21', section:'Bestellen', hz:'من هم', tr:'man ham', nl:'Ik ook', note:'Ook: manam, maam'},
    {id:'bl9_w22', section:'Bestellen', hz:'عجیبه', tr:'ajeeba', nl:'Het is vreemd'},
    {id:'bl9_w23', section:'Bestellen', hz:'من یک فنجان قهوه می‌خایم', tr:'ma yak fenjan qahwa mi-khayum', nl:'Ik wil graag een kopje koffie'},
    {id:'bl9_w24', section:'Bestellen', hz:'من یک پیاله چای سبز و یک‌کم جلیبی می‌خایم', tr:'ma yak piyaala chai-ye sabz wa yak-kam jalabi mi-khayum', nl:'Ik wil een kop groene thee en een beetje jalebi'},
    {id:'bl9_w25', section:'Bestellen', hz:'لطفاً چای سبز گرم بیارید', tr:'lotfan chai-ye sabz-e garm biyared', nl:'Breng alstublieft warme groene thee'},
    {id:'bl9_w26', section:'Bestellen', hz:'ببخشید، آب یخ داری؟', tr:'bebakhshid, aab-e yakh dari?', nl:'Pardon, heeft u koud water?'},
    {id:'bl9_w27', section:'Bestellen', hz:'قهوه تو شیرین استه یا تلخ؟', tr:'qahwa-ye tu shirin asta ya talkh?', nl:'Is je koffie zoet of zonder suiker?'},
    {id:'bl9_w28', section:'Bestellen', hz:'من یک‌کم قند می‌خایم', tr:'ma yak-kam ghand mi-khayum', nl:'Ik wil een beetje suiker'},
    {id:'bl9_w29', section:'Bestellen', hz:'تشکر، من هم قهوه شیرین می‌خایم', tr:'tashakkur, man ham qahwa-ye shirin mi-khayum', nl:'Dank je, ik wil ook zoete koffie'},
    {id:'bl9_w30', section:'Bestellen', hz:'قند و میوه خشک بفرمایید!', tr:'ghand wa mewa-ye khushk be-farmaeed!', nl:'Neem wat suiker en gedroogd fruit!'},
    {id:'bl9_w31', section:'De rekening', hz:'حساب', tr:'hisab', nl:'De rekening'},
    {id:'bl9_w32', section:'De rekening', hz:'ببخشید، حساب چند استه؟', tr:'bebakhshid, hisab chand asta?', nl:'Pardon, hoeveel is de rekening?'},
    {id:'bl9_w33', section:'De rekening', hz:'این حساب بیست یورو استه', tr:'in hisab bist yuro asta', nl:'Deze rekening is twintig euro'},
    {id:'bl9_w34', section:'De rekening', hz:'زحمت نکشید، من پیسه می‌دم!', tr:'zahmat nakashid, ma pisa me-dum!', nl:'Doe geen moeite, ik betaal!'},
    {id:'bl9_w35', section:'De rekening', hz:'نه استاد، امروز من پیسه می‌دم!', tr:'ney ustaad, emrooz ma pisa me-dum!', nl:'Nee leraar, vandaag betaal ik!'},
    {id:'bl9_w36', section:'De rekening', hz:'خانه آباد!', tr:'khana aabaad!', nl:'Dankjewel! (letterlijk: moge je huis bloeien)'},
    {id:'bl9_w37', section:'De rekening', hz:'خیر ببینی', tr:'khair bebini', nl:'Dank je (letterlijk: moge je het goede zien)', note:'Je docent gebruikt dit in plaats van rahmat'}
  ]
}
];

// ══════════════════════════════════════════════════════
// OEFENVRAGEN VAN DE DOCENT — per bijles (ids nooit hergebruiken)
// expect: Hazaragi-werkwoordsvormen die in het antwoord horen (achteraan)
// ══════════════════════════════════════════════════════
const BIJLES_QUESTIONS={
  bl1:[
    {id:'bl1_q0', q:'چطور استی؟', qtr:'chetor asti?', nl:'Hoe gaat het met je?', expect:['استم'], ex:'khub astum, khoda ra shukr', exhz:'خوب استم، خدا را شکر'},
    {id:'bl1_q1', q:'نام تو چی استه؟', qtr:'naam-e tu che asta?', nl:'Hoe heet je?', expect:['استه'], ex:'naam-e ma Nina asta', exhz:'نام من نینا استه'},
    {id:'bl1_q2', q:'تو از کجا استی؟', qtr:'tu az kuja asti?', nl:'Waar kom je vandaan?', expect:['استم'], ex:'ma az Holland astum', exhz:'من از هالند استم'},
    {id:'bl1_q3', q:'کجا زندگی می‌کنی؟', qtr:'kuja zendagi mukuni?', nl:'Waar woon je?', expect:['می‌کنم'], ex:'ma da Holland zendagi mukunum', exhz:'من دَ هالند زندگی می‌کنم'},
    {id:'bl1_q4', q:'تو برار یا خوار داری؟', qtr:'tu braar ya khuaar dari?', nl:'Heb je broers of zussen?', expect:['دارم','ندارم'], ex:'ma yak braar darum', exhz:'من یک برار دارم'},
    {id:'bl1_q5', q:'امروز هوا چطور استه؟', qtr:'emrooz hawa chetor asta?', nl:'Hoe is het weer vandaag?', expect:['استه'], ex:'emrooz hawa sard wa abri asta', exhz:'امروز هوا سرد و ابری استه'}
  ],
  bl2:[
    {id:'bl2_q0', q:'چای می‌خوری یا آب؟', qtr:'chai mukhuri ya aab?', nl:'Wil je thee of water?', expect:['می‌خایم','می‌خوام'], ex:'tashakkur, yak-kam chai mi-khayum', exhz:'تشکر، یک‌کم چای می‌خایم'},
    {id:'bl2_q1', q:'نان خوردید یا گشنه استی؟', qtr:'naan khurdid ya gushna asti?', nl:'Heb je gegeten of heb je honger?', expect:['خوردم','استم'], ex:'aree, khurdam, seer astum', exhz:'آری، خوردم، سیر استم'},
    {id:'bl2_q2', q:'ساعت چند استه؟', qtr:'saat chand asta?', nl:'Hoe laat is het?', expect:['استه'], ex:'saat char asta', exhz:'ساعت چار استه'},
    {id:'bl2_q3', q:'فردا وقت داری؟', qtr:'farda wakht dari?', nl:'Heb je morgen tijd?', expect:['دارم','ندارم'], ex:'bale, farda saat do wakht darum', exhz:'بله، فردا ساعت دو وقت دارم'},
    {id:'bl2_q4', q:'کمک می‌کنی؟', qtr:'kumak mukuni?', nl:'Help je mee?', expect:['می‌کنم'], ex:'bale, kumak mukunum', exhz:'بله، کمک می‌کنم'}
  ],
  bl3:[
    {id:'bl3_q0', q:'تو قد بلند استی یا قد کوتاه؟', qtr:'tu ghad-boland asti ya ghad-kootah?', nl:'Ben je lang of klein?', expect:['استم'], ex:'ma ghad-motevaset astum', exhz:'من قد متوسط استم'},
    {id:'bl3_q1', q:'تو چه رنگ مو داری؟', qtr:'tu che rang moo daari?', nl:'Welke kleur haar heb je?', expect:['دارم'], ex:'ma moo-ye ghahve-i darum', exhz:'من موی قهوه‌ای دارم'},
    {id:'bl3_q2', q:'تو چه رنگ چشم داری؟', qtr:'tu che rang cheshm daari?', nl:'Welke kleur ogen heb je?', expect:['دارم'], ex:'ma cheshm-e aabi darum', exhz:'من چشم آبی دارم'},
    {id:'bl3_q3', q:'آیه تو چه رنگ مو داره؟', qtr:'aya-e tu che rang moo daara?', nl:'Welke kleur haar heeft je moeder?', expect:['داره'], ex:'aya-e ma moo-ye boor daara', exhz:'آیه من موی بور داره'},
    {id:'bl3_q4', q:'صورت تو چطور استه؟', qtr:'soorat-e tu chetor asta?', nl:'Hoe ziet je gezicht eruit?', expect:['استه'], ex:'soorat-e ma gerd asta', exhz:'صورت من گرد استه'}
  ],
  bl4:[
    {id:'bl4_q0', q:'ساعت چند بجه استه؟', qtr:'saat chand baja asta?', nl:'Hoe laat is het nu?', expect:['استه'], ex:'saat do wa nim asta', exhz:'ساعت دو و نیم استه'},
    {id:'bl4_q1', q:'امروز چه روز استه؟', qtr:'emrooz che roz asta?', nl:'Welke dag is het vandaag?', expect:['استه'], ex:'emrooz do-shanba asta', exhz:'امروز دوشنبه استه'},
    {id:'bl4_q2', q:'از ساعت چند تا ساعت چند کار می‌کنی؟', qtr:'az saat-e chand ta saat-e chand kaar mukuni?', nl:'Van hoe laat tot hoe laat werk je?', expect:['می‌کنم'], ex:'az saat-e hasht ta char kaar mukunum', exhz:'از ساعت هشت تا چار کار می‌کنم'},
    {id:'bl4_q3', q:'جمعه وقت داری؟', qtr:'juma wakht dari?', nl:'Heb je vrijdag tijd?', expect:['دارم','ندارم'], ex:'bale, juma wakht darum', exhz:'بله، جمعه وقت دارم'},
    {id:'bl4_q4', q:'چند ساعت کار می‌کنی؟', qtr:'chand saat kaar mukuni?', nl:'Hoeveel uur werk je?', expect:['می‌کنم'], ex:'ma hasht saat kaar mukunum', exhz:'من هشت ساعت کار می‌کنم'}
  ],
  bl5:[
    {id:'bl5_q0', q:'ساعت چند از خواب بیدار می‌شی؟', qtr:'saat-e chand az khwab bedar mi-shi?', nl:'Hoe laat word je wakker?', expect:['می‌شم'], ex:'ma saat-e haft-e subh bedar mi-shum', exhz:'من ساعت هفت صبح بیدار می‌شم'},
    {id:'bl5_q1', q:'دَ نان صبح چه می‌خوری؟', qtr:'da naan-e subh che mukhuri?', nl:'Wat eet je bij het ontbijt?', expect:['می‌خورم'], ex:'ma chai wa naan mi-khurum', exhz:'من چای و نان می‌خورم'},
    {id:'bl5_q2', q:'ساعت چند خانه می‌آیی؟', qtr:'saat-e chand khana mi-yayi?', nl:'Hoe laat kom je thuis?', expect:['می‌آیم'], ex:'saat-e panj khana mi-yum', exhz:'ساعت پنج خانه می‌آیم'},
    {id:'bl5_q3', q:'پیش از خواب چه می‌کنی؟', qtr:'pesh az khwab che mukuni?', nl:'Wat doe je voor het slapen?', expect:['می‌خوانم','می‌زنیم','می‌بینم','می‌کنم'], ex:'kitab mi-khanum', exhz:'کتاب می‌خوانم'},
    {id:'bl5_q4', q:'دیروز کجا بودی؟', qtr:'dirooz kuja budi?', nl:'Waar was je gisteren?', expect:['بودم'], ex:'dirooz ma da kaar budum', exhz:'دیروز من دَ کار بودم'},
    {id:'bl5_q5', q:'ساعت چند خواب می‌شی؟', qtr:'saat-e chand khwab mi-shi?', nl:'Hoe laat ga je slapen?', expect:['می‌شم'], ex:'ma saat-e da khwab mi-shum', exhz:'من ساعت ده خواب می‌شم'}
  ],
  bl6:[
    {id:'bl6_q0', q:'خانه تو کجا استه و چطور خانه استه؟', qtr:'khana-ye tu kuja asta wa chetor khana asta?', nl:'Waar is je huis en hoe is het?', expect:['استه'], ex:'khana-ye ma da Holland asta, kalaan wa maqbool asta', exhz:'خانه من دَ هالند استه، کلان و مقبول استه'},
    {id:'bl6_q1', q:'خانه تو چند اتاق خواب داره؟', qtr:'khana-ye tu chand otagh-e khwab daara?', nl:'Hoeveel slaapkamers heeft je huis?', expect:['داره'], ex:'khana-ye ma se otagh-e khwab daara', exhz:'خانه من سه اتاق خواب داره'},
    {id:'bl6_q2', q:'دَ اتاق خواب تو تخت کجا استه؟', qtr:'da otagh-e khwab-e tu takht kuja asta?', nl:'Waar staat het bed in je slaapkamer?', expect:['استه'], ex:'takht paloo-ye kalkin asta', exhz:'تخت پهلوی کلکین استه'},
    {id:'bl6_q3', q:'باغچه یا حیاط هم داری؟', qtr:'baghcha ya hayat ham dari?', nl:'Heb je ook een tuin of binnenplaats?', expect:['دارم','ندارم'], ex:'bale, yak baghcha-ye khurd darum', exhz:'بله، یک باغچه خورد دارم'}
  ],
  bl7:[
    {id:'bl7_q0', q:'کلید تو کجاست؟', qtr:'kelid-e tu kojast?', nl:'Waar is jouw sleutel?', expect:['استه'], ex:'rooye mez asta', exhz:'روی میز استه'},
    {id:'bl7_q1', q:'این عینک از تو استه؟', qtr:'in aynak az tu asta?', nl:'Is deze bril van jou?', expect:['استه','نیست'], ex:'bale, in aynak az ma asta', exhz:'بله، این عینک از من استه'},
    {id:'bl7_q2', q:'موبایل تو کجا استه؟', qtr:'mobile-e tu kuja asta?', nl:'Waar is jouw telefoon?', expect:['استه'], ex:'daakhil-e keef-e ma asta', exhz:'داخل کیف من استه'},
    {id:'bl7_q3', q:'تو عینک می‌زنی؟', qtr:'tu aynak mi-zani?', nl:'Draag jij een bril?', expect:['می‌زنم'], ex:'bale, ma aynak mi-zanum', exhz:'بله، من عینک می‌زنم'}
  ],
  bl8:[
    {id:'bl8_q0', q:'تو چه غذا را خوش داری؟', qtr:'tu che ghaza ra khosh dari?', nl:'Wat voor eten vind je lekker?', expect:['دارم'], ex:'ma qorooti ra khosh darum, chun kheili mazadar asta', exhz:'من قروتی را خوش دارم، چون خیلی مزه‌دار استه'},
    {id:'bl8_q1', q:'چه غذا را خوش نداری؟', qtr:'che ghaza ra khosh nadari?', nl:'Welk eten vind je niet lekker?', expect:['ندارم'], ex:'ma ghaza-ye kheili tund ra khosh nadarum', exhz:'من غذای خیلی تند را خوش ندارم'},
    {id:'bl8_q2', q:'تو دَ خانه پخته می‌کنی یا از بیرون می‌خری؟', qtr:'tu da khana pukhsa mukuni ya az berun mi-khari?', nl:'Kook je thuis of koop je eten buiten de deur?', expect:['می‌کنم','می‌خرم'], ex:'ma da khana pukhsa mukunum', exhz:'من دَ خانه پخته می‌کنم'},
    {id:'bl8_q3', q:'تو گوشت مرغ را خوش داری یا گوشت گوسفند را؟', qtr:'tu goosht-e murgh ra khosh dari ya goosht-e gospand ra?', nl:'Hou je meer van kip of van lamsvlees?', expect:['دارم'], ex:'ma goosht-e murgh ra khosh darum', exhz:'من گوشت مرغ را خوش دارم'},
    {id:'bl8_q4', q:'وقتی فامیل میایه، چه غذا پخته می‌کنی؟', qtr:'waqti faamil me-ya, che ghaza pukhsa mukuni?', nl:'Wat kook je als de familie komt?', expect:['می‌کنم'], ex:'ma manto wa qabili palaw pukhsa mukunum', exhz:'من منتو و قابلی پلو پخته می‌کنم'}
  ],
  bl9:[
    {id:'bl9_q0', q:'دَ چایخانه چای سبز می‌خوری یا قهوه؟', qtr:'da chai-khana chai-ye sabz mukhuri ya qahwa?', nl:'Drink je in het theehuis groene thee of koffie?', expect:['می‌خایم','می‌خوام'], ex:'ma chai-ye sabz mi-khayum, tashakkur', exhz:'من چای سبز می‌خایم، تشکر'},
    {id:'bl9_q1', q:'قهوه گرم را خوش داری یا آب یخ؟', qtr:'qahwa-ye garm ra khosh dari ya aab-e yakh?', nl:'Hou je van warme koffie of van koud water?', expect:['دارم'], ex:'ma qahwa-ye garm ra khosh darum', exhz:'من قهوه گرم را خوش دارم'},
    {id:'bl9_q2', q:'وقتی حساب میایه، تو چه می‌گی؟', qtr:'waqti hisab me-ya, tu che mugi?', nl:'Wat zeg je als de rekening komt?', expect:['می‌دم'], ex:'zahmat nakashid, ma pisa me-dum', exhz:'زحمت نکشید، من پیسه می‌دم'},
    {id:'bl9_q3', q:'چای تو قند داره یا تلخ می‌خوری؟', qtr:'chai-ye tu ghand daara ya talkh mukhuri?', nl:'Doe je suiker in je thee of drink je hem zonder?', expect:['می‌خورم','داره'], ex:'ma chai-ye talkh mi-khurum', exhz:'من چای تلخ می‌خورم'},
    {id:'bl9_q4', q:'کدام شیرینی را خوش داری؟', qtr:'kudam shirini ra khosh dari?', nl:'Welke zoetigheid vind je lekker?', expect:['دارم'], ex:'ma jalabi ra khosh darum', exhz:'من جلیبی را خوش دارم'}
  ]
};
