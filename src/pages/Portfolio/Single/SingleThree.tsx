import React from 'react'
import { Link } from 'react-router-dom'
import JarallaxSection from '../../../Common/JarallaxSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import port1 from "../../../assets/images/portfolio/projects-1.jpg"
import port2 from "../../../assets/images/portfolio/projects-2.jpg"
import port3 from "../../../assets/images/portfolio/projects-3.jpg"
import port4 from "../../../assets/images/portfolio/projects-4.jpg"

import bg3 from "../../../assets/images/full-width-images/section-bg-3.jpg"
import bg16 from "../../../assets/images/full-width-images/section-bg-16.jpg"
import bg22 from "../../../assets/images/full-width-images/section-bg-22.jpg"
import bg23 from "../../../assets/images/full-width-images/section-bg-23.jpg"


const SingleThree = () => {
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

            <div className="home-section fullwidth-slider">
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
                        <section className="home-section bg-scroll fixed-height-medium" style={{ backgroundImage: `url(${bg23})` }}>
                            <div className="js-height-parent container"></div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="home-section bg-scroll fixed-height-medium" style={{ backgroundImage: `url(${bg22})` }}>
                            <div className="js-height-parent container"></div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="home-section bg-scroll fixed-height-medium" style={{ backgroundImage: `url(${bg16})` }}>
                            <div className="js-height-parent container"></div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>

            <section className="page-section">
                <div className="container relative">
                    <div className="section-text mb-60 mb-sm-40">
                        <div className="row">
                            <div className="col-md-4 mb-sm-50 mb-xs-30">
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
                            </div>
                            <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.
                            </div>
                            <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                Etiam sit amet fringilla lacus. Pellentesque suscippiteme ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
                            </div>
                        </div>
                    </div>
                    <div className="count-wrapper">
                        <div className="row">
                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    320
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-clock-o"></i>
                                    <span className="count-title">Hours</span>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    150
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-heart"></i>
                                    <span className="count-title">Pixels used</span>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    533
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-coffee"></i>
                                    <span className="count-title">Coffee Cups</span>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    100
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-lightbulb-o"></i>
                                    <span className="count-title">Great Ideas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <JarallaxSection className="page-section bg-dark bg-dark-alfa-90 fullwidth-slider" backgroundImage={bg3}>

                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    // loop={true}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="clearlist work-full-slider">
                    <SwiperSlide>
                        <div>
                            <div className="container relative">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 align-center">
                                        <div className="section-icon">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <h3 className="small-title font-alt">Client Review:</h3>

                                        <blockquote className="testimonial white">
                                            <p>
                                                Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
                                                risus utaliquam dapibus. Thanks!
                                            </p>
                                            <footer className="testimonial-author">
                                                John Doe, doodle inc.
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="container relative">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 align-center">
                                        <div className="section-icon">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <h3 className="small-title font-alt">What people say?</h3>

                                        <blockquote className="testimonial white">
                                            <p>
                                                Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
                                                risus utaliquam dapibus. Thanks!
                                            </p>
                                            <footer className="testimonial-author">
                                                John Doe, doodle inc.
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="container relative">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 align-center">
                                        <div className="section-icon">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <h3 className="small-title font-alt">What people say?</h3>
                                        <blockquote className="testimonial white">
                                            <p>
                                                Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
                                                risus utaliquam dapibus. Thanks!
                                            </p>
                                            <footer className="testimonial-author">
                                                John Doe, doodle inc.
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </JarallaxSection>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">
                    <div className="row multi-columns-row alt-features-grid">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <h3 className="alt-features-title font-alt">Case study</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <h3 className="alt-features-title font-alt">Result</h3>
                                <div className="alt-features-descr align-left">
                                    Proin fringilla augue at maximus vestibulum.
                                    Nam pulvinar vitae neque et porttitor. Praesent sed
                                    nisi eleifend, lorem fermentum orci sit amet, iaculis libero.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <h3 className="alt-features-title font-alt">Experience</h3>
                                <div className="alt-features-descr align-left">
                                    Curabitur iaculis accumsan augue, nec finibus mauris pretium eu.
                                    Duis placerat ex gravida nibh tristique porta. Nulla facilisi.
                                    Suspendisse ultricies eros blandit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Related Projects
                    </h2>
                    <ul className="works-grid work-grid-gut clearfix font-alt hover-white" id="work-grid">
                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={port1} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Gray Man</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={port2} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Vase 3D</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={port3} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Boy in T-shirt</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={port4} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Space</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <div className="work-navigation clearfix">
                <Link to="/portfolio-single-2" className="work-prev"><span><i className="fa fa-chevron-left"></i>&nbsp;Previous</span></Link>
                <Link to="#" className="work-all"><span><i className="fa fa-times"></i>&nbsp;All works</span></Link>
                <Link to="/portfolio-single-4" className="work-next"><span>Next&nbsp;<i className="fa fa-chevron-right"></i></span></Link>
            </div>

            <hr className="mt-0 mb-0 " />

        </React.Fragment>
    )
}

export default SingleThree