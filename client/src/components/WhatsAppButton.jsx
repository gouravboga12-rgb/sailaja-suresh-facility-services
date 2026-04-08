import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "918897230178";
    const message = encodeURIComponent("Hello, I am interested in your staffing services");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center"
            aria-label="Connect on WhatsApp"
        >
            {/* Tooltip */}
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl hidden md:block">
                Chat with us!
            </span>
            
            {/* Button */}
            <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 animate-bounce hover:animate-none transform hover:scale-110 flex items-center justify-center">
                <MessageSquare className="text-white h-7 w-7 fill-current" />
                
                {/* Ping Animation */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
            </div>
        </a>
    );
};

export default WhatsAppButton;
