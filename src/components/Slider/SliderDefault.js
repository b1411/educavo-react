import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import FeatureStyle1 from '../Feature/FeatureStyle1';

const SliderDefault = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-slider main-home">
                <Slider {...sliderSettings}>
                    <div className="slider-content slide1">
                        <div className="container">
                            <div className="content-part">
                                <div className="sl-sub-title">Безопасность и квалификация</div>
                                <h1 className="sl-title">Республиканский центр обучения и сертификации</h1>
                                <div className="sl-btn">
                                    <Link className="readon orange-btn main-home" to="/course-3">Все курсы</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-content slide2">
                        <div className="container">
                            <div className="content-part">
                                <div className="sl-sub-title">Квалификация и безопасность вместе</div>
                                <h1 className="sl-title">Профессиональное развитие с РЦОС</h1>
                                <div className="sl-btn">
                                    <Link className="readon orange-btn main-home" to="/cours-3">Все курсы</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <FeatureStyle1 />
            </div>
        </React.Fragment>
    );
}

export default SliderDefault;