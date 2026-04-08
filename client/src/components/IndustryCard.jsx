import React from 'react';

const IndustryCard = ({ icon: Icon, title, description }) => {
    return (
        <div 
            className="group glass p-10 rounded-[2rem] border border-white/5 hover:border-highlight/40 transition-all duration-700 hover:-translate-y-3 shadow-xl hover:shadow-highlight/10 flex flex-col items-center text-center"
            data-aos="fade-up"
        >
            <div className="mb-8 p-5 bg-white/5 rounded-2xl group-hover:bg-highlight/20 group-hover:scale-110 transition-all duration-500 border border-white/10">
                <Icon className="h-10 w-10 text-highlight group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-highlight transition-colors">{title}</h3>
            <p className="text-accent/70 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default IndustryCard;
