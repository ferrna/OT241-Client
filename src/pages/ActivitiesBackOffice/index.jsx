import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { ConfirmAlert } from "../../components/Alerts";

const service = new httpService();

const ActivitiesBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let activities = await service.get("activities");
          setProps([...activities]);
          if (activities.length === 0 || !activities) {
            setErrors({ msg: "No activities finded" });
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

  // Delete activity
  const handleDeleteActivity = async (value) => {
    const id = value;
    ConfirmAlert({
      text: "Atención! Esta por eliminar la actividad ¿desea continuar?",
      onConfirm: async () => {
        setIsLoading(true);
        await service.delete("activities", id);
        setTimeout(() => {
          setReloadData(!reloadData);
          setIsLoading(false);
        }, 1000);
      },
    });
  };

  return (
    <>
      <div className="container-fluid mb-5 w-100">
        <p className="text-center h1">Lista de Actividades</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay novedades.</ErrorMessage>
        ) : (
          <div className="module--container w-100 mx-auto d-flex flex-column align-items-center p-3 rounded">
            <table className="module--table table table-striped fs-5">
              <thead>
                <tr className="text-white">
                  <th scope="col" className="module--borderbottomnone py-3 px-1">
                    <div className="border-end border-secondary">Id</div>
                  </th>
                  <th scope="col" className="module--borderbottomnone p-3 pe-0">
                    <div className="border-end border-secondary">Nombre</div>
                  </th>
                  <th scope="col" className="module--borderbottomnone p-3 pe-0">
                    <div className="border-end border-secondary">Contenido</div>
                  </th>
                  <th scope="col" className="module--actions-th module--borderbottomnone">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody className="w-100">
                {props &&
                  props.map((activity) => {
                    return (
                      <tr
                        key={uuidv4()}
                        className="w-100 p-2 px-3 mb-3 border bg-light shadow-sm fw-semibold"
                        style={{ fontSize: "1.2rem" }}
                      >
                        <th>{activity.id}</th>
                        <td>{activity.name}</td>
                        <td>{activity.content}</td>
                        <td>
                          <div className="module--actions-td d-flex flex-column flex-sm-row justify-content-around">
                            <Link
                              className="btn btn-info text-white mb-2 mb-sm-0"
                              to={`edit/${activity.id}`}
                            >
                              <FiEdit />
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => handleDeleteActivity(activity.id)}
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <Link className="btn btn-info mb-2 mb-sm-0" to={`edit`}>
              <FiEdit /> Nueva actividad
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ActivitiesBackOffice;
