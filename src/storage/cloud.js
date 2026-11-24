import{createClient}from'@supabase/supabase-js';
const K='dsa-os-final';let client=null;
export function configured(){return Boolean(import.meta.env.VITE_SUPABASE_URL&&import.meta.env.VITE_SUPABASE_ANON_KEY)}
export function supabase(){if(!configured())return null;return client??=createClient(import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_ANON_KEY)}
export function localLoad(){try{return JSON.parse(localStorage.getItem(K)||'null')}catch{return null}}
export function localSave(db){localStorage.setItem(K,JSON.stringify(db))}
export async function session(){return configured()?(await supabase().auth.getSession()).data.session:null}
export async function signIn(email,password){return supabase().auth.signInWithPassword({email,password})}
export async function signUp(email,password){return supabase().auth.signUp({email,password})}
export async function signOut(){return supabase()?.auth.signOut()}
export async function cloudLoad(userId){let{data,error}=await supabase().from('dsa_workspaces').select('payload').eq('user_id',userId).maybeSingle();if(error)throw error;return data?.payload||null}
export async function cloudSave(userId,db){let payload={...db,cloud:{...db.cloud,lastSync:new Date().toISOString()}};let{error}=await supabase().from('dsa_workspaces').upsert({user_id:userId,payload,updated_at:new Date().toISOString()},{onConflict:'user_id'});if(error)throw error;return payload}
export const LOCAL_KEY=K;
