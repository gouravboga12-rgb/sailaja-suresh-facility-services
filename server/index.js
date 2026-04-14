const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 5000;

// Supabase Setup
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// --- ENDPOINTS ---

// 1. Services CRUD

// Get all services
app.get('/api/services', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    console.log(`Sending ${data.length} services`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new service
app.post('/api/services', async (req, res) => {
  try {
    const { title, short_desc, long_desc, highlights, icon_name, image_url } = req.body;
    const { data, error } = await supabase
      .from('services')
      .insert([{ title, short_desc, long_desc, highlights, icon_name, image_url }])
      .select();
    
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a service
app.put('/api/services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, short_desc, long_desc, highlights, icon_name, image_url } = req.body;
    const { data, error } = await supabase
      .from('services')
      .update({ title, short_desc, long_desc, highlights, icon_name, image_url })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a service
app.delete('/api/services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Settings (Founder Image, etc.)

// Get all settings
app.get('/api/settings', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*');
    
    if (error) throw error;
    
    // Convert to a more usable object format
    const settingsObj = {};
    data.forEach(item => {
      settingsObj[item.key] = item.value;
    });
    
    res.json(settingsObj);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a setting
app.put('/api/settings/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    
    const { data, error } = await supabase
      .from('settings')
      .upsert({ key, value })
      .select();
    
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
