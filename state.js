// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
let S={name:'',xp:0,streak:0,lastStudy:null,done:[],vocab:{},weekActivity:[],goal:10,xpLog:{}};

// ══════════════════════════════════════════════════════
// UITSPRAAKSCHRIFT — romanisering → leesbaar voor Nederlandstaligen
// ══════════════════════════════════════════════════════
function toDutchPhonetic(tr){
  if(!tr)return '';
  return tr
    .replace(/kh/gi,'gh')   // خ — keelklank (Nederlands G)
    .replace(/sh/gi,'sj')   // ش — Nederlands sj
    .replace(/zh/gi,'zj')   // ژ — Nederlands zj
    .replace(/ch/gi,'tsj')  // چ — Nederlands tsj
    .replace(/oo/g,'oe')    // lange o — Nederlands oe
    .replace(/ee/g,'ie')    // lange e — Nederlands ie
    .replace(/ay/gi,'ei')   // tweeklank
    .replace(/ai/gi,'ei')   // tweeklank
    .replace(/ow/gi,'aw')   // tweeklank
    .replace(/q/gi,'k');    // ق — Nederlands k
}

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
  if(!v.ease) v.ease=2.5;
  if(v.consec===undefined) v.consec=0;

  if(ok){
    v.mastery=Math.min(5,(v.mastery||0)+1);
    v.consec++;
    v.ease=Math.min(3.2, v.ease+0.05);
    const base=[1,3,7,14,30];
    let d=base[Math.min(v.mastery-1,4)];
    if(v.consec>=3) d=Math.round(d*v.ease);
    v.nr=new Date(Date.now()+Math.max(1,d)*86400000).toISOString();
  } else {
    const prev=v.mastery||0;
    v.mastery=Math.max(0,prev-1);
    v.consec=0;
    v.ease=Math.max(1.3, v.ease-0.2);
    v.errors=(v.errors||0)+1;
    const delay=prev<=1 ? 10*60*1000 : 60*60*1000;
    v.nr=new Date(Date.now()+delay).toISOString();
  }
  save();
}

// ══════════════════════════════════════════════════════
// VERWARRINGS-DETECTIE
// Track welke woorden de gebruiker door elkaar haalt
// ══════════════════════════════════════════════════════
function trackConfusion(targetHz, chosenHz){
  if(!targetHz||!chosenHz||targetHz===chosenHz)return;
  if(!S.confusions) S.confusions={};
  const key=targetHz<chosenHz?targetHz+'|'+chosenHz:chosenHz+'|'+targetHz;
  S.confusions[key]=(S.confusions[key]||0)+1;
  save();
}

function getConfusedPairs(minCount){
  if(!S.confusions) return [];
  return Object.entries(S.confusions)
    .filter(([,c])=>c>=(minCount||3))
    .sort(([,a],[,b])=>b-a)
    .map(([key,count])=>{
      const [w1,w2]=key.split('|');
      return {w1, w2, count, v1:S.vocab[w1], v2:S.vocab[w2]};
    })
    .filter(p=>p.v1&&p.v2);
}

// ══════════════════════════════════════════════════════
// EZELSBRUGGETJES — automatisch genereren bij 3+ fouten
// ══════════════════════════════════════════════════════
function getSmartHint(hz){
  const v=S.vocab[hz];
  if(!v||!v.tr) return null;
  if((v.errors||0)<3) return null;

  // Zoek gelijkende woorden die verwarring veroorzaken
  const confused = getConfusedPairs(2).filter(p=>p.w1===hz||p.w2===hz);
  if(confused.length>0){
    const pair=confused[0];
    const other=pair.w1===hz?pair.w2:pair.w1;
    const otherV=S.vocab[other];
    if(otherV){
      return `Let op: "${hz}" (${v.tr}) = ${v.nl} ≠ "${other}" (${otherV.tr}) = ${otherV.nl}`;
    }
  }

  // Anders: focus op een opvallend kenmerk
  const tr=v.tr;
  if(tr.includes('aa')) return `Denk aan de lange "aa"-klank in "${tr}" → ${v.nl}`;
  if(tr.includes('kh')) return `De "kh" in "${tr}" = keelklank (G) → ${v.nl}`;
  if(tr.includes('sh')) return `"sh" in "${tr}" = sj-klank → ${v.nl}`;
  if(hz.length<=3) return `Kort woord! "${hz}" (${tr}) = ${v.nl}`;
  return `${v.errors}x fout — focus: "${tr}" = ${v.nl}`;
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
  Object.values(S.vocab).forEach(v=>{
    if(!v.nr||v.mastery<=1)return;
    const overdueDays=(now-new Date(v.nr))/86400000;
    if(overdueDays>14){
      // Extra stap bij lang verwaarloosd (45+ dagen)
      const steps=overdueDays>45?2:1;
      v.mastery=Math.max(0,v.mastery-steps);
      v.nr=now.toISOString();
    }
  });
  save(); // altijd opslaan zodat lastDecayCheck gepersisteerd wordt
}

