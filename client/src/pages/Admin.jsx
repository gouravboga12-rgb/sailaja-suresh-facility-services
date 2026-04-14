import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  getServices, createService, updateService, deleteService, 
  getSettings, updateSetting 
} from '../api';
import { defaultServices, defaultSettings } from '../data/defaultData';
import { supabase } from '../supabaseClient';
import { 
  Plus, Edit2, Trash2, Save, X, Image as ImageIcon, 
  Layout, Settings as SettingsIcon, LogOut, ChevronRight,
  CheckCircle2, AlertCircle, Loader2, Upload, Link as LinkIcon
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Admin = () => {
  const [services, setServices] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [activeTab, setActiveTab] = useState('services');
  
  const fileInputRef = useRef(null);
  const founderFileInputRef = useRef(null);
  
  // Auth (Simple password check)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: '',
    short_desc: '',
    long_desc: '',
    highlights: [''],
    icon_name: 'Users',
    image_url: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [servicesRes, settingsRes] = await Promise.all([
        getServices(),
        getSettings()
      ]);
      setServices(servicesRes.data);
      setSettings(settingsRes.data);
    } catch (err) {
      setError('Failed to fetch data. Is the server running?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const showSuccess = (msg) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Suresh@1119') { 
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid credentials');
    }
  };

  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const serviceData = {
        ...form,
        highlights: form.highlights.filter(h => h.trim() !== '')
      };

      if (editingId) {
        await updateService(editingId, serviceData);
        showSuccess('Service updated successfully!');
      } else {
        await createService(serviceData);
        showSuccess('New service created successfully!');
      }
      
      setEditingId(null);
      setForm({
        title: '',
        short_desc: '',
        long_desc: '',
        highlights: [''],
        icon_name: 'Users',
        image_url: ''
      });
      fetchData();
    } catch (err) {
      setError('Failed to save service');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setForm({
      title: service.title,
      short_desc: service.short_desc || '',
      long_desc: service.long_desc || '',
      highlights: service.highlights || [''],
      icon_name: service.icon_name || 'Users',
      image_url: service.image_url || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this service? This action cannot be undone.');
    if (!confirmDelete) return;

    try {
      setLoading(true);
      await deleteService(id);
      showSuccess('Service deleted successfully!');
      fetchData();
    } catch (err) {
      setError('Failed to delete service');
    } finally {
      setLoading(false);
    }
  };

  const handleRestoreOriginals = async () => {
    const confirmRestore = window.confirm(
      'WARNING: This will delete ALL current services and restore the original eight services. Are you sure you want to proceed?'
    );
    if (!confirmRestore) return;

    try {
      setLoading(true);
      
      // 1. Delete all existing services
      const { data: currentServices } = await getServices();
      for (const s of currentServices) {
        await deleteService(s.id);
      }

      // 2. Insert original services
      for (const s of defaultServices) {
        await createService(s);
      }

      // 3. Ensure founder image is default if missing
      const { data: currentSettings } = await getSettings();
      if (!currentSettings.founder_image_url) {
        await updateSetting('founder_image_url', defaultSettings.founder_image_url);
      }

      showSuccess('Original services and settings restored!');
      fetchData();
    } catch (err) {
      setError('Failed to restore original data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file) => {
    try {
      setUploading(true);
      setError(null);

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to upload image. Please try again.');
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateFounderImage = async (newUrl) => {
    if (!newUrl) return;
    try {
      setLoading(true);
      await updateSetting('founder_image_url', newUrl);
      setSettings({ ...settings, founder_image_url: newUrl });
      showSuccess('Founder image updated successfully!');
    } catch (err) {
      setError('Failed to update founder image');
    } finally {
      setLoading(false);
    }
  };

  const addHighlight = () => {
    setForm({ ...form, highlights: [...form.highlights, ''] });
  };

  const updateHighlight = (index, value) => {
    const newHighlights = [...form.highlights];
    newHighlights[index] = value;
    setForm({ ...form, highlights: newHighlights });
  };

  const removeHighlight = (index) => {
    const newHighlights = form.highlights.filter((_, i) => i !== index);
    setForm({ ...form, highlights: newHighlights });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 w-full max-w-md shadow-2xl shadow-slate-200/50">
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-highlight/20">
              <SettingsIcon className="h-8 w-8 text-highlight" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Admin Access</h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">Enter credentials to manage content</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-900 focus:border-highlight focus:ring-4 focus:ring-highlight/10 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            {authError && <p className="text-red-500 text-xs font-bold flex items-center gap-2"><AlertCircle className="h-4 w-4" /> {authError}</p>}
            <button className="w-full bg-highlight text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-highlight/20">
              Unlock Terminal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar / Top Nav */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200 z-50 flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-highlight rounded-xl flex items-center justify-center text-white shadow-lg shadow-highlight/20">
            <SettingsIcon className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-black tracking-tighter uppercase sm:block hidden text-slate-900">
            Sailaja Suresh <span className="text-highlight">Admin</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'services' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'}`}
          >
            Services
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'settings' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'}`}
          >
            Settings
          </button>
          <button onClick={() => setIsAuthenticated(false)} className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-all border border-slate-200">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4"
          >
            <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
              <div className="h-10 w-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="text-sm font-bold">{success}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'services' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Form Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-900">
                  {editingId ? <Edit2 className="text-highlight h-6 w-6" /> : <Plus className="text-highlight h-6 w-6" />}
                  {editingId ? 'Edit Service' : 'New Service'}
                </h3>
                
                <form onSubmit={handleSaveService} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Service Title</label>
                    <input 
                      required
                      value={form.title}
                      onChange={(e) => setForm({...form, title: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-highlight outline-none text-sm"
                      placeholder="e.g. Master Housekeeping"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Short Description</label>
                    <input 
                      required
                      value={form.short_desc}
                      onChange={(e) => setForm({...form, short_desc: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-highlight outline-none text-sm"
                      placeholder="Catchy one-liner..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Detailed Content</label>
                    <textarea 
                      rows="4"
                      value={form.long_desc}
                      onChange={(e) => setForm({...form, long_desc: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-highlight outline-none text-sm resize-none"
                      placeholder="Full service description..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Highlights</label>
                      <button type="button" onClick={addHighlight} className="text-highlight text-[10px] font-black flex items-center gap-1 hover:underline">
                        <Plus className="h-3 w-3" /> ADD POINT
                      </button>
                    </div>
                    {form.highlights.map((h, i) => (
                      <div key={i} className="flex gap-2">
                        <input 
                          value={h}
                          onChange={(e) => updateHighlight(i, e.target.value)}
                          className="flex-grow bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:border-highlight outline-none text-xs"
                          placeholder="Bullet point..."
                        />
                        <button type="button" onClick={() => removeHighlight(i)} className="text-red-500/50 hover:text-red-500">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest block">Service Media</label>
                    <div className="flex flex-col gap-4">
                      {form.image_url && (
                        <div className="relative group w-full h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                          <img src={form.image_url} alt="Preview" className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={() => setForm({...form, image_url: ''})}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <button
                          type="button"
                          disabled={uploading}
                          onClick={() => fileInputRef.current?.click()}
                          className="flex-1 bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-slate-100 hover:border-highlight/50 transition-all group"
                        >
                          {uploading ? (
                            <Loader2 className="h-6 w-6 text-highlight animate-spin" />
                          ) : (
                            <Upload className="h-6 w-6 text-slate-400 group-hover:text-highlight transition-all" />
                          )}
                          <span className="text-[10px] font-black uppercase text-slate-500 group-hover:text-slate-900 transition-all">
                            {uploading ? 'Uploading...' : 'Upload Image'}
                          </span>
                        </button>
                        
                        <input 
                          type="file"
                          ref={fileInputRef}
                          hidden
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const url = await handleFileUpload(file);
                              if (url) setForm({ ...form, image_url: url });
                            }
                          }}
                        />
                      </div>
                      
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <LinkIcon className="h-4 w-4 text-slate-400" />
                        </div>
                        <input 
                          value={form.image_url}
                          onChange={(e) => setForm({...form, image_url: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 focus:border-highlight outline-none text-xs"
                          placeholder="Or paste an image link here..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Icon Name</label>
                    <input 
                      value={form.icon_name}
                      onChange={(e) => setForm({...form, icon_name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-highlight outline-none text-xs"
                      placeholder="e.g. Users, Zap, Building2"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    {editingId && (
                      <button 
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setForm({ title: '', short_desc: '', long_desc: '', highlights: [''], icon_name: 'Users', image_url: '' });
                        }}
                        className="flex-1 bg-slate-100 border border-slate-200 text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-200 transition-all text-sm"
                      >
                        CANCEL
                      </button>
                    )}
                    <button 
                      type="submit"
                      disabled={loading}
                      className="flex-[2] bg-highlight text-white font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm uppercase tracking-widest shadow-xl shadow-highlight/20"
                    >
                      {loading ? 'SAVING...' : (editingId ? 'UPDATE SERVICE' : 'CREATE SERVICE')}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* List Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h3 className="text-3xl font-black text-slate-900">Managed Services</h3>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleRestoreOriginals}
                    className="bg-red-50 text-red-600 border border-red-100 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm"
                    title="Emergency Restore: Use if services disappear"
                  >
                    Restore Originals
                  </button>
                  <span className="bg-white border border-slate-200 px-4 py-1 rounded-full text-[10px] font-black text-slate-500 shadow-sm">{services.length} TOTAL</span>
                </div>
              </div>
              
              {services.map((service) => {
                const Icon = LucideIcons[service.icon_name] || LucideIcons.HelpCircle;
                return (
                  <div key={service.id} className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center justify-between group hover:border-highlight/30 transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight border border-highlight/20 shrink-0">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-highlight transition-colors">{service.title}</h4>
                        <p className="text-slate-500 text-xs mt-1 max-w-md line-clamp-1">{service.short_desc}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleEdit(service)}
                        className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all border border-slate-200"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
                        className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all border border-slate-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <ChevronRight className="h-4 w-4 text-slate-200 group-hover:text-highlight transition-all" />
                    </div>
                  </div>
                );
              })}
              
              {services.length === 0 && !loading && (
                <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200 shadow-inner">
                  <Layout className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-bold uppercase tracking-widest">No services found</p>
                </div>
              )}
            </div>

          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-slate-900">
              <SettingsIcon className="text-highlight" /> Global Settings
            </h3>
            
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-[100px]"></div>
                
                <h4 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                  <ImageIcon className="text-highlight h-5 w-5" /> Founder Identity
                </h4>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden border border-slate-200 shadow-inner shrink-0 bg-slate-100">
                    <img 
                      src={settings.founder_image_url || 'https://via.placeholder.com/300'} 
                      alt="Founder Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow space-y-6 w-full">
                    <div className="space-y-4">
                       <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Founder Image Management</label>
                       
                       <div className="flex gap-4">
                         <button 
                           type="button"
                           disabled={uploading}
                           onClick={() => founderFileInputRef.current?.click()}
                           className="flex-1 bg-highlight text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-highlight/20 flex items-center justify-center gap-2"
                         >
                           {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                           {uploading ? 'Uploading...' : 'Upload New Photo'}
                         </button>
                         
                         <input 
                           type="file"
                           ref={founderFileInputRef}
                           hidden
                           accept="image/*"
                           onChange={async (e) => {
                             const file = e.target.files?.[0];
                             if (file) {
                               const url = await handleFileUpload(file);
                               if (url) handleUpdateFounderImage(url);
                             }
                           }}
                         />
                       </div>

                       <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <LinkIcon className="h-4 w-4 text-slate-400" />
                         </div>
                         <input 
                           id="founder-img-url"
                           defaultValue={settings.founder_image_url}
                           className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-11 pr-4 text-slate-900 focus:border-highlight outline-none text-sm"
                           placeholder="Or paste direct image link..."
                         />
                         <button 
                           onClick={() => handleUpdateFounderImage(document.getElementById('founder-img-url').value)}
                           className="absolute right-2 top-2 bottom-2 px-6 bg-slate-100 hover:bg-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all text-slate-900"
                         >
                           SAVE LINK
                         </button>
                       </div>
                    </div>
                    <div className="p-4 bg-highlight/5 rounded-2xl border border-highlight/10 flex gap-4 items-start">
                      <AlertCircle className="text-highlight shrink-0 h-5 w-5 mt-1" />
                      <p className="text-slate-600 text-xs leading-relaxed">
                        This image will be updated across the **Home** hero section and the **About** page founder highlights. Use high-resolution landscape images for best results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 opacity-60 pointer-events-none shadow-sm">
                 <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-900">
                  <CheckCircle2 className="text-highlight h-5 w-5" /> Site Status
                </h4>
                <p className="text-slate-500 text-sm">Site is currently globally accessible. Maintenance mode coming soon.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
