import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, CheckCircle2, Zap, Users, FlaskConical, Factory,
  Building2, Package, Shield, Wrench, Wind, Clock, TrendingUp,
  Star, Coffee, UserCheck, ArrowRight, Phone, Trophy, X, Check, Sparkles
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Locations = () => {

  const hubs = [
    {
      icon: FlaskConical,
      name: "Genome Valley",
      district: "Shamirpet, Secunderabad",
      tag: "Life Sciences & Biotech Hub",
      tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Pharmaceutical laboratory with scientists and research equipment at Genome Valley",
      desc: "A leading life sciences and biotech hub with high demand for lab assistants, housekeeping, and maintenance staff.",
      detail: "We support pharmaceutical companies, research centers, and biotech laboratories with skilled, protocol-trained manpower for precision environments.",
      services: ["Laboratory Technical Assistance", "Premium Facility Housekeeping", "Security & Surveillance (CCTV)", "Electrical & Technical Maintenance"]
    },
    {
      icon: Factory,
      name: "Medchal–Malkajgiri",
      district: "North Hyderabad Region",
      tag: "Industrial & Manufacturing Zone",
      tagColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Industrial factory workers on production line in Medchal-Malkajgiri manufacturing zone",
      desc: "One of the fastest-growing industrial zones with factories, warehouses, and production units needing reliable manpower.",
      detail: "We deploy industrial production support, packing personnel, CCTV technicians, and electrical maintenance teams for factory and logistics operations.",
      services: ["Industrial Production Support", "Packaging & Logistics Personnel", "HVAC Operations & Management", "Electrical & Technical Maintenance"]
    },
    {
      icon: Building2,
      name: "Siddipet District",
      district: "Siddipet, Telangana",
      tag: "Emerging Commercial Hub",
      tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern commercial office and business establishment in Siddipet district",
      desc: "An emerging area with growing infrastructure, businesses, and commercial establishments requiring quality facility services.",
      detail: "We supply housekeeping staff, pantry personnel, and facility support teams for offices, schools, hospitals, and government institutions.",
      services: ["Premium Facility Housekeeping", "Corporate Pantry & Hospitality", "Security & Surveillance (CCTV)", "Industrial Production Support"]
    }
  ];

  const advantages = [
    { icon: Clock, title: "Quick Deployment", desc: "Staff deployed within 24–48 hours for urgent requirements." },
    { icon: MapPin, title: "Locally Available", desc: "Locally rooted workforce reduces delays and travel time." },
    { icon: Shield, title: "Verified & Trained", desc: "Every staff member is background-checked and professionally trained." },
    { icon: TrendingUp, title: "Flexible Engagement", desc: "Daily, monthly, or contract basis — we adapt to your need." },
    { icon: Star, title: "Cost-Effective", desc: "Significant savings compared to maintaining an in-house team." },
  ];

  const availableServices = [
    { icon: Users, name: "Premium Facility Housekeeping" },
    { icon: UserCheck, name: "Industrial Production Support" },
    { icon: FlaskConical, name: "Laboratory Technical Assistance" },
    { icon: Package, name: "Packaging & Logistics Personnel" },
    { icon: Coffee, name: "Corporate Pantry & Hospitality" },
    { icon: Shield, name: "Security & Surveillance (CCTV)" },
    { icon: Zap, name: "Electrical & Technical Maintenance" },
    { icon: Wind, name: "HVAC Operations & Management" },
  ];

  const stats = [
    { number: "200+", label: "Client Companies Served" },
    { number: "100+", label: "Skilled Workers Deployed" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "24–48h", label: "Average Deployment Time" },
  ];

  const trustPoints = [
    "Serving multiple companies across industrial and commercial sectors.",
    "Experienced in handling bulk and emergency manpower requirements.",
    "Committed to quality, punctuality, and professional discipline.",
    "Trusted by businesses for consistent and reliable workforce supply.",
  ];

  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <Helmet>
        <title>Our Locations | S S Facility Services</title>
        <meta name="description" content="S S Facility Services operates in key industrial hubs across Telangana, including Genome Valley, Medchal–Malkajgiri, and Siddipet. Find premium manpower solutions near you." />
        <link rel="canonical" href="https://ssfacilityservice.com/locations" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative mb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/locations_bg.png"
            alt="Industrial operations across Telangana"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-secondary/30 text-highlight border border-white/10 rounded-full backdrop-blur-sm" data-aos="fade-up">
            Where We Operate
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
            Serving Key <span className="text-gradient">Industrial Hubs</span>
          </h1>
          <p className="text-accent text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            We proudly provide reliable and trained manpower services across key industrial and commercial hubs like <span className="text-white font-semibold">Genome Valley</span>, <span className="text-white font-semibold">Medchal–Malkajgiri</span>, and <span className="text-white font-semibold">Siddipet</span>. Our strong local presence ensures fast, efficient, and trusted staffing solutions.
          </p>
        </div>
      </section>

      {/* === HUB HIGHLIGHT CARDS === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Our Primary Zones</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Why These <span className="text-gradient">Locations Matter</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl border border-white/10 hover:border-highlight/50 transition-all duration-500 flex flex-col overflow-hidden group"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {/* Hub Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={hub.image}
                  alt={hub.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border backdrop-blur-sm ${hub.tagColor}`}>
                    {hub.tag}
                  </span>
                </div>
              </div>

              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-highlight/10 p-2 rounded-xl border border-highlight/20 text-highlight">
                    <hub.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-white group-hover:text-highlight transition-colors">{hub.name}</h4>
                    <p className="text-accent/60 text-[10px] font-semibold uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5" /> {hub.district}
                    </p>
                  </div>
                </div>
                <p className="text-accent/80 text-sm leading-relaxed mb-3 font-medium">{hub.desc}</p>
                <p className="text-accent/60 text-xs leading-relaxed italic">{hub.detail}</p>
              </div>

              {/* Services in this hub */}
              <div className="mt-auto p-8 pt-6 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Services Available Here</p>
                <ul className="space-y-2">
                  {hub.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-accent/80 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5 text-highlight flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === IMPACT STATS === */}
      <section className="py-20 bg-gradient-to-r from-secondary/20 via-highlight/10 to-secondary/20 border-y border-white/10 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.number}</p>
                <p className="text-accent/70 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === VISUAL TRUST STRIP === */}
      <section className="mb-24 relative overflow-hidden" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-3xl overflow-hidden">
            <div className="relative h-52 sm:h-72 overflow-hidden group">
              <img
                src="/images/housekeeping_staff.png"
                alt="Professional housekeeping staff cleaning office facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Housekeeping</p>
                <p className="text-white/60 text-xs">Professional & Trained</p>
              </div>
            </div>
            <div className="relative h-52 sm:h-72 overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Factory production workers on manufacturing assembly line"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Production Support</p>
                <p className="text-white/60 text-xs">Industry-Ready Staff</p>
              </div>
            </div>
            <div className="relative h-52 sm:h-72 overflow-hidden group">
              <img
                src="/images/lab_assistant.png"
                alt="Lab technician in white coat working with scientific samples"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Lab Assistance</p>
                <p className="text-white/60 text-xs">Protocol-Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPETITIVE ADVANTAGES === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Our Edge</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">What Makes Us <span className="text-gradient">Different</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 glass rounded-2xl border border-white/10 hover:border-highlight/40 transition-all text-center group"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="bg-highlight/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 text-highlight group-hover:bg-highlight/20 transition-colors">
                <adv.icon className="h-6 w-6" />
              </div>
              <p className="text-white font-bold text-sm mb-2">{adv.title}</p>
              <p className="text-accent/70 text-xs leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === SERVICES AVAILABLE GRID === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Full Service Range</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Services in <span className="text-gradient">These Areas</span></h3>
          <p className="text-accent/70 text-sm mt-4 max-w-2xl mx-auto">All services are available across Genome Valley, Medchal–Malkajgiri, and Siddipet with fast response time.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {availableServices.map((svc, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/10 hover:border-highlight/40 transition-all group"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <div className="bg-highlight/10 p-2.5 rounded-xl text-highlight flex-shrink-0 group-hover:bg-highlight/20 transition-colors">
                <svc.icon className="h-5 w-5" />
              </div>
              <span className="text-white text-xs font-semibold leading-snug">{svc.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === TRUST SECTION === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-3">Reliability First</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Why Businesses <span className="text-gradient">Trust Us</span></h3>
            <ul className="space-y-5">
              {trustPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-highlight/20 p-1 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-highlight" />
                  </div>
                  <span className="text-accent leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl border border-secondary/20 p-10 space-y-6" data-aos="fade-left">
            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 p-3 rounded-2xl border border-green-500/30">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Active Operations</p>
                <p className="text-accent/60 text-xs">Serving clients across Telangana</p>
              </div>
            </div>
            <p className="text-accent text-sm leading-relaxed border-l-4 border-highlight pl-4">
              "Our dedicated local presence means we understand the specific needs of businesses in Genome Valley, Medchal, and Siddipet. We are not just a staffing agency — we are your operations partner."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:8897230178"
                className="flex items-center gap-2 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href="https://wa.me/918897230178"
                className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US AMONG 200+ === */}
      <section className="py-24 bg-secondary/5 border-y border-secondary/10 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] uppercase bg-highlight/20 text-highlight border border-highlight/30 rounded-full">
              The Smart Choice
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Why Choose Us Among{" "}
              <span className="text-gradient">200+ Agencies?</span>
            </h2>
            <p className="text-accent max-w-2xl mx-auto">
              In a market full of options, businesses in Genome Valley, Medchal, and Siddipet consistently return to us — here's exactly why.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto" data-aos="fade-up" data-aos-delay="100">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left text-accent/60 text-xs uppercase tracking-widest font-bold py-4 px-6 border-b border-white/10 w-1/2">What Matters</th>
                  <th className="text-center text-accent/60 text-xs uppercase tracking-widest font-bold py-4 px-6 border-b border-white/10">Other Agencies</th>
                  <th className="text-center text-xs uppercase tracking-widest font-extrabold py-4 px-6 border-b border-highlight/50 bg-highlight/10 rounded-t-2xl">
                    <span className="text-highlight">S S FACILITY SERVICES</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Local Knowledge of Genome Valley & Medchal", false, true],
                  ["Multi-Role Staffing (Lab, HVAC, Housekeeping & More)", false, true],
                  ["Staff Deployed Within 24–48 Hours", false, true],
                  ["Dedicated Supervisor Per Client Location", false, true],
                  ["Vetted, Trained & Discipline-Focused Staff", false, true],
                  ["Flexible Contract (Daily / Monthly / Project)", false, true],
                  ["Direct WhatsApp Support & Response", false, true],
                  ["Transparent Billing & No Hidden Charges", false, true],
                ].map(([feature, others, us], idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white text-sm font-medium">{feature}</td>
                    <td className="py-4 px-6 text-center">
                      {others
                        ? <div className="flex justify-center"><Check className="h-5 w-5 text-green-400" /></div>
                        : <div className="flex justify-center"><X className="h-5 w-5 text-red-400/60" /></div>
                      }
                    </td>
                    <td className="py-4 px-6 text-center bg-highlight/5">
                      <div className="flex justify-center">
                        <div className="bg-highlight/20 p-0.5 rounded-full">
                          <Check className="h-4 w-4 text-highlight" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Unique Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            <div className="glass rounded-3xl border border-highlight/20 p-8 text-center group hover:border-highlight/50 transition-all">
              <div className="bg-highlight/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-5 text-highlight group-hover:bg-highlight/20 transition-colors">
                <Trophy className="h-8 w-8" />
              </div>
              <h4 className="text-white font-extrabold text-xl mb-3">Industry Specialization</h4>
              <p className="text-accent/70 text-sm leading-relaxed">
                Unlike generic agencies, we are deeply specialized in facility management — from pharma clean rooms to factory floors — giving you staff who actually fit the role.
              </p>
            </div>

            <div className="glass rounded-3xl border border-green-500/20 p-8 text-center group hover:border-green-500/40 transition-all">
              <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-5 text-green-400 group-hover:bg-green-500/20 transition-colors">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-white font-extrabold text-xl mb-3">Born & Rooted Locally</h4>
              <p className="text-accent/70 text-sm leading-relaxed">
                We are not an outsider operating remotely. Our team lives and works in this region — meaning faster response, better local understanding, and zero communication lag.
              </p>
            </div>

            <div className="glass rounded-3xl border border-orange-500/20 p-8 text-center group hover:border-orange-500/40 transition-all">
              <div className="bg-orange-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-5 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                <Sparkles className="h-8 w-8" />
              </div>
              <h4 className="text-white font-extrabold text-xl mb-3">Zero Compromise Quality</h4>
              <p className="text-accent/70 text-sm leading-relaxed">
                Every worker we send has undergone background verification, role-specific training, and a conduct assessment. We stake our reputation on every deployment.
              </p>
            </div>
          </div>

          {/* Social Proof Line */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <p className="text-accent/60 text-sm italic">
              "Chosen over competing agencies by leading pharma companies in Genome Valley and manufacturing units in Medchal–Malkajgiri."
            </p>
          </div>

        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
        <div className="bg-gradient-to-r from-secondary to-highlight rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mb-4 relative z-10">Ready to Get Started?</p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
            Looking for Reliable Manpower in <br className="hidden md:block" />Genome Valley or Nearby Areas?
          </h3>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Contact us today for quick staffing solutions tailored to your specific operational needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link
              to="/hire-talent"
              className="flex items-center justify-center gap-2 bg-white text-secondary hover:bg-black hover:text-white px-10 py-5 rounded-full font-extrabold transition-all shadow-xl"
            >
              Request Staff Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
