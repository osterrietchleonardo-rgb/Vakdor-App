'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Menu, X } from 'lucide-react';

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl
                ${scrolled
                    ? 'glass glass-hover rounded-2xl shadow-2xl'
                    : 'bg-transparent'
                }`}
        >
            <div className="px-4 md:px-6 py-3 md:py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B87333] to-[#5C3D2E] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                            <div className="relative bg-gradient-to-br from-[#B87333] to-[#8B5A2B] text-white font-extrabold text-lg md:text-xl px-4 py-2 rounded-xl shadow-lg">
                                Vakdor
                            </div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {[
                            { href: '/', label: 'Inicio' },
                            { href: '/asesor-top', label: 'Para Asesores' },
                            { href: '/inmobiliaria', label: 'Para Inmobiliarias' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/sobre-mi', label: 'Sobre Mí' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[#94A3B8] hover:text-[#B87333] transition-colors text-sm font-medium relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B87333] to-[#5C3D2E] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://vakdor.com/call_vsl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 cta-copper px-5 py-2.5 rounded-xl text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all"
                        >
                            <Calendar size={16} />
                            <span>Agendar Llamada</span>
                        </a>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#94A3B8] hover:text-[#B87333] transition-colors p-2"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-[rgba(184,115,51,0.2)] pt-4 animate-fade-in">
                        <nav className="flex flex-col gap-4">
                            {[
                                { href: '/', label: 'Inicio' },
                                { href: '/asesor-top', label: 'Para Asesores' },
                                { href: '/inmobiliaria', label: 'Para Inmobiliarias' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/sobre-mi', label: 'Sobre Mí' },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-[#CBD5E1] hover:text-[#B87333] transition-colors text-base font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="https://vakdor.com/call_vsl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-copper px-5 py-3 rounded-xl text-center text-sm mt-2"
                            >
                                <Calendar size={16} className="inline mr-2" />
                                Agendar Llamada
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
