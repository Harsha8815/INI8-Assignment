import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Edituser from './pages/Edituser';
import AddUser from './pages/AddUser';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewUser from './pages/ViewUser';

export default function App() {
  return (
    <div className='App  '>
     <Router>
      <Navbar/>
     <Routes >
      <Route  exact path='/' element={<Home/>}/>
      <Route  exact path='/adduser' element={<AddUser/>}/>
      <Route  exact path='/edituser/:id' element={<Edituser/>}/>
      <Route  exact path='/Viewuser/:id' element={<ViewUser/>}/>
      </Routes>
      
      </Router>
    </div>
    
  )
}
