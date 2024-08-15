import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Container, Row } from 'react-bootstrap'

const VideoSoundPage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Video & Sound' />

            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col sm={6} className="mb-xs-40">

                            <div className="video">
                                <div className='fluid-width-video-wrapper'>
                                    <iframe src="https://player.vimeo.com/video/79876010?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="560" height="360 " allowFullScreen={true} ></iframe>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className="mb-xs-40 gy-4">

                            <div className="video">
                                <div className='fluid-width-video-wrapper'>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JuyB7NO0EYY" allowFullScreen={true}></iframe>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">

                    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/3752929&amp;color=111111&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

                </div>
            </section>

        </React.Fragment>
    )
}

export default VideoSoundPage