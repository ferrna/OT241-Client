import React from 'react'

// import RoutesNav from './components/RoutesNav.js';
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer';
import Backoffice from './components/Backoffice';
import Home from './pages/Home'
import ActivitiesForm from './components/ActivitiesForm'

import RegisterForm from './components/RegisterForm'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="">
      <Header />
      <ActivitiesForm />
      <Footer/>
    </div>
  )
}

export default App
