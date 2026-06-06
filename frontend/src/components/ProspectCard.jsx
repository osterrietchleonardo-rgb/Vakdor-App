import React from 'react';
import { MessageSquare, MapPin, Database, PhoneCall } from 'lucide-react';

export const ProspectCard = ({ data, isActive = false }) => (
    <div className={`bg-white p-3 md:p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 md:gap-3 ${isActive ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
        <div className="flex justify-between items-start gap-2">
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1 flex-wrap">
                    <span className="bg-blue-100 text-blue-700 text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {data.origen}
                    </span>
                    {data.status === 'new' && (
                        <span className="bg-red-100 text-red-600 text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                            NUEVO
                        </span>
                    )}
                    {isActive && (
                        <span className="bg-blue-600 text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full flex items-center gap-1">
                            <MessageSquare size={8} className="md:w-2.5 md:h-2.5" />
                            EN CONTACTO
                        </span>
                    )}
                </div>
                <h4 className="font-bold text-gray-800 text-xs md:text-sm leading-tight line-clamp-2">{data.titulo}</h4>
            </div>
            <div className="text-right flex-shrink-0">
                <p className="font-bold text-emerald-600 text-xs md:text-sm whitespace-nowrap">{data.precio}</p>
                <p className="text-[10px] md:text-xs text-gray-400">{data.match}% Match</p>
            </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-xs text-gray-500 border-y border-gray-100 py-1.5 md:py-2 overflow-x-auto">
            <div className="flex items-center gap-1 whitespace-nowrap">
                <MapPin size={12} className="md:w-3.5 md:h-3.5 flex-shrink-0" />
                <span className="truncate">{data.ubicacion}</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
                <Database size={12} className="md:w-3.5 md:h-3.5 flex-shrink-0" />
                <span className="truncate">{data.specs}</span>
            </div>
        </div>

        <div className="flex items-center justify-between gap-2 mt-1">
            <div className="flex items-center gap-1.5 md:gap-2 min-w-0 flex-1">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-[10px] md:text-xs flex-shrink-0">
                    {data.vendedor.charAt(0)}
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="text-[10px] md:text-xs font-semibold text-gray-700 truncate">{data.vendedor}</span>
                    <span className="text-[9px] md:text-[10px] text-gray-400">Dueño Directo</span>
                </div>
            </div>

            <button className="flex items-center gap-1 bg-green-50 text-green-700 px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold hover:bg-green-100 transition-colors border border-green-200 whitespace-nowrap flex-shrink-0">
                <PhoneCall size={12} className="md:w-3.5 md:h-3.5" />
                <span className="hidden sm:inline">{data.telefono}</span>
                <span className="sm:hidden">Llamar</span>
            </button>
        </div>
    </div>
);
