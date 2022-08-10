import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const service = new httpService();

const CategoriasBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);

  // Get all news
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let categories = await service.get("categories");
          setProps([...categories]);
          if (categories.length === 0) {
            setErrors({ msg: "No categories finded" });
          } else {
            setErrors(null);
          }
          setIsLoading(false);
        } catch (err) {
          setErrors({ msg: "Endpoint not finded" });
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => (mounted = false);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container-fluid mb-5 w-100">
        <p className="text-center h1">Listado de categorías</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay categorías.</ErrorMessage>
        ) : (
          <div
            className="w-100 mx-auto d-flex flex-column align-items-center p-3 rounded"
            style={{
              maxWidth: "1200px",
              minHeight: "50vh",
              backgroundColor: "#242424",
            }}
          >
            <table
              className="table fs-5"
              style={{
                maxWidth: "960px",
              }}
            >
              <thead>
                <tr className="text-white">
                  <th scope="col" className="p-3 pe-0">
                    <div className="border-end border-secondary">Nombre</div>
                  </th>
                  <th scope="col" className="text-end p-3 ps-0">
                    Acciones
                  </th>
                </tr>
              </thead>
            </table>
            <div
              className="w-100"
              style={{
                maxWidth: "960px",
              }}
            >
              {props &&
                props.map((categoria) => {
                  return (
                    <div
                      key={categoria.name}
                      className="d-flex justify-content-between p-2 px-3 border border-red rounded bg-light shadow-sm"
                    >
                      <span
                        className="align-self-center fw-semibold"
                        style={{ fontSize: "1.2rem" }}
                      >
                        {categoria.name}
                      </span>
                      <span className="d-flex justify-content-around" style={{ width: "100px" }}>
                        <button className="btn btn-info text-white" style={{ zIndex: "10" }}>
                          <FiEdit />
                        </button>
                        <button className="btn btn-danger" style={{ zIndex: "10" }}>
                          <FiTrash2 />
                        </button>
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoriasBackOffice;
