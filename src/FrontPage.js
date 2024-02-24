import React from "react";
import { Link} from "react-router-dom";


function FrontPage(){
    return(
        <div className="text-center">
            <h1>Welcome to Foreign Student Monitoring System</h1>
            <Link to="/Login" className="btn btn-primary my-5">Login</Link>
            <Link to="/Signup" className="btn btn-primary mx-5 my-5">Sign up</Link>
        </div>
    )
}

export default FrontPage;