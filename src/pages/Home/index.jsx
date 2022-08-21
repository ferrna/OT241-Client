import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router'
import img2 from "../../images/loginimg.jpg";

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='container mt-5'>

      <div className='d-flex'>
        <div className='container w-50' style={{height: 'fit-content', alignSelf: 'center'}}>
          <h2 className='h1'>Hola! Bienvenidx</h2>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe pariatur ut consectetur minima reiciendis iste quibusdam aliquam rerum, autem vitae, aperiam animi magnam aspernatur. Pariatur ea expedita earum saepe inventore.</p>
          <button className='btn btn-danger px-4 py-2 fw-bolder shadow-sm' onClick={() => navigate("/contacto")}>Contactanos</button>
        </div>
        <div className='container w-50'>
          <img className='img-fluid rounded' src={img2} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home