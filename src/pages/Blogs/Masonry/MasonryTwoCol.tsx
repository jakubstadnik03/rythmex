import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JarallaxSection from '../../../Common/JarallaxSection'
import { Link } from 'react-router-dom'

import sectionBg2 from "../../../assets/images/full-width-images/section-bg-2.jpg"
import { masonryData } from '../../../Common/data'
import SideContent from '../Classic/SideContent'
import Masonry from 'react-responsive-masonry'

const MasonryTwoCols = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg2}
                className="small-section bg-dark-alfa-30 parallax-2" >
                <Container className="relative align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Blog</h1>
                            <div className="hs-line-4 font-alt">
                                We share our best ideas in our blog
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Blog</Link>&nbsp;/&nbsp;<span>Masonry</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </JarallaxSection>


            <section className="page-section">
                <div className="container relative">

                    <Row>
                        <Col sm={8}>

                            <Masonry columnsCount={2} className="row">
                                {masonryData.map((item, idx) => (
                                    <Col md={12} lg={12} className="mb-60 mb-xs-40" key={idx}>
                                        <div className="post-prev-img">
                                            <Link to="/blog-single-sidebar-right"><img src={item.imgSrc} alt="" /></Link>
                                        </div>
                                        <div className="post-prev-title font-alt">
                                            <Link to="">{item.title}</Link>
                                        </div>
                                        <div className="post-prev-info font-alt">
                                            <Link to="">{item.author}</Link> | {item.date}
                                        </div>
                                        <div className="post-prev-text">
                                            {item.text}
                                        </div>
                                        <div className="post-prev-more">
                                            <Link to="" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </Col>
                                ))}

                            </Masonry>
                        </Col>

                        <Col sm={4} md={3} className="sidebar offset-md-1">
                            <SideContent />
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MasonryTwoCols