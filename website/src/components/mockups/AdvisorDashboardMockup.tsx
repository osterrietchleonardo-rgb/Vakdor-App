'use client';

import React from 'react';
import { TrendingUp, Users, Clock, MessageSquare, MoreHorizontal, ChevronDown } from 'lucide-react';
import { ADVISOR_STATS } from '@/data/mockData';

export function AdvisorDashboardMockup() {
    return (
        <div className="bg-slate-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full font-sans text-gray-800">
            <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-slate-800">Rendimiento de Equipo</h2>
                    <button className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        Últimos 30 días <ChevronDown size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                            <Users size={14} />
                            <span className="text-[10px] font-bold uppercase">Total Leads</span>
                        </div>
                        <p className="text-2xl font-black text-slate-800">842</p>
                        <p className="text-[10px] text-green-600 font-bold flex items-center gap-0.5">
                            <TrendingUp size={10} /> +12%
                        </p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                        <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                            <MessageSquare size={14} />
                            <span className="text-[10px] font-bold uppercase">Resp. IA</span>
                        </div>
                        <p className="text-2xl font-black text-slate-800">98%</p>
                        <p className="text-[10px] text-slate-400">Automatizado</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                        <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                            <Clock size={14} />
                            <span className="text-[10px] font-bold uppercase">Tiempo Prom.</span>
                        </div>
                        <p className="text-2xl font-black text-slate-800">2m</p>
                        <p className="text-[10px] text-green-600 font-bold">-45s vs humano</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ranking de Asesores</h3>

                <div className="space-y-3">
                    {ADVISOR_STATS.map((advisor, index) => (
                        <div
                            key={advisor.id}
                            className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-blue-200 transition-colors cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img src={advisor.avatar} alt={advisor.name} className="w-10 h-10 rounded-full bg-slate-100" />
                                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${advisor.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-slate-800 flex items-center gap-1">
                                        {index + 1}. {advisor.name}
                                        {index < 3 && <span className="text-xs">👑</span>}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                        <span className="flex items-center gap-0.5">
                                            <MessageSquare size={10} /> {advisor.leads}
                                        </span>
                                        <span>•</span>
                                        <span className={`font-bold ${parseFloat(advisor.conversion) > 3 ? 'text-green-600' : 'text-amber-600'}`}>
                                            Conv: {advisor.conversion}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="w-20 h-8 relative">
                                    <svg className="w-full h-full text-blue-500 fill-current opacity-20" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <path d={`M0,40 L10,${30 + Math.random() * 10} L30,${20 + Math.random() * 10} L50,${10 + Math.random() * 10} L70,${20 + Math.random() * 10} L90,${5 + Math.random() * 10} L100,40 Z`} />
                                    </svg>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal size={16} className="text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-4 py-2 text-xs font-bold text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    Ver los 54 asesores restantes...
                </button>
            </div>
        </div>
    );
}
