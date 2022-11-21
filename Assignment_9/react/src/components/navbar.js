import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './navbar.css';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Jobs from '../pages/Jobs';


export default function Navbar(){
  return <nav className="nav">
    <a href="/" className="site-title"></a>
    <Link to="/Home">Home</Link> {" "}
    <Link to="/AboutUs">AboutUs</Link> {" "}
    <Link to="/Contact">Contact</Link> {" "}
    <Link to="/Jobs">Jobs</Link> {" "}
    <button onClick={logout}>Logout</button>
    <Routes>
          <Route path="/Home" element={<Home />} ></Route>
          <Route path="/AboutUs" element={<AboutUs />} ></Route>
          <Route path="/Contact" element={<Contact />} ></Route>
          <Route path="/Jobs" element={<Jobs />} ></Route>
    </Routes>
</nav>
function logout(){
  localStorage.removeItem('token');
  window.location.href = "/";
}
}