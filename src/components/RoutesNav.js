import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import NewsBackOffice from "../pages/NewsBackOffice";
import NewsForm from "../pages/NewsBackOffice/NewsForm";
import OrganizacionBackoffice from "../pages/OrganizacionBackOffice";
import Backoffice from "./Backoffice";
import Login from "../pages/Login";
import RegisterForm from "./RegisterForm";
import Profile from "../pages/Profile";
import Contacto from "../pages/Contacto";
import News from "../components/News";
import NewsById from "../components/News/NewsById/index";
import Contacts from "../pages/Contacts/Contacts.jsx";
import Testimonials from "../components/Testimonials"
import Testimonials from "./Testimonials";
import Members from "../pages/Members/Members";
import CategoriesBackOffice from "../pages/CategoriesBackOffice";
import CategoriesForm from "../pages/CategoriesBackOffice/CategoriesForm";
import ActivitiesBackOffice from "../pages/ActivitiesBackOffice";
import ActivitiesForm from "../pages/ActivitiesBackOffice/ActivitiesForm";
import TestimonialsBackOffice from "../pages/TestimonialsBackOffice";
import TestimonialsForm from "../pages/TestimonialsBackOffice/TestimonialsForm";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./transitions.css";

const RoutesNav = () => {
  const { key } = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={key} classNames="dialog" timeout={1000}>
        <div className="min-vh-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backoffice" element={<Backoffice />} />
            <Route path="/backoffice/categories" element={<CategoriesBackOffice />} />
            <Route path="/backoffice/categories/edit/:id" element={<CategoriesForm />} />
            <Route path="/backoffice/categories/edit/" element={<CategoriesForm />} />
            <Route path="/backoffice/activities" element={<ActivitiesBackOffice />} />
            <Route path="/backoffice/activities/edit/:id" element={<ActivitiesForm />} />
            <Route path="/backoffice/edit-organization" element={<OrganizacionBackoffice />} />
            <Route path="/backoffice/news" element={<NewsBackOffice />} />
            <Route path="/backoffice/news/edit/:id" element={<NewsForm />} />
            <Route path="/backoffice/testimonials" element={<TestimonialsBackOffice />} />
            <Route path="/backoffice/testimonials/edit/:id" element={<TestimonialsForm />} />
            <Route path="/backoffice/user" element={<Profile />} />
            <Route path="/backoffice/contacts" element={<Contacts />} />
            <Route path="ingreso" element={<Login />} />
            <Route path="registro" element={<RegisterForm />} />
            <Route path="nosotros" element={<Members />} />
            <Route path="testimonios" element={<Testimonials />} />
            <Route path="contribuye" element={<h2>CONTRIBUYE</h2>} />
            {/* <Route path="novedades" element={<Novedades />} /> */}
            <Route path="contacto" element={<Contacto />} />
            {/* <Route path="contacto" element={<Contacto />} /> */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsById />} />
            <Route path="*" element={<h2>Esta pagina aun no fue creada</h2>} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesNav;
