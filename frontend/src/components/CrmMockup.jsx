import React from 'react';
import { User, Phone, Mail, Calendar, Clock, DollarSign, MapPin, Tag, CheckCircle2, MessageSquare, PhoneCall, Bot, ChevronRight } from 'lucide-react';
import { CRM_DATA } from '../data/mockData';

export function CrmMockup() {
    const { contact, classification, activityLogs, propertyInterest, stats } = CRM_DATA;

    return (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full font-sans text-gray-800">

            {/* CRM HEADER */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md z-10">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <Bot size={18} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm leading-tight">CRM VAKDOR</h3>
                        <p className="text-[10px] text-slate-400">Panel de Prospecto</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center gap-1.5">
                        <Clock size={12} className="text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-400">Ahorro: {stats.timeSaved}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                        <span className="text-xs font-bold">YO</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">

                {/* LEAD INFO CARD */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex gap-4 items-start">
                        <div className="relative">
                            <img src={contact.avatar} alt="Lead" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">{contact.name}</h2>
                                    <p className="text-xs text-slate-500 flex items-center gap-1">
                                        <Calendar size={10} /> Alta: Hace 2 meses
                                    </p>
                                </div>
                                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border border-amber-200">
                                    {contact.status}
                                </span>
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2 text-xs text-gray-600 p-1.5 bg-gray-50 rounded">
                                    <Phone size={12} className="text-slate-400" />
                                    {contact.phone}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600 p-1.5 bg-gray-50 rounded">
                                    <Mail size={12} className="text-slate-400" />
                                    <span className="truncate">{contact.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CLASSIFICATION & INTEREST */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Tag size={10} /> Perfilado IA
                        </h4>
                        <div className="space-y-2">
                            <div>
                                <p className="text-[10px] text-gray-500">Presupuesto</p>
                                <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                                    <DollarSign size={10} className="text-emerald-600" /> {classification.budget}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500">Búsqueda</p>
                                <p className="text-xs font-bold text-slate-800">{classification.search}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500">Zona</p>
                                <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                                    <MapPin size={10} className="text-blue-500" /> {classification.zone}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                            <CheckCircle2 size={10} /> Interés Actual
                        </h4>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="bg-blue-50 border border-blue-100 p-2 rounded-lg mb-2">
                                <p className="text-xs font-bold text-blue-900 leading-tight mb-1">{propertyInterest.title}</p>
                                <p className="text-[10px] text-blue-700">{propertyInterest.address}</p>
                                <p className="text-xs font-bold text-emerald-600 mt-1">{propertyInterest.price}</p>
                            </div>
                            <button className="w-full bg-slate-800 text-white text-[10px] font-bold py-1.5 rounded flex items-center justify-center gap-1 hover:bg-slate-700 transition-colors">
                                Ver Ficha <ChevronRight size={10} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ACTIVITY TIMELINE */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                        <Clock size={10} /> Actividad Reciente (Automática)
                    </h4>
                    <div className="space-y-0 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-1 bottom-1 w-[1px] bg-gray-200"></div>

                        {activityLogs.map((log, idx) => {
                            const icons = {
                                whatsapp: <MessageSquare size={10} className="text-white" />,
                                bot: <Bot size={10} className="text-white" />,
                                call: <PhoneCall size={10} className="text-white" />,
                                system: <CheckCircle2 size={10} className="text-white" />
                            };
                            const colors = {
                                whatsapp: 'bg-green-500',
                                bot: 'bg-indigo-500',
                                call: 'bg-blue-500',
                                system: 'bg-slate-400'
                            };

                            return (
                                <div key={idx} className="relative pl-8 pb-4 last:pb-0">
                                    <div className={`absolute left-0 top-0 w-6 h-6 rounded-full ${colors[log.type]} border-2 border-white shadow-sm flex items-center justify-center z-10`}>
                                        {icons[log.type]}
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-800">{log.text}</p>
                                        <p className="text-[10px] text-slate-400">{log.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
