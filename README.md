# Explorer App - Sesión 25

## Avance de la sesión
En esta sesión migramos la aplicación a React utilizando la metodología de **Atomic Design** y TypeScript, asegurando un tipado estricto de las interfaces.

## Documentación de Componentes
**CountryGrid**
* **¿Qué hace?** Se encarga de renderizar la cuadrícula completa de tarjetas de países. Utiliza el método `.map()` para iterar sobre la lista de datos y generar dinámicamente un componente `CountryCard` por cada elemento.
* **¿Qué recibe por props?** Recibe un arreglo de objetos `Country` llamado `countries` y una función callback llamada `onSelect` que se propaga a cada tarjeta hija.

Verificar que compile sin errores (Build): pnpm run build

para ejecutar: pnpm run dev

