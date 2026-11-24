from pathlib import Path
import sys, shutil
root=Path(sys.argv[1] if len(sys.argv)>1 else '.')
need=[root/'src/main.js',root/'src/data/model.js',root/'src/engine/manual-tree-studio.js']
if not all(p.exists() for p in need): raise SystemExit('Use on DSA_OS_MANUAL_TREE_GITHUB_READY repository root.')
here=Path(__file__).parent
for rel in ['src/engine/manual-tree-v2.js','src/features/ucp-reference.js','src/features/v2.css']:
 p=root/rel; p.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(here/rel,p)
main=(root/'src/main.js').read_text()
main=main.replace("import'./styles.css';","import'./styles.css';import'./features/v2.css';") if './features/v2.css' not in main else main
main=main.replace("import{ManualTreeStudio,seedManualTree,migrateManualTree}from'./engine/manual-tree-studio.js';", "import{ManualTreeStudio,seedManualTree,migrateManualTree}from'./engine/manual-tree-studio.js';import{ManualTreeV2}from'./engine/manual-tree-v2.js';import{ucpReferenceHTML}from'./features/ucp-reference.js';") if 'ManualTreeV2' not in main else main
main=main.replace("['settings','⚙️','Settings']", "['ucp','🧭','UCPBBPOT'],['custom','🎨','My Sheets'],['settings','⚙️','Settings']")
main=main.replace('revision,transfer,analytics,settings','revision,transfer,analytics,ucp:ucpPage,custom:customSheets,settings')
addon="""
function ucpPage(){$('#page').innerHTML=ucpReferenceHTML()}
function customSheets(){
 db.customSheets??=[{id:'sheet_main',name:'My DSA Sheet',color:'#7c3aed',patternIds:[],questionIds:[]}];let s=db.customSheets[0];
 $('#page').innerHTML=`<div class="toolbar"><input id="sheetName" value="${esc(s.name)}"><input id="sheetColor" type="color" value="${s.color}"><button id="saveSheet">Save</button><button id="addPS">＋ Pattern</button><button id="addQS">＋ Question</button></div><section class="custom-sheet"><header class="sheet-head" style="--sc:${s.color}"><h2>${esc(s.name)}</h2><p>Your fully customizable colored sheet.</p></header><div class="sheet-board">${s.patternIds.map(pid=>{let p=db.patterns.find(x=>x.id===pid);if(!p)return'';return `<article class="sheet-column" style="--pc:${p.color}"><h3>${p.emoji} ${esc(p.name)}</h3><small>${esc(p.chooseWhen||'Add a simple choose rule')}</small>${s.questionIds.filter(qid=>db.questions.find(q=>q.id===qid)?.patternIds.includes(pid)).map(qid=>{let q=db.questions.find(x=>x.id===qid);return `<button data-openq="${q.id}">${q.id} · ${esc(q.title)}</button>`}).join('')}</article>`}).join('')}</div></section>`;
 $('#saveSheet').onclick=()=>{s.name=$('#sheetName').value;s.color=$('#sheetColor').value;persist();render()};
 $('#addPS').onclick=()=>{let id=prompt('Pattern ID');if(id&&db.patterns.some(p=>p.id===id)){s.patternIds=[...new Set([...s.patternIds,id])];persist();render()}};
 $('#addQS').onclick=()=>{let id=prompt('Question ID');if(id&&db.questions.some(q=>q.id===id)){s.questionIds=[...new Set([...s.questionIds,id])];persist();render()}};wireQuestionButtons()
}
"""
if 'function ucpPage()' not in main: main=main.replace('function settings(){',addon+'
function settings(){')
(root/'src/main.js').write_text(main)
model=(root/'src/data/model.js').read_text()
model=model.replace('transferSessions:[],settings',"transferSessions:[],customSheets:[{id:'sheet_main',name:'My DSA Sheet',color:'#7c3aed',patternIds:[],questionIds:[]}],settings")
model=model.replace('d={...base,...d};','d={...base,...d};d.customSheets=d.customSheets?.length?d.customSheets:base.customSheets;')
(root/'src/data/model.js').write_text(model)
print('Applied V2 UI modules. Existing Supabase dsa_workspaces.payload remains unchanged.')
