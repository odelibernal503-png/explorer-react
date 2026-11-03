import type { Country } from '../types/country';

// Función para obtener todos los países (se usará con fetch en la Sesión 25)
export async function fetchCountries(): Promise<Country[]> {
  try {
    // Ejemplo de llamada a la API o archivo local JSON
    const response = await fetch('https://restcountries.com/v3.1/all'); // o tu ruta local JSON ej: './data/countries.json'
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos de los países');
    }

    const data = await response.json();
    
    // Aquí puedes mapear o retornar los datos según la estructura de tu interface Country
    return data;
  } catch (error) {
    console.error('Error en la API de países:', error);
    return [];
  }
}