import React from "react";
import "./components-styles/carousel.css";

const Carousel = () => {
  return (
    <div className="container-md carousel-container">
      <h1 className="carousel-heading">New this week</h1>
      <div
        id="carouselExampleDark"
        className="carousel carousel-light slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200"
              className="d-block w-100 carousel-img"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <p>Collection</p>
              <h5>Most popular around the world</h5>
              <a
                href="https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_TOP_BOOKED_ONLINE_GROUPING%3ATOP_BOOKED&search_type=section_navigation"
                className="show-all-btn"
              >
                Show all
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200"
              className="d-block w-100 carousel-img"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <p>Collection</p>
              <h5>Great for team building</h5>
              <a
                href="https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A8059&search_type=section_navigation"
                className="show-all-btn"
              >
                Show all
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200"
              className="d-block w-100 carousel-img"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <p>Collection</p>
              <h5>Fun for the family</h5>
              <a
                href="https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_SELECTED_TAGS_GROUPING%3AFAMILIES&search_type=section_navigation"
                className="show-all-btn"
              >
                Show all
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
