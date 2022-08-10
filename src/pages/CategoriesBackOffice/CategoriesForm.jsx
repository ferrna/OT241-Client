import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const service = new httpService();

const CategoriesForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();
  let [errors, setErrors] = useState(null);
  let [props, setProps] = useState({ name: "", description: "" });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      service.get(`testimonials`, id).then((res) => {
        setProps({ ...res });
        setIsLoading(false);
      });
    }
    return () => (mounted = false);
  }, []);

  // Editar categoria
  const editCategory = async (ev) => {
    ev.preventDefault();
    try {
      await service.put("categories", props.id, { ...props });
      navigate("/backoffice/categories");
    } catch (e) {
      console.log(e);
    }
  };

  // Crear categoria
  const createCategory = async (ev) => {
    ev.preventDefault();
    try {
      await service.post("categories", {
        ...props,
      });
      window.location.reload(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (!value) {
      setErrors({ name: "Por favor inserte un nombre" });
    } else if (!/^[a-z ,.'-]+$/i.test(value)) {
      setErrors({ name: "El nombre solo puede contener solo letras" });
    } else {
      setErrors(null);
      setProps({ ...props, name: value });
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="container">
        <h1 className="text-center">{id ? "Editar categoría" : "Crear categoría"}</h1>
        <div className="container d-flex justify-content-center">
          <form id="formulario">
            <input type="hidden" defaultValue={props.id} id="id" />
            <label className="label-form">Nombre</label>
            <input
              type="text"
              className="mb-2 form-control"
              value={props.name}
              onChange={(e) => handleChange(e)}
              placeholder="nombre"
              id="nombre"
            />
            <label className="label-form mt-2">Descripción</label>
            <CKEditor
              editor={ClassicEditor}
              data={props}
              onChange={(event, editor) => {
                setProps({ ...props, description: editor.getData() });
              }}
            />
            {errors?.name && (
              <label className="label-form mt-2 bg-danger text-white w-100">{errors.name}</label>
            )}
            <button
              type="button"
              className="btn btn-danger mt-2"
              disabled={errors?.name ? true : false}
              onClick={id ? editCategory : createCategory}
            >
              {id ? "Guardar" : "Crear"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoriesForm;
