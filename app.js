const $ = id => document.getElementById(id);
let selected = null;
let SQL = null;
let pyodide = null;
const storageKey = 'dbx-de-gym-v1';
const state = JSON.parse(localStorage.getItem(storageKey) || '{}');
state.done ||= {}; state.notes ||= {}; state.code ||= {};
function save(){ localStorage.setItem(storageKey, JSON.stringify(state)); updateStats(); }
function esc(s){ return String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function fillFilters(){
  const cats = [...new Set(PROBLEMS.map(p=>p.category))].sort();
  const diffs = [...new Set(PROBLEMS.map(p=>p.difficulty))].sort();
  cats.forEach(c => $('category').insertAdjacentHTML('beforeend', `<option>${esc(c)}</option>`));
  diffs.forEach(d => $('difficulty').insertAdjacentHTML('beforeend', `<option>${esc(d)}</option>`));
}
function updateStats(){
  $('doneCount').textContent = Object.keys(state.done).filter(k=>state.done[k]).length;
  $('totalCount').textContent = PROBLEMS.length;
  $('p0Count').textContent = PROBLEMS.filter(p=>p.priority==='P0' && !state.done[p.id]).length;
}
function renderDays(){
  const plan = {
    'Day 1':'SQL fundamentals + Python maps/sorts', 'Day 2':'Funnels, DAU/MAU, sessionization', 'Day 3':'Dedupe, storage, quality gates',
    'Day 4':'Experiments, Spark, churn', 'Day 5':'Data modeling + Airflow/dbt', 'Day 6':'Staff-level platform design', 'Day 7':'Metrics, behavioral, mock loop'
  };
  $('dayGrid').innerHTML = Object.entries(plan).map(([d,t]) => {
    const count = PROBLEMS.filter(p=>p.day===d).length;
    return `<div class="daycard"><strong>${d}</strong><span>${t}</span><span>${count} questions</span></div>`;
  }).join('');
}
function filtered(){
  const q = $('search').value.toLowerCase();
  const cat = $('category').value, diff = $('difficulty').value, pri = $('priority').value, run = $('runtime').value;
  return PROBLEMS.filter(p => (!cat || p.category===cat) && (!diff || p.difficulty===diff) && (!pri || p.priority===pri) && (!run || p.runtime===run) && (!q || [p.id,p.title,p.category,p.prompt,(p.tags||[]).join(' ')].join(' ').toLowerCase().includes(q)) );
}
function renderList(){
  const list = filtered();
  $('problemList').innerHTML = list.map(p => `<div class="item ${selected?.id===p.id?'active':''}" data-id="${p.id}"><div class="itemTop"><h3>${esc(p.title)}</h3>${state.done[p.id]?'<span class="badge done">done</span>':''}</div><div class="badges"><span class="badge ${p.priority==='P0'?'p0':''}">${p.priority}</span><span class="badge">${esc(p.category)}</span><span class="badge">${esc(p.difficulty)}</span><span class="badge">${p.runtime}</span></div></div>`).join('') || '<p>No matching problems.</p>';
  document.querySelectorAll('.item').forEach(el => el.onclick = () => selectProblem(el.dataset.id));
}
function selectProblem(id){
  selected = PROBLEMS.find(p=>p.id===id) || PROBLEMS[0];
  $('meta').textContent = `${selected.id} • ${selected.category} • ${selected.difficulty} • ${selected.priority} • ${selected.day}`;
  $('title').textContent = selected.title;
  $('prompt').textContent = selected.prompt;
  $('code').value = state.code[selected.id] ?? selected.starter ?? '';
  $('notes').value = state.notes[selected.id] ?? '';
  $('markDone').textContent = state.done[selected.id] ? 'Mark not done' : 'Mark done';
  $('editorLabel').textContent = selected.runtime === 'sql' ? 'SQL answer' : selected.runtime === 'python' ? 'Python answer' : 'Structured answer / STAR notes';
  if(selected.runtime === 'sql') $('testInfo').innerHTML = `<strong>Runnable SQL:</strong> ${selected.expected.length} expected row(s). Use SQLite syntax. Your output must match expected rows and order.`;
  else if(selected.runtime === 'python') $('testInfo').innerHTML = `<strong>Runnable Python:</strong> define the requested function/class. Tests run in Pyodide.`;
  else $('testInfo').innerHTML = `<strong>Rubric:</strong><ul class="rubricList">${(selected.rubric||[]).map(r=>`<li>${esc(r)}</li>`).join('')}</ul>`;
  $('output').textContent = 'Output will appear here.';
  renderList();
}
async function ensureSQL(){
  if(!SQL){ $('output').textContent = 'Loading SQL engine...'; SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}` }); }
}
function normalizeRows(rows){ return rows.map(r => Object.fromEntries(Object.entries(r).map(([k,v]) => [k, typeof v === 'number' ? Math.round(v*1000)/1000 : v]))); }
async function runSQL(){
  await ensureSQL();
  const db = new SQL.Database();
  db.run(selected.setup);
  const res = db.exec($('code').value);
  const rows = res.length ? res[0].values.map(vals => Object.fromEntries(res[0].columns.map((c,i)=>[c, vals[i]]))) : [];
  const got = normalizeRows(rows), exp = normalizeRows(selected.expected);
  const pass = JSON.stringify(got) === JSON.stringify(exp);
  $('output').textContent = `${pass ? '✅ PASS' : '❌ FAIL'}\n\nExpected:\n${JSON.stringify(exp,null,2)}\n\nGot:\n${JSON.stringify(got,null,2)}`;
}
async function ensurePy(){
  if(!pyodide){ $('output').textContent = 'Loading Python engine (Pyodide). First load can take a bit...'; pyodide = await loadPyodide(); }
}
async function runPython(){
  await ensurePy();
  const code = $('code').value + '\n' + selected.testCode;
  try { await pyodide.runPythonAsync(code); $('output').textContent = '✅ PASS\nAll tests passed.'; }
  catch(e){ $('output').textContent = '❌ FAIL\n' + e.message; }
}
function checkRubric(){
  $('output').textContent = 'Rubric checklist:\n' + (selected.rubric||[]).map((r,i)=>`${i+1}. ${r}`).join('\n') + '\n\nTip: answer verbally in 2-4 minutes for Medium questions and 8-12 minutes for Staff system design questions.';
}
$('runTests').onclick = async () => { if(!selected) return; state.code[selected.id] = $('code').value; save(); try{ if(selected.runtime==='sql') await runSQL(); else if(selected.runtime==='python') await runPython(); else checkRubric(); } catch(e){ $('output').textContent = 'Error: ' + (e.stack || e.message); } };
$('markDone').onclick = () => { if(!selected) return; state.done[selected.id] = !state.done[selected.id]; save(); selectProblem(selected.id); };
$('resetCode').onclick = () => { if(selected){ $('code').value = selected.starter || ''; state.code[selected.id] = $('code').value; save(); } };
$('notes').oninput = () => { if(selected){ state.notes[selected.id] = $('notes').value; save(); } };
$('code').oninput = () => { if(selected){ state.code[selected.id] = $('code').value; save(); } };
['search','category','difficulty','priority','runtime'].forEach(id => $(id).addEventListener('input', renderList));
fillFilters(); renderDays(); updateStats(); selectProblem(PROBLEMS[0].id);
