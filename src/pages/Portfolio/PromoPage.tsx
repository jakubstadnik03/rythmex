import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

import bg6 from "../../assets/images/full-width-images/section-bg-6.jpg"
import bg8 from "../../assets/images/full-width-images/section-bg-8.jpg"
import bg12 from "../../assets/images/full-width-images/section-bg-12.jpg"

import pro1 from "../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../assets/images/portfolio/full-project-3.jpg"
import pro4 from "../../assets/images/portfolio/full-project-4.jpg"
import pro5 from "../../assets/images/portfolio/full-project-5.jpg"
import pro6 from "../../assets/images/portfolio/full-project-6.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'


const PromoPage = () => {
    return (
        <React.Fragment>
            {/* full-width-slider */}
            <div className="home-section fullwidth-slider bg-dark" id="home">
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
                        <section className="home-section bg-scroll fixed-height-small bg-dark-alfa-30"
                            style={{ backgroundImage: `url(${bg8})` }}
                        >
                            <div className="js-height-parent container">
                                <div className="home-content">
                                    <div className="home-text">
                                        <div className="hs-line-8 no-transp font-alt mb-40 mb-xs-10">
                                            Hello & Welcome
                                        </div>
                                        <div className="hs-line-14 font-alt mb-50 mb-xs-10">
                                            We are Rhythm
                                        </div>
                                        <div className="local-scroll">
                                            <Link to="/pages-pricing-1" className="btn btn-mod btn-border-w btn-circle btn-small">Get Pricing</Link>
                                            <span className="d-none d-sm-inline-block">&nbsp;</span>
                                            <Link to="#start" className="btn btn-mod btn-border-w btn-circle btn-small">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="home-section bg-scroll fixed-height-small bg-dark-alfa-30"
                            style={{ backgroundImage: `url(${bg6})` }}
                        >
                            <div className="js-height-parent container">
                                <div className="home-content">
                                    <div className="home-text">
                                        <h1 className="hs-line-8 no-transp font-alt mb-50 mb-xs-10">
                                            We Are just crative people
                                        </h1>
                                        <h2 className="hs-line-14 font-alt mb-50 mb-xs-10">
                                            Rhythm Creative Studio
                                        </h2>
                                        <div className="local-scroll">
                                            <Link to="#start" className="btn btn-mod btn-border-w btn-small btn-circle d-none d-sm-inline-block">See More</Link>
                                            <span className="d-none d-sm-inline-block">&nbsp;</span>
                                            <Link to="https://www.youtube.com/watch?v=jTea_8Fk5Ns" className="btn btn-mod btn-border-w btn-small btn-circle lightbox mfp-iframe">Play Reel</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="home-section bg-scroll fixed-height-small bg-dark-alfa-50"
                            style={{ backgroundImage: `url(${bg12})` }}
                        >
                            <div className="js-height-parent container">
                                <div className="home-content">
                                    <div className="home-text">
                                        <h2 className="hs-line-8 no-transp font-alt mb-50 mb-xs-10">
                                            Create your dream with
                                        </h2>
                                        <h1 className="hs-line-14 font-alt mb-50 mb-xs-10">
                                            Amazing Design
                                        </h1>
                                        <div>
                                            <Link to="/pages-pricing-1" className="btn btn-mod btn-border-w btn-small btn-circle">Get Pricing</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* section */}
            <section className="page-section" id="start">
                <Container className="relative">
                    <Row>
                        <Col md={7} className="mb-sm-40">
                            <div className="work-full-media mt-0 white-shadow">
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
                                </Swiper>
                            </div>
                        </Col>
                        <Col md={5} lg={4} className="offset-lg-1">
                            <div className="text">
                                <h3 className="font-alt mb-30 mb-xxs-10">Creative Project</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>
                                <div className="mt-40">
                                    <Link to="#" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">View online</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            {/* section */}
            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col md={5} lg={4} className="mb-sm-40">
                            <div className="text">
                                <h3 className="font-alt mb-30 mb-xxs-10">Creative Project</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>
                                <div className="mt-40">
                                    <Link to="#" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">View online</Link>
                                </div>
                            </div>
                        </Col>

                        <Col md={7} className="offset-lg-1">
                            <div className="work-full-media mt-0 white-shadow">
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
                                        <img src={pro3} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pro4} alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            {/* section */}
            <section className="page-section" id="start">
                <Container className="relative">
                    <Row>
                        <Col md={7} className="mb-sm-40">
                            <div className="work-full-media mt-0 white-shadow">
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
                                        <img src={pro2} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pro3} alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                        <div className="col-md-5 col-lg-4 offset-lg-1">
                            <div className="text">
                                <h3 className="font-alt mb-30 mb-xxs-10">Creative Project</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>
                                <div className="mt-40">
                                    <Link to="#" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">View online</Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            {/* section */}
            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col md={5} lg={4} className="mb-sm-40">
                            <div className="text">
                                <h3 className="font-alt mb-30 mb-xxs-10">Creative Project</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>
                                <div className="mt-40">
                                    <Link to="#" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">View online</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={7} className="offset-lg-1">
                            <div className="work-full-media mt-0 white-shadow">
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
                                        <img src={pro5} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pro6} alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section */}
            <section className="small-section bg-dark">
                <div className="container relative">
                    <div className="align-center">
                        <h3 className="banner-heading font-alt">Like Our Creative Works?</h3>
                        <div>
                            <Link to="#" className="btn btn-mod btn-w btn-medium btn-round">Start Project</Link>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default PromoPage