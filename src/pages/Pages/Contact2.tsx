import React from 'react';

const Contact2 = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-dark-lighter">
                <div className="relative container align-left">

                    <div className="row">

                        <div className="col-md-8">
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Contact</h1>
                            <div className="hs-line-4 font-alt">
                                We’re always open to talk to good people
                            </div>
                        </div>

                        <div className="col-md-4 mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <a href="#">Home</a>&nbsp;/&nbsp;<a href="#">Pages</a>&nbsp;/&nbsp;<span>Contact</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12286.715636833376!2d-75.59837531200412!3d39.65694025682884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3d191cf13%3A0xf4674106f987fe3a!2s245+Quigley+Blvd+Ste+K%2C+New+Castle%2C+DE+19720%2C+USA!5e0!3m2!1sen!2sua!4v1530266633608" width="600" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
            </div>

            <section className="page-section" id="contact">
                <div className="container relative">

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="section-text align-center mb-70 mb-xs-40">
                                Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
                            </div>
                        </div>
                    </div>

                    <div className="row mb-60 mb-xs-40">

                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="row">


                                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Call Us
                                        </div>
                                        <div className="ci-text">
                                            +61 3 8376 6284
                                        </div>
                                    </div>
                                </div>



                                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Address
                                        </div>
                                        <div className="ci-text">
                                            245 Quigley Blvd, Ste K
                                        </div>
                                    </div>
                                </div>



                                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Email
                                        </div>
                                        <div className="ci-text">
                                            <a href="mailto:support@srbthemes.pro">support@srbthemes.pro</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">

                            <form className="form contact-form" id="contact_form">
                                <div className="clearfix">

                                    <div className="cf-left-col">


                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" required aria-required="true" />
                                        </div>


                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" required aria-required="true" />
                                        </div>

                                    </div>

                                    <div className="cf-right-col">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="input-md round form-control" style={{ height: "88px" }} placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix">
                                    <div className="cf-left-col">
                                        <div className="form-tip pt-20">
                                            <i className="fa fa-info-circle"></i> All the fields are required
                                        </div>

                                    </div>

                                    <div className="cf-right-col">
                                        <div className="align-right pt-10">
                                            <button className="submit_btn btn btn-mod btn-medium btn-round" id="submit_btn" aria-controls="result">Submit Message</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
                            </form>

                        </div>
                    </div>


                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact2;
