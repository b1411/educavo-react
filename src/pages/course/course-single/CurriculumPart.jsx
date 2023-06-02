import React from "react";
// import { Link } from "react-router-dom";
// import ModalVideo from "react-modal-video";
import { useRootContext } from "../../../components/Context/context";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemPanel,
//   AccordionItemButton,
// } from "react-accessible-accordion";

import CourseTab from "./CourseTab";

const CurriculumPart = () => {

  const context = useRootContext();

  return (
    <>
      {context.access ? (
        <CourseTab />
      ) : (
        <p style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "red"
        }}>Доступ запрещен</p>
      )}
    </>
  );
};

export default CurriculumPart;
