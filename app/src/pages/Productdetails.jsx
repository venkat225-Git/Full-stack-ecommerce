import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'
import './Productdetails.css'


const Productdetails = () => {

  const[product,setProduct] = useState("")
  const {id} = useParams()
  useEffect(()=>{
    const fetchdata = async()=>{
      const response = await fetch(`http://localhost:5000/api/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }
    fetchdata()
  },[id])

  const handleclick = async (id) =>{
    const response = await fetch("http://localhost:5000/api/cart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ productId: id })
    })
    const data =await response.json()
    console.log(data)
  }


  return (
    <div className='card'>
      {
        <div key={product._id} className='details'>
          <img src={product.image}></img>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
          <h2>{product.category}</h2>
          <h2>{product.description}</h2>
          <button onClick={()=>{handleclick(product._id)}}>Add to Cart</button>
        </div>
      }
    </div>
  )
}

export default Productdetails  