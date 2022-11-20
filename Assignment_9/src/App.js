import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <nav>
        <Link to = '/'>Home</Link> {" "}
        <Link to = '/AboutUs'>AboutUs</Link> {" "}
        <Link to = '/Contact'>Contact</Link> {" "}
        <Link to = '/Jobs'>Jobs</Link> {" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
      </Routes>
      <h1>Footer!!</h1>
    </Router>
  );
}

export default App;
