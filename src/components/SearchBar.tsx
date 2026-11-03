interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="bg-white px-4 py-3 rounded-full shadow-sm flex-grow flex items-center gap-3 border border-gray-300 focus-within:ring-2 focus-within:ring-[#f9a03f] focus-within:outline-none transition-all duration-200">
      <svg className="size-4 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <label htmlFor="country-search" className="sr-only">Buscar un país...</label>
      <input
        id="country-search"
        type="text"
        placeholder="Buscar un país..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-transparent focus:outline-none text-xs text-gray-700 placeholder-gray-400"
      />
    </div>
  )
}