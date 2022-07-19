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
        <MenuButton title='Novedades' icon={<FaRegNewspaper />}/>
        <MenuButton title='Actividades' icon={<FaClipboardList />}/>
        <MenuButton title='Categorias' icon={<FaList />}/>
        <MenuButton title='Testimonios' icon={<BsFillChatFill />}/>
        <MenuButton title='Organizacion' icon={<RiOrganizationChart />}/>
        <MenuButton title='Slides' icon={<BsFillFileEarmarkSlidesFill />}/>
        <MenuButton title='Usuarios' icon={<FaUserAlt />}/>
        <MenuButton title='Miembros' icon={<IoIosPeople />}/>
      </div>
    </div>
  )
}

export default Backoffice