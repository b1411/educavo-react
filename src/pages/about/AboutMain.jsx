import React from "react";
// import Blog from './BlogSection';
import AboutVideo from "./VideoSection";
import AboutCounter from "./CounterSection";
import Testimonial from "./TestimonialSection";
import ScrollToTop from "../../components/Common/ScrollTop";
import ThankYouLetterSection from "../../components/ThankYouLetter/ThankYouLetterSection";

const AboutMain = () => {
  return (
    <React.Fragment>
      {/* AboutCounter Start */}
      <AboutCounter />
      {/* AboutCounter End */}
      {/* AboutVideo Start */}
      <AboutVideo />
      {/* AboutVideo End */}
      {/* Team Section Start */}
      {/* <Team /> */}
      {/* Team Section End */}

      <ThankYouLetterSection />

      {/* Testimonial Section Start */}
      <Testimonial />
      {/* Testimonial Section End */}
      {/* Blog Section Start */}
      {/* <Blog /> */}
      {/* Blog Section End */}
      {/* scrolltop-start */}
      <ScrollToTop scrollClassName="scrollup orange-color" />
      {/* scrolltop-end */}
    </React.Fragment>
  );
};

export default AboutMain;
