import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";
import { news } from "../../../sample-data/news";

import footerLogo1 from "../../../assets/img/logo/logo.png";

const Footer = (props) => {
    const { footerLogo, footerClass, footerTopClass } = props;
    return (
        <footer className={footerClass ? footerClass : "rs-footer"}>
            <div className={`footer-top ${footerTopClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <div className="footer-logo mb-30">
                                <Link to="/" as="/">
                                    <img
                                        src={
                                            footerLogo
                                                ? footerLogo
                                                : footerLogo1
                                        }
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                            <div className="textwidget pr-60 md-pr-14">
                                <p>
                                    Наш сайт предлагает уникальные программы
                                    повышения квалификации, помогая вам
                                    развивать свои навыки и достигать новых
                                    профессиональных высот.
                                </p>
                            </div>
                            <ul className="footer_social">
                                <li>
                                    <a
                                        href="https://instagram.com/rcos.kz?igshid=Y2I2MzMwZWM3ZA=="
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://wa.me/77055533060"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h3 className="widget-title">Адрес</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">
                                        г. Алматы, улица Жумалиева, 86, БЦ Grand
                                        Asia, блок Б
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <a
                                            class="phone"
                                            href="tel:+77013533666"
                                        >
                                            +7 701 353 36 66
                                        </a>
                                        <a
                                            class="phone"
                                            href="tel:+77003508313"
                                        >
                                            +7 700 350 83 13
                                        </a>
                                        <a
                                            class="phone"
                                            href="tel:+77055533060"
                                        >
                                            +7 705 553 30 60
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:info@rcos.kz">
                                            info@rcos.kz
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-14 footer-widget md-mb-50">
                            <h3 className="widget-title">Страницы</h3>
                            <ul className="site-map">
                                <li>
                                    <Link to="/course">Курсы</Link>
                                </li>
                                <li>
                                    <Link to="/course-2">Новости</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Связаться с нами</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <h3 className="widget-title">Недавние новости</h3>
                            {news
                                .slice(news.length - 3, news.length - 1)
                                .map((item, index) => (
                                    <div className="recent-post mb-20">
                                        <div className="post-img">
                                            <img
                                                src={item.imageLink}
                                                alt="blog"
                                            />
                                        </div>
                                        <div className="post-item">
                                            <div className="post-desc">
                                                <Link
                                                    to={
                                                        "/blog/" +
                                                        item.transliterated
                                                    }
                                                >
                                                    {item.title}
                                                </Link>
                                            </div>
                                            <span className="post-date">
                                                <i className="fa fa-calendar-check-o"></i>
                                                {item.date.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;
