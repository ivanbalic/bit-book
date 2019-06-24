import React from "react";

const CarouselItem = ({ imgSrc, text, active = "" }) => {
  return (
    <div className={`carousel-item ${active}`} data-interval="1000">
      <img src={imgSrc} className="d-block w-100" alt="carousel cover" />
      <div className="carousel-caption">
        <h1>
          <img src="https://i.imgur.com/Xa93F4x.png" alt="" />
        </h1>
        <p className="lead">{text}</p>
      </div>
    </div>
  );
};

export { CarouselItem };
