import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header.jsx";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { actividades } from "./mockdataActividad.js";

const ActividadesBackOffice = () => {
  const actividadesMock = actividades;
  const [isLoading, setIsLoading] = useState(true);
  const service = new httpService();
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);

  // Get all news
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let news = await service.get("api/v1/news", "");
          setProps({ ...news.news });
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
      <Header />
      <div className="container-fluid mb-5 w-100">
        <p className="text-center h1">Lista de Actividades</p>
        {isLoading ? (
          <Loader />
        ) : !errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay novedades.</ErrorMessage>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Contenido</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {actividadesMock.map((actividad) => {
                return (
                  <tr key={actividad.id}>
                    <th scope="row">{actividad.id}</th>
                    <td>{actividad.name}</td>
                    <td>{actividad.content}</td>
                    <td
                      style={{
                        minWidth: "100px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link className="btn btn-info text-white" to={`edit/${actividad.id}`}>
                        <FiEdit />
                      </Link>
                      <Link className="btn btn-danger" to={`delete/${actividad.id}`}>
                        <FiTrash2 />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ActividadesBackOffice;
