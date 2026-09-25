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
}
];
