import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Alert, Container, Row } from 'react-bootstrap'

const MessagesPage = () => {
        return (
            <React.Fragment>
                <HeadSection title="Elements" pageTitle='Messages' />

                <section className="page-section">
                    <Container className="relative">

                        <Row>

                            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                {[
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                ].map((variant) => (
                                    <Alert key={variant} variant={variant} dismissible>
                                        <i className="fa fa-comments"></i> A SIMPLE SUCCESS alert with{' '}
                                        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                                        you like.
                                    </Alert>
                                ))}
                            </div>

                        </Row>

                    </Container>
                </section>

            </React.Fragment>
        )
    }
export default MessagesPage