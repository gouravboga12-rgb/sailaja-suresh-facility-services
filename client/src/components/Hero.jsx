import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* Full-width Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/hero_bg.png" 
                    alt="Corporate background" 
                    className="w-full h-full object-cover opacity-60 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-secondary/30 text-highlight border border-white/10 rounded-full backdrop-blur-sm">
                                Premium Staffing Solutions
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] lg:leading-[1.05]">
                                Empowering <br className="lg:hidden" />
                                <span className="text-white">Businesses with</span> <br />
                                <span className="text-gradient">Professional Talent.</span>
                            </h1>
                        </div>
                        
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed font-medium border-l-4 border-highlight pl-6 py-2" data-aos="fade-up" data-aos-delay="300">
                            <span className="text-white font-bold">S S Facility Services</span> provides top-tier manpower specialized in <span className="text-highlight font-bold">housekeeping</span>, <span className="text-highlight font-bold">production</span>, and <span className="text-highlight font-bold">technical facility management</span>.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link 
                                to="/hire-talent" 
                                className="group flex items-center justify-center space-x-2 bg-highlight hover:bg-secondary text-white px-10 py-5 rounded-full font-extrabold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/20"
                            >
                                <Users className="h-5 w-5" />
                                <span>HIRE TALENT</span>
                                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            
                            <a 
                                href="https://wa.me/918897230178"
                                className="flex items-center justify-center space-x-2 glass border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-md"
                            >
                                <MessageSquare className="h-5 w-5 text-green-400" />
                                <span>WHATSAPP US</span>
                            </a>
                        </div>

                        {/* Stats/Proof */}
                        <div className="flex items-center space-x-6 sm:space-x-10 pt-10 border-t border-white/10 translate-y-4">
                            <div className="group cursor-default min-w-fit">
                                <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-highlight transition-colors">100%</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/60">Reliability</p>
                            </div>
                            <div className="h-10 w-[1px] bg-white/10"></div>
                            <div className="group cursor-default min-w-fit">
                                <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-highlight transition-colors">24/7</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/60">Support</p>
                            </div>
                            <div className="h-10 w-[1px] bg-white/10"></div>
                            <div className="group cursor-default min-w-fit">
                                <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-highlight transition-colors">Expert</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/60">Staff</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Area with Glass Card */}
                    <div className="relative hidden lg:block" data-aos="fade-left">
                        <div className="glass p-1 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                             <div className="relative rounded-[2.3rem] overflow-hidden group">
                                <img 
                                    src="/images/housekeeping.png" 
                                    alt="Professional Excellence" 
                                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                             </div>
                        </div>
                        
                        {/* Floating Glass Card */}
                        <div className="absolute -bottom-10 -left-10 glass-dark p-8 rounded-3xl shadow-2xl z-20 max-w-[280px] backdrop-blur-xl border border-white/10" data-aos="fade-up" data-aos-delay="400">
                             <div className="flex items-center space-x-3 mb-4">
                                 <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                                 <p className="text-white text-xs font-black uppercase tracking-[0.2em]">Live Support</p>
                             </div>
                             <p className="text-accent text-sm leading-relaxed">Our dedicated team is ready to deploy skilled staff for your facility requirements immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
