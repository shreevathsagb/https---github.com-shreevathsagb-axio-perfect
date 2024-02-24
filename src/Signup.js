import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";



function Signup(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    //const [msg, setMsg] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(name,email,password);
        console.log(name);
        if (name === "Police"){
            
            var dataPolice={
                id:email,
                password:password
            };
            axios
            .post("http://localhost:8080/Signup/Police", dataPolice)
            .then((res) => {
                console.log("Data added");
                toast.success("Registered Success");
            })
            .catch((error) => {
                console.error("Error from server:", error);
                toast.error("Registration Failed");
            });
        

  
        }
        if (name === "Passport"){

            var dataPassport={
                id:email,
                password:password
            };
            axios
            .post("http://localhost:8080/Signup/Passport", dataPassport)
            .then((res) => {
                toast.success("Registered Success");
            })
            .catch((error) => {
                console.error("Error from server:", error);
                toast.error("Registration Failed");
            });
        

        }
        if (name === "College"){

            var dataCollege={
                id:email,
                password:password
            };
            axios
            .post("http://localhost:8080/Signup/College", dataCollege)
            .then((res) => {
                toast.success("Registered Success");
            })
            .catch((error) => {
                console.error("Error from server:", error);
                toast.error("Registration Failed");
            });
        

        }
    }
    return(
        <div>
            <h1 className="text-center">Add your details</h1>
            <div className="card text-center w-50 mx-auto my-5">
                <form onSubmit={handleSubmit}>
                    <center>
                    <label className="mb-2 mt-2 w-50">Select Your Category</label>
                    <select id="Name" className='form-select mb-2 w-50' required onChange={(e)=>setName(e.target.value)}>
                                <option>Select user type</option>
                                <option value="Police">Police</option>
                                <option value="College">College</option>
                                <option value="Passport">Passport</option>
                    </select>
                    </center>

                    <label className="mb-2">Enter your email</label>
                    <center>
                    <input type="email" id="email" placeholder="Enter your email" className='form-control mb-3 w-50'  onChange={(e)=>setEmail(e.target.value)} required></input>
                    </center>
                    <label className="mb-2">Enter your Password</label>
                    <center>
                    <input type="password" id="password" placeholder="Enter your password" className='form-control mb-3 w-50'  onChange={(e)=>setPassword(e.target.value)} required></input>
                    </center>
                    <button type="submit" className="btn btn-success mt-2 mb-3 m-5     ">Submit</button>
                    <Link to="/Login" className="btn btn-danger mt-2 mb-3 m-5 p-2">Already Have an Account</Link>

                </form>
            </div>
        </div>
    );
}


export default Signup;