import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'moment/locale/es-mx'

const News = () => {
  //const navigate = useNavigate()
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getData() {
      let {data} = await axios.get(`${process.env.REACT_APP_API_URL}/news`);
      setNews(data);
    }

    getData();
    
  }, []);

  return (
    <div>
      <h1 className="container text-center mt-5">Novedades</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {news &&
          news.map((e) => {
            return (
              <div className="card mb-3 p-3 m-2 mt-5 border-0 rounded-4" style={{maxWidth: "540px", backgroundColor: "#9AC9FB"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`process.env.REACT_APP_API_URL/images/${e.image}`} className="img-fluid rounded-3 shadow" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">{e.content}</p>
                    <Link className='btn btn-primary w-100 f-bolder shadow' to={`${e.id}`}>Ver Novedad</Link>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
