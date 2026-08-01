import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey && /^https?:\/\//.test(supabaseUrl));

export const supabase: SupabaseClient | null = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function isSupabaseConfigured() {
  return Boolean(supabase);
}
