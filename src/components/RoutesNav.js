import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NovedadWrapper from "../pages/Novedad/Wrapper";
import Backoffice from "./Backoffice";

const RoutesNav = () => {
  return (
    <div className="min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novedad/:id" element={<NovedadWrapper />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/route2" element={<h2>Route 2</h2>} />
      </Routes>
    </div>
  );
};

export default RoutesNav;
