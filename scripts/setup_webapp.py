import os
import subprocess
import sys

# CONFIGURACION
TARGET_DIR = "frontend"
TAILWIND_CONFIG_CONTENT = """/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
"""

def run_command(command, cwd=None):
    """Ejecuta un comando de shell y maneja errores."""
    print(f"[CMD] {command} (en {cwd or '.'})")
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            cwd=cwd, 
            check=True, 
            stdout=subprocess.PIPE, 
            stderr=subprocess.PIPE,
            text=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"[ERROR] Falló el comando: {command}")
        print(f"[STDERR] {e.stderr}")
        sys.exit(1)

def main():
    print("=== INICIANDO DESPLIEGUE DE WEBAPP ===")
    
    # 1. Validación de Entorno
    # (Asumimos npm instalado por el usuario, pero podríamos chequear version)
    
    # 2. Scaffolding (Vite)
    if os.path.exists(TARGET_DIR):
        print(f"[WARN] El directorio {TARGET_DIR} ya existe. Saltando creación de proyecto (asumiendo existente).")
    else:
        print("[INFO] Creando proyecto Vite...")
        # Usamos --template react para obtener un proyecto React limpio
        run_command(f"npm create vite@latest {TARGET_DIR} -- --template react")

    # 3. Instalación de Dependencias Base
    print("[INFO] Instalando dependencias base...")
    # Usamos shell=True y cwd correcto
    run_command("npm install", cwd=TARGET_DIR)

    # 4. Configuración TailwindCSS
    print("[INFO] Configurando TailwindCSS...")
    run_command("npm install -D tailwindcss postcss autoprefixer", cwd=TARGET_DIR)
    
    # Solo init si no existe config
    if not os.path.exists(os.path.join(TARGET_DIR, "tailwind.config.js")):
        run_command("npx tailwindcss init -p", cwd=TARGET_DIR)
    
    # Reescribir tailwind.config.js
    config_path = os.path.join(TARGET_DIR, "tailwind.config.js")
    with open(config_path, "w") as f:
        f.write(TAILWIND_CONFIG_CONTENT)
    print("[INFO] tailwind.config.js actualizado.")

    # 5. Instalación de Extras
    print("[INFO] Instalando librerías adicionales (lucide-react)...")
    run_command("npm install lucide-react", cwd=TARGET_DIR)

    print("=== DESPLIEGUE COMPLETADO EXITOSAMENTE ===")
    print(f"Listo para empezar. Ejecuta: cd {TARGET_DIR} && npm run dev")

if __name__ == "__main__":
    main()
