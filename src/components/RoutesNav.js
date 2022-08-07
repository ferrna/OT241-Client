import React from "react";
import { Routes, Route } from "react-router-dom";
import ActividadesBackOffice from "../pages/ActividadBackOffice";
import TestimonialsBackOffice from "../pages/TestimonialsBackOffice";
import Home from "../pages/Home/index.jsx";
import NovedadPage from "../pages/NovedadPage";
import NovedadesBackOffice from "../pages/NovedadBackOffice";
import OrganizacionBackoffice from "../pages/OrganizacionBackOffice";
import Backoffice from "./Backoffice";
import Login from "../pages/Login";
import RegisterForm from "./RegisterForm";
import Profile from "../pages/Profile";

const RoutesNav = () => {
  return (
    <div className="min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route
          path="/backoffice/edit-organization"
          element={<OrganizacionBackoffice />}
        />
        <Route path="/backoffice/news" element={<NovedadesBackOffice />} />
        <Route path="/backoffice/activities" element={<ActividadesBackOffice />} />
        <Route path="/novedad/:id" element={<NovedadPage />} />
        <Route path="ingreso" element={<Login />} />
        <Route path="registro" element={<RegisterForm />} />
        <Route path="nosotros" element={<h2>NOSOTROS</h2>} />
        <Route path="testimonios" element={<Testimonials/>} />
        <Route path="contribuye" element={<h2>CONTRIBUYE</h2>} />
        {/* <Route path="novedades" element={<Novedades />} /> */}
        <Route path="contacto" element={<Contacto />} />
        {/* <Route path="contacto" element={<Contacto />} /> */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsById />} />
        <Route path="*" element={<h2>Esta pagina aun no fue creada</h2>} />
      </Routes>
    </div>
  );
};

export default RoutesNav;
