import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const {register, handleSubmit, reset} = useForm() 

  const submit = data =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    axios.post(url, data)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    reset(defaultValues)

  }

  return (
    <div className='card_register-page'>
      <form className='register_card-form' onSubmit={handleSubmit(submit)}>
        <h2>Sing Up</h2>
      <div className='register_div'>
        <label className='register_label' htmlFor="email">Email</label>
        <input className='register_input' {...register('email')}  type="email" id='email'/>
      </div>
      <div className='register_div'>
        <label className='register_label' htmlFor="firstName">First name</label>
        <input className='register_input' {...register('firstName')} type="text" id='firstName'/>
      </div>
      <div className='register_div'>
        <label className='register_label' htmlFor="lastName">Last name</label>
        <input className='register_input' {...register('lastName')}  type="text" id='lastName'/>
      </div>
      <div className='register_div'>
        <label className='register_label' htmlFor="password">Password</label>
        <input className='register_input' {...register('password')}  type="password" id='password'/>
      </div>
      <div className='register_div'>
        <label className='register_label' htmlFor="phone">Phone</label>
        <input className='register_input' {...register('phone')}  type="number" id='phone'/>
      </div>
      <button className='register_btn'>Sign up</button>
    </form>
    </div>
    
  )
}

export default RegisterPage