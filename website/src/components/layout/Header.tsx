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
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B87333] to-[#5C3D2E] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                            <div className="relative bg-gradient-to-br from-[#B87333] to-[#8B5A2B] text-white font-extrabold text-lg md:text-xl px-4 py-2 rounded-xl shadow-lg">
                                Vakdor
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
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

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://propuesta.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#B87333] to-[#9A5520] hover:from-[#A05A2C] hover:to-[#8B4513] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-[#B87333]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <Calendar size={16} />
                            <span>Agendar Demo</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#94A3B8] hover:text-[#B87333] transition-colors p-2"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
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
                                href="https://propuesta.vakdor.com/call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#B87333] to-[#9A5520] text-white px-5 py-3 rounded-xl text-center text-sm mt-2 shadow-lg font-bold"
                            >
                                <Calendar size={16} className="inline mr-2" />
                                Agendar Demo
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
