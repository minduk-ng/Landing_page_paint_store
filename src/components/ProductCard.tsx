import { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            SALE
          </div>
        )}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <div className="bg-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Quick View</span>
          </div>
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div className="text-xs text-gray-500 font-medium uppercase">{product.brand}</div>
        <h3 className="font-bold text-gray-900 text-lg line-clamp-2">{product.name}</h3>

        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition ${
                selectedColor === color ? 'border-blue-600 scale-110' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {product.price.toLocaleString()}₫
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()}₫
              </div>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product, selectedColor)}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{product.finish}</span>
          <span>{product.coverage}</span>
        </div>
      </div>
    </div>
  );
}
