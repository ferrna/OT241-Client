import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import img2 from "../../images/loginimg.jpg";
import axios from 'axios'
import MembersCards from '../../components/MembersCards';

const Home = () => {

  const navigate = useNavigate()
  const [members, setMembers] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/members')
    .then((res) => {
      setMembers(res.data);
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/testimonials')
    .then((res) => {
      setTestimonials(res.data);
    })
  }, [])

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

      <div className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='h2'>Nuestro Staff</h2>
          <Link to='nosotros'>Ver todos &gt;</Link>
        </div>
        <div className='row'>
          {members.slice(3).map((member) => (
            <div key={member.id} className='card border-0 col p-2'>
              <img className='img-fluid h-100 rounded-5 shadow ' src={`http://localhost:3000/images/${member.image}`} alt={member.image} />
              <div className='card-img-overlay d-flex flex-column align-items-center justify-content-end text-center'>
                <p className='text-light fw-bolder fs-5'>{member.name}</p>
                <p className='text-light'>{member.role}</p>
              </div>
            </div>)
          )}
        </div>
      </div>

      <div className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='h2'>Testimonios</h2>
          <Link to='testimonios'>Ver todos &gt;</Link>
        </div>
        <div className='row row-cols-5'>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='card border-0 col m-2 rounded-4' style={{backgroundColor: '#FAFA88'}}>
              <img className='card-img-top w-50 mt-3 rounded-circle ' src={`http://localhost:3000/images/a7be39f693f676ce8650dfc1776ed33f`} alt={testimonial.imageUrl} />
              <div className='card-body d-flex flex-column align-items-center justify-content-end text-center'>
                <p className='fw-bolder fs-5'>{testimonial.name}</p>
                <p className=''>{testimonial.content}</p>
              </div>
            </div>)
          )}
        </div>
      </div>

    </div>
  )
}

export default Home