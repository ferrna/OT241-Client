import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

let isAdmin = true

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(()=>{

    axios.get("http://localhost:3000/testimonials")
    .then(res => {
        setTestimonials(res.data)
    })

  },[])
  
  return (
    <>
    {isAdmin && <Link className='btn btn-danger' to={`/backoffice/testimonials/`}>Create New Testimonial</Link>}
    <div style={{display: "flex",justifyContent:"center",alignItems:'baseline',flexWrap:"wrap"}}>
        {testimonials && testimonials.map((e,i) => {
            return (
                <>
                    <div className="card" style={{width: "18rem", margin:"1rem"}}>
                        <img className="card-img-top" src={`http://localhost:3000${e.imageUrl}`} alt="photoperfil"/>
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text text-center" dangerouslySetInnerHTML={{__html: e.content}}/>
                            {isAdmin && <Link className='btn btn-danger' to={`/backoffice/testimonials/${e.id}`}>Edit</Link>}
                        </div>
                    </div>
                </>
            )
        })}
    </div>
    </>
  )
}

export default Testimonials