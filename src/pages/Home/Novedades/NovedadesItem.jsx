import React from "react";
import { Link } from "react-router-dom";

function NovedadesItem({ image, content, i, name }) {
  return (
    <div className="col-12 col-sm-6 col-xl-6" key={i + 1}>
      <div
        className="card m-2 p-2 ms-md-0 me-md-4 rounded-4"
        style={{
          backgroundColor: "#7E9AFD",
        }}
      >
        <div className="row g-0 d-flex align-items-center">
          <div
            className="col-md-4 bg-cover d-flex justify-content-center align-items-center"
            style={{ maxHeight: "200px", overflow: "hidden" }}
          >
            <img src={image} className="img-fluid rounded-4 w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p
                className="card-text fw-semibold"
                style={{
                  fontSize: "16px",
                }}
              >
                {content}
              </p>
              <Link className="btn btn-primary mx-auto shadow rounded-3" to={`news/${i + 1}`}>
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
