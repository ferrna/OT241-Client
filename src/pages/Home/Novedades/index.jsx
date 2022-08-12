import React from "react";
import { Link } from "react-router-dom";
import NovedadesItem from "./NovedadesItem.jsx";

function Novedades({ homeNews }) {
  return (
    <>
      <div className="container d-flex justify-content-between fs-3 fw-semibold mt-5 mb-3">
        <span>Últimas novedades</span>
        <Link to="/news" className="fs-6 fw-lighter mt-2 mb-1 text-secondary text-decoration-none">
          Ver todos {">"}
        </Link>
      </div>
      <div className="container d-flex flex-wrap mb-5">
        {homeNews.map((news, i) => {
          let props = { ...news, i };
          return <NovedadesItem key={i + 1} {...props} />;
        })}
      </div>
    </>
  );
}

export default Novedades;
