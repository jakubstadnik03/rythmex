import React from 'react';
import sectionBg from "../../assets/images/full-width-images/section-bg-4.jpg";
import JarallaxSection from '../../Common/JarallaxSection';

const UnderConstruction = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="home-section bg-dark-alfa-90 parallax-2">
                <div className="js-height-full">

                    <div className="home-content container">
                        <div className="home-text">
                            <div className="hs-cont">

                                <div className="hs-wrap">

                                    <div className="hs-line-12 font-alt mb-10">
                                        Sorry
                                    </div>

                                    <div className="hs-line-6 no-transp font-alt mb-40">
                                        We are currently under construction!
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi urna, vehicula aliquam dapibus ornare, semper semper nisl.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </JarallaxSection>
        </React.Fragment>
    );
};

export default UnderConstruction;
