import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Eye, Heart, Award, CheckCircle2, Users, ShieldCheck,
  Clock, TrendingUp, MapPin, Star, Handshake, Zap, FlaskConical,
  Factory, Building2, UserCheck, Trophy, Phone, Mail, ArrowRight
} from 'lucide-react';
import { getSettings } from '../api';
import { defaultSettings } from '../data/defaultData';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await getSettings();
        if (res.data && Object.keys(res.data).length > 0) {
          setSettings(res.data);
        } else {
          setSettings(defaultSettings);
        }
      } catch (err) {
        console.error("Error fetching about settings:", err);
        setSettings(defaultSettings);
      }
    };
    fetchAboutData();
  }, []);

  const missionPoints = [
    "To provide reliable, trained, and efficient manpower to businesses of all sizes.",
    "To ensure quality service, timely deployment, and client satisfaction in every project.",
    "To support industries with cost-effective staffing solutions without compromising quality.",
  ];
// ... [keeping existing static data] ...

  const visionPoints = [
    "To become the leading manpower service provider in Telangana.",
    "To expand services across multiple sectors while maintaining trust and consistency.",
    "To create meaningful employment opportunities for the local workforce.",
  ];

  const coreValues = [
    { title: 'Integrity', desc: 'Honesty and full transparency with every client.' },
    { title: 'Reliability', desc: 'Delivering what we promise, every single time.' },
    { title: 'Quality', desc: 'Trained, verified, and discipline-focused manpower.' },
    { title: 'Customer Focus', desc: 'Prioritizing your operational needs above all.' },
    { title: 'Professionalism', desc: 'High industry standards in every engagement.' },
  ];

  const whyChooseUs = [
    { icon: Clock, title: "Fast Deployment", desc: "Urgent manpower needs handled within 24–48 hours." },
    { icon: ShieldCheck, title: "Verified & Trained", desc: "Every worker is background-checked and role-trained." },
    { icon: MapPin, title: "Strong Local Presence", desc: "Active in key industrial zones across Telangana." },
    { icon: Zap, title: "Replacement Support", desc: "Instant replacements to ensure uninterrupted workflow." },
    { icon: TrendingUp, title: "Flexible Hiring", desc: "Daily, monthly, or project-based staffing contracts." },
    { icon: Star, title: "Cost-Effective", desc: "Significant savings over maintaining in-house teams." },
    { icon: Handshake, title: "Dedicated Support", desc: "A dedicated team assigned to every client account." },
  ];

  const localZones = [
    {
      icon: FlaskConical,
      name: "Genome Valley",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      desc: "Specialized staffing for pharma & biotech labs — trained in clean room protocols and laboratory practices."
    },
    {
      icon: Factory,
      name: "Medchal–Malkajgiri",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      desc: "Industrial & factory manpower for production lines, warehouses, and logistics operations."
    },
    {
      icon: Building2,
      name: "Siddipet District",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      desc: "Expanding workforce solutions for offices, institutions, and commercial establishments."
    },
  ];

  const workforceStrengths = [
    "Large pool of ready-to-deploy manpower for immediate placement.",
    "Skilled, semi-skilled, and unskilled workforce available across all roles.",
    "Staff trained in discipline, workplace safety, and responsibility.",
    "Experienced in handling bulk and emergency manpower requirements.",
    "Local network enables faster deployment than out-of-region agencies.",
  ];

  const qualityPoints = [
    "All workers follow basic safety and hygiene standards for industrial and lab environments.",
    "Regular performance reviews and feedback loops for continuous improvement.",
    "Focused on reliability and building long-term client relationships.",
    "Suitable for pharma, industrial, commercial, and institutional environments.",
  ];

  const clientApproach = [
    { icon: Target, title: "Understand Requirements", desc: "We begin by deeply understanding your specific staffing needs and operational context." },
    { icon: Users, title: "Source Right Candidates", desc: "We match candidates from our pre-vetted pool based on role, location, and skill level." },
    { icon: Zap, title: "Deploy Efficiently", desc: "Staff is deployed quickly with proper briefing on your workplace expectations." },
    { icon: Handshake, title: "Continued Support", desc: "We provide ongoing support, replacements, and regular check-ins even after deployment." },
  ];

  const growthStats = [
    { number: "200+", label: "Client Companies" },
    { number: "100+", label: "Workers Deployed" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "3", label: "Industrial Zones" },
  ];

  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <Helmet>
        <title>About Us | S S Facility Services</title>
        <meta name="description" content="Learn about S S Facility Services, founded by Thatikonda Suresh Goud. Providing expert manpower solutions and facility management across Telangana's industrial zones." />
        <link rel="canonical" href="https://ssfacilityservice.com/about" />
      </Helmet>
      {/* === HERO SECTION WITH BACKGROUND === */}
      <section className="relative mb-24 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about_bg.png"
            alt="Professional team background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 underline decoration-highlight decoration-4 underline-offset-8">
                About Our Company
              </h2>
              <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                Leading the Way in <span className="text-gradient">Facility Excellence.</span>
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-4 border-l-4 border-highlight pl-5 py-1">
                <strong>S S FACILITY SERVICES</strong> is a trusted third-party manpower service provider delivering skilled and semi-skilled workforce across multiple industries.
              </p>
              <p className="text-accent text-base leading-relaxed mb-4">
                With a strong presence in key industrial regions, we help businesses focus on growth while we handle their staffing needs with speed, reliability, and professionalism.
              </p>
              <p className="text-accent text-base leading-relaxed">
                Founded by <strong className="text-white">Thatikonda Suresh Goud</strong>, our company bridges the gap between right talent and right opportunity — ensuring every facility operates at its best.
              </p>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden border border-secondary/20 shadow-2xl relative z-10">
                <img
                  src={settings.founder_image_url || "/images/founder_high_res.png"}
                  alt="Founder and Vision"
                  className="w-full h-[600px] object-cover transition-all duration-700"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-highlight/20">
                <Trophy className="h-10 w-10 text-white mb-4" />
                <p className="text-white font-bold text-xl uppercase tracking-tighter">Certified Staffing</p>
                <p className="text-white/70 text-xs">Quality Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
            {growthStats.map((stat, idx) => (
              <div key={idx} className="text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <p className="text-4xl font-extrabold text-white mb-1">{stat.number}</p>
                <p className="text-accent/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === MISSION, VISION, VALUES === */}
      <section className="bg-secondary/5 py-24 border-y border-secondary/10 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Mission */}
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
              <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
                <Target className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Our Mission</h4>
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
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="200">
              <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
                <Eye className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Our Vision</h4>
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
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="300">
              <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Our Core Values</h4>
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
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Our Advantage</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Why <span className="text-gradient">Choose Us?</span></h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="glass p-7 rounded-2xl border border-white/10 hover:border-highlight/40 transition-all group text-center"
              data-aos="zoom-in"
              data-aos-delay={idx * 70}
            >
              <div className="bg-highlight/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 text-highlight group-hover:bg-highlight/20 transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
              <p className="text-accent/70 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === LOCAL PRESENCE === */}
      <section className="py-20 bg-secondary/5 border-y border-secondary/10 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">On the Ground</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Our Strong <span className="text-gradient">Local Presence</span></h3>
            <p className="text-accent/70 mt-4 max-w-2xl mx-auto text-sm">Our local network helps us deliver faster and better than out-of-region competitors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localZones.map((zone, idx) => (
              <div
                key={idx}
                className={`glass rounded-3xl border ${zone.border} p-8 hover:scale-[1.02] transition-all duration-300`}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className={`${zone.bg} h-14 w-14 rounded-2xl flex items-center justify-center mb-6 ${zone.color} border ${zone.border}`}>
                  <zone.icon className="h-7 w-7" />
                </div>
                <h4 className={`text-xl font-extrabold mb-3 ${zone.color}`}>{zone.name}</h4>
                <p className="text-accent/80 text-sm leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WORKFORCE STRENGTH + QUALITY === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Workforce Strength */}
          <div className="glass rounded-3xl border border-secondary/20 p-10" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-highlight/10 p-3 rounded-2xl text-highlight">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Workforce Strength</h3>
            </div>
            <ul className="space-y-4">
              {workforceStrengths.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-accent text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-highlight flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality & Safety */}
          <div className="glass rounded-3xl border border-secondary/20 p-10" data-aos="fade-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-highlight/10 p-3 rounded-2xl text-highlight">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Commitment to Quality</h3>
            </div>
            <ul className="space-y-4">
              {qualityPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-accent text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-highlight flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-highlight/10 rounded-2xl border border-highlight/20">
              <p className="text-white font-bold text-sm mb-1">Growth & Scale</p>
              <p className="text-accent/80 text-xs leading-relaxed">
                Rapidly growing across Telangana's industrial zones. Trusted by multiple businesses for consistent and dependable workforce supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CLIENT-CENTRIC APPROACH === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Our <span className="text-gradient">Client-First Approach</span></h3>
          <p className="text-accent/70 mt-4 max-w-2xl mx-auto text-sm">We focus on long-term partnerships rather than one-time services. Continued support even after deployment is our standard.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientApproach.map((step, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl border border-white/10 hover:border-highlight/40 p-8 text-center group transition-all"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative mb-6">
                <div className="bg-highlight/10 h-14 w-14 rounded-full flex items-center justify-center mx-auto text-highlight group-hover:bg-highlight/20 transition-colors">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-2 -right-2 bg-highlight text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center mx-auto">
                  {idx + 1}
                </span>
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
              <p className="text-accent/70 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === FOUNDER SECTION === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass p-12 rounded-[3rem] border border-secondary/20 relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">MEET OUR FOUNDER</h3>
            
            <div className="w-56 h-56 rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src={settings.founder_image_url || "https://images.unsplash.com/photo-1600880212340-02d956ea36d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} 
                alt="Managing Director" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            <div className="w-24 h-1 bg-highlight rounded-full"></div>
            <p className="text-accent text-xl italic font-serif max-w-3xl leading-relaxed">
              "Our goal is not just to provide workers, but to provide specialists who take pride in their work. We believe that a clean and well-managed facility is the cornerstone of any successful business."
            </p>
            <div>
              <p className="text-white font-bold text-2xl uppercase tracking-widest">THATIKONDA SURESH GOUD</p>
              <p className="text-highlight text-sm font-bold uppercase tracking-[0.2em] mt-2">Managing Director</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="tel:8897230178" className="flex items-center gap-2 text-white bg-secondary/20 px-6 py-3 rounded-full hover:bg-secondary transition-all text-sm font-bold">
                <Phone className="h-4 w-4" /> 8897230178
              </a>
              <a href="mailto:goudsuresh540@gmail.com" className="flex items-center gap-2 text-white bg-secondary/20 px-6 py-3 rounded-full hover:bg-secondary transition-all text-sm font-bold">
                <Mail className="h-4 w-4" /> goudsuresh540@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="bg-gradient-to-r from-highlight/20 to-secondary/10 py-20 border-y border-highlight/20" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
            Looking for reliable manpower <br className="hidden md:block" />for your business?
          </h3>
          <p className="text-accent text-lg mb-10 max-w-2xl mx-auto">
            Get in touch today and let us design the precise staffing solution your operations need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/hire-talent" className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-black transition-all shadow-lg shadow-highlight/30">
              Request Staff Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
