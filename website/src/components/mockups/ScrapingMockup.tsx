'use client';

import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, ArrowRight, Loader } from 'lucide-react';
import { SCRAPED_PROPERTIES } from '@/data/mockData';
import type { ScrapedProperty } from '@/data/mockData';

export function ScrapingMockup() {
    const [scannedCount, setScannedCount] = useState(0);
    const [foundProperties, setFoundProperties] = useState<ScrapedProperty[]>([]);
    const [isScanning, setIsScanning] = useState(true);

    useEffect(() => {
        if (!isScanning) return;

        const counterInterval = setInterval(() => {
            setScannedCount(prev => prev + Math.floor(Math.random() * 5));
        }, 100);

        const timeouts: NodeJS.Timeout[] = [];
        SCRAPED_PROPERTIES.forEach((prop, index) => {
            const timeout = setTimeout(() => {
                setFoundProperties(prev => {
                    if (prev.find(p => p.id === prop.id)) return prev;
                    return [...prev, prop];
                });
            }, (index + 1) * 2000);
            timeouts.push(timeout);
        });

        const stopTimeout = setTimeout(() => {
            setIsScanning(false);
        }, (SCRAPED_PROPERTIES.length + 1) * 2000);

        return () => {
            clearInterval(counterInterval);
            timeouts.forEach(clearTimeout);
            clearTimeout(stopTimeout);
        };
    }, [isScanning]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full font-sans text-gray-800">
            <div className="bg-slate-100 border-b border-gray-200 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 flex items-center gap-2 text-xs text-slate-500 mx-2">
                    <Search size={12} />
                    <span>zonaprop.com.ar/alquiler-departamentos-palermo-dueno-directo</span>
                </div>
            </div>

            <div className="flex-1 relative bg-slate-50 p-4 overflow-hidden flex flex-col">
                <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg mb-4 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold flex items-center gap-2">
                            {isScanning ? <Loader size={18} className="animate-spin" /> : <CheckCircle2 size={18} />}
                            {isScanning ? 'Escaneando Portal...' : 'Escaneo Completado'}
                        </h3>
                        <p className="text-blue-100 text-xs mt-1">
                            Avisos analizados hoy: <span className="font-mono font-bold text-white text-sm">{1240 + scannedCount}</span>
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-blue-100">Encontrados</p>
                        <p className="text-2xl font-black">{foundProperties.length}</p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                    {foundProperties.length === 0 && (
                        <div className="text-center text-slate-400 py-10">
                            <Search size={40} className="mx-auto mb-2 opacity-20" />
                            <p className="text-sm">Buscando dueños directos...</p>
                        </div>
                    )}

                    {foundProperties.map((prop) => (
                        <div key={prop.id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 animate-fade-in-up flex gap-3">
                            <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 relative">
                                <img src={prop.image} alt="Propiedad" className="w-full h-full object-cover" />
                                <div className="absolute top-0 left-0 bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-br-md">
                                    {prop.source}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-sm text-gray-800 leading-tight">{prop.address}</h4>
                                    <p className="text-emerald-600 font-bold text-sm mt-0.5 mb-1">{prop.price}</p>
                                    <div className="flex items-center gap-1">
                                        <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-indigo-200">
                                            {prop.owner}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full w-full animate-progress-bus"></div>
                                    </div>
                                    <span className="text-[10px] text-blue-600 font-bold flex items-center gap-1">
                                        CRM <ArrowRight size={10} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="font-mono text-[10px] text-slate-400 space-y-1">
                        <p className="flex items-center gap-1">
                            <span className="text-green-500">[SUCCESS]</span> Extracción de datos completada (124ms)
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="text-blue-500">[INFO]</span> Filtrando inmobiliarias... OK
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="text-amber-500">[WAIT]</span> Validando teléfonos en WhatsApp API...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
