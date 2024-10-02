import React from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div 
      className='w-full h-[94px] flex items-center justify-between font-jost'
      style={{ paddingLeft: '10.5rem', paddingRight: '12.5rem' }} 
    >
      <div className="flex items-center">
        <img 
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160" 
          alt="Logo" 
          className='cursor-pointer'
        />
      </div>

      <div className='text-[16px] flex space-x-6 gap-8'>
        <a className='py-2.5 px-7.5 text-[#0a5d5d] font-bold' href="/">HOME</a>
        <a className='py-2.5 px-7.5' href="/">COLLECTION</a>
        <a className='py-2.5 px-7.5' href="/">PRODUCTS</a>
      </div>

      <div className='flex items-center gap-6'>
        <HiMiniMagnifyingGlass className='cursor-pointer' size={22} />
        <BsPerson className=' cursor-pointer' size={22} />
        <div className="relative">
          <PiShoppingCartSimpleBold  className='cursor-pointer' size={22} />
          <span className="absolute -top-2 -right-2 bg-[#0a5d5d] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </div>
        <RxHamburgerMenu className='cursor-pointer' size={22} />
      </div>
    </div>
  );
};

export default Header;
