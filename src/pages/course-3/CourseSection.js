import React from 'react';
import CourseSingleFour from '../../components/Courses/CourseSingleFour';

// Courses Image
import image1 from '../../assets/img/courses/1.jpg';
import image2 from '../../assets/img/courses/2.JPG';
import image3 from '../../assets/img/courses/3.PNG';
import image4 from '../../assets/img/courses/4.JPG';
import image5 from '../../assets/img/courses/5.JPG';
import image6 from '../../assets/img/courses/6.JPG';

const Courses = () => {

    return (
        <React.Fragment>
            <div className="rs-popular-courses style3 orange-style pt-100 pb-100 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image1}
                                courseTitle="Пожарно-технический минимум"
                                courseLink="/course/course-single/1"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image2}
                                courseTitle="Безопасность и охрана труда"
                                courseLink="/course/course-single/2"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image3}
                                courseTitle="Санитарно эпидимиологическая защищенность"
                                courseLink="/course/course-single/3"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 md-mb-30">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image4}
                                courseTitle="Антитеррористическая защита"
                                courseLink="/course/course-single/4"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 sm-mb-30">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image5}
                                courseTitle="Первая доврачебная медицинская помощь"
                                courseLink="/course/course-single/5"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image6}
                                courseTitle="Согласительная комиссия"
                                courseLink="/course/course-single/6"
                            />
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://media.istockphoto.com/id/1304592270/vector/concept-struggle-against-corruption-illegal-payment-lot-cash-currency-bribe-in-hand-design.jpg?s=170667a&w=0&k=20&c=y_CR1YbLmUQz50Ayfe1vHob56FUEdHiKRpZuSm2HgAQ="}
                                courseTitle="Противодействие коррупции"
                                courseLink="/course/course-single/7"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Courses