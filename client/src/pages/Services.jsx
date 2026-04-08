import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { 
  Users, Home, UserCheck, Coffee, Package, Wifi, Camera, Zap, Fan, 
  Search, ShieldCheck, HeartPulse
} from 'lucide-react';

// Service Images
import housekeepingImg from '../assets/services/housekeeping.png';
import productionImg from '../assets/services/production_boys.png';
import labImg from '../assets/services/lab_boys.png';
import pantryImg from '../assets/services/pantry_boy.png';
import packingImg from '../assets/services/packing_staff.png';
import wifiImg from '../assets/services/bsnl_wifi.png';

const Services = () => {
  const servicesList = [
    {
      icon: Users,
      image: housekeepingImg,
      title: "Housekeeping",
      shortDesc: "Trained housekeeping boys and ladies for facility maintenance.",
      longDesc: "Complete sanitation, floor care, washroom hygiene, and waste management. We use eco-friendly chemicals and modern machinery to maintain high standards of cleanliness."
    },
    {
      icon: UserCheck,
      image: productionImg,
      title: "Production Boys",
      shortDesc: "Skilled manpower for assembly lines and factory floors.",
      longDesc: "Staff trained in industrial safety, machine operations assistance, and production line efficiency. We ensure our staff adheres to your specific SOPs."
    },
    {
      icon: Search,
      image: labImg,
      title: "Lab Boys",
      shortDesc: "Support staff for laboratory and technical testing areas.",
      longDesc: "Assisting technicians in material handling, equipment cleaning, and sample management with strict adherence to safety and hygiene protocols."
    },
    {
      icon: Coffee,
      image: pantryImg,
      title: "Pantry Boy",
      shortDesc: "Professional staff for office refreshments and hospitality.",
      longDesc: "Managing beverage machines, serving tea/coffee, maintaining pantry hygiene, and assisting in corporate lunch arrangements."
    },
    {
      icon: Package,
      image: packingImg,
      title: "Packing Staff",
      shortDesc: "Efficient ladies and boys for packaging and labeling.",
      longDesc: "Meticulous staff for assembly, bubble wrapping, manual labeling, and carton packing for logistics and manufacturing units."
    },
    {
      icon: Wifi,
      image: wifiImg,
      title: "BSNL Wifi",
      shortDesc: "Professional installation of BSNL high-speed internet.",
      longDesc: "Fiber-to-the-home (FTTH) connections, campus-wide WiFi setup, and high-speed broadband solutions for offices and residential complexes."
    },
    {
      icon: Camera,
      image: "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "CCTV Fittings",
      shortDesc: "End-to-end security camera installation and maintenance.",
      longDesc: "Surveillance planning, wiring, camera mounting, and NVR/DVR setup for factories, offices, and residential properties."
    },
    {
      icon: Zap,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      title: "Electricians & Filters",
      shortDesc: "Skilled technicians for electrical and plumbing maintenance.",
      longDesc: "Preventive maintenance, wiring repairs, fixture installations, and specialized filter cleaning for industrial and commercial water systems."
    },
    {
      icon: Fan,
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "HVAC Operator",
      shortDesc: "Specialized staff for air conditioning and ventilation systems.",
      longDesc: "AHU maintenance, chiller plant operation, temperature monitoring, and scheduled servicing of central air conditioning units."
    }
  ];

  return (
    <div className="bg-black pt-32 pb-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
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
