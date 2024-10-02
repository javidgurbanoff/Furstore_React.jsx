import React from 'react';

const Subscribe = () => {
  return (
    <div className="relative w-full h-[400px]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-8.jpg?v=1703662419"
        alt="Subscribe Background"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-[#000000]">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-2">
          Subscribe to Our Newsletter
        </h2>
        
        <p className="text-[16px] md:text-[18px] mb-4 max-w-[600px] text-center">
          Be the first to know about new collections and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row items-center w-full max-w-[600px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full px-4 py-3 text-gray-900"
          />
          <button className="bg-[#0a5d5d] ml-5 text-white px-6 py-3 w-full md:w-auto hover:bg-[#084d4d] transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
