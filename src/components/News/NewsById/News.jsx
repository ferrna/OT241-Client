import React from "react";
import { useNavigate } from 'react-router-dom';

function News({ name, content, image, createdAt }) {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto d-flex flex-column justify-content-center align-items-center fs-5"
      style={{ maxWidth: "960px" }}
    >
      <h2>{name}</h2>
      <figure className="figure">
        <img src={image} className="figure-img img-fluid rounded" alt={name} />
        <figcaption className="figure-caption fs-6">
          Publicado el {createdAt.slice(0, 10).replaceAll("-", "/")} a las {createdAt.slice(11, 16)}{" "}
          horas.
        </figcaption>
      </figure>
      <p>{content}</p>
      <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>{"<"} Volver</button>
    </div>
  );
}

export default News;
