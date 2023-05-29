import React from 'react';

import OffWrap from '../../components/Layout/Header/OffWrap';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';

import ScrollToTop from '../../components/Common/ScrollTop';
import Newsletter from '../../components/Common/Newsletter';
import ContactMain from './ContactMain';

// Image

import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';


const Contact = () => {
    return (
        <React.Fragment>
            <OffWrap />
            {/* Header */}

            <Header
                parentMenu='contact'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBarClass="topbar-area home8-topbar"
            />
            {/* Header */}

            {/* ContactMain Section Start */}
            <ContactMain />
            {/* ContactMain Section End */}

            {/* Newsletter Section Start */}
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color event-bg mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />
            {/* Newsletter Section End */}

            {/* Footer */}
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            {/* Footer */}

            {/* SearchModal */}
            
            {/* SearchModal */}

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}
        </React.Fragment>

    );
}


export default Contact;