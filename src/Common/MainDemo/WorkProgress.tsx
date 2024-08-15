import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WorkProgress = () => {
    return (
        <React.Fragment>
            <section className="page-section">
                <Container className="relative">
                    <Row className="alt-features-grid">

                        <Col md={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-descr align-left">
                                    <h4 className="mt-0 font-alt">Work process</h4>
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-chat"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">1. Discuss</h3>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-browser"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">2. Make</h3>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-heart"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">3. Product</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0" />
        </React.Fragment>
    );
};

export default WorkProgress;
