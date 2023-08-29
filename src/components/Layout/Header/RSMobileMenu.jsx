import React, { useState } from "react";
import { Link } from "react-router-dom";

const RSMobileMenu = ({
  setMenuOpen,
  menuOpen,
  parentMenu,
  secondParentMenu,
  headerFullWidth,
}) => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [course, setCourse] = useState(false);
  const [pages, setPages] = useState(false);
  const [team, setTeam] = useState(false);
  const [event, setEvent] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [shop, setShop] = useState(false);
  const [otherPages, setOtherPages] = useState(false);
  const [blog, setBlog] = useState(false);
  const [blogSidebar, setBlogSidebar] = useState(false);
  const [blogSingle, setBlogSingle] = useState(false);
  const [contact, setContact] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "about") {
      setHome(false);
      setAbout(!about);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "course") {
      setHome(false);
      setAbout(false);
      setCourse(!course);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "pages") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(!pages);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "team") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(true);
      setTeam(!team);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "event") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(true);
      setTeam(false);
      setEvent(!event);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "gallery") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(true);
      setTeam(false);
      setEvent(false);
      setGallery(!gallery);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "shop") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(true);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(!shop);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "otherPages") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(true);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(!otherPages);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "blog") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(!blog);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "blogSidebar") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(true);
      setBlogSidebar(!blogSidebar);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "blogSingle") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(true);
      setBlogSidebar(false);
      setBlogSingle(!blogSingle);
      setContact(false);
    } else if (menu === "contact") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(!contact);
    }
  };

  return (
    <div
      className={
        headerFullWidth ? "container-fluid relative" : "container relative"
      }
    >
      <div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
        <div className="mobile-menu">
          <ul className="nav-menu">
            <li>
              <Link
                to="/"
                onClick={() => {
                  openMobileMenu("home");
                }}
                className={parentMenu === "home" ? "active-menu" : ""}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  openMobileMenu("about");
                }}
                className={parentMenu === "about" ? "active-menu" : ""}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                to="/course-3"
                onClick={() => {
                  openMobileMenu("course");
                }}
                className={parentMenu === "course" ? "active-menu" : ""}
              >
                Курсы
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => {
                  openMobileMenu("blog");
                }}
                className={parentMenu === "blog" ? "active-menu" : ""}
              >
                Новости
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  openMobileMenu("contact");
                }}
                className={parentMenu === "contact" ? "active-menu" : ""}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RSMobileMenu;
