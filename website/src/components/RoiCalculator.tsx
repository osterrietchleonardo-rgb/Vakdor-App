'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Users, Database, TrendingUp } from 'lucide-react';
import { trackClickAgendarCTA } from '@/lib/analytics';

export function RoiCalculator() {
    const [advisors, setAdvisors] = useState(10);
    const [avgCommission, setAvgCommission] = useState(5000);
    const [inactiveLeads, setInactiveLeads] = useState(500);
    const [exclusivesPerMonth, setExclusivesPerMonth] = useState(2);

    const results = useMemo(() => {
        // Lead recovery: 8% reactivation rate, 30% close rate
        const reactivatedLeads = Math.round(inactiveLeads * 0.08);
        const salesFromLeads = Math.round(reactivatedLeads * 0.30);
        const leadRecoveryRevenue = salesFromLeads * avgCommission;

        // Automatic prospecting: +5 exclusives/month, 20% close rate
        const additionalExclusives = 5 - exclusivesPerMonth;
        const extraSalesFromExclusives = Math.round(additionalExclusives * 12 * 0.20);
        const prospectingRevenue = extraSalesFromExclusives * avgCommission;

        // Time savings: 15h/week per advisor, 35 working weeks
        const hoursSaved = advisors * 15 * 35;
        const hourlyRate = 25; // USD
        const timeSavingsValue = hoursSaved * hourlyRate;

        // Reduced turnover: from 40% to 20%
        const turnoverSavings = advisors * 0.20 * 15000; // 20% reduction * $15k cost

        const totalAnnualBenefit = leadRecoveryRevenue + prospectingRevenue + timeSavingsValue + turnoverSavings;
        const estimatedInvestment = advisors * 200 * 12; // $200/advisor/month
        const roi = Math.round((totalAnnualBenefit / estimatedInvestment) * 100);
        const paybackMonths = Math.round(estimatedInvestment / (totalAnnualBenefit / 12));

        return {
            leadRecoveryRevenue,
            prospectingRevenue,
            timeSavingsValue,
            turnoverSavings,
            totalAnnualBenefit,
            roi,
            paybackMonths,
            hoursSaved
        };
    }, [advisors, avgCommission, inactiveLeads, exclusivesPerMonth]);

    return (
        <div className="bg-[#0F172A]/60 rounded-2xl shadow-xl border border-[#B87333]/20 backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#B87333]/10 rounded-xl border border-[#B87333]/20">
                    <Calculator size={24} className="text-[#B87333]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">{`Calculá tu ROI con Vakdor`}</h3>
                    <p className="text-sm text-[#94A3B8]">Completá los datos de tu inmobiliaria</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Inputs */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                            <Users size={14} className="inline mr-1" />
                            ¿Cuántos asesores tenés?
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="50"
                            value={advisors}
                            onChange={(e) => setAdvisors(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#B87333]"
                        />
                        <div className="text-right text-sm font-bold text-[#B87333]">{advisors} asesores</div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                            <DollarSign size={14} className="inline mr-1" />
                            Comisión promedio por venta (USD)
                        </label>
                        <input
                            type="number"
                            value={avgCommission}
                            onChange={(e) => setAvgCommission(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 bg-[#020617]/50 border border-slate-700 rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#B87333] focus:border-[#B87333]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                            <Database size={14} className="inline mr-1" />
                            Leads inactivos en tu CRM
                        </label>
                        <input
                            type="number"
                            value={inactiveLeads}
                            onChange={(e) => setInactiveLeads(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 bg-[#020617]/50 border border-slate-700 rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#B87333] focus:border-[#B87333]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                            <TrendingUp size={14} className="inline mr-1" />
                            Propiedades exclusivas actuales/mes
                        </label>
                        <input
                            type="number"
                            value={exclusivesPerMonth}
                            onChange={(e) => setExclusivesPerMonth(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 bg-[#020617]/50 border border-slate-700 rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#B87333] focus:border-[#B87333]"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-[#020617] text-white rounded-xl p-6 border border-[#B87333]/20">
                    <h4 className="text-sm font-bold text-[#94A3B8] uppercase tracking-wider mb-4">Tu ROI Estimado</h4>

                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#94A3B8]">Recuperación de Leads</span>
                            <span className="font-bold text-[#B87333]">${results.leadRecoveryRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#94A3B8]">Captación Automática</span>
                            <span className="font-bold text-[#B87333]">${results.prospectingRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#94A3B8]">Ahorro en Tiempo</span>
                            <span className="font-bold text-[#B87333]">${results.timeSavingsValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#94A3B8]">Reducción Rotación</span>
                            <span className="font-bold text-[#B87333]">${results.turnoverSavings.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 pt-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-[#F8FAFC]">Beneficio Anual Total</span>
                            <span className="text-2xl font-black text-[#B87333]">${results.totalAnnualBenefit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#94A3B8]">ROI Estimado</span>
                            <span className="text-xl font-bold text-[#F8FAFC]">{results.roi}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#94A3B8]">Se paga solo en</span>
                            <span className="font-bold text-[#F8FAFC]">{results.paybackMonths} meses</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <a
                    href="https://www.vakdor.com/call"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClickAgendarCTA('roi_calculator')}
                    className="cta-copper inline-flex items-center gap-2 font-bold px-8 py-3 rounded-xl transition-all active:scale-95"
                >
                    Validar estos Números en una Llamada →
                </a>
            </div>
        </div>
    );
}
