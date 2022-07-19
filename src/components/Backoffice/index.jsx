import React from 'react'
import MenuButton from "./MenuButton.jsx";
import { FaRegNewspaper, FaClipboardList, FaList, FaUserAlt } from 'react-icons/fa'
import { BsFillChatFill, BsFillFileEarmarkSlidesFill } from 'react-icons/bs'
import { RiOrganizationChart } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'

const Backoffice = () => {
  return (
    <div className='container'>
      <div class="row row-cols-4">
        <MenuButton title='Novedades' icon={<FaRegNewspaper />} to='Novedades'/>
        <MenuButton title='Actividades' icon={<FaClipboardList />} to='Actividades'/>
        <MenuButton title='Categorias' icon={<FaList />} to='Categorias'/>
        <MenuButton title='Testimonios' icon={<BsFillChatFill />} to='Testimonios'/>
        <MenuButton title='Organizacion' icon={<RiOrganizationChart />} to='Organizacion'/>
        <MenuButton title='Slides' icon={<BsFillFileEarmarkSlidesFill />} to='Slides'/>
        <MenuButton title='Usuarios' icon={<FaUserAlt />} to='Usuarios'/>
        <MenuButton title='Miembros' icon={<IoIosPeople />} to='Miembros'/>
      </div>
    </div>
  )
}

export default Backoffice