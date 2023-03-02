import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import defaultValues from '../utils/defaultValues'
import './styles/LoginPage.css'

const LoginPage = () => {

  const [token, setToken] = useState()

  const {register, handleSubmit, reset} = useForm()

  const submit = data =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios.post(url, data)
    .then(res=>{
      console.log(res.data)
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('name', `${res.data.user.firstName}  ${res.data.user.lastName}`)
    })
    .catch(err=>{
      console.log(err)
      localStorage.clear()
    })
    reset(defaultValues)
  }

  const handleClick = () =>{
    localStorage.clear()
    setToken()
  }

  if(localStorage.getItem('name')){
    return(
      <div className='card_logout'>
        <article className='logout_article'>
          <i className='bx bx-user-circle'></i>
          <h2 className='logout_name'>{localStorage.getItem('name')}</h2>
          <button className='logout_btn' onClick={handleClick}>Logout</button>
        </article>
        
      </div>
    )
  }else{
    return (
    <div className='card_login'>
        <form className='login_form' onSubmit={handleSubmit(submit)}>
          <h2 className='login_title'>Welcome! Enter your email and password to continue</h2>
          <div className='login_list'>
            <label className='login_iten' htmlFor="email">Email</label>
            <input className='login_inp' {...register("email")} type="email" id='email'/>
          </div>
          <div className='login_list'>
            <label className='login_iten' htmlFor="password">Password</label>
            <input className='login_inp' {...register("password")} type="password" id='password'/>
          </div>
          <button className='login_btn'>Login</button>
          <p>Don't have an account? <Link to='/user/register'>Go to register</Link></p>
          
        </form>
    </div>
  )
  }

  
}

export default LoginPage