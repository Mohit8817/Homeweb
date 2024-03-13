import axios from 'axios';
import React, { Component } from 'react';


class Getintouch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FULL_NAME: "",
            LAST_NAME: "",
            EMAIL: "",
            PASSWORD: "",
            ADDRESS: "",
            CITY: "",
            msg: 'false',
        }
    }
    Full_name = (event) => {
        // console.log(event.target.value)
        this.setState({ FULL_NAME: event.target.value });
    }

    Last_name = (event) => {
        this.setState({ LAST_NAME: event.target.value });
    }

    Email_add = (event) => {
        this.setState({ EMAIL: event.target.value });
    }

    P_word = (event) => {
        this.setState({ PASSWORD: event.target.value });
    }

    Address = (event) => {
        this.setState({ ADDRESS: event.target.value });
    }
    City = (event) => {
        this.setState({ CITY: event.target.value });
    }

    savedata = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:3004/contact", this.state)
            .then((res) => {
                console.log(res);
                this.setState({ msg: 'true' })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row border shadow-lg rounded-4 mt-5">
                        <div className='text-center mt-5'>
                            <h3 className='text1 fs-1'>Get In Touch </h3>
                            <p className='text2'>Required field are followed by*</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="git">
                                <div>
                                    <h3>Address:</h3>
                                    <p>410 S Missori indianpolis IN 64228</p>
                                </div>
                                <br />
                                <div>
                                    <h3>General enquiries:</h3>
                                    <h6>mail@demolink.org</h6>
                                    <p>toll Free Phone number +1.777,666,500</p>
                                </div>
                                <br />
                                <div>
                                    <h3>Other enquiries:</h3>
                                    <h6>info@demolink.org</h6>
                                    <p>toll Free Phone number +1.777,666,500</p>
                                </div>
                            </div>
                        </div>




                        <div className="col-lg-8 mt-3">
                            <form onSubmit={this.savedata}>
                                {(this.state.msg === 'true') ?
                                    <div className='d-flex justify-content-center '>
                                        <div className='alert alert-primary w-75'><i class="fa fa-check m-1"></i>Send successfully</div>
                                    </div>
                                    : ''}

                                <div class="row m-2">
                                    <div class="form-group col-md-6 mt-2">
                                        <label>First Name*</label>
                                        <input type="name" name='FULL_NAME' class="form-control" placeholder="first name" onChange={this.Full_name} required />
                                    </div>
                                    <div class="form-group col-md-6 mt-2">
                                        <label>Last Name*</label>
                                        <input type="name" name='LAST_NAME' class="form-control" placeholder="last name" onChange={this.Last_name} required/>
                                    </div>
                                </div>
                                <div class="row m-2">
                                    <div class="form-group col-md-6 mt-2">
                                        <label>Email*</label>
                                        <input type="email" name='EMAIL' class="form-control" id="inputEmail4" placeholder="Email" onChange={this.Email_add} required/>
                                    </div>
                                    <div class="form-group col-md-6 mt-2">
                                        <label htmlfor="inputPassword4">Password*</label>
                                        <input type="password" name='PASSWORD' class="form-control" id="inputPassword4" placeholder="Password" onChange={this.P_word} required />
                                    </div>
                                </div>
                                <div class="form-group m-3">
                                    <label htmlfor="inputAddress">Address</label>
                                    <input type="text" name='ADDRESS' class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.Address} required />
                                </div>

                                <div class="form-group m-3">
                                    <div class="form-group ">
                                        <label htmlfor="inputCity">City</label>
                                        <input type="text" name='CITY' class="form-control" id="inputCity" onChange={this.City} required />
                                    </div>
                                    <div class="form-group">
                                        <label htmlfor="inputState">State</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>Delhi</option>
                                            <option>Maharashtra</option>
                                            <option>Rajasthan</option>
                                            <option>uttar pradesh</option>
                                            <option>Gujarat</option>
                                            <option>Punjab</option>
                                            <option>Haryana</option>
                                            <option>chhattisghar</option>
                                            <option>Tamil Nadu</option>
                                            <option>Orissa</option>
                                            <option>Madhya Pradesh</option>
                                            <option>West Bengal</option>
                                            <option>Assam</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="form-group m-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" required />
                                        <label class="form-check-label" htmlfor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                    <button className='btn btn-primary mt-2'>submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Getintouch;

