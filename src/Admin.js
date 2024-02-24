import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    function handleSubmit(e){
        e.preventDefault();
        alert("Message");
    } 

    return(
        <>
            <h1>Welcome to Admin Dashboard</h1>
            <form onSubmit={handleSubmit}>
            <Link to="/College" className="btn btn-info mt-2 mb-3 m-5 p-2">College</Link>
            <Link to="/Police" className="btn btn-info mt-2 mb-3  p-2">Police</Link>
            <Link to="/Passportstaff" className="btn btn-info mt-2 mb-3 mx-5 p-2">Passport Staff</Link>



            </form>
        </>
    )
}


export default Admin;