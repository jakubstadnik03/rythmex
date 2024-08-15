import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Container } from 'react-bootstrap'

import pro1 from "../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../assets/images/portfolio/full-project-3.jpg"
import pro4 from "../../assets/images/portfolio/full-project-4.jpg"
import pro5 from "../../assets/images/portfolio/full-project-5.jpg"
import pro6 from "../../assets/images/portfolio/full-project-6.jpg"

const ImageLazyLoad = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Images Lazyload' />

            <section className="page-section">
                <Container className="relative">

                    <div className="image-fullwidth">
                        <div className="mb-30">
                            <img className="img-lazy" src={pro1} alt="" />
                        </div>
                        <div className="mb-30">
                            <img className="img-lazy" src={pro2} alt="" />
                        </div>
                        <div className="mb-30">
                            <img className="img-lazy" src={pro3} alt="" />
                        </div>
                        <div className="mb-30">
                            <img className="img-lazy" src={pro4} alt="" />
                        </div>
                        <div className="mb-30">
                            <img className="img-lazy" src={pro5} alt="" />
                        </div>
                        <div>
                            <img className="img-lazy" src={pro6} alt="" />
                        </div>
                    </div>

                </Container>
            </section>

        </React.Fragment>
    )
}

export default ImageLazyLoad