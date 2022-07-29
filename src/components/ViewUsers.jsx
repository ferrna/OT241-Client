import React from 'react';
import users from '../helpers/mockUsers.js';

const ViewNews = () => {

    
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
                      <td>{d.email}</td>
                      <td><button id={index+1} onClick={(id)=>console.log(`Editando ${id.target.id}`)}>Edit</button></td>
                        <td><button id={index+1} onClick={(id)=>console.log(`Eliminando ${id.target.id}`)}>Delete</button></td>
                        
                   </tr>
                 
                    
               ))}
                     
               </tbody>
               
           </table>
               
           </div>
     );
}
 
export default ViewNews;