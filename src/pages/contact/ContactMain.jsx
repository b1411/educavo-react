import React from "react";
import { Fade, Slide } from "react-reveal";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import SectionTitle from "../../components/Common/SectionTitle";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";

import bannerbg from "../../assets/img/breadcrumbs/inner13.jpg";

const ContactMain = () => {
    return (
        <React.Fragment>
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Контакты"
                pageName="Контакты"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style1 event-bg pt-110 md-pt-80 pb-100 md-pb-80">
                <div className="container pb-66 md-pb-46">
                    <Fade top cascade>
                        <div className="row gutter-35">
                            <div className="col-md-4">
                                <ContactInfo
                                    boxClass="sm-mb-30"
                                    title="Адрес"
                                    iconClass="flaticon-location"
                                    address="г. Алматы, улица Жумалиева, 86, БЦ Grand Asia, блок Б"
                                />
                            </div>
                            <div className="col-md-4">
                                <ContactInfo
                                    boxClass="sm-mb-30"
                                    title="Электронная почта"
                                    iconClass="flaticon-email"
                                    email="info@rcos.kz"
                                />
                            </div>
                            <div className="col-md-4">
                                <ContactInfo
                                    boxClass=""
                                    title="Номер телефона"
                                    iconClass="flaticon-phone"
                                    phone={[
                                        "+7 701 353 36 66",
                                        "+7 700 350 83 13",
                                        "+7 705 553 30 60",
                                    ]}
                                />
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-30">
                            <Slide left>
                                <div className="map-canvas">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.9543826454865!2d76.91250992754809!3d43.25333387775002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883694c11c0ea0d%3A0x368b21329f571eef!2sZhumaliev%20St%2086%2C%20Almaty%20050026!5e0!3m2!1sen!2skz!4v1684987235285!5m2!1sen!2skz"
                                        width={400}
                                        height={300}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        title="map"
                                    ></iframe>
                                </div>
                            </Slide>
                        </div>
                        <Slide right>
                            <div className="col-lg-6 pl-60 md-pl-14">
                                <div className="contact-widget">
                                    <SectionTitle
                                        sectionClass="sec-title3 mb-36"
                                        titleClass="title black-color mb-14"
                                        title="Будьте на связи"
                                        descClass="new-desc"
                                        description="Хотите узнать больше о наших курсах? Оставьте нам сообщение и мы свяжемся с вами в ближайшее время."
                                    />
                                    {/* Contact Form */}
                                    <ContactForm
                                        submitBtnClass="btn-send"
                                        btnText="Submit"
                                    />
                                    {/* Contact Form */}
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
            {/* Contact Section End */}
        </React.Fragment>
    );
};

export default ContactMain;
