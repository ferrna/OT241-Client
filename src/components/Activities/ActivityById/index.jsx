import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Activity from "./Activity";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import httpService from "../../../services/httpService";
import "../styles.css";

const service = new httpService();

function ActivityById() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();
  const [props, setProps] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let res = await service.get(`activities/${id}`);
          console.dir(res);
          setProps({ ...res[0] });
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
        <Activity {...props} />
      )}
    </div>
  );
}

export default ActivityById;
