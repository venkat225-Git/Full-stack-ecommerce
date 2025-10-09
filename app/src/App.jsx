import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Productlisting from './pages/Productlisting'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Productdetails from './pages/Productdetails'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Productlisting/>} />
        <Route path='/product/:id' element={<Productdetails/>} />
        <Route path='/cart/' element={<Cart />}/>
        <Route path='/cart/:id' element={<Cart />}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App 