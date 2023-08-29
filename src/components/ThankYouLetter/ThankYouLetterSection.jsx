import Slider from "react-slick";
import SectionTitle from "../Common/SectionTitle";
import { Fade } from "react-reveal";

import letter1 from "../../assets/img/testimonial/main-home/letter1.webp";
import letter2 from "../../assets/img/testimonial/main-home/letter2.webp";
import letter3 from "../../assets/img/testimonial/main-home/letter3.webp";
import letter4 from "../../assets/img/testimonial/main-home/letter4.webp";
import letter5 from "../../assets/img/testimonial/main-home/letter5.webp";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <>
            <style>{`.dsa::before {color: #21a7d0}`}</style>
            <div
                className={className + " dsa"}
                style={{ ...style, color: "#21a7d0", display: "block", right: "20%" }}
                onClick={onClick}
            ></div>
        </>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <>
            <style>{`.dsa::before {color: #21a7d0}`}</style>
            <div
                className={className + " dsa"}
                style={{ ...style, color: "#21a7d0", display: "block", left: "20%"}}
                onClick={onClick}
            ></div>
        </>
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: true,
            },
        },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
            <Fade>
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
                                <div>
                                    <SingleLetter src={letter1} />
                                </div>
                                <div>
                                    <SingleLetter src={letter2} />
                                </div>
                                <div>
                                    <SingleLetter src={letter3} />
                                </div>
                                <div>
                                    <SingleLetter src={letter4} />
                                </div>
                                <div>
                                    <SingleLetter src={letter5} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
}

export default ThankYouLetterSection;
