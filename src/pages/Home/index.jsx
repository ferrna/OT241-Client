import React,{useState} from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider.jsx";
import Novedades from "./Novedades/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { novedades, homeWelcome } from "./Novedades/mockdata.js";
import RegisterFormEdit from "../../components/RegisterFormEdit.jsx";

let userIsAdmin = true
let infoHomeDefault = {
  title: 'Hola Bienvenidx',
  description: 'Lorem ipsun dolor anmet'
}
function Home(props) {
  const [infoHome, setInfoHome] = useState(infoHomeDefault)
  let [images, setImages] = useState({})
  return (
    <>
    {userIsAdmin && <RegisterFormEdit infoHome={infoHome} images={images} setInfoHome={setInfoHome} setImages={setImages}/>}
      <section className="position-relative" style={{ minHeight: "350px" }}>
        <Slider />
        <div
          className="position-absolute top-0 h-100 d-flex flex-column justify-content-end align-items-center justify-content-md-center p-4 p-sm-0 mt-sm-4"
          style={{ left: "0", right: "0" }}
        >
          <div style={{ maxWidth: "500px" }}>
            <h2 className="text-center text-sm-start mx-1 my-2 fw-bolder">
              {infoHome.title}
            </h2>
            <p>{homeWelcome && infoHome.description}</p>
          </div>
        </div>
      </section>
      <div className="container d-flex justify-content-between fs-4 fw-normal mt-2 mb-1">
        <span>Últimas novedades</span>
        <Link to="/news" className="fs-6 fw-lighter mt-2 mb-1 text-secondary text-decoration-none">
          Ver todos {">"}
        </Link>
      </div>
      {novedades && <Novedades novedades={novedades.slice(0, 2)} />}
    </>
  );
}

export default Home;
