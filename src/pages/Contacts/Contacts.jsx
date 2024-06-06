import React, {useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import httpService from '../../services/httpService';
//import moment from 'moment'

const service = new httpService();

const Contacts = () => {
    const [data, setData] = React.useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(!token) return
        const config = {headers: {Authorization: `Bearer ${token}`}}
        service.get("contacts", null, null, config).then((res) => {
            setData([...res]);
        });
    }, [token])

    console.log(data)
  return (
    <div>
        <h1 className='container text-center mt-5'>Lista de Contactos</h1>
        <div className='container'>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Fecha de Creación</th>
                    </tr>
                </thead>
                    <tbody>
                    {data ? (
                        data.map((item) => (
                            <tr key={uuidv4()}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{new Date(item.createdAt).format('DD/MM/YYYY')}</td>
                            </tr>
                        ))
                      ) : null
                    }
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default Contacts