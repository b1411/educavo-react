import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/">Домой</Link>
      </li>
      <li>
        <Link to="/about">О нас</Link>
      </li>
      <li>
        <Link to="/course-3" as="#">
          Курсы
        </Link>
      </li>
      <li>
        <Link to="/blog">Блог</Link>
      </li>
      <li>
        <Link to="/contact">Контакты</Link>
      </li>
    </React.Fragment>
  );
};

export default MenuItems;
