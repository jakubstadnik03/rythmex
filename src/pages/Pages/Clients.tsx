import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import client1 from "../../assets/images/clients-logos/with-bg/client-1.jpg";
import client2 from "../../assets/images/clients-logos/with-bg/client-2.jpg";
import client3 from "../../assets/images/clients-logos/with-bg/client-3.jpg";
import client4 from "../../assets/images/clients-logos/with-bg/client-4.jpg";
import client5 from "../../assets/images/clients-logos/with-bg/client-5.jpg";
import client6 from "../../assets/images/clients-logos/with-bg/client-6.jpg";
import Testimonials from '../../Common/MainDemo/Testimonials';
import Logotypes from '../../Common/AboutUs/Logotypes';
import WhyChoose from '../../Common/AboutUs/WhyChoose';

const Clients = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 no-transp font-alt mb-20 mb-xs-0">Clients</h1>
                            <div className="hs-line-4 font-alt black">
                                We love our clients and are ready to help
                            </div>
                        </Col>

                        <Col md={4} className="col-md-4 mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Clients</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            <section className="page-section" id="about">
                <Container className="relative">

                    <Row className="mb-70 mb-xs-30">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="section-text align-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur nulla orci,
                                in sollicitudin mauris viverra id. Donec est lectus, eleifend vitae rutrum eu, porta
                                sed nisl. Nunc vehicula enim eget risus faucibus, id interdum nisi commodo. Nunc eget
                                massa eget ipsum mattis iaculis ut in urna.
                            </div>
                        </div>
                    </Row>

                    <Row className="multi-columns-row alt-features-grid">

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-left">
                                <div className="alt-features-icon">
                                    <img src={client1} alt="" />
                                </div>
                                <h3 className="alt-features-title font-alt">Hipster inc.</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-left">
                                <div className="alt-features-icon">
                                    <img src={client2} alt="" />
                                </div>
                                <h3 className="alt-features-title font-alt">Other company</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-left">
                                <div className="alt-features-icon">
                                    <img src={client3} alt="" />
                                </div>
                                <h3 className="alt-features-title font-alt">Creative studio</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-left">
                                <div className="alt-features-icon">
                                    <img src={client4} alt="" />
                                </div>
                                <h3 className="alt-features-title font-alt">Digital stuff</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-left">
                                <div className="alt-features-icon">
                                    <img src={client5} alt="" />
                                </div>
                                <h3 className="alt-features-title font-alt">Bigstream inc.</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-left">
                                <div className="alt-features-icon">
                                    <img src={client6} alt="" />
                                </div>
                                <h3 className="alt-features-title font-alt">Rhythm and partners</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

            <Testimonials />

            <Logotypes />

            <hr className="mt-0 mb-0 "/>

            <WhyChoose />

        </React.Fragment>
    );
};

export default Clients;
