import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className={`border-b border-[#B87333]/20 last:border-0 transition-all duration-300 ${isOpen ? 'bg-[#B87333]/5' : ''}`}>
            <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-[#B87333]' : 'text-[#F8FAFC] group-hover:text-[#B87333]'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#B87333] text-white rotate-180' : 'bg-[#1E293B] text-[#B87333] group-hover:bg-[#B87333] group-hover:text-white'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-[#94A3B8] leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#0F172A]/80 backdrop-blur-sm border border-[#B87333]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(184,115,51,0.15)]">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
}
