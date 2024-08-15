import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SlideshowLightbox } from 'lightbox.js-react';
import '../../../node_modules/lightbox.js-react/dist/index.css';

//import images
import project1 from "../../assets/images/portfolio/projects-1.jpg";
import project2 from "../../assets/images/portfolio/projects-2.jpg";
import project3 from "../../assets/images/portfolio/projects-3.jpg";
import project4 from "../../assets/images/portfolio/projects-4.jpg";
import project5 from "../../assets/images/portfolio/projects-5.jpg";
import project6 from "../../assets/images/portfolio/projects-6.jpg";
import project7 from "../../assets/images/portfolio/projects-7.jpg";
import project8 from "../../assets/images/portfolio/projects-8.jpg";

const GalleryCol2 = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Gallery</h1>
                            <div className="hs-line-4 font-alt black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Gallery</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="page-section">
                <div>
                    <SlideshowLightbox className="container post-prev-img mx-auto mb-8 d-flex flex-wrap mx-auto">
                        <img src={project1} alt="" className='lightbox-gallery-2 mfp-image rounded object-cover p-2' style={{ width : "50%"}} />
                        <img src={project2} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                        <img src={project3} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                        <img src={project4} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                        <img src={project5} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                        <img src={project6} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                        <img src={project7} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                        <img src={project8} alt="" className='rounded object-cover p-2' style={{ width : "50%"}}  />
                    </SlideshowLightbox>
                </div>
            </section>
        </React.Fragment>
    );
};

export default GalleryCol2;
