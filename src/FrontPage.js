import React from "react";
import { Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
//import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import global from "./global.jpg";
import App from "./App.css";




function FrontPage(){
    return(
        <>
            <Navbar className="bg-black">
                <Container>
                    <div class="text">
                        <h1 className="text-light">Welcome to Foreign Student Monitoring System</h1>
                    </div>
                    <Link style={{fontSize : "25px"}}to="/Login" className="text-light ">Login</Link>
                    <Link style={{fontSize : "25px"}} to="/Signup" className="text-light">Sign up</Link>
                </Container>

            </Navbar>
            <img class="img" src={global} alt="GLOBAL IMAGE" />
            <div className="text-overlay text-warning" style={{left:"18% "}}> Welcome to </div>
            <p className="text-overlay" style={{top:"60%",left:"15%"}}>Foreign Science</p>
            
        </>
    )
}

export default FrontPage;