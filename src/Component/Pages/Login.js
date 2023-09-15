import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import axios from 'axios'
const loginData ={
  email: "",
  password :""
}
const Login = () => {
  const [data , setData]= useState(loginData);
  
  const navi =useNavigate()
  const changeHandler=(input , value)=>{
    setData((prev)=>{
     return{
      ...prev,
      [input] : value
     }

    })
  }

  const submit =(e)=>{
    e.preventDefault();

    setData(loginData)

   axios.post("https://node4-server.onrender.com/user/category/login",data)
   .then(res => {
    if(res.data.token){
      navi("/dashboard")
    }
     localStorage.setItem("token" ,res.data.token)
      console.log(res.data)
  })
   .catch(err => console.log(err))

   

  }


  

  return (
    

    <form className='login__form'
       
    >
        <h1>LOGIN</h1>
      <div className='login__display'>
      
      <input id='email' type='email' placeholder=' ' onChange={event=> changeHandler("email", event.target.value)} value={data['email']} autoComplete='off' required/>
      <span>Email</span>
      </div>
      
      <div className='login__display'>
      
      <input id='password' type='password' placeholder=' ' onChange={event =>changeHandler("password", event.target.value)} value={data['password']} autoComplete='off' required/>
      <span>Password</span>
      </div>
      
      <div className='login__display'>
        <button type='submit'  onClick={submit}>Sign in</button>
      </div>

      <Link to='/signup'><div className='registerPage'>+</div></Link>

    </form>
  )
}

export default Login
