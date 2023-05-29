import React from "react";
import Header from "../../../components/Layout/Header/Header";
import Footer from "../../../components/Layout/Footer/Footer";
import OffWrap from "../../../components/Layout/Header/OffWrap";
import Newsletter from "../../../components/Common/Newsletter";
import SiteBreadcrumb from "../../../components/Common/Breadcumb";
import CourseDetailsMain from "./CourseDetailsMain";
import courseData from "./data/courseData";
import { useRootContext } from "../../../components/Context/context";

// Image
import Logo from "../../../assets/img/logo/dark-logo.png";
import footerLogo from "../../../assets/img/logo/lite-logo.png";

import bannerbg from "../../../assets/img/breadcrumbs/2.jpg";

const CourseSingle = ({ match }) => {
  const id = match.params.id;
  const { setCourseId } = useRootContext();
  setCourseId(() => id);

  return (
    <React.Fragment>
      <OffWrap />
      <Header
        parentMenu="course"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
        CanvasLogo={Logo}
        mobileNormalLogo={Logo}
        CanvasClass="right_menu_togle hidden-md"
        headerClass="full-width-header header-style1 home8-style4"
        TopBar="enable"
        TopBarClass="topbar-area home8-topbar"
      />

      {/* breadcrumb-area-start */}
      <SiteBreadcrumb
        pageTitle={courseData[id].title}
        pageName="Детали курса"
        breadcrumbsImg={bannerbg}
      />
      {/* breadcrumb-area-start */}

      {/* Course Details Main */}
      <CourseDetailsMain />
      {/* Course Details Main */}

      <Newsletter
        sectionClass="rs-newsletter style1 gray-bg orange-color mb--90 sm-mb-0 sm-pb-70"
        titleClass="title mb-0 white-color"
      />

      <Footer
        footerClass="rs-footer home9-style main-home"
        footerLogo={footerLogo}
      />
      
    </React.Fragment>
  );
};

export default CourseSingle;
