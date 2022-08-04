import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Novedad from "./Novedad";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

function NovedadPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();
  const service = new httpService();
  const [props, setProps] = useState();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let news = await service.get("news", id);
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
    <div className="w-100">
      {isLoading ? (
        <Loader />
      ) : errors?.msg ? (
        <ErrorMessage>Ops! Parece que esta noticia ya no es accesible.</ErrorMessage>
      ) : (
        <Novedad {...props} />
      )}
    </div>
  );
}

export default NovedadPage;
