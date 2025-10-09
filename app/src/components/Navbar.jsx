import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/trendwear.jpg'
import img1 from '../assets/prof.jpg'
import img2 from '../assets/whishlist logo.jpg'
import img3 from '../assets/bag.webp'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='img'>
        <Link to="/"><img src={img} className='logo'></img></Link>
      </div>
      <div className='search'>
        <input placeholder='search your product'></input>
      </div>
      <div className='logos'>
        <Link to="/signup"><img src={img1} className='logo1'></img></Link>
        <img src={img2} className='logo2'></img>
        <Link to='/cart'><img src={img3} className='logo3'></img></Link>
      </div>
      <div className='auth-buttons'>
        <Link to="/signup" className='auth-link'>Sign Up</Link>
        <Link to="/login" className='auth-link'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar 