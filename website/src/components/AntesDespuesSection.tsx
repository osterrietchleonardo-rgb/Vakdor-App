import React from 'react';
import { Calculator, Repeat, FileText, Search, Palette, Gauge, GraduationCap, ArrowRight, Award } from 'lucide-react';

interface ComparativaItem {
    icon: React.ElementType;
    tarea: string;
    antes: string;
    antesDetalle: string;
    despues: string;
    despuesDetalle: string;
}

const ITEMS: ComparativaItem[] = [
    {
        icon: Calculator,
        tarea: 'Análisis de mercado (ACM)',
        antes: '2 horas',
        antesDetalle: 'Armado a mano, propiedad por propiedad.',
        despues: '5 segundos',
        despuesDetalle: 'Comparables reales, con % de comparabilidad.',
    },
    {
        icon: Repeat,
        tarea: 'Seguimiento de leads',
        antes: '30 de 400',
        antesDetalle: 'De 400 consultas de un asesor, solo ~30 tuvieron seguimiento.',
        despues: 'Las 400',
        despuesDetalle: 'Seguimiento automático 24/7, con respuesta al instante.',
    },
    {
        icon: FileText,
        tarea: 'Generar un contrato',
        antes: '30 minutos',
        antesDetalle: 'Completar los datos y exportar el PDF a mano.',
        despues: '5 minutos',
        despuesDetalle: 'Plantilla completa, PDF listo para firmar.',
    },
    {
        icon: Search,
        tarea: 'Buscar en cartera + red',
        antes: '2 a 3 horas',
        antesDetalle: 'Cruzar la cartera propia y la red de colaboración.',
        despues: '10 minutos',
        despuesDetalle: 'Resultados ordenados por % de match con el cliente.',
    },
    {
        icon: Palette,
        tarea: 'Contenido con tu marca',
        antes: 'Horas',
        antesDetalle: 'Sin consistencia de marca entre asesores.',
        despues: '5 minutos',
        despuesDetalle: '3 versiones estandarizadas, listas para publicar.',
    },
    {
        icon: Gauge,
        tarea: 'Tracking de performance',
        antes: 'Uno por uno',
        antesDetalle: 'Analizás a cada asesor a mano (60, camino a 100).',
        despues: 'Tiempo real',
        despuesDetalle: 'Tablero con ranking automático de todo el equipo.',
    },
    {
        icon: GraduationCap,
        tarea: 'Onboarding y procesos',
        antes: 'En tu cabeza',
        antesDetalle: 'Documentos dispersos y el know-how en el director.',
        despues: 'Chat con IA',
        despuesDetalle: 'Asiste a cada asesor con los procesos clave, 24/7.',
    },
];

export function AntesDespuesSection() {
    return (
        <section id="resultados" className="py-20 md:py-28 px-4 bg-[#0F172A]/50">
            <div className="max-w-6xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-6">
                    <p className="font-accent text-[#B87333] text-lg mb-4">Resultados reales</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-6 leading-tight">
                        Lo que hoy te come el día, PRISMA lo resuelve <span className="text-gradient-copper">en minutos.</span>
                    </h2>
                </div>

                {/* Banda de autoridad (prueba social) */}
                <div className="max-w-3xl mx-auto mb-14">
                    <div className="kinetic-card rounded-2xl p-6 md:p-7 flex items-start gap-4 border-l-2 border-[#B87333]/40">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                            <Award className="text-white" size={24} />
                        </div>
                        <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed">
                            Una de las inmobiliarias de <span className="text-white font-semibold">lujo</span> más reconocidas
                            del país —referente directo de <span className="text-white font-semibold">Leading Real Estate Companies of the World</span> y
                            galardonada— ya opera con PRISMA sus <span className="text-white font-semibold">60 asesores</span> (con proyección a 100).
                        </p>
                    </div>
                </div>

                {/* Grilla comparativa */}
                <div className="grid md:grid-cols-2 gap-5">
                    {ITEMS.map((item, index) => (
                        <div key={index} className="kinetic-card rounded-2xl p-6 md:p-7">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-[#1E293B] flex items-center justify-center flex-shrink-0">
                                    <item.icon className="text-[#B87333]" size={22} />
                                </div>
                                <h3 className="font-bold text-[#F8FAFC] text-lg">{item.tarea}</h3>
                            </div>

                            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                                {/* Hoy */}
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-1">
                                        Hoy, a mano
                                    </span>
                                    <p className="text-xl md:text-2xl font-extrabold text-[#94A3B8] leading-none mb-2">
                                        {item.antes}
                                    </p>
                                    <p className="text-xs text-[#64748B] leading-snug">{item.antesDetalle}</p>
                                </div>

                                <ArrowRight className="text-[#B87333]/60 flex-shrink-0" size={20} aria-hidden="true" />

                                {/* Con PRISMA */}
                                <div className="rounded-xl bg-[#B87333]/5 border border-[#B87333]/20 p-3 -m-1">
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#B87333] mb-1">
                                        Con PRISMA
                                    </span>
                                    <p className="text-xl md:text-2xl font-extrabold text-gradient-copper leading-none mb-2">
                                        {item.despues}
                                    </p>
                                    <p className="text-xs text-[#CBD5E1] leading-snug">{item.despuesDetalle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
