import React from 'react';
import { Paperclip, Camera, Mic } from 'lucide-react';

export const WhatsAppInput = () => (
    <div className="bg-[#f0f2f5] px-2 py-2 flex items-center gap-2">
        <div className="p-1.5 md:p-2 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-full">
            <div className="flex gap-2 md:gap-4">
                <span className="hidden sm:block text-sm md:text-base">😊</span>
                <Paperclip size={18} className="md:w-5 md:h-5" />
            </div>
        </div>
        <div className="flex-1 bg-white rounded-lg px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-500 shadow-sm border border-gray-100 flex justify-between items-center">
            <span>Escribe un mensaje...</span>
            <Camera size={16} className="text-gray-400 md:w-5 md:h-5" />
        </div>
        <div className="p-2 md:p-3 bg-[#00a884] text-white rounded-full shadow-md cursor-pointer hover:bg-[#008f6f]">
            <Mic size={16} className="md:w-5 md:h-5" />
        </div>
    </div>
);
