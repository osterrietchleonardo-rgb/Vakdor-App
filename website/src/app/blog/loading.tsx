
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                {/* Hero Skeleton */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        <div className="h-6 w-48 bg-[#1E293B] rounded-full mb-6 animate-pulse"></div>
                        <div className="h-12 w-3/4 max-w-lg bg-[#1E293B] rounded-xl mb-4 animate-pulse"></div>
                        <div className="h-6 w-2/3 max-w-md bg-[#1E293B] rounded-lg animate-pulse"></div>
                    </div>
                </section>

                {/* Posts Grid Skeleton */}
                <section className="py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden h-[450px] animate-pulse">
                                    {/* Image Placeholder */}
                                    <div className="h-48 bg-[#1E293B] w-full"></div>
                                    
                                    {/* Content Placeholder */}
                                    <div className="p-6 space-y-4">
                                        <div className="flex gap-2">
                                            <div className="h-6 w-20 bg-[#1E293B] rounded-full"></div>
                                            <div className="h-6 w-24 bg-[#1E293B] rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-full bg-[#1E293B] rounded-lg"></div>
                                        <div className="h-4 w-full bg-[#1E293B] rounded"></div>
                                        <div className="h-4 w-2/3 bg-[#1E293B] rounded"></div>
                                        
                                        <div className="pt-4 flex items-center gap-3">
                                            <div className="h-10 w-10 bg-[#1E293B] rounded-full"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-4 w-24 bg-[#1E293B] rounded"></div>
                                                <div className="h-3 w-16 bg-[#1E293B] rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
