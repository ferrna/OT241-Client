import React from "react";
import NovedadesItem from "./NovedadesItem.jsx";
import { novedades as data } from "./mockdata";

function Novedades({ novedades }) {
  novedades = data;
  return (
    <div className="container d-flex flex-wrap">
      {novedades.map((novedad, i) => {
        let props = { ...novedad, i };
        return <NovedadesItem key={i + 1} {...props} />;
      })}
    </div>
  );
}

export default Novedades;
