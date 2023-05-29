import React, { useEffect, useState } from "react";
import courseData from "./data/courseData";
import { useRootContext } from "../../../components/Context/context";
import { Modal } from "react-bootstrap";
import Parse from "parse";

const emDash = String.fromCharCode(8212);

const CourseSidebar = () => {
  let courseId = useRootContext().courseId;
  let accessSet = useRootContext().setAccess;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let user = Parse.User.current();
    if (user !== null) {
      if (+user.get("courseId") === +courseId) {
        accessSet(true);
      } else {
        accessSet(false);
      }
    } else {
      accessSet(false);
    }
  }, [courseId, accessSet]);

  async function handleEnter(e) {
    e.preventDefault();
    e.persist();
    let passCodes = new Parse.Query("PassCodes");
    let passCodeInput = e.target[2].value;
    let isContains = false;
    let passCode = await passCodes.find();
    for (let i = 0; i < passCode.length; i++) {
      if (
        passCode[i].get("code") == passCodeInput &&
        passCode[i].get("courseId") == courseId
      ) {
        isContains = true;
        break;
      }
    }

    if (isContains) {
      alert("Вы успешно получили доступ к курсу!");
      let user = await Parse.User.signUp(e.target[1].value, "samplepass");
      user.set("courseId", courseId);
      user.set("email", e.target[1].value);
      await user.save();
      accessSet(true);
      setShowModal(false);
    } else {
      alert("Неверный код активации курса!");
    }
  }

  return (
    <>
      <style>
        {`
      .dash-span::selection {
        background: transparent;
      }
      .dash-span::-moz-selection {
        background: transparent;
      }
    `}
      </style>
      <div className="inner-column">
        <div className="course-features-info">
          <ul>
            <i
              className="fa fa-check-square-o"
              style={{ color: "#ff5421", paddingRight: "10px" }}
            ></i>
            <span
              className="label"
              style={{
                fontWeight: "600",
              }}
            >
              Цели:
            </span>
            <div className="value">
              {courseData[courseId].goals.map((item, index) => {
                return (
                  <p key={index}>
                    <span className="dash-span">{emDash}</span> {item}
                  </p>
                );
              })}
            </div>
          </ul>
        </div>
        <div>
          <button
            className="readon orange-btn"
            onClick={() => {
              setShowModal(true);
            }}
            style={{
              margin: "20px auto 0",
              width: "100%",
            }}
          >
            Пройти обучение
          </button>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => {}}
        size="lg"
        aria-labelledby="courseEnterFormLabel"
        centered
        className="modal"
      >
        <Modal.Body>
          <i
            className="fa fa-times close-icon"
            onClick={() => setShowModal(false)}
          ></i>
          <form className="modal-form" onSubmit={(e) => handleEnter(e)}>
            <input type="text" placeholder="Введите ФИО" required />
            <input type="email" placeholder="Введите ваш email" required />
            <input type="text" placeholder="код активации курса" required />
            <button type="submit" className="readon orange-btn">
              Пройти курс
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CourseSidebar;
