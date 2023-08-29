import React from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import { Fade } from "react-reveal";

const AboutVideo = () => {
    return (
        <div className="rs-about-video pt-110 pb-110 md-pt-70 md-pb-70">
            <div className="container">
                <Fade>
                    <SectionTitle
                        sectionClass="sec-title mb-60 text-center md-mb-30"
                        subtitleClass="sub-title orange"
                        subtitle="Почему именно мы?"
                        titleClass="title mb-0"
                        title="Почему именно мы – ваше лучшее решение"
                    ></SectionTitle>
                </Fade>
                <div className="row align-space-between">
                    <Fade left>
                        <div className="col-lg-6 col-md-12">
                            <h3>
                                Выбирайте лидера в области повышения
                                квалификации и сертификации
                            </h3>
                            <p>
                                Мы предлагаем широкий спектр курсов, включая
                                пожарно-технический минимум, безопасность и
                                защиту труда, санитарно-эпидемиологическую
                                защищенность, антитеррористическую защиту,
                                первую доврачебную медицинскую помощь и
                                согласительную комиссию.
                            </p>
                            <p>
                                Наша особенность заключается в предоставлении
                                онлайн-обучения и онлайн-сертификации, делая
                                процесс обучения максимально удобным и доступным
                                для вас. Вы можете изучать материалы, проходить
                                тестирование и получать сертификаты прямо из
                                комфорта вашего дома или офиса.
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-6 col-md-12">
                            <img
                                alt="whyus"
                                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwY291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            ></img>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AboutVideo;
