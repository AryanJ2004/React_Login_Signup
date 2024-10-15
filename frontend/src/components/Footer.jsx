import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShoppingCart className="h-6 w-6 text-orange-500 mr-2" />
                Groco
              </h3>
              <p className="text-gray-600 mb-4">Description goes here.....</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <p className="text-gray-600 mb-2">+123 456 7890</p>
              <p className="text-gray-600 mb-2">+111 222 3333</p>
              <p className="text-gray-600 mb-2">name@email.com</p>
              <p className="text-gray-600">India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Review</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe For Latest Updates</p>
              <form className="flex">
                <input type="email" placeholder="your email" className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300">Subscribe</button>
              </form>
              <div className="mt-4 flex space-x-2">
                <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Discover" className="h-8" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>Created By Aryan | All Rights Reserved</p>
          </div>
        </div>
    </footer>
  );
}
