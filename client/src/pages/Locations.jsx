import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle } from 'lucide-react';

const Locations = () => {
    const locations = [
        "Hyderabad", "Secunderabad", "Gachibowli", "Hitech City", "Madhapur",
        "Kukatpally", "Miyapur", "Sangareddy", "Patancheru", "Cherlapally",
        "Balanagar", "Uppal", "Nacharam", "Pashamylaram"
    ];

    return (
        <div className="bg-black pt-32 pb-24 min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h2 className="text-secondary font-bold tracking-[0.4em] uppercase mb-4" data-aos="fade-up">
                    Service Areas
                </h2>
                <h3 className="text-4xl md:text-7xl font-extrabold text-white mb-8" data-aos="fade-up" data-aos-delay="100">
                    Where We <span className="text-gradient">Operate</span>
                </h3>
                <p className="text-accent text-lg max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    We provide extensive service coverage across major industrial hubs and commercial zones. Check our primary service locations below.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Location List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-right">
                        {locations.map((loc, index) => (
                            <div key={index} className="flex items-center space-x-4 bg-secondary/10 p-5 rounded-2xl border border-secondary/20 hover:border-highlight/50 transition-all hover:translate-x-2">
                                <div className="p-2 bg-highlight/20 rounded-lg text-highlight">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="text-white font-semibold">{loc}</span>
                            </div>
                        ))}
                    </div>

                    {/* Info Card */}
                    <div className="space-y-8" data-aos="fade-left">
                        <div className="glass p-10 rounded-[2.5rem] border border-secondary/20 relative overflow-hidden">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Navigation className="mr-3 text-highlight" /> Service Coverage
                            </h4>
                            <p className="text-accent mb-8 leading-relaxed">
                                Our central operations are based in Telangana, with a primary focus on the Hyderabad metropolitan region and its surrounding industrial belts. We are equipped to deploy staff quickly across these zones.
                            </p>
                            
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-highlight mr-3 shrink-0" />
                                    <span className="text-accent text-sm">Deployment within 24-48 hours in core zones.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-highlight mr-3 shrink-0" />
                                    <span className="text-accent text-sm">Dedicated area supervisors for each location.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-highlight mr-3 shrink-0" />
                                    <span className="text-accent text-sm">Mobile technical maintenance teams available.</span>
                                </li>
                            </ul>

                            <div className="flex flex-col space-y-4">
                                <p className="text-white font-bold text-sm uppercase tracking-widest">Need service elsewhere?</p>
                                <a href="tel:8897230178" className="flex items-center justify-center space-x-3 bg-secondary hover:bg-highlight text-white py-4 rounded-xl font-bold transition-all">
                                    <Phone className="h-5 w-5" />
                                    <span>Inquire for Expansion</span>
                                </a>
                            </div>
                        </div>

                        {/* Interactive Placeholder */}
                        <div className="h-64 bg-secondary/20 rounded-[2.5rem] border border-secondary/20 flex flex-col items-center justify-center text-center p-8">
                             <MapPin className="h-12 w-12 text-secondary mb-4 animate-bounce" />
                             <p className="text-white font-bold text-lg mb-2">Expanding Every Day</p>
                             <p className="text-accent text-sm">We are rapidly adding new locations to our service network.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Locations;
