import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JarallaxSection from './JarallaxSection';

import sectionBg18 from "../assets/images/full-width-images/section-bg-18.jpg"

interface portProps {
    title: string;
}

const PortfolioHeader = ({ title }: portProps) => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg18}
                className="small-section bg-dark-alfa-30 parallax-2" >
                <Container className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Portfolio</h1>
                            <div className="hs-line-4 font-alt">
                                An eye for detail makes our works excellent
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Portfolio</Link>&nbsp;/&nbsp;<span>{title}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </JarallaxSection>
        </React.Fragment>
    )
}

export default PortfolioHeader