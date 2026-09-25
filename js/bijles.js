// ══════════════════════════════════════════════════════
// BIJLES — eigen woorden/zinnen + aantekeningen per bijles
// S.bijles = [{id, date, title, notes, items:[{id, hz, tr, nl, note}]}]
// Elk item komt ook in S.vocab (id 'bijles_<itemId>'), zodat het meedoet
// met Mijn woorden en de dagelijkse herhaling.
// ══════════════════════════════════════════════════════
let _bjOpen=null; // id van de bijles die openstaat

function _bjList(){ if(!Array.isArray(S.bijles)) S.bijles=[]; return S.bijles; }
function _bjId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function _bjEsc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
// Quotes/backslashes breken de onclick- en data-attributen in de oefeningen
function _bjClean(s){ return String(s||'').replace(/["\\<>]/g,'').replace(/\s+/g,' ').trim(); }
function _bjDate(iso){
  if(!iso) return '';
  const d=new Date(iso+'T12:00:00');
  return isNaN(d)?iso:d.toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'});
}
function _bjFind(id){ return _bjList().find(l=>l.id===id); }

// ── Koppeling met S.vocab ──
function _bjAddVocab(it){
  if(S.vocab[it.hz]) return; // bestaat al (bijv. uit een les) — voortgang niet overschrijven
  S.vocab[it.hz]={id:'bijles_'+it.id,nl:it.nl,tr:it.tr||'',tag:'',bijles:true,mastery:0,masteryLevel:1,nr:null,errors:0,firstSeen:new Date().toISOString(),typeCorrect:0,typeLast5:[],mcCorrect:0};
}
function _bjOwnsVocab(it,hz){ const v=S.vocab[hz]; return v&&v.id==='bijles_'+it.id; }
function _bjUpdateVocab(it,oldHz){
  if(_bjOwnsVocab(it,oldHz)){
    const v=S.vocab[oldHz];
    if(oldHz!==it.hz){
      // Tekst aangepast: voortgang verhuist mee naar de nieuwe tekst
      if(S.vocab[it.hz]){ delete S.vocab[oldHz]; }
      else { S.vocab[it.hz]=v; delete S.vocab[oldHz]; }
    }
    if(_bjOwnsVocab(it,it.hz)){ S.vocab[it.hz].nl=it.nl; S.vocab[it.hz].tr=it.tr||''; }
  } else {
    _bjAddVocab(it);
  }
}
function _bjRemoveVocab(it){ if(_bjOwnsVocab(it,it.hz)) delete S.vocab[it.hz]; }

// ── Overzicht ──
function renderBijles(){
  const wrap=document.getElementById('bj-content');
  if(!wrap) return;
  if(_bjOpen && _bjFind(_bjOpen)) return renderBijlesDetail();
  _bjOpen=null;
  const list=[..._bjList()].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const total=list.reduce((n,l)=>n+l.items.length,0);
  document.getElementById('bj-sub').textContent=list.length?`${list.length} ${list.length===1?'les':'lessen'} · ${total} woorden en zinnen`:'Alles wat je op bijles leert';
  document.getElementById('bj-practice-all').style.display=total?'':'none';
  if(!list.length){
    wrap.innerHTML=`<div class="bj-empty">
      <div style="font-size:44px;margin-bottom:10px">📝</div>
      <div class="bj-empty-ttl">Nog geen bijles toegevoegd</div>
      <div class="bj-empty-sub">Maak na elke bijles een nieuwe les aan en zet erin wat je hebt geleerd: woorden, zinnen en aantekeningen. Ze komen vanzelf in je dagelijkse herhaling.</div>
    </div>
    <button class="btn-home" onclick="bjEditLesson()">+ Nieuwe bijles</button>`;
    return;
  }
  wrap.innerHTML=`<button class="btn-home" style="margin-bottom:14px" onclick="bjEditLesson()">+ Nieuwe bijles</button>`+
    list.map(l=>`<div class="bj-card" onclick="bjOpenLesson('${l.id}')">
      <div class="bj-card-body">
        <div class="bj-card-ttl">${_bjEsc(l.title||'Bijles')}</div>
        <div class="bj-card-meta">${_bjDate(l.date)} · ${l.items.length} ${l.items.length===1?'item':'items'}${l.notes?' · aantekeningen':''}</div>
        ${l.items.length?`<div class="bj-card-hz">${l.items.slice(0,4).map(i=>_bjEsc(i.hz)).join(' · ')}</div>`:''}
      </div>
      <div class="bj-card-arr">→</div>
    </div>`).join('');
}

function bjOpenLesson(id){ _bjOpen=id; renderBijles(); document.getElementById('screen-bijles').scrollTop=0; }
function bjBack(){ _bjOpen=null; renderBijles(); }

// ── Detail van één bijles ──
function renderBijlesDetail(){
  const l=_bjFind(_bjOpen);
  const wrap=document.getElementById('bj-content');
  document.getElementById('bj-sub').textContent=_bjDate(l.date);
  document.getElementById('bj-practice-all').style.display='none';
  const items=l.items.map(it=>{
    const v=S.vocab[it.hz];
    const m=v?(v.masteryLevel||1):1;
    return `<div class="bj-item" onclick="bjEditItem('${l.id}','${it.id}')">
      <div class="bj-item-hz">${_bjEsc(it.hz)}</div>
      <div class="bj-item-info">
        ${it.tr?`<div class="wc-pron">${_bjEsc(it.tr)}</div>`:''}
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
    if(!confirm(`“${l.title}” verwijderen? De ${l.items.length} woorden en zinnen verdwijnen dan ook uit Mijn woorden.`))return;
    l.items.forEach(_bjRemoveVocab);
    S.bijles=_bjList().filter(x=>x.id!==l.id);
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
  setTimeout(()=>hzInp.focus(),300);
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
      const ni={id:_bjId(),hz,tr,nl,note};
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
    _bjRemoveVocab(it);
    l.items=l.items.filter(i=>i.id!==it.id);
    save(); bg.remove(); renderBijles();
  });
}

// ── Oefenen ──
function bjPractice(lessonId){
  const lessons=lessonId?[_bjFind(lessonId)].filter(Boolean):_bjList();
  const seen=new Set();
  const words=[];
  lessons.forEach(l=>l.items.forEach(it=>{
    if(seen.has(it.hz))return;
    seen.add(it.hz);
    _bjAddVocab(it);
    const v=S.vocab[it.hz];
    words.push({hz:it.hz,nl:v.nl||it.nl,tr:v.tr||it.tr||'',masteryLevel:v.masteryLevel||1});
  }));
  if(!words.length){showToast('Nog niets om te oefenen');return;}
  if(Object.keys(S.vocab).length<4){showToast('Voeg minstens 4 woorden toe om te kunnen oefenen');return;}
  const pick=shuffle(words).slice(0,20);
  CL={
    id:'_bijles',
    title:lessonId?(lessons[0].title||'Bijles'):'Bijles',
    xp:Math.min(60,pick.length*2),
    words:pick.map(w=>({hz:w.hz,nl:w.nl,tr:w.tr})),
    sentences:[]
  };
  EXS=buildReviewExercises(pick);
  if(!EXS.length){showToast('Nog niet genoeg woorden om te oefenen');return;}
  _launchLesson();
}
