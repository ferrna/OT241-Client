import React, { useState, useEffect } from 'react'
import MembersCards from '../../components/MembersCards';
import img3 from "../../images/img3.jpg";
import httpService from '../../services/httpService';

const service = new httpService();

const Members = () => {

    const [member, setMember] = useState({
        name: 'Roberto Martinez',
        role: 'Rol que desempeña',
        description: '',
        image: ''
    })

    useEffect(() => {
        service.get("members", 1).then((res) => {
          setMember({...res[0]});
        });
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5'>¡Nuestro Staff!</h1>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.description}</p>
                        <a type='button' className='mb-5 mt-5 btn btn-danger btn-lg' href="/registro">¡Quiero ser parte!</a>
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <img className='img-fluid rounded-5' src={`process.env.REACT_APP_API_URL/images/${member.image}`} alt={img3} />
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <MembersCards />
            </div>
        </div>
    )
}

export default Members