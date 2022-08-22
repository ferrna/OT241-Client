import React, { useEffect, useState } from "react";
import Activity from "./ActivityItem";
import httpService from "../../services/httpService";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./styles.css";

const service = new httpService();

function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    service.get("activities").then((res) => {
      setActivities(res);
    });
  }, []);

  return (
    <div className="module--activities">
      <h2 className="text-center fw-semibold" style={{ margin: "4.8rem 0 1.6rem 0" }}>
        Actividades
      </h2>
      <div
        className="d-flex flex-wrap w-100 justify-content-center align-content-start"
        style={{ marginBottom: "4rem" }}
      >
        {activities &&
          activities.map((news, i) => {
            let props = { ...news, i };
            return <Activity key={uuidv4()} {...props} />;
          })}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="module--btnInicio button px-5 py-2 fs-5 rounded-3 border border-1 border-dark">
            Ir a Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Activities;
