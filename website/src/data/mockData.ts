import type { BlogPost } from '@/types/supabase';

// Types
export interface ScrapedProperty {
    id: number;
    source: string;
    address: string;
    price: string;
    owner: string;
    status: string;
    image: string;
}

export interface AdvisorStat {
    id: number;
    name: string;
    leads: number;
    conversion: string;
    active: boolean;
    avatar: string;
}

export interface ChatMessage {
    id: number;
    sender: 'ai' | 'user';
    text?: string;
    type: 'text' | 'carousel';
    delay: number;
    cards?: Array<{
        image: string;
        title: string;
        price: string;
        specs: string;
    }>;
}

// Image URLs
export const IMAGE_PROP_1 = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop";
export const IMAGE_PROP_2 = "https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&w=800&auto=format&fit=crop";
export const IMAGE_PROP_3 = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop";

// Scraped Properties
export const SCRAPED_PROPERTIES: ScrapedProperty[] = [
    {
        id: 1,
        source: 'ZonaProp',
        address: 'Av. Libertador 4500, Palermo',
        price: 'USD 280.000',
        owner: 'Dueño Directo',
        status: 'scraping',
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&fit=crop"
    },
    {
        id: 2,
        source: 'MercadoLibre',
        address: 'Gorriti 5500, Palermo Hollywood',
        price: 'USD 195.000',
        owner: 'Dueño Directo',
        status: 'pending',
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&fit=crop"
    },
    {
        id: 3,
        source: 'ArgenProp',
        address: 'Bullrich 200, Palermo',
        price: 'USD 320.000',
        owner: 'Dueño Directo',
        status: 'pending',
        image: "https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&w=400&fit=crop"
    }
];

// Advisor Stats
export const ADVISOR_STATS: AdvisorStat[] = [
    { id: 1, name: 'Martín G.', leads: 145, conversion: '3.2%', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Martin' },
    { id: 2, name: 'Sofía L.', leads: 132, conversion: '4.1%', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia' },
    { id: 3, name: 'Lucas P.', leads: 98, conversion: '2.8%', active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas' },
    { id: 4, name: 'Valentina R.', leads: 156, conversion: '3.9%', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina' },
    { id: 5, name: 'Diego M.', leads: 112, conversion: '3.5%', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diego' },
    { id: 6, name: 'Camila S.', leads: 89, conversion: '2.5%', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila' },
];

// Sales Script for Chat Demo
// Sales Script for Chat Demo
export const SALES_SCRIPT: ChatMessage[] = [
    {
        id: 1,
        sender: 'user',
        text: "Hola, vi un anuncio en Instagram sobre departamentos en Palermo. ¿Me das info?",
        type: 'text',
        delay: 1000
    },
    {
        id: 2,
        sender: 'ai',
        text: "Hola, gracias por escribirme. Soy AureFlow, la IA del equipo comercial. 🧠",
        type: 'text',
        delay: 1000
    },
    {
        id: 2.1,
        sender: 'ai',
        text: "Para buscarte lo mejor en nuestra base, contame... ¿Buscas para vivir o para inversión?",
        type: 'text',
        delay: 1500
    },
    {
        id: 3,
        sender: 'user',
        text: "Es para vivir con mi pareja.",
        type: 'text',
        delay: 2000
    },
    {
        id: 4,
        sender: 'ai',
        text: "¡Excelente! Felicitaciones. 🙌",
        type: 'text',
        delay: 1500
    },
    {
        id: 4.1,
        sender: 'ai',
        text: "¿Qué rango de inversión están manejando aprox y qué comodidades son SI o SI? (ej. balcón, cochera)",
        type: 'text',
        delay: 2000
    },
    {
        id: 5,
        sender: 'user',
        text: "Hasta 190k. Necesitamos 3 ambientes con balcón si o si.",
        type: 'text',
        delay: 2500
    },
    {
        id: 6,
        sender: 'ai',
        text: "Clarísimo. Analizando las 3 mejores opciones disponibles hoy en Palermo para ese perfil... 🔎",
        type: 'text',
        delay: 1500
    },
    {
        id: 7,
        sender: 'ai',
        text: "",
        type: 'carousel',
        delay: 1500,
        cards: [
            {
                image: IMAGE_PROP_1,
                title: "Depto 3 amb - Av. Santa Fe",
                price: "USD 185.000",
                specs: "80m² · 2 baños · Balcón"
            },
            {
                image: IMAGE_PROP_2,
                title: "Depto 2 amb - Thames",
                price: "USD 175.000",
                specs: "65m² · Luminoso · Cochera"
            },
            {
                image: IMAGE_PROP_3,
                title: "Depto 3 amb - Gorriti",
                price: "USD 190.000",
                specs: "75m² · 2 baños · Terraza"
            }
        ]
    },
    {
        id: 8,
        sender: 'ai',
        text: "Ahí tenés las fichas. ¿Cuál te gustaría visitar esta semana?",
        type: 'text',
        delay: 2500
    },
    {
        id: 9,
        sender: 'user',
        text: "La de Av Santa Fe me gustó. ¿Se puede ver el viernes?",
        type: 'text',
        delay: 3000
    },
    {
        id: 10,
        sender: 'ai',
        text: "Sí, tenemos disponibilidad a las 15hs o a las 17hs. ¿Cuál preferís?",
        type: 'text',
        delay: 1500
    },
    {
        id: 11,
        sender: 'user',
        text: "A las 17hs está perfecto.",
        type: 'text',
        delay: 1500
    },
    {
        id: 12,
        sender: 'ai',
        text: "Agendado para el Viernes 17hs! ✅",
        type: 'text',
        delay: 1200
    },
    {
        id: 13,
        sender: 'ai',
        text: "Para confirmar, ¿me pasas tu nombre completo y mail para enviarte la ficha técnica?",
        type: 'text',
        delay: 1500
    },
    {
        id: 14,
        sender: 'user',
        text: "Juan Pérez, juanperez@gmail.com",
        type: 'text',
        delay: 2000
    },
    {
        id: 15,
        sender: 'ai',
        text: "Listo Juan. Ya te lo envié. ¡Nos vemos el viernes!",
        type: 'text',
        delay: 1500
    }
];

// Follow-up Script (Reactivation)
export const FOLLOW_UP_SCRIPT: ChatMessage[] = [
    {
        id: 1,
        sender: 'ai',
        text: "Hola Carlos! 👋 Soy AureFlow. Me sale que hace unos meses buscabas depto en Palermo.",
        type: 'text',
        delay: 1000
    },
    {
        id: 2,
        sender: 'ai',
        text: "Te escribo porque acaba de entrar este re oportunidad y me acordé de vos. Mirá:",
        type: 'text',
        delay: 1500
    },
    {
        id: 3,
        sender: 'ai',
        text: "",
        type: 'carousel',
        delay: 1500,
        cards: [
            {
                image: IMAGE_PROP_1,
                title: "Oportunidad Reciclado - Charcas",
                price: "USD 168.000",
                specs: "72m² · Impecable · Balcón Terraza"
            }
        ]
    },
    {
        id: 4,
        sender: 'ai',
        text: "Bajó de precio ayer. ¿Te sirve que te mande la ficha completa antes de que se publique en ZonaProp?",
        type: 'text',
        delay: 2000
    },
    {
        id: 5,
        sender: 'user',
        text: "Hola! Sisi, mandamela porfa. ¿Es apto crédito?",
        type: 'text',
        delay: 3000
    },
    {
        id: 6,
        sender: 'ai',
        text: "Sí, es apto crédito! Te acabo de mandar el PDF con fotos y planos.",
        type: 'text',
        delay: 1500
    },
    {
        id: 7,
        sender: 'ai',
        text: "Como es una oportunidad caliente, estamos mostrando mañana a la tarde. ¿Te reservo un lugar?",
        type: 'text',
        delay: 1500
    },
    {
        id: 8,
        sender: 'user',
        text: "Dale, ¿qué horarios tenés?",
        type: 'text',
        delay: 2000
    },
    {
        id: 9,
        sender: 'ai',
        text: "Tengo libre 14:30 o 16:00.",
        type: 'text',
        delay: 1200
    },
    {
        id: 10,
        sender: 'user',
        text: "16:00 mejor.",
        type: 'text',
        delay: 1500
    },
    {
        id: 11,
        sender: 'ai',
        text: "Agendado Carlos para mañana 16hs. Te paso la dir exacta por mail. 📍",
        type: 'text',
        delay: 1500
    }
];

// Captacion Script (Inmobiliaria Page - Outbound to Owner)
export const CAPTACION_SCRIPT: ChatMessage[] = [
    {
        id: 1,
        sender: 'ai',
        text: "Hola Carlos 👋, soy el asistente virtual de [Tu Inmobiliaria]. Vi que tenés publicado tu depto de Belgrano en ZonaProp.",
        type: 'text',
        delay: 1000
    },
    {
        id: 2,
        sender: 'user',
        text: "Hola, sí. ¿Son de una inmobiliaria?",
        type: 'text',
        delay: 2000
    },
    {
        id: 3,
        sender: 'ai',
        text: "Exacto. No te quiero molestar, solo preguntarte: ¿Ya te ofrecieron una tasación real con datos de cierre de este mes?",
        type: 'text',
        delay: 1500
    },
    {
        id: 4,
        sender: 'ai',
        text: "Porque vemos que hay propiedades similares en tu cuadra que se vendieron un 10% por arriba de lo que pedís, pero otras por abajo. Depende mucho de si está reciclado.",
        type: 'text',
        delay: 2500
    },
    {
        id: 5,
        sender: 'user',
        text: "Nadie me tasó, puse el precio viendo otros avisos.",
        type: 'text',
        delay: 2500
    },
    {
        id: 6,
        sender: 'ai',
        text: "Entiendo perfecto. El problema de los portales es que muestran precios de lista, no de cierre. 📉",
        type: 'text',
        delay: 1500
    },
    {
        id: 7,
        sender: 'ai',
        text: "¿Te serviría que pase uno de nuestros tasadores esta semana a darte un valor real de mercado? Es 100% sin cargo y te dejamos el informe escrito.",
        type: 'text',
        delay: 2000
    },
    {
        id: 8,
        sender: 'user',
        text: "Mmm dale, me sirve para tener una referencia. ¿Cobran algo?",
        type: 'text',
        delay: 3000
    },
    {
        id: 9,
        sender: 'ai',
        text: "Cero. Es gratis. Si después te gusta cómo trabajamos, genial. Si no, te queda el informe de regalo. 🎁",
        type: 'text',
        delay: 1500
    },
    {
        id: 10,
        sender: 'ai',
        text: "¿Te queda bien este Jueves por la mañana o preferís a la tarde?",
        type: 'text',
        delay: 1500
    },
    {
        id: 11,
        sender: 'user',
        text: "Jueves a eso de las 10am puedo.",
        type: 'text',
        delay: 2000
    },
    {
        id: 12,
        sender: 'ai',
        text: "Listo Carlos. Agendado visita para Jueves 10am en punto. Te va a visitar Martín de nuestro equipo. 🤝",
        type: 'text',
        delay: 1500
    }
];

// CRM Mock Data
export const CRM_DATA = {
    contact: {
        name: "Carlos Ruiz",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
        email: "cruiz88@gmail.com",
        phone: "+54 9 11 3456-7890",
        location: "Palermo, CABA",
        status: "CALIENTE 🔥"
    },
    classification: {
        budget: "USD 160k - 180k",
        search: "Compra / Vivienda",
        urgency: "Alta (Mudanza < 2 meses)",
        zone: "Palermo Hollywood / Soho"
    },
    activityLogs: [
        { type: "whatsapp", text: "Inició conversación por anuncio IG", time: "10:45 AM" },
        { type: "bot", text: "IA cualificó: Presupuesto ok, Urgencia Alta", time: "10:47 AM" },
        { type: "system", text: "Match automático: 3 propiedades enviadas", time: "10:48 AM" },
        { type: "whatsapp", text: "Cliente pidió visita para Depto Charcas", time: "10:55 AM" },
        { type: "call", text: "Visita agendada: Martes 15hs", time: "11:05 AM" }
    ],
    propertyInterest: {
        title: "Depto 3 amb - Charcas",
        address: "Charcas 4500, Palermo",
        price: "USD 175.000",
        image: IMAGE_PROP_1
    },
    stats: {
        timeSaved: "45 min",
        actionsAutomated: 5
    }
};

// Fallback Blog Posts
export const FALLBACK_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Cómo Aumentar tus Visitas Inmobiliarias en un 20% con IA en 2026',
        meta_description: 'Descubrí las 5 estrategias que usan los asesores top para agendar más visitas sin trabajar más horas.',
        category: 'Productividad',
        read_time_minutes: 8,
        published_at: '2026-01-15T10:00:00Z',
        slug: 'aumentar-visitas-con-ia',
        featured_image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
        created_at: '2026-01-15T10:00:00Z',
        updated_at: '2026-01-15T10:00:00Z',
        author: 'Equipo Vakdor',
        content: `
## El Problema de Siempre: Muchos Leads, Pocas Visitas

La mayoría de los agentes inmobiliarios pasan horas respondiendo mensajes, pero su tasa de conversión a visitas presenciales sigue estancada. ¿Por qué? Porque **responder rápido no es suficiente; responder bien es la clave.**

En 2026, la Inteligencia Artificial ya no es una novedad, es una herramienta estándar. Pero pocos saben usarla para **filtrar y cualificar** antes de agendar.

## 1. Respuesta Inmediata 24/7 (La Regla de los 5 Minutos)

Estudios confirman que responder a un lead en los primeros 5 minutos aumenta las chances de conversión en un **400%**.

Un agente humano duerme. La IA no. Implementar un chatbot que salude, pregunte nombre y motivo de consulta al instante garantiza que ese lead "caliente" no se enfríe esperando al lunes.

## 2. Cualificación Automática: No Pierdas Tiempo en "Solo Mirando"

Tu tiempo vale oro. No podés mostrar propiedades a quien no tiene presupuesto o urgencia.

Configurá tu IA para hacer las 3 preguntas de oro antes de pasarte el contacto:
- *"¿Buscás para inversión o vivienda propia?"*
- *"¿Qué rango de presupuesto estás manejando?"*
- *"¿Para cuándo te gustaría mudarte?"*

Si las respuestas no encajan, la IA puede nutrirlos con emails automáticos hasta que estén listos.

## 3. Seguimiento Sin Vergüenza

El 80% de las ventas ocurren después del 5to contacto. La mayoría de los agentes abandona después del 2do.

La IA puede enviar mensajes de seguimiento personalizados: *"Hola Juan, vi que te gustó el dpto de Palermo. Entró uno similar hoy, ¿te paso fotos?"*. Esto reactiva conversaciones muertas sin que tengas que mover un dedo.

## 4. Agendamiento Directo en Tu Calendario

Olvidate del ping-pong de *"¿Podés el martes?" "No, mejor el jueves"*.

Tu asistente virtual envía un link a tu Calendly (o similar) solo a los leads cualificados. Te despertás y tenés la agenda llena de visitas reales.

## 5. Personalización a Escala

Nadie quiere hablar con un robot tonto. Las nuevas IAs entienden contexto. Si el cliente tiene perro, la IA destaca las propiedades con patio o cerca de parques. Ese detalle humano (aunque artificial) genera confianza inmediata.

### Conclusión

No necesitás trabajar 12 horas. Necesitás que tu tecnología trabaje las 24. Implementar estos sistemas hoy te pone 5 años adelante de tu competencia local.
        `,
        seo_keywords: ['Real Estate', 'IA', 'Productividad Inmobiliaria', 'Ventas'],
        views: 1240,
        is_published: true
    },
    {
        id: '2',
        title: 'El Cementerio de Leads: Cómo Recuperar Leads Inactivos con IA',
        meta_description: 'El 60% de tus leads están inactivos. Te mostramos cómo reactivarlos sin ser invasivo.',
        category: 'Ventas',
        read_time_minutes: 6,
        published_at: '2026-01-10T10:00:00Z',
        slug: 'recuperar-leads-inactivos',
        featured_image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop',
        created_at: '2026-01-10T10:00:00Z',
        updated_at: '2026-01-10T10:00:00Z',
        author: 'Equipo Vakdor',
        content: `
## ¿Cuánto Dinero Hay en tu Base de Datos "Muerta"?

Todo agente tiene esa lista de Excel o CRM llena de contactos que preguntaron hace 6 meses y "desaparecieron". Los llamas "leads fríos". Nosotros los llamamos **oportunidades dormidas**.

La realidad es que la gente no compra propiedades por impulso como zapatillas. El ciclo de decisión puede durar meses. Que no te contestaran en marzo no significa que no sigan buscando en octubre.

## La Estrategia de Reactivación "Sin Presión"

Nadie quiere recibir un *"¿Seguís buscando?"* seco y aburrido. Eso grita desesperación.

La IA nos permite hacer **Micro-Campañas de Reactivación** basadas en valor, no en insistencia.

### Paso 1: Segmentación Inteligente

No mandes lo mismo a todos. Pedile a tu IA que separe:
- Los que buscaban alquiler vs. venta.
- Los que buscaban 2 ambientes vs. casas.
- Los que tenían presupuesto alto vs. bajo.

### Paso 2: El Mensaje "Gatillo"

En lugar de preguntar, **ofrecé**.

*Ejemplo:*
*"Hola María, me acordé de vos porque acaba de entrar un 2 ambientes en Recoleta muy parecido a lo que buscabas hace unos meses. ¿Te interesa que te mande la ficha antes de publicarlo?"*

Este mensaje tiene una tasa de respuesta altísima porque:
1. Es personal ("me acordé de vos").
2. Es exclusivo ("antes de publicarlo").
3. Es relevante (coincide con su búsqueda anterior).

### Paso 3: Automatizar la Conversación

Si María responde "Sí, mandamelo", tu IA debe enviar la ficha al instante y preguntar *"¿Qué te parece el precio?"*. Si responde "Ya compré", la IA la felicita y la mueve a una lista de "Propietarios" para futuras campañas de venta.

## Resultados Esperados

Nuestros clientes que aplican esto recuperan entre un **15% y un 20%** de su base inactiva.

Si tenés 500 leads viejos, eso son **75 a 100 nuevas oportunidades** gratis. Sin pagar ads. Solo usando lo que ya tenés.
        `,
        seo_keywords: ['Leads', 'Recuperación de Clientes', 'Marketing Inmobiliario', 'CRM'],
        views: 890,
        is_published: true
    },
    {
        id: '3',
        title: 'Captación Automática de Propiedades: El Sistema 24/7',
        meta_description: 'Cómo las inmobiliarias top captan 5+ propiedades exclusivas al mes sin salir a buscar.',
        category: 'Captación',
        read_time_minutes: 10,
        published_at: '2026-01-05T10:00:00Z',
        slug: 'captacion-automatica-propiedades',
        featured_image_url: 'https://images.unsplash.com/photo-1560520653-9e0f0c5a86ae?q=80&w=1000&auto=format&fit=crop',
        created_at: '2026-01-05T10:00:00Z',
        updated_at: '2026-01-05T10:00:00Z',
        author: 'Equipo Vakdor',
        content: `
## El Santo Grial: Que los Dueños Te Busquen a Vos

El modelo tradicional de captación ("farming" manual, tocar timbres, llamar a carteles de "Dueño Vende") es agotador y cada vez menos efectivo.

Hoy, los dueños investigan en Google antes de elegir inmobiliaria. Si no aparecés ahí con una propuesta de valor clara, perdiste antes de empezar.

## El Embudo de Captación Automática

Hablemos de un sistema que atrae propietarios motivados.

### 1. El Gancho (Lead Magnet)

Nadie te va a dar sus datos porque sí. Ofrecé algo de valor real a cambio.
- *"Calculadora de Tasación Online Inmediata"* (la más efectiva).
- *"Guía: Los 7 Errores que te hacen perder dinero al vender tu casa"*.
- *"Informe de Precios del M2 en tu Barrio (Último Trimestre)"*.

### 2. La Landing Page de Alta Conversión

Mandás tráfico (Ads o Redes) a una página simple. Título claro, beneficio directo, formulario corto.

*Headline:* "¿Querés vender tu propiedad en Belgrano? Descubrí cuánto vale hoy en mercado real."

### 3. La Cualificación por IA

Cuando el dueño deja sus datos, no lo llames desesperado al segundo. Dejá que la IA inicie el chat.

*IA:* "Hola Carlos, recibimos los datos de tu propiedad en Av. Cabildo. Para afinar la tasación, ¿está refaccionada o original?"

Esto te permite filtrar:
- ¿Es el titular?
- ¿Tiene urgencia de venta?
- ¿Ya está trabajando con otra inmobiliaria?

### 4. La Reunión de "Cierre"

Solo cuando la IA detecta que es un prospecto serio, te propone agendar una tasación presencial.

Vos llegás a la casa de un dueño que:
- Ya conoce tu marca.
- Ya recibió valor de vos.
- Te está esperando.

## Conclusión

La captación automática no reemplaza tu experiencia tasando y negociando. Lo que hace es eliminar la "puerta fría" para que uses tu energía solo en cerrar exclusivas con dueños que ya quieren vender.
        `,
        seo_keywords: ['Captación', 'Propiedades', 'Marketing Digital', 'Tasaciones'],
        views: 1560,
        is_published: true
    },
];
