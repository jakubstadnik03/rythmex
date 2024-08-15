import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import pro2 from '../../assets/images/portfolio/full-project-2.jpg'
import pro4 from '../../assets/images/portfolio/full-project-4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CreativeProject = () => {
    return (
        <React.Fragment>
            <section className='page-section bg-gray'>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    navigation={true}
                    loop={true}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper swiper-navigation">
                    <SwiperSlide>
                        <Container className="relative">
                            <Row>
                                <Col md={7} className="mb-sm-40">
                                    <div className='work-full-media mt-0'>
                                        <img src={pro2} alt="" />
                                    </div>
                                </Col>
                                <Col md={5} className='col-lg-4 offset-lg-1'>
                                    <div className='text'>
                                        <h3 className='font-alt mb-30 mb-xxs-10'>Creative Project</h3>
                                        <p>
                                            Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                        </p>
                                        <div className="mt-40">
                                            <Link to="http://themeforest.net/user/theme-guru/portfolio" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">VIEW ONLINE</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container className="relative">
                            <Row>
                                <Col md={5} className='col-lg-4'>
                                    <div className='text'>
                                        <h3 className='font-alt mb-30 mb-xxs-10'>Mega Creativity</h3>
                                        <p>
                                            Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut. Phasellus facilisis mauris vel velit molestie pellentesqu accumsan ipsum erat eu sapien.
                                        </p>
                                        <div className="mt-40">
                                            <Link to="http://themeforest.net/user/theme-guru/portfolio" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">VIEW ONLINE</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={7} className="mb-sm-40 offset-lg-1">
                                    <div className='work-full-media mt-0'>
                                        <div className='fluid-width-video-wrapper d-flex justify-content-center'>
                                            <iframe src="https://player.vimeo.com/video/37066208?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="1000" height="400" frameBorder="0"
                                                allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container className="relative">
                            <Row>
                                <Col md={7} className="mb-sm-40">
                                    <div className='work-full-media mt-0'>
                                        <img src={pro4} alt="" />
                                    </div>
                                </Col>
                                <Col md={5} className='col-lg-4 offset-lg-1'>
                                    <div className='text'>
                                        <h3 className='font-alt mb-30 mb-xxs-10'>Creative Project</h3>
                                        <p>
                                            Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                        </p>
                                        <div className="mt-40">
                                            <Link to="http://themeforest.net/user/theme-guru/portfolio" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">VIEW ONLINE</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>
                </Swiper>
            </section>
        </React.Fragment>
    )
}

export default CreativeProject