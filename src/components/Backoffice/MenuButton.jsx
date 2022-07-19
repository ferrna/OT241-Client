import React from 'react'

const MenuButton = (props) => {
  return (
    <div className='container-sm shadow p-3 mb-5 bg-body rounded'>
      <h2 className='h6 text-center'>{props.title}</h2>
      <div className='col text-center'>{props.icon}</div>
      <a className='d-flex justify-content-center bg-primary text-white' href={props.to}>Ir</a>
    </div>
  )
}

export default MenuButton