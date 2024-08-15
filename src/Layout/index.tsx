import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutUs from "../Common/MainDemo/AboutUs";
import Services from "../Common/MainDemo/Services";
import Cta from "../Common/MainDemo/Cta";
import WorkProgress from "../Common/MainDemo/WorkProgress";
import LatestWork from "../Common/MainDemo/LatestWork";
import WhyChoose from "../Common/MainDemo/WhyChoose";
import Testimonials from "../Common/MainDemo/Testimonials";
import BestSeller from "../Common/MainDemo/BestSeller";
import AwsomeTemplete from "../Common/MainDemo/AwsomeTemplete";
import Cta2 from "../Common/MainDemo/Cta2";
import LatestNews from "../Common/MainDemo/LatestNews";
import Newsletter from "../Common/MainDemo/Newsletter";
import NavBar2 from "./NavBar2";
import PagesNavBar from "./PagesNavBar";
import Topbar from "../pages/OnePage/Topbar";
import Topbar2 from "../pages/OnePage/Topbar2";

interface LayoutProps {
  children: ReactNode;
  isMultiPage: boolean;
  isNavBarLight: boolean;
  isPages: boolean;
  isWithoutLayout: boolean;
  isNoFooter: boolean;
  isTopbar: boolean;
  isTopbar2: boolean;
}

const Layout = ({
  children,
  isMultiPage,
  isNavBarLight,
  isPages,
  isNoFooter,
  isTopbar,
  isTopbar2,
  isWithoutLayout,
}: LayoutProps) => {
  return (
    <React.Fragment>
      <div className="page" id="top">
        {isMultiPage ? (
          <>
            <NavBar isNavBarLight={isNavBarLight} />
            <main id="main">
              {children}
              <AboutUs />
              <Services />
              <Cta />
              <WorkProgress />
              <LatestWork />
              <WhyChoose />
              <Testimonials />
              <BestSeller />
              <AwsomeTemplete />
              <Cta2 />
              <LatestNews />
              <Newsletter />
            </main>
            <Footer />
          </>
        ) : isWithoutLayout ? (
          <>
            <main id="main">{children}</main>
            <Footer />
          </>
        ) : isPages ? (
          <>
            <PagesNavBar isNavBarLight={isNavBarLight} />
            <main id="main">{children}</main>
            <Footer />
          </>
        ) : isNoFooter ? (
          <>{children}</>
        ) : isTopbar ? (
          <>
            <Topbar />
            <main id="main">{children}</main>
            <Footer />
          </>
        ) : isTopbar2 ? (
          <>
            <Topbar2 />
            <main id="main">{children}</main>
            <Footer />
          </>
        ) : (
          <>
            <NavBar2 />
            <main id="main">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Layout;
