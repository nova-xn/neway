// ============================================================
//  НАСТРОЙКИ SUPABASE
// ============================================================
// Впишите сюда данные своего проекта Supabase.
// Где взять: Supabase Dashboard → Project Settings → API
//   SUPABASE_URL      = "Project URL"
//   SUPABASE_ANON_KEY = "anon public" key
//
// Эти значения НЕ секретны — anon key специально предназначен
// для использования в публичном коде на клиенте. Доступ к данным
// контролируется правилами Row Level Security (RLS) в самой базе.
// ============================================================

const SUPABASE_URL = 'https://YOUR-PROJECT-ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const SUPABASE_URL = 'https://yzlbnxqcvcimalmqivgo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_G5k3eATjR-4RY0oJNdcVkg_WFfC48vu';
