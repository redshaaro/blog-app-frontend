import "./register.css"
import axios from 'axios'
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"


export default function Register() {
  const [username,setUser]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,seterror]=useState(false)
  
  const handleSubmit= async(e)=>{
    e.preventDefault(); 
    try{
      seterror(false)
    const res = await axios.post('/auth/register',{
      username,email,password
    });
    console.log(res)
    res.data && window.location.replace('/login')
    

  }catch(err){
    console.log(err)
    seterror(true)
  }}

  



    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input onChange={e=>{setUser(e.target.value)}} className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input onChange={e=>{setEmail(e.target.value)}} className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input onChange={e=>{setPassword(e.target.value)}} className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
       <Link to={"/login"}> <button className="registerLoginButton">Login </button> </Link> 
        {error && <span style={{color:"red", marginTop:"10px"}}>something went wrong</span>}
    </div>
    )
}