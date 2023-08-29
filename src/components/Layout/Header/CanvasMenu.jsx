import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Carousel, { Modal, ModalGateway } from "react-images";

import galleryLogo1 from "../../../assets/img/gallery/1.jpg";
import galleryLogo2 from "../../../assets/img/gallery/2.jpg";
import galleryLogo3 from "../../../assets/img/gallery/3.jpg";
import galleryLogo4 from "../../../assets/img/gallery/4.jpg";
import galleryLogo5 from "../../../assets/img/gallery/5.jpg";
import galleryLogo6 from "../../../assets/img/gallery/6.jpg";

const photos = [
  {
    src: galleryLogo1,
    width: 1,
    height: 1,
  },
  {
    src: galleryLogo2,
    width: 1,
    height: 1,
  },
  {
    src: galleryLogo3,
    width: 1,
    height: 1,
  },
  {
    src: galleryLogo4,
    width: 1,
    height: 1,
  },
  {
    src: galleryLogo5,
    width: 1,
    height: 1,
  },
  {
    src: galleryLogo6,
    width: 1,
    height: 1,
  },
];

const CanvasMenu = (props) => {
  const { canvasClass, canvasLogo } = props;

  const canvasMenuRemove = () => {
    document.body.classList.remove("nav-expanded");
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <React.Fragment>
      <nav className={canvasClass}>
        <div className="close-btn">
          <div onClick={canvasMenuRemove} id="nav-close">
            <div className="line">
              <span className="line1"></span>
              <span className="line2"></span>
            </div>
          </div>
        </div>
        <div className="canvas-logo">
          <Link to="/">
            <img src={canvasLogo} alt="logo" />
          </Link>
        </div>
        <div className="offcanvas-text">
          <p>
            Добро пожаловать в нашу организацию по повышению квалификации! Мы
            являемся ведущей платформой, предлагающей разнообразные
            образовательные курсы и тренинги для профессионального развития.
          </p>
        </div>
        <div className="offcanvas-gallery">
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <div className="map-img">
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
        {/* <div className="canvas-contact">
          <ul className="social">
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </React.Fragment>
  );
};

export default CanvasMenu;
