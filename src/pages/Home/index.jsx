import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import img2 from "../../images/loginimg.jpg";
import { v4 as uuidv4 } from 'uuid'
import httpService from '../../services/httpService';

const service = new httpService();

const Home = () => {
  const navigate = useNavigate()
  const [members, setMembers] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [news, setNews] = useState([])
  const [publics, setPublics] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersRes, testimonialsRes, newsRes, publicsRes] = await Promise.all([
          service.get("members"),
          service.get("testimonials"),
          service.get("news"),
          service.get("organization/1/public")
        ]);

        setMembers([...membersRes]);
        setTestimonials([...testimonialsRes]);
        setNews([...newsRes]);
        setPublics([...publicsRes.publicResult]);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='d-flex'>
        <div className='container w-50' style={{height: 'fit-content', alignSelf: 'center'}}>
          <h2 className='h1'>{publics[0] ? publics[0]?.welcomeTitle : 'Hola! Bienvenidx'}</h2>
          <p className='lead'>{publics[0]?.welcomeText}</p>
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
          members.slice(0,4).map((member) => (
            <div key={uuidv4()} className='card border-0 col-4 col-md-3 col-lg-2 m-1 mb-5' style={{width:"20%"}}>
                  <img className=' imagen-card img-fluid rounded-5 shadow' src={`${member.image}`} alt={member.image} />
                  <div className='card-img-overlay d-flex justify-content-end flex-column'>
                    <p className='m-0 text-light fw-bolder fs-5 text-center'>{member.name}</p>
                    <p className='m-0 text-light fs-8 text-center'>{member.role}</p>
                  </div>
                </div>
            )
          )}
        </div>
      </div>

      <div className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='h2'>Testimonios</h2>
          <Link to='testimonios'>Ver todos &gt;</Link>
        </div>
        <div className='row row-cols-4'>
          {testimonials === null ?
          <h2>Could not load data</h2> :
          testimonials.slice(0,4).map((testimonial) => (
            <div key={uuidv4()} className='card border-0 col m-2 rounded-5' style={{backgroundColor: '#FAFA88'}}>
              <img className='card-img-top w-50 mt-3 rounded-circle shadow mx-auto' src={`${testimonial.imageUrl}`} alt='' />
              <div className='card-body d-flex flex-column align-items-center justify-content-start text-start'>
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
        <div className='row row-cols-2'>
          {news === null ?
          <h2>Could not load data</h2> :
          news.slice(0,2).map((item) => (
          <div key={uuidv4()} className="card mb-3 py-3 m-2 border-0 rounded-4" style={{maxWidth: "540px", backgroundColor: "#9AC9FB"}}>
            <div className="row g-0">
              <div className="col-md-12">
                <img src={`${item.image}`} className="img-fluid rounded-3 shadow" alt="..." />
              </div>
              <div className="col-md-12" style={{maxHeight: '400px', overflow: 'hidden'}}>
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