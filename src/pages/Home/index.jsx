import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import img2 from "../../images/loginimg.jpg";
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate()
  const [members, setMembers] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/members')
    .then((res) => {
      setMembers(res.data);
    })
    .catch((err) => {
      setMembers(null)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/testimonials')
    .then((res) => {
      setTestimonials(res.data);
    })
    .catch((err) => {
      setTestimonials(null)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/news')
    .then((res) => {
      setNews(res.data);
    })
    .catch((err) => {
      setNews(null)
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
          {members === null ?
          <h2>Could not load data</h2> :
          members.slice(0,5).map((member) => (
            <div key={member.id} className='card border-0 col-md-2'>
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
          {testimonials === null ?
          <h2>Could not load data</h2> :
          testimonials.slice(0,5).map((testimonial) => (
            <div key={testimonial.id} className='card border-0 col m-2 rounded-4' style={{backgroundColor: '#FAFA88'}}>
              <img className='card-img-top w-50 mt-3 rounded-circle ' src={testimonial.imageUrl} alt='' />
              <div className='card-body d-flex flex-column align-items-center justify-content-end text-center'>
                <p className='fw-bolder fs-5'>{testimonial.name}</p>
                <p className=''>{testimonial.content}</p>
              </div>
            </div>)
          )}
        </div>
      </div>

      <div className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='h2'>Novedades</h2>
          <Link to='novedades'>Ver todos &gt;</Link>
        </div>
        <div className='row row-cols-3'>
          {news === null ?
          <h2>Could not load data</h2> :
          news.slice(0,3).map((item) => (
          <div className="card mb-3 rounded-4" style={{maxWidth: "540px", backgroundColor: "#9AC9FB"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-3" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">{item.content}</p>
                  <button className='btn btn-primary w-100 f-bolder shadow' onClick={() => navigate(`news/${item.id}`)}>Ver Novedad</button>
                </div>
              </div>
            </div>
          </div>)
          )}
        </div>
      </div>

    </div>
  )
}

export default Home