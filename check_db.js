const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: './server/.env' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkData() {
  const { data: services, error: sError } = await supabase.from('services').select('*');
  const { data: settings, error: stError } = await supabase.from('settings').select('*');

  if (sError) console.error("Error fetching services:", sError);
  else console.log("Services count:", services.length);

  if (stError) console.error("Error fetching settings:", stError);
  else {
    console.log("Settings:", settings);
  }
}

checkData();
