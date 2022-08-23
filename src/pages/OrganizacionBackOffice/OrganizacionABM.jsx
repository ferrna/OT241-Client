import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import httpService from '../../services/httpService.js'
import { useNavigate } from "react-router-dom";

let serviceHttp = new httpService()


const OrganizacionABM = () => {
    const [data,setData] = useState([])
    const [socials,setSocials] = useState([])
    let navigate = useNavigate();
    
    const handleClick = (e) => {
        if(e.target.name === "edit"){
            console.log(e.target.id)
            navigate(`edit/${e.target.id}`)
        }else if(e.target.name === "delete"){
            console.log(e.target.id)
        }
     }

    useEffect(()=>{
        serviceHttp.get('organizations/1/public').then(res => {
            console.log(res)

            setData(res.publicResult)
            setSocials(res.socialResult)
        }).catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:"100%",height:"100vh"}}>
        <div  className="table-responsive">
            <table className="table" style={{margin:"0 auto", width:"90%"}}>
                <thead className="table-dark text-center">
                    <tr>
                        <th>Logo</th>
                        <th>Nombre</th>
                        <th>Celular</th>
                        <th>Email</th>
                        <th>Imagen de bienvenida</th>
                        <th>Texto de bienvenida</th>
                        <th>Titulo de bienvenida</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                {
                            data.map(e => {
                                return(
                                    <tr style={{fontWeight:"bold"}}>
                                        <td><img src={e.image} alt="imagephoto" style={{width:"10.5rem"}}/></td>
                                        <td>{e.name}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.email}</td>
                                        <td><img src={e.welcomeImage} alt="" style={{width:"10.5rem"}}/></td>
                                        <div style={{height:"176px",width:"230px",textOverflow:"ellipsis",overflow:"hidden"}}>
                                            <td>{e.welcomeText}</td>
                                        </div>
                                        <td>{e.welcomeTitle}</td>
                                        <td>
                                            <button type="button" class="btn btn-danger" onClick={handleClick} name="edit" id={e.id}>Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    
    </div>
  )
}

export default OrganizacionABM