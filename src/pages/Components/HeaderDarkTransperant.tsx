import React from 'react'
import JarallaxSection from '../../Common/JarallaxSection'

import sectionBg6 from "../../assets/images/full-width-images/section-bg-6.jpg"
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderDarkTransperant = () => {
    return (
        <React.Fragment>

            {/* hero */}
            <JarallaxSection
                backgroundImage={sectionBg6}
                className="home-section bg-dark-alfa-50 parallax-2 fixed-height-small">
                <div className="js-height-parent container" style={{height: "600px"}}>

                    <div className="home-content">
                        <div className="home-text">

                            <Row>
                                <Col md={8} className="align-left">
                                    <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Header Dark Transparent</h1>
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
                    </div>

                </div>
            </JarallaxSection>

            {/* section */}
            <section className="page-section">
                <div className="relative container">

                    <div className="section-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, ultrices in vulputate vitae, volutpat iaculis velit. In congue dolor a ligula cursus aliquam. Aliquam id malesuada metus. Donec ultricies lorem augue, ac fringilla felis aliquet et. Integer a rutrum dui, id varius neque. Donec orci massa, porttitor sit amet velit non, interdum feugiat lacus. Fusce tincidunt id erat at consequat. Cras vel aliquet mauris, ac tempor lorem. Donec faucibus sodales eros sed pretium. Praesent ut scelerisque lectus, ut feugiat mi.
                        </p>
                        <p>
                            Nunc vulputate semper erat, non iaculis sapien congue sit amet. Duis non nulla volutpat, dignissim leo sit amet, porta nunc. Donec placerat fermentum metus ac scelerisque. In id sollicitudin nulla. Suspendisse potenti. Integer aliquam orci aliquam eros posuere ornare. Fusce augue felis, maximus non lacus vitae, ullamcorper dignissim leo. Ut congue feugiat turpis at aliquam. Donec eros neque, accumsan sed venenatis volutpat, tempor at metus. Curabitur vel vestibulum ipsum, convallis cursus nisl. Mauris scelerisque gravida faucibus. Morbi vitae sapien nibh. Integer libero orci, ullamcorper in tincidunt at, molestie quis ipsum.
                        </p>
                    </div>

                </div>
            </section>

        </React.Fragment>
    )
}

export default HeaderDarkTransperant