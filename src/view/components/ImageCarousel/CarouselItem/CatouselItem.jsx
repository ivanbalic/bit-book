import React from "react";

const CarouselItem = ({ imgSrc, text, active = "" }) => {
  return (
    <div className={`carousel-item ${active}`} data-interval="1000">
      <img src={imgSrc} className="d-block w-100" alt="carousel cover" />
      <div className="carousel-caption">
        <h1 className="text-center">
          <img src="https://i.imgur.com/Xa93F4x.png" alt="" className="w-75" />
        </h1>
        <p className="lead">{text}</p>
      </div>
    </div>
  );
};

export { CarouselItem };
