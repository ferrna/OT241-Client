import React,{useState} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const RegisterFormEdit = ({setInfoHome,setImages,infoHome,images}) => {
    const [newImage,setNewImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='w-100 d-flex justify-content-center text-center'>
        <form className='d-flex flex-column w-50'>
            <label htmlFor="title">Insert Title:</label>
            <input 
                type="text" 
                name="title"
                required 
                onChange={(e)=>{
                    setInfoHome({
                        ...infoHome,
                        [e.target.name] : e.target.value
                    })
                }}/>
            <label htmlFor="description" >Insert Description:</label>
            <textarea 
            name="description" 
            id="description" 
            cols="10" 
            minlength="20"
            required
            onChange={(e)=>{
                        setInfoHome({
                            ...infoHome,
                            [e.target.name] : e.target.value
                        })
            }}></textarea>
            <div>
                <input type="file" onChange={(e)=>{
                    setNewImage(e.target.files[0])
                }}/>
                {isLoading && <Loader/>}
                <button onClick={async (e)=>{
                    try{
                        e.preventDefault()
                    
                        const formData = new FormData()
                        formData.append("image", newImage)
                        //formData.append("caption",caption)
    
                        console.log('Enviando')
                        setIsLoading(true)
                        let response = await axios.post("http://localhost:3000/images",formData, {headers: {'Content-Type':'multipart/form-data'}})
                        
                        if(response.response) setIsLoading(false)
                        setIsLoading(false)
                    }catch(err){
                        console.log(err)
                    }
                }}>Upload</button>
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default RegisterFormEdit