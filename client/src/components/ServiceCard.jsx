import React, { useState } from 'react';
import { ChevronRight, Plus, Minus, CheckCircle2, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ icon: Icon, image, images = [], title, shortDesc, longDesc, highlights = [] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Combine legacy image and new images array
    const allImages = images.length > 0 ? images : (image ? [image] : []);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <motion.div 
            layout
            className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-highlight/50 transition-all duration-500 flex flex-col min-h-[450px] shadow-lg hover:shadow-highlight/20"
            data-aos="zoom-in"
        >
            {/* Service Image Carousel Section (Instagram Style) */}
            <div className="relative h-64 overflow-hidden bg-black/50 group/carousel">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.img 
                        key={currentIndex}
                        src={allImages[currentIndex]} 
                        alt={`${title} ${currentIndex + 1}`} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full object-cover cursor-grab active:cursor-grabbing touch-pan-y"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.8}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = offset.x;
                            if (swipe < -50) {
                                nextImage(e);
                            } else if (swipe > 50) {
                                prevImage(e);
                            }
                        }}
                    />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                    <>
                        <button 
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 hover:bg-highlight/40"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 hover:bg-highlight/40"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}

                {/* Instagram-style Dot Indicators */}
                {allImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {allImages.map((_, idx) => (
                            <div 
                                key={idx}
                                className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-4 bg-highlight' : 'w-1.5 bg-white/40'}`}
                            />
                        ))}
                    </div>
                )}

                <div className="absolute top-4 left-6 p-2 bg-highlight/20 backdrop-blur-md rounded-xl text-white border border-white/20 z-20">
                    <Icon className="h-6 w-6" />
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-highlight transition-colors leading-tight">
                        {title}
                    </h3>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="h-10 w-10 rounded-full glass border border-white/10 flex items-center justify-center text-accent hover:border-highlight hover:text-highlight transition-all"
                    >
                        {isExpanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </button>
                </div>
                
                <p className="text-accent/80 text-sm leading-relaxed mb-6 flex-grow">
                    {shortDesc}
                </p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 border-t border-white/10 space-y-6">
                                <p className="text-accent/60 text-xs leading-relaxed italic">
                                    {longDesc}
                                </p>
                                
                                {highlights.length > 0 && (
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Core Responsibilities</p>
                                        <ul className="space-y-3">
                                            {highlights.map((point, idx) => (
                                                <motion.li 
                                                    key={idx}
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start space-x-3 text-accent/80 text-xs"
                                                >
                                                    <div className="mt-1 bg-highlight/20 p-0.5 rounded-full flex-shrink-0">
                                                        <CheckCircle2 className="h-3 w-3 text-highlight" />
                                                    </div>
                                                    <span className="leading-relaxed">{point}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-auto pt-4 flex items-center justify-between">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-xs font-black uppercase tracking-[0.2em] text-highlight flex items-center hover:text-white transition-colors"
                    >
                        {isExpanded ? 'Show Less' : 'Details'}
                        <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                    <a 
                        href={`https://wa.me/918897230178?text=Hi,%20I%20am%20interested%20in%20your%20${title}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-highlight text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-highlight/20 border border-highlight/50 hover:scale-105"
                    >
                        Enquire Now
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
