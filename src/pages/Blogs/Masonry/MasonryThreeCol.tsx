import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JarallaxSection from '../../../Common/JarallaxSection'
import { Link } from 'react-router-dom'

import sectionBg2 from "../../../assets/images/full-width-images/section-bg-2.jpg"
import Masonry from 'react-responsive-masonry'

import user from "../../../assets/images/user-avatar.png"

import blog1 from "../../../assets/images/blog/masonry/post-prev-1.jpg"
import blog2 from "../../../assets/images/blog/post-prev-2.jpg"
import blog3 from "../../../assets/images/blog/masonry/post-prev-3.jpg"
import blog4 from "../../../assets/images/blog/masonry/post-prev-4.jpg"
import blog5 from "../../../assets/images/blog/masonry/post-prev-5.jpg"
import blog6 from "../../../assets/images/blog/masonry/post-prev-6.jpg"
import blog7 from "../../../assets/images/blog/masonry/post-prev-7.jpg"
import blog8 from "../../../assets/images/blog/masonry/post-prev-8.jpg"
import blog9 from "../../../assets/images/blog/masonry/post-prev-9.jpg"
import blog10 from "../../../assets/images/blog/masonry/post-prev-10.jpg"
import blog11 from "../../../assets/images/blog/post-prev-11.jpg"
import blog12 from "../../../assets/images/blog/post-prev-12.jpg"

const MasonryThreeCol = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg2}
                className="small-section bg-dark-alfa-30 parallax-2" >
                <Container className="relative align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Blog</h1>
                            <div className="hs-line-4 font-alt">
                                We share our best ideas in our blog
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Blog</Link>&nbsp;/&nbsp;<span>Masonry</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </JarallaxSection>

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
                    <Masonry columnsCount={3} className="row">
                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog1} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">New Web Design Trends</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 10 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog2} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Minimalistic Design Forever</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 9 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog3} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Hipster&rsquo;s Style in&nbsp;Web</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog4} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Duis tristique condimentum</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog5} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">New Web Design Trends</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 10 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog6} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Minimalistic Design Forever</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 9 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog7} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Hipster&rsquo;s Style in&nbsp;Web</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog8} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Duis tristique condimentum</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog9} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">New Web Design Trends</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 10 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog11} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Hipster&rsquo;s Style in&nbsp;Web</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog10} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Minimalistic Design Forever</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 9 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <Col sm={12} md={12} lg={12} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={blog12} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="">Duis tristique condimentum</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>
                    </Masonry>

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

export default MasonryThreeCol