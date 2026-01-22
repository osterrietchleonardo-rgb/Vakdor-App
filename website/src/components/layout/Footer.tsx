'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Vakdor</h3>
                        <p className="text-slate-400 text-sm">
                            El Partner Tecnológico del Sector Inmobiliario
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-3">Soluciones</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link href="/asesor-top" className="hover:text-white transition-colors">
                                    Para Asesores Top
                                </Link>
                            </li>
                            <li>
                                <Link href="/inmobiliaria" className="hover:text-white transition-colors">
                                    Para Inmobiliarias
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-3">Recursos</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre-mi" className="hover:text-white transition-colors">
                                    Sobre Mí
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link href="/privacidad" className="hover:text-white transition-colors">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terminos" className="hover:text-white transition-colors">
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Vakdor. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
