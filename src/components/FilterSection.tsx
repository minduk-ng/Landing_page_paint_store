import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedBrand: string;
  onBrandChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  brands: string[];
}

export default function FilterSection({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  priceRange,
  onPriceRangeChange,
  selectedType,
  onTypeChange,
  brands
}: FilterSectionProps) {
  return (
    <section className="bg-white py-8 shadow-sm sticky top-[73px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Search & Filter</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand === 'All' ? 'All Brands' : brand}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="both">Universal</option>
          </select>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Price: {priceRange[0].toLocaleString()}₫ - {priceRange[1].toLocaleString()}₫
            </label>
            <input
              type="range"
              min="0"
              max="1000000"
              step="50000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([0, parseInt(e.target.value)])}
              className="w-full accent-blue-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
