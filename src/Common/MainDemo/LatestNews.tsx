import React from 'react';
import { Link } from 'react-router-dom';

//Import images
import prev1 from "../../assets/images/blog/post-prev-1.jpg";
import prev2 from "../../assets/images/blog/post-prev-2.jpg";
import prev3 from "../../assets/images/blog/post-prev-3.jpg";

const LatestNews = () => {
    return (
        <React.Fragment>
            <section className="page-section" id="news">
                <div className="container relative">

                    <h2 className="section-title font-alt align-left mb-70 mb-sm-40">
                        Latest News

                        <Link to="/blog-classic-sidebar-right" className="section-more right">All News in our blog <i className="fa fa-angle-right"></i></Link>

                    </h2>

                    <div className="row multi-columns-row">


                        <div className="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={prev1} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="#">New Web Design Trends</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="#">John Doe</Link> | 10 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="#" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={prev2} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="#">Minimalistic Design Forever</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="#">John Doe</Link> | 9 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="#" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.3s" data-wow-duration="2s">

                            <div className="post-prev-img">
                                <Link to="/blog-single-sidebar-right"><img src={prev3} alt="" /></Link>
                            </div>

                            <div className="post-prev-title font-alt">
                                <Link to="#">Hipster&rsquo;s Style in&nbsp;Web</Link>
                            </div>

                            <div className="post-prev-info font-alt">
                                <Link to="#">John Doe</Link> | 7 December
                            </div>

                            <div className="post-prev-text">
                                Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="post-prev-more">
                                <Link to="#" className="btn btn-mod btn-gray btn-round">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default LatestNews;
