import React, { useState } from "react";
import { useEffect } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import FormOrganizacion from "./FormOrganizacion";
import { organizacion } from "./mockorganizacion";

import { useParams } from 'react-router-dom';

function OrganizacionBackoffice() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const service = new httpService();
  const [props, setProps] = useState();
  const organization = organizacion || {};
  let { id } = useParams();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
           let news = await service.get(`organizations/${id}/public`); 
           console.log(news)
          setProps(news);
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
    <div className="w-100">
      {isLoading ? (
        <Loader />
      ) : errors?.msg ? (
        <ErrorMessage>
          Ops! Parece que hay un error en el servidor, por favor intente más tarde.
        </ErrorMessage>
      ) : (
        <FormOrganizacion data={props.publicResult[0]} />
      )}
    </div>
  );
}

export default OrganizacionBackoffice;
