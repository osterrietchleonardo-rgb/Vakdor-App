'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Users, Database, TrendingUp } from 'lucide-react';

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
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                    <Calculator size={24} className="text-blue-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Calculá tu ROI con Vakdor</h3>
                    <p className="text-sm text-slate-500">Completá los datos de tu inmobiliaria</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Inputs */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            <Users size={14} className="inline mr-1" />
                            ¿Cuántos asesores tenés?
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="50"
                            value={advisors}
                            onChange={(e) => setAdvisors(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="text-right text-sm font-bold text-blue-600">{advisors} asesores</div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            <DollarSign size={14} className="inline mr-1" />
                            Comisión promedio por venta (USD)
                        </label>
                        <input
                            type="number"
                            value={avgCommission}
                            onChange={(e) => setAvgCommission(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            <Database size={14} className="inline mr-1" />
                            Leads inactivos en tu CRM
                        </label>
                        <input
                            type="number"
                            value={inactiveLeads}
                            onChange={(e) => setInactiveLeads(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            <TrendingUp size={14} className="inline mr-1" />
                            Propiedades exclusivas actuales/mes
                        </label>
                        <input
                            type="number"
                            value={exclusivesPerMonth}
                            onChange={(e) => setExclusivesPerMonth(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Tu ROI Estimado</h4>

                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">Recuperación de Leads</span>
                            <span className="font-bold text-emerald-400">${results.leadRecoveryRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">Captación Automática</span>
                            <span className="font-bold text-emerald-400">${results.prospectingRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">Ahorro en Tiempo</span>
                            <span className="font-bold text-emerald-400">${results.timeSavingsValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">Reducción Rotación</span>
                            <span className="font-bold text-emerald-400">${results.turnoverSavings.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 pt-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold">Beneficio Anual Total</span>
                            <span className="text-2xl font-black text-emerald-400">${results.totalAnnualBenefit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">ROI Estimado</span>
                            <span className="text-xl font-bold text-blue-400">{results.roi}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-300">Se paga solo en</span>
                            <span className="font-bold text-amber-400">{results.paybackMonths} meses</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <a
                    href="https://vakdor.com/call_vsl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg active:scale-95"
                >
                    Validar estos Números en una Llamada →
                </a>
            </div>
        </div>
    );
}
