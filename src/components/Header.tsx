import { useState } from 'react';
import { ShoppingCart, User, Menu, X, Palette } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  user: UserType | null;
  onLogout: () => void;
}

export default function Header({
  cartItemCount,
  onCartClick,
  onLoginClick,
  onRegisterClick,
  user,
  onLogout
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ColorPro</h1>
              <p className="text-xs text-gray-500">Premium Paint Store</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</a>
            <a href="#palette" className="text-gray-700 hover:text-blue-600 font-medium transition">Color Palette</a>
            <a href="#promotions" className="text-gray-700 hover:text-blue-600 font-medium transition">Promotions</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="hidden md:block text-sm font-medium">{user.name}</span>
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a>
                    <a href="#orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Order History</a>
                    <a href="#password" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Change Password</a>
                    <hr className="my-2" />
                    <button
                      onClick={onLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={onLoginClick}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Login
                </button>
                <button
                  onClick={onRegisterClick}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition"
                >
                  Register
                </button>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#palette" className="text-gray-700 hover:text-blue-600 font-medium">Color Palette</a>
              <a href="#promotions" className="text-gray-700 hover:text-blue-600 font-medium">Promotions</a>
              {!user && (
                <div className="flex flex-col space-y-2 pt-2">
                  <button
                    onClick={onLoginClick}
                    className="px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={onRegisterClick}
                    className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium"
                  >
                    Register
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

