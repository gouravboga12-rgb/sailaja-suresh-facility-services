import { supabase } from '../supabaseClient';

export const getServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return { data };
};

export const createService = async (data) => {
  const { data: result, error } = await supabase.from('services').insert([data]).select();
  if (error) throw error;
  return { data: result[0] };
};

export const updateService = async (id, data) => {
  const { data: result, error } = await supabase.from('services').update(data).eq('id', id).select();
  if (error) throw error;
  return { data: result[0] };
};

export const deleteService = async (id) => {
  const { error } = await supabase.from('services').delete().eq('id', id);
  if (error) throw error;
  return { data: { message: 'Service deleted successfully' } };
};

export const getSettings = async () => {
  const { data, error } = await supabase.from('settings').select('*');
  if (error) throw error;
  
  const settingsObj = {};
  data.forEach(item => {
    settingsObj[item.key] = item.value;
  });
  return { data: settingsObj };
};

export const updateSetting = async (key, value) => {
  const { data: result, error } = await supabase.from('settings').upsert({ key, value }).select();
  if (error) throw error;
  return { data: result[0] };
};
