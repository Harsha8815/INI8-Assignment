import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

 let navigate=useNavigate()

  const[user,setuser]=useState({
    name:"",
    username:"",
    email:""
})

   const{name,username,email}=user;

   const onInputChange=(e)=>{
      setuser({...user,[e.target.name]:e.target.value});
   };

   const onSubmit=async (e)=>{
   e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
     navigate("/")
   };

  return (
    <div className='container-fluid'>
       <div className='row'>
         <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-3'>Register User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' name="name"  value={name} onChange={(e)=>onInputChange(e)}   placeholder='Enter Your Name' className='form-control'></input>
          <label htmlFor='Username' className='form-label'>UserName</label>
          <input type='text'  name="username" value={username} onChange={(e)=>onInputChange(e)}  placeholder='Enter Your UserName' className='form-control'></input>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='text'name="email"  value={email}  onChange={(e)=>onInputChange(e)}  placeholder='Enter Your Email' className='form-control'></input> 
           <div className='text-center'>
            <button  type="submit" className='btn m-2 btn-outline-primary'>Submit</button>
            <Link to='/' className='btn m-2 btn-outline-danger'>Cancel</Link>
            </div>
          </form>
          </div>
       </div>
      </div>
  )
}
