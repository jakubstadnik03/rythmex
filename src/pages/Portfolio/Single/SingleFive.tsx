import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JarallaxSection from '../../../Common/JarallaxSection'

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg"

import blog1 from "../../../assets/images/blog/post-prev-1.jpg"
import blog2 from "../../../assets/images/blog/post-prev-2.jpg"
import blog3 from "../../../assets/images/blog/post-prev-3.jpg"

import place from "../../../assets/images/mobile-video-placeholder.jpg"

const SingleFive = () => {
    return (
        <React.Fragment>
            <JarallaxSection className="home-section bg-dark-alfa-30 fixed-height-small" backgroundImage={place} id="home">
                <div className="js-height-parent container">
                    <div className="player" data-property="{videoURL:'https://youtu.be/irGHr6wcY5k',containment:'#home',autoPlay:true, showControls:false, showYTLogo: false, mute:true, startAt:0, opacity:1}">
                    </div>
                    {/* <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            title="YouTube Video"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/irGHr6wcY5k"
                            allowFullScreen
                        ></iframe>
                    </div> */}
                    <div className="home-content">
                        <div className="home-text home-sec">
                            <h1 className="hs-line-8 no-transp font-alt mb-50 mb-xs-30">
                                Branding / Design / Photography
                            </h1>
                            <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                                Creative Project
                            </h2>
                        </div>
                    </div>
                </div>
            </JarallaxSection>

            <section className="page-section">
                <Container className="relative">
                    <Row className="mb-70 mb-xs-30">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="section-text align-center mb-70 mb-xs-40">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur nulla orci,
                                in sollicitudin mauris viverra id. Donec est lectus, eleifend vitae rutrum eu, porta
                                sed nisl. Nunc vehicula enim eget risus faucibus, id interdum nisi commodo. Nunc eget
                                massa eget ipsum mattis iaculis ut in urna.
                            </div>
                        </div>
                    </Row>
                    <div className="post-prev-img mb-30">
                        <Link to={pro1} className="lightbox-gallery-2 mfp-image"><img src={pro1} alt="" /></Link>
                    </div>
                    <Row className="multi-columns-row mb-30 mb-xs-10">
                        <Col sm={6} md={4} lg={4} className="mb-md-10">

                            <div className="post-prev-img">
                                <Link to={pro2} className="lightbox-gallery-2 mfp-image"><img src={blog1} alt="" /></Link>
                            </div>

                        </Col>
                        <Col sm={6} md={4} lg={4} className="mb-md-10">

                            <div className="post-prev-img">
                                <Link to={pro3} className="lightbox-gallery-2 mfp-image"><img src={blog2} alt="" /></Link>
                            </div>

                        </Col>
                        <Col sm={6} md={4} lg={4} className="mb-md-10">
                            <div className="post-prev-img">
                                <Link to="https://www.youtube.com/watch?v=jTea_8Fk5Ns" className="lightbox-gallery-2 mfp-iframe"><img src={blog3} alt="" /></Link>
                            </div>
                        </Col>
                    </Row>
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
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <div className="work-navigation clearfix">
                <Link to="/portfolio-single-4" className="work-prev"><span><i className="fa fa-chevron-left"></i>&nbsp;Previous</span></Link>
                <Link to="#" className="work-all"><span><i className="fa fa-times"></i>&nbsp;All works</span></Link>
                <Link to="/portfolio-single-1" className="work-next"><span>Next&nbsp;<i className="fa fa-chevron-right"></i></span></Link>
            </div>

            <hr className="mt-0 mb-0" />
        </React.Fragment>
    )
}

export default SingleFive