import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navi =useNavigate()
    const [data , setData] = useState("");
   const token= localStorage.getItem("token")
   const navigator = ()=>{
    navi("/")
   }
   const click = (e)=>{
        e.preventDefault();
        console.log(token)
       axios.get("https://node4-server.onrender.com/user/category/dashboard",{
           headers:{
               "authorization" :`bearer ${token}`
               
           }
       })
      .then((res) => { 
        setData(res.data) 
         console.log(res.data)})
      .catch(err => console.log(err))
   }
  return (
    
    <div>
     <h1> Welcome to Prepbytes</h1>
      <button onClick={click}>Validated Data</button>

      <h2>NAME :{data.name}</h2>
      <h2>EMAIL :{data.email}</h2>
      

      <div>
        <button onClick={navigator}>
           Log Out
        </button>
      </div>
      
    </div>
  )
}

export default DashBoard
