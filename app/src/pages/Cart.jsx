import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = () => {

  const [cart,setCart] = useState([])

  useEffect(()=>{

    const fetchcart = async()=>{
      const response = await fetch("http://localhost:5000/api/cart")
      const data = await response.json()
      setCart(data)
    }
    fetchcart() 
  },[])

  return (
    <div className='cart'>
      {
        cart.map((item)=>(
          <div key={item._id} className='inner-cart'>
            <img src={item.image} className='image'></img>
            <h3 className='price'>{item.price}</h3>
            <h4 className='description'>{item.description}</h4>
            <h4 className='quantity'>quuantity :</h4>
            <button className='remove'>remove</button> 
            </div>
        ))
          
      }
    </div>
  )
}

export default Cart