import React from "react";
import image1 from "../../images/1920x680.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NovedadesItem({ imgUrl, description, index }) {
  return (
    <div className="col-12 col-sm-6 col-xl-3" key={index}>
      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4 bg-contain">
            <img src={image1} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">{description}</p>
              <button className="btn btn-primary mx-auto">Ver Novedad</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovedadesItem;
