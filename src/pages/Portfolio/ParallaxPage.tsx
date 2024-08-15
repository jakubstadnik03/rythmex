import React from 'react'
import { Link } from 'react-router-dom'
import JarallaxSection from '../../Common/JarallaxSection'

import bg6 from "../../assets/images/full-width-images/section-bg-6.jpg"
import bg7 from "../../assets/images/full-width-images/section-bg-7.jpg"
import bg12 from "../../assets/images/full-width-images/section-bg-12.jpg"
import bg15 from "../../assets/images/full-width-images/section-bg-15.jpg"
import bg18 from "../../assets/images/full-width-images/section-bg-18.jpg"
import { Container } from 'react-bootstrap'

const ParallaxPage = () => {
    return (
        <React.Fragment>
            <JarallaxSection className="small-section bg-dark-alfa-30 parallax-2" backgroundImage={bg18}>
                <div className="relative container align-left">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Portfolio</h1>
                            <div className="hs-line-4 font-alt">
                                An eye for detail makes our works excellent
                            </div>
                        </div>
                        <div className="col-md-4 mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Portfolio</Link>&nbsp;/&nbsp;<span>Parallax</span>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>

            <JarallaxSection className="page-section fixed-height-small pt-0 pb-0 bg-dark-alfa-30" backgroundImage={bg12}>
                <div className="js-height-parent container relative" style={{height: "600px"}}>
                    <div className="home-content">
                        <div className="home-text">
                            <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                                Creative Project
                            </h2>
                            <div>
                                <Link to="#" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>

            <JarallaxSection className="page-section fixed-height-small pt-0 pb-0 bg-dark-alfa-30" backgroundImage={bg6}>
                <div className="js-height-parent container relative" style={{height: "600px"}}>
                    <div className="home-content">
                        <div className="home-text">
                            <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                                Another Project
                            </h2>
                            <div>
                                <Link to="#" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>

            <JarallaxSection className="page-section fixed-height-small pt-0 pb-0 bg-light-alfa-30" backgroundImage={bg7}>
                <div className="js-height-parent container relative" style={{height: "600px"}}>
                    <div className="home-content">
                        <div className="home-text">
                            <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                                Awesome Stuff
                            </h2>
                            <div>
                                <Link to="#" className="btn btn-mod btn-border btn-medium btn-round">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>

            <JarallaxSection className="page-section fixed-height-small pt-0 pb-0 bg-dark-alfa-30" backgroundImage={bg15}>
                <div className="js-height-parent container relative" style={{height: "600px"}}>
                    <div className="home-content">
                        <div className="home-text">
                            <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                                Print Mockup
                            </h2>
                            <div>
                                <Link to="#" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>

            <section className="small-section bg-dark">
                <Container className="relative">
                    <div className="align-center">
                        <h3 className="banner-heading font-alt">Like Our Creative Works?</h3>
                        <div>
                            <Link to="#" className="btn btn-mod btn-w btn-medium btn-round">Start Project</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ParallaxPage