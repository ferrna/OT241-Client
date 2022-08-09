import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ConfirmAlert } from "../../components/Alerts";

const service = new httpService();

const TestimonialsBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  // Get all testimonials
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let testimonials = await service.get("testimonials");
          setProps([...testimonials]);
          if (testimonials.length === 0) {
            setErrors({ msg: "No testimonials finded" });
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

  // Delete testimonial
  const handleDeleteTestimonial = async (value) => {
    const id = value;
    
    ConfirmAlert({
      text: "Esta por eliminar el testimonio, ¿desea continuar?",
      onConfirm: async () => {
        setIsLoading(true)
        await service.delete("testimonials", id);
        setTimeout(() => {
          setReloadData(!reloadData)
          setIsLoading(false)
        }, 1000);
      },
    });
  };

  return (
    <>
      <div
        style={{
          width: "80vw",
          // display: "flex",
          // justifyContent: "space-between",
        }}
        className="container mb-5 w-80"
      >
        <p className="text-center h1">Lista de testimonials</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
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
              {props &&
                props.map((testimonial) => {
                  return (
                    <tr key={testimonial.id}>
                      <th scope="row">{testimonial.id}</th>
                      <td>{testimonial.name}</td>
                      <td
                        style={{
                          maxWidth: "120px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link className="btn btn-info text-white" to={`edit/${testimonial.id}`}>
                          <FiEdit />
                        </Link>
                        <Link
                          className="btn btn-danger"
                          style={{ zIndex: "10" }}
                          value={testimonial.id}
                          onClick={(e) => handleDeleteTestimonial(testimonial.id)}
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
    </>
  );
};

export default TestimonialsBackOffice;
