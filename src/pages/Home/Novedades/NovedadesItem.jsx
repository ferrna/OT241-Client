import React from "react";
import { Link } from "react-router-dom";

function NovedadesItem({ image, content, id, name }) {
  return (
    <div className="col-12 col-sm-6 col-xl-5" key={id}>
      <div
        className="card m-2 p-3 ms-md-0 me-md-3 rounded-4"
        style={{
          backgroundColor: "#7E9AFD",
        }}
      >
        <div className="row g-0 d-flex align-items-center">
          <div
            className="col-lg-6 bg-cover d-flex justify-content-center align-items-center"
            style={{ maxHeight: "380px", overflow: "hidden" }}
          >
            <img src={image} className="img-fluid rounded-4 h-100 w-100" alt={`imagen-${name}`} />
          </div>
          <div className="col-lg-6 d-lg-flex align-self-lg-stretch">
            <div className="d-flex flex-column justify-content-between pt-2 ps-lg-4 align-items-center">
              <p className="card-text fs-5">{content}</p>
              <Link
                className="btn btn-primary mx-auto rounded-3 px-3 py-2 px-lg-5 py-lg-2"
                style={{
                  backgroundColor: "#0038FF",
                  border: "none",
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
                to={`news/${id}`}
              >
                Ver novedad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovedadesItem;
