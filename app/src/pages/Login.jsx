import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message, setMessage] = useState("")

  const details = {email,password}


  const savelogin = async() =>{
      const response = await fetch("http://localhost:5000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(details)
    })
    const data = await response.json()
    console.log(data)
     
    if (response.ok) {
      setMessage("✅ Login successful!")
    } else {
      setMessage("❌ Invalid email or password")
    }
  }

  const handleemail = (e) =>{
    setEmail(e.target.value)
  }
  const handlepassword = (e) =>{
    setPassword(e.target.value)
  }
  
  return (
    <div className='login'>
      <h3>Login</h3>
      <input placeholder='email' onChange={handleemail}></input>
      <input placeholder='password' onChange={handlepassword}></input>
      <button onClick={savelogin}>submit</button>
      <p>{message}</p>
    </div>
  )
}

export default Login 