'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Check if we are on a landing page to hide navigation
    const isLandingPage = pathname === '/asesor-top' || pathname === '/inmobiliaria';
    // Siempre mostrar el CTA, incluso en landings, pero quizás con diferente texto si se requiere.
    // Por ahora mantenemos la lógica de mostrarlo siempre.
    const hideCTA = false; 

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/asesor-top', label: 'Para Asesores' },
        { href: '/inmobiliaria', label: 'Para Inmobiliarias' },
        { href: '/sobre-mi', label: 'Sobre Mí' },
        // { href: '#casos', label: 'Casos de Éxito' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-[rgba(184,115,51,0.1)] py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4 max-w-[1240px]">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-2 group">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                            <Image 
                                src="/logo.png" 
                                alt="Vakdor Logo" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight group-hover:text-[var(--liquid-copper)] transition-colors">
                            VAKDOR
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    {!isLandingPage && (
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--liquid-copper)] transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    )}

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        {!hideCTA && (
                            <a
                                href="https://www.vakdor.com/call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#B87333] to-[#9A5520] hover:from-[#A05A2C] hover:to-[#8B4513] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-[#B87333]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Agendar Auditoría
                            </a>
                        )}

                        <button 
                            className="md:hidden relative z-50 text-white p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[#020617] md:hidden transition-transform duration-300 ease-in-out z-40 flex flex-col justify-center items-center ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex flex-col items-center gap-8 p-8">
                    {!isLandingPage && navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-display font-bold text-white hover:text-[var(--liquid-copper)] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {!hideCTA && (
                        <a
                            href="https://www.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#B87333] to-[#9A5520] text-white px-5 py-3 rounded-xl text-center text-sm mt-2 shadow-lg font-bold"
                        >
                            Agendar Auditoría
                        </a>
                    )}
                </nav>
            </div>
        </header>
    );
}
