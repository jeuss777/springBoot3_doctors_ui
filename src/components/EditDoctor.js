import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './../styles.css';

const EditDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    contactNumber: '',
    email: '',
    officeAddress: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/doctors/${id}`)
      .then(response => setDoctor(response.data))
      .catch(error => console.error('Error fetching doctor:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/doctors/${id}`, doctor)
      .then(response => console.log('Doctor updated:', response.data))
      .catch(error => console.error('Error updating doctor:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Doctor</h2>
      <input type="text" name="firstName" value={doctor.firstName} placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" value={doctor.lastName} placeholder="Last Name" onChange={handleChange} />
      <input type="text" name="specialization" value={doctor.specialization} placeholder="Specialization" onChange={handleChange} />
      <input type="text" name="contactNumber" value={doctor.contactNumber} placeholder="Contact Number" onChange={handleChange} />
      <input type="email" name="email" value={doctor.email} placeholder="Email" onChange={handleChange} />
      <input type="text" name="officeAddress" value={doctor.officeAddress} placeholder="Office Address" onChange={handleChange} />
      <button type="submit">Update Doctor</button>
    </form>
  );
};

export default EditDoctor;