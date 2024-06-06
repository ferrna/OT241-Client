import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "../../components/Loader";
import { Formik, Form, Field } from "formik";
import httpService from "../../services/httpService";
import "./styles.css";

const service = new httpService();

const ActivitiesForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();
  let [props, setProps] = useState({ activity: { id: "", name: "", image: "", content: "" } });
  const [errors, setErrors] = useState({});
  const [httpError, setHttpError] = useState(null);
  const [sendForm, setSendForm] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (id) {
        setIsLoading(true);
        service.get(`activities`, id).then((res) => {
          console.log(res);
          setProps({ activity: { ...res[0] } });
          setIsLoading(false);
        });
      }
    }
    return () => (mounted = false);
  }, [id]);

  return (
    <>
      <div className="d-flex flex-column ms-20 text-center">
        <h1>{id ? "Editar Actividad" : "Añadir Actividad"}</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={{
            name: props.activity ? props.activity.name : "",
            content: props.activity ? props.activity.content : "",
            image: props.activity ? props.activity.image : "",
          }}
          validate={(values) => {
            const { name, content } = values;

            // Validate a name:
            if (name?.length === 0 || !name) {
              setErrors({ ...errors, name: "Por favor inserte un nombre" });
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
              setErrors({
                ...errors,
                name: "El nombre solo puede contener letras y espacios",
              });
            } else {
              setErrors({ ...errors, name: "" });
            }

            // Validate a content:
            if (content?.length === 0 || !content) {
              setErrors({ ...errors, content: "Por favor inserte un contenido" });
            } else {
              setErrors({ ...errors, content: "" });
            }
          }}
          onSubmit={(values, { resetForm }) => {
            if (props.activity) {
              //REQUEST PARA EDITAR LA ACTIVIDAD
              service
                .put("activities", id, { ...values })
                .then((res) => {
                  setSendForm(true);
                  setTimeout(() => navigate("/backoffice/activities"), 1000);
                })
                .catch((err) => setHttpError({ msg: err.message }));
            } else {
              //REQUEST PARA CREAR LA ACTIVIDAD
              service
                .post("activities", { ...values })
                .then((res) => {
                  setSendForm(true);
                  resetForm();
                })
                .catch((err) => setHttpError({ msg: err.message }));
            }
          }}
        >
          {({ undefined, touched }) => (
            <Form className="module--form d-lg-flex flex-lg-column justify-content-lg-left align-items-lg-start fw-bold mb-5 mx-auto">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Ingresar nombre"
                />
                {touched.name && errors.name && (
                  <div className="alert alert-danger" role="alert">
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="content" className="form-label">
                  Contenido
                </label>
                <Field
                  as="textarea"
                  type="textarea"
                  className="form-control"
                  id="content"
                  name="content"
                  placeholder="Ingresar contenido"
                />
                {touched.content && errors.content && (
                  <div className="alert alert-danger" role="alert">
                    {errors.content}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-50 fw-bold"
                style={{ backgroundColor: "#FF0000" }}
                disabled={errors?.name || errors?.content ? true : false}
              >
                {id ? "Guardar" : "Crear"}
              </button>
              {httpError ? (
                <div>Ha ocurrido un error</div>
              ) : (
                sendForm && (
                  <div className="alert alert-success" role="alert">
                    Operación exitosa!
                  </div>
                )
              )}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default ActivitiesForm;
