import React from 'react'
import HeadSection from '../../../Common/HeadSection'
import { Col, Container, Row } from 'react-bootstrap'
import SideContent from '../Classic/SideContent'
import { Link } from 'react-router-dom'
import { colData } from '../../../Common/data'

const TwoColumns = () => {
    return (
        <React.Fragment>

            <HeadSection title="Columns" pageTitle="Blog" />

            <section className="page-section">
                <Container className="relative">

                    <Row>
                        <Col sm={8}>
                            <div className="row multi-columns-row">
                                {colData.map((item, idx) => (
                                    <Col md={6} lg={6} className="mb-60 mb-xs-40" key={idx}>
                                        <div className="post-prev-img">
                                            <Link to="/blog-single-sidebar-right"><img src={item.imgSrc} alt="" /></Link>
                                        </div>
                                        <div className="post-prev-title font-alt">
                                            <Link to="">{item.title}</Link>
                                        </div>
                                        <div className="post-prev-info font-alt">
                                            <Link to="">{item.author}</Link> | {item.date}
                                        </div>
                                        <div className="post-prev-text">
                                            {item.text}
                                        </div>
                                        <div className="post-prev-more">
                                            <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </Col>
                                ))}
                            </div>

                            {/* <!-- Pagination --> */}
                            <div className="pagination">
                                <Link to=""><i className="fa fa-angle-left"></i></Link>
                                <Link to="" className="active">1</Link>
                                <Link to="">2</Link>
                                <Link to="">3</Link>
                                <Link to="" className="no-active">...</Link>
                                <Link to="">9</Link>
                                <Link to=""><i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={4} md={3} className="offset-md-1 sidebar">
                            <SideContent />
                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}

export default TwoColumns