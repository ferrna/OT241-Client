import React from 'react';
import { Formik, Form, Field , ErrorMessage } from 'formik';
import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

let http = helpHttp()

const ActivitiesForm = () => {

  let [sendForm,setSendForm] = useState(false)
  let [error, setError] = useState(null)

  return (
    <>
      <div className='d-flex flex-column ms-20 text-center'>
        <h1>Añadir Actividad</h1>
      </div>
      <Formik
      initialValues={
        {
          nombre: '',
          contenido: ''
        }
      }

      validate={(values)=>{
        let {nombre, contenido} = values
        let myErrors = {}

        //Validate a name:
        if(!nombre){
          myErrors.nombre = "Please insert a name"
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre)){
          myErrors.nombre = "The name can only contain letters and spaces"
        }

        //Validate a lastName:
        if(!contenido){
          myErrors.contenido = "Please insert a Last name"
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(contenido)){
          myErrors.contenido = "The Last Name can only contain letters and spaces"
        }
        return myErrors
      }}

      onSubmit={(values, {resetForm})=>{
        // resetForm()
        // //Aqui va la peticion fetch para crear el usuario en la base de datos EJ:
        // fetch('/users/auth/register', {
        //   method: 'POST',
        //   headers:{
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(values)
        // })
        // http.post('users/auth/register',{
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: values
        // }).then(res => {
        //   if(res.errors) setError(res.errors)
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
        //   setSendForm(true)
        //   setError(null)
        //   setTimeout(()=>{
        //     setSendForm(false)
        //     setError(false)
        //   },2000)
      }}
      >

        { ( {errors,touched} ) =>(
          <Form className='d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-center w-50 fw-bold mb-5'>
            <div className="mb-3 w-50">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <Field
                type="text"
                className="form-control"
                id="nombre"
                name='nombre'
              />
              {touched.nombre && errors.nombre && <div className='alert alert-danger' role='alert'>{errors.nombre}</div>}
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="contenido" className="form-label">
                Contenido
              </label>
              <Field
                type="textarea"
                className="form-control"
                id="contenido"
                name='contenido'
              />
              {touched.contenido && errors.contenido && <div className='alert alert-danger' role='alert'>{errors.contenido}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-50 fw-bold" style={{backgroundColor: '#FF0000'}}>
              Create
            </button>
            {error ? <div>Error unsuccess</div> : sendForm && <div className='alert alert-success' role='alert'>Register Success</div> }
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ActivitiesForm