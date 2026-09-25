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

// ── Overzicht ──
function _bjDueCount(){ return Object.values(_bjStore()).filter(isDue).length; }

function renderBijles(){
  seedBijles();
  const wrap=document.getElementById('bj-content');
  if(!wrap) return;
  if(_bjOpen && _bjFind(_bjOpen)) return renderBijlesDetail();
  _bjOpen=null;
  const list=[..._bjList()].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const total=Object.keys(_bjStore()).length;
  document.getElementById('bj-sub').textContent=list.length?`${list.length} ${list.length===1?'bijles':'bijlessen'} · ${total} woorden en zinnen`:'Alles wat je op bijles leert';
  document.getElementById('bj-practice-all').style.display=total?'':'none';
  if(!list.length){
    wrap.innerHTML=`<div class="bj-empty">
      <div style="font-size:44px;margin-bottom:10px">📝</div>
      <div class="bj-empty-ttl">Nog geen bijles toegevoegd</div>
      <div class="bj-empty-sub">Maak na elke bijles een nieuwe les aan en zet erin wat je hebt geleerd: woorden, zinnen en aantekeningen.</div>
    </div>
    <button class="btn-home" onclick="bjEditLesson()">+ Nieuwe bijles</button>`;
    return;
  }
  const due=_bjDueCount();
  const hero=total?`<div class="review-hero${due?'':' done'}" style="margin:0 0 14px" onclick="${due?'bjStartReview()':"showToast('Geen bijleswoorden om te herhalen — kom later terug')"}">
      <div class="rh-deco">📝</div>
      <div class="rh-title">Bijles-herhaling</div>
      <div class="rh-count">${due}</div>
      <div class="rh-label">${due===1?'woord wacht':'woorden wachten'} op je</div>
      <div class="rh-btn">${due?'Begin herhaling →':'Alles herhaald ✓'}</div>
    </div>`:'';
  wrap.innerHTML=_bjScriptBar()+hero+`<button class="btn-home" style="margin-bottom:14px" onclick="bjEditLesson()">+ Nieuwe bijles</button>`+
    list.map(l=>`<div class="bj-card" onclick="bjOpenLesson('${l.id}')">
      <div class="bj-card-body">
        <div class="bj-card-ttl">${_bjEsc(l.title||'Bijles')}</div>
        <div class="bj-card-meta">${_bjDate(l.date)} · ${l.items.length} ${l.items.length===1?'item':'items'}${l.notes?' · aantekeningen':''}</div>
        ${l.items.length?_bjPreview(l):''}
      </div>
      <div class="bj-card-arr">→</div>
    </div>`).join('');
}

function bjOpenLesson(id){ _bjOpen=id; renderBijles(); document.getElementById('screen-bijles').scrollTop=0; }
function bjBack(){ _bjOpen=null; renderBijles(); }
function bjOpenFromWord(hz){
  const l=_bjList().find(x=>x.items.some(i=>i.hz===hz));
  const idx=['home','review','bijles','reading','grammar','profile'].indexOf('bijles');
  _bjOpen=l?l.id:null;
  navTo('bijles',document.querySelectorAll('.nb')[idx]);
}

// ── Detail van één bijles ──
function renderBijlesDetail(){
  const l=_bjFind(_bjOpen);
  const wrap=document.getElementById('bj-content');
  document.getElementById('bj-sub').textContent=_bjDate(l.date);
  document.getElementById('bj-practice-all').style.display='none';
  const st=_bjStore();
  let lastSec=null;
  const items=l.items.map(it=>{
    const v=st[it.hz];
    const m=v?(v.masteryLevel||1):1;
    const sec=it.section||'';
    const head=sec!==lastSec&&sec?`<div class="gram-ch-label" style="padding:10px 2px 2px">${_bjEsc(sec)}</div>`:'';
    lastSec=sec;
    const tx=_bjItemText(it);
    return head+`<div class="bj-item${_bjScript()==='roman'?' bj-item-roman':''}" onclick="bjEditItem('${l.id}','${it.id}')">
      ${tx.main}
      <div class="bj-item-info">
        ${tx.sub}
        <div class="wc-nl">${_bjEsc(it.nl)}</div>
        ${it.note?`<div class="bj-item-note">${_bjEsc(it.note)}</div>`:''}
      </div>
      <button class="spk-btn wc-spk" data-hz="${_bjEsc(it.hz)}" data-tr="${_bjEsc(it.tr)}" onclick="event.stopPropagation();speakHz(this.dataset.hz,this.dataset.tr)">🔊</button>
      <div class="m-pips">${masteryPips(m)}</div>
    </div>`;
  }).join('');
  wrap.innerHTML=`
    <div class="bj-detail-top">
      <button class="btn-x" onclick="bjBack()">←</button>
      <div class="bj-detail-ttl">${_bjEsc(l.title||'Bijles')}</div>
      <button class="gram-verb-btn" onclick="bjEditLesson('${l.id}')">Bewerk</button>
    </div>
    ${_bjScriptBar()}
    ${l.notes?`<div class="bj-notes"><div class="bj-notes-lbl">Aantekeningen</div>${_bjEsc(l.notes).replace(/\n/g,'<br>')}</div>`:''}
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <button class="btn-home" style="flex:1" onclick="bjEditItem('${l.id}')">+ Woord of zin</button>
      ${l.items.length?`<button class="btn-home" style="flex:1;background:linear-gradient(145deg,#8AAF7A,#5A9A5A)" onclick="bjPractice('${l.id}')">Oefenen</button>`:''}
    </div>
    <div class="bj-items">${items||'<div class="bj-empty-sub" style="text-align:center;padding:20px">Nog niets toegevoegd. Tik op “+ Woord of zin”.</div>'}</div>`;
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
function _bjBuildExercises(words){
  const st=_bjStore();
  let pool=Object.entries(st).map(([hz,v])=>({hz,nl:v.nl,tr:v.tr||''}));
  // Te weinig bijleswoorden voor 4 keuzes? Vul alleen de foute opties aan met lesswoorden.
  if(pool.length<4) pool=pool.concat(Object.entries(S.vocab).filter(([hz])=>!st[hz]).map(([hz,v])=>({hz,nl:v.nl,tr:v.tr||''})));
  const r1=[],r2=[];
  shuffle([...words]).forEach(w=>{
    const d=shuffle(pool.filter(x=>x.hz!==w.hz&&x.nl!==w.nl));
    if(d.length<3)return;
    const lvl=w.masteryLevel||1;
    const wd={hz:w.hz,nl:w.nl,tr:w.tr||''};
    const mc_nl={type:'mc_nl',w:wd,choices:shuffle([w.nl,...d.slice(0,3).map(x=>x.nl)])};
    const mc_hz={type:'mc_hz',w:wd,choices:shuffle([w.hz,...d.slice(0,3).map(x=>x.hz)])};
    const listen={type:'listen',w:wd,choices:shuffle([w.nl,...d.slice(0,3).map(x=>x.nl)])};
    if(lvl===1){ r1.push({type:'intro',w:wd,ctxSentence:null},mc_nl); r2.push(mc_hz); }
    else if(lvl===2){ r1.push(mc_nl); r2.push({type:'type',w:wd}); }
    else if(lvl===3){ r1.push(mc_hz); r2.push({type:'type',w:wd}); }
    else { r1.push(listen); r2.push({type:'type',w:wd}); }
  });
  // Ronde 1 (kennismaken/herkennen) per woord, daarna ronde 2 door elkaar
  return [...r1,...shuffle(r2)];
}

function bjStartSession(hzList,title){
  const st=_bjStore();
  const words=hzList.filter(hz=>st[hz]).map(hz=>({hz,nl:st[hz].nl,tr:st[hz].tr||'',masteryLevel:st[hz].masteryLevel||1}));
  if(!words.length){showToast('Nog niets om te oefenen');return;}
  const exs=_bjBuildExercises(words);
  if(!exs.length){showToast('Voeg minstens 4 woorden toe om te kunnen oefenen');return;}
  CL={
    id:'_bijles',
    title:title||'Bijles',
    xp:Math.min(60,words.length*2),
    words:words.map(w=>({hz:w.hz,nl:w.nl,tr:w.tr})),
    sentences:[],
    _bjHz:new Set(words.map(w=>w.hz))
  };
  EXS=exs;
  _launchLesson();
}

function bjPractice(lessonId){
  seedBijles();
  const lessons=lessonId?[_bjFind(lessonId)].filter(Boolean):_bjList();
  const hz=[...new Set(lessons.flatMap(l=>l.items.map(i=>i.hz)))];
  bjStartSession(shuffle(hz).slice(0,20),lessonId?(lessons[0].title||'Bijles'):'Bijles');
}

function bjStartReview(){
  const due=Object.entries(_bjStore()).filter(([,v])=>isDue(v)).map(([hz])=>hz);
  if(!due.length){showToast('Geen bijleswoorden om te herhalen — kom later terug');return;}
  bjStartSession(shuffle(due).slice(0,25),'Bijles-herhaling');
}
