import React from 'react'

const MenuButton = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.icon}
      <a href={props.to}>Ir</a>
    </div>
  )
}

export default MenuButton