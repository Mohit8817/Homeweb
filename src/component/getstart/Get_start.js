import React, { Component } from 'react';

class GetStart extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col bg-primary rounded-3">
                            <div className='text-center text-light mt-5'>
                                <h3 className='text2 fs-1'>Get started with Homyz</h3>
                                <br />
                                <p>Subscribe and find super attractive price quotes from. <br />
                                    Find your residence soon</p>
                                <button className='btn btn-info text-light mt-3 mb-4'>Get started</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* footer  */}
                
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <div className='text-lg-start text-sm-center text-center'>
                                <img src="./images/logo2.png" alt="" />
                                <p>Our Vision is to make all people <br /> the best place to llive for them.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 mb-5">
                            <div className='text-lg-start text-sm-center text-center'>
                                <h1 className='text2'>Information</h1>
                                <h6>145 New York, FL 5496,USA</h6>

                                <div className='fa_icon'>
                                    <a href="https://www.twitter.com/"><i class="fa fa-twitter-square" ></i></a>
                                    <a href="https://www.facebook.com/"> <i class="fa fa-facebook-square"> </i></a>
                                    <a href="https://www.linkedin.com/"> <i class="fa fa-linkedin-square"> </i></a>
                                    <a href="https://www.pinterest.com/"> <i class="fa fa-pinterest-square"> </i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default GetStart;
