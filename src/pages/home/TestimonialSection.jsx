import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';


import quote from '../../assets/img/testimonial/main-home/test-2.png';
import author2 from '../../assets/img/testimonial/style5/2.png';
import author3 from '../../assets/img/testimonial/style5/3.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 600,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-testimonial main-home pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title3 mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="Отзывы"
                        titleClass="title white-color"
                        title="Что о нас говорят?"
                        effectClass="heading-line"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            Title="Бондаренко Андрей Сергеевич"
                            Description="
                            Выражаем благодарность коллективу РЦОС за высокий уровень проведения работ по охране труда в нашей компании.
                            Все договорные обязательства были выполнены в оговоренные строки, в полном обьеме и на профессиональном уровне. желаем Вашим сотрудникам успехов, а Вашему центру дальнейшего процветания."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Баринова Елена Владимировна"
                            Description="
                            Организация обучения на высоком уровне. Доступный и качественный материал. Удобно  
                            пользоваться при дистанционном обучении."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Кадыркожаев Досжан Сартбаевич"
                            Description="Оқыту тақырыбы бойынша берілген материалдарының, презентациялардың, заңнамалық құжаттамалардың және стандартты құжаттардың жинақтары үшін рахмет! ‘Республикалық білітілікті арттыру және сертификациялау’ орталығының барлық мамандарына зор денсаулық, алдағы уақытта кәсіби табыс, сәттілік тілеймін!
                            "
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial