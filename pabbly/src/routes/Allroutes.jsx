import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Component/navbar'
import Login from '../Component/Login'
import Signup from '../Component/Signup'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default Allroutes
