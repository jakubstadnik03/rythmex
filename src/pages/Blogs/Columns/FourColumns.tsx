import React from 'react'
import HeadSection from '../../../Common/HeadSection'
import { Link } from 'react-router-dom'
import { colData } from '../../../Common/data'

import user from "../../../assets/images/user-avatar.png"
import { Col, Container, Row } from 'react-bootstrap'

const FourColumns = () => {
    return (
        <React.Fragment>
            <HeadSection title="Columns" pageTitle="Blog" />

            {/* <!-- Search Section --> */}
            <section className="small-section">
                <Container className="relative">
                    <form className="form-inline form">
                        <div className="search-wrap">
                            <button className="search-button animate" type="submit" title="Start Search">
                                <i className="fa fa-search"></i>
                            </button>
                            <input type="text" className="form-control search-field" placeholder="Search..." />
                        </div>
                    </form>
                </Container>
            </section>

            <hr className="mt-0 mb-0" />

            {/* <!-- Section --> */}
            <section className="page-section">
                <Container className="relative">
                    <Row className="row multi-columns-row">
                        {/* <!-- Post Item --> */}
                        {colData.map((item, idx) => (
                            <Col sm={6} md={3} lg={3} className="mb-60 mb-xs-40" key={idx}>
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
                    </Row>

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


                </Container>
            </section>

            <hr className="mt-0 mb-0" />

            {/* <!-- Widgets Section --> */}
            <section className="page-section">
                <Container className="relative">
                    <Row className="multi-columns-row">
                        <Col sm={6} md={3} lg={3}>
                            {/* <!-- Widget --> */}
                            <div className="widget">
                                <h5 className="widget-title font-alt">Categories</h5>
                                <div className="widget-body">
                                    <ul className="clearlist widget-menu">
                                        <li>
                                            <Link to="#" title="">Branding</Link>
                                            <small>
                                                - 7
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Design</Link>
                                            <small>
                                                - 15
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Development</Link>
                                            <small>
                                                - 3
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Photography</Link>
                                            <small>
                                                - 5
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Other</Link>
                                            <small>
                                                - 1
                                            </small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3}>
                            {/* <!-- Widget --> */}
                            <div className="widget">
                                <h5 className="widget-title font-alt">Tags</h5>
                                <div className="widget-body">
                                    <div className="tags">
                                        <Link to="">Design</Link>
                                        <Link to="">Portfolio</Link>
                                        <Link to="">Digital</Link>
                                        <Link to="">Branding</Link>
                                        <Link to="">Theme</Link>
                                        <Link to="">Clean</Link>
                                        <Link to="">UI & UX</Link>
                                        <Link to="">Love</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3}>

                            {/* <!-- Widget --> */}
                            <div className="widget">

                                <h5 className="widget-title font-alt">Archive</h5>

                                <div className="widget-body">
                                    <ul className="clearlist widget-menu">
                                        <li>
                                            <Link to="#" title="">January 2015</Link>
                                        </li>
                                        <li>
                                            <Link to="#" title="">February 2014</Link>
                                        </li>
                                        <li>
                                            <Link to="#" title="">January 2014</Link>
                                        </li>
                                        <li>
                                            <Link to="#" title="">December 2013</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3}>
                            <div className="widget">
                                <h5 className="widget-title font-alt">Text widget</h5>
                                <div className="widget-body">
                                    <div className="widget-text clearfix">
                                        <img src={user} alt="" width="70" className="img-circle left img-left" />
                                        Consectetur adipiscing elit. Quisque magna ante eleifend eleifend.
                                        Purus ut dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non sem.
                                        Quisque magna ante eleifend eleifend.
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default FourColumns