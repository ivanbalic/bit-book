import React from "react";

import "./ImageCarousel.css";

const ImageCarousel = ({ children, linkTarget }) => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {children.map((child, i) => (
          <li
            key={i}
            data-target="#carouselExampleInterval"
            data-slide-to={`${i}`}
            className={!i ? "active" : ""}
          />
        ))}
      </ol>
      <a href={linkTarget} className="carousel-link">
        <span>
          <p className="m-0 p-0">Scroll down</p>
          <i className="fas fa-chevron-down m-0 p-0" />
        </span>
      </a>
      <div className="carousel-inner">{children}</div>
    </div>
  );
};

export { ImageCarousel };
