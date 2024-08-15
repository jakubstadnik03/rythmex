import React from 'react'
import { Container } from 'react-bootstrap'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import pro1 from '../../assets/images/portfolio/full-project-1.jpg'
import pro2 from '../../assets/images/portfolio/full-project-2.jpg'
import pro3 from '../../assets/images/portfolio/full-project-3.jpg'

const LazySwiper = () => {
    return (
        <React.Fragment>
            <section className='page-section'>
                <Container className='relative'>
                    <h2 className='section-title font-alt mb-70 mb-sm-40'>Lazy-Load-Slider</h2>
                    <div className="work-full-media image-fullwidth mb-80 mb-xs-40">
                        <div className="clearlist work-full-slider">
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
                                    <div>
                                        <img src={pro1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img src={pro2} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img src={pro3} alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default LazySwiper