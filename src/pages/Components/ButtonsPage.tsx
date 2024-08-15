import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ButtonsPage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Buttons' />

            <section className="page-section">
                <Container className="relative">
                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Buttons on white
                    </h2>
                    <Row className="multi-columns-row">
                        <Col sm={6} md={3} lg={3} className="mb-40">
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-large btn-round">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-medium btn-round">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-small btn-round">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-round">Button</Link>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3} className="mb-40">
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border btn-large btn-round">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border btn-medium btn-round">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border btn-small btn-round">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border btn-round">Button</Link>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3} className="mb-40">
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-circle btn-large">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-circle btn-medium">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-circle btn-small">Button</Link>
                            </div>
                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-circle">Button</Link>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3} className="mb-40">
                            <div className="mb-10">
                                <Button variant="primary" size="lg" className="btn-mod btn-border btn-circle btn-large">Button</Button>
                            </div>
                            <div className="mb-10">
                                <Button variant="primary" className="btn-mod btn-border btn-circle btn-medium">Button</Button>
                            </div>
                            <div className="mb-10">
                                <Button variant="primary" size="sm" className="btn-mod btn-border btn-circle btn-small">Button</Button>
                            </div>
                            <div className="mb-10">
                                <Button variant="primary" className="btn-mod btn-border btn-circle">Button</Button>
                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-large btn-round">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-medium btn-round">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-small btn-round">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-round">Button</Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-large btn-circle">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-medium btn-circle">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-small btn-circle">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-gray btn-circle">Button</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section bg-dark-lighter">
                <Container className="relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Buttons on dark
                    </h2>

                    <div className="row multi-columns-row">

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round btn-large">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round btn-medium">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round btn-small">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round">Button</Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round btn-large">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round btn-medium">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round btn-small">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round">Button</Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle btn-large">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle btn-medium">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle btn-small">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle">Button</Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-circle btn-large">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-circle btn-medium">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-circle btn-small">Button</Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-circle">Button</Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round btn-icon btn-large">
                                    <span><i className="fa fa-usd"></i></span>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round btn-medium">
                                    <i className="fa fa-glass"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round btn-small">
                                    <i className="fa fa-heart"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-round">
                                    <i className="fa fa-envelope"></i>
                                    Button
                                </Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round btn-large">
                                    <i className="fa fa-usd"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round btn-medium">
                                    <i className="fa fa-glass"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round btn-small">
                                    <i className="fa fa-heart"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-border-w btn-round">
                                    <i className="fa fa-envelope"></i>
                                    Button
                                </Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle btn-icon btn-large">
                                    <span><i className="fa fa-usd"></i></span>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle btn-medium">
                                    <i className="fa fa-glass"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle btn-small">
                                    <i className="fa fa-heart"></i>
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-w btn-circle">
                                    <i className="fa fa-envelope"></i>
                                    Button
                                </Link>
                            </div>

                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-40">

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-glass btn-round btn-large">
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-glass btn-round btn-medium">
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-glass btn-round btn-small">
                                    Button
                                </Link>
                            </div>

                            <div className="mb-10">
                                <Link to="#" className="btn btn-mod btn-glass btn-round">
                                    Button
                                </Link>
                            </div>
                        </Col>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ButtonsPage