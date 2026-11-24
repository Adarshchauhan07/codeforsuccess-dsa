const KEY='dsa-os-m1';
export const blank=()=>({version:1,activeQuestionId:null,attempts:[],drafts:{},settings:{theme:'midnight'}});
export function load(){try{return{...blank(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return blank()}}
export function save(data){localStorage.setItem(KEY,JSON.stringify(data));return data}
export function addAttempt(data,attempt){data.attempts.unshift(attempt);save(data);return attempt}
export function clearAttempts(data){data.attempts=[];save(data)}
export function exportAll(data){let a=document.createElement('a'),blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});a.href=URL.createObjectURL(blob);a.download='dsa-os-milestone-1-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
export async function importAll(file){let parsed=JSON.parse(await file.text());if(!parsed||!Array.isArray(parsed.attempts))throw new Error('Invalid DSA OS backup');save(parsed);return parsed}
export const STORE_KEY=KEY;
