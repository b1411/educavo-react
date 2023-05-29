import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceOneMain from '../../components/ServiceOne/ServiceOneMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';


const Services = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='services'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Services"
                    titleClass="page-title"
                    pageName="Services"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* ServiceOneMain */}
                <ServiceOneMain />
                {/* ServiceOneMain */}
            </div>
            <Footer />
            
        </React.Fragment>

    );
}


export default Services;