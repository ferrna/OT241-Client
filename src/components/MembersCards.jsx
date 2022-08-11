import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {v4 as uuidv4 } from 'uuid'

const MembersCards = () => {

    const [members, setMembers] = useState([])
    useEffect(() => {
        const getMembers = async() => {
            const {data} = await axios.get("http://localhost:3000/members")
            return data
        }
        getMembers().then((r) => setMembers(r))
    }, [])


  return (
    <div>
         <div className='mt-2 container'>
            <div className='row justify-content-center'>
        {
            members && (
                members.map((item) => (
                            <div key={uuidv4()} className='card border-0 col-sm-3 col-lg-2 mx-2 mb-5'>
                                <img key={uuidv4()} className='img-fluid rounded-5 shadow ' src={`http://localhost:3000/images/${item.image}`} alt={item.image} />
                                    <div className='card-img-overlay d-flex align-items-end justify-content-center'>
                                        <h5 className='text-light' key={uuidv4()}>{item.name}</h5>
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