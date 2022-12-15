import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/contact';
import Programs from './components/programs/programs';
import Students from './components/students/students';


const App=()=>{
  return (
    <div>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/students'>Students</Link></li>
          <li><Link to='/Programs'>Programs</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/programs' element={<Programs />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>  
    </div>
  );
}

export default App;
