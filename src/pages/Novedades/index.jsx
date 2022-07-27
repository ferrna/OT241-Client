import React from "react";
import NovedadesItem from "./NovedadesItem";
import {novedades as data} from './mockdata'

function Novedades({ novedades }) {
<<<<<<< HEAD:src/pages/Novedades/index.jsx
  novedades = data;
=======

  console.log(novedades);
>>>>>>> dev:src/pages/Home/Novedades.jsx
  return (
    <div className="container d-flex flex-wrap">
      {novedades.map((novedad, i) => {
        let props = { ...novedad, i };
        return <NovedadesItem key={i+1} {...props} />;
      })}
    </div>
  );
}

export default Novedades;
