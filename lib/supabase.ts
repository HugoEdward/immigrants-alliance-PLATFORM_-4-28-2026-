import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Stub that returns { error } on every operation so forms degrade gracefully
const stubHandler = {
  get: (_: any, prop: string) => {
    if (prop === 'insert' || prop === 'select' || prop === 'update' || prop === 'delete' || prop === 'upsert') {
      return (..._args: any[]) => Promise.resolve({ data: null, error: { message: 'Supabase is not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.' } });
    }
    if (prop === 'eq' || prop === 'neq' || prop === 'order' || prop === 'limit' || prop === 'single' || prop === 'maybeSingle') {
      return (..._args: any[]) => new Proxy({}, stubHandler);
    }
    return (..._args: any[]) => new Proxy({}, stubHandler);
  },
};

const stubClient = {
  from: () => new Proxy({}, stubHandler),
  auth: {
    signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase is not configured.' } }),
    signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase is not configured.' } }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
  },
} as unknown as SupabaseClient;

export const supabase: SupabaseClient = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : stubClient;

export { isConfigured as supabaseConfigured };