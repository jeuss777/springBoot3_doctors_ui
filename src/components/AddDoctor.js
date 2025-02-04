import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorList from './DoctorList.js';
import axios from 'axios';
import './../styles.css';

const AddDoctor = () => {
 
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    contactNumber: '',
    email: '',
    officeAddress: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/doctors', doctor)
      .then(response => {
        console.log('Doctor added:', response.data);
        //navigate('/DoctorList');        
      })
      .catch(error => console.error('Error adding doctor:', error));
      //return alert("Error: " + error);
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Doctor</h2>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="officeAddress" placeholder="Office Address" onChange={handleChange} />
      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default AddDoctor;