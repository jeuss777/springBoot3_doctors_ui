import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddDoctor from './AddDoctor.js';
import EditDoctor from './EditDoctor.js';
import DeleteDoctor from './DeleteDoctor.js';
import axios from 'axios';
import './../styles.css'; 


const DoctorList = () => {
  const { doctorId } = useParams();
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const handleEdit = (doctorId) => {
    navigate(`/EditDoctor/${doctorId}`);
  };

  const handleDelete = (doctorId) => {
    navigate(`/DeleteDoctor/${doctorId}`);
  };

  const handleAdd = () => {
    navigate(`/AddDoctor`);
  };

  return (
    <div>
    <h2>Doctors</h2>

    <td>
        <button onClick={() => handleAdd()}>+</button>
    </td>
    <table class="table table-striped">
        
        <thead>
            <tr>   
                <th>Actions</th>   
                <th>Delete</th>     
                <th>Name</th>
                <th>Last Name</th>
                <th>Specialization</th> 
                
            </tr>
        </thead>
        <tbody>
        {doctors.map(doctor => (
          <tr key={doctor.id}>
            <td>
                <button onClick={() => handleEdit(doctor.id)}>Edit</button>
            </td>
            <td>
                <button onClick={() => handleDelete(doctor.id)}>Delete</button>
            </td>
            <td>{doctor.firstName}</td>
            <td>{doctor.lastName}</td> 
            <td>{doctor.specialization}</td>
            
        </tr>
        ))}
        </tbody> 
    </table>
    </div>
  );
};

export default DoctorList;