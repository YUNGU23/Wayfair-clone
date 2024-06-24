import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ deal }) => {
  const { name, price, originalPrice, image, rating, reviewCount } = deal;

  return (
    <Link to={`/product/${deal.id}`} className="deal-of-the-day">
      <img src={image} alt={name} className="deal-image" />
      {/* <div className="deal-tag">Deal of the Day</div> */}
      <h3 className="deal-name">{name}</h3>
      <div className="deal-price">
        <span className="current-price">${price.toFixed(2)}</span>
        <span className="original-price">${originalPrice.toFixed(2)}</span>
      </div>
      <div className="deal-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? "star filled" : "star"}>★</span>
        ))}
        <span className="review-count">({reviewCount})</span>
      </div>
    </Link>
  );
};

export default ProductCard;