import React from 'react'

interface RegionFilterProps {
  selectedRegion: string
  onRegionChange: (value: string) => void
}

export function RegionFilter({ selectedRegion, onRegionChange }: RegionFilterProps) {
  return (
    <div className="bg-white px-4 py-3 rounded-full shadow-sm w-full md:w-[200px] border border-gray-300 focus-within:ring-2 focus-within:ring-[#f9a03f] focus-within:outline-none transition-all duration-200">
      <label htmlFor="region-filter" className="sr-only">Todas las regiones</label>
      <select
        id="region-filter"
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="w-full bg-transparent focus:outline-none text-xs text-gray-700 cursor-pointer"
      >
        <option value="">Todas las regiones</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
      </select>
    </div>
  )
}