import React, { useState , useEffect } from "react";
import axios from "axios";

const College = () => {
    const [collegedata,setCollegedata]=useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/GetCollege')
          .then((res) => {
            setCollegedata(res.data); 
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

      
    return (
        <div className="card text-center w-50 mx-auto my-5" >
       
            
                <>
                    <table className="table table-stripped">
                      <thead>
                        <tr>
                            <th>College ID</th>
                            <th>College Password</th>
                            <td></td>
                            <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {collegedata.map((e)=>(
                        <tr >
                            <td>{e.id}</td>
                           <td>{e.password}</td>
                           <td><button className="btn btn-secondary">Edit</button></td>
                           <td><button className="btn btn-danger">Delete</button></td>
                           </tr>
                        ))}
                      </tbody>
                    </table>
                </>
       
        </div>
      );
}


export default College;