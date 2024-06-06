import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation, useNavigate } from 'react-router';
import httpService from '../../services/httpService';

const service = new httpService();

const NewsForm = () => {
    const navigate = useNavigate()
    const {state} = useLocation()

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    
    //States
    const [title, setTitle] = React.useState(state.props.name)
    const [content, setContent] = React.useState(state.props.content)
    const [title2, setTitle2] = React.useState("")
    const [content2, setContent2] = React.useState("") 
    const [image, setImage] = React.useState([])

    //editar novedades
    const editNews = async(ev) => {
        ev.preventDefault()
        
        try {
            const formData = new FormData()
            formData.append("image", image)
            formData.append("name", title)
            formData.append("content", content)
            await service.put("news", state.props.id, formData, config)
            navigate(-1)
        } catch (err) {
            console.log(err)
        }

    }
    //Crear novedades
    const createNews = async(ev) => {
        ev.preventDefault()

        try {
            const formData = new FormData()
            formData.append("image", image)
            formData.append("name", title2)
            formData.append("content", content2)
            const form = document.getElementById("formulario")
            await service.post("news", formData, config)
            form.reset()
            navigate(-1)
        } catch (e) {
            console.log(e)
        }
    }
    
  return (
    <div>
        {
            state.props === 0 ? (
                <div className='container'>
                    <h1 className='text-center mt-5'>Crear Novedad</h1>
                    <div className='container d-flex justify-content-center'>
                        <form id='formulario' onSubmit={createNews}>
                            <label className='label-form'> Titulo</label>
                            <input type="text" className="mb-2 form-control" value={title2} onChange={e => setTitle2(e.target.value)} placeholder='Titulo'/>
                            <label className="form-label mt-2">Selecciona una imagen</label>
                            <input type="file" name="image" onChange={e => setImage(e.target.files[0])} accept="image/*" className="form-control"/>

                        <label className='label-form mt-2'>Contenido</label>
                        <CKEditor   
                                    
                                    editor={ ClassicEditor }
                                    data={content2}
                                    onChange={(event, editor) => {
                                        setContent2(editor.getData())
                                    }}
                                />
                                <button type='submit' className="btn btn-danger mt-2">Crear Novedad</button>
                        </form>
                    </div>
                </div>
                

            ): (
                <div className='container'>
                    <h1 className='text-center mt-5'>Editar Novedad</h1>
                    <div className='container d-flex justify-content-center'>
                    <form id='formulario' onSubmit={editNews}>
                        <input type="hidden" defaultValue={state.props.id} />
                        <label className='label-form'> Titulo</label>
                        <input type="text" className="mb-2 form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder='Titulo'/>
                        <label className="form-label mt-2">Selecciona una imagen</label>
                        <input type="file" name="image" onChange={e => setImage(e.target.files[0])} accept="image/*" className="form-control"/>

                    <label className='label-form mt-2'>Contenido</label>
                    <CKEditor   
                                
                                editor={ ClassicEditor }
                                data={content}
                                onChange={(event, editor) => {
                                    
                                     setContent(editor.getData())
                                } }
                            />
                            <button type='submit' className="btn btn-warning mt-2">Editar Novedad</button>
                    </form>
                    </div>
                </div>
            )

        }
    </div>
  )
}

export default NewsForm