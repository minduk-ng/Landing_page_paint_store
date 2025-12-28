import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

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
  const [minInput, setMinInput] = useState(priceRange[0].toString());
  const [maxInput, setMaxInput] = useState(priceRange[1].toString());

  const handleMinChange = (value: string) => {
    setMinInput(value);
    const num = parseInt(value) || 0;
    if (num <= priceRange[1]) {
      onPriceRangeChange([num, priceRange[1]]);
    }
  };

  const handleMaxChange = (value: string) => {
    setMaxInput(value);
    const num = parseInt(value) || 1000000;
    if (num >= priceRange[0]) {
      onPriceRangeChange([priceRange[0], num]);
    }
  };

  const handleMinSlider = (value: string) => {
    const num = parseInt(value);
    if (num <= priceRange[1]) {
      onPriceRangeChange([num, priceRange[1]]);
      setMinInput(num.toString());
    }
  };

  const handleMaxSlider = (value: string) => {
    const num = parseInt(value);
    if (num >= priceRange[0]) {
      onPriceRangeChange([priceRange[0], num]);
      setMaxInput(num.toString());
    }
  };

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

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Price Range</label>

            <div className="space-y-2">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="50000"
                  value={priceRange[0]}
                  onChange={(e) => handleMinSlider(e.target.value)}
                  className="absolute w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer accent-blue-600 pointer-events-none z-5"
                  style={{
                    zIndex: priceRange[0] > 500000 ? 5 : 3,
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="50000"
                  value={priceRange[1]}
                  onChange={(e) => handleMaxSlider(e.target.value)}
                  className="absolute w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer accent-blue-600 pointer-events-none z-4"
                  style={{
                    zIndex: priceRange[1] < 500000 ? 5 : 4,
                  }}
                />
                <div className="relative h-2 bg-gray-200 rounded-lg mt-1">
                  <div
                    className="absolute h-2 bg-blue-600 rounded-lg"
                    style={{
                      left: `${(priceRange[0] / 1000000) * 100}%`,
                      right: `${100 - (priceRange[1] / 1000000) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-gray-500">Min</label>
                <input
                  type="number"
                  value={minInput}
                  onChange={(e) => handleMinChange(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                  max="1000000"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Max</label>
                <input
                  type="number"
                  value={maxInput}
                  onChange={(e) => handleMaxChange(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1000000"
                  min="0"
                  max="1000000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
