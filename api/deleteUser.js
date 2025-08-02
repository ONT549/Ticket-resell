import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
    return;
  }

  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({ success: false, error: 'Missing userId' });
    return;
  }

  const { error } = await supabase.auth.admin.deleteUser(userId);
  if (error) {
    res.status(400).json({ success: false, error: error.message });
    return;
  }

  res.status(200).json({ success: true });
}
