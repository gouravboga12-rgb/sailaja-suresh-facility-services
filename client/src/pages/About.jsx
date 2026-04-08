import React from 'react';
import { Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black pt-32 pb-24">
      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 underline decoration-highlight decoration-4 underline-offset-8">
              About Our Company
            </h2>
            <h3 className="text-3xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Leading the Way in <span className="text-gradient">Facility Excellence.</span>
            </h3>
            <p className="text-accent text-lg leading-relaxed mb-6">
              <strong>Sailaja Suresh Facility Services</strong> is a trusted staffing and facility management company dedicated to providing reliable and skilled manpower solutions. We support businesses by delivering efficient workforce services tailored to meet operational needs across multiple industries.
            </p>
            <p className="text-accent text-lg leading-relaxed">
              Our focus is on quality, consistency, and building long-term client relationships. Founded by <strong>Thatikonda Suresh Goud</strong>, we bridge the gap between talent and industry to ensure every facility operates at its best.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="rounded-3xl overflow-hidden border border-secondary/20 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600880212340-02d956ea36d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Founder and Vision" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-highlight/20">
              <Award className="h-10 w-10 text-white mb-4" />
              <p className="text-white font-bold text-xl uppercase tracking-tighter">Certified Staffing</p>
              <p className="text-white/70 text-xs">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-secondary/5 py-24 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
                <Eye className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Our Vision</h4>
              <p className="text-accent leading-relaxed text-sm">
                To become a leading and trusted name in the staffing and facility services industry by consistently delivering reliable workforce solutions and expanding our reach across various sectors.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
                <Target className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Our Mission</h4>
              <p className="text-accent leading-relaxed text-sm">
                To deliver dependable and high-quality staffing services that help organizations improve productivity and efficiency. We aim to provide the right people for the right job.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
              <div className="h-16 w-16 bg-highlight/10 rounded-2xl flex items-center justify-center text-highlight">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Our Core Values</h4>
              <ul className="space-y-3">
                {[
                  { title: 'Integrity', desc: 'Honesty and transparency' }, 
                  { title: 'Reliability', desc: 'Delivering what we promise' }, 
                  { title: 'Quality', desc: 'Trained, skilled manpower' }, 
                  { title: 'Customer Focus', desc: 'Prioritizing client needs' }, 
                  { title: 'Professionalism', desc: 'High work standards' }
                ].map((val) => (
                  <li key={val.title} className="flex items-start text-accent text-sm">
                    <CheckCircle2 className="h-4 w-4 text-highlight mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">{val.title}:</strong> {val.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New Expertise and Approach Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/30 transition-all group" data-aos="fade-up">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-highlight transition-colors flex items-center"><span className="text-2xl mr-3">🛠️</span> What We Do</h4>
              <p className="text-accent text-sm leading-relaxed">
                We provide a wide range of staffing and facility services, including housekeeping, production support, lab assistance, pantry services, packing workforce, and technical support like CCTV, WiFi, and HVAC setup.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/30 transition-all group" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-highlight transition-colors flex items-center"><span className="text-2xl mr-3">🏭</span> Industries We Serve</h4>
              <p className="text-accent text-sm leading-relaxed">
                Catering to manufacturing units, corporate offices, hospitals and laboratories, warehouses, logistics companies, and telecom sectors with our flexible staffing solutions for specific industry needs.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/30 transition-all group" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-highlight transition-colors flex items-center"><span className="text-2xl mr-3">🚀</span> Why Choose Us</h4>
              <p className="text-accent text-sm leading-relaxed">
                We stand out by offering skilled manpower, quick deployment, flexible staffing solutions, and cost-effective services. Ensuring dependable support and uncompromised quality always.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/30 transition-all group" data-aos="fade-up">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-highlight transition-colors flex items-center"><span className="text-2xl mr-3">⚡</span> Our Strengths</h4>
              <p className="text-accent text-sm leading-relaxed">
                Our strength lies in our trained workforce, fast response time, customized staffing solutions, and intense focus on client satisfaction. We monitor our staff for continuous excellence.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/30 transition-all group" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-highlight transition-colors flex items-center"><span className="text-2xl mr-3">🔄</span> Our Work Process</h4>
              <p className="text-accent text-sm leading-relaxed">
                Following a highly effective progression: understanding client requirements, sourcing suitable candidates, deploying efficiently, and giving continued operational support.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/30 transition-all group" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-highlight transition-colors flex items-center"><span className="text-2xl mr-3">🤝</span> Our Commitment</h4>
              <p className="text-accent text-sm leading-relaxed">
                We are fiercely committed to delivering consistent services, guaranteeing client satisfaction, and evolving short-term contracts into long-term bonds through trust and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-highlight/20 to-secondary/10 py-20 border-y border-highlight/20" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">Looking for reliable manpower <br className="hidden md:block"/>for your business?</h3>
          <p className="text-accent text-lg mb-10 max-w-2xl mx-auto">Get in touch with us today and let us help you with the precise staffing solutions for your success.</p>
          <a href="/contact" className="inline-block bg-highlight text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-black transition-all shadow-lg shadow-highlight/30 border border-highlight/50">
            Get In Touch Today
          </a>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="glass p-12 rounded-[3rem] border border-secondary/20 relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">MEET OUR FOUNDER</h3>
            <div className="w-24 h-1 bg-highlight rounded-full"></div>
            <p className="text-accent text-xl italic font-serif max-w-3xl leading-relaxed">
              "Our goal is not just to provide workers, but to provide specialists who take pride in their work. We believe that a clean and well-managed facility is the cornerstone of any successful business."
            </p>
            <div>
              <p className="text-white font-bold text-2xl uppercase tracking-widest">THATIKONDA SURESH GOUD</p>
              <p className="text-highlight text-sm font-bold uppercase tracking-[0.2em] mt-2">Managing Director</p>
            </div>
            {/* Contact details */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a href="tel:8897230178" className="text-white bg-secondary/20 px-6 py-3 rounded-full hover:bg-secondary transition-all text-sm font-bold">8897230178</a>
              <a href="mailto:goudsuresh540@gmail.com" className="text-white bg-secondary/20 px-6 py-3 rounded-full hover:bg-secondary transition-all text-sm font-bold">goudsuresh540@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
