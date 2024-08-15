import React from 'react'
import { Link } from 'react-router-dom'

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg"
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg"
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg"
import pro4 from "../../../assets/images/portfolio/full-project-4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const MainSide = () => {
    return (
        <React.Fragment>

            {/* <!-- Post --> */}
            <div className="blog-item">

                {/* <!-- Post Title --> */}
                <h2 className="blog-item-title font-alt"><Link to="/blog-single-sidebar-right">Post with media gallery</Link></h2>

                {/* <!-- Author, Categories, Comments --> */}
                <div className="blog-item-data">
                    <Link to="#"><i className="fa fa-clock-o"></i> 5 December</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-user"></i> John Doe</Link>
                    <span className="separator">&nbsp;</span>
                    <i className="fa fa-folder-open"></i>
                    <Link to="">Design</Link>, <Link to="#">Branding</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-comments"></i> 5 Comments</Link>
                </div>

                {/* <!-- Media Gallery --> */}
                <div className="blog-media">
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
                        className="clearlist content-slide swiper-navigation">
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

                {/* <!-- Text Intro --> */}
                <div className="blog-item-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                    </p>
                </div>

                {/* <!-- Read More Link --> */}
                <div className="blog-item-foot">
                    <Link to="/blog-single-sidebar-right" className="btn btn-mod btn-round  btn-small">Read More <i className="fa fa-angle-right"></i></Link>
                </div>

            </div>

            {/* <!-- Post --> */}
            <div className="blog-item">

                {/* <!-- Blockquote --> */}
                <blockquote className="blog-item-q">
                    <p>
                        <Link to="/blog-single-sidebar-right">Curabitur iaculis, ligula facilisis volutpat suscipit, sapien felis tempor, consequat vitae velit.</Link>
                    </p>
                </blockquote>

                {/* <!-- Author, Categories, Comments --> */}
                <div className="blog-item-data">
                    <Link to="#"><i className="fa fa-clock-o"></i> 5 December</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-user"></i> John Doe</Link>
                    <span className="separator">&nbsp;</span>
                    <i className="fa fa-folder-open"></i>
                    <Link to="">Design</Link>, <Link to="#">Branding</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-comments"></i> 5 Comments</Link>
                </div>

                {/* <!-- Read More Link --> */}
                <div className="blog-item-foot">
                    <Link to="/blog-single-sidebar-right" className="btn btn-mod btn-round  btn-small">Read More <i className="fa fa-angle-right"></i></Link>
                </div>

            </div>

            {/* <!-- Post --> */}
            <div className="blog-item">

                {/* <!-- Post Title --> */}
                <h2 className="blog-item-title font-alt"><Link to="/blog-single-sidebar-right">Video post only</Link></h2>

                {/* <!-- Author, Categories, Comments --> */}
                <div className="blog-item-data">
                    <Link to="#"><i className="fa fa-clock-o"></i> 4 December</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-user"></i> John Doe</Link>
                    <span className="separator">&nbsp;</span>
                    <i className="fa fa-folder-open"></i>
                    <Link to="">Design</Link>, <Link to="#">Branding</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-comments"></i> 5 Comments</Link>
                </div>

                {/* <!-- Media Gallery --> */}
                <div className="blog-media">
                    <iframe width="640" height="360" src="http://www.youtube.com/embed/w2JUhDd0CAA" frameBorder="0" allowFullScreen></iframe>
                </div>

                {/* <!-- Text Intro --> */}
                <div className="blog-item-body">
                    <p>
                        Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                    </p>
                </div>

                {/* <!-- Read More Link --> */}
                <div className="blog-item-foot">
                    <Link to="/blog-single-sidebar-right" className="btn btn-mod btn-round  btn-small">Read More <i className="fa fa-angle-right"></i></Link>
                </div>

            </div>

            {/* <!-- Post --> */}
            <div className="blog-item">

                {/* <!-- Post Title --> */}
                <h2 className="blog-item-title font-alt"><Link to="/blog-single-sidebar-right">Post with text only</Link></h2>

                {/* <!-- Author, Categories, Comments --> */}
                <div className="blog-item-data">
                    <Link to="#"><i className="fa fa-clock-o"></i> 4 December</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-user"></i> John Doe</Link>
                    <span className="separator">&nbsp;</span>
                    <i className="fa fa-folder-open"></i>
                    <Link to="">Design</Link>, <Link to="#">Branding</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-comments"></i> 5 Comments</Link>
                </div>

                {/* <!-- Text Intro --> */}
                <div className="blog-item-body">
                    <p>
                        Suspendisse accumsan interdum tellus, eu imperdiet lacus consectetur sed. Aliquam in ligula ac lacus blandit commodo vel luctus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eu ultrices mauris.
                    </p>
                </div>

                {/* <!-- Read More Link --> */}
                <div className="blog-item-foot">
                    <Link to="/blog-single-sidebar-right" className="btn btn-mod btn-round  btn-small">Read More <i className="fa fa-angle-right"></i></Link>
                </div>

            </div>

            {/* <!-- Post --> */}
            <div className="blog-item">

                {/* <!-- Post Title --> */}
                <h2 className="blog-item-title font-alt"><Link to="/blog-single-sidebar-right">Image post only</Link></h2>

                {/* <!-- Author, Categories, Comments --> */}
                <div className="blog-item-data">
                    <Link to="#"><i className="fa fa-clock-o"></i> 3 December</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-user"></i> John Doe</Link>
                    <span className="separator">&nbsp;</span>
                    <i className="fa fa-folder-open"></i>
                    <Link to="">Design</Link>, <Link to="#">Branding</Link>
                    <span className="separator">&nbsp;</span>
                    <Link to="#"><i className="fa fa-comments"></i> 5 Comments</Link>
                </div>

                {/* <!-- Image --> */}
                <div className="blog-media">
                    <Link to="/blog-single-sidebar-right"><img src={pro4} alt="" /></Link>
                </div>

                {/* <!-- Text Intro --> */}
                <div className="blog-item-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend. Aliquam ac libero et diam rutrum rutrum. Nullam interdum mattis ipsum at convallis.
                    </p>
                </div>

                {/* <!-- Read More Link --> */}
                <div className="blog-item-foot">
                    <Link to="/blog-single-sidebar-right" className="btn btn-mod btn-round btn-small">Read More <i className="fa fa-angle-right"></i></Link>
                </div>

            </div>

            {/* <!-- Pagination --> */}
            <div className="pagination">
                <Link to=""><i className="fa fa-angle-left"></i></Link>
                <Link to="" className="active">1</Link>
                <Link to="">2</Link>
                <Link to="">3</Link>
                <Link to="" className="no-active">...</Link>
                <Link to="">9</Link>
                <Link to=""><i className="fa fa-angle-right"></i></Link>
            </div>

        </React.Fragment>
    )
}

export default MainSide