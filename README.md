# Explorer App 🌍 (Unidad 2 - Vanilla TypeScript)

## 📌 Propósito del Proyecto
Aplicación web modular desarrollada para explorar y consultar información detallada de países del mundo, construida para cumplir con los requerimientos académicos de la Unidad 2 utilizando arquitecturas limpias y Vanilla TypeScript.

## 🚀 Stack Tecnológico
- **Core:** TypeScript (Tipado estricto sin uso de `any`)
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Empaquetador:** Vite
- **Control de Versiones:** Git y GitHub (Etiquetado con `vanilla-u2`)

## 🛠️ Requisitos Previos y Comandos de Ejecución
1. **Node.js** instalado en el sistema.
2. Gestor de paquetes **pnpm** instalado globalmente.

Comandos para su ejecución local:
\`\`\`bash
# Instalar dependencias
pnpm install

# Iniciar el entorno de desarrollo local (Vite)
pnpm dev

# Compilar para producción
pnpm build
\`\`\`

## 📂 Estructura de Carpetas
- `src/api/`: Capa de consumo de datos asíncronos (`fetch`).
- `src/types/`: Contratos de interfaces tipadas.
- `src/utils/`: Funciones puras, utilerías y control de *debounce* (300 ms).
- `src/render/`: Manipulación dinámica del DOM y gestión de estados visuales.

## 🗄️ Fuente de Datos
- **API Rest Countries** (Consumo de endpoints públicos de países, regiones y capitales).

## ✨ Funcionalidades Clave
- **Filtros Combinados:** Búsqueda reactiva por texto integrada de manera simultánea con el selector de regiones.
- **Gestión de Estados:** Manejo visual para estados de carga, resultados vacíos y errores de red.
- **Accesibilidad Web:** Navegación optimizada por teclado mediante estados `focus-visible`.

## ⚠️ Limitaciones y Pendientes
- **Limitaciones:** Dependencia de la disponibilidad de la API externa de Rest Countries.
- **Pendientes:** Migración de componentes hacia React 18 en la siguiente fase de la Unidad 3.