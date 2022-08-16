import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {

  const role = useSelector((state) => state.auth.user.roleId);
  const isLoggedIn = useSelector((state) => state.auth.user.isLoggedIn);
  console.log(role, props.roleId)

  if (props.role && role === props.role) {
    return (
      <Outlet/>
    )
  } else if (props.logged && isLoggedIn) {
    return (
      <Outlet/>
    )
  } else {
    return <Navigate to='/'/>
  }
}

export default PrivateRoute