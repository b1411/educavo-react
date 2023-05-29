import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

import Newsletter from '../../components/Common/Newsletter';
import HomeMain from './HomeMain';

import footerLogo from '../../assets/img/logo/lite-logo.png';

const HomePage = () =>  {
    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='главная'
            />
            <HomeMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            
        </React.Fragment>
    );
}

export default HomePage;
