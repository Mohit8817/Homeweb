import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row" style={{ backgroundColor: "black" }}>
                        <div className="col-md-6">
                            <div className='text-lg-start text-sm-center text-center'>
                                <Link to="/Dashboard" > <img src="./images/logo.png" alt="" className=' m-4' /></Link>
                            </div>
                        </div>
                        <div className="col-md-6">

                        <nav class="navbar navbar-expand-lg navbar-light m-4">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                                {/* <span class="navbar-toggler-icon"></span> */}
                                <i className='fa fa-bars text-light'></i>


                                </button>

                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <div className="navbar-nav text-center">
                                        <Link className="nav-item nav-link text-light" to="/Residencies">Residencies</Link>
                                        <Link className="nav-item nav-link text-light" to="/value">Our Value</Link>
                                        <Link className="nav-item nav-link text-light" to="/Contact">Contact Us</Link>
                                        <Link className="nav-item nav-link text-light" to="/GetStart">Get Started</Link>
                                        <Link className="nav-item nav-link text-light" to="/Getintouch">Get in touch</Link>
                                        <Link className="nav-item nav-link text-light" to="/contactdata">Contact Data </Link>
                                        {/* <button className='btn btn-primary'>contact</button> */}
                                    </div>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>



        
                

            </div>
        );


    }
}

export default Header;
