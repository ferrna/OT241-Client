import React,{useState, useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'

import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";

const NewsById = () => {
  const {id} = useParams()
  const [data, setData] = useState({})

  useEffect(()=>{
    axios.get(`http://localhost:3000/news/${id}`)
    .then(res => {
        setData(res.data.news)
    })
  },[])
  
  return (
    <div className='d-flex flex-column mb-3 justify-content-center align-items-center'>
        <h1>{data.name}</h1>
        <p><small>{Date(data.createdAt)}</small></p>
        <img src={data.image} alt="" />
        <p>{data.content}</p>
        <Link to="/news">Volver</Link>
    </div>
  )
}

export default NewsById