import React from 'react';

const FeaturedProducts = () => {
  const sofa = [
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/products/32_360x.jpg?v=1694678290",
      title: "Diamond Halo Stud Cum",
      price: "628$",
    },
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/products/21_360x.jpg?v=1694678180",
      title: "Diamond Halo Stud Chair",
      price: "728$",
    },
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/products/18_360x.jpg?v=1694678145",
      title: "Diamond Halo Stud Sofa",
      price: "828$",
    },
    {
      imageUrl: "https://vinova-furstore.myshopify.com/cdn/shop/products/12_360x.jpg?v=1694678190",
      title: "Diamond Halo Stud Table",
      price: "928$",
    }
  ];

  return (
    <div className='font-jost flex flex-col items-center pt-24'>
      <div className='text-center mb-8'>
        <p className='text-[40px] font-normal'>Featured Products</p>
        <p className='text-[16px] text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='flex flex-wrap justify-center'>
        {sofa.map((product, index) => (
          <div key={index} className='flex flex-col items-center m-4'>
            <img src={product.imageUrl} alt={product.title} className="w-[270px] h-[334px] cursor-pointer" />
            <h3 className='text-lg font-semibold mt-2'>{product.title}</h3>
            <p className='text-md text-gray-600'>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
