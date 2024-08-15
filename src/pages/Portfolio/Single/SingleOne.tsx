import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JarallaxSection from '../../../Common/JarallaxSection'

import bg22 from "../../../assets/images/full-width-images/section-bg-22.jpg"

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg"

import port1 from "../../../assets/images/portfolio/projects-1.jpg"
import port2 from "../../../assets/images/portfolio/projects-2.jpg"
import port3 from "../../../assets/images/portfolio/projects-3.jpg"
import port4 from "../../../assets/images/portfolio/projects-4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const worksData = [
    {
        id: 1,
        imageUrl: port1,
        title: 'Gray Man',
        link: '/portfolio-single-1',
        description: 'External Page'
    },
    {
        id: 2,
        imageUrl: port2,
        title: 'Vase 3D',
        link: '/portfolio-single-1',
        description: 'External Page'
    },
    {
        id: 3,
        imageUrl: port3,
        title: 'Boy in T-shirt',
        link: '/portfolio-single-1',
        description: 'External Page'
    },
    {
        id: 4,
        imageUrl: port4,
        title: 'Space',
        link: '/portfolio-single-1',
        description: 'External Page'
    }
];

const altFeaturesData = [
    {
        title: '1. Case study',
        description: 'Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim.'
    },
    {
        title: '2. Result',
        description: 'Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.'
    },
    {
        title: '3. Experience',
        description: 'Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta. Nulla facilisi. Suspendisse ultricies eros blandit.'
    }
];

const SingleOne = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={bg22}
                className="page-section bg-dark-alfa-30" >
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 no-transp font-alt mb-20 mb-xs-0">Single Project</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>
                        </Col>
                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Portfolio</Link>&nbsp;/&nbsp;<span>Single</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </JarallaxSection>

            {/* section */}
            <section className="page-section">
                <div className="container relative">
                    <Row className="alt-features-grid mb-80 mb-xs-40">
                        <Col sm={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-descr align-left">
                                    <h4 className="mt-0 font-alt">About</h4>
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-chat"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">1. Discuss</h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-browser"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">2. Make</h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-heart"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">3. Product</h3>
                            </div>
                        </Col>
                    </Row>
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
                    <Row className="multi-columns-row alt-features-grid mb-80 mb-xs-40">
                        {altFeaturesData.map((item, idx) => (
                            <Col sm={6} md={4} lg={4} key={idx}>
                                <div className="alt-features-item align-center">
                                    <h3 className="alt-features-title font-alt">{item.title}</h3>
                                    <div className="alt-features-descr align-left">
                                        {item.description}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <hr className="mb-70 mb-xs-30" />
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

            <section className="page-section">
                <Container className="relative">
                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Related Projects
                    </h2>
                    <ul className="works-grid work-grid-gut clearfix font-alt hover-white" id="work-grid">
                        {worksData.map((work) => (
                            <li key={work.id} className="work-item">
                                <Link to={work.link} className="work-ext-link">
                                    <div className="work-img">
                                        <img className="work-img" src={work.imageUrl} alt="Work" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">{work.title}</h3>
                                        <div className="work-descr">{work.description}</div>
                                    </div>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <div className="work-navigation clearfix">
                <Link to="/portfolio-single-5" className="work-prev"><span><i className="fa fa-chevron-left"></i>&nbsp;Previous</span></Link>
                <Link to="#" className="work-all"><span><i className="fa fa-times"></i>&nbsp;All works</span></Link>
                <Link to="/portfolio-single-2" className="work-next"><span>Next&nbsp;<i className="fa fa-chevron-right"></i></span></Link>
            </div>

            <hr className="mt-0 mb-0 " />

        </React.Fragment>
    )
}

export default SingleOne