import React, { Component } from 'react';
class Residencies extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {
                img: "images/r2.png",
                name: "Aliva Priva jardin City",
                dis: "Pahlawan street XVII no.215 Cinangka sawangan sepok jawa Barat",
            },

            {
                img: "images/r2.png",
                name: "Asatii Garden City",
                dis: "Pahlawan street XVII no.215 Cinangka sawangan sepok jawa Barat",

            },

            {
                img: "images/r3.png",
                name: "Citralan Puri serang",
                dis: "Pahlawan street XVII no.215 Cinangka sawangan sepok jawa Barat",

            },

            {
                img: "images/r1.png",
                name: "Aliva Priva jardin place",
                dis: "Pahlawan street XVII no.215 Cinangka sawangan sepok jawa Barat",

            },


        ]
    }
    render() {
        return (

            <>
                <div>                 
                        <div className="container w-75">
                            <div className="row mt-5">
                                <div className="col-lg-6 mt-5 mb-5">
                                    <h4 className='text1' >Best Choices</h4>
                                    <h3 className='text2'>Popular Residencies</h3>
                                </div>
                            </div>


                            <div className="row">
                                {
                                    this.state.map((item, index) =>
                                        <div className="col-md-3" key={index}>

                                            <div data-aos="flip-left"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="1200">
                                                <div className='card box_hover mb-4' >
                                                    <div className='card-body box_item'>
                                                        <img src={item.img} alt="" width="100%" />
                                                        <h4><span>$</span>47,043 </h4>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.dis}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <button className='btn btn-primary w-25 fs-5 res_btn'>more </button>

                                <div>
                                </div>

                            </div>
                        </div>
                    
                </div>
            </>

        );
    }
}

export default Residencies;
