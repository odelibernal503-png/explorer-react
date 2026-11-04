# 🌸 🌍 Explorer App | React & TypeScript 🎀

> Aplicación web moderna que desarrollé como parte de mi **Segundo Examen Parcial** de la carrera de Ingeniería en Desarrollo de Software en la UNIVO. Diseñé esta plataforma para explorar de forma dinámica información de distintos países mediante búsqueda reactiva, filtros por región y una interfaz totalmente adaptable.

---

## 🌷🚀 Tecnologías y Herramientas que Utilizé
Para construir este proyecto, elegí un stack moderno enfocado en componentes reutilizables, tipado estricto y una excelente experiencia de usuario:

* **React 18+** utilizando componentes funcionales y gestión de estado con `useState`.
* **TypeScript** para asegurar un tipado robusto tanto en las props y eventos como en las estructuras de datos (`Country`).
* **Tailwind CSS v4** para diseñar una interfaz adaptable, moderna y limpia.
* **Vite** como empaquetador y entorno de desarrollo de alto rendimiento.
* **pnpm** como mi gestor de paquetes principal.

---

## ✨💖 Características Principales
* **Búsqueda Reactiva:** Implementé un filtrado en tiempo real por nombre de país que se conecta directamente al estado de la aplicación.
* **Filtro por Región:** Diseñé un selector controlado para aislar regiones geográficas específicas (*Africa, Americas, Asia, Europe, Oceania*).
* **Componentes Controlados y Estado Compartido:** Estructuré la arquitectura para que el estado global resida en el componente padre (`App.tsx`) y se comunique hacia los componentes hijos (`SearchBar`, `RegionFilter`) mediante *callbacks* fuertemente tipados.
* **Atomic Design:** Organicé los componentes de manera modular siguiendo los principios de Atomic Design (átomos, moléculas y organismos como `CountryGrid`, `CountryCard`, `Header`).
* **Manejo de Estados Vacíos:** Añadí un contador dinámico de resultados en tiempo real y una vista de "Sin coincidencias" amigable que incluye un botón para restablecer los filtros de inmediato.
* **Diseño Adaptativo (Responsive):** La interfaz se adapta de manera fluida desde pantallas móviles hasta monitores de escritorio (mostrando hasta 4 tarjetas por fila).

---

## 📦 🌸 Instalación y Ejecución Local

Si deseas clonar y probar el proyecto en tu máquina local, solo sigue estos pasos:

1. **Clona el repositorio:**
   git clone [https://github.com/odelibernal503-png/explorer-react.git](https://github.com/odelibernal503-png/explorer-react.git)

   Entra al directorio del proyecto: cd explorer-react

   Instalar las dependencias: pnpm install

   Inicia el servidor de desarrollo: pnpm run dev
 
   Abrir el navegador favorito y entrar a http://localhost:5173

   explorer-react/
├── src/
│   ├── components/
│   │   ├── atoms/         # Componentes base e independientes
│   │   ├── molecules/     # Componentes compuestos
│   │   └── organisms/     # Organismos complejos (Header, CountryGrid, SearchBar, RegionFilter)
│   ├── data/              # Datos de demostración (countries-demo.ts)
│   ├── types/             # Interfaces y tipos de TypeScript (country.ts)
│   ├── utils/             # Lógica y funciones de filtrado (filter.ts)
│   ├── App.tsx            # Componente principal y gestión del estado global
│   └── main.tsx           # Punto de entrada de la aplicación
├── public/                # Recursos estáticos
├── README.md              # Documentación y descripción del proyecto
└── package.json           # Dependencias y scripts de configuración

## 👩‍💻:✨🌸🎀Autoría
Proyecto desarrollado y programado con dedicación por Jekssy Odeli Bernal Montesinos — Estudiante de Ingeniería en Desarrollo de Software en la Universidad de Oriente (UNIVO).
