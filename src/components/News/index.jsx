import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import httpService from "../../services/httpService";
import axios from "axios";
import moment from "moment";
import 'moment/locale/es-mx'

const http = new httpService();

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getData() {
      let {data} = await axios.get("http://localhost:3000/news");
      setNews(data);
    }

    getData();
    
  }, []);

  return (
    <div>
      <h1 className="container text-center">Noticias</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {news &&
          news.map((e) => {
            let { name, image, createdAt, id } = e;
            return (
              <>
                <div className="card text-center" style={{ width: "18rem", margin: "1rem" }}>
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-text ">
                      <Link to={`${id}`} className="text-danger">
                        {name}
                      </Link>
                    </h3>
                    <p>
                      <small>{moment(createdAt).format("LLL")}</small>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default News;
