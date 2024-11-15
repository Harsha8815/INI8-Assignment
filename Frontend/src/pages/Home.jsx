import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const [users,setusers]=useState([])

  const {id}=useParams()
  
  useEffect (()=>{
  loadusers();
  },[]);
  const loadusers =async ()=>{
    const result =await axios.get("http://localhost:8080/users");
    setusers(result.data);
  };

  const deleteuser =async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadusers();
  }

  return (
    <div className='container'>
      <div className='py-4'>
    <table className="table text-center m-2 table-striped  border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
    {
      users.map((user,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td> 
        <Link className='btn btn-primary mx-2'
          to={`/Viewuser/${user.id}`}
        >View</Link>
        <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-1'>Edit</Link>
        <button className='btn btn-danger mx-1'
          
          onClick={()=>deleteuser(user.id)}
        
        >Delete</button>
      </td>
        </tr>
      ))
    }
  </tbody>
</table>
</div>
</div>
  )
}
