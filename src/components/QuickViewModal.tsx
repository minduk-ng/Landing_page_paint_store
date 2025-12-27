import { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product, color: string) => void;
}

export default function QuickViewModal({ isOpen, onClose, product, onAddToCart }: QuickViewModalProps) {
  const [selectedColor, setSelectedColor] = useState('');

  if (!isOpen || !product) return null;

  if (selectedColor === '' && product) {
    setSelectedColor(product.colors[0]);
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-gray-100 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 font-medium uppercase mb-2">{product.brand}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600">
                  {product.price.toLocaleString()}₫
                </div>
                {product.originalPrice && (
                  <div className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()}₫
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition ${
                      selectedColor === color ? 'border-blue-600 scale-110' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-gray-500">Coverage</div>
                  <div className="font-semibold">{product.coverage}</div>
                </div>
                <div>
                  <div className="text-gray-500">Finish</div>
                  <div className="font-semibold">{product.finish}</div>
                </div>
                <div>
                  <div className="text-gray-500">Dry Time</div>
                  <div className="font-semibold">{product.dryTime}</div>
                </div>
                <div>
                  <div className="text-gray-500">Type</div>
                  <div className="font-semibold capitalize">{product.type}</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onAddToCart(product, selectedColor);
                onClose();
              }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
