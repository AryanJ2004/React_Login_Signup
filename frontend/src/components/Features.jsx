import React from 'react';

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-orange-500">Features</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
              <img src="/placeholder.svg?height=200&width=200" alt="Feature" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Feature {item}</h3>
              <p className="text-gray-600 text-center">Description goes here.....</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
