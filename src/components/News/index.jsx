import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import httpService from "../../services/httpService";
import axios from "axios";
import moment from "moment";
import 'moment/locale/es-mx'
import { v4 as uuidv4 } from 'uuid'

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
      <h1 className="container text-center mt-5">Noticias</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {news &&
          news.map((e) => {
            let { name, image, createdAt, id } = e;
            return (
                <div key={uuidv4()} className="card text-center" style={{ width: "18rem", margin: "1rem" }}>
                  <img key={uuidv4()} src={image} className="card-img-top" alt="..." />
                  <div key={uuidv4()} className="card-body">
                    <h3 key={uuidv4()} className="card-text ">
                      <Link key={uuidv4()} to={`${id}`} className="text-danger">
                        {name}
                      </Link>
                    </h3>
                    <p key={uuidv4()}>
                      <small key={uuidv4()}>{moment(createdAt).format("LLL")}</small>
                    </p>
                  </div>
                </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
