import React from 'react'
import Table from 'react-bootstrap/table';
const Home = () => {
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
                                {/* {tableData} */}
                            </tbody>
                        </Table>
                    </div>
                </div>
                </div>
  )
}

export default Home
