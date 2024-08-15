import React from 'react';
import sectionBg from "../../assets/images/full-width-images/section-bg-1.jpg";
import JarallaxSection from '../../Common/JarallaxSection';
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="jarallax home-section bg-dark-alfa-30 parallax-2" id="home">
                <div className="js-height-full container">

                    <div className="home-content">
                        <div className="home-text">

                            <h1 className="hs-line-1 font-alt mb-80 mb-xs-30 mt-50 mt-sm-0">
                                Thomas Rhythm
                            </h1>

                            <p className="hs-line-6">
                                Extraordinary art studio &&nbsp;creative minimalism lovers
                            </p>

                        </div>
                    </div>

                    <div className="local-scroll">
                        <Link to="#about" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon"></i><span className="sr-only">Scroll to the next section</span></Link>
                    </div>

                </div>
            </JarallaxSection>
        </React.Fragment>
    );
};

export default Section;
