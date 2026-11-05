// ══════════════════════════════════════════════════════
// WERKWOORDEN — welk werkwoord gebruik je?
// Veel Hazaragi-werkwoorden = een woord + een hulpwerkwoord:
//   kaar (werk) + mukunum (ik doe) = ik werk
//   khwab (slaap) + mi-shum (ik word) = ik ga slapen
// Dit tabblad traint welk hulpwerkwoord (of welk werkwoord) erbij hoort.
// Eigen voortgang in S.wwvocab (sleutel = Hazaragi-werkwoord, bijv. 'کار می‌کنم').
// Ids (ww_…) nooit wijzigen of hergebruiken.
// ══════════════════════════════════════════════════════
const WW_HELP={
  kardan:{nl:'doen / maken',ico:'🛠️',expl:'Voor dingen die je dóét: werken, wonen, helpen, denken, koken, vinden.',
    forms:{'1s':['می‌کنم','mukunum','ik doe'],'2s':['می‌کنی','mukuni','jij doet'],'3s':['می‌کنه','mukuna','het doet']},fams:['doen','doen (verleden)']},
  shudan:{nl:'worden',ico:'🌙',expl:'Voor een verandering: wakker worden, gaan slapen, je klaarmaken, naar buiten gaan, klaar zijn.',
    forms:{'1s':['می‌شم','mi-shum','ik word'],'2s':['می‌شی','mi-shi','jij wordt'],'3s':['می‌شه','mi-sha','het wordt']},fams:['worden']},
  dashtan:{nl:'hebben',ico:'🤲',expl:'Voor iets wat je hebt of voelt: tijd hebben, ergens van houden, werk te doen hebben.',
    forms:{'1s':['دارم','darum','ik heb'],'2s':['داری','dari','jij hebt'],'3s':['داره','daara','het heeft']},fams:['hebben']},
  zadan:{nl:'slaan → praten / dragen',ico:'💬',expl:'Voor praten (gap) en iets dragen, zoals een bril.',
    forms:{'1s':['می‌زنم','mi-zanum','ik sla'],'2s':['می‌زنی','mi-zani','jij slaat'],'3s':['می‌زنه','mi-zana','het slaat']},fams:['zanan (dragen/praten)']},
  dadan:{nl:'geven',ico:'🎁',expl:'Voor geven en betalen.',
    forms:{'1s':['می‌دم','me-dum','ik geef'],'2s':['می‌دی','me-di','jij geeft'],'3s':['می‌ده','me-da','het geeft']},fams:['geven']},
};
const WW_ORDER=['kardan','shudan','dashtan','zadan','dadan','','imp'];

const WW_RAW=[
  // woord + mukunum (doen)
  {id:'ww_kaar',nl:'werken',say:'ik werk',h:'kardan',core:['کار','kaar','werk']},
  {id:'ww_zendagi',nl:'wonen',say:'ik woon',h:'kardan',core:['زندگی','zendagi','leven']},
  {id:'ww_kumak',nl:'helpen',say:'ik help',h:'kardan',core:['کمک','kumak','hulp']},
  {id:'ww_fekr',nl:'denken',say:'ik denk',h:'kardan',core:['فکر','fekr','gedachte']},
  {id:'ww_pukhsa',nl:'koken',say:'ik kook',h:'kardan',core:['پخته','pukhsa','gekookt']},
  {id:'ww_paida',nl:'vinden',say:'ik vind (iets terug)',h:'kardan',core:['پیدا','paida','gevonden']},
  {id:'ww_tarif',nl:'een compliment geven',say:'jij geeft een compliment',h:'kardan',p:'2s',core:['تعریف','tarif','lof']},
  {id:'ww_faramosh',nl:'vergeten (iets)',say:'ik vergeet het',h:'kardan',core:['فراموش','faramosh','vergeten']},
  {id:'ww_farq',nl:'uitmaken',say:'het maakt niet uit',h:'kardan',p:'3s',hf:['نمی‌کنه','nami-kuna','het doet niet'],core:['فرق','farq','verschil']},
  // woord + mi-shum (worden)
  {id:'ww_khwab',nl:'gaan slapen',say:'ik ga slapen',h:'shudan',core:['خواب','khwab','slaap']},
  {id:'ww_bedar',nl:'wakker worden',say:'ik word wakker',h:'shudan',core:['بیدار','bedar','wakker']},
  {id:'ww_tayar',nl:'je klaarmaken',say:'ik maak me klaar',h:'shudan',core:['تیار','tayar','klaar']},
  {id:'ww_berun',nl:'naar buiten gaan',say:'ik ga naar buiten',h:'shudan',core:['بیرون','berun','buiten']},
  {id:'ww_khalas',nl:'klaar / afgelopen zijn',say:'het is afgelopen',h:'shudan',p:'3s',core:['خلاص','khalas','klaar, op']},
  {id:'ww_khoshhal',nl:'blij worden',say:'hij/zij wordt blij',h:'shudan',p:'3s',core:['خوشحال','khosh-hal','blij']},
  {id:'ww_gum',nl:'kwijt zijn',say:'het is kwijt',h:'shudan',p:'3s',hf:['شده','shuda','is geworden'],core:['گم','gum','kwijt']},
  {id:'ww_tir',nl:'voorbij zijn (tijd)',say:'het is over (vijf over…)',h:'shudan',p:'3s',hf:['شده','shuda','is geworden'],core:['تیر','tir','voorbij']},
  // woord + darum (hebben)
  {id:'ww_khosh',nl:'houden van',say:'ik hou van / vind lekker',h:'dashtan',core:['خوش','khosh','fijn']},
  {id:'ww_wakht',nl:'tijd hebben',say:'ik heb tijd',h:'dashtan',core:['وقت','wakht','tijd']},
  {id:'ww_kaardarum',nl:'werk te doen hebben',say:'ik heb werk te doen',h:'dashtan',core:['کار','kaar','werk']},
  {id:'ww_khabar',nl:'ervan weten',say:'weet jij ervan?',h:'dashtan',p:'2s',core:['خبر','khabar','nieuws']},
  {id:'ww_khoshmeya',nl:'heerlijk vinden',say:'ik vind het heerlijk (het bevalt me)',h:'dashtan',p:'3s',hf:['میایه','me-ya','het komt'],fams:['komen'],avoid:['dashtan'],core:['خوش','khosh','fijn'],note:'maana … khosh me-ya — vergelijk: khosh darum = ik hou van'},
  // woord + mi-zanum (slaan)
  {id:'ww_gap',nl:'praten',say:'ik praat',h:'zadan',core:['گپ','gap','gesprek']},
  {id:'ww_aynak',nl:'een bril dragen',say:'ik draag een bril',h:'zadan',core:['عینک','aynak','bril']},
  // woord + me-dum (geven)
  {id:'ww_pisa',nl:'betalen',say:'ik betaal',h:'dadan',core:['پیسه','pisa','geld']},
  // gewone werkwoorden (zonder hulpwerkwoord)
  {id:'ww_khastan',nl:'willen',say:'ik wil',hz:'می‌خایم',tr:'mi-khayum',fam:'willen'},
  {id:'ww_khurdan',nl:'eten / drinken',say:'ik eet / drink',hz:'می‌خورم',tr:'mi-khurum',fam:'eten/drinken'},
  {id:'ww_didan',nl:'zien / kijken',say:'ik zie / kijk',hz:'می‌بینم',tr:'mi-binum',fam:'zien'},
  {id:'ww_amadan',nl:'komen',say:'ik kom',hz:'می‌آیم',tr:'mi-yum',fam:'komen'},
  {id:'ww_raftan',nl:'gaan',say:'wij gaan',hz:'می‌ریم',tr:'murem',fam:'gaan'},
  {id:'ww_khandan',nl:'lezen / studeren',say:'ik lees / studeer',hz:'می‌خوانم',tr:'mi-khanum',fam:'studeren'},
  {id:'ww_shustan',nl:'(je) wassen',say:'ik was (me)',hz:'می‌شویم',tr:'mi-shoyam',fam:'wassen'},
  {id:'ww_kharidan',nl:'kopen',say:'ik koop',hz:'می‌خرم',tr:'mi-kharum',fam:'kopen'},
  {id:'ww_budan',nl:'zijn',say:'ik ben',hz:'استم',tr:'astum',fam:'zijn'},
  {id:'ww_danistan',nl:'(niet) weten',say:'ik weet het niet',hz:'نمی‌دانم',tr:'nami-danom',fam:'weten'},
  {id:'ww_fahmidan',nl:'(niet) begrijpen',say:'ik begrijp het niet',hz:'نمی‌فهمم',tr:'nami-famum',fam:'weten'},
  {id:'ww_dashtan',nl:'hebben',say:'ik heb',hz:'دارم',tr:'darum',fam:'hebben'},
  {id:'ww_budum',nl:'zijn (verleden)',say:'ik was',hz:'بودم',tr:'budum',fam:'zijn (verleden)'},
  {id:'ww_baridan',nl:'regenen',say:'het regent',hz:'می‌باره',tr:'mubaara',fam:'regenen'},
  {id:'ww_guftan',nl:'zeggen',say:'ze zeggen',hz:'می‌گن',tr:'mugan',fam:'zeggen'},
  {id:'ww_guzashtan',nl:'leggen / neerzetten',say:'jij hebt het gelegd',hz:'گذاشتی',tr:'guzashti',fam:'leggen'},
  {id:'ww_pushidan',nl:'aantrekken / dragen (kleding)',say:'ik trek aan',hz:'می‌پوشم',tr:'mi-pushum',fam:'aantrekken'},
  {id:'ww_darawardan',nl:'uittrekken',say:'ik heb het uitgetrokken',hz:'در آوردم',tr:'dar awardum',fam:'uittrekken'},
  {id:'ww_yad',nl:'vergeten',say:'ik ben het vergeten',hz:'یاد من رفته',tr:'yad-e ma rafta',fam:''},
  // opdrachten (gebiedende wijs)
  {id:'ww_neshined',nl:'gaan zitten',say:'ga zitten! (beleefd)',hz:'بشینید',tr:'neshined',fam:'',g:'imp'},
  {id:'ww_biya',nl:'komen (opdracht)',say:'kom!',hz:'بیا',tr:'biya',fam:'',g:'imp'},
  {id:'ww_beger',nl:'pakken',say:'pak het!',hz:'بگیر',tr:'beger',fam:'',g:'imp'},
  {id:'ww_biyared',nl:'brengen',say:'breng! (beleefd)',hz:'بیارید',tr:'biyared',fam:'',g:'imp'},
  {id:'ww_bukhur',nl:'eten (opdracht)',say:'eet!',hz:'بخور',tr:'bukhur',fam:'',g:'imp'},
  {id:'ww_zahmat',nl:'moeite doen',say:'doe geen moeite!',hz:'زحمت نکشید',tr:'zahmat nakashid',fam:'',g:'imp'},
];
// Volledige vorm per werkwoord (woord + hulpwerkwoord in de juiste persoon)
const WW=WW_RAW.map(e=>{
  if(!e.h) return {...e,core:null,p:'1s',fams:e.fam?[e.fam]:[],grp:e.g||''};
  const p=e.p||'1s', f=e.hf||WW_HELP[e.h].forms[p];
  return {...e,p,hz:e.core[0]+' '+f[0],tr:e.core[1]+' '+f[1],core:{hz:e.core[0],tr:e.core[1],nl:e.core[2]},helper:{hz:f[0],tr:f[1],nl:f[2]},fams:e.fams||WW_HELP[e.h].fams,grp:e.h};
});

function _wwStore(){ if(!S.wwvocab) S.wwvocab={}; return S.wwvocab; }
function _wwLog(){ if(!S.wwLog) S.wwLog={mix:{}}; if(!S.wwLog.mix) S.wwLog.mix={}; return S.wwLog; }
function _wwV(e){
  const st=_wwStore();
  if(!st[e.hz]) st[e.hz]={id:e.id,nl:e.say,tr:e.tr,mastery:0,masteryLevel:1,nr:null,errors:0,firstSeen:null,typeCorrect:0,typeLast5:[],mcCorrect:0,intro:false};
  return st[e.hz];
}
function _wwIntro(e){ const v=_wwStore()[e.hz]; return !!v&&v.intro===true; }
function _wwDue(e){ const v=_wwStore()[e.hz]; return !!v&&v.intro===true&&isDue(v)&&!(v.snooze&&v.snooze>Date.now()); }
function _wwLvl(e){ const v=_wwStore()[e.hz]; return v?(v.masteryLevel||1):1; }

// Helper-verwarring: welk hulpwerkwoord kies je waar een ander hoort?
function _wwHelperOf(label){
  label=String(label||'').toLowerCase();
  for(const [k,h] of Object.entries(WW_HELP)) for(const f of Object.values(h.forms)) if(f[0]===label||f[1]===label) return k;
  return null;
}
function wwLogMix(correct,chosen){
  const a=_wwHelperOf(correct), b=_wwHelperOf(chosen); if(!a||!b||a===b) return;
  const log=_wwLog(), k=a+'|'+b; log.mix[k]=(log.mix[k]||0)+1; save();
}

// ── Zinnen uit je bijles waarin dit werkwoord voorkomt ──
function _wwSentences(e,roman){
  const out=[], seen=new Set();
  const R=roman?1:0;
  (typeof _bjList==='function'?_bjList():[]).forEach(l=>l.items.forEach(it=>{
    const text=(roman?(it.tr||''):it.hz).trim();
    if(!text||seen.has(text)) return;
    const toks=text.split(/\s+/); if(toks.length<3||toks.length>9||text.includes('…')) return;
    const cores=toks.map(t=>_bjCore(t).toLowerCase());
    for(let i=0;i<toks.length;i++){
      const f=_bjFormOf(cores[i]);
      if(!f||!e.fams.includes(f.fam)) continue;
      if(e.core){ if(i===0||cores[i-1]!==(R?e.core.tr:e.core.hz)) continue; }
      else if(f.fam==='weten'&&f.hz!==e.hz) continue;
      seen.add(text); out.push({text,nl:it.nl,tr:it.tr||'',form:f,vi:i}); return;
    }
    // Werkwoorden zonder familie in de werkwoordenlijst (opdrachten, uitdrukkingen): letterlijk zoeken
    if(!e.fams.length||e.hf){
      const want=(R?e.tr:e.hz).split(/\s+/).map(t=>_bjCore(t).toLowerCase());
      for(let i=0;i+want.length<=cores.length;i++){
        if(want.every((w,j)=>cores[i+j]===w)){ seen.add(text); out.push({text,nl:it.nl,tr:it.tr||'',form:{p:e.p},vi:i}); return; }
      }
    }
  }));
  return out;
}

// ── Oefeningen ──
function _wwLabel(hzTr,roman){ return roman?hzTr[1]:hzTr[0]; }
function _wwBuild(entries,roman){
  const r1=[],r2=[], extraWords=[];
  const show=e=>roman?e.tr:e.hz;
  const others=WW.filter(x=>!x.core);
  const othersFor=e=>{ const same=others.filter(x=>x!==e&&x.grp===e.grp&&x.say!==e.say); return same.length>=3?same:others.filter(x=>x!==e&&x.say!==e.say); };
  shuffle([...entries]).forEach(e=>{
    const v=_wwV(e);
    const lvl=Math.max(1,(v.masteryLevel||1)-(_bjDiff(v)>=0.5&&(v.masteryLevel||1)>1?1:0));
    const wd={hz:show(e),nl:e.say,tr:roman?'':e.tr};
    // 1. Welk werkwoord? (zelfde woord met andere hulpwerkwoorden als valkuil)
    let choices;
    if(e.core){
      const wrong=shuffle(Object.keys(WW_HELP).filter(k=>k!==e.h&&!(e.avoid||[]).includes(k))).slice(0,2).map(k=>{
        const f=WW_HELP[k].forms[e.p]||WW_HELP[k].forms['1s'];
        const lab=roman?e.core.tr+' '+f[1]:e.core.hz+' '+f[0];
        extraWords.push({hz:lab,nl:'',tr:roman?'':e.core.tr+' '+f[1]});
        return lab;
      });
      const other=shuffle(WW.filter(x=>x!==e&&x.say!==e.say)).slice(0,1).map(show);
      choices=shuffle([show(e),...wrong,...other]);
    } else {
      choices=shuffle([show(e),...shuffle(othersFor(e)).slice(0,3).map(show)]);
    }
    const which={type:'mc_hz',w:wd,choices};
    // 2. Welk hulpwerkwoord?
    let help=null;
    if(e.core){
      const keys=Object.keys(WW_HELP).filter(k=>k!==e.h&&!(e.avoid||[]).includes(k));
      const labs=[[e.helper.hz,e.helper.tr],...keys.map(k=>{const f=WW_HELP[k].forms[e.p]||WW_HELP[k].forms['1s'];return [f[0],f[1]];})];
      const correct=_wwLabel([e.helper.hz,e.helper.tr],roman);
      const opts=shuffle(labs.map(x=>_wwLabel(x,roman)).filter(x=>x!==correct)).slice(0,3);
      const trs={}; if(!roman) labs.forEach(x=>{trs[x[0]]=x[1];});
      help={type:'cloze',title:'Welk hulpwerkwoord?',q:`Welk hulpwerkwoord hoort bij <b>${e.core[roman?'tr':'hz']}</b> (${e.core.nl})?`,trs,
        s:{hz:show(e),nl:e.say,tr:roman?'':e.tr},w:{hz:correct,nl:`${e.helper.nl} — ${e.nl}`,tr:roman?'':e.helper.tr},choices:shuffle([correct,...opts])};
    }
    // 3. Maak de zin (uit je bijles) met verkeerde hulpwerkwoorden als lokwoord
    const sents=_wwSentences(e,roman);
    let build=null;
    if(sents.length){
      const s=sents[Math.floor(Math.random()*sents.length)];
      const toks=s.text.split(/\s+/);
      const p=s.form.p||e.p;
      const lure=e.core
        ? shuffle(Object.keys(WW_HELP).filter(k=>k!==e.h&&!(e.avoid||[]).includes(k))).slice(0,2).map(k=>_wwLabel(WW_HELP[k].forms[p]||WW_HELP[k].forms['1s'],roman))
        : shuffle(othersFor(e).filter(x=>!e.fam||x.fam!==e.fam)).slice(0,2).map(show);
      const tk=new Set(toks.map(_bjCore));
      build={type:'order',title:'Maak de zin',q:'Zet de woorden in de goede volgorde:',bjExType:'order_bj',key:e.hz,
        s:{hz:toks.join(' '),nl:s.nl,tr:roman?'':s.tr},distractors:lure.filter(x=>!tk.has(x))};
    }
    // 4. Zelf typen
    const type={type:'type',w:wd};
    const part=(hz,tr)=>roman?tr:`${hz} (${tr})`;
    const intro={type:'intro',w:{...wd,tip:e.core?`${part(e.core.hz,e.core.tr)} = ${e.core.nl}  +  ${part(e.helper.hz,e.helper.tr)} = ${e.helper.nl}`:`Gewoon werkwoord (zonder hulpwerkwoord): ${e.nl}`},ctxSentence:null};
    if(lvl===1){ r1.push(intro,which); r2.push(help||which); }
    else if(lvl===2){ r1.push(help||which); r2.push(build||which); }
    else { r1.push(which); r2.push(type); if(build) r2.push(build); }
  });
  return {exs:[...r1,...shuffle(r2)],extraWords};
}

const WW_NEW_PER_SESSION=5;
function wwStartSession(list,title){
  if(!list.length){showToast('Alles herhaald — kom later terug');return;}
  const roman=_bjPracticeScript()==='roman';
  const alias={}; if(roman) WW.forEach(e=>{ if(!alias[e.tr]) alias[e.tr]=e.hz; });
  const now=new Date().toISOString();
  list.forEach(e=>{ const v=_wwV(e); if(!v.intro){ v.intro=true; v.firstSeen=now; } });
  save();
  const {exs,extraWords}=_wwBuild(list,roman);
  CL={
    id:'_ww',
    title:title||'Werkwoorden',
    xp:Math.min(60,list.length*4),
    // Alle werkwoorden (ook de foute keuzes) met uitspraak, zodat de uitspraakknop niets verraadt
    words:[...list.map(e=>({hz:roman?e.tr:e.hz,nl:e.say,tr:roman?'':e.tr})),...WW.filter(e=>!list.includes(e)).map(e=>({hz:roman?e.tr:e.hz,nl:e.say,tr:roman?'':e.tr})),...extraWords],
    sentences:[],
    _bjHz:new Set(list.map(e=>e.hz)),
    _bjAlias:alias,
    _bjRoman:roman
  };
  EXS=exs;
  _launchLesson();
}
// Herhaling: wat aan de beurt is (moeilijkste eerst, met afwisseling) + een paar nieuwe
function wwStartReview(group){
  const pool=WW.filter(e=>group===undefined||group===null||e.grp===group);
  const st=_wwStore(), now=Date.now();
  let due=pool.filter(_wwDue);
  const rested=due.filter(e=>!st[e.hz].seenAt||now-st[e.hz].seenAt>8*3600e3);
  if(rested.length>=Math.min(6,due.length)) due=rested;
  due=due.map(e=>({e,s:_bjDiff(st[e.hz])*1.5+Math.random()*1.5})).sort((a,b)=>b.s-a.s).slice(0,12).map(x=>x.e);
  const fresh=pool.filter(e=>!_wwIntro(e)).slice(0,WW_NEW_PER_SESSION);
  let list=[...due,...fresh];
  if(!list.length&&group!==undefined&&group!==null) list=shuffle(pool).slice(0,8); // groep al geleerd: gewoon oefenen
  wwStartSession(list,group!==undefined&&group!==null?(WW_HELP[group]?`Hulpwerkwoord: ${WW_HELP[group].forms['1s'][1]}`:group==='imp'?'Opdrachten':'Gewone werkwoorden'):'Werkwoorden');
}

// ── Scherm ──
function renderWW(){
  const wrap=document.getElementById('ww-content'); if(!wrap) return;
  const sc=_bjScript(); // zelfde schriftkeuze als de Bijles-tab
  const due=WW.filter(_wwDue).length, nw=Math.min(WW_NEW_PER_SESSION,WW.filter(e=>!_wwIntro(e)).length);
  const known=WW.filter(e=>_wwLvl(e)>=2&&_wwIntro(e)).length;
  document.getElementById('ww-sub').textContent=`${known} van ${WW.length} werkwoorden onder de knie`;
  const fmt=(hz,tr)=>sc==='roman'?`<b>${_bjEsc(tr)}</b>`:sc==='dari'?`<b class="ww-hz">${_bjEsc(hz)}</b>`:`<b class="ww-hz">${_bjEsc(hz)}</b> <span class="ww-tr">${_bjEsc(tr)}</span>`;
  // Inzicht: welk hulpwerkwoord verwar je?
  const mix=Object.entries(_wwLog().mix).filter(([,n])=>n>=2).sort((a,b)=>b[1]-a[1])[0];
  const mixLine=mix?(()=>{const [a,b]=mix[0].split('|');const fa=WW_HELP[a].forms['1s'],fb=WW_HELP[b].forms['1s'];
    return `<div class="bj-insights"><div class="bj-notes-lbl">Let op</div><div class="bj-ins-line">Je kiest vaak <b>${_bjEsc(fb[1])}</b> (${WW_HELP[b].nl}) waar <b>${_bjEsc(fa[1])}</b> (${WW_HELP[a].nl}) hoort (${mix[1]}×). Kijk nog eens naar de groep “${WW_HELP[a].nl}”.</div></div>`;})():'';
  const groups=WW_ORDER.map(k=>{
    const items=WW.filter(e=>e.grp===k);
    const h=WW_HELP[k]||null;
    const head=h?`<div class="ww-group-head"><span class="ww-ico">${h.ico}</span><div><div class="ww-group-ttl">… + ${fmt(h.forms['1s'][0],h.forms['1s'][1])} <span class="ww-group-nl">(${h.nl})</span></div><div class="ww-group-expl">${h.expl}</div></div></div>`
      :k==='imp'?`<div class="ww-group-head"><span class="ww-ico">👉</span><div><div class="ww-group-ttl">Opdrachten</div><div class="ww-group-expl">Als je iemand iets vraagt of aanbiedt: kom, ga zitten, pak, breng.</div></div></div>`
      :`<div class="ww-group-head"><span class="ww-ico">⭐</span><div><div class="ww-group-ttl">Gewone werkwoorden</div><div class="ww-group-expl">Zonder hulpwerkwoord: het werkwoord zelf draagt de betekenis.</div></div></div>`;
    const rows=items.map(e=>`<div class="ww-row" data-hz="${_bjEsc(e.hz)}" data-tr="${_bjEsc(e.tr)}" onclick="speakHz(this.dataset.hz,this.dataset.tr)">
        <div class="ww-row-nl">${_bjEsc(e.nl)}</div>
        <div class="ww-row-hz">${e.core?`${fmt(e.core.hz,e.core.tr)} <span class="ww-plus">+</span> ${fmt(e.helper.hz,e.helper.tr)}`:fmt(e.hz,e.tr)}${e.note?`<div class="bj-item-note">${_bjEsc(e.note)}</div>`:''}</div>
        <div class="m-pips">${masteryPips(_wwIntro(e)?_wwLvl(e):0)}</div>
      </div>`).join('');
    return `<div class="ww-group">${head}${rows}<button class="bj-link-btn" style="margin:6px 0 0" onclick="wwStartReview('${k}')">Oefen deze groep →</button></div>`;
  }).join('');
  wrap.innerHTML=`
    <div class="ww-explain">
      <div class="bj-notes-lbl">Zo werkt het</div>
      Veel Hazaragi-werkwoorden zijn <b>een woord + een hulpwerkwoord</b>:<br>
      ${fmt('کار','kaar')} (werk) + ${fmt('می‌کنم','mukunum')} (ik doe) = <b>ik werk</b><br>
      ${fmt('خواب','khwab')} (slaap) + ${fmt('می‌شم','mi-shum')} (ik word) = <b>ik ga slapen</b><br>
      Welk hulpwerkwoord erbij hoort, volgt niet uit het Nederlands — dat leer je per werkwoord. Daar oefen je hier op.
    </div>
    <div class="review-hero${due||nw?'':' done'}" style="margin:0 0 14px" onclick="${due||nw?'wwStartReview()':"showToast('Alles herhaald — kom later terug')"}">
      <div class="rh-deco">🔤</div>
      <div class="rh-title">Werkwoorden oefenen</div>
      <div class="rh-count">${due}</div>
      <div class="rh-label">te herhalen${nw?` · ${nw} nieuw`:''}</div>
      <div class="rh-btn">${due||nw?'Begin →':'Alles herhaald ✓'}</div>
    </div>
    ${mixLine}
    ${_bjScriptBar().replace(/bjSetScript\(/g,'wwSetScript(')}
    <div class="bj-daily-row"><span>Oefenen in</span><span style="display:flex;gap:6px">
      <button class="fc${_bjPracticeScript()==='dari'?' on':''}" onclick="wwSetPractice('dari')">دری Dari</button>
      <button class="fc${_bjPracticeScript()==='roman'?' on':''}" onclick="wwSetPractice('roman')">Roman</button></span></div>
    ${groups}`;
}
function wwSetScript(m){ S.bjScript=m; save(); renderWW(); }
function wwSetPractice(m){ S.bjPracticeScript=m; save(); renderWW(); }
