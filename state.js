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

// XP → level (exponentieel: level n kost 100n XP, totaal = 50·n·(n-1))
function getLevel(xp){return Math.floor((1+Math.sqrt(1+(xp||0)/12.5))/2);}
function getLevelStart(lvl){return 50*lvl*(lvl-1);}
function getLevelPct(xp){
  const lvl=getLevel(xp);
  return Math.min(99,Math.round((xp-getLevelStart(lvl))/(getLevelStart(lvl+1)-getLevelStart(lvl))*100));
}

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
  if(S.lastStudy===yest){
    S.streak=S.streak+1;
  } else if(S.lastStudy&&(S.shields||0)>0){
    S.shields--;
    showToast('🛡️ Streak-schild verbruikt — streak behouden!');
  } else {
    S.streak=1;
  }
  S.lastStudy=today;
}

function checkShieldAward(){
  if(S.streak>0&&S.streak%7===0){
    if(S.shields===undefined)S.shields=0;
    S.shields++;
    save();
    showToast(`🛡️ Streak-schild verdiend! Je hebt ${S.shields} schild${S.shields===1?'':'en'}`);
  }
}

function getMonday(d){
  const day=d.getDay();
  const diff=d.getDate()-(day===0?6:day-1);
  return new Date(new Date(d).setDate(diff));
}

function applyMasteryDecay(){
  const today=new Date().toISOString().slice(0,10);
  if(S.lastDecayCheck===today)return;
  S.lastDecayCheck=today;
  const now=new Date();
  let changed=false;
  Object.values(S.vocab).forEach(v=>{
    if(!v.nr||v.mastery<=1)return;
    const overdueDays=(now-new Date(v.nr))/86400000;
    if(overdueDays>30){
      v.mastery=Math.max(0,v.mastery-1);
      v.nr=now.toISOString();
      changed=true;
    }
  });
  if(changed)save();
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
  CHAPTERS.forEach(ch=>checkChById(ch.id));
}