import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ user, handleLogout }) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="h-8 w-8 text-orange-500" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Groco</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Categories</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Review</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Blogs</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="h-6 w-6 text-gray-600" />
          <ShoppingCart className="h-6 w-6 text-gray-600" />
          <User className="h-6 w-6 text-gray-600" />
          <div className="flex items-center ml-4">
            <span className="text-gray-600 font-bold mr-2">Welcome, {user?.username}</span>
            <button
              onClick={handleLogout}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
