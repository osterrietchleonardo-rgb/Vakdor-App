# DIRECTIVA: SUBIR_A_GITHUB

## 1. Objetivos y Alcance
- **Objetivo Principal:** Subir el código del proyecto actual a un nuevo repositorio de GitHub.
- **Caso Especial:** El entorno local NO tiene `git` instalado. Se utilizará la herramienta MCP `push_files`.
- **Criterio de Éxito:** El código está visible en GitHub en el repositorio creado.

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas
- **Directorio Raíz:** `.` (Directorio actual de trabajo)
- **Ignorar:** `node_modules`, `.env`, `.git`, `dist`, `build`, `__pycache__`, `.DS_Store`.

### Salidas
- **JSON Intermedio:** `.tmp/files_to_upload.json` que contiene una lista de objetos `{ "path": "path/relativo", "content": "contenido_texto" }` (o similar, optimizado para el agente).

## 3. Flujo Lógico (Algoritmo)
1.  **Preparación de Datos (Python):**
    - Recorrer recursivamente el directorio de trabajo.
    - Filtrar carpetas y archivos ignorados.
    - Leer el contenido de archivos de texto (utf-8).
    - Omitir archivos binarios por ahora (o manejarlos si es crítico, pero `push_files` toma strings).
    - Guardar el resultado en `.tmp/files_to_upload.json`.
2.  **Creación de Repo (Agente/MCP):**
    - Usar `create_repository` para crear el repo remoto.
3.  **Subida (Agente/MCP):**
    - Leer `.tmp/files_to_upload.json`.
    - Llamar a `push_files` con los datos.

## 4. Herramientas y Librerías
- `Python` (os, json, pathspec o similar para ignores simples).
- `github-mcp-server` (create_repository, push_files).

## 5. Restricciones y Casos Borde
- **Límite de tamaño:** Si el JSON es muy grande, dividir en chunks para varias llamadas a `push_files` (Agente debe gestionar esto).
- **Archivos Binarios:** `push_files` suele esperar texto. Si hay imágenes, podrían corromperse si se tratan como texto. *Nota: En esta iteración, omitir binarios o advertir.*
- **Secretos:** NUNCA subir `.env`.

## 6. Historial de Aprendizaje
- [Inicio]: Definición.
