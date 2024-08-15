import React from 'react'
import { Link } from 'react-router-dom'

import blog1 from "../../../assets/images/blog/previews/post-prev-1.jpg"
import blog2 from "../../../assets/images/blog/previews/post-prev-2.jpg"
import blog3 from "../../../assets/images/blog/previews/post-prev-3.jpg"
import blog4 from "../../../assets/images/blog/previews/post-prev-4.jpg"
import blog5 from "../../../assets/images/blog/previews/post-prev-5.jpg"

import avatar from "../../../assets/images/user-avatar.png"

const SideContent = () => {
    return (
        <React.Fragment>

            {/* <!-- Search Widget --> */}
            <div className="widget">
                <form className="form-inline form">
                    <div className="search-wrap">
                        <button className="search-button animate" type="submit" title="Start Search">
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text" className="form-control search-field" placeholder="Search..." />
                    </div>
                </form>
            </div>

            {/* <!-- Widget --> */}
            <div className="widget">
                <h5 className="widget-title font-alt">Categories</h5>
                <div className="widget-body">
                    <ul className="clearlist widget-menu">
                        <li>
                            <Link to="#" title="">Branding</Link>
                            <small>
                                - 7
                            </small>
                        </li>
                        <li>
                            <Link to="#" title="">Design</Link>
                            <small>
                                - 15
                            </small>
                        </li>
                        <li>
                            <Link to="#" title="">Development</Link>
                            <small>
                                - 3
                            </small>
                        </li>
                        <li>
                            <Link to="#" title="">Photography</Link>
                            <small>
                                - 5
                            </small>
                        </li>
                        <li>
                            <Link to="#" title="">Other</Link>
                            <small>
                                - 1
                            </small>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- Widget --> */}
            <div className="widget">
                <h5 className="widget-title font-alt">Tags</h5>
                <div className="widget-body">
                    <div className="tags">
                        <Link to="">Design</Link>
                        <Link to="">Portfolio</Link>
                        <Link to="">Digital</Link>
                        <Link to="">Branding</Link>
                        <Link to="">Theme</Link>
                        <Link to="">Clean</Link>
                        <Link to="">UI & UX</Link>
                        <Link to="">Love</Link>
                    </div>
                </div>
            </div>

            {/* <!-- Widget --> */}
            <div className="widget">
                <h5 className="widget-title font-alt">Last posts</h5>
                <div className="widget-body">
                    <ul className="clearlist widget-posts">
                        <li className="clearfix">
                            <Link to=""><img src={blog1} alt="" className="widget-posts-img" /></Link>
                            <div className="widget-posts-descr">
                                <Link to="#" title="">Minimalistic Design Forever</Link>
                                Posted by John Doe 7 Mar
                            </div>
                        </li>
                        <li className="clearfix">
                            <Link to=""><img src={blog2} alt="" className="widget-posts-img" /></Link>
                            <div className="widget-posts-descr">
                                <Link to="#" title="">Ipsum dolor sit amet, consectetur adipiscing elit</Link>
                                Posted by John Doe 7 Mar
                            </div>
                        </li>
                        <li className="clearfix">
                            <Link to=""><img src={blog3} alt="" className="widget-posts-img" /></Link>
                            <div className="widget-posts-descr">
                                <Link to="#" title="">New Web Design Trends in 2015 year</Link>
                                Posted by John Doe 7 Mar
                            </div>
                        </li>
                        <li className="clearfix">
                            <Link to=""><img src={blog4} alt="" className="widget-posts-img" /></Link>
                            <div className="widget-posts-descr">
                                <Link to="#" title="">Hipster’s Style in Web Design and Logo</Link>
                                Posted by John Doe 7 Mar
                            </div>
                        </li>
                        <li className="clearfix">
                            <Link to=""><img src={blog5} alt="" className="widget-posts-img" /></Link>
                            <div className="widget-posts-descr">
                                <Link to="#" title="">Duis tristique condimentum nulla, bibendum consectetu</Link>
                                Posted by John Doe 7 Mar
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            {/* <!-- Widget --> */}
            <div className="widget">
                <h5 className="widget-title font-alt">Comments</h5>
                <div className="widget-body">
                    <ul className="clearlist widget-comments">
                        <li>
                            John Doe on <Link to="#" title="">Lorem ipsum dolor sit amet</Link>
                        </li>
                        <li>
                            Emma Johnson on <Link to="#" title="">Suspendisse accumsan interdum tellus</Link>
                        </li>
                        <li>
                            John Doe on <Link to="#" title="">Praesent ultricies ut ipsum</Link>
                        </li>
                        <li>
                            Mark Deen on <Link to="#" title="">Vivamus malesuada vel nulla vulputate</Link>
                        </li>
                        <li>
                            Sam Brin on <Link to="#" title="">Aenean auctor egestas auctor</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- Widget --> */}
            <div className="widget">
                <h5 className="widget-title font-alt">Text widget</h5>
                <div className="widget-body">
                    <div className="widget-text clearfix">
                        <img src={avatar} alt="" width="70" className="img-circle left img-left" />
                        Consectetur adipiscing elit. Quisque magna ante eleifend eleifend.
                        Purus ut dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non sem.
                        Quisque magna ante eleifend eleifend.
                    </div>
                </div>

            </div>

            {/* <!-- Widget --> */}
            <div className="widget">
                <h5 className="widget-title font-alt">Archive</h5>
                <div className="widget-body">
                    <ul className="clearlist widget-menu">
                        <li>
                            <Link to="#" title="">February 2014</Link>
                        </li>
                        <li>
                            <Link to="#" title="">January 2014</Link>
                        </li>
                        <li>
                            <Link to="#" title="">December 2013</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideContent