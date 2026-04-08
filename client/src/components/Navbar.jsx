import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Locations', path: '/locations' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-secondary/20Shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 md:space-x-4 group">
                        <img src={logo} alt="Sailaja Suresh Logo" className="h-12 md:h-16 w-auto rounded-md shadow-2xl transition-transform group-hover:scale-105 flex-shrink-0" />
                        <div className="flex flex-col md:flex-row md:items-center">
                            <span className="text-white font-black text-xs sm:text-sm md:text-xl lg:text-2xl tracking-tight uppercase leading-tight md:whitespace-nowrap">
                                <span className="block md:inline">SAILAJA SURESH</span>
                                <span className="hidden md:inline"> </span>
                                <span className="block md:inline">FACILITY SERVICES</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-highlight ${isActive(link.path) ? 'text-highlight' : 'text-accent'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/hire-talent" className="bg-secondary hover:bg-highlight text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-secondary/20">
                            HIRE TALENT
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out border-b border-secondary/20 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pt-4 pb-8 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg font-semibold transition-colors ${isActive(link.path) ? 'text-highlight' : 'text-accent'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-secondary/20">
                        <Link
                            to="/hire-talent"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-secondary text-white px-6 py-3 rounded-xl font-bold"
                        >
                            HIRE TALENT
                        </Link>
                    </div>
                    <div className="flex justify-around pt-6">
                        <a href="tel:8897230178" className="flex flex-col items-center text-accent hover:text-white transition-colors">
                            <Phone className="h-5 w-5 mb-1" />
                            <span className="text-[10px]">Call</span>
                        </a>
                        <a href="https://wa.me/918897230178" className="flex flex-col items-center text-green-500 hover:text-green-400 transition-colors">
                            <MessageSquare className="h-5 w-5 mb-1" />
                            <span className="text-[10px]">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
