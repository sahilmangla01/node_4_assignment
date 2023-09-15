import React from 'react'
import {Routes , Route} from "react-router-dom"
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import DashBoard from '../Pages/DashBoard'

const RouteComponent = () => {
 
  return (
   
      <Routes >
        
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
      </Routes>
  )
}

export default RouteComponent
