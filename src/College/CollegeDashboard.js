import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function CollegeDashboard() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

     const formData = new FormData();
  formData.append('file', image);
  formData.append('name', name);
  formData.append('mobilenumber', number);
  formData.append('email', email);
  formData.append('address', address);

    axios.post(`http://localhost:8080/College/Collegedasboard/add`, formData , {headers: {
      'Content-Type': 'multipart/form-data'},})
      .then((res) => {
        toast.success(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <div className='text-center mb-3'>
      <center>
        <h1>Add Student Details</h1>
        <form className='card w-50 text-center form-control' onSubmit={handleSubmit}>
          <label>Enter Student Name</label>
          <input type="text" id="name" value={name} className='p-1 form-control mb-2' onChange={(e) => setName(e.target.value)} required></input>
          <label>Enter Conntact Number</label>
          <input type="tel" id="number" value={number} className='p-1 form-control mb-2' onChange={(e) => setNumber(e.target.value)} required></input>
          <label>Enter E-mail ID</label>
          <input type="email" id="email" value={email} className='p-1 form-control mb-2' onChange={(e) => setEmail(e.target.value)} required></input>
          <label>Enter student Address</label>
          <textarea type="textarea" id="address" className='form-control mb-3' onChange={(e) => setAddress(e.target.value)} required></textarea>
          <label>Student Passport Size Photo</label>
          <input type="file" id="imageInput" accept="image/*" className='form-control mb-3 mt-1' onChange={(e) => setImage(e.target.files[0])} required></input>
          <center>
            <button type="submit" className='btn btn-success w-25'>Add Data</button>
          </center>
        </form>
      </center>
    </div>
  );
}
