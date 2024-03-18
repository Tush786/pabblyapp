import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Component/Login'
import Signup from '../Component/Signup'
import Taskcreate from '../TaskComp/Task'
import Taskcard from '../TaskComp/Taskcard'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/createtask' element={<Taskcreate/>} />
        <Route path='/taskcards' element={<Taskcard/>} />
      </Routes>
    </div>
  )
}

export default Allroutes
