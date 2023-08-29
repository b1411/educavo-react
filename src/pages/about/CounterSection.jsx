import React from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import { Slide } from "react-reveal";

function Stat({ iconClass, percent, name }) {
    return (
        <>
            <div className="stat__item">
                <i className={iconClass}></i>
                <div className="stat__text">
                    <p>{percent} %</p>
                    <p>{name}</p>
                </div>
            </div>
        </>
    );
}

const AboutCounter = () => {
    const statData = [
        {
            iconClass: "fa fa-industry",
            percent: 95,
            name: "Промышленность",
        },
        {
            iconClass: "fa fa-cash-register",
            percent: 97,
            name: "Рынки",
        },
        {
            iconClass: "fa fa-university",
            percent: 98,
            name: "Банки",
        },
        {
            iconClass: "fa fa-utensils",
            percent: 97,
            name: "Рестораны",
        },
        {
            iconClass: "fa fa-gas-pump",
            percent: 93,
            name: "АЭС",
        },
        {
            iconClass: "fa fa-school",
            percent: 98,
            name: "Университеты",
        },
    ];

    return (
        <>
            <div id="rs-about" className="rs-about style3 pt-110 md-pt-70">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-4 lg-pr-0 md-mb-30">
                            <div className="about-intro md-pr-16">
                                <Slide left cascade>
                                    <SectionTitle
                                        sectionClass="sec-title"
                                        subtitleClass="sub-title orange"
                                        subtitle="О нас"
                                        titleClass="title mb-20"
                                        title="Мы предлагаем лучшие курсы"
                                        descClass="desc big"
                                        description="Мы предлагаем лучшие курсы для развития ваших навыков. Вы можете выбрать любой курс, который вам нравится."
                                    />
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-8 pl-82 md-pl-14" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 200px))",
                            gap: "10px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {statData.map((el, key) => {
                                return <Stat {...el} key={key} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCounter;
