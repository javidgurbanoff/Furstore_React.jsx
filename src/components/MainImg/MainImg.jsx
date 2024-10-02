import React from 'react';

const HomePage = () => {
  return (
    <div className="relative w-[1170px] h-[624px] flex items-center justify-center ml-[160px]">
      <img 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover" 
        src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-2_1512x.jpg?v=1703750459" 
        alt="Background" 
      />

      <div className="relative z-10 flex flex-col items-center text-center bg-opacity-60 mt-[-260px]">
  <div className='flex gap-7 mb-6'>
    <a href="/" className="text-[18px] text-[#000000]">OTHER PAGES</a>
    <a href="/" className="text-[18px] text-[#000000]">BLOG</a>
  </div>

  <h1 className="text-[35px] font-normal text-[#000000] mb-6">
    DISCOVER EXCEPTIONAL FURNITURE <br /> DESIGNS FOR EVERY STYLE
  </h1>
  
  <div className="text-[18px] text-[#666666] mb-8">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </div>

  <button className="bg-[#0a5d5d] text-white px-7 py-3 text-[16px] hover:bg-[#084d4d] transition-colors mb-7">
    Learn More
  </button>
</div>

    </div>
  );
};

export default HomePage;
