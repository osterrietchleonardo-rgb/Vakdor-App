
import os

content = r'''import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, Mic, Phone, Video, MoreVertical, ArrowLeft, Camera, Paperclip, 
  CheckCheck, Play, Pause, RotateCcw, MessageSquare, ShieldCheck, 
  UserCheck, Calendar, Search, Database, TrendingUp, DollarSign, 
  MapPin, PhoneCall, AlertCircle, ChevronRight, Zap
} from 'lucide-react';

// --- DATA & ASSETS ---

const AVATAR_URL = "https://api.dicebear.com/7.x/bottts/svg?seed=AureFlow&backgroundColor=10b981";
const IMAGE_PROP_1 = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop";
const IMAGE_PROP_2 = "https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&w=800&auto=format&fit=crop";

// --- SCRIPT DE VENTAS (CHAT HUMANIZADO) ---
const SALES_SCRIPT = [
  {
    id: 1,
    sender: 'user',
    text: "Hola, vi un anuncio en Instagram sobre departamentos en Palermo. ¿Me das info?",
    type: 'text',
    delay: 1000,
    actionLabel: "Inicio de conversación"
  },
  {
    id: 2,
    sender: 'ai',
    text: "Hola, gracias por escribirnos.",
    type: 'text',
    delay: 1000,
    actionLabel: "Respuesta Inmediata"
  },
  {
    id: 2.1,
    sender: 'ai',
    text: "Soy AureFlow, del equipo comercial.",
    type: 'text',
    delay: 1200,
    actionLabel: "Presentación"
  },
  {
    id: 2.2,
    sender: 'ai',
    text: "Palermo es una zona excelente. Para buscarte lo mejor, contame...",
    type: 'text',
    delay: 1500,
    actionLabel: "Contexto"
  },
  {
    id: 2.3,
    sender: 'ai',
    text: "¿La búsqueda es para vivir o para inversión?",
    type: 'text',
    delay: 1000,
    actionLabel: "Perfilado (Pregunta Clave)"
  },
  {
    id: 3,
    sender: 'user',
    text: "Es para vivir con mi pareja. Buscamos mudarnos pronto.",
    type: 'text',
    delay: 2000,
    actionLabel: "Respuesta del Cliente"
  },
  {
    id: 4,
    sender: 'ai',
    text: "Qué buena noticia, felicitaciones por el paso.",
    type: 'text',
    delay: 1500,
    actionLabel: "Empatía"
  },
  {
    id: 4.1,
    sender: 'ai',
    text: "Para filtrar solo lo que realmente les sirva, decime qué rango de inversión están manejando aprox.",
    type: 'text',
    delay: 2000,
    actionLabel: "Filtro de Presupuesto"
  },
  {
    id: 4.2,
    sender: 'ai',
    text: "¿Y cuántos ambientes necesitan para estar cómodos?",
    type: 'text',
    delay: 1500,
    actionLabel: "Filtro de Tipología"
  },
  {
    id: 5,
    sender: 'user',
    text: "Gracias. Mira, hasta 190k nos estiramos. Necesitamos 3 ambientes o 2 muy grandes con balcón.",
    type: 'text',
    delay: 2500,
    actionLabel: "Datos Clave"
  },
  {
    id: 6,
    sender: 'ai',
    text: "Clarísimo.",
    type: 'text',
    delay: 1000,
    actionLabel: "Confirmación de lectura"
  },
  {
    id: 6.1,
    sender: 'ai',
    text: "Basado en eso, tengo dos opciones que acaban de entrar y creo que pueden ir muy bien con lo que buscan.",
    type: 'text',
    delay: 1800,
    actionLabel: "Análisis de Inventario"
  },
  {
    id: 6.2,
    sender: 'ai',
    text: "Fijate estas opciones:",
    type: 'text',
    delay: 1000,
    actionLabel: "Presentación"
  },
  {
    id: 7,
    sender: 'ai',
    type: 'carousel',
    cards: [
      {
        title: "Palermo Hollywood - Smart Unit",
        price: "USD 175,000",
        image: IMAGE_PROP_1,
        specs: "3 Amb • 72m² • Amenities Full",
        desc: "Piscina, Gym y cerca de todo el polo gastronómico."
      },
      {
        title: "Palermo Soho - Terraza Propia",
        price: "USD 188,000",
        image: IMAGE_PROP_2,
        specs: "2 Amb XL • 85m² • Parrilla",
        desc: "Último piso, súper luminoso y silencioso. Apto crédito."
      }
    ],
    delay: 1500,
    actionLabel: "Recomendación Doble"
  },
  {
    id: 8,
    sender: 'ai',
    text: "¿Cuál de las dos te gusta más para coordinar una visita?",
    type: 'text',
    delay: 2000,
    actionLabel: "Llamada a la Acción"
  },
  {
    id: 9,
    sender: 'user',
    text: "La de Soho con terraza me encantó. ¿Se puede ver esta semana?",
    type: 'text',
    delay: 2500,
    actionLabel: "Interés del Cliente"
  },
  {
    id: 10,
    sender: 'ai',
    text: "Excelente elección. La terraza es un gran punto a favor.",
    type: 'text',
    delay: 1500,
    actionLabel: "Validación"
  },
  {
    id: 10.1,
    sender: 'ai',
    text: "Antes de pasarte los horarios, ¿me dejás tu nombre y un celular?",
    type: 'text',
    delay: 1500,
    actionLabel: "Solicitud de Datos"
  },
  {
    id: 10.2,
    sender: 'ai',
    text: "Así te envío la ficha técnica completa por WhatsApp para que la tengas a mano.",
    type: 'text',
    delay: 1500,
    actionLabel: "Justificación (Valor)"
  },
  {
    id: 11,
    sender: 'user',
    text: "Sí, soy Martín. 11 5555-9999",
    type: 'text',
    delay: 2000,
    actionLabel: "Entrega de Contacto"
  },
  {
    id: 12,
    sender: 'ai',
    text: "Gracias Martín, ya te agendo.",
    type: 'text',
    delay: 1500,
    actionLabel: "Confirmación Datos"
  },
  {
    id: 12.1,
    sender: 'ai',
    text: "Para verla tengo disponibilidad este Jueves a las 16hs o Viernes a las 10hs.",
    type: 'text',
    delay: 2000,
    actionLabel: "Opciones de Agenda"
  },
  {
    id: 12.2,
    sender: 'ai',
    text: "¿Qué te queda más cómodo?",
    type: 'text',
    delay: 1000,
    actionLabel: "Cierre"
  },
  {
    id: 13,
    sender: 'user',
    text: "Viernes a las 10 perfecto.",
    type: 'text',
    delay: 1500,
    actionLabel: "Confirmación Cliente"
  },
  {
    id: 14,
    sender: 'ai',
    text: "Listo, agendado Viernes 10hs en Gorriti 5500.",
    type: 'text',
    delay: 1500,
    actionLabel: "Agenda Confirmada"
  },
  {
    id: 14.1,
    sender: 'ai',
    text: "Te acabo de mandar la ubicación y la ficha a tu WhatsApp.",
    type: 'text',
    delay: 1500,
    actionLabel: "Nutrición Post-Cierre"
  },
  {
    id: 14.2,
    sender: 'ai',
    text: "Nos vemos ahí.",
    type: 'text',
    delay: 1000,
    actionLabel: "Despedida"
  }
];

// --- DATA DE PROSPECCIÓN (SCRAPING) ---
const PROSPECTS = [
  {
    id: "57069290",
    titulo: "Casa 4 amb Liniers - Dueño Directo",
    precio: "USD 180.000",
    ubicacion: "Liniers, CABA",
    specs: "4 amb • 3 dorm • 175 m²",
    vendedor: "Victoria Simonini",
    telefono: "541141871193",
    origen: "ZonaProp",
    status: "new",
    match: 95
  },
  {
    id: "57908968",
    titulo: "Casa 2 Plantas Coghlan - Jardín 100m²",
    precio: "USD 420.000",
    ubicacion: "Coghlan, CABA",
    specs: "4 dorm • 230 m² • 2 cocheras",
    vendedor: "Sergio Ursino",
    telefono: "542241670965",
    origen: "ArgenProp",
    status: "contacted",
    match: 88
  },
  {
    id: "57843783",
    titulo: "PH Doble Entrada Colegiales",
    precio: "USD 310.000",
    ubicacion: "Colegiales, CABA",
    specs: "7 amb • 197 m² • Terraza",
    vendedor: "Heidi Kuk",
    telefono: "1164240669",
    origen: "MercadoLibre",
    status: "new",
    match: 92
  }
];

// --- SCRIPT DE CAPTACIÓN (CONTACTO CON DUEÑO DIRECTO) ---
const CAPTACION_SCRIPT = [
  {
    id: 1,
    sender: 'ai',
    text: "Hola Victoria, buen día.",
    type: 'text',
    delay: 1000
  },
  {
    id: 1.1,
    sender: 'ai',
    text: "Te escribo porque vi tu propiedad en Liniers publicada en ZonaProp.",
    type: 'text',
    delay: 1500
  },
  {
    id: 1.2,
    sender: 'ai',
    text: "Soy del equipo de AureFlow Real Estate y nos especializamos en la zona.",
    type: 'text',
    delay: 1800
  },
  {
    id: 2,
    sender: 'user',
    text: "Hola, sí. La estoy vendiendo por mi cuenta.",
    type: 'text',
    delay: 2000
  },
  {
    id: 3,
    sender: 'ai',
    text: "Perfecto. Entiendo que preferís manejarlo vos misma.",
    type: 'text',
    delay: 1500
  },
  {
    id: 3.1,
    sender: 'ai',
    text: "Te contacto porque trabajamos con muchos inversores activos buscando en esa zona y tu propiedad podría interesarles.",
    type: 'text',
    delay: 2000
  },
  {
    id: 3.2,
    sender: 'ai',
    text: "¿Te gustaría que te hagamos una tasación profesional sin costo y te conectemos con compradores calificados?",
    type: 'text',
    delay: 2000
  },
  {
    id: 4,
    sender: 'user',
    text: "Me interesa. ¿Cómo es el proceso?",
    type: 'text',
    delay: 2000
  },
  {
    id: 5,
    sender: 'ai',
    text: "Es muy simple:",
    type: 'text',
    delay: 1000
  },
  {
    id: 5.1,
    sender: 'ai',
    text: "1. Coordinamos una visita rápida para hacer la tasación\n2. Te presentamos un informe con el precio de mercado real\n3. Empezamos a mostrársela a nuestra base de compradores",
    type: 'text',
    delay: 2000
  },
  {
    id: 5.2,
    sender: 'ai',
    text: "Vos mantenés el control total. Solo cobramos comisión si cerramos la venta.",
    type: 'text',
    delay: 1800
  },
  {
    id: 6,
    sender: 'user',
    text: "Suena bien. ¿Cuándo podrían venir?",
    type: 'text',
    delay: 1800
  },
  {
    id: 7,
    sender: 'ai',
    text: "Genial. Tengo disponibilidad este Martes a las 15hs o Miércoles a las 11hs.",
    type: 'text',
    delay: 1500
  },
  {
    id: 7.1,
    sender: 'ai',
    text: "¿Cuál te queda mejor?",
    type: 'text',
    delay: 1000
  },
  {
    id: 8,
    sender: 'user',
    text: "Miércoles 11hs perfecto. La dirección es Av. Rivadavia 11200.",
    type: 'text',
    delay: 2000
  },
  {
    id: 9,
    sender: 'ai',
    text: "Perfecto Victoria, agendado para el Miércoles 11hs.",
    type: 'text',
    delay: 1500
  },
  {
    id: 9.1,
    sender: 'ai',
    text: "Te voy a mandar un recordatorio el día anterior.",
    type: 'text',
    delay: 1500
  },
  {
    id: 9.2,
    sender: 'ai',
    text: "Cualquier cosa me escribís por acá. Gracias!",
    type: 'text',
    delay: 1200
  },
  {
    id: 10,
    sender: 'user',
    text: "Muchas gracias a vos. Nos vemos el miércoles!",
    type: 'text',
    delay: 1500
  }
];

'''

with open('frontend/src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
