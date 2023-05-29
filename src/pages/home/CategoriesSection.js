import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import CategoriesSingle from '../../components/Categories/CategoriesSingle';

// Categories Image
import image1 from '../../assets/img/categories/main-home/1.jpg';
import image2 from '../../assets/img/categories/main-home/2.JPG';
import image3 from '../../assets/img/categories/main-home/3.PNG';
import image4 from '../../assets/img/categories/main-home/4.JPG';
import image5 from '../../assets/img/categories/main-home/5.JPG';
import image6 from '../../assets/img/categories/main-home/6.JPG';

// Categories Icon
import icon1 from '../../assets/img/categories/main-home/icon/1.png';
import icon2 from '../../assets/img/categories/main-home/icon/2.png';
import icon3 from '../../assets/img/categories/main-home/icon/3.png';
import icon4 from '../../assets/img/categories/main-home/icon/4.png';
import icon5 from '../../assets/img/categories/main-home/icon/5.png';
import icon6 from '../../assets/img/categories/main-home/icon/6.png';

const Categories = () => {

    return (
        <div className="rs-categories main-home pt-90 pb-100 md-pt-60 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title3 text-center mb-44"
                    subtitleClass="sub-title"
                    subtitle="Наши курсы"
                    titleClass="title black-color"
                    title="Курсы для развития"
                />
                <div className="row mb-34">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image1}
                            title="Пожарно-технический минимум"
                            quantity="02 Courses"
                            iconImg={icon1}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image2}
                            title="Безопасность и охрана труда"
                            quantity="04 Courses"
                            iconImg={icon2}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image3}
                            title="Санитарно - эпидемиологический защишенность"
                            quantity="08 Courses"
                            iconImg={icon3}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image4}
                            title="Антитеррор"
                            quantity="03 Courses"
                            iconImg={icon4}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image5}
                            title="Парамедика"
                            quantity="12 Courses"
                            iconImg={icon5}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image6}
                            title="Согласительная комиссия"
                            quantity="05 Courses"
                            iconImg={icon6}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <Link className="readon orange-btn main-home" to="/course-3">Курсы</Link>
                </div>
            </div>
        </div>
    );
}

export default Categories;