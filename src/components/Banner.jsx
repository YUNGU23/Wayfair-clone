import React, { useState, useEffect } from "react";
import Banner0 from "../assets/banner-0.png";
import Banner1 from "../assets/banner-1.png";
import "./Banner.css";

const banner2 = "https://secure.img1-fg.wfcdn.com/dm/video/2d95cbca-e6a2-4bb8-9fe4-c395fa793fa0/usca_bigoutdoorsale_desktop.mp4";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    { type: "image", src: Banner0 },
    { type: "image", src: Banner1 },
    { type: "video", src: banner2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner">
      {content.map((item, index) => (
        <div
          key={index}
          className={`banner-item ${currentIndex === index ? "active" : ""}`}
        >
          {item.type === "image" ? (
            <img src={item.src} alt={`Slide ${index}`} />
          ) : (
            <video autoPlay loop muted playsInline>
              <source src={item.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
      <button
        className="banner-nav left"
        onClick={() =>
          goToSlide((currentIndex - 1 + content.length) % content.length)
        }
      >
        &#9664;
      </button>
      <button
        className="banner-nav right"
        onClick={() => goToSlide((currentIndex + 1) % content.length)}
      >
        &#9654;
      </button>
      <div className="banner-dots">
        {content.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;