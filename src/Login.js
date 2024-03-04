import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import Admin from './Admin/Admin';
import CollegeDB from './College/CollegeDB';
import PoliceDB from './Police/PoliceDB';
import PassportstaffDB from './Passportstaff/PassportstaffDB';
import PoliceDashboard from './Police/PoliceDashboard';



function Login() {
  const navigate=useNavigate("")

  const [type,setType]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  //const [loggedInUserType, setLoggedInUserType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
       usertype:type,
       id:email,
       password:pass
    };
  
    axios.post('http://localhost:8080/LoginVerify', data)
    .then((_res) => {
    
      toast.success("Login successful");
      sessionStorage.setItem("email", email);
      if (type === "Admin"){
        navigate('/Admin');
      }
      else if (type === "Police"){
        navigate('/PoliceDashboard');
      }
      
      else if(type === "College"){
        navigate('/CollegeDashboard');
      }
      else if (type === "Passport"){
        navigate('/PassportstaffDashboard')
      }
      
    })

    
    .catch((error) => {
      console.error("Error during login:", error);
      toast.error("No User Found Please Sign Up");
    });


}


return (
  <>
   
      <div className='bg-white card text-center w-50 mx-auto my-5'>
        <center>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Type">Select User Type</label>
            <div>
              <select  id="Type" className='form-select mb-2 w-50' onChange={(e) => setType(e.target.value)}>
                <option>Select User Type</option>
                <option value="Admin">Admin</option>
                <option value="Police">Police</option>
                <option value="College">College</option>
                <option value="Passport">Passport</option>
              </select>
            </div>

            <label htmlFor="email">Enter your Email id</label>
            <input
              type="email"
              id="email"
              className='form-control mb-2 w-50'
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="pass">Enter your password</label>
            <input
              type="password"
              id="pass"
              className='form-control mb-2 w-50'
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <button className='btn btn-success mt-2 mb-3 m-5' type="submit">
              Submit
            </button>
            {type !== "Admin" && (
            <Link to="/Signup" className="btn btn-danger mt-2 mb-3 m-5 p-2">
              Don't have an account
            </Link>
            )}
          </form>
        </center>
      </div>
  
  </>
);
};

export default Login;


