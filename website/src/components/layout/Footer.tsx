import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
    // Hide CTA in footer based on requirement? Usually footer CTA is always good.
    const hideCTA = false;

    return (
        <footer className="bg-[#020617] border-t border-[rgba(184,115,51,0.1)] relative overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[var(--liquid-copper)] to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 py-16 max-w-[1240px]">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                                <Image 
                                    src="/logo.png" 
                                    alt="Vakdor Logo" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-display font-bold text-xl text-white tracking-tight">
                                VAKDOR
                            </span>
                        </Link>
                        <p className="text-silver max-w-sm text-sm leading-relaxed">
                            Infraestructura de Inteligencia Artificial para el sector inmobiliario de alto rendimiento. Automatizamos lo operativo para que escales lo estratégico.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/leosterrietch/" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/osterrietchleonardo/" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                <Linkedin size={20} />
                            </a>
                            {/* <a href="#" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                <Twitter size={20} />
                            </a> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Explorar</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/asesor-top" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                    Para Asesores Top
                                </Link>
                            </li>
                            <li>
                                <Link href="/inmobiliaria" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                    Para Inmobiliarias
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre-mi" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                    Sobre Mí
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-silver hover:text-[var(--liquid-copper)] transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact/CTA */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contacto</h4>
                        <div className="space-y-4 text-sm mb-8">
                            <a href="mailto:leo@vakdor.com" className="flex items-center gap-3 text-silver hover:text-white transition-colors group">
                                <Mail size={16} className="text-[var(--liquid-copper)]" />
                                <span className="group-hover:translate-x-1 transition-transform">leo@vakdor.com</span>
                            </a>
                        </div>
                        {!hideCTA && (
                            <a
                                href="https://www.vakdor.com/call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cta-copper px-6 py-3 rounded-xl text-sm font-bold w-full text-center shadow-[0_4px_14px_0_rgba(184,115,51,0.39)] hover:shadow-[0_6px_20px_rgba(184,115,51,0.23)] hover:-translate-y-1 transition-all ease-linear !text-white"
                            >
                                Agendar Auditoría
                            </a>
                        )}
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <div>
                        &copy; {new Date().getFullYear()} Vakdor. Todos los derechos reservados.
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacidad</Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
