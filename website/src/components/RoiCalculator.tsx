'use client';

import React, { useState } from 'react';

export function RoiCalculator() {
    const [agents, setAgents] = useState(1);
    const [deals, setDeals] = useState(12);
    const [price, setPrice] = useState(150000);
    const [commission, setCommission] = useState(3);

    // Cálculos
    const annualGCI = deals * price * (commission / 100);
    
    // Hipótesis conservadoras de mejora con IA
    const productivityGain = 0.30; // +30% tratos cerrados por eficiencia
    const captureGain = 0.20; // +20% nuevas propiedades por mejor prospección
    
    // Impacto proyectado
    const newDeals = Math.floor(deals * (1 + productivityGain));
    const projectedGCI = newDeals * price * (commission / 100);
    const extraRevenue = projectedGCI - annualGCI;
    const softwareCost = 800 * 12; // Costo estimado anual de software de IA
    const roi = ((extraRevenue - softwareCost) / softwareCost) * 100;

    const formatMoney = (amount: number) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <section className="py-24 bg-midnight relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--liquid-copper)] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--liquid-copper)] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-[1240px]">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Calculá tu <span className="text-gradient-copper">ROI Potencial</span>
                    </h2>
                    <p className="text-silver text-lg">
                        Proyectá el impacto financiero de incorporar un sistema de ventas autónomo en tu inmobiliaria.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Simulator Controls */}
                    <div className="glass p-8 rounded-2xl space-y-8">
                        <div>
                            <label className="block text-sm font-medium text-silver mb-2">Cantidad de Asesores</label>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={agents}
                                onChange={(e) => setAgents(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--liquid-copper)]"
                            />
                            <div className="text-right text-2xl font-bold text-white mt-2">{agents}</div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-silver mb-2">Operaciones Anuales (Promedio Actual)</label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={deals}
                                onChange={(e) => setDeals(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--liquid-copper)]"
                            />
                            <div className="text-right text-2xl font-bold text-white mt-2">{deals}</div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-silver mb-2">Ticket Promedio de Venta (USD)</label>
                            <input
                                type="range"
                                min="50000"
                                max="1000000"
                                step="10000"
                                value={price}
                                onChange={(e) => setPrice(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--liquid-copper)]"
                            />
                            <div className="text-right text-2xl font-bold text-white mt-2">{formatMoney(price)}</div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-silver mb-2">Comisión Promedio (%)</label>
                            <input
                                type="range"
                                min="1"
                                max="6"
                                step="0.5"
                                value={commission}
                                onChange={(e) => setCommission(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--liquid-copper)]"
                            />
                            <div className="text-right text-2xl font-bold text-white mt-2">{commission}%</div>
                        </div>
                    </div>

                    {/* Results Card */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B87333] to-[#5C3D2E] rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                        <div className="relative bg-slate-900 rounded-2xl p-8 border border-[rgba(184,115,51,0.1)] h-full flex flex-col justify-between">
                            
                            <div className="space-y-6 mb-8">
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                    <div className="text-sm text-silver mb-1">Facturación Actual Estimada</div>
                                    <div className="text-2xl font-bold text-white">{formatMoney(annualGCI)}</div>
                                </div>

                                <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-[#2A1810] to-[#0F0F0F] border border-[rgba(184,115,51,0.3)]">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-sm font-bold text-[var(--liquid-copper)] mb-2 uppercase tracking-wide">Proyección con IA (+30%)</div>
                                        <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                                            {formatMoney(projectedGCI)}
                                        </div>
                                        <div className="text-green-400 font-bold flex items-center gap-1">
                                            + {formatMoney(extraRevenue)} 
                                            <span className="text-xs font-normal text-silver ml-1">ingreso extra anual</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <a
                                    href="https://www.vakdor.com/call"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-copper inline-flex items-center gap-2 font-bold px-8 py-3 rounded-xl transition-all active:scale-95"
                                >
                                    <span>Reclamar este ROI</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </a>
                                <p className="text-xs text-silver mt-4 max-w-xs mx-auto">
                                    *Cálculo estimativo basado en promedios del mercado. Resultados reales pueden variar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}