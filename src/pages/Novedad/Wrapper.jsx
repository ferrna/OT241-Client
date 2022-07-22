import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Novedad from "./Novedad";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";

function NovedadWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const service = new httpService();
  const [props, setProps] = useState();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        let news = await service.get("news", id);
        setProps({ ...news.news });
        setIsLoading(false);
      }
    }
    fetchData();
    return () => (mounted = false);
    //eslint-disable-next-line
  }, []);

  return <div className="w-100">{isLoading ? <Loader /> : <Novedad {...props} />}</div>;
}

export default NovedadWrapper;
