import React from 'react';
import JarallaxSection from '../../Common/JarallaxSection';
import { Col, Container, Row } from 'react-bootstrap';

//import images
import sectionBg3 from "../../assets/images/full-width-images/section-bg-3.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg3} className="page-section bg-blue-alfa-90 fullwidth-slider">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    loop={true}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper special-fashion-testimonial">
                    <SwiperSlide>
                        <Container className="relative">
                            <Row>
                                <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2 align-center">

                                    <div className="section-icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <h3 className="small-title font-alt">What people say?</h3>
                                    <blockquote className="testimonial white">
                                        <p className='black'>
                                            Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
                                            risus utaliquam dapibus. Thanks!
                                        </p>
                                        <footer className="testimonial-author black">
                                            John Doe, doodle inc.
                                        </footer>
                                    </blockquote>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container relative">
                            <Row>
                                <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2 align-center">

                                    <div className="section-icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <h3 className="small-title font-alt">What people say?</h3>
                                    <blockquote className="testimonial white">
                                        <p className='black'>
                                            Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
                                            risus utaliquam dapibus. Thanks!
                                        </p>
                                        <footer className="testimonial-author black">
                                            John Doe, doodle inc.
                                        </footer>
                                    </blockquote>
                                </Col>
                            </Row>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container relative">
                            <Row>
                                <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2 align-center">

                                    <div className="section-icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <h3 className="small-title font-alt">What people say?</h3>
                                    <blockquote className="testimonial white">
                                        <p className='black'>
                                            Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
                                            risus utaliquam dapibus. Thanks!
                                        </p>
                                        <footer className="testimonial-author black">
                                            John Doe, doodle inc.
                                        </footer>
                                    </blockquote>
                                </Col>
                            </Row>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </JarallaxSection>
        </React.Fragment>
    );
};

export default Testimonials;
