import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import * as LucideIcons from 'lucide-react';
import { 
  Users, Home, UserCheck, Coffee, Package, Wifi, Camera, Zap, Fan, 
  Search, ShieldCheck, HeartPulse, Loader2, Briefcase
} from 'lucide-react';
import { getServices } from '../api';
import { defaultServices } from '../data/defaultData';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServices();
        if (res.data && res.data.length > 0) {
           setServices(res.data);
        } else {
           setServices(defaultServices);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="bg-black pt-32 pb-24">
      <Helmet>
        <title>Our Services | S S Facility Services</title>
        <meta name="description" content="Explore our wide range of professional services: Housekeeping, Industrial Manpower, Pantry Staff, Lab Assistants, HVAC Maintenance, and more." />
        <link rel="canonical" href="https://www.ssfacilityservices.in/services" />
      </Helmet>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 className="text-secondary font-bold tracking-[0.4em] uppercase mb-4" data-aos="fade-up">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-7xl font-extrabold text-white mb-8" data-aos="fade-up" data-aos-delay="100">
          Professional <span className="text-gradient">Service Catalog</span>
        </h3>
        <p className="text-accent text-lg max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          We provide a wide range of facility and staffing solutions tailored to meet the dynamic needs of modern businesses, factories, and commercial spaces.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-80 bg-white/5 rounded-[2.5rem] animate-pulse border border-white/10"></div>
            ))
          ) : (
            services.map((service, index) => {
              const IconComp = LucideIcons[service.icon_name] || LucideIcons.Briefcase;
              return (
                <ServiceCard 
                  key={service.id || index} 
                  {...service} 
                  icon={IconComp}
                  shortDesc={service.short_desc}
                  longDesc={service.long_desc}
                  image={service.image_url}
                  images={service.image_urls}
                />
              );
            })
          )}
        </div>
        {!loading && services.length === 0 && (
          <div className="text-center py-32 glass rounded-[3rem] border border-dashed border-white/10">
            <Briefcase className="h-16 w-16 text-accent/10 mx-auto mb-6" />
            <p className="text-accent/40 font-black uppercase tracking-[0.2em]">Our service catalog is currently expanding. Please check back later.</p>
          </div>
        )}
      </section>


      {/* Quality Commitment Bar */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 bg-secondary/10 rounded-3xl border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="h-16 w-16 bg-highlight rounded-2xl flex items-center justify-center text-white shadow-lg shadow-highlight/20">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <div>
              <p className="text-white font-bold text-xl uppercase tracking-wider">Quality Guaranteed</p>
              <p className="text-accent text-sm">We ensure 100% staff reliability and service excellence.</p>
            </div>
          </div>
          <a href="https://wa.me/918897230178" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            DISCUSS REQUIREMENTS
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
