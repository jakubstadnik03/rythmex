import React from 'react'

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg"

import user from "../../../assets/images/user-avatar.png"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const MainSide = () => {
    return (
        <React.Fragment>
            <div className="blog-item mb-80 mb-xs-40">
                <div className="blog-item-body">
                    <h1 className="mt-0 font-alt">Here is the big headline for your blog post</h1>
                    <div className="lead">
                        <p>
                            Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                            Fusce non ante sed lorem rutrum feugiat.
                        </p>
                    </div>

                    <div className="blog-media mt-40 mb-40 mb-xs-30">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            navigation={true}
                            // loop={true}
                            fadeEffect={{
                                crossFade: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="clearlist content-slider swiper-navigation">
                            <SwiperSlide>
                                <img src={pro1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pro2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pro3} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                    </p>

                    <p>
                        Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut&nbsp;dignissim consectetur, nulla erat ultrices purus, ut&nbsp;consequat sem elit non sem.
                        Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                        Fusce non ante sed lorem rutrum feugiat.
                    </p>

                    <blockquote>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a&nbsp;ante.
                        </p>
                        <footer>
                            Someone famous in
                            <cite title="Source Title">
                                Source Title
                            </cite>
                        </footer>
                    </blockquote>

                    <p>
                        Praesent ultricies ut ipsum non laoreet. Nunc ac <Link to="#">ultricies</Link> leo. Nulla ac ultrices arcu. Nullam adipiscing lacus in consectetur posuere. Nunc malesuada tellus turpis, ac pretium orci molestie vel.
                        Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                        Fusce non ante sed lorem rutrum feugiat.
                    </p>
                    <ul>
                        <li>First item of the list</li>
                        <li>Second item of the list</li>
                        <li>Third item of the list</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                        Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut&nbsp;dignissim consectetur, nulla erat ultrices purus, ut&nbsp;consequat sem elit non sem.
                    </p>
                </div>
            </div>

            <div className="mb-80 mb-xs-40">
                <h4 className="blog-page-title font-alt">Comments<small className="number">(3)</small></h4>
                <ul className="media-list text comment-list clearlist">
                    <li className="media comment-item">
                        <Link className="pull-left" to="#"><img className="media-object comment-avatar" src={user} alt="" width="50" height="50" /></Link>
                        <div className="media-body">
                            <div className="comment-item-data">
                                <div className="comment-author">
                                    <Link to="#">John Doe</Link>
                                </div>
                                Feb 9, 2014, at 10:23<span className="separator">&mdash;</span>
                                <Link to="#"><i className="fa fa-comment"></i>&nbsp;Reply</Link>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                            </p>
                            <div className="media comment-item">
                                <Link className="pull-left" to="#"><img className="media-object comment-avatar" src={user} alt="" /></Link>
                                <div className="media-body">
                                    <div className="comment-item-data">
                                        <div className="comment-author">
                                            <Link to="#">Sam Brin</Link>
                                        </div>
                                        Feb 9, 2014, at 10:27<span className="separator">&mdash;</span>
                                        <Link to="#"><i className="fa fa-comment"></i>&nbsp;Reply</Link>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="media comment-item">
                        <Link className="pull-left" to="#"><img className="media-object comment-avatar" src={user} alt="" /></Link>
                        <div className="media-body">
                            <div className="comment-item-data">
                                <div className="comment-author">
                                    <Link to="#">Emma Johnson</Link>
                                </div>
                                Feb 9, 2014, at 10:37<span className="separator">&mdash;</span>
                                <Link to="#"><i className="fa fa-comment"></i>&nbsp;Reply</Link>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                            </p>
                        </div>
                    </li>

                    <li className="media comment-item">
                        <Link className="pull-left" to="#"><img className="media-object comment-avatar" src={user} alt="" /></Link>
                        <div className="media-body">
                            <div className="comment-item-data">
                                <div className="comment-author">
                                    <Link to="#">John Doe</Link>
                                </div>
                                Feb 9, 2014, at 10:3<span className="separator">&mdash;</span>
                                <Link to="#"><i className="fa fa-comment"></i>&nbsp;Reply</Link>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mb-80 mb-xs-40">
                <h4 className="blog-page-title font-alt">Leave a comment</h4>
                <form method="post" action="#" id="form" className="form">
                    <div className="row mb-20 mb-md-10">
                        <div className="col-md-6 mb-md-10">
                            <input type="text" name="name" id="name" className="input-md form-control" placeholder="Name *" maxLength={100} required aria-required="true" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" name="email" id="email" className="input-md form-control" placeholder="Email *" maxLength={100} required aria-required="true" />
                        </div>
                    </div>
                    <div className="mb-20 mb-md-10">
                        <input type="text" name="website" id="website" className="input-md form-control" placeholder="Website" maxLength={100} required aria-required="true" />
                    </div>
                    <div className="mb-30 mb-md-10">
                        <textarea name="text" id="text" className="input-md form-control" rows={6} placeholder="Comment" maxLength={400}></textarea>
                    </div>
                    <button type="submit" className="btn btn-mod btn-medium">
                        Send comment
                    </button>
                </form>
            </div>

            <div className="clearfix mt-40">
                <Link to="#" className="blog-item-more left"><i className="fa fa-angle-left"></i>&nbsp;Prev post</Link>
                <Link to="#" className="blog-item-more right">Next post&nbsp;<i className="fa fa-angle-right"></i></Link>
            </div>
        </React.Fragment>
    )
}

export default MainSide