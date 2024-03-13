import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import React, { Component } from 'react';


class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row bg text-light">
                        <div className="col-md-6">
                            <div className='text'>
                                <h1>Discover<br />Most suitable<br />Property</h1>
                                <p>Find a Variety of properties that suit yout very easilty Forget all difficulties in finding a residence for you </p>
                                <form className="form-inline">
                                    <input className="form-control w-50 mb-2" type="search" placeholder="Search" aria-label="Search" />
                                    <a className="btn btn-primary my-2 my-sm-0" href='/' type="submit">Search</a>
                                </form>
                            </div>

                            <div className='num d-flex'>
                                <p>
                                    <h1> <CountUp start={7500} end={9000} duration={7} /><span>+</span></h1>
                                    <h6>Premium product</h6>
                                </p>
                                <p>

                                    <h1><CountUp start={1800} end={2000} duration={5} /><span>+</span></h1>
                                    <h6>Happy customer</h6>
                                </p>
                                <p>
                                    <h1><CountUp start={5} end={29} duration={4} /><span>+</span> </h1>
                                    <h6>Award Winning</h6>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="App">
                                <motion.h1
                                    animate={{ x: [], opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.2, }}
                                    initial={{ opacity: 0, scale: 0.4 }} >

                                    <img src="./images/hero-image.png" alt="" className='homeimg' />
                                </motion.h1>
                            </div>
                        </div>

                    </div>
                </div>


                {/* second container BRANDS*/}


                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-3">
                            <img src="./images/tower.png" alt="" className='brandimg' />
                        </div>
                        <div className="col-lg-3">
                            <img src="./images/equinix.png" alt="" className='brandimg' />
                        </div>
                        <div className="col-lg-3">
                            <img src="./images/tower.png" alt="" className='brandimg' />
                        </div>
                        <div className="col-lg-3">
                            <img src="./images/realty.png" alt="" className='brandimg' />
                        </div>
                    </div>
                </div>


                
            </>


        );
    }
}

export default Dashboard;




