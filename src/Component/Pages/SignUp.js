import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const registerInput ={
  name:"",
  phone:"",
  email:"",
  password:""
}
const SignUp = () => {
  
  const [data , setData]= useState(registerInput)
  const navi = useNavigate()

  const changeHandler =(input , value)=>{
    setData((prev)=>{
      return{
        ...prev,
        [input]: value
      }
    })
  }

  const submit =(e)=>{
    e.preventDefault()
    setData(registerInput)
    
    axios.post('https://node4-server-6wje.onrender.com/user/category/register',data)
    .then((res)=>console.log(res.data), navi("/"))
    .catch(err => console.log(err))
  }


  return (
   
      
      <form className='signup__form'>
        <h1>Register</h1>
        <div className='signup__display'>
        
        <input id='name' type='text' placeholder=' ' onChange={e=>changeHandler("name",e.target.value)} value={data['name']} autoComplete='off' required/>
        <span>User Name</span>
        </div>

      <div className='signup__display'>
      
        <input id='phone' type='number' placeholder=' ' onChange={e=>changeHandler("phone",e.target.value)} value={data['phone']} autoComplete='off' required/>
        <span>Phone Number</span>
      </div>
       
        <div className='signup__display'>
        <input id='email' type='email' placeholder=' ' onChange={e=>changeHandler("email",e.target.value)} value={data['email']}autoComplete='off'  required/>
        <span>Email</span>
        </div>
        
        <div className='signup__display'>
        <input id='password' type='password' placeholder=' ' onChange={e=>changeHandler("password",e.target.value)} value={data['password']} autoComplete='off' required/>
        <span>Password</span>
        </div>

        <div className='signup__display'>
          <button type='submit'  onClick={submit}>Register</button>
        </div>

        
           <Link className='login' to='/'><div className='loginPage'>X</div></Link>
        


      </form>
      
    
  )
}

export default SignUp


