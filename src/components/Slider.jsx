import React from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import httpService from '../services/httpService'

const service = new httpService();

const Slider = () => {
  const [sliders, setSliders] = React.useState([])

 useEffect(() => {
    service.get("slides").then((res) => {
      setSliders([...res]);
    });
 }, [])
  
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          {sliders && sliders.map((slider, index) =>
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
          {sliders.map((slider, index) =>
            slider.order === 1 ? (
              <div key={uuidv4()} className="carousel-slider active" style={{transition: "all 1s ease-out"}}>
                <img
                  alt='slide'
                  src={`${slider.imageUrl}`}
                  className="d-block w-100"
                />
                <div
                  className="carousel-caption d-none d-md-block"
                >
                  <h4>{slider.text}</h4>
                </div>
              </div>
            ) : (
              <div key={uuidv4()} className="carousel-slider" style={{transition: "all 1s ease-out"}}>
                <img
                  src={slider.imageUrl}
                  className="d-block w-100 img-fluid"
                  alt={slider.imageUrl}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                >
                  <h4>{slider.text}</h4>
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
          <span className="visually-hidden" id="nextSlider">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider
