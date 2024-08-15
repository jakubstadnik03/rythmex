import React from 'react';

//import images
import sectionBg from "../../assets/images/full-width-images/section-bg-16.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Cta2 = () => {
    return (
        <React.Fragment>
            <section
                style={{ backgroundImage: `url(${sectionBg})` }}
                className="page-section bg-dark-alfa-70 bg-scroll">
                <div className="container relative">

                    <div className="item-carousel">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={3}
                            pagination={true}
                            loop={true}
                            fadeEffect={{
                                crossFade: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-hotairballoon"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We're Creative
                                </div>
                                <div className="features-descr">
                                    We find the best ideas for you
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-clock"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We’re Punctual
                                </div>
                                <div className="features-descr">
                                    We always do your tasks on time
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-lightbulb"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We have magic
                                </div>
                                <div className="features-descr">
                                    You will be delighted
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-wine"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We're Creative
                                </div>
                                <div className="features-descr">
                                    We find the best ideas for you
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-tools"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We’re Punctual
                                </div>
                                <div className="features-descr">
                                    We always do your tasks on time
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-gears"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We have magic
                                </div>
                                <div className="features-descr">
                                    You will be delighted
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-browser"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We're Creative
                                </div>
                                <div className="features-descr">
                                    We find the best ideas for you
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-wallet"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We’re Punctual
                                </div>
                                <div className="features-descr">
                                    We always do your tasks on time
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="features-item">
                                <div className="features-icon">
                                    <span className="icon-document"></span>
                                </div>
                                <div className="features-title font-alt">
                                    We have magic
                                </div>
                                <div className="features-descr">
                                    You will be delighted
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Cta2;