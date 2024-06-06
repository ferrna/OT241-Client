import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import httpService from '../../services/httpService';

const service = new httpService();

const MembersForm = () => {
    const {state} = useLocation()
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const navigate = useNavigate()

    const [nombre, setNombre] = React.useState(state.props.name)
    const [image, setImage] = React.useState([])
    const [puesto, setPuesto] = React.useState(state.props.role)
    const [nombre2, setNombre2] = React.useState("")
    const [puesto2, setPuesto2] = React.useState("")

    const createMember = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("role", puesto2)
            formData.append("image", image)
            formData.append("name", nombre2)
            await service.post("members", formData, config)
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
    }

    const editMembers = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("image", image)
            formData.append("name", nombre)
            await service.put("members", state.props.id, formData, config)
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        {
            state.props === 0 ? (
                <div>
                    <h1 className='container text-center mt-5'>Crear Miembro</h1>
                            <div className='container'>
                                <div className='container d-flex justify-content-center'>
                                        <form id='formulario' onSubmit={createMember}>
                                            <input type="hidden" defaultValue={state.props.id} />
                                            <label className='label-form'>Nombre</label>
                                            <input className='form-control' name="name" type="text" value={nombre2} onChange={e => setNombre2(e.target.value)} />
                                            <label className='label-form mt-2'>Puesto</label>
                                            <input className='form-control' type="text" name="text" value={puesto2} onChange={e => setPuesto2(e.target.value)}/>
                                            <label className="form-label mt-2">Selecciona una imagen</label>
                                            <input type="file" name="image" onChange={e => setImage(e.target.files[0])} accept="image/*" className="form-control"/>
                                            <button type='submit' className="btn btn-danger mt-2">Crear miembro</button>
                                        </form>
                                </div>
                            </div>

                </div>
            ) : (
                <div>
                    <h1 className='container text-center mt-5'>Editar Miembro</h1>
                            <div className='container'>
                                <div className='container d-flex justify-content-center'>
                                        <form id='formulario' onSubmit={editMembers}>
                                            <input type="hidden" defaultValue={state.props.id} />
                                            <label className='label-form'>Nombre</label>
                                            <input className='form-control' name="name" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                                            <label className='label-form mt-2'>Puesto</label>
                                            <input className='form-control' type="text" name="text" value={puesto} onChange={e => setPuesto(e.target.value)}/>
                                            <label className="form-label mt-2">Selecciona una imagen</label>
                                            <input type="file" name="image" onChange={e => setImage(e.target.files[0])} accept="image/*" className="form-control"/>
                                            <button type='submit' className="btn btn-warning mt-2">Editar miembro</button>
                                        </form>
                                </div>
                            </div>

                </div>
            )
        }
    </div>
  )
}

export default MembersForm