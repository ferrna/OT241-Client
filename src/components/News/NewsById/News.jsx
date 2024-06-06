import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "../../Slider";

function News({ name, content, image, createdAt }) {
  const navigate = useNavigate();
  const text = (content) => {
    const div = document.getElementById("text").innerHTML = content
    return div
  }

  useEffect(() => {
    text(content)
  }, [content])

  return (
    <div>
        <h1 className="container text-center mt-5">Novedades</h1>
        <div  className="mt-5">
          <Slider/>
        </div>
      <div
        className="mx-auto d-flex flex-column justify-content-center align-items-center fs-5 mt-5"
        style={{ maxWidth: "960px" }}
      >
        <h2>{name}</h2>
        <figure className="figure">
          {/* <img src={image} className="figure-img img-fluid rounded" alt={name} /> */}
          <figcaption className="figure-caption fs-6">
            Publicado el {createdAt.slice(0, 10).replaceAll("-", "/")} a las {createdAt.slice(11, 16)}{" "}
            horas.
          </figcaption>
        </figure>
        <div className="container text-center" id="text" >
        </div>
        <button type="button" className=" btn btn-danger btn-lg fw-bold my-5" onClick={() => navigate(-1)}>Ir al inicio</button>
      </div>

    </div>
  );
}

export default News;
