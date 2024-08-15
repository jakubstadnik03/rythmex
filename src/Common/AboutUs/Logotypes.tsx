import React from 'react';

//import images
import client1 from "../../assets/images/clients-logos/client-1.png";
import client2 from "../../assets/images/clients-logos/client-2.png";
import client3 from "../../assets/images/clients-logos/client-3.png";
import client4 from "../../assets/images/clients-logos/client-4.png";
import client5 from "../../assets/images/clients-logos/client-5.png";
import client6 from "../../assets/images/clients-logos/client-6.png";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Logotypes = () => {
    return (
        <React.Fragment>
            <section className="small-section pt-30 pb-0">
                <div className="container relative">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            {/* <div className="small-item-carousel black owl-carousel mb-0 animate-init" data-anim-type="fade-in-right-large" data-anim-delay="100"> */}
                                <Swiper
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    slidesPerView={6}
                                    pagination={true}
                                    loop={true}
                                    fadeEffect={{
                                        crossFade: true,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper small-item-carousel black owl-carousel mb-0 animate-init" style={{  display: "block", paddingTop: "35px"}} data-anim-type="fade-in-right-large" data-anim-delay="100"> 
                                    <SwiperSlide className="logo-item">
                                        <img src={client1} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client2} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client3} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client4} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client5} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client6} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client1} width="67" height="67" alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide className="logo-item">
                                        <img src={client2} width="67" height="67" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            {/* </div> */}

                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
};

export default Logotypes;
