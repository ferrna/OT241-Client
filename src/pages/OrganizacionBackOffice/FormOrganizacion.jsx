import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field } from "formik";
import httpService from "../../services/httpService";

let http = new httpService();

const FormOrganizacion = () => {
  let [sendForm, setSendForm] = useState(false);
  let [error, setError] = useState(null);
  return (
    <>
      <div className="d-flex flex-column ms-20 text-center align-items-center">
        <h1>Editar organización</h1>
        <img src="/images/Group33.png" alt="" height={50} width={90} />
      </div>
      <Formik
        initialValues={{
          welcomeText: "",
          imageUrl: "",
        }}
        validate={(values) => {
          let { welcomeText, imageUrl } = values;

          let myErrors = {};

          //Validate the welcome:
          if (!welcomeText) {
            myErrors.welcomeText = "Por favor inserte un texto de bienvenida.";
          } else if (!/(^[\s\S]{20,}$\r?\n?){1,4}/.test(welcomeText)) {
            myErrors.welcomeText =
              "El texto de bienvenida debe ser de al menos 20 caracteres de longitud";
          }

          //Validate the imageUrl:
          if (!imageUrl) {
            myErrors.imageUrl = "Por favor inserte la url del logo.";
          } else if (
            !/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
              imageUrl
            )
          ) {
            myErrors.imageUrl = "Por favor ingrese una url válida (www.tusitio.com/urlImagen).";
          }

          return myErrors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          //Aqui va la peticion fetch para actualizar la organización en la base de datos EJ:
          /*
        fetch('/organization', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        */

          http
            .post("users/auth/register", {
              headers: {
                "Content-Type": "application/json",
              },
              body: values,
            })
            .then((res) => {
              if (res.errors) setError(res.errors);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });

          setSendForm(true);
          setError(null);
          setTimeout(() => {
            setSendForm(false);
            setError(false);
          }, 2000);
        }}
      >
        {({ errors, touched }) => (
          <Form className="d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-center w-50 fw-bold">
            <div className="mb-3 w-50">
              <label htmlFor="welcomeText" className="form-label">
                Text de bienvenida
              </label>
              <Field
                component="textarea"
                rows="4"
                type="textarea"
                className="form-control"
                id="welcomeText"
                name="welcomeText"
              />
              {touched.welcomeText && errors.welcomeText && (
                <div className="alert alert-danger" role="alert">
                  {errors.welcomeText}
                </div>
              )}
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="imageUrl" className="form-label">
                Url de la Imagen
              </label>
              <Field type="text" className="form-control" id="imageUrl" name="imageUrl" />
              {touched.imageUrl && errors.imageUrl && (
                <div className="alert alert-danger" role="alert">
                  {errors.imageUrl}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-50 fw-bold"
              style={{ backgroundColor: "#FF0000" }}
            >
              Actualizar
            </button>
            {error ? (
              <div>Error unsuccess</div>
            ) : (
              sendForm && (
                <div className="alert alert-success" role="alert">
                  Información actualizada con éxito!
                </div>
              )
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormOrganizacion;
