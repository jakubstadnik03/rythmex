import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeadSection from '../../Common/HeadSection'
import { Link } from 'react-router-dom'

const AccordionPage = () => {

    const [show, setShow] = useState(0);

    const handleShow = (index: any) => {
        setShow(show === index ? -1 : index);
    };

    const [open, setOpen] = useState(-1);

    const handleOpen = (index: any) => {
        setOpen(open === index ? -1 : index);
    };

    return (
        <React.Fragment>
            <HeadSection title="Elements" pageTitle='Accordions' />

            <section className="page-section">
                <Container className="container relative">
                    <Row>
                        <Col sm={6} className="mb-xs-40">
                            <dl className="accordion">
                                <dt>
                                    <Link to="" onClick={() => handleShow(0)}>First</Link>
                                </dt>
                                <dd style={{ display: show === 0 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
                                </dd>
                                <dt>
                                    <Link to="" onClick={() => handleShow(1)}>Second</Link>
                                </dt>
                                <dd style={{ display: show === 1 ? 'block' : 'none' }}>
                                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </dd>
                                <dt>
                                    <Link to="" onClick={() => handleShow(2)}>Third</Link>
                                </dt>
                                <dd style={{ display: show === 2 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                                </dd>
                            </dl>
                        </Col>
                        <Col sm={6} className="mb-xs-40">
                            <dl className="toggle">
                                <dt>
                                    <Link to="" onClick={() => handleOpen(0)}>First</Link>
                                </dt>
                                <dd style={{ display: open === 0 ? 'block' : 'none' }}>
                                    Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
                                </dd>
                                <dt>
                                    <Link to="" onClick={() => handleOpen(1)}>Second</Link>
                                </dt>
                                <dd style={{ display: open === 1 ? 'block' : 'none' }}>
                                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </dd>
                                <dt>
                                    <Link to="" onClick={() => handleOpen(2)}>Third</Link>
                                </dt>
                                <dd style={{ display: open === 2 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                                </dd>
                            </dl>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default AccordionPage