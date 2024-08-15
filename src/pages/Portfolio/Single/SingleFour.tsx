import React from 'react'

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg"
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import JarallaxSection from '../../../Common/JarallaxSection'

import bg23 from "../../../assets/images/full-width-images/section-bg-23.jpg"

import blog1 from "../../../assets/images/blog/post-prev-1.jpg"
import blog2 from "../../../assets/images/blog/post-prev-2.jpg"
import blog3 from "../../../assets/images/blog/post-prev-3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
const SingleFour = () => {
    return (
        <React.Fragment>

            <JarallaxSection className="home-section bg-dark-alfa-30 parallax-2" backgroundImage={bg23} id="home">
                <div className="js-height-full container">
                    <div className="home-content">
                        <div className="home-text">

                            <h1 className="hs-line-8 no-transp font-alt mb-50 mb-xs-30">
                                Branding / Design / Photography
                            </h1>

                            <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                                Creative Project
                            </h2>

                        </div>
                    </div>
                    <div className="local-scroll">
                        <a href="#lightbox" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon"></i><span className="sr-only">Scroll to the next section</span></a>
                    </div>
                </div>
            </JarallaxSection>

            <section className="page-section" id='lightbox'>
                <div className="container relative">
                    <div className="row multi-columns-row mb-70 mb-xs-30">
                        <Col sm={6} md={4} lg={4} className="mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">

                            <div className="post-prev-img">
                                <Link to={pro1} className="lightbox-gallery-1 mfp-image"><img src={blog1} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to={pro1} className="lightbox-gallery-2 mfp-image">Lightbox Image</Link>
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={4} className="mb-md-50 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">

                            <div className="post-prev-img">
                                <Link to={pro2} className="lightbox-gallery-1 mfp-image"><img src={blog2} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to={pro2} className="lightbox-gallery-2 mfp-image">Another Project Image</Link>
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                        </Col>
                        <Col sm={6} md={4} lg={4} className="mb-md-50 wow fadeIn" data-wow-delay="0.3s" data-wow-duration="2s">

                            <div className="post-prev-img">
                                <Link to="https://www.youtube.com/watch?v=jTea_8Fk5Ns" className="lightbox-gallery-1 mfp-iframe"><img src={blog3} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="https://www.youtube.com/watch?v=jTea_8Fk5Ns" className="lightbox-gallery-2 mfp-iframe">Lightbox video</Link>
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                        </Col>
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

                    </div>
                    <div className="section-text">
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
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <div className="work-navigation clearfix">
                <Link to="/portfolio-single-3" className="work-prev"><span><i className="fa fa-chevron-left"></i>&nbsp;Previous</span></Link>
                <Link to="#" className="work-all"><span><i className="fa fa-times"></i>&nbsp;All works</span></Link>
                <Link to="/portfolio-single-5" className="work-next"><span>Next&nbsp;<i className="fa fa-chevron-right"></i></span></Link>
            </div>

            <hr className="mt-0 mb-0 " />

        </React.Fragment>
    )
}

export default SingleFour