import React from "react";
import { useNavigate } from "react-router-dom";

function Activity({ name, content, image, createdAt }) {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "5rem" }}>
      <h1 className="container text-center mt-5 fw-bold">{name}</h1>
      <div
        className="mx-auto d-flex flex-column justify-content-center align-items-center fs-5 mt-2"
        style={{ maxWidth: "960px" }}
      >
        <figure className="figure">
          <img src={image} className="figure-img img-fluid rounded" alt={name} />
          <figcaption className="figure-caption fs-6">
            Publicado el {createdAt.slice(0, 10).replaceAll("-", "/")} a las{" "}
            {createdAt.slice(11, 16)} horas.
          </figcaption>
        </figure>
        <div className="container fs-4" id="text">
          {content}
        </div>
        <button
          type="button"
          className="module--btnInicio button px-5 py-2 fs-5 rounded-3 border border-1 border-dark"
          style={{ marginTop: "7rem" }}
          onClick={() => navigate(-1)}
        >
          Ir a actividades
        </button>
      </div>
    </div>
  );
}

export default Activity;
