import React,{useState,useEffect,useRef} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import axios from 'axios'
import Loader from '../Loader';

import "bootstrap/dist/css/bootstrap.min.css";

const FormEdit = () => {
    const {id} = useParams()
    const Navigate = useNavigate()
    const inputFile = useRef()
    const [isLoading, setIsLoading] = useState(false);
    let [mydata, setMyData] = useState({
        name: '',
        imageUrl: ''
    })
    let [files, setFiles] = useState()
    let [myContent, setMyContent] = useState()

    useEffect(()=>{
            axios.get(`http://localhost:3000/testimonials/${id}`)
            .then(res => {
                let myObject = {
                    name : id ? res.data.name : '',
                    content : id ? res.data.content : '',
                    imageUrl : id ? res.data.imageUrl : '',
                }
                setMyData(myObject)
            })
    },[id])


    const getUrlImg = async () => {
            //Get URL image first
            let data = null;

            const formData = new FormData()
            formData.append("image",files)
        
            const config = {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              };
              
            setIsLoading(true);
            data = await axios.post("http://localhost:3000/images",formData,config)
            if(data != null) setIsLoading(false)
            
            console.log(data)
            clearInputFile()
            setMyData({
                ...mydata,
                imageUrl: data.data.imagePath
            })
    }

    const handleChange = (e) => {
        setMyData({
            ...mydata,
            name : e.target.value
        })
    }

    const handleUpload = (e) =>{
        e.preventDefault()

        getUrlImg()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(id){
            //Edit
                setIsLoading(true)
                let res = await axios.put(`http://localhost:3000/testimonials/${id}`,{
                    name: mydata.name,
                    content: myContent,
                    imageUrl: mydata.imageUrl
                })
                if(res.data[0] === 1) {
                    setIsLoading(false)
                    alert('Testimonio editado con exito')
                }
            Navigate('/testimonios')
        }else{
            //create
            console.log('create')
            let res = await axios.post('http://localhost:3000/testimonials',{
                name: mydata.name,
                content: myContent,
                imageUrl: mydata.imageUrl
            })

            if(res.statusText === "OK"){
                alert('USUARIO CREADO CON EXITO')
                Navigate('/testimonios')
            }
            console.log(res)
        }
    }

    const handleFile = (e) => {
        setFiles(e.target.files[0])
    }

    const clearInputFile = () => {
        inputFile.value = undefined
    }

  return (
    <div>
        <form onSubmit={handleUpload}>
                    <input type="file" onChange={handleFile} ref={inputFile}/>
                    <input type="submit" value="upload" />
        </form>

        <form className='d-flex flex-column w-50 m-50' onSubmit={handleSubmit}>
            <input type="text" name='name' className='mb-1' placeholder={id ? mydata.name : ''} onChange={handleChange}/>
            {isLoading && <Loader />}
            <div className='mb-1'>
                <CKEditor
                    name="content" 
                    editor={ ClassicEditor }
                    data={id ? mydata.content : ''}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setMyContent(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            <input type="submit" name="" id="" value={id ? 'edit' : 'create'}/>
        </form>
    </div>
  )
}

export default FormEdit