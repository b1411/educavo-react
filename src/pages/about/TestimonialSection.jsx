import React from "react";
import Slider from "react-slick";
import SectionTitle from "../../components/Common/SectionTitle";
import SingleTestimonialThree from "../../components/Testimonial/SingleTestimonialThree";

// Testimonial Avatars
import author1 from "../../assets/img/testimonial/style3/1.png";
import author2 from "../../assets/img/testimonial/style3/2.png";
import author3 from "../../assets/img/testimonial/style3/3.png";
import { Fade } from "react-reveal";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <>
            <style>{`.dsa::before {color: #21a7d0}`}</style>
            <div
                className={className + " dsa"}
                style={{ ...style, color: "#21a7d0", display: "block" }}
                onClick={onClick}
            ></div>
        </>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <>
            <style>{`.dsa::before {color: #21a7d0}`}</style>
            <div
                className={className + " dsa"}
                style={{ ...style, color: "#21a7d0", display: "block" }}
                onClick={onClick}
            ></div>
        </>
    );
}

const Testimonial = () => {
    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <React.Fragment>
            <Fade>
                <div className="rs-testimonial style3 orange-color pt-102 md-pt-70 pb-60">
                    <div className="container">
                        <SectionTitle
                            sectionClass="sec-title mb-60 text-center md-mb-30"
                            subtitleClass="sub-title orange"
                            subtitle="Отзывы"
                            titleClass="title mb-0"
                            title="Что говорят наши клиенты"
                        />
                        <div className="row">
                            <Slider {...testimonialSettings}>
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author1}
                                    Title="Бондаренко Андрей Сергеевич"
                                    Description="Выражаем благодарность коллективу РЦОС за высокий уровень проведения работ по охране труда в нашей компании.
                                Все договорные обязательства были выполнены в оговоренные строки, в полном обьеме и на профессиональном уровне. желаем Вашим сотрудникам успехов, а Вашему центру дальнейшего процветания."
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author2}
                                    Title="Баринова Елена"
                                    Description="
                                Организация обучения на высоком уровне. Доступный и качественный материал. Удобно  
                                пользоваться при дистанционном обучении."
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author3}
                                    Title="Кадыркожаев Досжан"
                                    Description="Оқыту тақырыбы бойынша берілген материалдарының, презентациялардың, заңнамалық құжаттамалардың және стандартты құжаттардың жинақтары үшін рахмет! ‘Республикалық білітілікті арттыру және сертификациялау’ орталығының барлық мамандарына зор денсаулық, алдағы уақытта кәсіби табыс, сәттілік тілеймін!
                                "
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author3}
                                    Title="Елена Соколова"
                                    Description="Выражаем сердечную благодарность команде РЦОС за их неоценимый вклад в области охраны труда. Их профессионализм и добросовестность являются источником вдохновения для нашей компании. Желаем дальнейшего успеха и превосходства в их благородной миссии!"
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author3}
                                    Title="Анна Михайловна"
                                    Description="РЦОС заслуживает самых высоких похвал за их участие в охране труда в нашей компании. Их преданность, профессионализм и инновационный подход создают надежную основу для безопасности и благополучия. Огромное спасибо всей команде за их ценный вклад!"
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author3}
                                    Description="Организация обучения от РЦОС оказалась высокого качества и профессионализма. Предоставленный материал был структурирован и понятен. Хочу поблагодарить команду РЦОС за их серьезный и ответственный подход, а также за предоставленные знания и навыки."
                                    Title="Ерлан Бекжанов"
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author3}
                                    Title="Айгерим Канатова"
                                    Description="РЦОС-ға сақтау орталығындағы оқу организациясы бізге қалайсыздықты, сапасы жоғары материалдарды талап ететін жоғары деңгейде атқарғанына қалайсыздықты көрсетті. РЦОС ұстаздарына профессионализмі үшін қолдауыңыз үшін рахмет!"
                                />
                                <SingleTestimonialThree
                                    itemClass="testi-item"
                                    authorImage={author3}
                                    Title="Магжан Сабыржанов"
                                    Description="Команда РЦОС продемонстрировала высокий уровень компетенции и эффективность в проведении работ по охране труда. Все договоренности были выполнены вовремя и с соответствующим профессионализмом. Благодарю команду РЦОС за их серьезное отношение к вопросам безопасности."
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </Fade>
        </React.Fragment>
    );
};

export default Testimonial;
