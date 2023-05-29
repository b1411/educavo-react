import React from 'react';
import CourseSingleFour from '../../components/Courses/CourseSingleFour';

// Courses Image
// import image1 from '../../assets/img/courses/4.jpg';
// import image2 from '../../assets/img/courses/5.jpg';
// import image3 from '../../assets/img/courses/6.jpg';
// import image4 from '../../assets/img/courses/7.jpg';
// import image5 from '../../assets/img/courses/8.jpg';
// import image6 from '../../assets/img/courses/9.jpg';

const Courses = () => {

    return (
        <React.Fragment>
            <div className="rs-popular-courses style3 orange-style pt-100 pb-100 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://media.istockphoto.com/id/1324045496/vector/two-hands-holding-fire-extinguisher-and-putting-out-fire.jpg?s=612x612&w=0&k=20&c=vr6-RfXsI53Xo7vOwa6dHaz8-u-IJJZ3tev5NL3Pu3A="}
                                courseTitle="Пожарно-технический минимум"
                                courseLink="/course/course-single/1"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1623574839/1623574838.jpg"}
                                courseTitle="Безопасность и охрана труда"
                                courseLink="/course/course-single/2"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://st4.depositphotos.com/3900811/26779/v/450/depositphotos_267797662-stock-illustration-epidemiology-vector-illustration-tiny-bacteria.jpg"}
                                courseTitle="Санитарно эпидимиологическая защищенность"
                                courseLink="/course/course-single/3"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 md-mb-30">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://images.creativemarket.com/0.1.0/ps/6371152/1820/1213/m1/fpnw/wm1/iydtshdmwr0by361k1owzqclcjarc1w67qoqd5byvarmmredkv0zp2khyiyjep7d-.jpg?1557520890&s=4178b97109f2bd6d3d416e30a251cd59"}
                                courseTitle="Антитеррористическая защита"
                                courseLink="/course/course-single/4"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 sm-mb-30">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://static.vecteezy.com/system/resources/previews/002/026/975/original/first-aid-kit-free-vector.jpg"}
                                courseTitle="Первая доврачебная медицинская помощь"
                                courseLink="/course/course-single/5"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://media.istockphoto.com/id/1316044344/vector/husband-and-wife-divorce-marriage-and-social-issues-concept-vector-illustration-flat-cartoon.jpg?s=612x612&w=0&k=20&c=6pdSzw4KUQUfdOr0P1ehc-Ygzg7sTqwdfWOPQ5_KjF8="}
                                courseTitle="Согласительная комиссия"
                                courseLink="/course/course-single/6"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={"https://media.istockphoto.com/id/1304592270/vector/concept-struggle-against-corruption-illegal-payment-lot-cash-currency-bribe-in-hand-design.jpg?s=170667a&w=0&k=20&c=y_CR1YbLmUQz50Ayfe1vHob56FUEdHiKRpZuSm2HgAQ="}
                                courseTitle="Противодействие коррупции"
                                courseLink="/course/course-single/7"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Courses