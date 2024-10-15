import React from 'react';

export default function Banner() {
  return (
    <section className="bg-gray-200 py-20" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Fresh And <span className="text-orange-500">Organic</span> Products
        </h1>
        <p className="text-gray-600 mb-8">Description goes here.....</p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">Shop Now</button>
      </div>
    </section>
  );
}
