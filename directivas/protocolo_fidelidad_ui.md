# Protocolo de Fidelidad UI y Restauración

**Objetivo:** Garantizar que, al restaurar versiones anteriores o sincronizar el entorno local con producción, NUNCA se altere el diseño, la copia o la estructura visual aprobada por el usuario, evitando errores de regresión o discrepancias.

## 1. Reglas de Oro (Inviolables)

1.  **La Captura es la Verdad:** Si el usuario provee una captura de pantalla ("screenshot"), esta es la especificación final. El código DEBE producir exactamente ese resultado visual (textos, alineación, colores).
2.  **Prohibido "Mejorar" sin Permiso:** Al arreglar un bug o restaurar una versión, NO cambies textos, NO modernices estilos y NO refactorices componentes a menos que sea la causa directa del error. Mantén la fidelidad al 100%.
3.  **Sincronización Total (Atomicidad):** Nunca subas una corrección parcial. Si cambias la interfaz de un componente (ej. props de `FAQSection`), DEBES subir simultáneamente todos los archivos que lo consumen.

## 2. Procedimiento de Restauración

### Paso 1: Verificación Local vs. Referencia
Antes de tocar una sola línea de código para "arreglar" algo visual:
-   **Localizar:** Encuentra el archivo local correspondiente.
-   **Comparar:** Abre el archivo y compáralo LINEA POR LINEA con la referencia (captura de pantalla o commit conocido como "bueno").
-   **Validar:** Si el local coincide con la captura, el problema NO es el código local, es la sincronización con el remoto.

### Paso 2: Validación de Dependencias (El "Caso FAQ")
Si tocas un componente reutilizable (ej. `Header`, `Footer`, `FAQSection`):
-   **Buscar Usos:** Identifica TODAS las páginas que usan ese componente.
-   **Unificar Interfaces:** Asegúrate de que si cambias `props` en el componente, actualizas TODAS las instancias.
-   **Push Atómico:** El `git push` debe incluir:
    -   El Componente modificado.
    -   TODAS las Páginas afectadas.

### Paso 3: Confirmación Visual
-   No asumas que compila.
-   No asumas que "debería verse igual".
-   Si es posible, renderiza o lee el código final para asegurar que textos críticos (Títulos, CTAs) son idénticos a la solicitud del usuario.

## 3. Trampas Comunes (Lecciones Aprendidas)

-   **El Error de la Prop Dispareja:** En el pasado, actualizamos páginas para usar una prop nueva (`items`) pero olvidamos subir el componente actualizado, rompiendo la build. **Solución:** Subir siempre el paquete completo.
-   **La "Mejora" Silenciosa:** Cambiar textos por versiones "mejores" durante un fix es inaceptable. El usuario espera que su contenido vuelva a ser el que era.

## 4. Checklist de Salida (Antes de confirmar al usuario)

- [ ] ¿El código local coincide con la captura del usuario?
- [ ] ¿He incluido TODOS los archivos interdependientes en el push?
- [ ] ¿He verificado que no introduje cambios de texto no solicitados?
