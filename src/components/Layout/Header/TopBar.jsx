import React from "react";
import { Link } from "react-router-dom";

const TopHeader = (props) => {
    const { topBarClass, emailAddress, phoneNumber, Location } = props;

    return (
        <div
            className={
                topBarClass ? topBarClass : "topbar-area home8-topbar hidden-md"
            }
        >
            <div className="container">
                <div className="row y-middle">
                    <div className="col-md-8">
                        <ul className="topbar-contact">
                            {emailAddress ? (
                                <li>
                                    <i className="flaticon-phone"></i>
                                    <a href={"tel:" + emailAddress}>
                                        {emailAddress}
                                    </a>
                                </li>
                            ) : (
                                ""
                            )}
                            {phoneNumber ? (
                                <li>
                                    <i className="flaticon-call"></i>
                                    <a href={"tel:+" + phoneNumber}>
                                        {phoneNumber}
                                    </a>
                                </li>
                            ) : (
                                ""
                            )}
                            {Location ? (
                                <li>
                                    <i className="flaticon-location"></i>
                                    {Location}
                                </li>
                            ) : (
                                ""
                            )}
                            <li>
                                <a
                                    href="https://wa.me/77055533060"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{paddingRight: "5px"}}
                                >
                                    <i className="fa fa-whatsapp"></i>
                                </a>
                                <a
                                    href="https://instagram.com/rcos.kz?igshid=Y2I2MzMwZWM3ZA=="
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-end">
                        <ul className="topbar-right">
                            <li className="btn-part">
                                <Link to="/contact" className="apply-btn">
                                    Записаться на курсы
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
