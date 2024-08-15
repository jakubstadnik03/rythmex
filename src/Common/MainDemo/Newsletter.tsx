import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Newsletter = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <Container className="relative">

                    <form className="form align-center" id="mailchimp">
                        <Row>
                            <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">

                                <div className="newsletter-label font-alt">
                                    Stay informed with our newsletter
                                </div>

                                <div className="mb-20">
                                    <input placeholder="Enter Your Email" className="newsletter-field form-control input-md round mb-xs-10" type="email" pattern=".{5,100}" required aria-required="true" />
                                    &nbsp;
                                    <button type="submit" aria-controls="subscribe-result" className="btn btn-mod btn-medium btn-round mb-xs-10">
                                        Subscribe
                                    </button>
                                </div>

                                <div className="form-tip">
                                    <i className="fa fa-info-circle"></i> Please trust us, we will never send you spam
                                </div>

                                <div id="subscribe-result" role="region" aria-live="polite" aria-atomic="true"></div>

                            </Col>
                        </Row>
                    </form>

                </Container>
            </section>

            <section className="page-section" id="contact">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Find Us
                    </h2>

                    <Row>

                        <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">
                            <Row>

                                <Col sm={6} lg={4} className="pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Call Us
                                        </div>
                                        <div className="ci-text">
                                            +61 3 8376 6284
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} className="pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Address
                                        </div>
                                        <div className="ci-text">
                                            245 Quigley Blvd, Ste K
                                        </div>
                                    </div>
                                </Col>

                                <Col sm={6} lg={4} className="pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Email
                                        </div>
                                        <div className="ci-text">
                                            <a href="mailto:support@srbthemes.pro">support@srbthemes.pro</a>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>

                    </Row>

                </div>
            </section>

            <section className="small-section bg-dark">
                <div className="container relative">

                    <div className="align-center">
                        <h3 className="banner-heading font-alt">Want to discuss your new project?</h3>
                        <div>
                            <Link to="#" className="btn btn-mod btn-w btn-medium btn-round">Lets talk</Link>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
};

export default Newsletter;
