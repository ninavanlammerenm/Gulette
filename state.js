// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
let S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},achv:[],weekActivity:[],goal:10,xpLog:{}};
const save=()=>localStorage.setItem('gulette_v3',JSON.stringify(S));
const load=()=>{try{const d=localStorage.getItem('gulette_v3');if(d)S=JSON.parse(d);}catch(e){}};

let sciIdx=0;

// ══════════════════════════════════════════════════════
// SPACED REPETITION MASTERY
// ══════════════════════════════════════════════════════
function logXP(amount){
  if(!amount||amount<=0)return;
  if(!S.xpLog)S.xpLog={};
  const today=new Date().toISOString().slice(0,10);
  S.xpLog[today]=(S.xpLog[today]||0)+amount;
  save();
}

function updMastery(hz,ok){
  if(!S.vocab[hz])return;
  const v=S.vocab[hz];
  if(ok){
    v.mastery=Math.min(5,(v.mastery||0)+1);
    const intervals=[1,3,7,14,30];
    const d=intervals[Math.min(v.mastery-1,4)];
    v.nr=new Date(Date.now()+d*86400000).toISOString();
  }else{
    v.mastery=Math.max(0,(v.mastery||0)-1);
    v.nr=new Date(Date.now()+3600000).toISOString();
    v.errors=(v.errors||0)+1;
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

function checkAchv(){
  const add=id=>{if(!S.achv.includes(id)){S.achv.push(id);const a=ACHVS.find(x=>x.id===id);if(a)showToast(a.icon+' '+a.name+' ontgrendeld!');}};
  if(S.done.length>=1)add('first');
  if(S.streak>=3)add('streak3');if(S.streak>=7)add('streak7');if(S.streak>=30)add('streak30');
  const wc=Object.keys(S.vocab).length;
  if(wc>=10)add('words10');if(wc>=30)add('words30');if(wc>=60)add('words60');if(wc>=100)add('words100');
  if(S.xp>=100)add('xp100');if(S.xp>=500)add('xp500');if(S.xp>=1000)add('xp1000');
  if(WC===0&&CC>0)add('perfect');
  const checkCh=(chIdx,achId)=>{if(CHAPTERS[chIdx]&&CHAPTERS[chIdx].lessons.some(l=>S.done.includes(l.id)))add(achId);};
  [1,2,3,4,5,6,7,8,9].forEach((i,idx)=>checkCh(i,['ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9','ch10'][idx]));
}
