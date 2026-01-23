import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Use empty strings as fallback to prevent build failures
// The app will use FALLBACK_POSTS when Supabase is not configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
