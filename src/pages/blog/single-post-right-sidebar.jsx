import React from "react";

import BlogDetails from "./BlogDetails";
import SinglePostSidebar from "./SinglePostSidebar";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Newsletter from "../../components/Common/Newsletter";
import ScrollToTop from "../../components/Common/ScrollTop";
import OffWrap from "../../components/Layout/Header/OffWrap";
import SiteBreadcrumb from "../../components/Common/Breadcumb";

// Image

import Logo from "../../assets/img/logo/dark-logo.png";
import footerLogo from "../../assets/img/logo/lite-logo.png";

// Breadcrumbs Background Image
import bannerbg from "../../assets/img/breadcrumbs/5.jpg";

const SinglePostRightSidebar = ({ news }) => {
    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu="blog"
                secondParentMenu="blogSingle"
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar="enable"
                TopBarClass="topbar-area home8-topbar"
                emailAddress="support@website.com"
                Location="374 William S Canning Blvd, MA 2721, USA "
            />
            <SiteBreadcrumb
                pageTitle={news.title}
                pageName="Новости"
                breadcrumbsImg={bannerbg}
            />

            {/* Blog Details Start */}
            <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 order-last">
                            <div className="widget-area">
                                <SinglePostSidebar />
                            </div>
                        </div>
                        <div className="col-lg-8 pr-50 md-pr-14">
                            <BlogDetails news={news} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Details End */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop scrollClassName="scrollup orange-color" />
            {/* scrolltop-end */}
        </React.Fragment>
    );
};

export default SinglePostRightSidebar;
