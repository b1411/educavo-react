import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItems = (props) => {
  const { parentMenu, secondParentMenu } = props;

  const location = useLocation();

  return (
    <React.Fragment>
      <li
        className={
          parentMenu === "home"
            ? "rs-mega-menu menu-item-has-children current-menu-item"
            : "rs-mega-menu menu-item-has-children"
        }
      >
        <Link to="/">Домой</Link>
      </li>
      <li
        className={
          parentMenu === "about"
            ? "menu-item-has-children current-menu-item"
            : "menu-item-has-children"
        }
      >
        <Link to="/about">О нас</Link>
      </li>
      <li
        className={
          parentMenu === "course"
            ? "menu-item-has-children current-menu-item"
            : "menu-item-has-children"
        }
      >
        <Link to="/course-3" as="#">
          Курсы
        </Link>
      </li>
      <li
        className={
          parentMenu === "pages"
            ? "menu-item-has-children current-menu-item"
            : "menu-item-has-children"
        }
      >
        <Link to="#">Страницы</Link>
        <ul className="sub-menu">
          <li>
            <Link
              to="/team"
              className={
                secondParentMenu === "team"
                  ? "menu-item-has-children active-menu"
                  : "menu-item-has-children"
              }
            >
              Наша команда
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className={
                secondParentMenu === "event"
                  ? "menu-item-has-children active-menu"
                  : "menu-item-has-children"
              }
            >
              Мероприятия
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={
                secondParentMenu === "gallery"
                  ? "menu-item-has-children active-menu"
                  : "menu-item-has-children"
              }
            >
              Галерея
            </Link>
          </li>
          {/* <li>
            <Link
              to="#"
              className={
                secondParentMenu === "shop"
                  ? "menu-item-has-children active-menu"
                  : "menu-item-has-children"
              }
            >
              Shop
            </Link>
            <ul className="sub-menu">
              <li>
                <Link
                  to="/shop"
                  className={location.pathname === "/shop" ? "active-menu" : ""}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/shop-single"
                  className={
                    location.pathname === "/shop/shop-single"
                      ? "active-menu"
                      : ""
                  }
                >
                  Shop Single
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/cart"
                  className={
                    location.pathname === "/shop/cart" ? "active-menu" : ""
                  }
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/checkout"
                  className={
                    location.pathname === "/shop/checkout" ? "active-menu" : ""
                  }
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link
              to="#"
              className={
                secondParentMenu === "others"
                  ? "menu-item-has-children active-menu"
                  : "menu-item-has-children"
              }
            >
              Другое
            </Link>
            <ul className="sub-menu">
              <li>
                <Link
                  to="/faq"
                  className={location.pathname === "/faq" ? "active-menu" : ""}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/error"
                  className={
                    location.pathname === "/error" ? "active-menu" : ""
                  }
                >
                  404 Page
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={
                    location.pathname === "/login" ? "active-menu" : ""
                  }
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={
                    location.pathname === "/register" ? "active-menu" : ""
                  }
                >
                  Register
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li
        className={
          parentMenu === "blog"
            ? "menu-item-has-children current-menu-item"
            : "menu-item-has-children"
        }
      >
        <Link to="/blog">Блог</Link>
      </li>
      <li
        className={
          parentMenu === "contact"
            ? "menu-item-has-children current-menu-item"
            : "menu-item-has-children"
        }
      >
        <Link to="/contact">Контакты</Link>
      </li>
    </React.Fragment>
  );
};

export default MenuItems;
