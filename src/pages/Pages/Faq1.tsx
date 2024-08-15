import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sectionBg from "../../assets/images/full-width-images/section-bg-6.jpg";
import JarallaxSection from '../../Common/JarallaxSection';

const Faq1 = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-30 parallax-3">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">FAQ</h1>
                            <div className="hs-line-4 font-alt">
                                Frequently Asked Questions
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>FAQ</span>
                            </div>

                        </Col>
                    </Row>
                </div>
            </JarallaxSection>

            <section className="page-section">
                <Container className="relative">

                    <Row className="section-text">
                        <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">

                            <dl className="accordion">

                                <dt>
                                    <Link
                                        className={openIndex === 0 ? 'active' : ''}
                                        onClick={() => handleToggle(0)}
                                        to="#">What do you mean by an End Product?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 0 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                                <dt>
                                    <Link
                                        className={openIndex === 1 ? 'active' : ''}
                                        onClick={() => handleToggle(1)}
                                        to="#">Where do I find my Purchase or License code?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 1 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                                <dt>
                                    <Link
                                        className={openIndex === 2 ? 'active' : ''}
                                        onClick={() => handleToggle(2)}
                                        to="#">Do I need to buy a licence for each site?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 2 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                                <dt>
                                    <Link
                                        className={openIndex === 3 ? 'active' : ''}
                                        onClick={() => handleToggle(3)}
                                        to="#">Is my license transferable?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 3 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                                <dt>
                                    <Link
                                        className={openIndex === 4 ? 'active' : ''}
                                        onClick={() => handleToggle(4)}
                                        to="#">Can I incorporate advertising in my end product with a regular licence?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 4 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                                <dt>
                                    <Link
                                        className={openIndex === 5 ? 'active' : ''}
                                        onClick={() => handleToggle(5)}
                                        to="#">If I make a clip for YouTube using music from AudioJungle, can I monetize the clip by allowing ads?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 5 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                                <dt>
                                    <Link
                                        className={openIndex === 6 ? 'active' : ''}
                                        onClick={() => handleToggle(6)}
                                        to="#">Do I need a separate license each time I use an item in a series?</Link>
                                </dt>
                                <dd style={{ display: openIndex === 6 ? 'block' : 'none' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.
                                </dd>

                            </dl>

                        </Col>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default Faq1;
