
import React from 'react';

import BlogMain from './BlogMain';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SiteBreadcrumb from '../../components/Common/Breadcumb';

// Image

import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

import bannerbg from '../../assets/img/breadcrumbs/2.jpg';

const Blog = () => {
    return (
        <React.Fragment>

            <OffWrap />
            <Header
                parentMenu='blog'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='Жумалиева, 86, Алматы, Казахстан'
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Новости"
                pageName="Новости"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            {/* Blog Main */}
            <BlogMain />
            {/* Blog Main End */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}
        </React.Fragment>
    );
}


export default Blog;

