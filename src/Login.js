import imgbanner from '../foreignstudent.jpg'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const usertype = ["Admin", "PassportStaff","College","PoliceStaff"];
    const navigate = useNavigate();
    function handleLoginVerify(e) {
        debugger
        e.preventDefault();
        const data = {
            usertype: user,
            id: userid,
            password: password,
        };
        axios
            .post('http://localhost:8080/LoginVerify', data)
            .then((res) => {

                sessionStorage.setItem("UserId", userid)
                //alert("Login Successfully")
                toast.success("Login Successfully")

                debugger;
                if (user === "Admin") {
                    navigate("/admindashboard");
                } else if (user === "PassportStaff") {
                    navigate("/passportstaffdashboard");
                }
                else if (user === "College") {
                    navigate("/collegedashboard");
                }
                else if (user === "PoliceStaff") {
                    navigate("/policedashboard");
                }
                ClearAll();
            })
            .catch((err) => {
                console.log(err);
                alert("invalid")
            });
    }
    function ClearAll() {
        setPassword("");
        setUser("");
        setUserId("");
    }
  return (
    <div className="container">
            <h1 className='text-center my-2 text-primary'>Foreign Student System</h1>
            <div className='row'>
                <div className='col-6'>
                    <img src={imgbanner} className='img-fluid' />
                </div>
                <div className='col-6'>

                    <div className='card p-5'>
                        <h2 className='text-center text-muted'>Login Form</h2>
                        <div className='mb-3'>
                            <label>Select User Type</label>
                            <select className='form-select mb-3'
                                value={user}
                                onChange={(e) => setUser(e.target.value)} required>
                                <option value={0}>--Select--</option>
                                {usertype.map((user, index) => {
                                    return (
                                        <option key={index} value={user}>{user}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className='mb-3'>
                            <label>Enter User Id</label>
                            <input type='text'
                                className='form-control'
                                value={userid}
                                onChange={(e) => setUserId(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label>Enter Password</label>
                            <input type='password'
                                className='form-control'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='my-3 text-end'>
                            <Link className='btn btn-primary mx-3' onClick={handleLoginVerify}>Login</Link>
                            <Link className='btn btn-primary mx-1' to="collegeregister">College Registration</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-dark text-light my-5'>
                <p className='py-4 text-center'>© 2023 Foreign Student System. All Rights Reserved | Design by Torus Solutions</p>
            </div>
        </div>
  )
}