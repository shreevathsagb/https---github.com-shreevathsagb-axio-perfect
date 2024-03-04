import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { Row, Col, Container, Button } from "react-bootstrap";

const CollegeDB = () => {
  const [collegedata, setCollegedata] = useState([]);
  const [editedCollege, setEditedCollege] = useState({ id: '', password: '' });

  const fetchdata = () => {
    axios.get('http://localhost:8080/GetCollege')
      .then((res) => {
        setCollegedata(res.data);
        return;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        toast.error("No User Found Please Sign Up");
      });
  }

  

  const handleDelete = (deldata) => {
    const did = deldata.id;
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      axios.delete(`http://localhost:8080/Delete/College/${did}`)
        .then(() => {
          toast.success("Deleted Successfully");
          fetchdata();
        })
        .catch((error) => {
          console.error("Not found", error);
          toast.error("No data to update");
        });
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Row>
      <Col>
        <center>
          <div className="card p-5 w-75 mx-5 mt-5 ">
            <center>
              <form>
                <label className="">The passowrd to change</label>
                <input
                  type="text"
                  className="form-control w-75 mb-4"
                  value={editedCollege.password}
                  onChange={(e) => setEditedCollege({  password: e.target.value })}
                />
                <Button className="mb-3" type="button">
                  Submit
                </Button>
              </form>
            </center>
          </div>
        </center>
      </Col>

      <Col md={6}>
        <div className="w-75 mx-5 mt-5">
          <>
            <table className="table table-stripped ">
              <thead>
                <tr>
                  <th>College ID</th>
                  <th>College Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {collegedata.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.password}</td>
                    <td>
                      <button className="btn btn-success">
                        Edit
                      </button>
                      <button className="btn btn-danger mx-2" onClick={() => handleDelete(e)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        </div>
      </Col>
    </Row>
  );
}

export default CollegeDB;
