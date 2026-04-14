import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import {
  Users, UserCheck, Coffee, Package, Camera, Zap, Fan, Search,
  Building2, Factory, Warehouse, FlaskConical, Trophy, ShieldCheck,
  Clock, Target, Eye, Heart, CheckCircle2, MapPin, Star, Handshake,
  TrendingUp, Phone, Mail, MessageSquare, Send, CheckCircle,
  ArrowRight, Sparkles, X, Check
} from 'lucide-react';
import { getServices, getSettings } from '../api';
import { defaultServices, defaultSettings } from '../data/defaultData';

const Home = () => {
  const [services, setServices] = useState([]);
  const [settings, setSettings] = useState({});
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [servicesRes, settingsRes] = await Promise.all([
          getServices(),
          getSettings()
        ]);
        
        // Safety Precaution: Use defaults if DB is empty or fails
        if (servicesRes.data && servicesRes.data.length > 0) {
          setServices(servicesRes.data);
        } else {
          console.log("Using default services (Safety Fallback)");
          setServices(defaultServices);
        }

        if (settingsRes.data && Object.keys(settingsRes.data).length > 0) {
           setSettings(settingsRes.data);
        } else {
           console.log("Using default settings (Safety Fallback)");
           setSettings(defaultSettings);
        }
      } catch (err) {
        console.error("Error fetching home data, using fallbacks:", err);
        setServices(defaultServices);
        setSettings(defaultSettings);
      } finally {
        setLoadingServices(false);
      }
    };
    fetchHomeData();
  }, []);

  // ── ABOUT DATA (Static for now, but founder can be dynamic) ───
  const missionPoints = [
    "Provide reliable, trained, and efficient manpower to businesses of all sizes.",
    "Ensure quality service, timely deployment, and client satisfaction in every project.",
    "Support industries with cost-effective staffing solutions without compromising quality.",
  ];
  const visionPoints = [
    "Become the leading manpower service provider in Telangana.",
    "Expand services across multiple sectors while maintaining trust and consistency.",
    "Create meaningful employment opportunities for the local workforce.",
  ];
  const coreValues = [
    { title: 'Integrity', desc: 'Honesty and full transparency with every client.' },
    { title: 'Reliability', desc: 'Delivering what we promise, every single time.' },
    { title: 'Quality', desc: 'Trained, verified, and discipline-focused manpower.' },
    { title: 'Customer Focus', desc: 'Prioritizing your operational needs above all.' },
    { title: 'Professionalism', desc: 'High industry standards in every engagement.' },
  ];

  // ── INDUSTRIES DATA ────────────────────────────────────
  const industries = [
    { icon: Factory, title: "Manufacturing", desc: "Specialized staffing for production lines, assembly, and industrial maintenance." },
    { icon: Building2, title: "Corporate Offices", desc: "Pantry, housekeeping, and maintenance staff for modern business environments." },
    { icon: FlaskConical, title: "Pharma & Biotech", desc: "Lab assistants and housekeeping for Genome Valley pharmaceutical companies." },
    { icon: Warehouse, title: "Warehousing & Logistics", desc: "Packing, loading, and inventory management manpower for logistics centers." },
  ];

  // ── LOCATIONS DATA ─────────────────────────────────────
  const hubs = [
    {
      icon: FlaskConical,
      name: "Genome Valley",
      district: "Shamirpet, Secunderabad",
      tag: "Life Sciences & Biotech Hub",
      tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A leading life sciences and biotech hub with high demand for lab assistants, housekeeping, and maintenance staff.",
    },
    {
      icon: Factory,
      name: "Medchal–Malkajgiri",
      district: "North Hyderabad Region",
      tag: "Industrial & Manufacturing Zone",
      tagColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "One of the fastest-growing industrial zones with factories, warehouses, and production units needing reliable manpower.",
    },
    {
      icon: Building2,
      name: "Siddipet District",
      district: "Siddipet, Telangana",
      tag: "Emerging Commercial Hub",
      tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "An emerging area with growing infrastructure, businesses, and commercial establishments requiring quality facility services.",
    }
  ];

  const stats = [
    { number: "200+", label: "Client Companies Served" },
    { number: "100+", label: "Workers Deployed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24–48h", label: "Deployment Time" },
  ];

  // ── CONTACT STATE ──────────────────────────────────────
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "918897230178";
    const text = `Hi, I am interested in your services.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Interested In:* ${formData.service}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    try {
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      window.location.href = whatsappUrl;
    }

    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  const contactDetails = [
    { icon: Phone, title: "Phone Number", value: "+91 8897230178", link: "tel:8897230178", desc: "Mon-Sat from 9am to 6pm." },
    { icon: Mail, title: "Email Address", value: "goudsuresh540@gmail.com", link: "mailto:goudsuresh540@gmail.com", desc: "Reply within 24 hours." },
    { icon: MessageSquare, title: "WhatsApp Chat", value: "Chat with Us", link: "https://wa.me/918897230178", desc: "Instant support for urgent needs." },
    { icon: Clock, title: "Working Hours", value: "24/7 Operations", link: "#", desc: "For existing facility contracts." },
  ];

  return (
    <div className="bg-black">
      <Helmet>
        <title>S S Facility Services | Premium Staffing & Facility Management</title>
        <meta name="description" content="Leading manpower staffing and facility management solutions in Hyderabad. We provide professional housekeeping, pantry, and industrial labor services." />
        <link rel="canonical" href="https://www.ssfacilityservices.in/" />
      </Helmet>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <Hero />


      {/* ══════════════════════ SERVICES ══════════════════════════ */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4 underline decoration-highlight decoration-2 underline-offset-8">What We Offer</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Comprehensive <span className="text-gradient">Facility Solutions</span></h3>
          </div>
          <Link to="/services" className="hidden md:flex text-highlight font-bold items-center hover:underline group" data-aos="fade-left">
            View All Services <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {loadingServices ? (
            [1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-white/5 rounded-3xl animate-pulse"></div>
            ))
          ) : (
            services.map((service, index) => {
              const IconComp = LucideIcons[service.icon_name] || LucideIcons.Briefcase;
              return (
                <ServiceCard 
                  key={service.id}
                  icon={IconComp} 
                  image={service.image_url} 
                  images={service.image_urls}
                  title={service.title} 
                  shortDesc={service.short_desc} 
                  longDesc={service.long_desc}
                  highlights={service.highlights}
                />
              );
            })
          )}
        </div>
        {!loadingServices && services.length === 0 && (
           <div className="text-center py-20 text-accent/40 italic">We are updating our service catalog. Check back soon.</div>
        )}
        <div className="mt-12 text-center md:hidden" data-aos="fade-up">
          <Link to="/services" className="inline-flex items-center text-highlight font-bold hover:underline group">
            View All Services <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>

      {/* ══════════════════════ WHY CHOOSE US ═════════════════════ */}
      <section className="py-24 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Our Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Why Choose <span className="text-gradient">S S FACILITY SERVICES?</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Experienced Leadership", desc: "Guided by Thatikonda Suresh Goud, we bring years of industry expertise to every client engagement." },
              { icon: ShieldCheck, title: "Vetted Professionals", desc: "Every staff member undergoes rigorous background checks and professional training before deployment." },
              { icon: Clock, title: "24/7 Responsiveness", desc: "Our support team is always available to handle emergencies and sudden manpower requirements." },
            ].map((item, i) => (
              <div key={i} className="p-8 text-center space-y-4" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="bg-highlight/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto text-highlight mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-accent text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ══════════════════════ ABOUT ══════════════════════════════ */}
      <section id="about" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Our Story</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">About <span className="text-gradient">Our Company</span></h3>
          <p className="text-accent mt-4 max-w-3xl mx-auto leading-relaxed">
            <strong>S S FACILITY SERVICES</strong> is a trusted third-party manpower service provider delivering skilled and semi-skilled workforce across multiple industries. We bridge the gap between right talent and right opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Mission */}
          <div className="glass p-8 rounded-3xl border border-secondary/10 space-y-5" data-aos="fade-up" data-aos-delay="100">
            <div className="h-14 w-14 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
              <Target className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Our Mission</h4>
            <ul className="space-y-3">
              {missionPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-accent text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-highlight flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="glass p-8 rounded-3xl border border-secondary/10 space-y-5" data-aos="fade-up" data-aos-delay="200">
            <div className="h-14 w-14 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
              <Eye className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Our Vision</h4>
            <ul className="space-y-3">
              {visionPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-accent text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-highlight flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div className="glass p-8 rounded-3xl border border-secondary/10 space-y-5" data-aos="fade-up" data-aos-delay="300">
            <div className="h-14 w-14 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
              <Heart className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Core Values</h4>
            <ul className="space-y-3">
              {coreValues.map((val) => (
                <li key={val.title} className="flex items-start gap-3 text-accent text-sm">
                  <CheckCircle2 className="h-4 w-4 text-highlight flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">{val.title}:</strong> {val.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder Message */}
        <div className="glass p-8 md:p-14 rounded-[3rem] border border-secondary/20 relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 shrink-0">
               <div className="rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl relative">
                  <img 
                    src={settings.founder_image_url || "/images/founder_high_res.png"} 
                    alt="Founder" 
                    className="w-full h-80 object-cover transition-all duration-700" 
                    style={{ imageRendering: 'high-quality' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
            </div>
            <div className="flex-grow text-center md:text-left space-y-6">
              <h3 className="text-2xl md:text-4xl font-extrabold text-white">Meet Our Founder</h3>
              <div className="w-20 h-1 bg-highlight rounded-full mx-auto md:mx-0"></div>
              <p className="text-accent text-lg italic font-serif leading-relaxed">
                "Our goal is not just to provide workers, but to provide specialists who take pride in their work. A clean and well-managed facility is the cornerstone of any successful business."
              </p>
              <div>
                <p className="text-white font-bold text-xl uppercase tracking-widest">THATIKONDA SURESH GOUD</p>
                <p className="text-highlight text-sm font-bold uppercase tracking-[0.2em] mt-1">Managing Director</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a href="tel:8897230178" className="flex items-center gap-2 text-white bg-secondary/20 px-5 py-3 rounded-full hover:bg-secondary transition-all text-sm font-bold"><Phone className="h-4 w-4" /> 8897230178</a>
                <a href="mailto:goudsuresh540@gmail.com" className="flex items-center gap-2 text-white bg-secondary/20 px-5 py-3 rounded-full hover:bg-secondary transition-all text-sm font-bold"><Mail className="h-4 w-4" /> goudsuresh540@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════ INDUSTRIES ═════════════════════════ */}
      <section id="industries" className="py-24 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Market Focus</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Industries <span className="text-gradient">We Serve</span></h3>
            <p className="text-accent mt-4 max-w-2xl mx-auto text-sm">Tailored facility management and staffing solutions for the specific demands of each sector.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {industries.map((ind, index) => (
              <IndustryCard key={index} icon={ind.icon} title={ind.title} description={ind.desc} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 text-highlight font-bold hover:underline group">
              View All Industries <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ LOCATIONS ══════════════════════════ */}
      <section id="locations" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Where We Operate</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Serving Key <span className="text-gradient">Industrial Hubs</span></h3>
          <p className="text-accent mt-4 max-w-3xl mx-auto leading-relaxed">
            Strong local presence in <span className="text-white font-semibold">Genome Valley</span>, <span className="text-white font-semibold">Medchal–Malkajgiri</span>, and <span className="text-white font-semibold">Siddipet</span> ensures fast, efficient staffing.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl border border-white/10 p-6 text-center" data-aos="zoom-in" data-aos-delay={i * 80}>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.number}</p>
              <p className="text-accent/70 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Hub Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl border border-white/10 hover:border-highlight/50 transition-all duration-500 overflow-hidden group"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={hub.image} alt={hub.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border backdrop-blur-sm ${hub.tagColor}`}>{hub.tag}</span>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-highlight/10 p-2 rounded-xl border border-highlight/20 text-highlight">
                    <hub.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-white group-hover:text-highlight transition-colors">{hub.name}</h4>
                    <p className="text-accent/60 text-[10px] font-semibold uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5" /> {hub.district}
                    </p>
                  </div>
                </div>
                <p className="text-accent/80 text-sm leading-relaxed">{hub.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/locations" className="inline-flex items-center gap-2 text-highlight font-bold hover:underline group">
            View Full Locations Page <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════ CONTACT ════════════════════════════ */}
      <section id="contact" className="py-24 bg-secondary/5 border-t border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Contact <span className="text-gradient">Information</span></h3>
            <p className="text-accent mt-4 max-w-2xl mx-auto">Have questions or need a staffing quote? Reach out through any of the channels below.</p>
          </div>

          {submitted ? (
            <div className="glass p-12 rounded-[3rem] max-w-2xl mx-auto text-center border border-secondary/20 shadow-2xl" data-aos="zoom-in">
              <div className="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h4 className="text-3xl font-extrabold text-white mb-4">Message Sent!</h4>
              <p className="text-accent mb-8">We've received your message. Our team will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="bg-secondary hover:bg-highlight text-white px-10 py-4 rounded-full font-bold transition-all">
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Channels */}
              <div className="lg:col-span-1 space-y-5" data-aos="fade-right">
                {contactDetails.map((item, i) => (
                  <a key={i} href={item.link} className="block glass p-6 rounded-3xl border border-secondary/10 hover:border-highlight/40 transition-all hover:-translate-y-1 group">
                    <div className="flex items-center gap-5">
                      <div className="h-11 w-11 bg-secondary/20 rounded-xl flex items-center justify-center text-highlight flex-shrink-0 group-hover:bg-highlight group-hover:text-white transition-all">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs uppercase tracking-widest">{item.title}</p>
                        <p className="text-white text-sm font-bold truncate">{item.value}</p>
                        <p className="text-accent text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2" data-aos="fade-left">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border border-secondary/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-[100px]"></div>
                  <h4 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                    <Send className="text-secondary" /> Submit an Inquiry
                  </h4>
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Full Name</label>
                        <input 
                          id="name"
                          required 
                          type="text" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="w-full bg-black/40 border border-secondary/20 rounded-2xl p-5 text-white focus:border-highlight outline-none transition-all placeholder:text-accent/30" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Email Address</label>
                        <input 
                          id="email"
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com" 
                          className="w-full bg-black/40 border border-secondary/20 rounded-2xl p-5 text-white focus:border-highlight outline-none transition-all placeholder:text-accent/30" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Service Interest</label>
                      <select 
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-secondary/20 rounded-2xl p-5 text-white focus:border-highlight outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="staffing">Staffing Solutions</option>
                        <option value="technical">Technical Maintenance</option>
                        <option value="hiring">Hiring Talent</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Your Message</label>
                      <textarea 
                        id="message"
                        required 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you today?" 
                        className="w-full bg-black/40 border border-secondary/20 rounded-2xl p-5 text-white focus:border-highlight outline-none transition-all placeholder:text-accent/30 resize-none"
                      ></textarea>
                    </div>
                    <button
                      disabled={loading}
                      type="submit"
                      className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all ${loading ? 'bg-secondary/50 cursor-not-allowed' : 'bg-secondary hover:bg-highlight shadow-2xl shadow-secondary/30 hover:scale-[1.01]'}`}
                    >
                      {loading ? <span className="animate-pulse tracking-widest uppercase">Transmitting...</span> : <><Send className="h-5 w-5" /><span className="tracking-widest uppercase">Dispatch Message</span></>}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════ FINAL CTA ══════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24" data-aos="zoom-in">
        <div className="bg-gradient-to-r from-secondary to-highlight rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Ready to enhance your facility operations?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">Join hundreds of businesses that trust S S FACILITY SERVICES for their staffing needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/hire-talent" className="bg-white text-secondary hover:bg-black hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl">HIRE TALENT NOW</Link>
            <Link to="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">CONTACT US</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
