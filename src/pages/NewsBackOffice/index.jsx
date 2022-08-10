import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ConfirmAlert } from "../../components/Alerts";

const service = new httpService();

const NewsBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  // Get all news
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let news = await service.get("news");
          setProps([...news]);
          if (news.length === 0) {
            setErrors({ msg: "No news finded" });
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
  }, [reloadData]);

  // Delete news
  const handleDeleteNews = async (value) => {
    const id = value;

    ConfirmAlert({
      text: "Esta por eliminar la novedad, ¿desea continuar?",
      onConfirm: async () => {
        setIsLoading(true)
        await service.delete("news", id)
        setTimeout(() => {
          setReloadData(!reloadData)
          setIsLoading(false)
        }, 1000);
      },
    });
  };

  return (
    <>
      <div className="container-fluid mb-5 w-100">
        <p className="text-center h1">Lista de Novedades</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay novedades.</ErrorMessage>
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
              {props &&
                props.map((novedad) => {
                  return (
                    <tr key={novedad.id}>
                      <th scope="row">{novedad.id}</th>
                      <td>{novedad.name}</td>
                      <td>
                        <img style={{ width: "35px" }} src={novedad.image} alt="news img"></img>
                      </td>
                      <td>{novedad.createdAt}</td>
                      <td
                        style={{
                          minWidth: "100px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link className="btn btn-info text-white" to={`edit/${novedad.id}`}>
                          <FiEdit />
                        </Link>
                        <button
                          className="btn btn-danger"
                          style={{ zIndex: "10" }}
                          value={novedad.id}
                          onClick={(e) => handleDeleteNews(novedad.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default NewsBackOffice;
