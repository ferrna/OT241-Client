import React from "react";
import { Link } from "react-router-dom";

function Activity({ image, content, id, name }) {
  return (
    <div className="module--activity col-12 col-sm-6 col-xl-5 m-2">
      <div className="module--activity-container d-flex align-items-stretch p-3 rounded-5">
        <div className="row g-0 flex-grow-1 d-flex align-items-center align-items-lg-stretch">
          <div
            className="module--image-div col-lg-6 bg-cover d-flex justify-content-center align-items-center align-self-stretch rounded-4"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="col-lg-6 d-lg-flex align-self-lg-stretch">
            <div className="d-flex flex-column justify-content-between pt-2 ps-lg-4 align-items-center">
              <p
                className="module--activity-content card-text fs-5"
                style={{
                  lineHeight: "1.7rem",
                }}
              >
                {content}
              </p>
              <Link
                className="module--activity-btnLink btn btn-danger mx-auto rounded-3 px-3 py-2 px-lg-5 py-lg-2"
                to={`${id}`}
              >
                Ver actividad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
