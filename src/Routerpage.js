import React from "react";
import Login from "./Login";
import FrontPage from "./FrontPage";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import PoliceDB from "./Police/PoliceDB";
import PassportstaffDB from "./Passportstaff/PassportstaffDB";
import CollegeDashboard from "./College/CollegeDashboard";
import CollegeDB from "./College/CollegeDB";

function Routerpage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />

          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Admin/*" element={<Admin />}>
              <Route path="CollegeDB" element={<CollegeDB />}/>
              <Route path="PoliceDB" element={<PoliceDB />} />
              <Route path="PassportstaffDB" element={<PassportstaffDB />} />
            </Route>
            <Route path="CollegeDashboard" element={<CollegeDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routerpage;