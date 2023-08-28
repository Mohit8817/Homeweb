import axios from 'axios';
import React, { Component } from 'react';




class MyData extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] };
        console.log("constructor");

        
       

    }

    componentDidMount() {
        axios.get("http://localhost:3004/contact")
            .then((res) => {
                console.log(res.data);
                this.setState({ data: res.data })
            })

            .then((err) => {
                console.log(err);
            })
    }

    delete = (id) => {
        axios.delete("http://localhost:3004/contact/" + id)
        console.log(id);
        this.componentDidMount();
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                <h4 className='text-center'>My data</h4>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr >
                                            <th>Full_Name</th>
                                            <th>Last_Name</th>
                                            <th>Email_Name</th>
                                            <th>Password</th>
                                            <th>Address</th>
                                            <th>City</th>   
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.data.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.FULL_NAME}</td>
                                                    <td>{item.LAST_NAME}</td>
                                                    <td>{item.EMAIL}</td>
                                                    <td>{item.PASSWORD}</td>
                                                    <td>{item.ADDRESS}</td>
                                                    <td>{item.CITY}</td>
                                                    <td className='d-flex'>                                                      
                                                        <button type='submit' className='btn btn-success m-1'>edit</button>
                                                        <button type='submit' className='btn btn-danger m-1' onClick={(e) => { this.delete(item.id) }}>Delete</button>

                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        );


    }
}

export default MyData;
