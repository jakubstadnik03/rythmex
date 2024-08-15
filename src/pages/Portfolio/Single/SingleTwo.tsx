import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const SingleTwo = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">

                    <div className="row">

                        <div className="col-md-8">
                            <h1 className="hs-line-11 no-transp font-alt mb-20 mb-xs-0">Single Project</h1>
                            <div className="hs-line-4 font-alt black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>
                        </div>

                        <div className="col-md-4 mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Portfolio</Link>&nbsp;/&nbsp;<span>Single</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="page-section">
                <div className="container relative">
                    <div className="row multi-columns-row alt-features-grid mb-80 mb-xs-40">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <h3 className="alt-features-title font-alt">1. Case study</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <h3 className="alt-features-title font-alt">2. Result</h3>
                                <div className="alt-features-descr align-left">
                                    Proin fringilla augue at maximus vestibulum.
                                    Nam pulvinar vitae neque et porttitor. Praesent sed
                                    nisi eleifend, lorem fermentum orci sit amet, iaculis libero.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <h3 className="alt-features-title font-alt">3. Experience</h3>
                                <div className="alt-features-descr align-left">
                                    Curabitur iaculis accumsan augue, nec finibus mauris pretium eu.
                                    Duis placerat ex gravida nibh tristique porta. Nulla facilisi.
                                    Suspendisse ultricies eros blandit.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="work-full-media mb-80 mb-xs-40">

                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            navigation={true}
                            // loop={true}
                            fadeEffect={{
                                crossFade: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="clearlist work-full-slider swiper-navigation">
                            <SwiperSlide>
                                <img src={pro1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pro2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pro3} alt="" />
                            </SwiperSlide>
                        </Swiper>

                        <br />
                        <div className='fluid-width-video-wrapper d-flex justify-content-center'>
                            <iframe src="https://player.vimeo.com/video/37066208?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameBorder="0"
                            // webkitallowfullscreen mozallowfullscreen
                            allowFullScreen></iframe>
                        </div>
                        

                        <br />

                        <img src={pro3} alt="" />

                    </div>
                    <div className="section-text mb-60 mb-sm-40">
                        <Row>

                            <Col md={4} className="mb-sm-50 mb-xs-30">
                                <div className="work-detail">
                                    <h5 className="font-alt mt-0 mb-20">Project Details</h5>
                                    <div className="work-full-detail">
                                        <p>
                                            <strong>Client:</strong>
                                            Envato Users
                                        </p>
                                        <p>
                                            <strong>Date:</strong>
                                            1th Februery, 2014
                                        </p>
                                        <p>
                                            <strong>Online:</strong>
                                            <Link to="#" target="_blank">www.rhythm.srbthemes.pro</Link>
                                        </p>
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
                    <div className="count-wrapper">
                        <Row>
                            <Col sm={3} className="col-6">
                                <div className="count-number">
                                    320
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-clock-o"></i>
                                    <span className="count-title">Hours</span>
                                </div>
                            </Col>
                            <Col sm={3} className="col-6">
                                <div className="count-number">
                                    150
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-heart"></i>
                                    <span className="count-title">Pixels used</span>
                                </div>
                            </Col>
                            <Col sm={3} className="col-6">
                                <div className="count-number">
                                    533
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-coffee"></i>
                                    <span className="count-title">Coffee Cups</span>
                                </div>
                            </Col>
                            <Col sm={3} className="col-6">
                                <div className="count-number">
                                    100
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-lightbulb-o"></i>
                                    <span className="count-title">Great Ideas</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <div className="work-navigation clearfix">
                <Link to="/portfolio-single-1" className="work-prev"><span><i className="fa fa-chevron-left"></i>&nbsp;Previous</span></Link>
                <Link to="#" className="work-all"><span><i className="fa fa-times"></i>&nbsp;All works</span></Link>
                <Link to="/portfolio-single-3" className="work-next"><span>Next&nbsp;<i className="fa fa-chevron-right"></i></span></Link>
            </div>

            <hr className="mt-0 mb-0 " />
        </React.Fragment>
    )
}

export default SingleTwo