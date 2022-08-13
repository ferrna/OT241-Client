import React from 'react'
import img1 from '../images/Rectangle4.png'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'

const Slider = () => {
  const sliderContent = [
    {
      imageURL: img1,
      text: 'Slide 1',
    },
    {
      imageURL: img1,
      text: 'Slide 2',
    },
    {
      imageURL: img1,
      text: 'Slide 3',
    },
  ]

  var autoplayInterval = () => setInterval(function() {

    // Get element via id and click next
    document.getElementById("nextSlider").click();

  }, 11000)

  useEffect(()=> {
    let mounted = true;
    if(mounted){
      autoplayInterval()
    }
    return ()=> {
      clearInterval(autoplayInterval);
      mounted = false;
    }
  }, [])

  return (
    <div className="container-fluid p-0">
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
              <div key={uuidv4()} className="carousel-item active" style={{transition: "all 1.4s ease-out"}}>
                <img
                  src={img1}
                  className="d-block w-100"
                />
                <div
                  key={uuidv4()}
                  className="carousel-caption d-none d-md-block"
                >
                </div>
              </div>
            ) : (
              <div key={uuidv4()} className="carousel-item" style={{transition: "all 1.4s ease-out"}}>
                <img
                  key={uuidv4()}
                  src={item.imageURL}
                  className="d-block w-100"
                  alt={item.imageURL}
                />
                <div
                  key={uuidv4()}
                  className="carousel-caption d-none d-md-block"
                >
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
