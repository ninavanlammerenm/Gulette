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
// SPACED REPETITION — 5-niveaus mastery systeem
// 1=Gezien, 2=Herkend, 3=Begrijpt, 4=Beheerst, 5=Gemeisterd
// MCQ/WB tellen alleen voor 1→2; typen is de weg naar 3-5.
// ══════════════════════════════════════════════════════
function logXP(amount){
  if(!amount||amount<=0)return;
  if(!S.xpLog)S.xpLog={};
  const today=new Date().toISOString().slice(0,10);
  S.xpLog[today]=(S.xpLog[today]||0)+amount;
  save();
}

function _computeNaturalLevel(v){
  const tc=v.typeCorrect||0;
  const tl=v.typeLast5||[];
  const mc=v.mcCorrect||0;
  const fs=v.firstSeen?new Date(v.firstSeen):null;
  const daysSeen=fs?((Date.now()-fs)/86400000):0;

  if(tc>=5 && tl.length>=3 && tl.slice(-3).every(Boolean) && daysSeen>=7) return 5;
  if(tc>=3 && tl.length>=3 && tl.filter(x=>!x).length<=1) return 4;
  if(tc>=1) return 3;
  if(mc>=2) return 2;
  return 1;
}

function updMastery(hz, ok, exType){
  if(!S.vocab[hz])return;
  const v=S.vocab[hz];
  if(!v.firstSeen) v.firstSeen=new Date().toISOString();
  if(!v.ease) v.ease=2.5;
  if(v.consec===undefined) v.consec=0;

  const isType=exType==='type';
  const isHint=exType==='hint';
  const isMc=['mc','mc_nl','mc_hz','wb','listen','cloze','order'].includes(exType);

  if(ok){
    v.consec++;
    v.ease=Math.min(3.2,v.ease+0.05);
    if(isType){
      v.typeCorrect=(v.typeCorrect||0)+1;
      v.typeLast5=[...(v.typeLast5||[]),true].slice(-5);
    }
    if(isMc) v.mcCorrect=(v.mcCorrect||0)+1;
    const natural=_computeNaturalLevel(v);
    v.masteryLevel=Math.max(v.masteryLevel||1,natural);
  } else {
    v.consec=0;
    v.ease=Math.max(1.3,v.ease-0.2);
    v.errors=(v.errors||0)+1;
    if(isType||isHint){
      if(isType) v.typeLast5=[...(v.typeLast5||[]),false].slice(-5);
      v.masteryLevel=Math.max(1,(v.masteryLevel||1)-1);
    }
    if(isMc){
      const natural=_computeNaturalLevel(v);
      v.masteryLevel=Math.min(v.masteryLevel||1,natural);
    }
  }

  const lvl=v.masteryLevel||1;
  if(ok){
    if(lvl>=5){
      v.masteryLevel=5;
      v.nr=new Date(Date.now()+30*86400000).toISOString();
    } else {
      const base=[0,0.007,1,3,14];
      let d=base[Math.min(lvl-1,4)];
      if(v.consec>=3) d=Math.round(d*v.ease);
      v.nr=new Date(Date.now()+Math.max(0.007,d)*86400000).toISOString();
    }
  } else {
    if(lvl>=5) v.masteryLevel=4;
    const delay=lvl<=2?10*60*1000:60*60*1000;
    v.nr=new Date(Date.now()+delay).toISOString();
  }

  // compat: sync old field for any code still reading it
  v.mastery=Math.max(0,lvl-1);
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
  const m=new Date(new Date(d).setDate(diff));
  m.setHours(0,0,0,0);
  return m;
}

function migrateVocab(){
  let changed=false;
  Object.values(S.vocab).forEach(v=>{
    if(v.masteryLevel!==undefined) return;
    changed=true;
    const old=v.mastery||0;
    v.masteryLevel=Math.max(1,Math.min(5,old+1));
    if(!v.firstSeen) v.firstSeen=new Date(Date.now()-30*86400000).toISOString();
    if(!v.typeCorrect) v.typeCorrect=old>=2?old-1:0;
    if(!v.typeLast5) v.typeLast5=v.typeCorrect>0?Array(Math.min(v.typeCorrect,5)).fill(true):[];
    if(!v.mcCorrect) v.mcCorrect=old>=1?2:0;
  });
  if(changed) save();
}

function migrateVocabKeys(){
  const VOCAB_MIGRATIONS={
    'صورتی':'گلابی',
    'مانده':'خسته',
    'باوا':'پدر',
    'باواکلان':'پدرکلان',
    'بابا':'پدر',
    'آو':'آب',
    'آفتاب':'خورشید',
    'باز می‌بینیم':'بعداً می‌بینمت',
  };
  let changed=false;
  for(const [oldHz,newHz] of Object.entries(VOCAB_MIGRATIONS)){
    if(!S.vocab[oldHz]) continue;
    if(S.vocab[newHz]){
      const oldLvl=S.vocab[oldHz].masteryLevel||1;
      const newLvl=S.vocab[newHz].masteryLevel||1;
      if(oldLvl>newLvl){
        S.vocab[newHz]=S.vocab[oldHz];
        console.log(`[Gulette migratie] ${oldHz} → ${newHz} (mastery ${oldLvl} overgenomen, was ${newLvl})`);
      } else {
        console.log(`[Gulette migratie] ${oldHz} verwijderd (${newHz} had al mastery ${newLvl})`);
      }
    } else {
      S.vocab[newHz]=S.vocab[oldHz];
      console.log(`[Gulette migratie] ${oldHz} → ${newHz} (voortgang behouden)`);
    }
    delete S.vocab[oldHz];
    changed=true;
  }
  if(changed) save();
}

function syncVocabDefinitions(){
  let changed=false;
  CHAPTERS.forEach(ch=>{
    ch.lessons.forEach(l=>{
      (l.words||[]).forEach(w=>{
        const v=S.vocab[w.hz];
        if(!v)return;
        if(v.nl!==w.nl||v.tr!==(w.tr||'')){
          v.nl=w.nl;
          v.tr=w.tr||'';
          changed=true;
        }
      });
    });
  });
  if(changed) save();
}

function applyMasteryDecay(){
  const today=new Date().toISOString().slice(0,10);
  if(S.lastDecayCheck===today)return;
  S.lastDecayCheck=today;
  const now=new Date();
  Object.values(S.vocab).forEach(v=>{
    if(!v.nr||(v.masteryLevel||1)<=1)return;
    const overdueDays=(now-new Date(v.nr))/86400000;
    if(overdueDays>14){
      const steps=overdueDays>45?2:1;
      v.masteryLevel=Math.max(1,(v.masteryLevel||1)-steps);
      v.mastery=Math.max(0,v.masteryLevel-1);
      v.nr=now.toISOString();
    }
  });
  save();
}

