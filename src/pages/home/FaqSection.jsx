import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import image from "../../assets/img/faq/2.jpeg"

const FaqSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="rs-faq-part style1 orange-style pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 padding-0">
            <div className="main-part">
              <div className="title mb-40 md-mb-14">
                <h2 className="text-part">Часто задаваемые вопросы</h2>
              </div>
              <div className="faq-content">
                <Accordion className="accordion-style1" preExpanded={"a"}>
                  <AccordionItem className="accordion-item" uuid="a">
                    <AccordionItemHeading className="card-header">
                      <AccordionItemButton className="card-link">
                        Какие программы обучения вы предлагаете?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body">
                      Мы предлагаем программы обучения по следующим
                      направлениям: <br />
                      <ul>
                        <li>Пожарно-технический минимум</li>
                        <li>Безопасность и охрана труда</li>
                        <li>Санитарно-эпидемиологическая защищенность</li>
                        <li>Антитеррористическая защита</li>
                        <li>Парамедика</li>
                        <li>Согласительная комиссия</li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem className="accordion-item" uuid="b">
                    <AccordionItemHeading className="card-header">
                      <AccordionItemButton className="card-link">
                        Каковы преимущества обучения на вашем сайте по сравнению
                        с другими?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body">
                      Мы предлагаем разнообразные программы обучения,
                      охватывающие различные области и сферы деятельности.
                      Обучение доступно онлайн с интерактивными материалами
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem className="accordion-item" uuid="c">
                    <AccordionItemHeading className="card-header">
                      <AccordionItemButton className="card-link">
                        Каковы квалификации и опыт преподавателей?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body">
                      Наши преподаватели обладают высокой квалификацией и
                      богатым практическим опытом в своей области
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem className="accordion-item" uuid="d">
                    <AccordionItemHeading className="card-header">
                      <AccordionItemButton className="card-link">
                        Какой формат обучения предлагается: онлайн, очный или
                        смешанный?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body">
                      Мы предлагаем онлайн обучение с интерактивными материалами
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-lg-6 padding-0">
            <img src={image}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
