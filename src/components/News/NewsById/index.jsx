import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import News from "./News";
import httpService from "../../../services/httpService";

const service = new httpService();

function NewsById() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();
  const [props, setProps] = useState();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          service.get(`news/${id}`).then(res => {
            setProps([...res.news])            
            setIsLoading(false);
          })
        } catch (err) {
          setErrors({ msg: "Endpoint not finded" });
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => (mounted = false);
    //eslint-disable-next-line
  }, [id]);

  return (
    <div className="w-100">
      {isLoading ? (
        <Loader />
      ) : errors?.msg ? (
        <ErrorMessage>Ops! Parece que esta noticia ya no es accesible.</ErrorMessage>
      ) : (
        <News {...props} />
      )}
    </div>
  );
}

export default NewsById;
