import React from 'react';

const WhyChoose = () => {
    return (
        <React.Fragment>
            <section className="page-section">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Why Choose Us?
                    </h2>

                    <div className="row multi-columns-row alt-features-grid">

                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-flag"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">We’re Creative</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-clock"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">We’re Punctual</h3>
                                <div className="alt-features-descr align-left">
                                    Proin fringilla augue at maximus vestibulum.
                                    Nam pulvinar vitae neque et porttitor. Praesent sed
                                    nisi eleifend, lorem fermentum orci sit amet, iaculis libero.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-hotairballoon"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">We have magic</h3>
                                <div className="alt-features-descr align-left">
                                    Curabitur iaculis accumsan augue, nec finibus mauris pretium eu.
                                    Duis placerat ex gravida nibh tristique porta. Nulla facilisi.
                                    Suspendisse ultricies eros blandit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default WhyChoose;
