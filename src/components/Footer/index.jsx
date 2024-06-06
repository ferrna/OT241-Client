import React, { useState, useEffect } from 'react';
import Logo from '../../images/LOGO-SOMOS-MAS.png';
import { v4 as uuidv4 } from 'uuid'
import { useLocation, Link } from 'react-router-dom';

import httpService from "../../services/httpService";

const service = new httpService();

const NAV_LINKS = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Nosotros',
      path: '/nosotros',
    },
    {
      name: 'Novedades',
      path: '/news',
    },
    {
      name: 'Testimonios',
      path: '/testimonials',
    },
    {
      name: 'Contacto',
      path: '/contacto',
    },
    {
      name: 'Contribuye',
      path: '/contribuye',
    },
  ]
const Footer = ()=> {
    const { pathname } = useLocation()
    const [socials,setSocials] = useState([])

    useEffect(()=>{
        service.get('socialmedia').then(res => {
            setSocials([...res])            
        })
    },[])

    const getLinkClassName = path =>
      path === pathname
        ? 'text-decoration-none text-body fw-bold'
        : 'text-decoration-none text-body'
  
    return(
        <footer style={{
            backgroundColor: "#C0C0C0",
            marginTop: '6rem'
        }} className='container-fluid'>
            <section style={{flexGrow: '1'}} className="d-flex flex-column w-100 h-75 align-items-center justify-content-evenly">
                <div className="w-100 row bd-highlight align-items-center">
                    <span style={{
                            height: "2px",
                            backgroundColor: "#000000"
                        }} 
                        className="col-3 col-sm-5 w-30">
                    </span>
                    <img 
                        className="col-6 col-sm-2 w-30"
                        src={Logo} alt="Logo"    
                    />
                    <span style={{
                            height: "2px",
                            backgroundColor: "#000000"
                        }} 
                        className="col-3 col-sm-5 w-30">
                    </span>
                </div>
                <div className="p-2 bd-highlight w-75">
                    <ul className="list-unstyled d-flex flex-row flex-wrap flex-sm-nowrap justify-content-between">
                    {NAV_LINKS.map(({ name, path }) => (
                        <li key={uuidv4()}>
                            <Link className={getLinkClassName(path)} to={path}>
                                {name}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="w-100 row bd-highlight align-items-center">
                    <span style={{
                            height: "2px",
                            backgroundColor: "#000000"
                        }} 
                        className="col-12">
                    </span>
                </div>
                <div className="w-100 p-2 bd-highlight">
                    <ul className="w-50 list-unstyled mx-auto d-flex flex-row justify-content-between">
                        {socials && socials.map(e => 
                            <li key={uuidv4()} className="text-center p-2 text-white display-6" style={{width: "50px", height: "50px", textDecoration:"none"}}>
                                <a href={e.url}>
                                    <i className={`bi bi-${e.name.toLowerCase()}`}></i>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="p-2 bd-highlight">
                    <p className='text-center'>2023 by Alkemy. All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;