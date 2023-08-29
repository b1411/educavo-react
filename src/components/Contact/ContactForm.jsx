import React, { useRef } from "react";
import InputMask from "react-input-mask";
import Parse from "parse";

const ContactForm = (props) => {
  const { submitBtnClass, btnText } = props;

  let failedAttempts = 0;

  const phoneRef = useRef(null);

  const sendForm = (e) => {
    e.preventDefault();
    e.persist();
    if (failedAttempts > 3) {
      alert("Превышено количество попыток отправки заявки!");
      return;
    }
    const application = new Parse.Object("Application");
    application.set("name", e.target[0].value + " " + e.target[1].value);
    application.set("email", e.target[2].value);
    application.set(
      "phone",
      phoneRef.current.getInputValue().replace(/\D/g, "")
    );
    application.set("message", e.target[4].value);
    application.save().then(
      (result) => {
        alert("Ваша заявка успешно отправлена!");
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
      },
      (error) => {
        failedAttempts++;
        alert("Ошибка при отправке заявки!");
      }
    );
  };

  return (
    <form id="contact-form" onSubmit={(e) => sendForm(e)}>
      <div className="row">
        <div className="col-md-6 mb-30">
          <input
            className="from-control"
            type="text"
            id="name"
            name="name"
            placeholder="Имя*"
            required
          />
        </div>

        <div className="col-md-6 mb-30">
          <input
            className="from-control"
            type="text"
            id="name"
            name="name"
            placeholder="Фамилия*"
            required
          />
        </div>

        <div className="col-md-6 mb-30">
          <input
            className="from-control"
            type="text"
            id="email"
            name="email"
            placeholder="E-Mail"  
          />
        </div>

        <div className="col-md-6 mb-30">
          <InputMask
            mask="+7 (999) 999-99-99"
            placeholder="+7 (___) ___-__-__"
            className="from-control"
            type="tel"
            id="phone"
            name="phone"
            required
            ref={phoneRef}
          />
        </div>

        <div className="col-12 mb-30">
          <textarea
            className="from-control"
            id="message"
            name="message"
            placeholder="Ваше сообщение"
            required
            minLength={10}
          ></textarea>
        </div>
      </div>
      <div className="btn-part">
        <button
          className={
            submitBtnClass ? submitBtnClass : "readon learn-more submit"
          }
          style={{
            backgroundColor:  "white",
            color: "#21a7d0"
          }}
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
