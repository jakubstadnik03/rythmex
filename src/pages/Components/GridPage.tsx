import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Container, Row } from 'react-bootstrap'

const GridPage = () => {
    return (
        <React.Fragment>
            <HeadSection title="Elements" pageTitle='Grid' />

            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col sm={6} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Half</h5>
                                Lorem ipsum dolor sit amet,{' '}
                                <a href="#" title="Title text here" className="tooltip-top">
                                    tooltip top
                                </a>{' '}
                                consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo
                                tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio.
                                Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                        {/* Second Column */}
                        <Col sm={6} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Half</h5>
                                Lorem ipsum dolor{' '}
                                <a href="#" title="Title text here" className="tooltip-bot">
                                    tooltip bottom
                                </a>{' '}
                                sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo
                                tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio.
                                Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                    </Row>

                    <hr className="mb-40" />

                    <Row>
                        {/* First Column */}
                        <Col sm={4} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Third</h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                        {/* Second Column */}
                        <Col sm={4} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Third</h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                        {/* Third Column */}
                        <Col sm={4} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Third</h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                    </Row>

                    <hr className="mb-40" />

                    <Row>
                        {/* First Column */}
                        <Col sm={3} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Fourth</h5>
                                Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                        {/* Second Column */}
                        <Col sm={3} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Fourth</h5>
                                Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                        {/* Third Column */}
                        <Col sm={3} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Fourth</h5>
                                Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                        {/* Fourth Column */}
                        <Col sm={3} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase">One Fourth</h5>
                                Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    )
}

export default GridPage