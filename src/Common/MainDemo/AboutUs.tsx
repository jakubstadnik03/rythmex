import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="page-section" id="about">
                <Container className="container relative">

                    <h2 className="section-title font-alt align-left mb-70 mb-sm-40">
                        About Studio

                        <Link to="#" className="section-more right">More about us <i className="fa fa-angle-right"></i></Link>

                    </h2>

                    <div className="section-text">
                        <Row>

                            <Col md={4} className="mb-sm-50 mb-xs-30">

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>
                                        <div>Branding, %</div> <span>90</span>
                                    </div>
                                </div>

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>
                                        <div>Design, %</div> <span>80</span>
                                    </div>
                                </div>

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "85%" }}>
                                        <div>Development, %</div> <span>85</span>
                                    </div>
                                </div>

                            </Col>

                            <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.
                            </Col>

                            <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                                Etiam sit amet fringilla lacus. Pellentesque suscippiteme ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
                            </Col>

                        </Row>
                    </div>

                </Container>
            </section>

            <hr className="mt-0 mb-0 "/>
        </React.Fragment>
    );
};

export default AboutUs;
