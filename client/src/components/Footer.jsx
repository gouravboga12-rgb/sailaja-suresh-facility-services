import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black pt-20 pb-10 border-t border-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Branding Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16 pb-16 border-b border-white/5">
                    <div className="max-w-2xl">
                        <Link to="/" className="flex items-center space-x-5 group mb-8">
                            <img src={logo} alt="S S Facility Services Logo" className="h-16 w-auto rounded-xl shadow-2xl transition-transform group-hover:scale-105" />
                            <span className="font-black text-xl md:text-3xl tracking-tighter uppercase leading-tight flex flex-row items-center whitespace-nowrap">
                                <span className="text-brand-green">S S</span>
                                <span className="mx-3 text-white/20 font-thin italic">|</span>
                                <span className="text-white">Facility Services</span>
                            </span>
                        </Link>
                        <p className="text-accent text-base leading-relaxed max-w-xl">
                            Premier staffing and facility management solutions across various industries. We provide professional, reliable, and skilled manpower to meet your dynamic business needs.
                        </p>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-highlight rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                About Us
                            </Link></li>
                            <li><Link to="/services" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Our Services
                            </Link></li>
                            <li><Link to="/industries" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Industries Served
                            </Link></li>
                            <li><Link to="/locations" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Locations
                            </Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Work With Us
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-highlight rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li><Link to="/hire-talent" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Hire Talent
                            </Link></li>
                            <li><Link to="/contact" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Contact Support
                            </Link></li>
                            <li><Link to="/privacy" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Privacy Policy
                            </Link></li>
                            <li><Link to="/terms" className="text-accent hover:text-highlight transition-colors flex items-center group">
                                <span className="h-1 w-0 group-hover:w-3 bg-highlight mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                                Terms of Service
                            </Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-highlight rounded-full"></span>
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group">
                                <div className="h-10 w-10 glass border border-white/5 flex items-center justify-center rounded-xl text-secondary group-hover:text-highlight group-hover:border-highlight/50 transition-all shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-white text-[10px] font-bold mb-1 uppercase tracking-widest opacity-50">Direct Line</p>
                                    <a href="tel:8897230178" className="text-accent hover:text-highlight transition-colors text-sm font-medium tracking-wide">+91 8897230178</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="h-10 w-10 glass border border-white/5 flex items-center justify-center rounded-xl text-secondary group-hover:text-highlight group-hover:border-highlight/50 transition-all shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-white text-[10px] font-bold mb-1 uppercase tracking-widest opacity-50">Email Support</p>
                                    <a href="mailto:goudsuresh540@gmail.com" className="text-accent hover:text-highlight transition-colors text-sm font-medium tracking-wide">goudsuresh540@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="h-10 w-10 glass border border-white/5 flex items-center justify-center rounded-xl text-secondary group-hover:text-highlight group-hover:border-highlight/50 transition-all shrink-0">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-white text-[10px] font-bold mb-1 uppercase tracking-widest opacity-50">Quick Chat</p>
                                    <a href="https://wa.me/918897230178" className="text-accent hover:text-highlight transition-colors text-sm font-medium tracking-wide">Chat on WhatsApp</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                    <div className="space-y-2">
                        <p className="text-accent/60 text-xs">
                            &copy; {currentYear} S S Facility Services. All rights reserved.
                        </p>
                        <p className="text-accent/60 text-[10px] uppercase font-bold tracking-widest leading-loose">
                            Developed by{' '}
                            <a 
                                href="https://www.codtechitsolutions.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-highlight hover:text-white transition-colors underline decoration-highlight/30 underline-offset-4"
                            >
                                CODTECH IT SOLUTIONS
                            </a>
                        </p>
                    </div>
                    <p className="text-accent/40 text-[10px] uppercase tracking-[0.2em]">
                        Founder: Thatikonda Suresh Goud
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
