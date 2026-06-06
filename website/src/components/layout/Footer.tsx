'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export interface FooterProps {
    hideCTA?: boolean;
}

export function Footer({ hideCTA = false }: FooterProps) {
    return (
        <footer className="relative z-50 bg-[#0F172A] border-t border-[#B87333]/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <div className="bg-gradient-to-br from-[#B87333] to-[#8B5A2B] !text-white font-extrabold text-xl px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(184,115,51,0.4)] border border-[#B87333]/50">
                                Vakdor
                            </div>
                        </Link>
                        <p className="!text-slate-200 text-sm leading-relaxed mb-4 font-medium">
                            El Partner Tecnológico del Sector Inmobiliario. Automatiza y escala tu negocio con IA.
                        </p>
                        <p className="font-accent text-[#B87333] text-sm italic font-semibold">
                            &quot;Donde el legado se encuentra con el algoritmo&quot;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="!text-white font-bold mb-5 text-sm uppercase tracking-wider border-b border-[#B87333]/30 pb-2 inline-block">
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
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="!text-slate-300 hover:!text-white transition-colors text-sm font-medium hover:translate-x-1 duration-300 flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 rounded-full bg-[#B87333]" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="!text-white font-bold mb-5 text-sm uppercase tracking-wider border-b border-[#B87333]/30 pb-2 inline-block">
                            Contacto
                        </h4>
                        <div className="flex flex-col gap-4 text-sm">
                            <a
                                href="mailto:business@vakdor.com"
                                className="flex items-center gap-3 !text-slate-300 hover:!text-white transition-colors font-medium group"
                            >
                                <div className="p-2 rounded-lg bg-[#1E293B] group-hover:bg-[#B87333] transition-colors">
                                    <Mail size={16} className="text-[#B87333] group-hover:!text-white" />
                                </div>
                                business@vakdor.com
                            </a>
                            <a
                                href="tel:+5492213089334"
                                className="flex items-center gap-3 !text-slate-300 hover:!text-white transition-colors font-medium group"
                            >
                                <div className="p-2 rounded-lg bg-[#1E293B] group-hover:bg-[#B87333] transition-colors">
                                    <Phone size={16} className="text-[#B87333] group-hover:!text-white" />
                                </div>
                                +54 9 221 308-9334
                            </a>
                            <span className="flex items-center gap-3 !text-slate-300 font-medium group">
                                <div className="p-2 rounded-lg bg-[#1E293B]">
                                    <MapPin size={16} className="text-[#B87333]" />
                                </div>
                                Buenos Aires, Argentina
                            </span>
                        </div>
                    </div>

                    {/* Social & CTA */}
                    <div>
                        <h4 className="!text-white font-bold mb-5 text-sm uppercase tracking-wider border-b border-[#B87333]/30 pb-2 inline-block">
                            Síguenos
                        </h4>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="https://www.linkedin.com/in/osterrietchleonardo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#1E293B] border border-slate-700 flex items-center justify-center !text-slate-300 hover:bg-[#B87333] hover:border-[#B87333] hover:!text-white transition-all hover:scale-110 shadow-lg"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/vakdor_leo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#1E293B] border border-slate-700 flex items-center justify-center !text-slate-300 hover:bg-[#B87333] hover:border-[#B87333] hover:!text-white transition-all hover:scale-110 shadow-lg"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                        {!hideCTA && (
                            <a
                                href="https://www.vakdor.com/call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cta-copper px-6 py-3 rounded-xl text-sm font-bold w-full text-center shadow-[0_4px_14px_0_rgba(184,115,51,0.39)] hover:shadow-[0_6px_20px_rgba(184,115,51,0.23)] hover:-translate-y-1 transition-all ease-linear !text-white"
                            >
                                Agendar Llamada
                            </a>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="!text-slate-400 text-xs font-medium">
                        © {new Date().getFullYear()} Vakdor. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-xs font-medium">
                        <Link href="#" className="!text-slate-400 hover:!text-white transition-colors">
                            Términos y Condiciones
                        </Link>
                        <Link href="#" className="!text-slate-400 hover:!text-white transition-colors">
                            Política de Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
