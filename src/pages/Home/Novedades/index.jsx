import React from "react";
import { Link } from "react-router-dom";
import NovedadesItem from "./NovedadesItem.jsx";
import { v4 as uuidv4 } from 'uuid'

function Novedades({ homeNews }) {
  return (
    <>
      <div className="container d-flex justify-content-between fs-3 fw-semibold mt-5 mb-3">
        <span>Últimas novedades</span>
        <Link to="/news" className="fs-6 fw-lighter mt-2 mb-1 text-secondary text-decoration-none">
          Ver todos {">"}
        </Link>
      </div>
      <div className="container d-flex flex-wrap flex-xl-nowrap mb-5 overflow-hidden">
        {homeNews.map((news, i) => {
          let props = { ...news, i };
          return <NovedadesItem key={uuidv4()} {...props} />;
        })}
      </div>
    </>
  );
}

export default Novedades;
