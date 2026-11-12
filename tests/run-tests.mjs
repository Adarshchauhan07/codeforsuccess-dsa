import assert from 'node:assert/strict';
const patterns=[{id:'f',parentId:null,archived:false,kind:'family'},{id:'s',parentId:'f',archived:false,kind:'subpattern'},{id:'m1',parentId:'s',archived:false,kind:'micro'},{id:'m2',parentId:'s',archived:false,kind:'micro'},{id:'dead',parentId:'f',archived:true,kind:'micro'}];
const questions=[{id:'q1',title:'Multi pattern',patternIds:['m1','m2'],status:'solved',difficulty:'Hard',archived:false},{id:'q2',title:'Direct parent',patternIds:['s'],status:'learning',difficulty:'Medium',archived:false},{id:'q3',title:'Archived',patternIds:['m1'],status:'solved',difficulty:'Easy',archived:true}];
const db={patterns,questions};
function subtree(rootId){let out=new Set([rootId]),stack=[rootId];while(stack.length){let id=stack.pop();db.patterns.filter(p=>!p.archived&&p.parentId===id).forEach(p=>{out.add(p.id);stack.push(p.id)})}return out}
function counts(id){let ids=subtree(id),a=questions.filter(q=>!q.archived);return{direct:new Set(a.filter(q=>q.patternIds.includes(id)).map(q=>q.id)).size,total:new Set(a.filter(q=>q.patternIds.some(x=>ids.has(x))).map(q=>q.id)).size,solved:new Set(a.filter(q=>q.status==='solved'&&q.patternIds.some(x=>ids.has(x))).map(q=>q.id)).size}}
function elements(scope='all',focusId=null){let ps=patterns.filter(p=>!p.archived),qs=questions.filter(q=>!q.archived),ap=new Set(ps.map(p=>p.id)),aq=new Set(qs.map(q=>q.id));if(scope==='questions'){let q=qs.find(x=>x.id===focusId);ap=new Set(q.patternIds);aq=new Set([q.id]);for(let id of [...ap]){let p=ps.find(x=>x.id===id);while(p){ap.add(p.id);p=ps.find(x=>x.id===p.parentId)}}}if(scope==='pattern'){ap=subtree(focusId);aq=new Set(qs.filter(q=>q.patternIds.some(x=>ap.has(x))).map(q=>q.id))}let nodes=[...ps.filter(p=>ap.has(p.id)).map(p=>p.id),...qs.filter(q=>aq.has(q.id)).map(q=>q.id)];let edges=[];ps.filter(p=>ap.has(p.id)&&p.parentId&&ap.has(p.parentId)).forEach(p=>edges.push(`${p.parentId}>${p.id}`));qs.filter(q=>aq.has(q.id)).forEach(q=>q.patternIds.filter(id=>ap.has(id)).forEach(id=>edges.push(`${id}>${q.id}`)));return{nodes,edges}}
assert.deepEqual(counts('f'),{direct:0,total:2,solved:1},'parent count deduplicates a multi-linked question');
assert.deepEqual(counts('s'),{direct:1,total:2,solved:1},'subpattern count includes descendant questions');
let all=elements();assert.equal(new Set(all.nodes).size,6,'all graph has 4 active patterns + 2 questions?');
assert(all.edges.includes('m1>q1')&&all.edges.includes('m2>q1'),'canonical question creates multiple graph edges');
assert.equal(all.nodes.filter(x=>x==='q1').length,1,'question node occurs only once');
let qg=elements('questions','q1');assert(qg.nodes.includes('q1')&&qg.nodes.includes('m1')&&qg.nodes.includes('m2')&&qg.nodes.includes('f'),'question graph includes linked patterns and ancestors');
let pg=elements('pattern','s');assert(pg.nodes.includes('q1')&&pg.nodes.includes('q2')&&!pg.nodes.includes('dead'),'pattern branch excludes archived nodes');
assert.equal(pg.edges.filter(x=>x.endsWith('>q1')).length,2,'same canonical question displays both links');
console.log('PASS 8 graph/data tests');
