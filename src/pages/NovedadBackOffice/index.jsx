import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header.jsx";
// import CardNovedad from './cardNovedad';
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "./ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import image1 from "../../images/Novedad1.png";
import { Link } from "react-router-dom";
import { novedades } from "./mockdataNovedad.js";

const NovedadesBackOffice = () => {
  const novedadesMock = novedades;
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
        <p className="text-center h1">Lista de Novedades</p>
        {isLoading ? (
          <Loader />
        ) : !errors?.msg ? (
          <ErrorMessage>
            Ops! Parece que en este momento no hay novedades.
          </ErrorMessage>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">createdAt</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {novedadesMock.map((novedad) => {
                return (
                  <tr key={novedad.id}>
                    <th scope="row">{novedad.id}</th>
                    <td>{novedad.name}</td>
                    <td>
                      <img
                        style={{ width: "35px" }}
                        src={image1}
                        alt="news img"
                      ></img>
                    </td>
                    <td>{novedad.createdAt}</td>
                    <td
                      style={{
                        minWidth: "100px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link
                        className="btn btn-info text-white"
                        to={`edit/${novedad.id}`}
                      >
                        <FiEdit />
                      </Link>
                      <Link
                        className="btn btn-danger"
                        to={`delete/${novedad.id}`}
                      >
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
      {/* <Novedad {...props} /> */}
    </>
  );
};

export default NovedadesBackOffice;
