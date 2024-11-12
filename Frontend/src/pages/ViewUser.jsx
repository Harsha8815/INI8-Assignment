import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
    const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h2 className='text-center'>View User</h2>
    <div className='container mt-5 w-60 '>
      <div className="card " >
     <div className="card-header text-center ">
     <b className='text-shadow'>Details of user Id: {user.id}</b>
    </div>
     <ul className="list-group text-left list-group-flush">
    <li className="list-group-item"><b>Name:</b> {user.name}</li>
    <li className="list-group-item"><b>Username:</b> {user.username}</li>
    <li className="list-group-item"><b>Email:</b> {user.email}</li>
    </ul>
</div>
    <div className='text-center'>
<Link to='/' className='btn m-2 btn-primary'>Back to Home</Link>
   </div>
    </div>
    </div>
  )
}
