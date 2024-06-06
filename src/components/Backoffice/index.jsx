import React from "react";
import MenuButton from "./MenuCard.jsx";
import { FaRegNewspaper, FaClipboardList, FaList, FaUserAlt } from "react-icons/fa";
import { BsFillChatFill, BsFillFileEarmarkSlidesFill } from "react-icons/bs";
import { RiOrganizationChart, RiEdit2Line, RiContactsBook2Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { useSelector } from 'react-redux'

const Backoffice = () => {
  const roleUser = useSelector((state) => state.auth.user.roleId);

  return (
    <>
      {roleUser === 1 ? (
        <div className="container-fluid p-5" style={{ backgroundColor: "#edf2f7" }}>
          <div className="row">
            <MenuButton title="Novedades" icon={<FaRegNewspaper />} to="news" />
            <MenuButton title="Actividades" icon={<FaClipboardList />} to="activities" />
            <MenuButton title="Categorias" icon={<FaList />} to="categories" />
            <MenuButton title="Testimonios" icon={<BsFillChatFill />} to="testimonials" />
          </div>
          <div className="row">
            <MenuButton title="Organizacion" icon={<RiOrganizationChart />} to="Organizacion" />
            <MenuButton title="Slides" icon={<BsFillFileEarmarkSlidesFill />} to="Slides" />
            <MenuButton title="Usuarios" icon={<FaUserAlt />} to="Usuarios" />
            <MenuButton title="Miembros" icon={<IoIosPeople />} to="Miembros" />
          </div>
          <div className="row">
            <div className="w-25 p-0 pe-3">
              <MenuButton title="Contactos" className='m-0' icon={<RiContactsBook2Fill />} to="contacts" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="container-fluid p-5"
            style={{ backgroundColor: "#edf2f7", maxWidth: "calc(400px + 6rem)" }}
          >
            <div className="row" style={{ maxWidth: "400px" }}>
              <MenuButton title="Editar Perfil" icon={<RiEdit2Line />} to="/backoffice/user" />
            </div>
          </div>
          <div
            className="container-fluid p-5"
            style={{
              backgroundColor: "#edf2f7",
              maxWidth: "calc(400px + 6rem)",
              marginTop: "1rem",
            }}
          >
            <div className="row" style={{ maxWidth: "400px" }}>
              <MenuButton title="Editar Testimonios" icon={<RiEdit2Line />} to="testimonials" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Backoffice;
