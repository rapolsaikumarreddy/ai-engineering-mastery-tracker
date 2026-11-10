(() => {
'use strict';
const $=id=>document.getElementById(id);
const cfg=window.TRACKER_CONFIG||{};
const configured=/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(cfg.supabaseUrl||'') && !!cfg.supabaseAnonKey && !cfg.supabaseAnonKey.includes('REPLACE_');
const client=configured&&window.supabase?.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey,{auth:{detectSessionInUrl:true,autoRefreshToken:true,persistSession:true}});
let user=null,ready=false,busy=false,queue=new Set(),fullReplace=false,timer=null;
const status=(s)=>{$('syncStatus').textContent=s;};
const hasProgress=s=>Object.keys(s.weeks).length>0||s.targetHours!==17;
const rowFor=(n,s)=>({user_id:user.id,week_number:n,status:s.status,hours:s.hours,evidence:s.evidence,notes:s.notes,gate:s.gate});
function showAuth(){ $('signInBtn').hidden=!!user; $('signOutBtn').hidden=!user; $('syncBtn').hidden=!user; }
async function loadRemote(){
 const [weeks,settings]=await Promise.all([client.from('tracker_weeks').select('week_number,status,hours,evidence,notes,gate'),client.from('tracker_settings').select('target_hours').maybeSingle()]);
 if(weeks.error)throw weeks.error;if(settings.error)throw settings.error;
 const remote={weeks:{},targetHours:settings.data?.target_hours??17};
 for(const r of weeks.data||[])remote.weeks[r.week_number]={status:r.status,hours:Number(r.hours),evidence:r.evidence,notes:r.notes,gate:r.gate};
 return remote;
}
async function saveWeek(n){const s=window.TrackerApp.getState();const r=s.weeks[n];if(r){const {error}=await client.from('tracker_weeks').upsert(rowFor(n,r),{onConflict:'user_id,week_number'});if(error)throw error;}else{const {error}=await client.from('tracker_weeks').delete().eq('week_number',n).eq('user_id',user.id);if(error)throw error;}}
async function saveSettings(){const s=window.TrackerApp.getState();const {error}=await client.from('tracker_settings').upsert({user_id:user.id,target_hours:s.targetHours},{onConflict:'user_id'});if(error)throw error;}
async function replaceRemote(){const s=window.TrackerApp.getState();const {error}=await client.from('tracker_weeks').delete().eq('user_id',user.id);if(error)throw error;const rows=Object.entries(s.weeks).map(([n,r])=>rowFor(+n,r));if(rows.length){const result=await client.from('tracker_weeks').insert(rows);if(result.error)throw result.error;}await saveSettings();}
async function flush(){if(!user||!ready||busy||(!fullReplace&&!queue.size))return;busy=true;status('Syncing…');const batch=[...queue];queue.clear();const doReplace=fullReplace;fullReplace=false;
 try{if(doReplace)await replaceRemote();else{for(const n of batch){if(n==='settings')await saveSettings();else await saveWeek(n);}}status('Synced to cloud');}
 catch(err){if(doReplace)fullReplace=true;else batch.forEach(n=>queue.add(n));status('Sync failed — local changes kept');console.error('Sync failed',err);}
 finally{busy=false;if(fullReplace||queue.size){/* retry on next edit, manual sync, focus or reconnect */}}
}
function schedule(){clearTimeout(timer);timer=setTimeout(flush,650);}
function changed(n){if(!user||!ready)return;if(n==null)queue.add('settings');else queue.add(n);status('Unsynced changes');schedule();}
function replaceAll(){if(!user||!ready)return;fullReplace=true;queue.clear();status('Unsynced changes');schedule();}
async function initializeForUser(){ready=false;status('Loading cloud progress…');try{
 const remote=await loadRemote();const local=window.TrackerApp.getState();
 if(hasProgress(remote)){
  if(hasProgress(local)&&JSON.stringify(local)!==JSON.stringify(remote)){
   const useLocal=confirm('Cloud progress exists. OK: replace cloud progress with THIS device\'s local progress. Cancel: load CLOUD progress on this device. Export a backup first if unsure.');
   if(useLocal){ready=true;replaceAll();await flush();return;}
  }
  window.TrackerApp.replaceState(remote);status('Cloud progress loaded');
 }else if(hasProgress(local)){
  const upload=confirm('No cloud progress found. Upload existing local progress to your GitHub-linked account? OK: upload local progress. Cancel: keep local progress without uploading.');
  if(upload){ready=true;replaceAll();await flush();return;}
  status('Local progress only — use Sync now to upload');
 }else status('Cloud sync ready');
 ready=true;
 }catch(err){console.error(err);status('Cloud load failed — local data safe');ready=false;}
}
async function onSession(session){const next=session?.user||null;if(next?.id===user?.id)return;user=next;showAuth();if(user)await initializeForUser();else{ready=false;queue.clear();fullReplace=false;status(configured?'Local mode — sign in to sync':'Local mode — configure Supabase');}}
$('signInBtn').addEventListener('click',async()=>{if(!client){alert('Cloud sync is not configured. See README.md for Supabase setup.');return;}try{const {error}=await client.auth.signInWithOAuth({provider:'github',options:{redirectTo:location.origin+location.pathname}});if(error)throw error;}catch(err){status('Sign-in failed');alert(err.message);}});
$('signOutBtn').addEventListener('click',async()=>{if(!client)return;try{await flush();const {error}=await client.auth.signOut();if(error)throw error;user=null;ready=false;queue.clear();fullReplace=false;window.TrackerApp.replaceState(window.TrackerApp.defaults());showAuth();status('Signed out — cloud data remains saved');}catch(err){alert('Sign-out failed: '+err.message);}});
$('syncBtn').addEventListener('click',async()=>{if(!user)return;if(!ready){await initializeForUser();return;}fullReplace=true;queue.clear();await flush();});
window.addEventListener('online',flush);window.addEventListener('focus',flush);
window.TrackerSync={changed,replaceAll};
showAuth();if(client){client.auth.onAuthStateChange((_event,session)=>{setTimeout(()=>onSession(session),0);});client.auth.getSession().then(({data,error})=>{if(error)throw error;onSession(data.session);}).catch(err=>{console.error(err);status('Auth initialization failed');});}else status('Local mode — configure Supabase');
})();
