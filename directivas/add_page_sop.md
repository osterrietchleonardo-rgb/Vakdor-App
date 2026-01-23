# Directiva: Añadir Nueva Página en Next.js (Router App)

## Objetivo
Añadir una nueva ruta/página al proyecto Next.js (`website/src/app`) asegurando consistencia visual y técnica.

## Pasos

1.  **Crear Directorio:**
    *   Crear carpeta en `website/src/app/{slug}`.
2.  **Crear `page.tsx`:**
    *   Debe exportar `default function Page()`.
    *   Debe incluir `Header` y `Footer` (a menos que el layout ya los incluya, pero en este proyecto se suelen importar manualmente en page.tsx para control de z-index/animaciones, verificar `layout.tsx`).
    *   *Nota:* En este proyecto `layout.tsx` NO incluye Header/Footer globalmente en el body, se incluyen en cada página para efectos visuales (verificar `page.tsx` home).
3.  **Componentes Client Side:**
    *   Si requiere interactividad (hooks, window, scripts externos), crear componente en `src/components/{feature}/` con `'use client';` y importarlo en la página.
    *   **NO** poner lógica compleja o `useEffect` directamente en `page.tsx` si se puede evitar para mantener SSR donde sea posible (aunque si la página es puramente interactiva, se puede marcar la página como client, pero es mejor separar).
4.  **Estilos:**
    *   Usar TailwindCSS.
    *   Seguir Design System: `text-[#B87333]` (cobre), `bg-[#020617]` (midnight), fuentes `font-display` y `font-accent`.
5.  **Metadata:**
    *   Exportar objeto `metadata` si es Server Component.

## Trampas Conocidas (Knowledge Base)
*   **Scripts Externos (Cal.com, etc):** No usar `<script>` tags planos en el JSX devuelto por el componente si bloquean hidratación o parpadean. Usar `useEffect` para inyectar scripts o librerías de terceros de forma controlada, o componentes dedicados.
*   **Z-Index:** El Footer necesita `z-50` explícito para no quedar detrás de partículas.
*   **Rutas:** Los nombres de carpeta definen la URL.
