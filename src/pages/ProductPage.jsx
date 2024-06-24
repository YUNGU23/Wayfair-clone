import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './ProductPage.css';

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
  },
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
];

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = dealsOfTheDay.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>See More by Bay Isle Home™</p>
        <div className="rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span className="review-count">{product.rating} ({product.reviewCount} Reviews)</span>
        </div>
        <div className="price-section">
          <span className="sale-price">${product.price.toFixed(2)}</span>
          <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          <span className="discount">{Math.round((1 - product.price / product.originalPrice) * 100)}% Off</span>
        </div>
        <div className="deal-alert">
          <p>DEAL OF THE DAY</p>
          <p>Spoiler alert: This offer ends tonight! <a href="#">Shop other deals of the day here!</a></p>
        </div>
        <p>Free shipping</p>
        <p>Get it between Fri. Jun 28 – Sun. Jun 30 to Seattle - 98122</p>
        <div className="addToCart">
        <div className="quantity">
          <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="number" value={quantity} readOnly />
          <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
        <div className="what-we-offer">
          <h3>What We Offer</h3>
          <p>Professional Assembly for $109.99</p>
          <p>5 Year Protection Plan for $34.99</p>
          <p>Flexible Payment Options</p>
        </div>
        {/* Add more sections like Product Overview, Specifications, etc. */}
      </div>
    </div>
  );
}

export default ProductPage;