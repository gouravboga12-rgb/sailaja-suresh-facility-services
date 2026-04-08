import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import { 
  Users, Home as HomeIcon, UserCheck, Coffee, Package, Wifi, Camera, Zap, Fan, 
  Building2, Laptop2, HeartPulse, Factory, Warehouse, Trophy, ShieldCheck, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const topServices = [
    {
      icon: Users,
      image: "/images/housekeeping.png",
      title: "Housekeeping",
      shortDesc: "Professional boys and ladies for immaculate facility maintenance.",
      longDesc: "Our housekeeping staff is trained in modern cleaning techniques, safety protocols, and guest relations to ensure your facility remains pristine and professional at all times."
    },
    {
      icon: UserCheck,
      image: "/images/production.png",
      title: "Production Staff",
      shortDesc: "Skilled manpower for manufacturing and production lines.",
      longDesc: "We provide experienced production assistants who understand factory workflows, safety requirements, and quality control measures to keep your operations running smoothly."
    },
    {
      icon: Coffee,
      image: "/images/pantry.png",
      title: "Pantry Boys",
      shortDesc: "Dedicated staff for corporate pantry and refreshments.",
      longDesc: "Professional pantry staff trained in hygiene, food handling, and corporate etiquette to manage your office refreshments and hospitality needs."
    }
  ];

  const industries = [
    { icon: Factory, title: "Manufacturing", desc: "Specialized staffing for production lines and factory operations." },
    { icon: HeartPulse, title: "Healthcare", desc: "Hygiene-focused housekeeping for hospitals and clinics." },
    { icon: Building2, title: "Corporate Offices", desc: "Pantry and maintenance staff for modern business hubs." },
    { icon: Laptop2, title: "Telecom", desc: "Technical support and BSNL WiFi connection services." },
    { icon: Warehouse, title: "Warehousing", desc: "Packing and loading manpower for logistics centers." }
  ];

  return (
    <div className="bg-black">
      <Hero />

      {/* Services Section */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4 underline decoration-highlight decoration-2 underline-offset-8">
              What We Offer
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">
              Comprehensive <span className="text-gradient">Facility Solutions</span>
            </h3>
          </div>
          <Link to="/services" className="text-highlight font-bold flex items-center hover:underline group" data-aos="fade-left">
            View All Services <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary/5 border-y border-secondary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Our Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Why Choose Sailaja Suresh?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center space-y-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-highlight/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto text-highlight mb-4">
                <Trophy className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Experienced Leadership</h4>
              <p className="text-accent text-sm leading-relaxed">Guided by Thatikonda Suresh Goud, we bring years of industry expertise to every client engagement.</p>
            </div>
            
            <div className="p-8 text-center space-y-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-highlight/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto text-highlight mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Vetted Professionals</h4>
              <p className="text-accent text-sm leading-relaxed">Every staff member undergoes rigorous background checks and professional training before deployment.</p>
            </div>

            <div className="p-8 text-center space-y-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-highlight/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto text-highlight mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-white">24/7 Responsiveness</h4>
              <p className="text-accent text-sm leading-relaxed">Our support team is always available to handle emergencies and sudden manpower requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Market Focus</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Industries We Serve</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, index) => (
            <IndustryCard key={index} icon={ind.icon} title={ind.title} description={ind.desc} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-aos="zoom-in">
        <div className="bg-gradient-to-r from-secondary to-highlight rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
            Ready to enhance your facility operations?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join hundreds of businesses that trust Sailaja Suresh Facility Services for their staffing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/hire-talent" className="bg-white text-secondary hover:bg-black hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl">
              HIRE TALENT NOW
            </Link>
            <Link to="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
