'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface NewsletterSectionProps {
    source?: string;
}

export function NewsletterSection({ source = 'website' }: NewsletterSectionProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Por favor, ingresá un email válido.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { error } = await (supabase as any)
                .from('newsletter_subscribers')
                .insert([{
                    email: email.toLowerCase().trim(),
                    source: source
                }]);

            if (error) {
                if (error.code === '23505') {
                    // Unique constraint violation - email already exists
                    setStatus('success');
                    setMessage('¡Ya estás registrado! Tu mes gratis de PRISMA ya está reservado.');
                } else {
                    throw error;
                }
            } else {
                setStatus('success');
                setMessage('¡Listo! Te contactamos para activar tu mes gratis de PRISMA.');
                setEmail('');
            }
        } catch (err) {
            console.error('Newsletter subscription error:', err);
            setStatus('error');
            setMessage('Hubo un error. Por favor, intentá de nuevo.');
        }
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center p-8 md:p-12 bg-gradient-to-br from-[#B87333] to-[#5C3D2E] rounded-3xl shadow-xl overflow-hidden relative">
                    {/* Decorative circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Probá PRISMA gratis durante 1 mes
                        </h3>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
                            Dejanos tu email y reservás <span className="font-bold text-white">un mes gratis de PRISMA</span> para tu inmobiliaria.
                            Sin tarjeta, sin compromiso. Te contactamos para activar tu acceso.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Tu email corporativo"
                                disabled={status === 'loading' || status === 'success'}
                                className="executive-input flex-1 px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="bg-[#020617] hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all whitespace-nowrap active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Enviando...' : status === 'success' ? '✓ Reservado' : 'Quiero mi mes gratis'}
                            </button>
                        </form>

                        {message && (
                            <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-200' : 'text-white/90'}`}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
