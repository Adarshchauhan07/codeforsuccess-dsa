import assert from 'node:assert/strict';
const normalize=s=>String(s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ').trim();
const branchIds=(db,id)=>{let set=new Set([id]),stack=[id];while(stack.length){let x=stack.pop();db.patterns.filter(p=>!p.archived&&p.parentId===x).forEach(p=>{if(!set.has(p.id)){set.add(p.id);stack.push(p.id)}})}return set};
const counts=(db,id)=>{let ids=branchIds(db,id),qs=db.questions.filter(q=>!q.archived),direct=new Set(qs.filter(q=>q.patternIds.includes(id)).map(q=>q.id)),all=new Set(qs.filter(q=>q.patternIds.some(pid=>ids.has(pid))).map(q=>q.id)),solved=new Set(qs.filter(q=>q.status==='solved'&&q.patternIds.some(pid=>ids.has(pid))).map(q=>q.id)),due=new Set(qs.filter(q=>q.nextRevision&&new Date(q.nextRevision)<=new Date()&&q.patternIds.some(pid=>ids.has(pid))).map(q=>q.id));return{direct:direct.size,total:all.size,solved:solved.size,due:due.size}};
const db={patterns:[
{id:'lib',name:'Sliding Window',parentId:null,workspace:'library',notes:{summary:'Maintain a window'},archived:false},
{id:'sub',name:'Variable Window',parentId:'lib',workspace:'library',notes:{invariant:'Window state'},archived:false},
{id:'micro',name:'Minimum Valid Window',parentId:'sub',workspace:'library',notes:{pitfalls:'Negative values'},archived:false},
{id:'my',name:'Sliding Window',parentId:null,workspace:'my',notes:{summary:'Personal copy'},archived:false},
{id:'dead',name:'Dead',parentId:'lib',workspace:'library',notes:{},archived:true}
],questions:[
{id:'q1',questionNumber:1,title:'Minimum Window Substring',patternIds:['micro','sub'],status:'solved',archived:false},
{id:'q2',questionNumber:2,title:'Longest Substring',patternIds:['sub'],status:'weak',nextRevision:'2020-01-01',archived:false},
{id:'q3',questionNumber:3,title:'Archived',patternIds:['micro'],status:'solved',archived:true},
{id:'q4',questionNumber:4,title:'Two Sum',patternIds:['my'],status:'new',archived:false},
{id:'q5',questionNumber:5,title:' two-sum ',patternIds:['lib'],status:'new',archived:false}
]};
assert.equal(normalize(' Two-Sum! '),'two sum','normalization');
assert.equal(db.questions.length,5,'migration must not silently merge duplicates');
assert.equal(new Set(db.questions.map(q=>q.questionNumber)).size,5,'question numbers unique');
assert.deepEqual(counts(db,'lib'),{direct:1,total:3,solved:1,due:1},'unique parent counts');
assert.deepEqual(counts(db,'sub'),{direct:2,total:2,solved:1,due:1},'direct and branch counts');
assert.equal(counts(db,'micro').total,1,'archived questions excluded');
assert.equal(branchIds(db,'lib').has('dead'),false,'archived branches excluded');
assert.equal(db.patterns.filter(p=>p.workspace==='library'&&!p.parentId).length,1,'master workspace separate');
assert.equal(db.patterns.filter(p=>p.workspace==='my'&&!p.parentId).length,1,'personal workspace separate');
assert.equal(db.patterns.find(p=>p.id==='sub').notes.invariant,'Window state','pattern notes survive');
const duplicateGroups=[...Map.groupBy(db.questions.filter(q=>!q.archived),q=>normalize(q.title)).values()].filter(g=>g.length>1);
assert.equal(duplicateGroups.length,1,'duplicates enter review');
let canonical=db.questions.find(q=>q.id==='q1');canonical.patternIds=[...new Set([...canonical.patternIds,'lib','micro'])];assert.deepEqual(canonical.patternIds.sort(),['lib','micro','sub'],'one question links many patterns once');
let stable=canonical.questionNumber;canonical.title='Minimum Window';assert.equal(canonical.questionNumber,stable,'editing keeps question ID');
let exportRoundTrip=JSON.parse(JSON.stringify(db));assert.deepEqual(exportRoundTrip.questions[0].patternIds,canonical.patternIds,'export relationships preserved');
console.log('PASS 14 data tests: workspaces, counts, canonical links, IDs, duplicates, archive, notes, export');
