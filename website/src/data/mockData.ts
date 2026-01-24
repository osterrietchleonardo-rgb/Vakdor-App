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
        id: '4',
        title: 'El Fin del Lead Perdido: Cómo el Seguimiento Perpetuo con IA te Garantiza un 20% Más de Visitas',
        meta_description: 'Descubrí por qué el 42% de los leads mueren por falta de seguimiento y cómo la IA de Vakdor puede garantizarte un 20% más de visitas agendadas.',
        category: 'Automatización',
        read_time_minutes: 25,
        published_at: '2026-01-24T10:00:00Z',
        slug: 'fin-del-lead-perdido-seguimiento-perpetuo-ia',
        featured_image_url: '',
        created_at: '2026-01-24T10:00:00Z',
        updated_at: '2026-01-24T10:00:00Z',
        author: 'Equipo Vakdor',
        content: `
## 1. Introducción: La Hemorragia Silenciosa en la Era de la Abundancia

En el ecosistema inmobiliario actual, existe una paradoja que define la existencia del Asesor Comercial de Alto Rendimiento (Top Producer). Vivimos en la era de la mayor abundancia de datos en la historia de la humanidad; los portales inmobiliarios, las campañas de Meta Ads y las estrategias de SEO generan un torrente constante de nombres, números de teléfono y correos electrónicos. Sin embargo, esta abundancia se ha convertido, para muchos, en una **maldición operativa**.

La industria enfrenta una hemorragia silenciosa, no por falta de oportunidades, sino por la incapacidad fisiológica y logística de procesarlas a la velocidad que exige el consumidor moderno.

El "asesino silencioso" de tu facturación anual, aquel parásito que devora lentamente tu potencial de comisiones y erosiona tu calidad de vida, no es la fluctuación de las tasas de interés, ni la falta de inventario, ni siquiera la incertidumbre económica macroglobal. El verdadero enemigo es el **Agotamiento del Seguimiento (Follow-up Burnout)** y la ineficiencia estructural del procesamiento humano de leads.

Como Asesor Top, conocés la sensación visceral que acompaña a este fenómeno. Tu teléfono vibra con un nuevo lead a las 7:30 PM de un martes. Quizás estás cenando con tu familia, o en el gimnasio, o cerrando los detalles finales de una escrituración compleja con un cliente VIP. Tu instinto profesional, afilado por años de experiencia y seminarios de ventas, te grita que tenés una **"Ventana de Oro"** crítica para responder. Sabés que si no actuás en los próximos cinco minutos, la probabilidad de contactar a ese prospecto se desploma. Pero la vida sucede. No respondés inmediatamente. O respondés dos horas tarde. O enviás un mensaje genérico y olvidás programar el segundo contacto para tres días después.

Ese lead, por el cual tu agencia o vos mismo pagaron un Costo de Adquisición (CAC) cada vez más elevado —un promedio que ha subido un 50% en los últimos cinco años— no desaparece simplemente en el éter digital. Se transforma en un costo hundido. Se convierte en una estadística fría: pasa a formar parte del **42.83% de los leads que terminan "muertos" por falta de gestión adecuada**, o peor aún, se suma al 79% que nunca convierte simplemente porque el sistema humano de seguimiento tiene límites biológicos y cognitivos insuperables.

---

## 2. El Contexto del Dolor: ¿Por Qué los Asesores Top Están Perdiendo Dinero?

### 2.1 La Maldición del Volumen y el Costo de la Inacción

Para entender la magnitud del problema, debemos mirar los números fríos que gobiernan nuestra industria. Se proyecta que el mercado global de generación de leads alcanzará los **$15.55 mil millones de dólares para 2031**. Las agencias están inundadas de datos. Sin embargo, la conversión no acompaña este crecimiento exponencial.

Imaginá que cada lead en tu CRM tiene una etiqueta de precio física. Un lead de alta calidad puede costar hasta $60 o más solo en su adquisición inicial. Si generás 100 leads al mes, tenés $6,000 dólares de "inventario digital" sentado en tu base de datos. Si tu tasa de respuesta y seguimiento es promedio, estás ignorando o gestionando mal cerca del 80% de ese inventario.

> **El Dato Duro:** El 48% de los agentes inmobiliarios NO realiza ningún seguimiento después de la primera llamada.

Si perdés el 48% de tus leads por no llamar una segunda vez, estás tirando a la basura casi $3,000 dólares mensuales en inversión directa. Pero el costo real es mucho mayor: es el costo de oportunidad. Un lead perdido no es solo $60; es la comisión de $10,000 o $20,000 que ese lead representaba, más el valor vitalicio de sus referencias futuras.

### 2.2 La Tiranía de la Inmediatez: 5 Minutos o Muerte

El consumidor moderno ha sido entrenado por gigantes tecnológicos como Amazon, Uber y Netflix para esperar gratificación instantánea. La tolerancia a la espera se ha evaporado. En el sector inmobiliario, donde la decisión de compra es emocional y de alto riesgo, esta impaciencia es brutal.

| Métrica de Respuesta | Impacto en la Conversión |
|---|---|
| < 5 Minutos | **900% (9x)** más probabilidad de conversión que esperar 10 mins |
| > 30 Minutos | La probabilidad de contacto cae 100 veces |
| Primer en Responder | Se lleva el **78% de los negocios** cerrados |
| Tasa de Abandono | El interés cae drásticamente tras 1 hora |

**El problema operativo:** Es físicamente imposible para un ser humano garantizar una respuesta en 5 minutos las 24 horas del día, los 7 días de la semana. Los asesores duermen, comen, tienen reuniones de equipo y, lo más importante, están mostrando propiedades. Cada minuto que pasás mostrando un penthouse a un cliente VIP es un minuto en el que no estás respondiendo a tres nuevos leads que acaban de entrar por Instagram o tu portal web. Esa brecha operativa es donde mueren tus comisiones.

### 2.3 El Agotamiento (Burnout) del Seguimiento Manual

El seguimiento manual no solo es ineficiente desde el punto de vista financiero; es psicológicamente devastador. Investigaciones profundas indican que el **87% de los agentes abandonan la industria en los primeros cinco años**. Esto no se debe a la falta de talento o conocimiento del mercado, sino a un desbalance estructural en las actividades diarias.

Los agentes sufren de lo que se conoce como **"Muerte por mil distracciones"**. Pasan el día reaccionando a notificaciones, apagando fuegos administrativos y realizando tareas de bajo valor (como confirmar una cita o responder "¿cuántos baños tiene?") en lugar de realizar actividades de alto valor (negociar, cerrar).

El 80% de los agentes renuncia después del segundo contacto fallido, mientras que la estadística dice que el **80% de las ventas ocurren después del quinto contacto**. Ese "Valle de la Muerte" entre el intento 2 y el intento 5 es insuperable para la psique humana promedio sin asistencia. La IA, por el contrario, carece de ego. No se siente mal cuando un lead no contesta. No se frustra. Simplemente recalcula el mejor momento para intentar de nuevo, basándose en datos, no en emociones.

---

## 3. Anatomía del Lead Perdido: Donde Mueren los Negocios

### 3.1 La Curva de la Muerte del Contacto

La mayoría de los asesores operan con una estrategia de seguimiento intuitiva de "tres golpes": una llamada rápida, un mensaje de WhatsApp, y quizás un correo electrónico. Si no hay respuesta, el lead se etiqueta mental o digitalmente como "frío", "inactivo" o "pérdida de tiempo".

Sin embargo, los datos de comportamiento del consumidor cuentan una historia radicalmente diferente:

- **La Paradoja del 5to Intento:** El 80% de las transacciones exitosas se concretan después del quinto contacto de seguimiento.
- **El Abandono Prematuro:** La inmensa mayoría de los agentes (cerca del 90%) ha dejado de intentar contactar para el cuarto intento.

Existe un abismo operativo entre el esfuerzo que un humano está dispuesto a hacer y el esfuerzo que el mercado requiere para convertir. En ese abismo yacen millones de dólares en comisiones no reclamadas. **Vakdor App** está diseñada específicamente para construir un puente automatizado sobre este valle, ejecutando los intentos 3, 4, 5, 6, 7 y más, sin intervención humana directa.

### 3.2 El Lead "Zombie": Inactivo pero no Muerto

Un lead que no responde hoy no es necesariamente un lead que no quiere comprar. Esta es una distinción crucial que la IA entiende y el humano a menudo ignora. Un prospecto puede no responder por múltiples razones circunstanciales:

- Está en una reunión de trabajo.
- Está esperando una pre-aprobación bancaria.
- Solo está en fase de exploración temprana (Top of Funnel) y no quiere presión de ventas.
- Está abrumado por situaciones personales.

Un agente humano clasifica a este lead como "muerto" porque su memoria RAM mental es limitada; no puede recordar volver a llamar en 3 semanas. Un sistema de IA lo clasifica como **"Latente"** y activa un protocolo de Nurturing de Largo Plazo.

El valor monetario de un lead inactivo es cero solo si se abandona. Si se reactiva, su costo de adquisición es técnicamente cero (porque ya se pagó hace meses) y su margen de beneficio es máximo.

---

## 4. La Solución Visionaria: Seguimiento Perpetuo con IA

### 4.1 Definición de Seguimiento Perpetuo

El "Seguimiento Perpetuo" es un concepto que a menudo se malinterpreta como acoso o spam. Nada más lejos de la realidad. En el contexto de Vakdor App, el Seguimiento Perpetuo se define como la capacidad tecnológica de mantener un punto de contacto relevante, contextual y personalizado con un prospecto indefinidamente, hasta que este tome una de dos acciones binarias definitivas:

1. **Conversión:** El lead agenda una visita, pide una llamada o hace una oferta.
2. **Opt-out:** El lead pide explícitamente detener el contacto o indica que ya ha comprado.

Vakdor App operacionaliza este concepto utilizando **Modelos de Lenguaje Grande (LLMs)** avanzados y aprendizaje automático para entender no solo qué decir, sino cuándo y cómo decirlo, adaptándose al ritmo del cliente, no del agente.

### 4.2 La Magia Tecnológica: Cómo Funciona el Cerebro de Vakdor

Imaginá un ejército de asistentes virtuales que son clones de tu mejor versión comercial: la versión que nunca está cansada, que siempre es amable y que recuerda cada detalle. Estos asistentes digitales operan bajo un flujo de trabajo sofisticado:

1. **Monitoreo Omnisciente (24/7):** El sistema detecta la entrada del lead al milisegundo, ya sea desde un formulario de Facebook, un portal inmobiliario o tu sitio web.
2. **Análisis de Contexto Inmediato:** Antes de responder, la IA analiza la fuente. ¿Viene de un anuncio de "Inversión en Preventa"? ¿Viene buscando "Casa familiar con jardín"? Esto define el tono y el script inicial.
3. **La "Respuesta Cero":** El contacto se inicia en menos de 1 minuto a través del canal preferido del usuario (generalmente WhatsApp o SMS), aprovechando la ventana de máxima conversión.
4. **Clasificación de Intención (Lead Scoring):** La IA no solo saluda. Inicia una conversación de cualificación. Pregunta: "¿Buscás para vivir o para invertir?", "¿Cuál es tu rango de presupuesto?", "¿Tenés crédito aprobado?". Analiza las respuestas usando Procesamiento de Lenguaje Natural (NLP) para asignar un puntaje de calidad al lead.
5. **Persistencia Inteligente:** Si no hay respuesta, el sistema no se rinde. Espera intervalos estratégicos para volver a intentar, variando el mensaje, el canal y el contenido.

### 4.3 Comparativa: Seguimiento Manual vs. Seguimiento Perpetuo IA

| Variable Crítica | Seguimiento Manual | Seguimiento IA (Vakdor) |
|---|---|---|
| Tiempo de Respuesta | 2-4 horas (promedio) | **< 1 minuto** (garantizado) |
| Persistencia de Contacto | Abandona tras 1-2 intentos | **Infinita** (hasta respuesta o baja) |
| Capacidad de Carga | ~20-30 conversaciones activas | **Ilimitada** (miles en paralelo) |
| Tasa de Error y Olvido | Alta (estrés, olvidos) | **Cero** (consistencia perfecta) |
| Personalización a Escala | Disminuye con el volumen | **Hiper-personalizada** por datos |
| Horario de Disponibilidad | 40-50 horas/semana | **168 horas/semana** (24/7/365) |

Esta disparidad no es una cuestión de habilidad, es una cuestión de capacidad de procesamiento. Vakdor App nivela el campo de juego, permitiendo que un solo Asesor Top opere con la capacidad de respuesta de un Call Center de 50 personas.

---

## 5. La Promesa de Vakdor: +20% de Visitas Garantizadas

¿Cómo se traduce la tecnología en un número tan específico y audaz como un 20% más de visitas? No es magia, es matemática aplicada rigurosamente al embudo de ventas.

### 5.1 Eliminación de la Fuga en la Entrada (Speed-to-Lead)

Al garantizar una respuesta inmediata, capturamos ese 78% de las oportunidades de negocio que estadísticamente van al primer respondedor. Solo con esta acción, la base de leads cualificados que entran efectivamente al funnel aumenta drásticamente. Si antes contactabas al 40% de tus leads a tiempo, y ahora contactás al 100%, el volumen en la boca del embudo se duplica.

### 5.2 Reactivación de la Base de Datos "Dormida"

Muchos agentes tienen bases de datos históricas con miles de contactos "muertos". La IA de Vakdor puede ejecutar campañas de reactivación masiva ("Wake-up campaigns"), detectando señales de vida que un humano pasaría por alto. Estudios demuestran que el re-engagement automatizado puede recuperar entre un **3% y un 5% de leads perdidos** que se convierten en citas activas. Estos son leads "gratis" que ya poseés.

### 5.3 Clasificación y Filtrado Automático

Aquí reside el secreto de la eficiencia y la protección del tiempo del asesor. Vakdor no solo "habla"; cualifica.

- El sistema hace las preguntas duras que a veces el asesor evita o pospone: Presupuesto, Crédito Aprobado, Tiempos de Decisión.
- Si el lead no está cualificado, la IA lo mantiene en un ciclo de nutrición educativa automatizada, sin gastar ni un segundo de tu tiempo valioso.
- Si el lead muestra señales de ser "Hot" (Caliente) y listo para comprar, la IA empuja agresivamente hacia el objetivo final: la visita.

---

## 6. Ejemplos Reales: El Poder de la Automatización en Acción

### Caso 1: La Agencia y la Saturación de Mensajes

Una agencia inmobiliaria en un mercado competitivo enfrentaba un problema común: saturación. Recibían cientos de consultas, pero su tasa de abandono de formularios web era del 81%. Los agentes, abrumados, tardaban horas en responder.

**El Problema:** El "Lead Burn" era masivo. Los clientes, al no recibir respuesta inmediata, contactaban a otras 3 agencias.

**La Solución:** Implementaron un sistema de IA conversacional para manejar el primer contacto.

**Los Resultados:**
- Reducción del **60% en el tiempo de respuesta** promedio.
- Aumento del **35% en la tasa de conversión** de leads a cualificados.
- El sistema agendaba automáticamente las citas en los calendarios de los agentes.

### Caso 2: La "Resurrección" de Leads Dormidos

Un equipo top producer tenía una base de datos de 5,000 leads antiguos, considerados "basura".

**El Problema:** El equipo de ventas se negaba a llamar a estos leads antiguos porque la tasa de éxito era baja y desmoralizante.

**La Solución:** Se activó una campaña de "Seguimiento Perpetuo" automatizado con IA, enviando mensajes contextuales como "¿Seguís buscando casa en [Zona] o ya compraste?".

**El Resultado:** La IA procesó los 5,000 contactos. Identificó a 150 personas que respondieron "Sigo buscando". De esos 150, la IA agendó **30 visitas en una semana**.

> **Lección:** Un humano jamás habría hecho esas 5,000 llamadas. La IA lo hizo en minutos, generando 30 oportunidades de venta de la nada.

---

## 7. Rompiendo Objeciones: "La IA es Impersonal" y Otros Mitos

### Objeción 1: "La IA es impersonal y mis clientes quieren trato humano."

**Realidad:** Esta es la objeción más común. Sin embargo, la definición de "personal" ha cambiado.

Preguntate: ¿Qué es más "impersonal" para un cliente ansioso?
- A) ¿Recibir un mensaje de IA cálido, relevante y enviado 30 segundos después de su consulta?
- B) ¿Un silencio total de 6 horas porque estabas ocupado, seguido de un mensaje apresurado de "Hola, perdón la demora"?

El cliente moderno percibe la **velocidad y la relevancia como cuidado personal**. La IA no reemplaza tu empatía; la habilita. La IA maneja la logística y la inmediatez; vos manejás la relación emocional y la estrategia en la visita.

### Objeción 2: "Yo soy bueno en el seguimiento, no necesito ayuda."

**Realidad:** Sos humano. Tenés límites cognitivos biológicos. Podés ser excelente siguiendo a 10 o 15 clientes VIP, pero ¿qué pasa con los otros 150 leads en tu pipeline? La IA no te reemplaza; te escala. Te permite ser "bueno en el seguimiento" con 1,000 personas a la vez, sin perder la cordura.

### Objeción 3: "La tecnología es complicada y no tengo tiempo para configurarla."

**Realidad:** Vakdor App está diseñada bajo el principio **"Plug & Play"**. No necesitás ser un ingeniero de software. Se integra con tus fuentes de leads existentes (Portales, Facebook, Instagram) y empieza a trabajar. Tu nuevo "trabajo" no es programar, es recibir notificaciones de visitas confirmadas y atenderlas.

---

## 8. Visión de Futuro: El Asesor 4.0

El sector inmobiliario se está bifurcando ante nuestros ojos. Estamos presenciando una división darwiniana.

Por un lado, están los **Agentes Tradicionales**, abrumados, pegados al teléfono, perdiendo leads por saturación y compitiendo en una carrera hacia el fondo por precio y comisión.

Por otro lado, están los **Asesores Aumentados por IA (Asesor 4.0)**. Estos profesionales utilizan herramientas como Vakdor para lograr una omnipresencia digital. Tienen pipelines predecibles. Tienen fines de semana libres. Y, estadísticamente, cierran más ventas porque su embudo nunca gotea.

La IA no viene a quitarte el trabajo. Viene a quitarte el trabajo que odiás y el que hacés mal (el seguimiento repetitivo y administrativo), para potenciar el trabajo que amás (el trato humano, la negociación creativa y el cierre).

---

## 9. Preguntas Frecuentes (FAQ)

**P1: ¿Cómo garantiza exactamente Vakdor un 20% más de visitas?**

R: La garantía se basa en la matemática de la conversión. Al combinar la respuesta inmediata (que retiene al 78% de los leads que buscan atención rápida), el seguimiento perpetuo (que convierte al 80% de los leads que requieren más de 5 contactos) y la reactivación de leads dormidos, el volumen total de prospectos cualificados que llegan a la etapa de visita aumenta inevitablemente.

**P2: ¿La IA de Vakdor puede responder preguntas específicas sobre las propiedades?**

R: Sí. Vakdor se entrena con la información de tu inventario. Puede responder preguntas sobre precios, ubicación, número de habitaciones, amenidades y características básicas, filtrando a los curiosos de los compradores serios antes de pasarte el contacto listo para agendar.

**P3: ¿Perderé el control de mis clientes si uso IA?**

R: Al contrario, tendrás más control y visibilidad que nunca. Tendrás un tablero con visión total de cada conversación en tiempo real. Vos decidís cuándo intervenir. La IA actúa como tu "Appointment Setter" (agendador de citas) incansable, pero vos seguís siendo el dueño de la relación, la cara de la marca y el artífice del cierre.

---

## 10. Conclusión y Llamada a la Acción

El "Lead Perdido" es una opción, no un destino inevitable. La tecnología existe hoy para cerrar esa brecha y transformar tu negocio. El costo de ignorar la revolución de la IA en el seguimiento es mucho más alto que el costo de implementarla. Es el costo de tu relevancia futura en un mercado que no perdona la lentitud.

**No permitas que otro lead de $60 dólares (y $15,000 de comisión potencial) se enfríe en tu bandeja de entrada mientras dormís.** No permitas que la falta de tiempo limite tus ingresos. Es hora de dejar de trabajar en tu negocio y empezar a dejar que la tecnología trabaje para tu negocio.

**¿Listo para dejar de perseguir y empezar a recibir?**

Descubrí cómo tu propio "Asesor IA" puede llenar tu agenda de visitas cualificadas mientras te enfocás en lo que mejor sabés hacer: cerrar tratos.

*En la llamada estratégica, verás a Vakdor en acción y realizaremos una auditoría rápida para estimar cuántos leads estás perdiendo actualmente y cuánto dinero representa eso para tu bolsillo anual.*
        `,
        seo_keywords: ['Lead Perdido', 'Seguimiento IA', 'Automatización Inmobiliaria', 'Vakdor', 'Visitas Inmobiliarias', 'CRM Inmobiliario', 'Conversión de Leads', 'Follow-up Burnout', 'Speed to Lead'],
        views: 0,
        is_published: true
    },
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
