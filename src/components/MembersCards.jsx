import React, { useEffect, useState } from 'react'
import {v4 as uuidv4 } from 'uuid'
import httpService from '../services/httpService';

const service = new httpService();

const MembersCards = (props) => {

  const [members, setMembers] = useState([])
  useEffect(() => {
    service.get("members").then((res) => {
      setMembers([...res]);
    });
  }, [])


  return (
    <div className='container'>
      <div className='mt-2'>
        <div className='row'>
          {
            members && (
              members.map((item) => (
                <div key={uuidv4()} className='card border-0 col-4 col-md-3 col-lg-2 mx-2 mb-5' style={{width:"20%"} } onClick={() => props.onClick(item)}>
                  <img className=' imagen-card img-fluid rounded-5 shadow' src={`process.env.REACT_APP_API_URL/images/${item.image}`} alt={item.image} />
                  <div className='card-img-overlay d-flex justify-content-end flex-column'>
                    <p className='m-0 text-light fw-bolder fs-5 text-center'>{item.name}</p>
                    <p className='m-0 text-light fs-8 text-center'>{item.role}</p>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}
export default MembersCards