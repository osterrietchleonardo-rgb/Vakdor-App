import React from 'react';
import { CheckCheck } from 'lucide-react';

export const ChatBubble = ({ message }) => {
    const isAi = message.sender === 'ai';

    return (
        <div className={`flex w-full mb-2 ${isAi ? 'justify-start' : 'justify-end'}`}>
            <div
                className={`relative max-w-[85%] md:max-w-[90%] p-2 rounded-lg shadow-sm text-sm ${isAi ? 'bg-white rounded-tl-none' : 'bg-[#dcf8c6] rounded-tr-none'
                    }`}
            >
                {message.type === 'text' && (
                    <p className="whitespace-pre-wrap text-gray-800 leading-relaxed text-[13px] md:text-[15px]">
                        {message.text.split('**').map((part, i) =>
                            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                        )}
                    </p>
                )}

                {message.type === 'carousel' && (
                    <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
                        {message.cards.map((card, idx) => (
                            <div key={idx} className="min-w-[200px] md:min-w-[220px] bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm snap-center">
                                <div className="h-24 md:h-28 bg-gray-200 relative">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 bg-green-600 text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold">
                                        Recomendado
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h4 className="font-bold text-gray-800 text-xs md:text-sm truncate">{card.title}</h4>
                                    <p className="text-emerald-600 font-bold text-xs md:text-sm">{card.price}</p>
                                    <p className="text-[10px] md:text-[11px] text-gray-500 mt-1">{card.specs}</p>
                                    <button className="mt-2 w-full bg-[#f0f2f5] hover:bg-gray-200 text-gray-700 text-[9px] md:text-[10px] font-bold py-1.5 rounded border border-gray-300">
                                        VER FICHA
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-end items-center gap-1 mt-1 opacity-60">
                    <span className="text-[9px] md:text-[10px]">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {!isAi && <CheckCheck size={12} className="text-blue-500 md:w-3.5 md:h-3.5" />}
                </div>
            </div>
        </div>
    );
};
