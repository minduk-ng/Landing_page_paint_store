import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterSection from './components/FilterSection';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import QuickViewModal from './components/QuickViewModal';
import CheckoutModal from './components/CheckoutModal';
import ProfilePage from './components/ProfilePage';
import OrderHistoryPage from './components/OrderHistoryPage';
import ChangePasswordPage from './components/ChangePasswordPage';
import { products, brands } from './data/products';
import { Product, CartItem, User } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<User | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'profile' | 'orders' | 'password'>('home');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [selectedType, setSelectedType] = useState('all');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesType = selectedType === 'all' || product.type === selectedType || product.type === 'both';

      return matchesSearch && matchesBrand && matchesPrice && matchesType;
    });
  }, [searchTerm, selectedBrand, priceRange, selectedType]);

  const addToCart = (product: Product, color: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedColor: color }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const changeColor = (productId: number, color: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, selectedColor: color } : item
      )
    );
  };

  const handleLogin = (email: string, password: string) => {
    setUser({
      id: 1,
      name: 'Nguyen Van A',
      email: email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (currentPage === 'profile' && user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
          onLoginClick={() => {
            setAuthMode('login');
            setIsAuthModalOpen(true);
          }}
          onRegisterClick={() => {
            setAuthMode('register');
            setIsAuthModalOpen(true);
          }}
          user={user}
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
        <ProfilePage user={user} onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'orders' && user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
          onLoginClick={() => {
            setAuthMode('login');
            setIsAuthModalOpen(true);
          }}
          onRegisterClick={() => {
            setAuthMode('register');
            setIsAuthModalOpen(true);
          }}
          user={user}
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
        <OrderHistoryPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'password' && user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
          onLoginClick={() => {
            setAuthMode('login');
            setIsAuthModalOpen(true);
          }}
          onRegisterClick={() => {
            setAuthMode('register');
            setIsAuthModalOpen(true);
          }}
          user={user}
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
        <ChangePasswordPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => {
          setAuthMode('login');
          setIsAuthModalOpen(true);
        }}
        onRegisterClick={() => {
          setAuthMode('register');
          setIsAuthModalOpen(true);
        }}
        user={user}
        onLogout={handleLogout}
        onNavigate={setCurrentPage}
      />

      <Hero />

      <FilterSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        brands={brands}
      />

      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Paint Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of high-quality paints from trusted brands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onChangeColor={changeColor}
        onCheckout={() => {
          if (!user) {
            setIsCartOpen(false);
            setAuthMode('login');
            setIsAuthModalOpen(true);
          } else {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }
        }}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
        onLogin={handleLogin}
      />

      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
        onAddToCart={addToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={cartTotal}
      />
    </div>
  );
}

export default App;
