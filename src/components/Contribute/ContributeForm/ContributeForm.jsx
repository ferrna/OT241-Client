import React, { useState } from "react";
import PayPalCheckout from "./PayPal";
import "./formstyles.css";
import { useEffect } from "react";

function ContributeForm() {
  const [translateClass, setTranslateClass] = useState("");
  const [data, setData] = useState({ fullName: "", email: "", comentario: "", valor: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [step, setStep] = useState(1);

  const handleOnClick = () => {
    setTranslateClass("module--translateform");
    setData({
      ...data,
      fullName: data.fullName || "Anonimous donator",
      address: "guada 1042",
      addresscontinue: "sydney",
      city: "Ohio",
      country: "US",
      postalcode: "3000",
    });
    setStep(2);
  };

  useEffect(()=> {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) &&
      data.email?.length > 0 &&
      data.valor?.length > 0
    ) {
      setIsDisabled(false);
    } else {setIsDisabled(true);}
  },[data])

  const handleInputChange = async (e) => {
    let value = e.target.value;
    const named = e.target.name;
    if (named === "valor") value = value.replace(/[a-zA-Z]+/, "");
    setData({
      ...data,
      [named]: value,
    })
  };

  return (
    <div className="module--contributeform">
      <div
        className={"d-flex module--contributeform-container " + translateClass}
        style={{ width: "200%" }}
      >
        <div className="w-50 mt-3 module--contributeform-form">
          <form id="form">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={data.fullName}
                aria-describedby="emailHelp"
                placeholder="Nombre"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                placeholder="correo@correo.cl"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="comentario"
                value={data.comentario}
                placeholder="Deje su comentario aquí"
                style={{ height: "100px" }}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Contribución</label>
              <input
                className="form-control"
                id="valor"
                name="valor"
                value={data.valor}
                placeholder="¿Con cuanto desea contribuir?"
                required
                onChange={handleInputChange}
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              disabled={isDisabled}
              onClick={() => handleOnClick()}
            >
              Siguiente
            </button>
          </form>
        </div>
        {step === 2 && <PayPalCheckout formData={data} />}
      </div>
    </div>
  );
}

export default ContributeForm;

/* const formData = {
  fullname: "example",
  email: "example@mail.com",
  address: "guada 1042",
  addresscontinue: "sydney",
  city: "Ohio",
  country: "US",
  postalcode: "3000",
  valor: 10,
}; */
