'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Para Inmobiliarias', href: '/inmobiliaria' },
        { name: 'Para Asesores', href: '/asesor-top' },
        { name: 'Blog', href: '/blog' },
        { name: 'Sobre Mí', href: '/sobre-mi' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#020617]/80 backdrop-blur-md border-b border-[#B87333]/10 py-3 shadow-[0_4px_30px_rgba(2,6,23,0.5)]'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group relative z-50">
                    <span className="font-display text-2xl font-black tracking-tight text-[#F8FAFC]">
                        Vakdor<span className="text-[#B87333]">.</span>
                    </span>
                    <div className="absolute -inset-2 bg-[#B87333]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B87333] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="https://vakdor.com/call_vsl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden bg-gradient-to-r from-[#B87333] to-[#8B4513] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(184,115,51,0.4)] hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Agendar Demo</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-[#020617] z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold text-[#F8FAFC] hover:text-[#B87333] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://vakdor.com/call_vsl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 bg-[#B87333] text-white px-8 py-3 rounded-xl font-bold text-lg"
                        >
                            Agendar Demo
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
