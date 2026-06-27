// ============================================================
//  НАСТРОЙКИ SUPABASE
// ============================================================
// Где взять: Supabase Dashboard → Project Settings → API
//   SUPABASE_URL      = "Project URL" (без /rest/v1/ на конце)
//   SUPABASE_ANON_KEY = ключ "publishable" (sb_publishable_...)
//
// Эти значения НЕ секретны — publishable-ключ специально предназначен
// для использования в публичном коде на клиенте. Доступ к данным
// контролируется правилами Row Level Security (RLS) в самой базе.
//
// ВАЖНО: секретный ключ (sb_secret_...) сюда НИКОГДА не вставляется
// и никогда не загружается на GitHub — он даёт полный доступ к базе
// мимо всех ограничений безопасности.
// ============================================================

window.SUPABASE_URL = 'https://yzlbnxqcvcimalmqivgo.supabase.co';
window.SUPABASE_ANON_KEY = 'sb_publishable_G5k3eATjR-4RY0oJNdcVkg_WFfC48vu';

if (!window.supabaseClient) {
  window.supabaseClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
}
