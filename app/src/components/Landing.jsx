import React from 'react'
import img from '../assets/mylanding.jpg'
import "./Landing.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing-banner'>
      <Link to="/products"><img src={img} className='img'></img></Link>
    </div>
  )
}

export default Landing