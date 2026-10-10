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
// Drempel en tempo passen zich aan (zie ZELFLEREND hieronder)
let _bjTab='words';
function _bjIsSentence(it){ return it.hz.trim().split(/\s+/).length>=3; }
function _bjKnown(v){ return !!v && (v.masteryLevel||1)>=2; }
function _bjIntro(v){ return !!v && v.intro===true; }
function _bjLessonStats(l){
  const st=_bjStore();
  const words=l.items.filter(i=>!_bjIsSentence(i)), sents=l.items.filter(_bjIsSentence);
  const wk=words.filter(i=>_bjKnown(st[i.hz])).length;
  const sk=sents.filter(i=>_bjKnown(st[i.hz])).length;
  const th=_bjUnlock();
  const unlocked=!words.length||wk/words.length>=th;
  const needed=Math.max(0,Math.ceil(words.length*th)-wk);
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
  const due=_bjDueKeys(all).length, nw=Math.min(_bjNewPerSession(due),_bjNewCandidates(all).length);
  const active=due||nw;
  const hero=total?`<div class="review-hero${active?'':' done'}" style="margin:0 0 14px" onclick="${active?'bjStartReview()':"showToast('Alles herhaald — kom later terug')"}">
      <div class="rh-deco">📝</div>
      <div class="rh-title">Bijles-herhaling</div>
      <div class="rh-count">${due}</div>
      <div class="rh-label">te herhalen${nw?` · ${nw} nieuw`:''}</div>
      <div class="rh-btn">${active?'Begin →':'Alles herhaald ✓'}</div>
    </div>
    ${_bjInsightsCard()}
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
  wrap.innerHTML=_bjScriptBar()+(_bjLessonSoon()?_bjPrepCard():'')+hero+(_bjLessonSoon()?'':_bjPrepCard())+_bjDayRow()+`<button class="btn-home" style="margin-bottom:14px" onclick="bjEditLesson()">+ Nieuwe bijles</button>`+
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
  const qs=_bjQuestions(l.id);
  if(_bjTab==='qs'&&!qs.length) _bjTab='words';
  const due=_bjDueKeys([l]).length, nw=Math.min(_bjNewPerSession(due),_bjNewCandidates([l]).length);
  const tab=(k,lbl)=>`<button class="fc${_bjTab===k?' on':''}" onclick="bjSetTab('${k}')">${lbl}</button>`;
  let body='';
  if(_bjTab==='notes') body=`<div class="bj-notes">${_bjEsc(l.notes).replace(/\n/g,'<br>')}</div>`;
  else if(_bjTab==='qs') body=`<button class="btn-home" style="margin-bottom:12px" onclick="bjStartQuestions('${l.id}')">Beantwoord de vragen</button>
    <div class="bj-items">${qs.map(q=>`<div class="bj-item" style="cursor:default">
      ${_bjScript()==='roman'?'':`<div class="bj-item-hz">${_bjEsc(q.q)}</div>`}
      <div class="bj-item-info">${_bjScript()==='dari'?'':`<div class="${_bjScript()==='roman'?'bj-item-rm':'bj-roman'}">${_bjEsc(q.qtr)}</div>`}<div class="wc-nl">${_bjEsc(q.nl)}</div></div>
    </div>`).join('')}</div>`;
  else if(_bjTab==='sents') body=(s.unlocked?'':`<div class="bj-lock-note">🔒 De zinnen komen in je oefeningen zodra je ${Math.round(_bjUnlock()*100)}% van de woorden herkent — nog ${s.needed} ${s.needed===1?'woord':'woorden'}. Bekijken kan al wel.</div>`)
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
    <div class="bj-tabs">${tab('words',`Woorden (${s.words.length})`)}${s.sents.length?tab('sents',`Zinnen (${s.sents.length})`):''}${qs.length?tab('qs',`Vragen (${qs.length})`):''}${l.notes?tab('notes','Aantekeningen'):''}</div>
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
    // Gaat het vaak mis? Dan een stapje makkelijker (herkennen vóór zelf maken)
    const lvl=Math.max(1,(w.masteryLevel||1)-((w.diff||0)>=0.5&&(w.masteryLevel||1)>1?1:0));
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
      // Werkwoord hier vaak fout, of dit werkwoord verwar je vaker: extra werkwoord-oefening
      const weakVerb=verb&&((w.miss.verb||0)>=1||_bjWeakFams().has(_bjFindVerb(w.hz.trim(),roman).form.fam));
      if(weakVerb&&lvl>1) r2.push({...verb,choices:shuffle([...verb.choices])});
      // Vervoegen (zin omzetten): vanaf niveau 3, of eerder als het werkwoord lastig is
      if(lvl>=3||(weakVerb&&lvl>=2)){ const tr=_bjTransform(w,roman); if(tr) r2.push(tr); }
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

function bjStartSession(hzList,title,opts){
  opts=opts||{};
  const st=_bjStore();
  const roman=_bjPracticeScript()==='roman';
  // Roman: toon de uitspraak als 'woord'; alias koppelt die terug aan de echte sleutel
  const {alias,toRm}=_bjAliasMaps(roman);
  const show=hz=>toRm[hz]||hz;
  const keys=hzList.filter(hz=>st[hz]);
  const words=keys.map(hz=>({key:hz,hz:show(hz),nl:st[hz].nl,tr:toRm[hz]?'':(st[hz].tr||''),masteryLevel:st[hz].masteryLevel||1,sent:hz.trim().split(/\s+/).length>=3,diff:_bjDiff(st[hz]),miss:st[hz].miss||{}}));
  const qs=(opts.questions||[]).map(_bjAnswerEx);
  if(!words.length&&!qs.length){showToast('Nog niets om te oefenen');return;}
  const exs=[...(words.length?_bjBuildExercises(words,show,roman):[]),...qs];
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
  const dueKeys=_bjByPriority(_bjDueKeys(lessons)).slice(0,20);
  let keys=[...dueKeys,..._bjNewCandidates(lessons).slice(0,_bjNewPerSession(dueKeys.length))];
  // Werkwoorden die je verwart: een paar extra zinnen met dat werkwoord erbij
  keys=keys.concat(_bjFocusSentences(lessons,keys,3));
  if(!keys.length&&lessonId){
    // Alles van deze les herhaald: oefen dan gewoon wat je al kent
    keys=shuffle(lessons.flatMap(l=>l.items.map(i=>i.hz)).filter(hz=>_bjIntro(st[hz]))).slice(0,15);
  }
  if(!keys.length){showToast('Alles herhaald — kom later terug');return;}
  const l=lessonId&&lessons[0];
  bjStartSession([...new Set(keys)],l?(l.title||'Bijles'):'Bijles-herhaling',{questions:_bjPickQuestions(lessons,1)});
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
  // [Hazaragi, Roman-varianten, betekenis, persoon] — persoon: 1s ik · 2s jij · 3s hij/zij · 1p wij · 2p jullie/u · 3p zij
  {fam:'zijn',forms:[['استم','astum','ik ben','1s'],['استی','asti','jij bent','2s'],['استه','asta','hij/zij/het is','3s'],['استیم','astem','wij zijn','1p'],['استید','asted','u bent / jullie zijn','2p'],['استن','astan','zij zijn','3p'],['نیست','nest','is niet']]},
  {fam:'zijn (verleden)',forms:[['بودم','budum','ik was','1s'],['بودی','budi','jij was','2s'],['بود','bud|bood','hij/zij/het was','3s'],['بودیم','budim','wij waren','1p'],['بودین','budin','u was / jullie waren','2p'],['بودن','budan','zij waren','3p']]},
  {fam:'hebben',forms:[['دارم','darum|daram','ik heb','1s'],['داری','dari|daari','jij hebt','2s'],['داره','daara','hij/zij heeft','3s'],['ندارم','nadarum|nadaram','ik heb niet'],['داشتم','dashtum','ik had']]},
  {fam:'doen',forms:[['می‌کنم','mukunum|mi-konam','ik doe','1s'],['می‌کنی','mukuni','jij doet','2s'],['می‌کنه','mukuna','hij/zij doet','3s'],['نمی‌کنم','nami-konam','ik doe niet'],['نمی‌کنه','nami-kuna','het doet niet']]},
  {fam:'willen',forms:[['می‌خایم','mi-khayum','ik wil'],['نمی‌خایم','nami-khayum','ik wil niet'],['می‌خوام','mi-khaam','ik wil (mi-khaam)']]},
  {fam:'eten/drinken',forms:[['می‌خوری','mukhuri','jij eet/drinkt','2s'],['خوردم','khurdam','ik heb gegeten'],['خوردید','khurdid','u heeft gegeten'],['بخور','bukhur','eet!'],['می‌خورم','mi-khurum','ik eet','1s'],['می‌خوریم','mi-khurem','wij eten','1p']]},
  {fam:'gaan',forms:[['می‌ریم','murem','wij gaan']]},
  {fam:'zien',forms:[['می‌بینم','mubinum|mi-binum','ik zie']]},
  {fam:'wassen',forms:[['می‌شویم','mi-shoyam','ik was (me)']]},
  {fam:'komen',forms:[['می‌آیم','mi-yum','ik kom','1s'],['می‌آیی','mi-yayi','jij komt','2s']]},
  {fam:'praten',forms:[['می‌زنیم','mi-zanem','wij praten (gap mi-zanem)']]},
  {fam:'studeren',forms:[['می‌خوانم','mi-khanum|mukhanum','ik studeer','1s'],['می‌خوانی','mukhani','jij studeert','2s']]},
  {fam:'weten',forms:[['نمی‌دانم','nami-danom','ik weet het niet'],['نمی‌فهمم','nami-famum','ik begrijp het niet']]},
  {fam:'regenen',forms:[['می‌باره','mubaara','het regent'],['نمی‌باره','nemubaara','het regent niet']]},
  {fam:'zeggen',forms:[['می‌گن','mugan','ze zeggen']]},
  {fam:'worden',forms:[['می‌شم','mi-shum|mayshum','ik word','1s'],['می‌شی','mi-shi|mayshi','jij wordt','2s'],['می‌شه','mi-sha|maysha','het wordt','3s']]},
].map(v=>({fam:v.fam,forms:v.forms.map(([hz,tr,nl,p])=>({hz,trs:tr.split('|'),tr:tr.split('|')[0],nl,p:p||'',fam:v.fam}))}));
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

// ══════════════════════════════════════════════════════
// ZELFLEREND — inschatten, tempo aanpassen, fouten herkennen
// ══════════════════════════════════════════════════════
// S.bjLog = {sess:[{d,c,w}], verb:{'goedHz|gekozenHz': aantal}}
// Per item (S.bvocab): hist = laatste 8 antwoorden, miss = {meaning,order,verb,type,spelling}
function _bjLog(){ if(!S.bjLog) S.bjLog={sess:[],verb:{}}; if(!S.bjLog.verb) S.bjLog.verb={}; if(!S.bjLog.sess) S.bjLog.sess=[]; return S.bjLog; }
const _BJ_CAT={order_bj:'order',verb_bj:'verb',conj_bj:'verb',type:'type',hint:'type'};

function bjNoteResult(v,ok,exType){
  v.hist=[...(v.hist||[]),!!ok].slice(-8);
  const cat=_BJ_CAT[exType]||'meaning';
  v.miss=v.miss||{};
  if(!ok) v.miss[cat]=(v.miss[cat]||0)+1;
  else if(v.miss[cat]>0) v.miss[cat]--; // gaat het weer goed, dan telt de oude fout minder mee
}
function bjNoteSpelling(hz){
  const v=_bjStore()[bjKey(hz)]; if(!v)return;
  v.miss=v.miss||{}; v.miss.spelling=(v.miss.spelling||0)+1; save();
}
function _bjFormOf(x){ x=String(x||''); return _BJ_ALLFORMS.find(f=>f.hz===x)||_BJ_ALLFORMS.find(f=>f.trs.includes(x.toLowerCase())); }
function bjLogVerbError(correct,chosen){
  const a=_bjFormOf(correct), b=_bjFormOf(chosen); if(!a||!b)return;
  const log=_bjLog(), k=a.hz+'|'+b.hz;
  log.verb[k]=(log.verb[k]||0)+1; save();
}
function bjVerbCorrect(correct){
  const a=_bjFormOf(correct); if(!a)return;
  const log=_bjLog();
  Object.keys(log.verb).forEach(k=>{ if(k.startsWith(a.hz+'|')){ log.verb[k]--; if(log.verb[k]<=0) delete log.verb[k]; } });
  save();
}
function bjLogSession(c,w){
  const log=_bjLog();
  log.sess.push({d:Date.now(),c,w}); log.sess=log.sess.slice(-12); save();
}

// Score van de laatste sessies (null = nog te weinig gegevens)
function _bjAccuracy(){
  const s=_bjLog().sess.slice(-5); let c=0,w=0;
  s.forEach(x=>{c+=x.c;w+=x.w;});
  return c+w>=10?c/(c+w):null;
}
// Moeilijkheid van een item voor jou (0 = makkelijk, 1 = gaat steeds mis)
function _bjDiff(v){
  const h=(v&&v.hist)||[];
  if(!h.length) return 0.3;
  return (h.filter(x=>!x).length+0.3)/(h.length+1);
}
// Tempo: hoeveel nieuwe stof per sessie — op basis van je score en wat er nog openstaat
function _bjNewPerSession(dueCount){
  const a=_bjAccuracy();
  let n=a===null?8:a>=0.9?12:a>=0.8?10:a>=0.65?6:3;
  if(dueCount>=40) n=Math.min(n,1); else if(dueCount>=25) n=Math.min(n,3);
  return n;
}
// Wanneer de zinnen opengaan: sneller als het goed gaat, later als het lastig is
function _bjUnlock(){ const a=_bjAccuracy(); return a===null?0.7:a>=0.85?0.6:a>=0.7?0.7:0.8; }
// Wat aan de beurt is: moeilijkste en langst achterstallige eerst
function _bjByPriority(keys){
  const st=_bjStore(), now=Date.now();
  const score=hz=>{ const v=st[hz]; const over=v.nr?Math.max(0,(now-new Date(v.nr))/864e5):1; return _bjDiff(v)*3+Math.min(over,10)/5+Math.random()*0.3; };
  return [...keys].sort((a,b)=>score(b)-score(a));
}
// Werkwoordfamilies die je de laatste tijd verwart
function _bjWeakFams(){
  const fams=new Set();
  Object.entries(_bjLog().verb).forEach(([k,n])=>{ if(n>=2){ const f=_bjFormOf(k.split('|')[0]); if(f) fams.add(f.fam); } });
  return fams;
}
function _bjFocusSentences(lessons,exclude,max){
  const fams=_bjWeakFams(); if(!fams.size) return [];
  const st=_bjStore(), ex=new Set(exclude);
  const cands=lessons.flatMap(l=>l.items).filter(it=>_bjIsSentence(it)&&!ex.has(it.hz)&&_bjIntro(st[it.hz])&&(()=>{const v=_bjFindVerb(it.hz.trim(),false);return v&&fams.has(v.form.fam);})());
  return shuffle([...new Set(cands.map(i=>i.hz))]).slice(0,max);
}
// Typen: één letter verschil (bij langere woorden twee) telt als bijna goed
function bjNearMiss(a,b){
  if(!a||!b) return false;
  const max=b.length>=10?2:b.length>=4?1:0;
  if(!max||Math.abs(a.length-b.length)>max) return false;
  let prev=Array.from({length:b.length+1},(_,i)=>i);
  for(let i=1;i<=a.length;i++){
    const cur=[i];
    for(let j=1;j<=b.length;j++) cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
    prev=cur;
  }
  return prev[b.length]<=max;
}

// ── Inzichten: wat gaat er mis? ──
function _bjInsights(){
  const st=_bjStore(), roman=_bjPracticeScript()==='roman', out=[];
  const fm=f=>roman?`<b>${_bjEsc(f.tr)}</b>`:`<b><bdi>${_bjEsc(f.hz)}</bdi></b> (${_bjEsc(f.tr)})`;
  // 1. Werkwoordvormen die je verwart
  const pairs=Object.entries(_bjLog().verb).sort((a,b)=>b[1]-a[1]).filter(([,n])=>n>=2);
  if(pairs.length){
    const [k,n]=pairs[0]; const [a,b]=k.split('|').map(_bjFormOf);
    if(a&&b) out.push(`🔤 Je haalt ${fm(a)} = ${_bjEsc(a.nl)} en ${fm(b)} = ${_bjEsc(b.nl)} door elkaar (${n}×). Daar krijg je nu extra oefeningen voor.`);
  }
  // 2. Soort fouten
  const tot={order:0,spelling:0,meaning:0,type:0};
  Object.values(st).forEach(v=>{ if(v.miss) Object.keys(tot).forEach(c=>tot[c]+=v.miss[c]||0); });
  const tips={order:n=>`🧩 Woordvolgorde gaat nog vaak mis (${n}×). Tip: het werkwoord staat in het Hazaragi altijd achteraan.`,
    spelling:n=>`✏️ Je typt vaak bijna goed (${n}× een kleine spelfout). Let op lange klinkers en de kh/gh-klanken.`,
    meaning:n=>`💭 Betekenissen haal je soms door elkaar (${n}×). Die woorden komen vaker terug.`,
    type:n=>`⌨️ Zelf typen is nog lastig (${n}×). Die woorden krijg je eerst weer als meerkeuze.`};
  const top=Object.entries(tot).filter(([,n])=>n>=3).sort((a,b)=>b[1]-a[1])[0];
  if(top) out.push(tips[top[0]](top[1]));
  // 3. Moeilijkste woorden/zinnen
  const hard=Object.entries(st).filter(([,v])=>(v.hist||[]).length>=2&&_bjDiff(v)>=0.45).sort((a,b)=>_bjDiff(b[1])-_bjDiff(a[1])).slice(0,3);
  if(hard.length) out.push(`🎯 Lastig voor jou:${hard.map(([hz,v])=>`<span class="bj-ins-item"><bdi>${_bjEsc(roman?(v.tr||hz):hz)}</bdi> <small>${_bjEsc(v.nl)}</small></span>`).join('')}`);
  // 4. Tempo
  const acc=_bjAccuracy();
  if(acc!==null){
    const due=_bjDueKeys(_bjList()).length, pct=Math.round(acc*100), nw=_bjNewPerSession(due);
    const n=`${nw} ${nw===1?'nieuw item':'nieuwe items'} per keer`;
    out.push(`📈 Je scoort ${pct}% in je laatste sessies — ${due>=25?`er staat veel te herhalen (${due}), dus eerst bijwerken: ${n}`:acc>=0.8?`lekker tempo: ${n}`:acc>=0.65?`rustig tempo: ${n}`:`eerst goed herhalen: ${n}`}.`);
  }
  return {lines:out,hard:hard.length};
}
function _bjInsightsCard(){
  const ins=_bjInsights();
  if(!ins.lines.length) return '';
  const weak=ins.hard||_bjWeakFams().size;
  return `<div class="bj-insights">
    <div class="bj-notes-lbl">Hoe gaat het?</div>
    ${ins.lines.map(l=>`<div class="bj-ins-line">${l}</div>`).join('')}
    ${weak?`<button class="bj-link-btn" style="margin:6px 0 0;text-align:left;padding:0" onclick="bjStartWeak()">Oefen je zwakke punten →</button>`:''}
  </div>`;
}
// Gerichte sessie: moeilijkste items + zinnen met werkwoorden die je verwart
function bjStartWeak(){
  seedBijles();
  const st=_bjStore(), lessons=_bjLessonsOrdered();
  const hard=Object.keys(st).filter(hz=>_bjIntro(st[hz])&&(st[hz].hist||[]).length>=2).sort((a,b)=>_bjDiff(st[b])-_bjDiff(st[a])).slice(0,10);
  const keys=[...hard,..._bjFocusSentences(lessons,hard,4)];
  if(!keys.length){showToast('Nog geen zwakke punten gevonden — goed bezig!');return;}
  bjStartSession(keys,'Zwakke punten');
}

// ══════════════════════════════════════════════════════
// VERVOEGEN — een zin omzetten naar een andere persoon of tijd
// ══════════════════════════════════════════════════════
const BJ_PRON={'1s':['من','ma'],'2s':['تو','tu'],'3s':['او','oo'],'1p':['مو','mo'],'2p':['شما','shuma'],'3p':['اونا','ona']};
const BJ_PNL={'1s':'ik','2s':'jij','3s':'hij/zij','1p':'wij','2p':'jullie / u','3p':'zij (meervoud)'};
const BJ_TENSE={'zijn':'zijn (verleden)','zijn (verleden)':'zijn'};
const BJ_YDAY=['دیروز','dirooz'], BJ_TODAY=['امروز','emrooz'];
function _bjFormLabel(f,roman,styleOf){
  if(!roman) return f.hz;
  const pref=(styleOf||'').slice(0,2).toLowerCase();
  return f.trs.find(t=>t.slice(0,2)===pref)||f.tr;
}
// Geeft een omzet-oefening voor deze zin, of null als dat niet kan
function _bjTransform(w,roman){
  const text=w.hz.trim(), toks=text.split(/\s+/);
  const v=_bjFindVerb(text,roman); if(!v||!v.form.p) return null;
  const P=v.form.p, R=roman?1:0;
  const vi=toks.findIndex(t=>_bjCore(t)===v.core); if(vi<0) return null;
  const fam=BJ_VERBS.find(x=>x.fam===v.form.fam);
  // Onderwerp (voornaamwoord) vooraan of na dirooz/emrooz?
  let pi=-1;
  for(let i=0;i<Math.min(2,vi);i++){ if(_bjCore(toks[i]).toLowerCase()===BJ_PRON[P][R]) { pi=i; break; } }
  const opts=[];
  if(pi>=0){
    fam.forms.filter(f=>f.p&&f.p!==P&&BJ_PRON[f.p]).forEach(f=>opts.push({kind:'person',f}));
  }
  const tf=BJ_TENSE[fam.fam]&&BJ_VERBS.find(x=>x.fam===BJ_TENSE[fam.fam]).forms.find(f=>f.p===P);
  if(tf) opts.push({kind:'tense',f:tf});
  if(!opts.length) return null;
  const o=opts[Math.floor(Math.random()*opts.length)];
  const out=[...toks];
  const vtok=toks[vi], newVerb=_bjFormLabel(o.f,roman,v.core);
  out[vi]=vtok.replace(v.core,newVerb);
  let instr;
  if(o.kind==='person'){
    out[pi]=toks[pi].replace(_bjCore(toks[pi]),BJ_PRON[o.f.p][R]);
    instr=`Zeg dezelfde zin over <b>${BJ_PNL[o.f.p]}</b> (${BJ_PRON[o.f.p][R]}):`;
  } else {
    const toPast=o.f.fam==='zijn (verleden)';
    const y=BJ_YDAY[R], t=BJ_TODAY[R];
    const ti=out.findIndex(x=>{const c=_bjCore(x).toLowerCase(); return c===t||c===y;});
    if(toPast){ if(ti>=0) out[ti]=out[ti].replace(_bjCore(out[ti]),y); else out.unshift(y); }
    else { if(ti>=0) out.splice(ti,1); }
    instr=toPast?'Zet de zin in de <b>verleden tijd</b> (gisteren):':'Zet de zin in de <b>tegenwoordige tijd</b> (nu):';
  }
  const target=out.join(' ');
  if(target===text) return null;
  // Lokwoorden: het oude werkwoord en een andere vorm van hetzelfde werkwoord
  const lure=[_bjFormLabel(v.form,roman,v.core),...shuffle(fam.forms.filter(f=>f!==o.f&&f!==v.form&&f.p)).slice(0,1).map(f=>_bjFormLabel(f,roman,v.core))];
  const tks=new Set(target.split(' ').map(_bjCore));
  return {type:'order',title:'Vervoegen',q:instr,src:text,bjExType:'conj_bj',key:w.key,
    s:{hz:target,nl:'',tr:''},distractors:lure.filter(x=>!tks.has(x))};
}

// ══════════════════════════════════════════════════════
// OEFENVRAGEN — vraag van de docent zelf beantwoorden
// ══════════════════════════════════════════════════════
function _bjQuestions(lessonId){ return (typeof BIJLES_QUESTIONS!=='undefined'&&BIJLES_QUESTIONS[lessonId])||[]; }
// Vragen van lessen waarvan je de woorden al (grotendeels) kent
function _bjPickQuestions(lessons,max){
  const st=_bjStore(), log=_bjLog(); log.q=log.q||{};
  const qs=lessons.filter(l=>{ const s=_bjLessonStats(l); return s.words.length&&s.wk/s.words.length>=0.5; })
    .flatMap(l=>_bjQuestions(l.id));
  // Vragen die nog niet (goed) beantwoord zijn eerst
  return qs.map(q=>({q,score:(log.q[q.id]?log.q[q.id].ok:0)+Math.random()})).sort((a,b)=>a.score-b.score).slice(0,max).map(x=>x.q);
}
function _bjAnswerEx(q){ return {type:'answer',q}; }

function bjRenderAnswer(ex,body){
  const roman=!!(CL&&CL._bjRoman), q=ex.q;
  body.innerHTML=`
    <div class="type-pill">Vraag van je docent</div>
    <div class="ctx-card" style="margin-bottom:14px">
      <div class="ctx-sentence">${roman?q.qtr:q.q}</div>
      ${roman?'':`<div class="ctx-tr">${q.qtr}</div>`}
      <div class="ctx-nl">"${q.nl}"</div>
    </div>
    <button class="spk-btn" style="margin:0 auto 12px" data-hz="${_bjEsc(q.q)}" onclick="speakHz(this.dataset.hz)">🔊</button>
    <p style="font-size:14px;font-weight:800;color:var(--ink);margin-bottom:8px">Geef zelf antwoord — typ in Roman of in Dari:</p>
    <input class="t-inp bj-ans-inp" id="bj-ans" dir="auto" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Bijv. ${_bjEsc(roman?q.ex:q.ex)}">
    <button class="btn-check" id="bj-ans-btn">Controleer ✓</button>`;
  const inp=document.getElementById('bj-ans');
  inp.placeholder='Typ je antwoord…';
  const go=()=>bjCheckAnswer(q,inp.value);
  document.getElementById('bj-ans-btn').addEventListener('click',go);
  inp.addEventListener('keydown',e=>{ if(e.key==='Enter') go(); });
}

function bjCheckAnswer(q,val){
  if(WAITING)return;
  val=(val||'').trim();
  if(!val){ document.getElementById('bj-ans').focus(); return; }
  WAITING=true;
  document.getElementById('bj-ans').blur();
  // Per zinsdeel (tussen komma's/punten) kijken of het werkwoord achteraan staat
  const clauses=val.split(/[،,.!?؟;]+/).map(c=>c.trim().split(/\s+/).map(_bjCore).filter(Boolean)).filter(c=>c.length);
  const exp=q.expect.map(h=>_BJ_ALLFORMS.find(f=>f.hz===h)).filter(Boolean);
  const ends=clauses.map(c=>_bjFormOf(c[c.length-1])).filter(Boolean);
  const all=clauses.flat().map(_bjFormOf).filter(Boolean);
  const okEnd=ends.find(f=>exp.includes(f));
  const misplaced=!okEnd&&all.some(f=>exp.includes(f));
  const wrongEnd=!okEnd&&!misplaced&&ends[ends.length-1];
  const lastForm=okEnd||wrongEnd;
  const anyIdx=all.length?0:-1;
  const roman=!!(CL&&CL._bjRoman);
  const nm=f=>`${roman?f.tr:f.hz+' ('+f.tr+')'} = ${f.nl}`;
  const example=`Voorbeeld: ${roman?q.ex:q.exhz+' — '+q.ex}`;
  const log=_bjLog(); log.q=log.q||{}; const ql=log.q[q.id]=log.q[q.id]||{n:0,ok:0};
  ql.n++;
  let ok=null, title, hint;
  if(okEnd){
    ok=true; title='Goed! Het werkwoord klopt';
    hint=`Je gebruikt ${nm(okEnd)}. ${example}`;
  } else if(misplaced){
    ok=false; title='Het werkwoord moet achteraan';
    hint=`Het juiste werkwoord staat erin, maar in het Hazaragi komt het aan het eind van de zin. ${example}`;
  } else if(wrongEnd){
    ok=false; const e=exp.find(f=>f.fam===wrongEnd.fam)||exp[0];
    title='Bijna — kijk naar het werkwoord';
    hint=`Je gebruikte ${nm(wrongEnd)}, maar hier past ${nm(e)}. ${example}`;
    bjLogVerbError(e.hz,wrongEnd.hz);
  } else if(anyIdx>=0){
    ok=false; title='Het werkwoord moet achteraan';
    hint=`In het Hazaragi staat het werkwoord aan het eind van de zin. ${example}`;
  } else {
    title='Vergelijk met het voorbeeld';
    hint=`Ik herken geen werkwoord dat ik ken — misschien klopt het, check het bij je docent. ${example}`;
  }
  if(ok===true){ CC++; LXP+=8; CC_COMBO++; ql.ok++; sfxCorrect(); sparkles(); }
  else if(ok===false){ WC++; CC_COMBO=0; sfxWrong(); }
  save();
  // Volledige uitleg ook onder de vraag (de balk onderin is kort)
  const body=document.getElementById('l-body');
  const card=document.createElement('div');
  card.className='bj-ans-fb '+(ok===true?'ok':ok===false?'ng':'');
  card.innerHTML=`<div class="bj-ans-fb-ttl">${_bjEsc(title)}</div><div>${_bjEsc(hint)}</div>`;
  body.appendChild(card);
  document.getElementById('bj-ans-btn').style.display='none';
  showFB(ok!==false,title,ok===true?'Goed gedaan!':'Lees de uitleg hierboven',''); 
}

// ══════════════════════════════════════════════════════
// VOORBEREIDEN OP JE BIJLES
// ══════════════════════════════════════════════════════
const BJ_DAYS=['zo','ma','di','wo','do','vr','za'];
function bjSetDay(d){ S.bjDay=(S.bjDay===d?null:d); save(); renderBijles(); }
function _bjDayRow(){
  return `<div class="bj-daily-row bj-day-row"><span>Mijn bijlesdag <small>(voor de voorbereiding)</small></span><span class="bj-day-chips">${[1,2,3,4,5,6,0].map(d=>`<button class="fc${S.bjDay===d?' on':''}" onclick="bjSetDay(${d})">${BJ_DAYS[d]}</button>`).join('')}</span></div>`;
}
// 'today' / 'tomorrow' / null
function _bjLessonSoon(){
  if(S.bjDay===null||S.bjDay===undefined) return null;
  const d=new Date().getDay();
  if(d===S.bjDay) return 'today';
  if((d+1)%7===S.bjDay) return 'tomorrow';
  return null;
}
function _bjPrepCard(){
  const soon=_bjLessonSoon();
  if(!_bjList().length) return '';
  if(soon) return `<div class="bj-prep" onclick="bjStartPrep()">
      <div class="bj-prep-ttl">📅 ${soon==='today'?'Vandaag bijles!':'Morgen bijles!'}</div>
      <div class="bj-prep-sub">Bereid je voor: de vorige les, je zwakke punten en de vragen van je docent (± 10 min).</div>
      <div class="bj-prep-btn">Voorbereiden →</div>
    </div>`;
  return `<button class="bj-link-btn" style="margin-top:-6px" onclick="bjStartPrep()">📅 Voorbereiden op je bijles</button>`;
}
function bjStartPrep(){
  seedBijles();
  const st=_bjStore(), lessons=_bjLessonsOrdered();
  if(!lessons.length) return;
  const last=lessons[lessons.length-1];
  const lastKeys=[...new Set(last.items.map(i=>i.hz))];
  const known=_bjByPriority(lastKeys.filter(hz=>_bjIntro(st[hz]))).slice(0,10);
  const fresh=known.length<6?_bjNewCandidates([last]).slice(0,6-known.length):[];
  const hard=Object.keys(st).filter(hz=>_bjIntro(st[hz])&&(st[hz].hist||[]).length>=2&&_bjDiff(st[hz])>=0.45&&!lastKeys.includes(hz)).sort((a,b)=>_bjDiff(st[b])-_bjDiff(st[a])).slice(0,5);
  let keys=[...known,...fresh,...hard];
  keys=keys.concat(_bjFocusSentences(lessons,keys,2));
  const qs=[..._bjQuestions(last.id).slice(0,4),..._bjPickQuestions(lessons.slice(0,-1),1)];
  bjStartSession([...new Set(keys)],'Voorbereiden op je bijles',{questions:qs});
}
function bjStartQuestions(lessonId){
  const qs=shuffle([..._bjQuestions(lessonId)]);
  if(!qs.length){showToast('Nog geen vragen bij deze les');return;}
  bjStartSession([],'Vragen van je docent',{questions:qs});
}
