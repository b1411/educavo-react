import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonialThree from '../../components/Testimonial/SingleTestimonialThree';


// Testimonial Avatars
import author1 from '../../assets/img/testimonial/style3/1.png';
import author2 from '../../assets/img/testimonial/style3/2.png';
import author3 from '../../assets/img/testimonial/style3/3.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
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
                                Title="Баринова Елена Владимировна"
                                Description="
                                Организация обучения на высоком уровне. Доступный и качественный материал. Удобно  
                                пользоваться при дистанционном обучении."
                            />
                            <SingleTestimonialThree
                                itemClass="testi-item"
                                authorImage={author3}
                                Title="Кадыркожаев Досжан Сартбаевич"
                                Description="Оқыту тақырыбы бойынша берілген материалдарының, презентациялардың, заңнамалық құжаттамалардың және стандартты құжаттардың жинақтары үшін рахмет! ‘Республикалық білітілікті арттыру және сертификациялау’ орталығының барлық мамандарына зор денсаулық, алдағы уақытта кәсіби табыс, сәттілік тілеймін!
                                "
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial