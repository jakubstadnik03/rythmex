import React, { useEffect, useState } from 'react';

//import images
import logoWhite from "../assets/images/logo-white.png";
import logoDark from "../assets/images/logo-dark.png";

interface NavBarProps {
    isNavBarLight: boolean;
}

const PagesNavBar = ({ isNavBarLight }: NavBarProps) => {

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

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSubPageOpen, setIsSubPageOpen] = useState(false);
    const [isSubElemOpen, setIsSubElemOpen] = useState(false);
    const [isSubPortOpen, setIsSubPortOpen] = useState(false);
    const [isSubPortBoxedOpen, setIsSubPortBoxedOpen] = useState(false);
    const [isSubPortBoxedGuOpen, setIsSubPortBoxedGuOpen] = useState(false);
    const [isSubPortBoxedTitleOpen, setIsSubPortBoxedTitleOpen] = useState(false);
    const [isSubPortWideOpen, setIsSubPortWideOpen] = useState(false);
    const [isSubPortWideGuOpen, setIsSubPortWideGuOpen] = useState(false);
    const [isSubPortWideTitleOpen, setIsSubPortWideTitleOpen] = useState(false);
    const [isSubPortMasoOpen, setIsSubPortMasoOpen] = useState(false);
    const [isSubPortSingleOpen, setIsSubPortSingleOpen] = useState(false);
    const [isSubBlogOpen, setIsSubBlogOpen] = useState(false);
    const [isSubBlogClassicOpen, setIsSubBlogClassicOpen] = useState(false);
    const [isSubBlogColumnOpen, setIsSubBlogColumnOpen] = useState(false);
    const [isSubBlogMasoOpen, setIsSubBlogMasoOpen] = useState(false);
    const [isSubBlogSingleOpen, setIsSubBlogSingleOpen] = useState(false);
    const [isSubShopOpen, setIsSubShopOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    // ==== mobile-sub-mennu=====
    const menuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen)
    }
    const pageToggle = () => {
        setIsSubPageOpen(!isSubPageOpen)
    }
    const elementToggle = () => {
        setIsSubElemOpen(!isSubElemOpen)
    }
    const portToggle = () => {
        setIsSubPortOpen(!isSubPortOpen)
    }
    const blogToggle = () => {
        setIsSubBlogOpen(!isSubBlogOpen)
    }
    const shopToggle = () => {
        setIsSubShopOpen(!isSubShopOpen)
    }
    const languageToggle = () => {
        setIsLanguageOpen(!isLanguageOpen)
    }



    // ====Desktop-sub-menu====

    const closeSubMenu = () => {
        setIsSubShopOpen(false);
    };
    const closeSubPageMenu = () => {
        setIsSubPageOpen(false);
    };
    const closeSubElemMenu = () => {
        setIsSubElemOpen(false);
    };
    const closeSubPortMenu = () => {
        setIsSubPortOpen(false);
    };
    const closeSubBlogMenu = () => {
        setIsSubBlogOpen(false);
    };
    const closeSubShopMenu = () => {
        setIsSubShopOpen(false);
    };
    const closeLanguageMenu = () => {
        setIsLanguageOpen(false);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // Initialize on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setMobileSubMenu(window.innerWidth > 1024);
        };

        // Initialize on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav) {
            mobileNav.setAttribute('aria-expanded', 'false');
        }
    }, []);

    const [mobileSubMenu, setMobileSubMenu] = useState(false);

    const handleMobileSubmenu = () => {
        setMobileSubMenu(!mobileSubMenu)
    }


    return (
        <React.Fragment>
            <div id="sticky-wrapper" className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`} style={{ height: "75px" }}>
                <nav
                    className={`main-nav js-stick ${isNavBarLight ? "dark" : ""} ${isSticky ? 'small-height' : ''} ${isMobile ? 'mobile-on' : ''}`}
                    style={{ position: "fixed" }}
                >
                    <div className="full-wrapper relative clearfix d-flex justify-content-between align-items-center">
                        <div className="nav-logo-wrap local-scroll flex-shrink-1">
                            <a href="/" className="logo">
                                {
                                    isNavBarLight ?
                                        <img src={logoWhite} alt="Company logo" />
                                        :
                                        <img src={logoDark} alt="Company logo" />
                                }
                            </a>
                        </div>

                        <div className={`mobile-nav ${mobileSubMenu === true ? "active" : ""}`} role="button" onClick={handleMobileSubmenu}>
                            <i className="fa fa-bars"></i>
                            <span className="sr-only">Menu</span>
                        </div>

                        <div className={`menu inner-nav desktop-nav ${mobileSubMenu === true ? "js-opened" : ""}`} style={{ display: `${mobileSubMenu === true ? "block" : "none"}` }}>
                            <ul className="clearlist" style={{ display: `${mobileSubMenu === true ? "block" : "none"}` }}>
                                <li className={isSubMenuOpen === true ? "js-opened" : ""}>
                                    <a
                                        href="#"
                                        className="mn-has-sub active"
                                        onClick={menuToggle}
                                        onMouseEnter={() => setIsSubMenuOpen(true)}
                                        onMouseLeave={() => setIsSubMenuOpen(false)}
                                    >Home &nbsp;<i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="mn-sub mn-has-multi" onMouseEnter={() => setIsSubMenuOpen(true)} onMouseLeave={() => setIsSubMenuOpen(false)} style={{ display: isSubMenuOpen === true ? "block" : "none" }}>
                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">Multi Page</a>
                                            <ul>
                                                <li>
                                                    <a href="/" onClick={closeSubMenu}>Main Demo</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-01" onClick={closeSubMenu}>Image Parallax 1</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-02" onClick={closeSubMenu}>Image Parallax 2</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-03" onClick={closeSubMenu}>Image Parallax 3</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-04" onClick={closeSubMenu}>Image Parallax 4</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-06" onClick={closeSubMenu}>Image Parallax 5</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-12" onClick={closeSubMenu}>Fullwidth Image</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-05" onClick={closeSubMenu}>Text Rotator</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-07" onClick={closeSubMenu}>Slider Fullscreen</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-08" onClick={closeSubMenu}>Slider Zoom Effect</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-09" onClick={closeSubMenu}>Slider Fullwidth</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">&nbsp;</a>
                                            <ul>
                                                <li>
                                                    <a href="/mp-index-10" onClick={closeSubMenu}>Slider Background</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-17" onClick={closeSubMenu}>Slider Revolution 1</a>
                                                </li>
                                                <li>
                                                    <a href="mp-index-18" onClick={closeSubMenu}>Slider Revolution 2</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-20" onClick={closeSubMenu}>Content Slider</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-11" onClick={closeSubMenu}>With Play Button</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-13" onClick={closeSubMenu}>BG Video Fullwidth</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-14" onClick={closeSubMenu}>BG Video Fullscreen 1</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-15" onClick={closeSubMenu}>BG Video Fullscreen 2</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-19" onClick={closeSubMenu}>BG HTML5 Video (local)</a>
                                                </li>
                                                <li>
                                                    <a href="/mp-index-16" onClick={closeSubMenu}>Agency Header</a>
                                                </li>
                                                <li>
                                                    <a href="/#special-demos" onClick={closeSubMenu}>Special Demos <span className="label-new round">New</span></a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">One Page</a>

                                            <ul>
                                                <li>
                                                    <a href="/index" onClick={closeSubMenu}>Main Demo</a>
                                                </li>
                                                <li>
                                                    <a href="/index-01" onClick={closeSubMenu}>Image Parallax 1</a>
                                                </li>
                                                <li>
                                                    <a href="/index-02" onClick={closeSubMenu}>Image Parallax 2</a>
                                                </li>
                                                <li>
                                                    <a href="/index-03" onClick={closeSubMenu}>Image Parallax 3</a>
                                                </li>
                                                <li>
                                                    <a href="/index-04" onClick={closeSubMenu}>Image Parallax 4</a>
                                                </li>
                                                <li>
                                                    <a href="/index-06" onClick={closeSubMenu}>Image Parallax 5</a>
                                                </li>
                                                <li>
                                                    <a href="/index-12" onClick={closeSubMenu}>Fullwidth Image</a>
                                                </li>
                                                <li>
                                                    <a href="/index-05" onClick={closeSubMenu}>Text Rotator</a>
                                                </li>
                                                <li>
                                                    <a href="/index-07" onClick={closeSubMenu}>Slider Fullscreen</a>
                                                </li>
                                                <li>
                                                    <a href="/index-08" onClick={closeSubMenu}>Slider Zoom Effect</a>
                                                </li>
                                                <li>
                                                    <a href="/index-09" onClick={closeSubMenu}>Slider Fullwidth</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">&nbsp;</a>

                                            <ul>
                                                <li>
                                                    <a href="/index-10" onClick={closeSubMenu}>Slider Background</a>
                                                </li>
                                                <li>
                                                    <a href="/index-17" onClick={closeSubMenu}>Slider Revolution 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-18" onClick={closeSubMenu}>Slider Revolution 2</a>
                                                </li>
                                                <li>
                                                    <a href="/index-20" onClick={closeSubMenu}>Content Slider</a>
                                                </li>
                                                <li>
                                                    <a href="/index-11" onClick={closeSubMenu}>With Play Button</a>
                                                </li>
                                                <li>
                                                    <a href="/index-13" onClick={closeSubMenu}>BG Video Fullwidth</a>
                                                </li>
                                                <li>
                                                    <a href="/index-14" onClick={closeSubMenu}>BG Video Fullscreen 1</a>
                                                </li>
                                                <li>
                                                    <a href="/index-15" onClick={closeSubMenu}>BG Video Fullscreen 2</a>
                                                </li>
                                                <li>
                                                    <a href="/index-19" onClick={closeSubMenu}>BG HTML5 Video (local)</a>
                                                </li>
                                                <li>
                                                    <a href="/index-16" onClick={closeSubMenu}>Agency Header</a>
                                                </li>
                                                <li>
                                                    <a href="/intro#special-demos" onClick={closeSubMenu}>Special Demos <span className="label-new round">New</span></a>
                                                </li>
                                            </ul>

                                        </li>

                                    </ul>

                                </li>

                                <li className={isSubPageOpen === true ? "js-opened" : ""}>
                                    <a
                                        href="#"
                                        className="mn-has-sub active"
                                        onClick={pageToggle}
                                        onMouseEnter={() => setIsSubPageOpen(true)}
                                        onMouseLeave={() => setIsSubPageOpen(false)}
                                    >Pages &nbsp;<i className="fa fa-angle-down"></i></a>

                                    <ul className="mn-sub mn-has-multi" onMouseEnter={() => setIsSubPageOpen(true)}
                                        onMouseLeave={() => setIsSubPageOpen(false)} style={{ display: isSubPageOpen === true ? "block" : "none" }}>

                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">Group 1</a>

                                            <ul>
                                                <li>
                                                    <a href="/pages-about-1" onClick={closeSubPageMenu}>About Us 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-about-2" onClick={closeSubPageMenu}>About Us 2</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-about-3" onClick={closeSubPageMenu}>About Us 3</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-services-1" onClick={closeSubPageMenu}>Services 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-services-2" onClick={closeSubPageMenu}>Services 2</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-services-3" onClick={closeSubPageMenu}>Services 3</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-clients" onClick={closeSubPageMenu}>Clients</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-landing" onClick={closeSubPageMenu}>Landing Page</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">Group 2</a>

                                            <ul>
                                                <li>
                                                    <a href="/pages-team-1" onClick={closeSubPageMenu}>Team 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-team-2" onClick={closeSubPageMenu}>Team 2</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-faq-1" onClick={closeSubPageMenu}>FAQ 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-faq-2" onClick={closeSubPageMenu}>FAQ 2</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-pricing-1" onClick={closeSubPageMenu}>Pricing 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-pricing-2" onClick={closeSubPageMenu}>Pricing 2</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-contact-1" onClick={closeSubPageMenu}>Contact 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-contact-2" onClick={closeSubPageMenu}>Contact 2</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="mn-sub-multi">
                                            <a className="mn-group-title">Group 3</a>

                                            <ul>
                                                <li>
                                                    <a href="/pages-gallery-1col" onClick={closeSubPageMenu}>Gallery Col 1</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-gallery-2col" onClick={closeSubPageMenu}>Gallery Col 2</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-gallery-3col" onClick={closeSubPageMenu}>Gallery Col 3</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-gallery-4col" onClick={closeSubPageMenu}>Gallery Col 4</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-gallery-6col" onClick={closeSubPageMenu}>Gallery Col 6</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-account" onClick={closeSubPageMenu}>Login / Register</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-under-construction" onClick={closeSubPageMenu}>Under Construction</a>
                                                </li>
                                                <li>
                                                    <a href="/pages-404" onClick={closeSubPageMenu}>Error 404</a>
                                                </li>
                                            </ul>

                                        </li>

                                    </ul>

                                </li>

                                <li className={isSubElemOpen === true ? "js-opened" : ""}>
                                    <a
                                        href="#"
                                        className="mn-has-sub"
                                        role='button'
                                        aria-expanded='false'
                                        aria-haspopup='true'
                                        onClick={elementToggle}
                                        onMouseEnter={() => setIsSubElemOpen(true)}
                                        onMouseLeave={() => setIsSubElemOpen(false)}
                                    >Elements &nbsp;<i className="fa fa-angle-down"></i></a>


                                    <ul className="mn-sub mn-has-multi" onMouseEnter={() => setIsSubElemOpen(true)}
                                        onMouseLeave={() => setIsSubElemOpen(false)} style={{ display: isSubElemOpen === true ? "block" : "none" }}>

                                        <li className="mn-sub-multi">

                                            <ul>
                                                <li>
                                                    <a href="/elements-accordions" onClick={closeSubElemMenu}><i className="fa fa-plus-circle fa-sm"></i> Accordions</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-bars" onClick={closeSubElemMenu}><i className="fa fa-tachometer fa-sm"></i> Bars (Progress)</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-buttons" onClick={closeSubElemMenu}><i className="fa fa-a fa-sm"></i> Buttons</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-features" onClick={closeSubElemMenu}><i className="fa fa-th-large fa-sm"></i> Features Box</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-forms" onClick={closeSubElemMenu}><i className="fa fa-align-justify fa-sm"></i> Form Fields</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-grid" onClick={closeSubElemMenu}><i className="fa fa-th fa-sm"></i> Grid</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-icons-et" onClick={closeSubElemMenu}><i className="fa fa-heart-o fa-sm"></i> Icons Et-line</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-icons-fe" onClick={closeSubElemMenu}><i className="fa fa-heart fa-sm"></i> Icons Font Awesome</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-images-lazyload" onClick={closeSubElemMenu}><i className="fa fa-spinner fa-sm"></i> Images Lazyload</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-messages" onClick={closeSubElemMenu}><i className="fa fa-comment fa-sm"></i> Messages</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="mn-sub-multi">

                                            <ul>
                                                <li>
                                                    <a href="/elements-page-titles" onClick={closeSubElemMenu}><i className="fa fa-header fa-sm"></i> Page Titles</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-sliders" onClick={closeSubElemMenu}><i className="fa fa-chevron-circle-right fa-sm"></i> Sliders</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-sliders-lazyload" onClick={closeSubElemMenu}><i className="fa fa-chevron-circle-right fa-sm"></i> Sliders Lazyload</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-tabs" onClick={closeSubElemMenu}><i className="fa fa-columns fa-sm"></i> Tabs</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-typography" onClick={closeSubElemMenu}><i className="fa fa-font fa-sm"></i> Typography</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-video-sound" onClick={closeSubElemMenu}><i className="fa fa-youtube-play fa-sm"></i> Video / Sound</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-header-dark" onClick={closeSubElemMenu}><i className="fa fa-header fa-sm"></i> Header Dark</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-header-dark-transparent" onClick={closeSubElemMenu}><i className="fa fa-header fa-sm"></i> Header Dark Transp</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-header-white" onClick={closeSubElemMenu}><i className="fa fa-header fa-sm"></i> Header White</a>
                                                </li>
                                                <li>
                                                    <a href="/elements-header-white-transparent" onClick={closeSubElemMenu}><i className="fa fa-header fa-sm"></i> Header White Transp</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>

                                </li>

                                <li className={isSubPortOpen === true ? "js-opened" : ""}>
                                    <a href="#" className="mn-has-sub" onClick={portToggle} onMouseEnter={() => setIsSubPortOpen(true)}
                                        onMouseLeave={() => setIsSubPortOpen(false)}>Portfolio &nbsp;<i className="fa fa-angle-down"></i></a>


                                    <ul className="mn-sub" onMouseEnter={() => setIsSubPortOpen(true)} onMouseLeave={() => setIsSubPortOpen(false)} style={{ display: isSubPortOpen === true ? "block" : "none" }}>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortBoxedOpen(true)} onMouseLeave={() => setIsSubPortBoxedOpen(false)}>Boxed <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortBoxedOpen(true)} onMouseLeave={() => setIsSubPortBoxedOpen(false)} style={{ display: isSubPortBoxedOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-boxed-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortBoxedGuOpen(true)} onMouseLeave={() => setIsSubPortBoxedGuOpen(false)}>Boxed (Gutter) <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortBoxedGuOpen(true)} onMouseLeave={() => setIsSubPortBoxedGuOpen(false)} style={{ display: isSubPortBoxedGuOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-boxed-gutter-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-gutter-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-gutter-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-gutter-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-gutter-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortBoxedTitleOpen(true)} onMouseLeave={() => setIsSubPortBoxedTitleOpen(false)}>Boxed (Titles) <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortBoxedTitleOpen(true)} onMouseLeave={() => setIsSubPortBoxedTitleOpen(false)} style={{ display: isSubPortBoxedTitleOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-boxed-titles-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-titles-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-titles-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-titles-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-boxed-titles-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortWideOpen(true)} onMouseLeave={() => setIsSubPortWideOpen(false)}>Wide <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortWideOpen(true)} onMouseLeave={() => setIsSubPortWideOpen(false)} style={{ display: isSubPortWideOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-wide-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortWideGuOpen(true)} onMouseLeave={() => setIsSubPortWideGuOpen(false)}>Wide (Gutter) <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortWideGuOpen(true)} onMouseLeave={() => setIsSubPortWideGuOpen(false)} style={{ display: isSubPortWideGuOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-wide-gutter-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-gutter-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-gutter-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-gutter-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-gutter-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortWideTitleOpen(true)} onMouseLeave={() => setIsSubPortWideTitleOpen(false)}>Wide (Titles) <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortWideTitleOpen(true)} onMouseLeave={() => setIsSubPortWideTitleOpen(false)} style={{ display: isSubPortWideTitleOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-wide-titles-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-titles-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-titles-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-titles-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-wide-titles-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortMasoOpen(true)} onMouseLeave={() => setIsSubPortMasoOpen(false)}>Masonry <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortMasoOpen(true)} onMouseLeave={() => setIsSubPortMasoOpen(false)} style={{ display: isSubPortMasoOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-masonry-2col" onClick={closeSubPortMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-masonry-3col" onClick={closeSubPortMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-masonry-4col" onClick={closeSubPortMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-masonry-5col" onClick={closeSubPortMenu}>5 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-masonry-blackhover" onClick={closeSubPortMenu}>Black Hovers</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubPortSingleOpen(true)} onMouseLeave={() => setIsSubPortSingleOpen(false)}>Single <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubPortSingleOpen(true)} onMouseLeave={() => setIsSubPortSingleOpen(false)} style={{ display: isSubPortSingleOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/portfolio-single-1" onClick={closeSubPortMenu}>Single 1</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-single-2" onClick={closeSubPortMenu}>Single 2</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-single-3" onClick={closeSubPortMenu}>Single 3</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-single-4" onClick={closeSubPortMenu}>Single 4</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-single-5" onClick={closeSubPortMenu}>Single 5</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="/portfolio-parallax" onClick={closeSubPortMenu}>Parallax</a>
                                        </li>

                                        <li>
                                            <a href="/portfolio-promo" onClick={closeSubPortMenu}>Promo</a>
                                        </li>

                                        <li>
                                            <a href="/portfolio-lazyload" onClick={closeSubPortMenu}>Lazyload</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className={isSubBlogOpen === true ? "js-opened" : ""}>
                                    <a
                                        href="#"
                                        className="mn-has-sub"
                                        onClick={blogToggle}
                                        onMouseEnter={() => setIsSubBlogOpen(true)}
                                        onMouseLeave={() => setIsSubBlogOpen(false)}>Blog &nbsp;<i className="fa fa-angle-down"></i></a>

                                    <ul className="mn-sub" onMouseEnter={() => setIsSubBlogOpen(true)}
                                        onMouseLeave={() => setIsSubBlogOpen(false)} style={{ display: isSubBlogOpen === true ? "block" : "none" }}>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubBlogClassicOpen(true)} onMouseLeave={() => setIsSubBlogClassicOpen(false)}>Classic <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubBlogClassicOpen(true)} onMouseLeave={() => setIsSubBlogClassicOpen(false)} style={{ display: isSubBlogClassicOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/blog-classic-sidebar-left" onClick={closeSubBlogMenu}>Sidebar Left</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-classic-sidebar-right" onClick={closeSubBlogMenu}>Sidebar Right</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-classic-fullwidth" onClick={closeSubBlogMenu}>Fullwidth</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubBlogColumnOpen(true)} onMouseLeave={() => setIsSubBlogColumnOpen(false)}>Columns <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubBlogColumnOpen(true)} onMouseLeave={() => setIsSubBlogColumnOpen(false)} style={{ display: isSubBlogColumnOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/blog-columns-2col" onClick={closeSubBlogMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-columns-3col" onClick={closeSubBlogMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-columns-4col" onClick={closeSubBlogMenu}>4 Columns</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubBlogMasoOpen(true)} onMouseLeave={() => setIsSubBlogMasoOpen(false)}>Masonry <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubBlogMasoOpen(true)} onMouseLeave={() => setIsSubBlogMasoOpen(false)} style={{ display: isSubBlogMasoOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/blog-masonry-2col" onClick={closeSubBlogMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-masonry-3col" onClick={closeSubBlogMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-masonry-4col" onClick={closeSubBlogMenu}>4 Columns</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li>
                                            <a href="#" className="mn-has-sub" onMouseEnter={() => setIsSubBlogSingleOpen(true)} onMouseLeave={() => setIsSubBlogSingleOpen(false)}>Single <i className="fa fa-angle-right right"></i></a>

                                            <ul className="mn-sub" onMouseEnter={() => setIsSubBlogSingleOpen(true)} onMouseLeave={() => setIsSubBlogSingleOpen(false)} style={{ display: isSubBlogSingleOpen === true ? "block" : "none" }}>
                                                <li>
                                                    <a href="/blog-single-sidebar-left" onClick={closeSubBlogMenu}>Sidebar Left</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-single-sidebar-right" onClick={closeSubBlogMenu}>Sidebar Right</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-single-fullwidth" onClick={closeSubBlogMenu}>Fullwidth</a>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>
                                </li>

                                <li className={isSubShopOpen === true ? "js-opened" : ""}>
                                    <a
                                        href="#"
                                        className="mn-has-sub"
                                        onClick={shopToggle}
                                        onMouseEnter={() => setIsSubShopOpen(true)}
                                        onMouseLeave={() => setIsSubShopOpen(false)}
                                    >Shop &nbsp;<i className="fa fa-angle-down"></i></a>

                                    {isSubShopOpen &&
                                        (
                                            <ul className="mn-sub to-left"
                                                // style={{ display: isSubShopOpen === true ? "block" : "none" }}
                                                onMouseEnter={() => setIsSubShopOpen(true)}
                                                onMouseLeave={() => setIsSubShopOpen(false)}
                                                style={{ display: "block" }}
                                            >

                                                <li>
                                                    <a href="/shop-columns-2col" onClick={closeSubShopMenu}>2 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/shop-columns-3col" onClick={closeSubShopMenu}>3 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/shop-columns-4col" onClick={closeSubShopMenu}>4 Columns</a>
                                                </li>
                                                <li>
                                                    <a href="/shop-single" onClick={closeSubShopMenu}>Single Product</a>
                                                </li>
                                                <li>
                                                    <a href="/shop-cart" onClick={closeSubShopMenu}>Shopping Cart</a>
                                                </li>

                                            </ul>
                                        )}


                                </li>

                                <li><a>&nbsp;</a></li>



                                <li>
                                    <a href="#" className="mn-has-sub"><i className="fa fa-search"></i> Search</a>

                                    <ul className="mn-sub">

                                        <li>
                                            <div className="mn-wrap">
                                                <form method="post" className="form">
                                                    <div className="search-wrap">
                                                        <input type="text" className="form-control search-field" placeholder="Search..." />
                                                        <button className="search-button animate" type="submit" title="Start Search">
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                                    </ul>

                                </li>



                                <li>
                                    <a href="#"><i className="fa fa-shopping-cart"></i> Cart(0)</a>
                                </li>



                                <li>
                                    <a href="#" className="mn-has-sub" onClick={languageToggle} onMouseEnter={() => setIsLanguageOpen(true)}
                                        onMouseLeave={() => setIsLanguageOpen(false)} style={{ display: isLanguageOpen === true ? "block" : "none" }}>Eng &nbsp;<i className="fa fa-angle-down"></i></a>

                                    <ul className="mn-sub" onMouseEnter={() => setIsLanguageOpen(true)} onMouseLeave={() => setIsLanguageOpen(false)}>

                                        <li><a href="" onClick={closeLanguageMenu}>English</a></li>
                                        <li><a href="" onClick={closeLanguageMenu}>France</a></li>
                                        <li><a href="" onClick={closeLanguageMenu}>Germany</a></li>

                                    </ul>

                                </li>


                            </ul>
                        </div>


                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default PagesNavBar;
