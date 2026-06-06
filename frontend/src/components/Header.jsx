import React from 'react';
import { ArrowLeft, Video, Phone, MoreVertical } from 'lucide-react';
import { AVATAR_URL } from '../data/mockData';

export const Header = () => (
    <div className="bg-[#075e54] text-white p-3 flex items-center justify-between shadow-md z-10 sticky top-0">
        <div className="flex items-center gap-2 md:gap-3">
            <ArrowLeft size={18} className="cursor-pointer md:w-5 md:h-5" />
            <div className="relative">
                <img src={AVATAR_URL} alt="Bot" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white p-1" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-[#075e54]"></div>
            </div>
            <div className="leading-tight">
                <h3 className="font-semibold text-sm md:text-base">AureFlow IA</h3>
                <p className="text-[10px] md:text-xs text-green-100 opacity-90">en línea</p>
            </div>
        </div>
        <div className="flex gap-3 md:gap-4 pr-2">
            <Video size={18} className="md:w-5 md:h-5" />
            <Phone size={18} className="md:w-5 md:h-5" />
            <MoreVertical size={18} className="md:w-5 md:h-5" />
        </div>
    </div>
);
