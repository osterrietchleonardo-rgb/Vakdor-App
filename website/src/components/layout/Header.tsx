'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-lg md:text-xl px-3 py-1.5 rounded-lg shadow-md">
                            Vakdor
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Inicio
                        </Link>
                        <Link href="/asesor-top" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Para Asesores
                        </Link>
                        <Link href="/inmobiliaria" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Para Inmobiliarias
                        </Link>
                        <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Blog
                        </Link>
                        <Link href="/sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Sobre Mí
                        </Link>
                    </nav>

                    <a
                        href="https://vakdor.com/call_vsl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
                    >
                        <Calendar size={16} />
                        <span className="hidden md:inline">Agendar Llamada</span>
                        <span className="md:hidden">Llamada</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
