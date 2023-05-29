import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../assets/img/breadcrumbs/2.jpg';


const WebDevelopment = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                breadcrumbsImg={breadcrumbsImg}
                pageTitle='Web Development'
                pageCategory='Services'
                pageName='Web Development'
            />
            {/* breadcrumb-area-end */}
            <ServiceDetailsContent />
            <Footer footerClass="rs-footer" />
            
        </React.Fragment>
    );
}

export default WebDevelopment;