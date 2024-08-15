import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JarallaxSection from '../../Common/JarallaxSection'

import sectionBg6 from "../../assets/images/full-width-images/section-bg-6.jpg"
import sectionBg10 from "../../assets/images/full-width-images/section-bg-10.jpg"

const PageTitlePage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Page Titles' />

            {/* section-1 */}
            <section className="small-section bg-gray">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Title Gray</h1>
                            <div className="hs-line-4 font-alt black">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page</span>
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>

            {/* section-2 */}
            <section className="small-section bg-dark-lighter">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Title Dark 1</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            {/* section-3 */}
            <section className="small-section bg-dark">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Title Dark 2</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page</span>
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>

            {/* section-4 */}
            <JarallaxSection className="small-section bg-dark-alfa-30"
            backgroundImage={sectionBg6}>
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Title With Image</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </JarallaxSection>

            {/* section-5 */}
            <JarallaxSection className="page-section bg-dark-alfa-30" 
            backgroundImage={sectionBg10}>
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Title Large</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </JarallaxSection>

            {/* section-5 */}
            <section className="small-section bg-gray-lighter pt-30 pb-30">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-0">Title Small</h1>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page Titles</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            {/* section-6 */}
            <section className="small-section bg-gray pt-30 pb-30">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-0">Title Small</h1>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page Titles</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            {/* section-7 */}
            <section className="small-section bg-gray pt-30 pb-30">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-0">Title Small</h1>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page Titles</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            {/* section-8 */}
            <section className="small-section bg-dark-lighter pt-30 pb-30">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-0">Title Small</h1>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page Titles</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            {/* section-9 */}
            <section className="small-section bg-dark pt-30 pb-30">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-0">Title Small</h1>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page Titles</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            {/* section-10 */}
            <JarallaxSection className="small-section bg-dark-alfa-50 pt-30 pb-30" backgroundImage={sectionBg6}>
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-0">Title Small</h1>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Elements</Link>&nbsp;/&nbsp;<span>Page Titles</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </JarallaxSection>


        </React.Fragment>
    )
}

export default PageTitlePage