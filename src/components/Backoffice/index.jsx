import React from 'react'
import MenuButton from "./MenuButton.jsx";

const Backoffice = () => {
  return (
    <div className='container'>
      <div class="row row-cols-4">
        <MenuButton number='1'/>
        <MenuButton number='2'/>
        <MenuButton number='3'/>
        <MenuButton number='4'/>
        <MenuButton number='5'/>
        <MenuButton number='6'/>
        <MenuButton number='7'/>
        <MenuButton number='8'/>
      </div>
    </div>
  )
}

export default Backoffice