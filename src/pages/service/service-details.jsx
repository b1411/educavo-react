import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../assets/img/breadcrumbs/2.jpg';


const ServiceDetails = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                breadcrumbsImg={breadcrumbsImg}
                pageTitle='Software Development'
                pageCategory='Services'
                pageName='Software Development'
            />
            {/* breadcrumb-area-end */}

            <ServiceDetailsContent />
            
            <Footer footerClass="rs-footer" />

            
        </React.Fragment>
    );
}

export default ServiceDetails;