import React from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import CategoriesSingle from "../../components/Categories/CategoriesSingle";
import { Fade } from "react-reveal";

// Categories Image
import image1 from "../../assets/img/categories/main-home/1.jpg";
import image2 from "../../assets/img/categories/main-home/2.jpg";
import image3 from "../../assets/img/categories/main-home/3.PNG";
import image4 from "../../assets/img/categories/main-home/4.jpg";
import image5 from "../../assets/img/categories/main-home/5.jpg";
import image6 from "../../assets/img/categories/main-home/6.jpg";
// Categories Icon
import icon1 from "../../assets/img/categories/main-home/icon/1.png";
import icon2 from "../../assets/img/categories/main-home/icon/2.png";
import icon3 from "../../assets/img/categories/main-home/icon/3.png";
import icon4 from "../../assets/img/categories/main-home/icon/4.png";
import icon5 from "../../assets/img/categories/main-home/icon/5.png";
import icon6 from "../../assets/img/categories/main-home/icon/6.png";

const Categories = () => {
    return (
        <div className="rs-categories main-home pt-30 pb-40 md-pt-60 md-pb-40">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title3 text-center mb-44"
                    subtitleClass="sub-title"
                    subtitle="Наши курсы"
                    titleClass="title black-color"
                    title="Курсы для развития"
                />
                <Fade left cascade>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image1}
                            title="Пожарно-технический минимум"
                            quantity="02 Courses"
                            iconImg={icon1}
                            catLink="/course/course-single/1"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image2}
                            title="Безопасность и охрана труда"
                            quantity="04 Courses"
                            iconImg={icon2}
                            catLink="/course/course-single/2"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image6}
                            title="Согласительная комиссия"
                            quantity="05 Courses"
                            iconImg={icon6}
                            catLink="/course/course-single/6"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image3}
                            title="Санитарно - эпидемиологический защищенность"
                            quantity="08 Courses"
                            iconImg={icon3}
                            catLink="/course/course-single/3"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image4}
                            title="Антитеррор"
                            quantity="03 Courses"
                            iconImg={icon4}
                            catLink="/course/course-single/4"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image5}
                            title="Парамедика"
                            quantity="12 Courses"
                            iconImg={icon5}
                            catLink="/course/course-single/5"
                        />
                    </div>
                </div>
                </Fade>
                {/* <div className="text-center">
                    <Link
                        className="readon orange-btn main-home"
                        to="/course-3"
                    >
                        Курсы
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Categories;
