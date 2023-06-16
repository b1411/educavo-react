import Slider from "react-slick";
import SectionTitle from "../Common/SectionTitle";

import letter1 from "../../assets/img/testimonial/main-home/letter1.webp";
import letter2 from "../../assets/img/testimonial/main-home/letter2.webp";
import letter3 from "../../assets/img/testimonial/main-home/letter3.webp";
import letter4 from "../../assets/img/testimonial/main-home/letter4.webp";
import letter5 from "../../assets/img/testimonial/main-home/letter5.webp";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: false,
        arrows: true,
      },
    },
  ],
};

function SingleLetter(props) {
  return (
    <div className="thank-you-letter-item">
      <img
        src={props.src}
        alt="author"
        onDoubleClick={() => {
          window.open(props.src);
        }}
      />
    </div>
  );
}

function ThankYouLetterSection() {
  return (
    <>
      <div className="rs-testimonial style3 orange-color pt-102 md-pt-70 pb-60">
        <div className="container">
          <SectionTitle
            sectionClass="sec-title mb-60 text-center md-mb-30"
            subtitleClass="sub-title orange"
            subtitle="Благодарственные письма"
            titleClass="title mb-0"
            title="Искренние слова признательности"
          />
          <div className="row">
            <Slider {...settings}>
              <SingleLetter src={letter1} />
              <SingleLetter src={letter2} />
              <SingleLetter src={letter3} />
              <SingleLetter src={letter4} />
              <SingleLetter src={letter5} />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYouLetterSection;
