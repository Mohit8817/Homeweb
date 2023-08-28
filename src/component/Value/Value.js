import React, { Component } from 'react';

class Value extends Component {
    render() {
        return (
            <div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div data-aos="fade-left"                              
                                data-aos-duration="3000">
                                <img src="./images/value.png" alt="" className='valueimg'/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div>
                                <h4 className='text1'>Our value</h4>
                                <h3 className='text2'>Value We Give to You</h3>
                                <p>We always ready to help by providijng the best services for you. <br />
                                    We beleive a good blace to live can make your life better</p>
                            </div>

                            <div className='mt-5'>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <strong><i class="fa fa-shield"></i> Best interest rates on the market</strong>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate theaccordion-flush class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <strong> <i class="fa fa-times"></i> Prevent unstable prices</strong>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <strong> <i class="fa fa-bar-chart"></i> Best price on the market</strong>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Value;
