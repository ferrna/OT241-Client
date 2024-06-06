import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {

  const role = useSelector((state) => state.auth.user? state.auth.user.roleId : null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if ((props.role && role === props.role) || (props.logged && isLoggedIn)) {
    return (
      <Outlet/>
    )
  } else {
    return <Navigate to='/'/>
  }
}

export default ProtectedRoute