import React, { useEffect, useState } from 'react';

//import images
import logoWhite from "../assets/images/logo-white.png";

const NavBar2 = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
     
    return (
        <React.Fragment>
            <nav className={`main-nav dark stick-fixed js-transparent  ${isSticky ? 'small-height' : 'transparent'}`}>
                <div className="full-wrapper relative clearfix">
                    <div className="nav-logo-wrap local-scroll">
                        <a href="/" className="logo">
                            <img src={logoWhite} alt="Company logo" />
                        </a>
                    </div>
                    <div className="mobile-nav" role="button">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Menu</span>
                    </div>

                    <div className="inner-nav desktop-nav">
                        <ul className="clearlist scroll-nav local-scroll">
                            <li className="active"><a href="mailto:support@srbthemes.pro"><i className="fa fa-envelope"></i> support@srbthemes.pro</a></li>
                            <li><a href="#"><i className="fa fa-phone"></i> 0307-567-890</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBar2;
