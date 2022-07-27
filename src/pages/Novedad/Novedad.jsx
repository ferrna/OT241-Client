import React from "react";

function Novedad({ name, content, image, createdAt }) {
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
    </div>
  );
}

export default Novedad;
