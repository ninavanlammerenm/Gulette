// ══════════════════════════════════════════════════════
// BIJLES — eigen woorden/zinnen + aantekeningen per bijles
// S.bijles = [{id, date, title, notes, items:[{id, section, hz, tr, nl, note}]}]
// Bijleswoorden staan LOS van de lessen: eigen voortgang in S.bvocab
// (sleutel = Hazaragi-tekst). Ze doen wel mee in de dagelijkse herhaling,
// en hebben daarnaast een eigen bijles-herhaling.
// Vooraf ingeladen bijlessen (uit de PDF's) staan in js/bijlesdata.js.
// ══════════════════════════════════════════════════════
let _bjOpen=null; // id van de bijles die openstaat

function _bjList(){ if(!Array.isArray(S.bijles)) S.bijles=[]; return S.bijles; }
function _bjStore(){ if(!S.bvocab) S.bvocab={}; return S.bvocab; }
function _bjId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function _bjEsc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
// Quotes/backslashes breken de onclick- en data-attributen in de oefeningen
function _bjClean(s){ return String(s||'').replace(/["\\<>]/g,'').replace(/\s+/g,' ').trim(); }
function _bjDate(iso){
  if(!iso) return '';
  const d=new Date(iso+'T12:00:00');
  return isNaN(d)?iso:d.toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'});
}
// Schrift in de Bijles-tab: 'both' (Dari + Latijns), 'dari' of 'roman'
function _bjScript(){ return ['dari','roman','both'].includes(S.bjScript)?S.bjScript:'both'; }
function bjToggleDaily(){
  S.bjInDaily=!bjInDaily(); save(); renderBijles();
  showToast(bjInDaily()?'Bijleswoorden doen nu ook mee in de dagelijkse herhaling':'Dagelijkse herhaling en bijles-herhaling zijn nu los');
}
function bjSetScript(m){ S.bjScript=m; save(); renderBijles(); }
function _bjScriptBar(){
  const m=_bjScript();
  const b=(k,l)=>`<button class="fc${m===k?' on':''}" onclick="bjSetScript('${k}')">${l}</button>`;
  return `<div class="bj-script-bar"><span class="bj-script-lbl">Schrift</span>${b('dari','دری Dari')}${b('roman','Roman')}${b('both','Beide')}</div>`;
}
// Hoofdtekst + onderregel van een item, afhankelijk van de schriftkeuze
function _bjItemText(it){
  const m=_bjScript();
  if(m==='roman') return {main:'',sub:`<div class="bj-item-rm">${_bjEsc(it.tr||it.hz)}</div>`};
  if(m==='dari') return {main:`<div class="bj-item-hz">${_bjEsc(it.hz)}</div>`,sub:it.tr?`<div class="wc-pron">${_bjEsc(it.tr)}</div>`:''};
  return {main:`<div class="bj-item-hz">${_bjEsc(it.hz)}</div>`,sub:it.tr?`<div class="bj-roman">${_bjEsc(it.tr)}</div>`:''};
}
function _bjPreview(l){
  const roman=_bjScript()==='roman';
  return `<div class="${roman?'bj-card-rm':'bj-card-hz'}">${l.items.slice(0,4).map(i=>_bjEsc(roman?(i.tr||i.hz):i.hz)).join(' · ')}</div>`;
}

function _bjFind(id){ return _bjList().find(l=>l.id===id); }
function _bjAllItems(){ return _bjList().flatMap(l=>l.items); }

// ── Koppeling met S.bvocab ──
function _bjAddVocab(it){
  const st=_bjStore();
  if(st[it.hz]) return; // zelfde tekst staat al in een andere bijles — voortgang delen
  st[it.hz]={id:'bijles_'+it.id,nl:it.nl,tr:it.tr||'',tag:'',mastery:0,masteryLevel:1,nr:null,errors:0,firstSeen:new Date().toISOString(),typeCorrect:0,typeLast5:[],mcCorrect:0};
}
function _bjHzInUse(hz,exceptItem){ return _bjAllItems().some(i=>i!==exceptItem&&i.hz===hz); }
function _bjUpdateVocab(it,oldHz){
  const st=_bjStore();
  if(oldHz!==it.hz && st[oldHz]){
    // Tekst aangepast: voortgang verhuist mee naar de nieuwe tekst
    if(!st[it.hz]) st[it.hz]=st[oldHz];
    if(!_bjHzInUse(oldHz,it)) delete st[oldHz];
  }
  if(!st[it.hz]) _bjAddVocab(it);
  st[it.hz].nl=it.nl; st[it.hz].tr=it.tr||'';
}
function _bjRemoveVocab(it){ if(!_bjHzInUse(it.hz,it)) delete _bjStore()[it.hz]; }

// ── Migratie + vooraf ingeladen bijlessen ──
function seedBijles(){
  let changed=false;
  const st=_bjStore();
  // Oude versie zette bijleswoorden in S.vocab — verhuizen naar S.bvocab
  for(const [hz,v] of Object.entries(S.vocab||{})){
    if(v&&typeof v.id==='string'&&v.id.startsWith('bijles_')){
      if(!st[hz]) st[hz]=v;
      delete S.vocab[hz];
      changed=true;
    }
  }
  // Stappen-systeem: items met voortgang gelden als al geleerd (intro)
  for(const v of Object.values(st)){
    if(v&&v.intro===undefined){ v.intro=(v.masteryLevel||1)>1||(v.mcCorrect||0)>0||(v.typeCorrect||0)>0||(v.errors||0)>0; changed=true; }
  }
  if(!Array.isArray(S.bijlesSeeded)) S.bijlesSeeded=[];
  (typeof BIJLES_PRESET!=='undefined'?BIJLES_PRESET:[]).forEach(p=>{
    let l=_bjFind(p.id);
    if(!l){
      if(S.bijlesSeeded.includes(p.id)) return; // door gebruiker verwijderd
      l={id:p.id,title:p.title,date:p.date,notes:p.notes||'',items:[],removed:[],preset:{title:p.title,date:p.date,notes:p.notes||''}};
      _bjList().push(l);
      S.bijlesSeeded.push(p.id);
      changed=true;
    }
    // Velden die de gebruiker niet zelf heeft aangepast volgen de preset
    if(l.preset){
      ['title','date','notes'].forEach(f=>{
        const nv=p[f]||'';
        if(l.preset[f]!==nv){ if(l[f]===l.preset[f]) l[f]=nv; l.preset[f]=nv; changed=true; }
      });
    }
    if(!l.removed) l.removed=[];
    p.items.forEach((pi,idx)=>{
      let it=l.items.find(i=>i.id===pi.id);
      if(!it){
        if(l.removed.includes(pi.id)) return;
        it={id:pi.id,section:pi.section||'',hz:pi.hz,tr:pi.tr||'',nl:pi.nl,note:pi.note||'',preset:{hz:pi.hz,tr:pi.tr||'',nl:pi.nl,note:pi.note||''}};
        const after=idx>0?l.items.findIndex(i=>i.id===p.items[idx-1].id):-1;
        l.items.splice(after+1,0,it);
        _bjAddVocab(it);
        changed=true;
        return;
      }
      it.section=pi.section||'';
      if(!it.preset) return;
      const oldHz=it.hz;
      let touched=false;
      ['hz','tr','nl','note'].forEach(f=>{
        const nv=pi[f]||'';
        if(it.preset[f]!==nv){ if(it[f]===it.preset[f]) it[f]=nv; it.preset[f]=nv; touched=true; }
      });
      if(touched){ _bjUpdateVocab(it,oldHz); changed=true; }
    });
  });
  if(changed) save();
}

// ── Stappen: eerst woorden, dan zinnen ──
// Woorden = items van 1-2 woorden; zinnen = 3+ woorden. Zinnen van een les gaan
// pas mee in de (nieuwe) oefenstof als je 70% van de woorden van die les herkent.
const BJ_UNLOCK=0.7, BJ_NEW_PER_SESSION=8;
let _bjTab='words';
function _bjIsSentence(it){ return it.hz.trim().split(/\s+/).length>=3; }
function _bjKnown(v){ return !!v && (v.masteryLevel||1)>=2; }
function _bjIntro(v){ return !!v && v.intro===true; }
function _bjLessonStats(l){
  const st=_bjStore();
  const words=l.items.filter(i=>!_bjIsSentence(i)), sents=l.items.filter(_bjIsSentence);
  const wk=words.filter(i=>_bjKnown(st[i.hz])).length;
  const sk=sents.filter(i=>_bjKnown(st[i.hz])).length;
  const unlocked=!words.length||wk/words.length>=BJ_UNLOCK;
  const needed=Math.max(0,Math.ceil(words.length*BJ_UNLOCK)-wk);
  return {words,sents,wk,sk,unlocked,needed};
}
function _bjLessonsOrdered(){ return [..._bjList()].sort((a,b)=>(a.date||'').localeCompare(b.date||'')); }
// Nieuwe stof die nu aan de beurt is: oudste les eerst, woorden voor zinnen
function _bjNewCandidates(lessons){
  const st=_bjStore(), seen=new Set(), out=[];
  lessons.forEach(l=>{
    const s=_bjLessonStats(l);
    const add=it=>{ const v=st[it.hz]; if(!v||_bjIntro(v)||seen.has(it.hz))return; seen.add(it.hz); out.push(it.hz); };
    s.words.forEach(add);
    if(s.unlocked) s.sents.forEach(add);
  });
  return out;
}
// Alleen wat je al eens geleerd hebt telt als 'te herhalen'
function _bjDueKeys(lessons){
  const st=_bjStore();
  return [...new Set(lessons.flatMap(l=>l.items.map(i=>i.hz)))].filter(hz=>_bjIntro(st[hz])&&isDue(st[hz]));
}
function _bjBar(n,t){ const p=t?Math.round(n/t*100):0; return `<div class="bj-bar"><div class="bj-bar-fill" style="width:${p}%"></div></div>`; }

function renderBijles(){
  seedBijles();
  const wrap=document.getElementById('bj-content');
  if(!wrap) return;
  if(_bjOpen && _bjFind(_bjOpen)) return renderBijlesDetail();
  _bjOpen=null;
  const list=[..._bjList()].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const total=Object.keys(_bjStore()).length;
  document.getElementById('bj-sub').textContent=list.length?`${list.length} ${list.length===1?'bijles':'bijlessen'} · ${total} woorden en zinnen`:'Alles wat je op bijles leert';
  if(!list.length){
    wrap.innerHTML=`<div class="bj-empty">
      <div style="font-size:44px;margin-bottom:10px">📝</div>
      <div class="bj-empty-ttl">Nog geen bijles toegevoegd</div>
      <div class="bj-empty-sub">Maak na elke bijles een nieuwe les aan en zet erin wat je hebt geleerd: woorden, zinnen en aantekeningen.</div>
    </div>
    <button class="btn-home" onclick="bjEditLesson()">+ Nieuwe bijles</button>`;
    return;
  }
  const all=_bjLessonsOrdered();
  const due=_bjDueKeys(all).length, nw=Math.min(BJ_NEW_PER_SESSION,_bjNewCandidates(all).length);
  const active=due||nw;
  const hero=total?`<div class="review-hero${active?'':' done'}" style="margin:0 0 14px" onclick="${active?'bjStartReview()':"showToast('Alles herhaald — kom later terug')"}">
      <div class="rh-deco">📝</div>
      <div class="rh-title">Bijles-herhaling</div>
      <div class="rh-count">${due}</div>
      <div class="rh-label">te herhalen${nw?` · ${nw} nieuw`:''}</div>
      <div class="rh-btn">${active?'Begin →':'Alles herhaald ✓'}</div>
    </div>
    <div class="bj-daily-row">
      <span>Ook in de dagelijkse herhaling</span>
      <button class="fc${bjInDaily()?' on':''}" onclick="bjToggleDaily()">${bjInDaily()?'Aan':'Uit'}</button>
    </div>
    <div class="bj-daily-row">
      <span>Oefenen in</span>
      <span style="display:flex;gap:6px">
        <button class="fc${_bjPracticeScript()==='dari'?' on':''}" onclick="bjSetPracticeScript('dari')">دری Dari</button>
        <button class="fc${_bjPracticeScript()==='roman'?' on':''}" onclick="bjSetPracticeScript('roman')">Roman</button>
      </span>
    </div>`:'';
  wrap.innerHTML=_bjScriptBar()+hero+`<button class="btn-home" style="margin-bottom:14px" onclick="bjEditLesson()">+ Nieuwe bijles</button>`+
    list.map(l=>{
      const s=_bjLessonStats(l);
      return `<div class="bj-card" onclick="bjOpenLesson('${l.id}')">
      <div class="bj-card-body">
        <div class="bj-card-ttl">${_bjEsc(l.title||'Bijles')}</div>
        <div class="bj-card-meta">${_bjDate(l.date)}</div>
        <div class="bj-card-steps">
          <span>Woorden ${s.wk}/${s.words.length}${s.words.length&&s.unlocked?' ✓':''}</span>
          <span>${s.sents.length?(s.unlocked?`Zinnen ${s.sk}/${s.sents.length}`:'Zinnen 🔒'):''}</span>
        </div>
        ${_bjBar(s.wk+s.sk,l.items.length)}
      </div>
      <div class="bj-card-arr">→</div>
    </div>`;}).join('');
}

function bjOpenLesson(id){ _bjOpen=id; _bjTab='words'; renderBijles(); document.getElementById('screen-bijles').scrollTop=0; }
function bjBack(){ _bjOpen=null; renderBijles(); }
function bjSetTab(t){ _bjTab=t; renderBijles(); }
function bjOpenFromWord(hz){
  const l=_bjList().find(x=>x.items.some(i=>i.hz===hz));
  const idx=_NAV.indexOf('bijles');
  _bjOpen=l?l.id:null;
  const it=l&&l.items.find(i=>i.hz===hz);
  _bjTab=it&&_bjIsSentence(it)?'sents':'words';
  navTo('bijles',document.querySelectorAll('.nb')[idx]);
}

// ── Detail van één bijles ──
function _bjItemRow(l,it,st){
  const v=st[it.hz];
  const m=v?(v.masteryLevel||1):1;
  const tx=_bjItemText(it);
  return `<div class="bj-item${_bjScript()==='roman'?' bj-item-roman':''}" onclick="bjEditItem('${l.id}','${it.id}')">
      ${tx.main}
      <div class="bj-item-info">
        ${tx.sub}
        <div class="wc-nl">${_bjEsc(it.nl)}</div>
        ${it.note?`<div class="bj-item-note">${_bjEsc(it.note)}</div>`:''}
      </div>
      <button class="spk-btn wc-spk" data-hz="${_bjEsc(it.hz)}" data-tr="${_bjEsc(it.tr)}" onclick="event.stopPropagation();speakHz(this.dataset.hz,this.dataset.tr)">🔊</button>
      <div class="m-pips">${masteryPips(m)}</div>
    </div>`;
}
function _bjItemList(l,items,st){
  let lastSec=null;
  return items.map(it=>{
    const sec=it.section||'';
    const head=sec!==lastSec&&sec?`<div class="gram-ch-label" style="padding:10px 2px 2px">${_bjEsc(sec)}</div>`:'';
    lastSec=sec;
    return head+_bjItemRow(l,it,st);
  }).join('');
}
function renderBijlesDetail(){
  const l=_bjFind(_bjOpen);
  const wrap=document.getElementById('bj-content');
  document.getElementById('bj-sub').textContent=_bjDate(l.date);
  const st=_bjStore();
  const s=_bjLessonStats(l);
  if(_bjTab==='notes'&&!l.notes) _bjTab='words';
  if(_bjTab==='sents'&&!s.sents.length) _bjTab='words';
  const due=_bjDueKeys([l]).length, nw=Math.min(BJ_NEW_PER_SESSION,_bjNewCandidates([l]).length);
  const tab=(k,lbl)=>`<button class="fc${_bjTab===k?' on':''}" onclick="bjSetTab('${k}')">${lbl}</button>`;
  let body='';
  if(_bjTab==='notes') body=`<div class="bj-notes">${_bjEsc(l.notes).replace(/\n/g,'<br>')}</div>`;
  else if(_bjTab==='sents') body=(s.unlocked?'':`<div class="bj-lock-note">🔒 De zinnen komen in je oefeningen zodra je ${Math.round(BJ_UNLOCK*100)}% van de woorden herkent — nog ${s.needed} ${s.needed===1?'woord':'woorden'}. Bekijken kan al wel.</div>`)
    +`<div class="bj-items">${_bjItemList(l,s.sents,st)}</div>`;
  else body=`<div class="bj-items">${_bjItemList(l,s.words,st)||'<div class="bj-empty-sub" style="text-align:center;padding:20px">Nog geen losse woorden. Tik op “+ Woord of zin”.</div>'}</div>`;
  wrap.innerHTML=`
    <div class="bj-detail-top">
      <button class="btn-x" onclick="bjBack()">←</button>
      <div class="bj-detail-ttl">${_bjEsc(l.title||'Bijles')}</div>
      <button class="gram-verb-btn" onclick="bjEditLesson('${l.id}')">Bewerk</button>
    </div>
    <div class="bj-steps">
      <div class="bj-step">
        <div class="bj-step-top"><b>Stap 1 · Woorden</b><span>${s.wk}/${s.words.length} herkend${s.words.length&&s.unlocked?' ✓':''}</span></div>
        ${_bjBar(s.wk,s.words.length)}
      </div>
      ${s.sents.length?`<div class="bj-step${s.unlocked?'':' locked'}">
        <div class="bj-step-top"><b>Stap 2 · Zinnen</b><span>${s.unlocked?`${s.sk}/${s.sents.length} geleerd`:`🔒 nog ${s.needed} ${s.needed===1?'woord':'woorden'}`}</span></div>
        ${_bjBar(s.unlocked?s.sk:0,s.sents.length)}
      </div>`:''}
    </div>
    ${l.items.length?`<button class="btn-home bj-practice-btn" onclick="bjPractice('${l.id}')">Oefenen${due||nw?` · ${due?due+' herhalen':''}${due&&nw?', ':''}${nw?nw+' nieuw':''}`:''}</button>
    <button class="bj-link-btn" onclick="bjPracticeAll('${l.id}')">Toch alles oefenen (ook zinnen)</button>`:''}
    ${_bjScriptBar()}
    <div class="bj-tabs">${tab('words',`Woorden (${s.words.length})`)}${s.sents.length?tab('sents',`Zinnen (${s.sents.length})`):''}${l.notes?tab('notes','Aantekeningen'):''}</div>
    ${body}
    <button class="bj-link-btn" style="margin-top:14px" onclick="bjEditItem('${l.id}')">+ Woord of zin toevoegen</button>`;
}

// ── Modals ──
function _bjModal(html){
  const bg=document.createElement('div');
  bg.className='modal-bg';
  const modal=document.createElement('div');
  modal.className='modal';
  modal.innerHTML='<div class="modal-drag"></div>'+html;
  bg.appendChild(modal);
  bg.addEventListener('click',e=>{if(e.target===bg)bg.remove();});
  document.body.appendChild(bg);
  return {bg,modal};
}

function bjEditLesson(id){
  const l=id?_bjFind(id):null;
  const today=new Date().toISOString().slice(0,10);
  const n=_bjList().length+1;
  const {bg,modal}=_bjModal(`
    <div class="bj-modal-ttl">${l?'Bijles bewerken':'Nieuwe bijles'}</div>
    <label class="bj-lbl">Titel / onderwerp</label>
    <input class="name-inp" id="bj-title" type="text" maxlength="60" placeholder="Bijv. Familie, of Les ${n}" value="${_bjEsc(l?l.title:'')}">
    <label class="bj-lbl">Datum</label>
    <input class="name-inp" id="bj-date" type="date" value="${l?l.date:today}">
    <label class="bj-lbl">Aantekeningen <small>(uitleg, grammatica, huiswerk…)</small></label>
    <textarea class="name-inp bj-ta" id="bj-notes" rows="4" placeholder="Wat heeft je docent uitgelegd?">${_bjEsc(l?l.notes:'')}</textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn-check" style="position:static;flex:1" id="bj-save">Opslaan</button>
      ${l?'<button class="btn-check" style="position:static;flex:0 0 auto;background:var(--rose-xl);color:var(--rose-d)" id="bj-del">Verwijder</button>':''}
    </div>`);
  modal.querySelector('#bj-save').addEventListener('click',()=>{
    const title=modal.querySelector('#bj-title').value.trim()||`Les ${n}`;
    const date=modal.querySelector('#bj-date').value||today;
    const notes=modal.querySelector('#bj-notes').value.trim();
    if(l){ l.title=title; l.date=date; l.notes=notes; }
    else { const nl={id:_bjId(),title,date,notes,items:[]}; _bjList().push(nl); _bjOpen=nl.id; }
    save(); bg.remove(); renderBijles();
  });
  if(l) modal.querySelector('#bj-del').addEventListener('click',()=>{
    if(!confirm(`“${l.title}” verwijderen? De ${l.items.length} woorden en zinnen en hun voortgang verdwijnen dan ook.`))return;
    const items=[...l.items];
    S.bijles=_bjList().filter(x=>x.id!==l.id);
    items.forEach(_bjRemoveVocab);
    _bjOpen=null; save(); bg.remove(); renderBijles();
  });
}

function bjEditItem(lessonId,itemId){
  const l=_bjFind(lessonId); if(!l)return;
  const it=itemId?l.items.find(i=>i.id===itemId):null;
  const {bg,modal}=_bjModal(`
    <div class="bj-modal-ttl">${it?'Bewerken':'Woord of zin toevoegen'}</div>
    <label class="bj-lbl">Afghaans (Hazaragi)</label>
    <input class="name-inp bj-hz-inp" id="bj-hz" type="text" dir="rtl" placeholder="مثلاً: سلام" value="${_bjEsc(it?it.hz:'')}">
    <label class="bj-lbl">Uitspraak <small>(optioneel)</small></label>
    <input class="name-inp" id="bj-tr" type="text" placeholder="Bijv. salaam" value="${_bjEsc(it?it.tr:'')}">
    <label class="bj-lbl">Nederlands</label>
    <input class="name-inp" id="bj-nl" type="text" placeholder="Bijv. hallo" value="${_bjEsc(it?it.nl:'')}">
    <label class="bj-lbl">Notitie <small>(optioneel)</small></label>
    <input class="name-inp" id="bj-note" type="text" placeholder="Bijv. informeel, tegen vrienden" value="${_bjEsc(it?it.note:'')}">
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn-check" style="position:static;flex:1" id="bj-save">${it?'Opslaan':'Toevoegen'}</button>
      ${it?'<button class="btn-check" style="position:static;flex:0 0 auto;background:var(--rose-xl);color:var(--rose-d)" id="bj-del">Verwijder</button>':''}
    </div>
    ${it?'':'<div class="bj-hint">Na toevoegen blijft dit venster open, zodat je meteen het volgende kunt invullen.</div>'}`);
  const hzInp=modal.querySelector('#bj-hz');
  attachVirtualKeyboard(hzInp);
  if(!it) setTimeout(()=>hzInp.focus(),300);
  modal.querySelector('#bj-save').addEventListener('click',()=>{
    const hz=_bjClean(hzInp.value);
    const tr=_bjClean(modal.querySelector('#bj-tr').value);
    const nl=_bjClean(modal.querySelector('#bj-nl').value);
    const note=modal.querySelector('#bj-note').value.trim();
    if(!hz){showToast('Vul het Afghaanse woord of de zin in');return;}
    if(!nl){showToast('Vul de Nederlandse betekenis in');return;}
    if(it){
      const oldHz=it.hz;
      Object.assign(it,{hz,tr,nl,note});
      _bjUpdateVocab(it,oldHz);
      save(); bg.remove(); renderBijles();
      showToast('Opgeslagen');
    } else {
      const lastSec=l.items.length?l.items[l.items.length-1].section||'':'';
      const ni={id:_bjId(),section:lastSec,hz,tr,nl,note};
      l.items.push(ni);
      _bjAddVocab(ni);
      save(); renderBijles();
      ['#bj-hz','#bj-tr','#bj-nl','#bj-note'].forEach(s=>modal.querySelector(s).value='');
      hzInp.focus();
      showToast(`“${nl}” toegevoegd`);
    }
  });
  if(it) modal.querySelector('#bj-del').addEventListener('click',()=>{
    if(!confirm(`“${it.hz}” verwijderen?`))return;
    l.items=l.items.filter(i=>i.id!==it.id);
    if(it.preset){ if(!l.removed) l.removed=[]; l.removed.push(it.id); }
    _bjRemoveVocab(it);
    save(); bg.remove(); renderBijles();
  });
}

// ── Oefenen & herhalen (alleen bijleswoorden, eigen voortgang) ──
// words: [{hz: getoonde tekst, key: echte sleutel, nl, tr, masteryLevel, sent}]
function _bjBuildExercises(words,show,roman){
  const st=_bjStore();
  show=show||(hz=>hz);
  const all=Object.entries(st).map(([hz,v])=>({hz:show(hz),nl:v.nl,tr:show(hz)===hz?(v.tr||''):'',sent:hz.trim().split(/\s+/).length>=3}));
  let wPool=all.filter(x=>!x.sent), sPool=all.filter(x=>x.sent);
  // Te weinig bijleswoorden voor 4 keuzes? Vul alleen de foute opties aan met lesswoorden.
  if(wPool.length<4) wPool=wPool.concat(Object.entries(S.vocab).filter(([hz])=>!st[hz]).map(([hz,v])=>({hz,nl:v.nl,tr:v.tr||''})));
  if(sPool.length<4) sPool=sPool.concat(wPool);
  const r1=[],r2=[];
  shuffle([...words]).forEach(w=>{
    const pool=w.sent?sPool:wPool;
    const d=shuffle(pool.filter(x=>x.hz!==w.hz&&x.nl!==w.nl));
    if(d.length<3)return;
    const lvl=w.masteryLevel||1;
    const wd={hz:w.hz,nl:w.nl,tr:w.tr||''};
    const mc_nl={type:'mc_nl',w:wd,choices:shuffle([w.nl,...d.slice(0,3).map(x=>x.nl)])};
    const listen={type:'listen',w:wd,choices:shuffle([w.nl,...d.slice(0,3).map(x=>x.nl)])};
    if(w.sent){
      // Zinnen: betekenis → zin bouwen → werkwoord kiezen
      const toks=w.hz.trim().split(/\s+/);
      const others=new Set(sPool.filter(x=>x.hz!==w.hz&&x.sent).flatMap(x=>x.hz.split(/\s+/)));
      toks.forEach(t=>others.delete(t));
      const order={type:'order',title:'Zin bouwen',q:'Zet de woorden in de goede volgorde:',s:{hz:toks.join(' '),nl:w.nl,tr:w.tr||''},distractors:shuffle([...others]).slice(0,2)};
      const verb=_bjVerbExercise(w,roman);
      if(lvl===1){ r1.push({type:'intro',w:wd,ctxSentence:null},mc_nl); r2.push(order); }
      else if(lvl===2){ r1.push(verb||mc_nl); r2.push(order); }
      else { r1.push(verb||listen); r2.push(order); }
      return;
    }
    const mc_hz={type:'mc_hz',w:wd,choices:shuffle([w.hz,...d.slice(0,3).map(x=>x.hz)])};
    if(lvl===1){ r1.push({type:'intro',w:wd,ctxSentence:null},mc_nl); r2.push(mc_hz); }
    else if(lvl===2){ r1.push(mc_nl); r2.push({type:'type',w:wd}); }
    else if(lvl===3){ r1.push(mc_hz); r2.push({type:'type',w:wd}); }
    else { r1.push(listen); r2.push({type:'type',w:wd}); }
  });
  // Ronde 1 (kennismaken/herkennen) per item, daarna ronde 2 door elkaar
  return [...r1,...shuffle(r2)];
}

// Werkwoord-invuloefening voor een zin (null als er geen herkend werkwoord in zit)
function _bjVerbExercise(w,roman){
  const text=w.hz.trim();
  const v=_bjFindVerb(text,roman); if(!v) return null;
  let sTr='', wTr='';
  if(!roman&&w.tr){
    const tv=_bjFindVerb(w.tr.trim(),true);
    if(tv&&tv.form===v.form){ sTr=w.tr.trim(); wTr=tv.core; }
  }
  const choices=_bjVerbChoices(v.form,v.core,roman);
  const trs={};
  if(!roman) choices.forEach(c=>{ const f=_BJ_ALLFORMS.find(x=>x.hz===c); if(f) trs[c]=f.tr; });
  return {type:'cloze',title:'Werkwoord kiezen',q:'Kies het juiste werkwoord:',trs,
    s:{hz:text,nl:w.nl,tr:sTr},w:{hz:v.core,nl:`${v.form.nl} (${v.form.fam})`,tr:wTr},choices};
}

// Oefenen in 'dari' (Dari-schrift + uitspraak) of 'roman' (alleen Latijnse letters)
function _bjPracticeScript(){ return S.bjPracticeScript==='roman'?'roman':'dari'; }
function bjSetPracticeScript(m){ S.bjPracticeScript=m; save(); renderBijles(); }

function bjStartSession(hzList,title){
  const st=_bjStore();
  const roman=_bjPracticeScript()==='roman';
  // Roman: toon de uitspraak als 'woord'; alias koppelt die terug aan de echte sleutel
  const {alias,toRm}=_bjAliasMaps(roman);
  const show=hz=>toRm[hz]||hz;
  const keys=hzList.filter(hz=>st[hz]);
  const words=keys.map(hz=>({hz:show(hz),nl:st[hz].nl,tr:toRm[hz]?'':(st[hz].tr||''),masteryLevel:st[hz].masteryLevel||1,sent:hz.trim().split(/\s+/).length>=3}));
  if(!words.length){showToast('Nog niets om te oefenen');return;}
  const exs=_bjBuildExercises(words,show,roman);
  if(!exs.length){showToast('Voeg minstens 4 woorden toe om te kunnen oefenen');return;}
  keys.forEach(hz=>{ st[hz].intro=true; });
  save();
  CL={
    id:'_bijles',
    title:title||'Bijles',
    xp:Math.min(60,words.length*3),
    words:words.filter(w=>!w.sent).map(w=>({hz:w.hz,nl:w.nl,tr:w.tr})),
    sentences:[],
    _bjHz:new Set(keys),
    _bjAlias:alias,
    _bjRoman:roman
  };
  EXS=exs;
  _launchLesson();
}

// Herhaling: wat aan de beurt is + maximaal 8 nieuwe items (woorden eerst)
function bjStartReview(lessonId){
  seedBijles();
  const st=_bjStore();
  const lessons=lessonId?[_bjFind(lessonId)].filter(Boolean):_bjLessonsOrdered();
  let keys=[...shuffle(_bjDueKeys(lessons)).slice(0,20),..._bjNewCandidates(lessons).slice(0,BJ_NEW_PER_SESSION)];
  if(!keys.length&&lessonId){
    // Alles van deze les herhaald: oefen dan gewoon wat je al kent
    keys=shuffle(lessons.flatMap(l=>l.items.map(i=>i.hz)).filter(hz=>_bjIntro(st[hz]))).slice(0,15);
  }
  if(!keys.length){showToast('Alles herhaald — kom later terug');return;}
  const l=lessonId&&lessons[0];
  bjStartSession([...new Set(keys)],l?(l.title||'Bijles'):'Bijles-herhaling');
}
function bjPractice(lessonId){ bjStartReview(lessonId); }
// 'Toch alles oefenen': zonder stappen, alles van de les door elkaar
function bjPracticeAll(lessonId){
  seedBijles();
  const l=_bjFind(lessonId); if(!l)return;
  bjStartSession(shuffle([...new Set(l.items.map(i=>i.hz))]).slice(0,20),l.title||'Bijles');
}

// ══════════════════════════════════════════════════════
// WERKWOORDEN — voor de oefeningen 'Werkwoord kiezen' en 'Zin bouwen'
// ══════════════════════════════════════════════════════
// Werkwoordsvormen uit de bijlessen. tr: varianten zoals ze in de zinnen
// voorkomen (eerste = standaard). Foute keuzes komen bij voorkeur uit
// hetzelfde werkwoord (andere persoon), zodat je echt op de vervoeging let.
const BJ_VERBS=[
  {fam:'zijn',forms:[['استم','astum','ik ben'],['استی','asti','jij bent'],['استه','asta','hij/zij/het is'],['استیم','astem','wij zijn'],['استید','asted','u bent / jullie zijn'],['استن','astan','zij zijn'],['نیست','nest','is niet']]},
  {fam:'zijn (verleden)',forms:[['بودم','budum','ik was'],['بودی','budi','jij was'],['بود','bud|bood','hij/zij/het was'],['بودیم','budim','wij waren'],['بودین','budin','u was / jullie waren'],['بودن','budan','zij waren']]},
  {fam:'hebben',forms:[['دارم','darum|daram','ik heb'],['داری','dari|daari','jij hebt'],['داره','daara','hij/zij heeft'],['ندارم','nadarum|nadaram','ik heb niet'],['داشتم','dashtum','ik had']]},
  {fam:'doen',forms:[['می‌کنم','mukunum|mi-konam','ik doe'],['می‌کنی','mukuni','jij doet'],['می‌کنه','mukuna','hij/zij doet'],['نمی‌کنم','nami-konam','ik doe niet'],['نمی‌کنه','nami-kuna','het doet niet']]},
  {fam:'willen',forms:[['می‌خایم','mi-khayum','ik wil'],['نمی‌خایم','nami-khayum','ik wil niet'],['می‌خوام','mi-khaam','ik wil (mi-khaam)']]},
  {fam:'eten/drinken',forms:[['می‌خوری','mukhuri','jij eet/drinkt'],['خوردم','khurdam','ik heb gegeten'],['خوردید','khurdid','u heeft gegeten'],['بخور','bukhur','eet!'],['می‌خورم','mi-khurum','ik eet'],['می‌خوریم','mi-khurem','wij eten']]},
  {fam:'gaan',forms:[['می‌ریم','murem','wij gaan']]},
  {fam:'zien',forms:[['می‌بینم','mubinum|mi-binum','ik zie']]},
  {fam:'wassen',forms:[['می‌شویم','mi-shoyam','ik was']]},
  {fam:'komen',forms:[['می‌آیم','mi-yum','ik kom'],['می‌آیی','mi-yayi','jij komt']]},
  {fam:'praten',forms:[['می‌زنیم','mi-zanem','wij praten (gap mi-zanem)']]},
  {fam:'studeren',forms:[['می‌خوانم','mi-khanum|mukhanum','ik studeer'],['می‌خوانی','mukhani','jij studeert']]},
  {fam:'weten',forms:[['نمی‌دانم','nami-danom','ik weet het niet'],['نمی‌فهمم','nami-famum','ik begrijp het niet']]},
  {fam:'regenen',forms:[['می‌باره','mubaara','het regent'],['نمی‌باره','nemubaara','het regent niet']]},
  {fam:'zeggen',forms:[['می‌گن','mugan','ze zeggen']]},
  {fam:'worden',forms:[['می‌شم','mayshum|mi-shum','ik word'],['می‌شی','mi-shi|mayshi','jij wordt'],['می‌شه','maysha|mi-sha','het wordt']]},
].map(v=>({fam:v.fam,forms:v.forms.map(([hz,tr,nl])=>({hz,trs:tr.split('|'),tr:tr.split('|')[0],nl,fam:v.fam}))}));
const _BJ_ALLFORMS=BJ_VERBS.flatMap(v=>v.forms);
const _bjPunct=/^[؟?!.,،:;«»"()]+|[؟?!.,،:;«»"()]+$/g;
const _bjCore=t=>t.replace(_bjPunct,'');

// Roman-alias (zelfde als bij gewone bijles-oefeningen)
function _bjAliasMaps(roman){
  const st=_bjStore(), alias={}, toRm={};
  if(roman){
    Object.entries(st).forEach(([hz,v])=>{
      const r=(v.tr||'').trim();
      if(r&&!alias[r]&&!st[r]){ alias[r]=hz; toRm[hz]=r; const j=r.split(/\s+/).join(' '); if(j!==r&&!alias[j]) alias[j]=hz; }
    });
  }
  return {alias,toRm};
}

// Vind het (laatste) werkwoord in een zin; geeft de kern-token + positie terug
function _bjFindVerb(text,roman){
  const toks=text.split(/\s+/);
  for(let i=toks.length-1;i>=0;i--){
    const core=_bjCore(toks[i]);
    const f=roman?_BJ_ALLFORMS.find(x=>x.trs.includes(core.toLowerCase())):_BJ_ALLFORMS.find(x=>x.hz===core);
    if(f){
      // rCloze vervangt het eerste voorkomen — dat moet precies dit woord zijn
      let pos=0; for(let k=0;k<i;k++) pos+=toks[k].length+1;
      pos+=toks[i].indexOf(core);
      if(text.indexOf(core)!==pos) return null;
      return {core,form:f};
    }
  }
  return null;
}

function _bjVerbChoices(form,correctLabel,roman){
  // Roman: kies bij voorkeur de variant met dezelfde schrijfwijze als het antwoord (mi-… / may-…)
  const pref=correctLabel.slice(0,2).toLowerCase();
  const lbl=f=>roman?(f.trs.find(t=>t.slice(0,2)===pref)||f.tr):f.hz;
  const same=BJ_VERBS.find(v=>v.fam===form.fam).forms.filter(f=>f!==form&&f.nl!==form.nl);
  const other=_BJ_ALLFORMS.filter(f=>f.fam!==form.fam);
  const picks=[...shuffle(same),...shuffle(other)].map(lbl).filter(x=>x!==correctLabel);
  const uniq=[...new Set(picks)].slice(0,3);
  return shuffle([correctLabel,...uniq]);
}
