import React from 'react';
import sectionBg from "../../assets/images/full-width-images/section-bg-12.jpg";
import JarallaxSection from '../../Common/JarallaxSection';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="home-section bg-dark-alfa-50 parallax-2">
                <div className="js-height-full">

                    <div className="home-content container">
                        <div className="home-text">
                            <div className="hs-cont">
                                <div className="hs-wrap">
                                    <div className="hs-line-13 font-alt mb-10">
                                        404
                                    </div>

                                    <div className="hs-line-4 font-alt mb-40">
                                        The page you were looking for could not be found.
                                    </div>

                                    <div className="local-scroll">
                                        <Link to="/index" className="btn btn-mod btn-w btn-round btn-small">
                                            <i className="fa fa-angle-left"></i> Back To Home Page
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
        </React.Fragment>
    );
};

export default Error404;
