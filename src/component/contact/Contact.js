import React, { Component } from 'react';


class Contact extends Component {

    render() {
        return (
            <div >
                <div className="container">
                    <div className="row  mt-5">
                        <div className="col-md-7 mt-5">
                            <div>
                                <h4 className='text1'>Our contact Us</h4>
                                <h3 className='text2'> Easy to contact Us</h3>
                                <p>We always ready to help by providijng the best services for you. We beleive a good <br /> blace to live can make your life better</p>
                            </div>

                            <div className='row grid row-gap-4'>
                                <div className="card w-50 p-3">
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <i className="fa fa-phone-square  text-primary fs-1" />
                                        </div>
                                        <div className='px-3'>
                                            <span className='fw-semibold h5'>call</span><br />
                                            <span>9837327636</span>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-primary'>call Now</button>
                                </div>

                                <div className="card w-50 p-3">
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <i className="fa fa-commenting text-primary fs-2" />
                                        </div>
                                        <div className='px-3'>
                                            <span className='fw-semibold h5'>Chat</span><br />
                                            <span>9837327636</span>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-primary'>chat Now</button>
                                </div>
                                <div className="card w-50 p-3">
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <i className="fa fa-chat-square text-info fs-2" />
                                        </div>
                                        <div className='px-3'>
                                            <span className='fw-semibold h5'>video call</span><br />
                                            <span>9837327636</span>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-primary'>Video Call Now</button>
                                </div>
                                <div className="card w-50 p-3">
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <i className="fa fa-message text-info fs-2" />
                                        </div>
                                        <div className='px-3'>
                                            <span className='fw-semibold h5'>Messages</span><br />
                                            <span>9837327636</span>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-primary'>Messages Now</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-5 mt-5">
                            <div data-aos="zoom-out"
                                data-aos-duration="2000">
                                <img src="./images/contact.jpg" alt="" className='contactimg' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Contact;
