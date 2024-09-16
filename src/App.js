import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DoctorList from './components/DoctorList';
import AddDoctor from './components/AddDoctor';
import EditDoctor from './components/EditDoctor.js';
import DeleteDoctor from './components/DeleteDoctor.js';
import TopNav from './components/TopNav';
import './App.css';


const App = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DoctorList" element={<DoctorList />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/EditDoctor/:id" element={<EditDoctor />} />
        <Route path="/DeleteDoctor/:id" element={<DeleteDoctor />} />
      </Routes>
    </Router>
  );
};

export default App;