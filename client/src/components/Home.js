import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/table";
import axios from "./axios";

const Home = () => {
  const [det, setDet] = useState([]);
  const [update,setUdate] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/api/v1/details");
      setDet(req.data.details);
    }
    fetchData();
  }, []);

  const DeleteDetail = async(id) => {
   await axios.delete(`/api/v1/details/${id}`).then((res) => {
      console.log(res);
      setDet(det.filter((det) => det._id !== id));
    });
  }

  return (
    <div className="container-fluid">
      <h2 className="mt-3 title_head">Surveys</h2>
      <div className="row mt-5">
        <div className="col">
          <Table striped bordered hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Age</th>
                <th>Gender</th>
                <th>User</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {det.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.user}</td>
                  <td>
                    {item.user === "coordinator" ? <button onClick={()=>DeleteDetail(item._id)} >Delete</button> : ""}
                  </td>
                  <td>
                    {item.user === "coordinator" ? <button onClick={()=>setUdate(true)}>Update</button> : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
