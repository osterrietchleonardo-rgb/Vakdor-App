# SOP: Integración de Blog con Supabase

Este documento describe el procedimiento estándar para mantener y expandir la integración del blog con Supabase en el proyecto Vakdor.

## Arquitectura

- **Base de Datos**: Tabla `blog_posts` en el esquema `public`.
- **Cliente**: `@supabase/supabase-js` configurado en `website/src/lib/supabase.ts`.
- **Tipos**: Autocreados/Manuales en `website/src/types/supabase.ts`.
- **Capa de Servicio**: Funciones en `website/src/lib/blog.ts` para abstraer las llamadas a Supabase.

## Procedimiento de Actualización

1.  **Esquema de BD**: Si se cambia la tabla en Supabase, actualizar `website/supabase/schema.sql` para mantener registro del esquema.
2.  **Tipos**: Actualizar `Database` en `website/src/types/supabase.ts` para reflejar el nuevo esquema.
3.  **Servicios**: Añadir funciones en `website/src/lib/blog.ts` si se requieren nuevas consultas (filtros, búsquedas, etc.).
4.  **Componentes**: Consumir las funciones de servicio en los Server Components de Next.js.

## Restricciones y Casos Borde

-   **Manejo de Errores**: Siempre implementar un `try/catch` o verificar si `data` es nulo para usar el `FALLBACK_POSTS` definido en la página del blog. Esto evita que el sitio se caiga si Supabase está inactivo.
-   **Seguridad (RLS)**: Las políticas de RLS deben permitir lectura pública solo si `is_published` es true.
-   **Performance**: Usar selectores específicos si la tabla crece mucho (aunque por ahora `*` es aceptable).

## Solución de Problemas

-   **Error 401/403**: Revisar políticas de RLS o validez de la `ANON_KEY`.
-   **Posts no aparecen**: Asegurarse de que `is_published` sea `true` y `published_at` sea una fecha válida (no futura para filtros comunes).
