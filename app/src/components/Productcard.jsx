import React, { useEffect, useState } from 'react'
import './Productcard.css'
import { useNavigate } from 'react-router-dom'

const Productcard = () => {

  const[products,setProducts] = useState([])
  const[category,setCategory] = useState("All")

  const navigate = useNavigate()

  const handle = async ()=>{
    const data = await fetch("http://localhost:5000/api/products")
    const response = await data.json()
    setProducts(response)
  }

  useEffect(()=>{
    handle() 
  },[])

  
  const filters = category === "All" ? products : products.filter((item)=> item.category=== category)
  

  const handleclick = (id) =>{
    navigate(`/product/${id}`)
  }
  const handleall = () => {
    setCategory("All") 
  }
  const handlemen = () => {
    setCategory("men")
  }
  const handlewomen = () => {
    setCategory("women")
  }
  const handlekids =() =>{
    setCategory("children")
  }
  return (
    <div>
      <div className='filter-bar'>
        <button>Filters</button>
        <button onClick={handleall}>All</button>
        <button onClick={handlemen}>Men</button>
        <button onClick={handlewomen}>Women</button>
        <button onClick={handlekids}>Kids</button>
        <button>Home</button>
        <button>Beauty</button>
      
      </div>
      <div className="products-grid"> 
        {
          filters.map((p)=>(
            <div key={p._id} className="product-card" onClick={() => handleclick(p._id)}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <h3>{p.price}</h3>
              <h4>{p.category}</h4>
              <h4>{p.description}</h4>
            </div> 
          ))
        }
    </div>
    </div>
  )
}

export default Productcard