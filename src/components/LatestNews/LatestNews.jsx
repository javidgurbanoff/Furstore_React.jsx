import React from 'react';

const LatestNews = () => {
  const newsItems = [
    {
      date: 'OCT 22, 2023',
      title: 'PELLENESQUE NUNC CONDENTUM',
      description:
        'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...',
      imageUrl: 'https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-10_380x.jpg?v=1695010636',
    },
    {
      date: 'OCT 22, 2023',
      title: 'ALIQUAM VITAE MAXIMUS JUSTO',
      description:
        'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...',
      imageUrl: 'https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-9_380x.jpg?v=1695010612',
    },
    {
      date: 'SEP 18, 2023',
      title: 'NULLAM CONSECTETUR LACUS NEC',
      description:
        'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...',
      imageUrl: 'https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-12_380x.jpg?v=1695010714',
    },
  ];

  return (
    <div className="latest-news-section py-10">
  <h2 className="text-center text-[40px] font-normal">Latest News</h2>
  <p className="text-center text-gray-500 mb-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
  </p>

  <div className="flex flex-wrap  justify-center gap-9 px-4">
    {newsItems.map((item, index) => (
      <div key={index} className="news-item w-[370px]">
        <img src={item.imageUrl} alt={item.title} className="w-[370px] h-[222px] mb-4" />
        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <a href="#" className="text-blue-500 hover:underline">
          Read more →
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default LatestNews;
