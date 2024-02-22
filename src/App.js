import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './App.css';


function App() {

  const [type,setType]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  function handleSubmit(e) {
    e.preventDefault();
    console.log(typeof(type));
    console.log(typeof(email));
    console.log(typeof(pass));



    const data = {
      "usertype":type,
       id:email,
      "password":pass
    };
  
    axios.post('http://localhost:8080/LoginVerify', data)
    .then((_res) => {
      sessionStorage.setItem("UserId", email);
      toast.success("Login successful");
    })
    .catch((error) => {
      console.error("Error during login:", error);
    toast.error("Login failed");
    });
  
}


  return (
    <div className='card text-center w-50 mx-auto my-5'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Select</label>
        <center>
          <select id="Type" className='form-select mb-2 w-50' required onChange={(e)=>setType(e.target.value)}>
            <option>Select user type</option>
            <option value="Admin">Admin</option>
            <option value="Police">Police</option>
            <option value="College">College</option>
            <option value="Passport">Passport</option>


          </select>
        </center>

        <label htmlFor="email">
          Enter your Email id
        </label>
        <center>
          <input type="email" id="email" className='form-control mb-2 w-50' required onChange={(e)=>setEmail(e.target.value)}/>
        </center>

        <label htmlFor="pass">
          Enter your password
        </label>
        <center>
          <input type="password" id="pass" className='form-control mb-2 w-50' required onChange={(e)=>setPass(e.target.value)} />

        </center>
        <button className='btn btn-primary mb-2 p-2' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
