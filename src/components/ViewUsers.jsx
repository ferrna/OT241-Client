import React from 'react';
import users from '../helpers/mockUsers.js';
import { useNavigate } from "react-router-dom";

const ViewNews = () => {

    const navigate = useNavigate();
    
    return ( 
        <div>
     
        <table>
            <thead>
           <tr>
           <th >Nombre</th>
           <th >Edad</th>
           <th>Profesion</th>
           <th>Editar</th>
           <th>Elimminar</th>
       </tr>
       </thead>
              <tbody>
              
               {users.map((u,index) => (
                 
                        
                   <tr>
                      <td>{u.nombre}</td>
                      <td>{u.apellido}</td>
                      <td>{u.email}</td>
                      <td><button id={index+1} onClick={(id)=> navigate(`/backoffice/user?userId=${id.target.id}`,{state:{admin: true}})}>Edit</button></td>
                        <td><button id={index+1} onClick={(id)=>console.log(`Eliminando ${id.target.id}`)}>Delete</button></td>
                        
                   </tr>
                 
                    
               ))}
                     
               </tbody>
               
           </table>
               
           </div>
     );
}
 
export default ViewNews;