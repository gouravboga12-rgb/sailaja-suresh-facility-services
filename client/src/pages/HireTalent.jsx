import React, { useState } from 'react';
import { Send, Users, Building, Phone, Briefcase, MapPin, MessageSquare, CheckCircle } from 'lucide-react';

const HireTalent = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="bg-black min-h-screen pt-32 flex items-center justify-center px-4">
                <div className="glass p-12 rounded-[3rem] max-w-2xl w-full text-center border border-secondary/20 shadow-2xl" data-aos="zoom-in">
                    <div className="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Request Received!</h2>
                    <p className="text-accent text-lg mb-10 leading-relaxed">
                        Thank you for reaching out to **Sailaja Suresh Facility Services**. Our talent acquisition team will review your requirements and contact you within the next 24 hours.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="bg-secondary hover:bg-highlight text-white px-10 py-4 rounded-full font-bold transition-all"
                    >
                        SUBMIT ANOTHER REQUEST
                    </button>
                    <div className="mt-8 pt-8 border-t border-secondary/10">
                        <p className="text-accent text-sm">Need immediate assistance?</p>
                        <a href="https://wa.me/918897230178" className="text-highlight font-bold hover:underline">Chat with us on WhatsApp</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black pt-32 pb-24 min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-secondary font-bold tracking-[0.4em] uppercase mb-4" data-aos="fade-up">
                    Staffing Solution
                </h2>
                <h3 className="text-4xl md:text-7xl font-extrabold text-white mb-8" data-aos="fade-up" data-aos-delay="100">
                    Hire <span className="text-gradient">Top Talent</span>
                </h3>
                <p className="text-accent text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Looking for reliable manpower? Fill out the form below to request staff for your facility. We'll match you with the best professionals in the industry.
                </p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form Side */}
                    <div className="lg:col-span-2" data-aos="fade-right">
                        <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] border border-secondary/20 shadow-2xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Company Name */}
                                <div className="space-y-2">
                                    <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Company Name</label>
                                    <div className="relative">
                                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="e.g. Acme Corp" 
                                            className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                {/* Contact Person */}
                                <div className="space-y-2">
                                    <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Contact Person</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="Your Name" 
                                            className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone Number */}
                                <div className="space-y-2">
                                    <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                                        <input 
                                            required
                                            type="tel" 
                                            placeholder="8897230178" 
                                            className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                {/* Service Required */}
                                <div className="space-y-2">
                                    <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Service Required</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                                        <select 
                                            required
                                            className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all appearance-none"
                                        >
                                            <option value="" disabled selected>Select Service</option>
                                            <option value="housekeeping">Housekeeping</option>
                                            <option value="production">Production Boys</option>
                                            <option value="pantry">Pantry Boys</option>
                                            <option value="packing">Packing/Assembly</option>
                                            <option value="technical">Technical/Electrical</option>
                                            <option value="other">Other Services</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Staff Count */}
                                <div className="space-y-2">
                                    <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Number of Staff</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                                        <input 
                                            required
                                            type="number" 
                                            placeholder="e.g. 5" 
                                            className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="space-y-2">
                                    <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="e.g. Hyderabad" 
                                            className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-white text-xs font-bold uppercase tracking-wider ml-1">Additional Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-secondary" />
                                    <textarea 
                                        rows="4"
                                        placeholder="Describe your specific requirements..." 
                                        className="w-full bg-black/50 border border-secondary/20 rounded-xl py-4 pl-12 pr-4 text-white focus:border-highlight outline-none transition-all"
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                disabled={loading}
                                type="submit" 
                                className={`w-full py-5 rounded-xl font-bold text-white flex items-center justify-center space-x-3 transition-all ${loading ? 'bg-secondary/50 cursor-not-allowed' : 'bg-secondary hover:bg-highlight shadow-xl shadow-secondary/20 hover:scale-[1.02]'}`}
                            >
                                {loading ? (
                                    <span className="animate-pulse">PROCESSING...</span>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        <span>SUBMIT RECRUITMENT REQUEST</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="space-y-8" data-aos="fade-left">
                        <div className="glass p-8 rounded-[2rem] border border-secondary/20">
                            <h4 className="text-xl font-bold text-white mb-4">Why Partner With Us?</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="h-8 w-8 bg-highlight/10 rounded-lg flex items-center justify-center text-highlight shrink-0 mr-4">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Quick Deployment</p>
                                        <p className="text-accent text-xs">Staff ready to start within 48 hours.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-8 w-8 bg-highlight/10 rounded-lg flex items-center justify-center text-highlight shrink-0 mr-4">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Vetted Talent</p>
                                        <p className="text-accent text-xs">Background-checked and trained staff.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-8 w-8 bg-highlight/10 rounded-lg flex items-center justify-center text-highlight shrink-0 mr-4">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Replacement Policy</p>
                                        <p className="text-accent text-xs">Hassle-free replacement if not satisfied.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-secondary p-8 rounded-[2rem] text-center shadow-2xl">
                             <p className="text-white font-bold text-lg mb-2">Need Help Deciding?</p>
                             <p className="text-white/70 text-sm mb-6">Our experts can help you calculate the exact number of staff needed for your facility.</p>
                             <a href="tel:8897230178" className="inline-block bg-white text-secondary px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all">
                                 CALL ADVISOR
                             </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireTalent;
