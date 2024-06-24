import React from 'react';
import './CardAD.css';

const CardAD = ({ title, images }) => {
  return (
    <div className="card-ad">
      <h2 className="card-ad-title">{title}</h2>
      <div className="card-ad-grid">
        {images.map((image, index) => (
          <div key={index} className="card-ad-item">
            <img src={image} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAD;