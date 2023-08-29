import React from "react";
import { Link } from "react-router-dom"
import { Fade } from "react-reveal";

const SliderDefault = () => {

    return (
        <React.Fragment>
            <div className="rs-slider main-home">
                <div className="slider-content slide1">
                    <div className="container">
                        <div className="content-part">
                            <Fade big>
                                <div className="sl-sub-title">
                                    Безопасность и квалификация
                                </div>
                            </Fade>
                            <Fade big>
                                <h1 className="sl-title">
                                    Республиканский Центр Обучения и
                                    Сертификации
                                </h1>
                            </Fade>
                            <Fade bottom>
                                <div className="sl-btn">
                                    <Link
                                        className="readon orange-btn main-home"
                                        to="/contact"
                                    >
                                         Подать заявку
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                {/* <FeatureStyle1 /> */}
            </div>
        </React.Fragment>
    );
};

export default SliderDefault;
