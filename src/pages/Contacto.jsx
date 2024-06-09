import React,{useState} from 'react'
import Loader from '../components/Loader'
import httpService from '../services/httpService'

const service = new httpService()

const Contacto = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})

    const sendMessage = async (e) => {
        //Prevent refresh
        e.preventDefault()
        //send Logic
        let myNewData = {
            name: data.nombre,
            email: data.email,
            message: data.comentario
        }

        let res = await service.post('contacts', myNewData, { headers:{'Content-Type': 'application/json'} })
        setIsLoading(true)
        if(res.statusText === "OK") setIsLoading(false)
        //Clear Form
        document.getElementById("form").reset()
    }

    
    const handleInputChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
  return (
    <div className='mt-5'>
        <h1 className="text-center">
            Formulario de Contacto
        </h1>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                <h2>Nos pondremos en contacto a la brevedad,</h2>
                    <p className="fs-5">Realiza cualquier consulta sobre nuestros programas, actividades o proyectos; informanos sobre algun acontecimiento, problema o situación; o ponte en contacto con nosotros y te estaremos respondiendo o contactando a la brevedad. Gracias.</p>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <form onSubmit={sendMessage} id="form">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" name= "nombre" aria-describedby="emailHelp" placeholder="Nombre" required onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name= "email" placeholder="correo@correo.com" required onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" name= "comentario" placeholder="Deje su comentario aquí" style={{height: "100px"}} required onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
        {isLoading && <Loader/>}
    </div>
  )
}

export default Contacto