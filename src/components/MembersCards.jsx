import React, { useEffect, useState } from 'react'
import {v4 as uuidv4 } from 'uuid'
import httpService from '../services/httpService';
import m from './MembersCards.module.css'

const service = new httpService();

const MembersCards = (props) => {

  const [members, setMembers] = useState([])
  useEffect(() => {
    service.get("members").then((res) => {
      setMembers([...res.slice(1)]);
    });
  }, [])


  return (
    <div className='container'>
      <div className='mt-2'>
        <div className='row'>
          {
            members && (
              members.map((item) => (
                  <div key={uuidv4()} style={{width:"25%", marginBottom: '2rem'}}>
                  
                <div className='card border-0 col-4 col-md-3 col-lg-2 mx-2 mb-2 w-100'>
                  <img className='imagen-card img-fluid rounded-5 shadow' src={`${item.image}`} alt={item.image} />
                  <div className='card-img-overlay d-flex justify-content-end flex-column'>
                    <p className='m-0 text-light fw-bolder fs-5 text-center'>{item.name}</p>
                  </div>
                </div>
                  <div className='w-100'>
                    <p className='m-0 text-black fs-8 text-center' style={{paddingBottom: '1rem'}}>{item.role}</p>
                    <p className={`m-0 text-black fs-8 text-center ${m.m}`} style={{borderTop: '1px solid grey', paddingTop: '1rem', maxHeight:'400px', overflowY: 'scroll'}}>{item.description}</p>
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