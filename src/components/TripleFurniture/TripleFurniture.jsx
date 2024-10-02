import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const FurnitureItem = ({ imageUrl, title }) => {
  return (
    <div className="relative w-[370px] h-[530px] overflow-hidden shadow-lg pt-28 gap-8">
      <img 
        className="w-full h-full object-cover"  
        src={imageUrl} 
        alt={title} 
      />
      <div className="absolute bottom-0 left-0 right-0  text-white py-9 px-6">
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <div className="absolute bottom-7 text-[25px] right-7 bg-white text-black rounded-full p-2">
      <HiArrowNarrowRight className='cursor-pointer' />

      </div>
    </div>
  );
}

const TripleFurniture = () => {
  const furnitureItems = [
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-1_380x.jpg?v=1703662419",
      title: "Pillow"
    },
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-2_380x.jpg?v=1703662419",
      title: "Armchair"
    },
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-3_380x.jpg?v=1703662419",
      title: "Side Table"
    }
  ];

  return (
    <div className="flex gap-6 justify-center">
      {furnitureItems.map((item, index) => (
        <FurnitureItem key={index} imageUrl={item.imageUrl} title={item.title} />
      ))}
    </div>
  );
}

export default TripleFurniture;
