import React from 'react'
import HeadSection from '../../../Common/HeadSection'
import { Col, Container, Row } from 'react-bootstrap'
import MainSide from './MainSide'
import SideContent from './SideContent'

const SidebarRight = () => {
    return (
        <React.Fragment>
            <HeadSection title="Classic" pageTitle="Blog" />

            <section className="page-section">
                <Container className="relative">

                    <Row>
                        <Col sm={8}>
                            <MainSide />
                        </Col>
                        <Col sm={4} md={3} className="sidebar offset-md-1">
                            <SideContent />
                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}

export default SidebarRight