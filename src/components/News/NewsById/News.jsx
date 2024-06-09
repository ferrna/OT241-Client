import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
      <div
        className="mx-auto d-flex flex-column justify-content-center align-items-center fs-5 mt-5"
        style={{ maxWidth: "960px" }}
      >
        <h1 className="fw-bold px-3">{name}</h1>
        <figure className="figure">
          <img src={image} className="figure-img img-fluid rounded" alt={name} />
          <figcaption className="figure-caption fs-6">
            Publicado el {createdAt.slice(0, 10).replaceAll("-", "/")} a las {createdAt.slice(11, 16)}{" "}
            horas.
          </figcaption>
        </figure>
        <div className="container text-center" id="text" >
        </div>
        <button type="button" className=" btn btn-danger btn-lg fw-bold my-5" onClick={() => navigate(-1)}>Ir a Novedades</button>
      </div>

    </div>
  );
}

export default News;
