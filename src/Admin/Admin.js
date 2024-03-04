// Admin.js
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
//import App from "./App.css";

const Admin = () => {

  return (
    <>
    <Navbar className="bg-warning"  expand="lg">
        <Container>
                <h1 className="text-light">Admin Dashboard</h1>
                <div style={{fontSize :"25px"}}>
                    <Link to="CollegeDB" className="text-light m-5">College</Link>
                    <Link to="PoliceDB" className="text-light m-5">Police</Link>
                    <Link to="PassportstaffDB" className="text-light m-5 ">Passport Staff</Link>
                </div>
        </Container>
      </Navbar>
      
      <Outlet />

    </>
  );
};

export default Admin;
