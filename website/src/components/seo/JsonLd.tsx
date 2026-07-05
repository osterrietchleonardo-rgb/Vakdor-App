import React from 'react';

/**
 * Renderiza un bloque de datos estructurados (schema.org) en formato JSON-LD.
 * Sirve tanto para SEO (resultados enriquecidos de Google) como para GEO
 * (que ChatGPT, Perplexity y Gemini entiendan y citen el sitio).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
    return (
        <script
            type="application/ld+json"
            // El contenido es propio (no viene del usuario), así que es seguro.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
