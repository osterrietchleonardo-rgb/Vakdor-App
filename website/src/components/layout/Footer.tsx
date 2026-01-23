import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-[#1E293B] pt-20 pb-10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B87333]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-display text-3xl font-black text-[#F8FAFC]">
                                Vakdor<span className="text-[#B87333]">.</span>
                            </span>
                        </Link>
                        <p className="text-[#94A3B8] text-lg max-w-sm mb-8">
                            Infraestructura de inteligencia artificial para escalar negocios inmobiliarios sin depender de más personal.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Twitter, href: '#' },
                                { icon: Linkedin, href: '#' },
                                { icon: Instagram, href: '#' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:bg-[#B87333] hover:text-white transition-all hover:scale-110"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-[#F8FAFC] mb-6">Plataforma</h4>
                        <ul className="space-y-4">
                            <li><Link href="/inmobiliaria" className="text-[#94A3B8] hover:text-[#B87333] transition-colors">Para Inmobiliarias</Link></li>
                            <li><Link href="/asesor-top" className="text-[#94A3B8] hover:text-[#B87333] transition-colors">Para Asesores</Link></li>
                            <li><Link href="/blog" className="text-[#94A3B8] hover:text-[#B87333] transition-colors">Blog</Link></li>
                            <li><a href="https://vakdor.com/login" className="text-[#94A3B8] hover:text-[#B87333] transition-colors">Iniciar Sesión</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-[#F8FAFC] mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/legal/privacidad" className="text-[#94A3B8] hover:text-[#B87333] transition-colors">Privacidad</Link></li>
                            <li><Link href="/legal/terminos" className="text-[#94A3B8] hover:text-[#B87333] transition-colors">Términos</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#64748B] text-sm">
                        &copy; {new Date().getFullYear()} Vakdor AI. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[#64748B] text-sm font-medium">Sistemas Operativos</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
