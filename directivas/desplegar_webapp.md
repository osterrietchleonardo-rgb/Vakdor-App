# DIRECTIVA: DESPLEGAR_WEBAPP

## 1. Objetivos y Alcance
- **Objetivo Principal:** Inicializar una aplicación web React moderna usando Vite y TailwindCSS en la carpeta `frontend/`.
- **Criterio de Éxito:** La carpeta `frontend/` existe, tiene `node_modules` instalados y el servidor de desarrollo puede arrancar.

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas
- **Directorio Destino:** `frontend`
- **Stack:** React, TailwindCSS, Lucide-React

### Salidas
- **Archivos de Configuración:** `tailwind.config.js`, `postcss.config.js`
- **Dependencias:** `package.json` actualizado y dependencias instaladas.

## 3. Flujo Lógico (Algoritmo)
1.  **Validación de Entorno:** Verificar que `npm` esté disponible.
2.  **Scaffolding (Vite):** Ejecutar `npm create vite@latest frontend -- --template react`.
3.  **Instalación de Dependencias Base:** Ejecutar `npm install` dentro de `frontend/`.
4.  **Configuración TailwindCSS:**
    - Instalar `tailwindcss`, `postcss`, `autoprefixer`.
    - Inicializar configuración (`npx tailwindcss init -p`).
    - **CRÍTICO:** Sobreescribir `tailwind.config.js` para incluir `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`.
5.  **Instalación de Extras:** Instalar `lucide-react`.

## 4. Herramientas y Librerías
- `subprocess` (Python) para comandos de shell.
- `npm` (Node Package Manager).

## 5. Restricciones y Casos Borde
- **Error:** La carpeta `frontend` ya existe. -> **Solución:** Validar antes y abortar o limpiar (preguntar al script, por defecto abortar si no está vacía).
- **Red:** Fallo en `npm install`. -> **Solución:** Reintentar o reportar error de conexión.

## 6. Historial de Aprendizaje
- [Inicio]: Definición inicial.
