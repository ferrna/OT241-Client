import React from "react";
import "./styles.css";
import { useState } from "react";
import ContributeForm from "./ContributeForm/ContributeForm";

function Contribute() {
  const [loadContribute, setLoadContribute] = useState(false);
  return (
    <div className="w-100 text-center px-2 px-sm-0">
      <div className="module--contribute-text text-center">
        <h1 className="fw-bold mt-5">Nuestra misión</h1>
        <p className="fs-4">
          Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio
          La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, salud y
          trabajo; deporte, responsabilidad y compromiso.
        </p>
        <h3>¿Quieres contribuir?</h3>
        <div className="text-center pt-2">
          <button
            type="button"
            className="module--btnContribuir button px-4 py-2 fs-5 rounded-5 border border-1 border-transparent"
            onClick={() => setLoadContribute(true)}
          >
            Contribuir
          </button>
        </div>
      </div>
      {loadContribute && <ContributeForm />}
    </div>
  );
}

export default Contribute;
