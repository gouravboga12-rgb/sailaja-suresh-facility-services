import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
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
            window.location.href = whatsappUrl; // Secondary fallback
        }

        setLoading(false);
        setSubmitted(true);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const contactDetails = [
        {
            icon: Phone,
            title: "Phone Number",
            value: "+91 8897230178",
            link: "tel:8897230178",
            desc: "Mon-Sat from 9am to 6pm."
        },
        {
            icon: Mail,
            title: "Email Address",
            value: "goudsuresh540@gmail.com",
            link: "mailto:goudsuresh540@gmail.com",
            desc: "Our support team will reply within 24h."
        },
        {
            icon: MessageSquare,
            title: "WhatsApp Chat",
            value: "Chat with Us",
            link: "https://wa.me/918897230178",
            desc: "Instant support for urgent needs."
        },
        {
            icon: Clock,
            title: "Working Hours",
            value: "24/7 Operations",
            link: "#",
            desc: "For existing facility contracts."
        }
    ];

    if (submitted) {
        return (
            <div className="bg-black min-h-screen pt-32 flex items-center justify-center px-4">
                <div className="glass p-12 rounded-[3rem] max-w-2xl w-full text-center border border-secondary/20 shadow-2xl" data-aos="zoom-in">
                    <div className="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Message Sent!</h2>
                    <p className="text-accent text-lg mb-10 leading-relaxed">
                        We've received your message. Our team will get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="bg-secondary hover:bg-highlight text-white px-10 py-4 rounded-full font-bold transition-all"
                    >
                        SEND ANOTHER MESSAGE
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black pt-32 pb-24 min-h-screen">
            <Helmet>
                <title>Contact Us | S S Facility Services</title>
                <meta name="description" content="Get in touch with S S Facility Services for staffing quotes, service inquiries, or technical support. We are available 24/7 for facility contracts." />
                <link rel="canonical" href="https://ssfacilityservice.com/contact" />
            </Helmet>
            {/* === HERO SECTION WITH BACKGROUND === */}
            <section className="relative mb-24 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact_bg.png"
                        alt="Professional contact background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-secondary font-bold tracking-[0.4em] uppercase mb-4" data-aos="fade-up">
                        Get in Touch
                    </h2>
                    <h3 className="text-4xl md:text-7xl font-extrabold text-white mb-8" data-aos="fade-up" data-aos-delay="100">
                        Contact <span className="text-gradient">Information</span>
                    </h3>
                    <p className="text-accent text-lg max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Have questions about our services or need a customized staffing quote? Reach out to us through any of the channels below.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
                        {contactDetails.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.link}
                                className="block glass p-8 rounded-3xl border border-secondary/10 hover:border-highlight/40 transition-all hover:-translate-y-1 group"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="h-12 w-12 bg-secondary/20 rounded-xl flex items-center justify-center text-highlight group-hover:bg-highlight group-hover:text-white transition-all scale-110">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</p>
                                        <p className="text-white text-lg font-bold truncate max-w-[180px] md:max-w-none">{item.value}</p>
                                        <p className="text-accent text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2" data-aos="fade-left">
                        <div className="glass p-8 md:p-12 rounded-[3.5rem] border border-secondary/20 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-[100px]"></div>
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>
                            
                            <h4 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center">
                                <Send className="mr-3 text-secondary" /> Submit an Inquiry
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
                                        rows="6" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you today?" 
                                        className="w-full bg-black/40 border border-secondary/20 rounded-2xl p-5 text-white focus:border-highlight outline-none transition-all placeholder:text-accent/30 resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    disabled={loading}
                                    type="submit" 
                                    className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center space-x-3 transition-all ${loading ? 'bg-secondary/50 cursor-not-allowed' : 'bg-secondary hover:bg-highlight shadow-2xl shadow-secondary/30 hover:scale-[1.01]'}`}
                                >
                                    {loading ? (
                                        <span className="animate-pulse tracking-widest uppercase">Transmitting...</span>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            <span className="tracking-widest uppercase">Dispatch Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
