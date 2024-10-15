import React from 'react';

export default function Products() {
  const products = [
    { name: 'Product 1', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Product 2', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Product 3', image: '/placeholder.svg?height=200&width=200' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-orange-500">Products</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">Rs.400/ -- Rs.500/-</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
