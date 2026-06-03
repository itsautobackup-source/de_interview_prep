const $ = id => document.getElementById(id);
let selected = null;
let SQL = null;
let pyodide = null;
let codeEditor = null;
const storageKey = 'dbx-de-gym-v1';
const state = JSON.parse(localStorage.getItem(storageKey) || '{}');
state.done ||= {}; state.notes ||= {}; state.code ||= {};

function save(){ localStorage.setItem(storageKey, JSON.stringify(state)); updateStats(); }
function esc(s){ return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function getCode(){ return codeEditor ? codeEditor.getValue() : $('code').value; }
function setCode(value, clearHistory=true){
  const next = value ?? '';
  if(codeEditor){
    codeEditor.setValue(next);
    if(clearHistory) codeEditor.clearHistory();
    setTimeout(() => codeEditor.refresh(), 0);
  } else {
    $('code').value = next;
  }
}

function editorModeFor(runtime){
  if(runtime === 'python') return 'text/x-python';
  if(runtime === 'sql') return 'text/x-sql';
  return 'text/plain';
}

function initEditor(){
  if(typeof CodeMirror === 'undefined') return;
  codeEditor = CodeMirror.fromTextArea($('code'), {
    lineNumbers: true,
    mode: 'text/x-python',
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    smartIndent: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true,
    lineWrapping: false,
    viewportMargin: Infinity,
    extraKeys: {
      'Ctrl-Enter': () => $('runTests').click(),
      'Cmd-Enter': () => $('runTests').click(),
      'Tab': cm => {
        if(cm.somethingSelected()) cm.indentSelection('add');
        else cm.replaceSelection(' '.repeat(cm.getOption('indentUnit')), 'end', '+input');
      },
      'Shift-Tab': cm => cm.indentSelection('subtract')
    }
  });
  codeEditor.on('change', () => {
    if(selected){ state.code[selected.id] = getCode(); save(); }
  });
}

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
    'Day 1':'SQL fundamentals + Python maps/sorts',
    'Day 2':'Funnels, DAU/MAU, sessionization',
    'Day 3':'Dedupe, storage, quality gates',
    'Day 4':'Experiments, Spark, churn',
    'Day 5':'Data modeling + Airflow/dbt',
    'Day 6':'Staff-level platform design',
    'Day 7':'Metrics, behavioral, mock loop'
  };
  $('dayGrid').innerHTML = Object.entries(plan).map(([d,t]) => {
    const count = PROBLEMS.filter(p=>p.day===d).length;
    return `<div class="daycard"><strong>${d}</strong><span>${t}</span><span>${count} questions</span></div>`;
  }).join('');
}

function filtered(){
  const q = $('search').value.toLowerCase();
  const cat = $('category').value, diff = $('difficulty').value, pri = $('priority').value, run = $('runtime').value;
  return PROBLEMS.filter(p => {
    const haystack = [
      p.id,
      p.title,
      p.category,
      p.prompt,
      p.setup,
      p.testCode,
      JSON.stringify(p.expected || []),
      (p.tags || []).join(' ')
    ].join(' ').toLowerCase();
    return (!cat || p.category===cat) && (!diff || p.difficulty===diff) && (!pri || p.priority===pri) && (!run || p.runtime===run) && (!q || haystack.includes(q));
  });
}

function renderList(){
  const list = filtered();
  $('problemList').innerHTML = list.map(p => `<div class="item ${selected?.id===p.id?'active':''}" data-id="${p.id}"><div class="itemTop"><h3>${esc(p.title)}</h3>${state.done[p.id]?'<span class="badge done">done</span>':''}</div><div class="badges"><span class="badge ${p.priority==='P0'?'p0':''}">${p.priority}</span><span class="badge">${esc(p.category)}</span><span class="badge">${esc(p.difficulty)}</span><span class="badge">${p.runtime}</span></div></div>`).join('') || '<p>No matching problems.</p>';
  document.querySelectorAll('.item').forEach(el => el.onclick = () => selectProblem(el.dataset.id));
}

function codeBlock(label, code, lang=''){
  if(!String(code || '').trim()) return '';
  return `<section class="problemBlock"><h3>${esc(label)}</h3><pre class="inlineCode ${esc(lang)}"><code>${esc(code).trim()}</code></pre></section>`;
}

function parseCreateTables(setupSql){
  const tables = [];
  const re = /CREATE\s+TABLE\s+([\w.]+)\s*\(([^;]+?)\)\s*;/gis;
  let match;
  while((match = re.exec(setupSql || ''))){
    const tableName = match[1];
    const columns = match[2]
      .split(',')
      .map(x => x.trim().replace(/\s+/g, ' '))
      .filter(Boolean);
    tables.push({ tableName, columns });
  }
  return tables;
}

function schemaSummaryBlock(setupSql){
  const tables = parseCreateTables(setupSql);
  if(!tables.length) return '';
  const cards = tables.map(t => `
    <div class="schemaCard">
      <h4>${esc(t.tableName)}</h4>
      <ul>${t.columns.map(c => `<li><code>${esc(c)}</code></li>`).join('')}</ul>
    </div>`).join('');
  return `<section class="problemBlock"><h3>Tables you can query</h3><div class="schemaGrid">${cards}</div></section>`;
}

function expectedBlock(expected){
  if(!expected || !expected.length) return '';
  const cols = Object.keys(expected[0] || {});
  const table = `<div class="expectedTableWrap"><table class="expectedTable"><thead><tr>${cols.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${expected.map(row => `<tr>${cols.map(c => `<td>${esc(row[c])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<section class="problemBlock"><h3>Expected output for sample data</h3>${table}<details><summary>Expected output as JSON</summary><pre class="inlineCode json"><code>${esc(JSON.stringify(expected, null, 2))}</code></pre></details></section>`;
}

function rubricBlock(p){
  const items = (p.rubric || []).map(r => `<li>${esc(r)}</li>`).join('');
  if(!items) return '';
  return `<section class="problemBlock"><h3>Scoring rubric</h3><ul class="rubricList">${items}</ul></section>`;
}

function renderProblemPrompt(p){
  const pieces = [];
  pieces.push(`<section class="problemBlock problemIntro"><h3>Problem statement</h3><div class="problemText">${esc(p.prompt)}</div></section>`);

  if(p.runtime === 'sql'){
    pieces.push(schemaSummaryBlock(p.setup));
    pieces.push(codeBlock('Setup SQL: schema and sample data loaded before your query', p.setup, 'sql'));
    pieces.push(expectedBlock(p.expected));
    pieces.push(`<section class="problemBlock"><h3>SQL answer contract</h3><ul><li>Use only the table names and columns shown above.</li><li>Return exactly the requested column names, aliases, row order, and rounded values.</li><li>Do not include CREATE TABLE or INSERT statements in your answer; the app loads the setup SQL automatically.</li><li>The runner compares your query result to the expected output above.</li></ul></section>`);
  } else if(p.runtime === 'python'){
    pieces.push(codeBlock('Starter signature', p.starter, 'python'));
    pieces.push(codeBlock('Sample tests run by the app', p.testCode, 'python'));
    pieces.push(`<section class="problemBlock"><h3>Python answer contract</h3><ul><li>Define the requested function or class in the editor.</li><li>You may add helper functions or imports.</li><li>Return values exactly as the tests expect; avoid debug prints unless necessary.</li></ul></section>`);
  } else {
    pieces.push(rubricBlock(p));
    pieces.push(`<section class="problemBlock"><h3>Answer structure</h3><ul><li>Start with assumptions and scope.</li><li>Describe architecture, tradeoffs, failure modes, and operational controls.</li><li>Close with metrics, risks, and rollout plan.</li></ul></section>`);
  }
  return pieces.join('');
}

function selectProblem(id){
  selected = PROBLEMS.find(p=>p.id===id) || PROBLEMS[0];
  $('meta').textContent = `${selected.id} • ${selected.category} • ${selected.difficulty} • ${selected.priority} • ${selected.day}`;
  $('title').textContent = selected.title;
  $('prompt').innerHTML = renderProblemPrompt(selected);
  if(codeEditor) codeEditor.setOption('mode', editorModeFor(selected.runtime));
  setCode(state.code[selected.id] ?? selected.starter ?? '');
  $('notes').value = state.notes[selected.id] ?? '';
  $('markDone').textContent = state.done[selected.id] ? 'Mark not done' : 'Mark done';
  $('editorLabel').textContent = selected.runtime === 'sql' ? 'SQL answer' : selected.runtime === 'python' ? 'Python answer' : 'Structured answer / STAR notes';
  if(selected.runtime === 'sql') $('testInfo').innerHTML = `<strong>Runnable SQL:</strong> schema/sample data are shown above and loaded automatically before your query. Use SQLite syntax. Use Ctrl/Cmd+Enter to run.`;
  else if(selected.runtime === 'python') $('testInfo').innerHTML = `<strong>Runnable Python:</strong> define the requested function/class. Tests are shown above and run in Pyodide. Use Ctrl/Cmd+Enter to run.`;
  else $('testInfo').innerHTML = `<strong>Rubric mode:</strong> write a structured answer in the editor or notes, then use the rubric checklist.`;
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
  const res = db.exec(getCode());
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
  const code = getCode() + '\n' + selected.testCode;
  try { await pyodide.runPythonAsync(code); $('output').textContent = '✅ PASS\nAll tests passed.'; }
  catch(e){ $('output').textContent = '❌ FAIL\n' + e.message; }
}

function checkRubric(){
  $('output').textContent = 'Rubric checklist:\n' + (selected.rubric||[]).map((r,i)=>`${i+1}. ${r}`).join('\n') + '\n\nTip: answer verbally in 2-4 minutes for Medium questions and 8-12 minutes for Staff system design questions.';
}

function basicSQLFormat(sql){
  if(!sql.trim()) return '';
  let out = sql.replace(/\s+/g, ' ').trim();
  out = out.replace(/\s*,\s*/g, ',\n  ');
  const breakBefore = ['WITH','SELECT','FROM','WHERE','GROUP BY','HAVING','ORDER BY','LIMIT','UNION ALL','UNION','LEFT JOIN','RIGHT JOIN','FULL OUTER JOIN','INNER JOIN','OUTER JOIN','JOIN'];
  breakBefore.forEach(k => { out = out.replace(new RegExp('\\s+' + k.replace(/ /g, '\\s+') + '\\b', 'gi'), '\n' + k); });
  ['ON','AND','OR'].forEach(k => { out = out.replace(new RegExp('\\s+' + k + '\\b', 'gi'), '\n  ' + k); });
  const kw = ['select','from','where','group by','having','order by','limit','with','union all','union','left join','right join','full outer join','inner join','outer join','join','on','and','or','as','case','when','then','else','end','over','partition by'];
  kw.sort((a,b)=>b.length-a.length).forEach(k => { out = out.replace(new RegExp('\\b' + k.replace(/ /g, '\\s+') + '\\b', 'gi'), k.toUpperCase()); });
  return out.replace(/\n{2,}/g, '\n').replace(/^\n/, '').trim() + '\n';
}

function normalizeCodeWhitespace(code){
  return code.replace(/\t/g, '    ').replace(/[ \t]+$/gm, '').replace(/\n{3,}$/g, '\n\n');
}

function indentAllLines(){
  if(!codeEditor) return;
  const cursor = codeEditor.getCursor();
  codeEditor.operation(() => {
    for(let i=0; i<codeEditor.lineCount(); i++) codeEditor.indentLine(i, 'smart');
  });
  codeEditor.setCursor(cursor);
}

function formatCurrentCode(){
  if(!selected) return;
  let next = getCode();
  if(selected.runtime === 'sql') next = basicSQLFormat(next);
  else next = normalizeCodeWhitespace(next);
  setCode(next, false);
  if(selected.runtime !== 'sql') indentAllLines();
  state.code[selected.id] = getCode();
  save();
  if(codeEditor) codeEditor.focus();
}

$('runTests').onclick = async () => { if(!selected) return; state.code[selected.id] = getCode(); save(); try{ if(selected.runtime==='sql') await runSQL(); else if(selected.runtime==='python') await runPython(); else checkRubric(); } catch(e){ $('output').textContent = 'Error: ' + (e.stack || e.message); } };
$('markDone').onclick = () => { if(!selected) return; state.done[selected.id] = !state.done[selected.id]; save(); selectProblem(selected.id); };
$('formatCode').onclick = formatCurrentCode;
$('resetCode').onclick = () => { if(selected){ setCode(selected.starter || ''); state.code[selected.id] = getCode(); save(); } };
$('notes').oninput = () => { if(selected){ state.notes[selected.id] = $('notes').value; save(); } };
$('code').oninput = () => { if(!codeEditor && selected){ state.code[selected.id] = $('code').value; save(); } };
['search','category','difficulty','priority','runtime'].forEach(id => $(id).addEventListener('input', renderList));

initEditor();
fillFilters();
renderDays();
updateStats();
selectProblem(PROBLEMS[0].id);
