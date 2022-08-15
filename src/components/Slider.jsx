import React from 'react'
import img1 from '../images/img4.jpg'
import img2 from '../images/img5.jpg'
import img3 from '../images/img6.jpg'
import { v4 as uuidv4 } from 'uuid'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Slider = () => {
  const sliderContent = [
    {
      imageURL: img1,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      imageURL: img2,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      imageURL: img3,
      text: "Lorem ipsum dolor sit amet.",
    },
  ]

  return (
    <div className="container-fluid">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          {sliderContent.map((item, index) =>
            index === 0 ? (
              <button
                key={uuidv4()}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            ) : (
              <button
                key={uuidv4()}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                aria-current="true"
              ></button>
            )
          )}
        </div>
        <div className="carousel-inner">
          {sliderContent.map((item, index) =>
            index === 0 ? (
              <div key={uuidv4()} className="carousel-item active " data-bs-interval="3000">
                <img
                  src={item.imageURL}
                  className="d-block w-100 img-fluid"
                  alt={item.imageURL}
                />
                <div
                  key={uuidv4()}
                  className="carousel-caption d-none d-md-block"
                >
                  <p key={uuidv4()}>{item.text}</p>
                </div>
              </div>
            ) : (
              <div key={uuidv4()} className="carousel-item" data-bs-interval="3000">
                <img
                  key={uuidv4()}
                  src={item.imageURL}
                  className="d-block w-100 img-fluid"
                  alt={item.imageURL}
                />
                <div
                  key={uuidv4()}
                  className="carousel-caption d-none d-md-block"
                >
                  <p key={uuidv4()}>{item.text}</p>
                </div>
              </div>
            )
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
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
  )
}

export default Slider
