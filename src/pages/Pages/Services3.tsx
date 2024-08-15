import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cta from '../../Common/MainDemo/Cta';
import { Link } from 'react-router-dom';

//import images
import prev1 from "../../assets/images/blog/post-prev-1.jpg";
import prev2 from "../../assets/images/blog/post-prev-2.jpg";
import prev3 from "../../assets/images/blog/post-prev-3.jpg";

const Services3 = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <Container className="relative align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Services</h1>
                            <div className="hs-line-4 font-alt black">
                                We provide the best digital solutions
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Services</span>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>

            <section className="page-section">
                    <Container className="relative">
                        <Row className="alt-features-grid mb-70 mb-xs-40">
                            <Col sm={3}>
                                <div className="alt-features-item align-center">
                                    <div className="alt-features-descr align-left">
                                        <h4 className="mt-0 font-alt">Work process</h4>
                                        Lorem ipsum dolor sit amet, c-r adipiscing elit. 
                                        In maximus ligula semper metus pellentesque mattis. 
                                        Maecenas  volutpat, diam enim.
                                    </div>
                                </div>
                            </Col>
                            
                            <Col sm={3}>
                                <div className="alt-features-item align-center">
                                    <div className="alt-features-icon">
                                        <span className="icon-chat"></span>
                                    </div>
                                    <h3 className="alt-features-title font-alt">1. Discussion</h3>
                                </div>
                            </Col>
                            
                            <Col sm={3}>
                                <div className="alt-features-item align-center">
                                    <div className="alt-features-icon">
                                        <span className="icon-browser"></span>
                                    </div>
                                    <h3 className="alt-features-title font-alt">2. Making</h3>
                                </div>
                            </Col>
                            
                            <Col sm={3}>
                                <div className="alt-features-item align-center">
                                    <div className="alt-features-icon">
                                        <span className="icon-heart"></span>
                                    </div>
                                    <h3 className="alt-features-title font-alt">3. Production</h3>
                                </div>
                            </Col>
                       </Row>
                       
                       <hr className="mb-70 mb-xs-30"/>
                       
                       <Row className="multi-columns-row">
                            <Col sm={6} md={4} lg={4} className="mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">
                                
                                <div className="post-prev-img">
                                    <img src={prev1} alt="" />
                                </div>
                                
                                <div className="post-prev-title font-alt">
                                    Digital Branding
                                </div>
                                
                                <div className="post-prev-text">
                                    Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor 
                                    consectetur fermentum nibh volutpat, accumsan purus. 
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={4} className="mb-md-50 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                                
                                <div className="post-prev-img">
                                    <img src={prev2} alt="" />
                                </div>
                                
                                <div className="post-prev-title font-alt">
                                    Design & Development
                                </div>
                                
                                <div className="post-prev-text">
                                    Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor 
                                    consectetur fermentum nibh volutpat, accumsan purus. 
                                </div>
                                
                            </Col>
                        
                            <Col sm={6} md={4} lg={4} className="mb-md-50 wow fadeIn" data-wow-delay="0.3s" data-wow-duration="2s">
                                
                                <div className="post-prev-img">
                                    <img src={prev3} alt="" />
                                </div>
                                
                                <div className="post-prev-title font-alt">
                                    Marketing
                                </div>
                                
                                <div className="post-prev-text">
                                    Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor 
                                    consectetur fermentum nibh volutpat, accumsan purus. 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            <Cta />

            <section className="page-section" id="about">
                <div className="container relative">

                    <div className="section-text mb-60 mb-sm-40">
                        <div className="row">

                            <div className="col-sm-6 mb-sm-50 mb-xs-30">

                                <h4 className="mt-0 font-alt">Why choose us?</h4>

                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam. 
                                        Aliquam elementum tellus non erat porttitor mollis. Morbi viverra sollicitudin nisl eu sodales.
                                </p>
                                <p>
                                    Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.
                                </p>
                            </div>

                            <div className="col-sm-6 mb-sm-50 mb-xs-30">

                                <dl className="accordion">
                                    <dt>
                                        <Link
                                            to="#"
                                            className={openIndex === 0 ? 'active' : ''}
                                            onClick={() => handleToggle(0)}><i className="fa fa-users"></i> We are professionals</Link>
                                    </dt>
                                    <dd style={{ display: openIndex === 0 ? 'block' : 'none' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
                                    </dd>
                                    <dt>
                                        <Link
                                            to="#"
                                            className={openIndex === 1 ? 'active' : ''}
                                            onClick={() => handleToggle(1)}><i className="fa fa-clock-o"></i> We are punctual</Link>
                                    </dt>
                                    <dd style={{ display: openIndex === 1 ? 'block' : 'none' }}>
                                        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                    </dd>
                                    <dt>
                                        <Link
                                            className={openIndex === 2 ? 'active' : ''}
                                            to="#"
                                            onClick={() => handleToggle(2)}><i className="fa fa-heart"></i>We are friendly</Link>
                                    </dt>
                                    <dd style={{ display: openIndex === 2 ? 'block' : 'none' }}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                                    </dd>
                                </dl>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
};

export default Services3;
