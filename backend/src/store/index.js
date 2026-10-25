import * as local from './local.js';

// Use Supabase when its keys are present, otherwise fall back to the local files.
const useSupabase = !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
const impl = useSupabase ? await import('./supabase.js') : local;
export const store = impl;
export const storeName = impl.name;
