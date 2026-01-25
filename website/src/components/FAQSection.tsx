import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
    id?: string;
}

export function FAQSection({
    title = "Preguntas Frecuentes Estratégicas",
    subtitle = "Resolvemos tus dudas con transparencia radical.",
    items,
    id = "faq"
}: FAQSectionProps) {
    return (
        <section id={id} className="py-20 md:py-32 px-4 bg-[#020617] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#B87333]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#1E293B]/30 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="font-accent text-[#B87333] text-lg mb-4 uppercase tracking-widest">
                        Transparencia
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <Accordion items={items} />
            </div>
        </section>
    );
}
