import React from 'react'
import HeadSection from '../../../Common/HeadSection'
import SideContent from './SideContent'
import MainSide from './MainSide'
import { Col, Container, Row } from 'react-bootstrap'

const SidebarLeft = () => {
    return (
        <React.Fragment>
            <HeadSection title="Classic" pageTitle="Blog" />

            <section className="page-section">
                <Container className="relative">

                    <Row>
                        <Col sm={4} md={3} className="sidebar">
                            <SideContent />
                        </Col>
                        <Col sm={8} className="offset-md-1 order-first order-md-last">
                            <MainSide />
                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}

export default SidebarLeft