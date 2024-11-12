import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar   bg-primary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand mb-0 h1 text-white">Employee Managment services</Link>

    <Link  to="/adduser" className='btn btn-outline-light' >Add user</Link>
   
   
  </div>
   </nav>

  )
}
