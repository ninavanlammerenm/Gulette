// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
let S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},achv:[],weekActivity:[],goal:10,xpLog:{}};

// ══════════════════════════════════════════════════════
// UITSPRAAKSCHRIFT — geeft de romanisering ongewijzigd terug
// ══════════════════════════════════════════════════════
const toDutchPhonetic = tr => tr || '';

const save=()=>localStorage.setItem('gulette_v3',JSON.stringify(S));
const load=()=>{try{const d=localStorage.getItem('gulette_v3');if(d)S=JSON.parse(d);}catch(e){}};
const isDue=v=>!v.nr||new Date(v.nr)<=new Date();

let sciIdx=0;

// ══════════════════════════════════════════════════════
// SPACED REPETITION — SM-2 variant met ease factor
// Mastery 0–5, intervals groeien exponentieel bij consistent goed presteren.
// Fout → consec reset, ease daalt, snelle herhaling (10 min of 1 uur).
// ══════════════════════════════════════════════════════
function logXP(amount){
  if(!amount||amount<=0)return;
  if(!S.xpLog)S.xpLog={};
  const today=new Date().toISOString().slice(0,10);
  S.xpLog[today]=(S.xpLog[today]||0)+amount;
  save();
}

function updMastery(hz, ok){
  if(!S.vocab[hz])return;
  const v=S.vocab[hz];
  // Initialiseer SM-2 velden als ze nog niet bestaan
  if(!v.ease) v.ease=2.5;
  if(v.consec===undefined) v.consec=0;

  if(ok){
    v.mastery=Math.min(5,(v.mastery||0)+1);
    v.consec++;
    // Ease factor groeit langzaam bij herhaalde correcte antwoorden
    v.ease=Math.min(3.2, v.ease+0.05);
    // Basisintervals in dagen per mastery-niveau
    const base=[1,3,7,14,30];
    let d=base[Math.min(v.mastery-1,4)];
    // Na 3+ opeenvolgende successen: stretch het interval met ease factor
    if(v.consec>=3) d=Math.round(d*v.ease);
    v.nr=new Date(Date.now()+Math.max(1,d)*86400000).toISOString();
  } else {
    const prev=v.mastery||0;
    v.mastery=Math.max(0,prev-1);
    v.consec=0;
    // Ease factor daalt bij fouten
    v.ease=Math.max(1.3, v.ease-0.2);
    v.errors=(v.errors||0)+1;
    // Laag mastery: 10 minuten herhaling. Hoger mastery: 1 uur.
    const delay=prev<=1 ? 10*60*1000 : 60*60*1000;
    v.nr=new Date(Date.now()+delay).toISOString();
  }
  save();
}

// ══════════════════════════════════════════════════════
// STREAK & ACHIEVEMENTS
// ══════════════════════════════════════════════════════
function updStreak(){
  const today=new Date().toDateString();
  const todayIdx=new Date().getDay();
  const idx=todayIdx===0?6:todayIdx-1;
  const now=new Date();
  const isMonday=now.getDay()===1;
  const lastStudyDate=S.lastStudy?new Date(S.lastStudy):null;
  const lastWasThisWeek=lastStudyDate&&lastStudyDate>=getMonday(now);
  if(!S.weekActivity||(!lastWasThisWeek&&isMonday))S.weekActivity=[];
  if(!S.weekActivity.includes(idx))S.weekActivity.push(idx);
  if(S.lastStudy===today)return;
  const yest=new Date(Date.now()-86400000).toDateString();
  S.streak=S.lastStudy===yest?S.streak+1:1;
  S.lastStudy=today;
}

function getMonday(d){
  const day=d.getDay();
  const diff=d.getDate()-(day===0?6:day-1);
  return new Date(new Date(d).setDate(diff));
}

function checkAchv(perfect=false){
  const add=id=>{if(!S.achv.includes(id)){S.achv.push(id);const a=ACHVS.find(x=>x.id===id);if(a)showToast(a.icon+' '+a.name+' ontgrendeld!');}};
  if(S.done.length>=1)add('first');
  if(S.streak>=3)add('streak3');if(S.streak>=7)add('streak7');if(S.streak>=30)add('streak30');
  const wc=Object.keys(S.vocab).length;
  if(wc>=10)add('words10');if(wc>=30)add('words30');if(wc>=60)add('words60');if(wc>=100)add('words100');if(wc>=200)add('words200');if(wc>=300)add('words300');
  if(S.xp>=100)add('xp100');if(S.xp>=500)add('xp500');if(S.xp>=1000)add('xp1000');if(S.xp>=2000)add('xp2000');
  if(perfect)add('perfect');
  const checkChById=id=>{
    const ch=CHAPTERS.find(c=>c.id===id);
    if(ch&&ch.lessons.some(l=>S.done.includes(l.id)))add(id);
  };
  ['ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9','ch10',
   'ch0','ch11','ch12','ch13','ch14','ch15','ch16','ch17','ch18','ch19','ch20',
   'ch21','ch22','ch23','ch24','ch25','ch26','ch27','ch28','ch29',
   'ch_gram1','ch_gram2','ch_gram3','ch_gram4','ch_gram5',
   'ch30','ch31','ch32','ch33','ch34','ch35','ch36',
   'ch37','ch38','ch39','ch40','ch41',
   'ch42','ch43','ch44','ch45','ch46',
   'ch47','ch48','ch49','ch50','ch51','ch52'].forEach(checkChById);
}