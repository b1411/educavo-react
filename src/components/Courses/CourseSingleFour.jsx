import React from "react";
import { Link } from "react-router-dom";

const CourseSingleFour = (props) => {
    const { courseClass, courseLink, courseImg, courseTitle, btnText } = props;

    return (
        <div className={courseClass ? courseClass : "courses-item"}>
            <div className="img-part">
                <img src={courseImg} alt={courseTitle} />
            </div>
            <div className="content-part">
                {/* <span>
                    <Link className="categories" to={catLink ? catLink : 'course-categories'}>{courseCategory ? courseCategory : 'Web Development'}</Link>
                </span> */}
                {/* <ul className="meta-part">
                    <li className="user">
                        <i className={metaIcon ? metaIcon : 'fa fa-user'}></i> {studentQuantity ? studentQuantity : '245'}
                    </li>
                    <li>
                        <span>
                            {coursePrice ? coursePrice : '$55.00'}
                        </span>
                    </li>
                </ul> */}
                <h3 className="title">
                    <Link to={courseLink}>
                        {courseTitle
                            ? courseTitle
                            : "Introduction to Quantitativ and Qualitative."}
                    </Link>
                </h3>
                <div className="bottom-part">
                    <div className="readon orange-btn">
                        <Link
                            style={{
                                color: "#111111",
                            }}
                            to={courseLink}
                        >
                            {btnText ? btnText : "Пройти обучение"}{" "}
                            <i className="flaticon-next"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSingleFour;
