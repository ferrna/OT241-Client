import React from "react";
import image1 from "../../../images/Novedad1.png";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NovedadesItem({ imgUrl, description, i, index }) {
  return (
    <div className="col-12 col-sm-6 col-xl-6" key={i + 1}>
      <div
        className="card m-2 p-2"
        style={{
          backgroundColor: "#7E9AFD",
        }}
      >
        <div className="row g-0 d-flex align-items-center">
          <div
            className="col-md-4 bg-cover d-flex justify-content-center align-items-center"
            style={{ maxHeight: "200px", overflow: "hidden" }}
          >
            <img src={image1} className="img-fluid rounded-start w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p
                className="card-text"
                style={{
                  fontSize: "16px",
                }}
              >
                {description}
              </p>
              <Link className="btn btn-primary mx-auto" to={`news/${i + 1}`}>
                Ver Novedad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovedadesItem;