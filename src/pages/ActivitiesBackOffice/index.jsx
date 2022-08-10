import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { activities } from "./mockdataActivities.js";

const service = new httpService();

const ActivitiesBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);

  // Get all news
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          // TODO: Descomentar esta línea una vez este listo el endpoint de la api:
          // let activities = await service.get("activities");
          setProps({ ...activities });
          if (activities.length === 0) {
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
  }, []);

  return (
    <>
      <div className="container-fluid mb-5 w-100">
        <p className="text-center h1">Lista de Actividades</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
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
              {props && props.map((activity) => {
                return (
                  <tr key={activity.id}>
                    <th scope="row">{activity.id}</th>
                    <td>{activity.name}</td>
                    <td>{activity.content}</td>
                    <td
                      style={{
                        minWidth: "100px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link className="btn btn-info text-white" to={`edit/${activity.id}`}>
                        <FiEdit />
                      </Link>
                      <Link className="btn btn-danger" to={`delete/${activity.id}`}>
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
    </>
  );
};

export default ActivitiesBackOffice;
