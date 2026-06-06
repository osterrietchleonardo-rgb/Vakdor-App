
import os

content = r'''
// --- COMPONENTS ---

const Header = () => (
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

const ChatBubble = ({ message }) => {
  const isAi = message.sender === 'ai';
  
  return (
    <div className={`flex w-full mb-2 ${isAi ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`relative max-w-[85%] md:max-w-[90%] p-2 rounded-lg shadow-sm text-sm ${
          isAi ? 'bg-white rounded-tl-none' : 'bg-[#dcf8c6] rounded-tr-none'
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
             {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
          {!isAi && <CheckCheck size={12} className="text-blue-500 md:w-3.5 md:h-3.5" />}
        </div>
      </div>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex w-full mb-2 justify-start">
    <div className="bg-white p-2 md:p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 w-14 md:w-16">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  </div>
);

const WhatsAppInput = () => (
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

const ProspectCard = ({ data, isActive = false }) => (
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
'''

with open('frontend/src/App.jsx', 'a', encoding='utf-8') as f:
    f.write(content)
