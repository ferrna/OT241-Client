import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { testimonials } from "./mockdataTestimonial.js";

const TestimonialsBackOffice = () => {
  const testimonialsMock = testimonials;
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
          let news = await service.get("testimonials", "");
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
      <div style={{
                width: "80vw",
                // display: "flex",
                // justifyContent: "space-between",
              }} className="container mb-5 w-80">
        <p className="text-center h1">Lista de Testimonios</p>
        {isLoading ? (
          <Loader />
        ) : !errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay novedades.</ErrorMessage>
        ) : (
          <table 
            className="table"
            style={{
                width: "80vw",
                // display: "flex",
                // justifyContent: "space-between",
              }}
            >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.map((testimonio) => {
                return (
                  <tr key={testimonio.id}>
                    <th scope="row">{testimonio.id}</th>
                    <td>{testimonio.name}</td>
                    <td
                      style={{
                        maxWidth: "120px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link className="btn btn-info text-white" to={`edit/${testimonio.id}`}>
                        <FiEdit />
                      </Link>
                      <Link className="btn btn-danger" to={`delete/${testimonio.id}`}>
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

export default TestimonialsBackOffice;
