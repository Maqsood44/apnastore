import React from 'react'
import Home from './Pages/Home'
import Navbars from './Components/Navbars'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import {Routes, Route, Navigate} from 'react-router-dom'
import './custom.css'

function index() {
  return (
    <>
    <Navbars />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />

      <Route path="*" element={<Navigate to='/login' replace={true} />} />
    </Routes>
    <Footer />
    </>
  )
}

export default index
