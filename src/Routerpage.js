import React from "react";
import Login from "./Login";
import FrontPage from "./FrontPage";
import Signup from "./Signup";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Admin from "./Admin";
import College
 from "./College";
import Police from "./Police";
import Passport from "./Passportstaff";
function Routerpage(){
    return(
        <div>
            <BrowserRouter pathname="">
                <Routes>
                    <Route path="/" element={<FrontPage />}></Route>
                        <Route path="Login" element={<Login />}></Route>
                        <Route path="Signup" element={<Signup />}></Route>
                        <Route path="Admin" element={<Admin />}></Route>
                        <Route path="College" element={<College />}></Route>
                        <Route path="Police" element={<Police />}></Route>
                        <Route path="Passportstaff" element={<Passport />}></Route>



                        

                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routerpage;