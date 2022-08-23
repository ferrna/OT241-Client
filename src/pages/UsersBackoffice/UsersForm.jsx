import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ConfirmAlert, InfoAlert } from "../../components/Alerts";
import httpService from "../../services/httpService";
import { useLocation, useParams } from "react-router";
const service = new httpService()

const userSchema = yup.object({
  firstName: yup.string().required("Campo requerido"),
  lastName: yup.string().required("Campo requerido"),
  roleId: yup.string().required("Campo requerido"),
});

let initialValues = (firstName, lastName, roleId)=> {
    return {
      firstName: firstName,
      lastName: lastName,
      roleId: roleId,
}};

function UsersForm() {
  const {state} = useLocation()
  const [isEditing, setIsEditing] = useState(false);
  const {id} = useParams()

  const formik = useFormik({
    initialValues: {
    ...initialValues(state.props.firstName, state.props.lastName, state.props.roleId),
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
        const data = { ...values };
        console.log(data);
        console.log("Formulario validado y listo para enviar");
        
        const updated = await service.put("users", id, data)
        if(updated) {
            InfoAlert({text: "Usuario actualizado con éxito!"})
        }
    },
  });

  return (
    <div className="container-fluid my-5">
      <h1 className="mb-4 text-center">Editar Usuario</h1>

      <form className="card col-12 col-md-6 col-lg-4 mx-auto shadow" onSubmit={formik.handleSubmit}>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            <button
              onClick={(e) => {
                if (formik.isValid) {
                  if (e.target.value === "Guardar") formik.handleSubmit();
                  setIsEditing(!isEditing);
                }
              }}
              type={isEditing ? "button" : "submit"}
              className="btn btn-primary"
            >
              {isEditing ? "Guardar" : "Editar perfil"}
            </button>
            {/* <button
              className="btn btn-danger"
              type="button"
              onClick={() =>
                ConfirmAlert({
                  text: "Estás seguro de que quieres eliminar tu cuenta?",
                  // TODO: Agregar petición a API para eliminar cuenta acá
                  onConfirm: () => console.log("Enviar petición a API para eliminar cuenta"),
                })
              }
            >
              Eliminar cuenta
            </button> */}
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              className={formik.errors.firstName ? "form-control is-invalid" : "form-control"}
              type="text"
              name="firstName"
              id="firstName"
              disabled={!isEditing}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            {formik.errors.firstName && (
              <span className="invalid-feedback">{formik.errors.firstName}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
            <input
              className={formik.errors.lastName ? "form-control is-invalid" : "form-control"}
              type="text"
              name="lastName"
              id="lastName"
              disabled={!isEditing}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />

            {formik.errors.lastName && (
              <span className="invalid-feedback">{formik.errors.lastName}</span>
            )}
          </div>

            <div className="input-group mb-3 d-flex">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="roleId">
                  Rol del Usuario
                </label>
              </div>
              <select
                className="custom-select flex-grow-1 px-2"
                id="roleId"
                name="roleId"
                disabled={!isEditing}
                onChange={formik.handleChange}
                value={formik.values.roleId}
              >
                <option value="2">Usuario</option>
                <option value="1">Administrador</option>
              </select>
            </div>
        </div>
      </form>
    </div>
  );
}

export default UsersForm;