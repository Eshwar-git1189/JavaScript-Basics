// src/Components/Carousel.js

import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://univest.in/_next/image?url=https%3A%2F%2Funivest-blog.storage.googleapis.com%2Fblogs%2Fwp-content%2Fuploads%2F2025%2F05%2F14103421%2Fstock-market-today-1.jpg&w=1080&q=75" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://univest.in/_next/image?url=https%3A%2F%2Funivest-blog.storage.googleapis.com%2Fblogs%2Fwp-content%2Fuploads%2F2025%2F02%2F04174549%2Fstrong-stock-in-bse-1.jpg&w=1080&q=75" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://static.toiimg.com/thumb/msid-120081305,imgsize-93070,width-400,resizemode-4/120081305.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
