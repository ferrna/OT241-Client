import React, { useState } from "react";
import { useEffect } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { organizacion } from "./mockorganizacion";

function OrganizacionBackoffice() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const service = new httpService();
  const [props, setProps] = useState();
  const organization = organizacion || {};

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          /* let news = await service.get("news", id); */
          setProps({ ...organization });
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
        <div {...props} />
      )}
    </div>
  );
}

export default OrganizacionBackoffice;
