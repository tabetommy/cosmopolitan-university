import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../home/home';
import Contact from '../contact/contact';
import Programs from '../programs/programs';
import Students from '../students/students';


const Main = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/students" element={<Students />}/>
                <Route path="/programs" element={<Programs />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
    )
    
}

export default Main