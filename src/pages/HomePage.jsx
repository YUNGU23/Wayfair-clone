import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './HomePage.css';
import Banner from '../components/Banner';
import CardAD from '../components/CardAD';
import DealOfTheDay from '../components/DealOfTheDay';

const dummyProducts = [
  { id: 1, name: 'Comfy Sofa', price: 499.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Elegant Lamp', price: 79.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Dining Table', price: 299.99, image: 'https://via.placeholder.com/150' },
  // Add more dummy products as needed
];
const dummyCardAD1 = {
    title: "Big outdoor D-E-A-L-S that ship FAST",
    images: [
      "https://assets.wfcdn.com/im/53689809/scale-h521-w429%5Ecompr-r85/2745/274566922/default_name.jpg",
      "https://assets.wfcdn.com/im/91713843/scale-h521-w429%5Ecompr-r85/2745/274566926/default_name.jpg",
      "https://assets.wfcdn.com/im/69044272/scale-h521-w429%5Ecompr-r85/2745/274566934/default_name.jpg",
      "https://assets.wfcdn.com/im/76391635/scale-h521-w429%5Ecompr-r85/2745/274566920/default_name.jpg"
    ]
  };
  
  const dummyCardAD2 = {
    title: "Appliances that make every day easier",
    images: [
      "https://assets.wfcdn.com/im/15307739/scale-h523-w429%5Ecompr-r85/2841/284109201/default_name.jpg",
      "https://assets.wfcdn.com/im/64335603/scale-h523-w429%5Ecompr-r85/2841/284111871/default_name.jpg",
      "https://assets.wfcdn.com/im/03769875/scale-h523-w429%5Ecompr-r85/2841/284111877/default_name.jpg",
      "https://assets.wfcdn.com/im/71995850/scale-h523-w429%5Ecompr-r85/2841/284111847/default_name.jpg"
    ]
  };

  const dealsOfTheDay = [
    {
      id: 1,
      name: '6 - Drawer Dresser',
      price: 223.99,
      originalPrice: 257.99,
      image: 'https://assets.wfcdn.com/im/69267800/resize-h400-w400%5Ecompr-r85/2480/248004739/default_name.jpg',
      rating: 4,
      reviewCount: 142
    },
    {
      id: 2,
      name: 'Agriel Steel Adjustable Single Curtain Rod',
      price: 19.99,
      originalPrice: 35.99,
      image: 'https://assets.wfcdn.com/im/28150864/resize-h400-w400%5Ecompr-r85/1132/113254258/default_name.jpg',
      rating: 4.5,
      reviewCount: 2588
    },
    {
      id: 3,
      name: '12\'\' Medium Gel Memory Hybrid Mattress in a box',
      price: 184.99,
      originalPrice: 299.99,
      image: 'https://assets.wfcdn.com/im/45309007/resize-h400-w400%5Ecompr-r85/2761/276148947/default_name.jpg', 
      rating: 4.7,
      reviewCount: 214
    },
    {
      id: 4,
      name: 'Emonnie 62.9" Column Floor Lamp with Shelves, Real Solid Wood and Bulb Included',
      price: 36.99,
      originalPrice: 44.99,
      image: 'https://assets.wfcdn.com/im/70762054/resize-h400-w400%5Ecompr-r85/2691/269181325/default_name.jpg', 
      rating: 4.7,
      reviewCount: 178
    },
    {
      id: 5,
      name: 'Jahaira Round Coffee Table with 2-Tier Storage Shelves',
      price: 108.99,
      originalPrice: 124.99,
      image: 'https://assets.wfcdn.com/im/64178055/resize-h400-w400%5Ecompr-r85/2545/254500354/default_name.jpg', 
      rating: 4.7, 
      reviewCount: 332
    }
  ];

  const ProductLists = [
    {
      id: 6,
      name: 'Aimaan 5 Drawer 29.6"W Dresser',
      price: 151.99,
      originalPrice: 239.99,
      image: 'https://assets.wfcdn.com/im/11335858/resize-h400-w400%5Ecompr-r85/2441/244172058/default_name.jpg', 
      rating: 4.1,
      reviewCount: 1410
    },
    {
      id: 7,
      name: 'Allyannah 6 - Drawer Dresser',
      price: 169.99,
      originalPrice: 319.99,
      image: 'https://assets.wfcdn.com/im/82515517/resize-h400-w400%5Ecompr-r85/2612/261200230/default_name.jpg', 
      rating: 4.1,
      reviewCount: 3666
    },
    {
      id: 8,
      name: 'Gottman 6 - Drawer Dresser',
      price: 157.99,
      originalPrice: 213.99,
      image: 'https://assets.wfcdn.com/im/03917638/resize-h400-w400%5Ecompr-r85/2633/263316523/default_name.jpg', 
      rating: 5,
      reviewCount: 4
    },
    {
      id: 9,
      name: '6M Electric Curtain Tracks With Remote Control',
      price: 102.99,
      originalPrice: 125.99,
      image: 'https://assets.wfcdn.com/im/99267976/resize-h400-w400%5Ecompr-r85/2781/278191258/default_name.jpg', 
      rating: 5,
      reviewCount: 1
    },
    {
      id: 10,
      name: 'Colliers 4 - Drawer Dresser',
      price: 173.99,
      originalPrice: 199.99,
      image: 'https://assets.wfcdn.com/im/86399728/resize-h400-w400%5Ecompr-r85/2567/256734419/default_name.jpg', 
      rating: 4.5,
      reviewCount: 2
    }
  ]

  function HomePage() {
  const [currentDealIndex, setCurrentDealIndex] = useState(0);

  const showNextDeals = () => {
    setCurrentDealIndex((prevIndex) => (prevIndex + 5) % dealsOfTheDay.length);
  };

  return (
    <div className="home-page">
      <Banner />
      <CardAD title={dummyCardAD1.title} images={dummyCardAD1.images} />
      <CardAD title={dummyCardAD2.title} images={dummyCardAD2.images} />
      <img src="https://assets.wfcdn.com/im/74815840/resize-h454-w2000%5Ecompr-r85/2816/281693157/rest_%26_relaxation_build_a_bedroom_sanctuary__281693157.jpg" alt="ad" className="ad-banner"/>
      <section className="deals-of-the-day">
        <div className="section-header">
          <h2 className="dealOfTheDay-title">Deals of the day</h2>
          <a href="#" className="see-all">See all</a>
        </div>
        <div className="deals-grid">
          {dealsOfTheDay.slice(currentDealIndex, currentDealIndex + 5).map(deal => (
            <DealOfTheDay key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
      <section className="deals-of-the-day">
        <div className="section-header">
          <h2 className="dealOfTheDay-title">Most popular products</h2>
          <a href="#" className="see-all">See all</a>
        </div>
        <div className="deals-grid">
          {ProductLists.slice(currentDealIndex, currentDealIndex + 5).map(deal => (
            <ProductCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;