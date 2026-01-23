'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#0F172A] border-t border-[rgba(184,115,51,0.15)]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <div className="bg-gradient-to-br from-[#B87333] to-[#8B5A2B] text-white font-extrabold text-xl px-4 py-2 rounded-xl">
                                Vakdor
                            </div>
                        </Link>
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                            El Partner Tecnológico del Sector Inmobiliario. Automatiza y escala tu negocio con IA.
                        </p>
                        <p className="font-accent text-[#B87333] text-sm italic">
                            "Donde el legado se encuentra con el algoritmo"
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#F8FAFC] font-semibold mb-4 text-sm uppercase tracking-wider">
                            Navegación
                        </h4>
                        <nav className="flex flex-col gap-3">
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
                                    className="text-[#94A3B8] hover:text-[#B87333] transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#F8FAFC] font-semibold mb-4 text-sm uppercase tracking-wider">
                            Contacto
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                href="mailto:hola@vakdor.com"
                                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#B87333] transition-colors"
                            >
                                <Mail size={14} />
                                hola@vakdor.com
                            </a>
                            <a
                                href="tel:+5491112345678"
                                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#B87333] transition-colors"
                            >
                                <Phone size={14} />
                                +54 9 11 1234-5678
                            </a>
                            <span className="flex items-center gap-2 text-[#94A3B8]">
                                <MapPin size={14} />
                                Buenos Aires, Argentina
                            </span>
                        </div>
                    </div>

                    {/* Social & CTA */}
                    <div>
                        <h4 className="text-[#F8FAFC] font-semibold mb-4 text-sm uppercase tracking-wider">
                            Síguenos
                        </h4>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:bg-[#B87333] hover:text-white transition-all"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:bg-[#B87333] hover:text-white transition-all"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                        <a
                            href="https://vakdor.com/call_vsl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block cta-copper px-6 py-3 rounded-xl text-sm"
                        >
                            Agendar Llamada
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[rgba(184,115,51,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#64748B] text-xs">
                        © {new Date().getFullYear()} Vakdor. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-xs">
                        <Link href="#" className="text-[#64748B] hover:text-[#B87333] transition-colors">
                            Términos y Condiciones
                        </Link>
                        <Link href="#" className="text-[#64748B] hover:text-[#B87333] transition-colors">
                            Política de Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
