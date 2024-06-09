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
          setMember({...res});
          console.log(res)
        });
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5'>¡Nuestro Staff!</h1>
            <div className='container mt-5'>
                <div className='d-flex justify-content-evenly'>
                    <div className='w-sm-100 col-sm-12 col-lg-6 pt-2'>
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.description}</p>
                    </div>
                    <div className='col-sm-12 col-lg-3 d-flex justify-content-center'>
                        <img className='img-fluid rounded-5' style={{maxWidth: '250px'}} src={`${member.image}`} alt={img3} />
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <MembersCards />
            </div>
            <div className='container mt-5 w-100 d-flex justify-content-center'>
                <a type='button' className='mb-5 btn btn-danger btn-lg mx-auto' href="/registro">¡Quiero ser parte!</a>
            </div>
        </div>
    )
}

export default Members