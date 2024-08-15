import React, { useEffect, useState } from 'react'
import logo from "../assets/images/logo-dark.png"

interface NavBarProps {
    isNavBar4: boolean;
}
const NavBar4 = ({ isNavBar4 }: NavBarProps) => {

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
            <div id="sticky-wrapper" className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`} style={{ height: "75px" }}>
                <nav className={`main-nav js-stick ${isNavBar4 ? "light" : ""} ${isSticky ? 'small-height' : ''}`}
                    style={{ position: "fixed" }}>
                    <div className="container relative d-flex align-items-center justify-content-between">
                        {/* Logo ( * your text or image into link tag *) */}
                        <div className="nav-logo-wrap local-scroll">
                            <a href="/" className="logo">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="mobile-nav" role="button" z-index="0">
                            <i className="fa fa-bars"></i>
                            <span className="sr-only">Menu</span>
                        </div>
                        {/* <!-- Main Menu --> */}
                        <div className="inner-nav desktop-nav">
                            <ul className="clearlist scroll-nav local-scroll">
                                <li className="active"><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#screenshots">Screenshots</a></li>
                                <li><a href="#pricing">Pricing</a></li>

                                {/* <!-- Button --> */}
                                <li>
                                    <a href="#"><span className="btn btn-mod btn-circle"><i className="fa fa-shopping-cart"></i> Buy Now</span></a>
                                </li>
                                {/* <!-- End Button --> */}

                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navigation panel */}
            </div>
        </React.Fragment>
    )
}

export default NavBar4