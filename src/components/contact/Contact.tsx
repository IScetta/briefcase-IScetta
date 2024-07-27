"use client"

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export interface error {
    email?: string;
    name?: string;
    content?: string;

}

const Contact = ()=>{
    return(
      <section>
        <h2 className=" flex items-center text-[35px] border-b-4 border-offRed">
        {" "}
        <div className="text-offRed pr-2">&lt;</div>Contacto
        <div className="text-offRed pl-2">&gt;</div>
      </h2>

  <div className='flex flex-col mt-6 ml-[25%]  bg-no-repeat bg-cover bg-center w-[50%] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdbVIHNxi_n0f-d4d7A9erHHZ4Owfo6q3Yw&s")]  rounded-xl '>
  <div className='backdrop-blur-md w-full rounded-xl h-full flex-col justify-center items-center p-10'>

    <h1 className='flex text-center text-[20px] p-2 mb-10 text-white  font-bold'>Necesitas contactarme o dejarme un comentario</h1>
    <Formik
      initialValues={{ name:"", email: '', content: '' }}
      validate={values => {
        const errors:error= {};
        if(!values.name){
          errors.name = '*Requerido'
        }  if (!values.email) {
          errors.email = '*Requerido';
        }  if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = '*Correo Invalido';
        }  if (!values.content) {
          errors.content = '*Requerido';
        }
        
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center mb-5 w-full'>
          <label htmlFor="name" className='text-[18px] text-white font-semibold'>Nombre:</label>
          <Field type ="text" name="name" className="text-[12px] my-2 p-2 bg-opacity-20 bg-white text-white w-[75%] rounded-md "/>
          <ErrorMessage name="name" component="div" className='text-red-600 text-[14px] font-semibold bg-white bg-opacity-35 p-1 rounded-xl  animate-fade-down animate-once animate-ease-in-out'/>
          </div>

          <div className='flex flex-col justify-center items-center mb-10 w-full'>
          <label htmlFor="email" className='text-[18px] text-white font-semibold'>Correo Electronico:</label>
          <Field type="email" name="email" className="text-[12px] my-2 p-2 bg-opacity-20 bg-white text-white w-[75%] rounded-md "/>
          <ErrorMessage name="email" component="div" className='text-red-600 text-[14px] font-semibold bg-white bg-opacity-35 p-1 rounded-xl  animate-fade-down animate-once animate-ease-in-out'/>
          </div>


          <label htmlFor="content" className='text-[18px] text-white font-semibold'>Contenido:</label>
          <Field component="textarea" name="content" rows="5" className="text-[12px] my-2 p-2 bg-opacity-20 bg-white text-white w-[75%] rounded-md "/>
          <ErrorMessage name="content" component="div" className='text-red-600 text-[14px] font-semibold bg-white bg-opacity-35 p-1 rounded-xl  animate-fade-down animate-once animate-ease-in-out'/>
          <button type="submit" disabled={isSubmitting} className=' p-2 py-1 m-4 mt-14 rounded-lg bg-blue-500 hover:bg-blue-400 text-[20px] border-2 border-white'>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  </div>
  </div>
      </section>
);

}

export default Contact;