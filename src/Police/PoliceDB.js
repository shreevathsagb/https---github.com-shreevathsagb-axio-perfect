import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';


const PoliceDB = () => {
    const [policedata,setPolicedata]=useState([])

    const fetchdata=() => {
        axios.get('http://localhost:8080/GetPolice')
          .then((res) => {
            setPolicedata(res.data); 
            return;
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            toast.error("No User Found Please Sign Up");
            return;
          });
      }

      const handleEdit = (data) => {
        const pid = data.id;
        const a = window.prompt("Enter new password to update");
       
        if (a === null || a.trim() === "") {
          alert("Please add a new password");
          return;
      }
        else{
          const change = {
            password: a,
        };
          
              axios.put(`http://localhost:8080/Edit/Police/${pid}`, change)
                  .then(() => {
                    toast.success("Updated Succesfully");
                    fetchdata();
                    return;
                    
                  })
                  .catch((error) => {
                      console.error("Not found", error);
                      toast.error("No data to update");
                      return;
                  });
                }
    };



    const handleDelete = (deldata)=>{
      const did=deldata.id;
      const confirm = window.confirm("Are you sure?")
      if (confirm){
          axios.delete(`http://localhost:8080/Delete/Police/${did}`)
          .then(() => {
            toast.success("Deleted Succesfully");
            fetchdata();
          })
          .catch((error) => {
              console.error("Not found", error);
              toast.error("No data to update");
          });
      }
  }


        useEffect(()=>{
          fetchdata();
        },[]);

      return (
        <div className="card text-center w-50 mx-auto my-5" >
       
            
                <>
                    <table className="table table-stripped">
                      <thead>
                        <tr>
                            <th>Policee ID</th>
                            <th>Password</th>
                            <td></td>
                            <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {policedata.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                           <td>{e.password}</td>
                           <td><button className="btn btn-secondary"onClick={()=>handleEdit(e)}>Edit</button></td>
                           <td><button className="btn btn-danger"onClick={()=>handleDelete(e)}>Delete</button></td>
                           </tr>
                        ))}
                      </tbody>
                    </table>
                </>
       
        </div>
      );
}


export default PoliceDB;