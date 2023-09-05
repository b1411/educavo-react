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
    let formatedMessage = JSON.stringify(`Имя: ${e.target[0].value} ${e.target[1].value}\nEmail: ${e.target[2].value}\nТелефон: ${phoneRef.current.getInputValue()}\nСообщение: ${e.target[4].value}`);
    const application = new Parse.Object("Application");
    application.set("name", e.target[0].value + " " + e.target[1].value);
    application.set("email", e.target[2].value);
    application.set(
      "phone",
      phoneRef.current.getInputValue().replace(/\D/g, "")
    );
    application.set("message", e.target[4].value);
    Promise.all([application.save().then(
      (result) => {
        alert("Ваша заявка успешно отправлена!");
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
      }, (error) => {
        return Promise.reject( error.message );
      }), fetch("https://api.greenapi.com/waInstance7103853072/sendMessage/1f00396248d64b6bb194d8a8bb2c23a8fc9fcffeb876497abb", {
        "headers": {
          "accept": "*/*",
          "accept-language": "ru,en;q=0.9",
          "content-type": "application/json",
          "sec-ch-ua": "\"Chromium\";v=\"112\", \"YaBrowser\";v=\"23\", \"Not:A-Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://console.green-api.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{\"chatId\":\"77003508313@c.us\",\"message\":${formatedMessage}}`,
        "method": "POST"
      })]).catch((error) => {
        failedAttempts++;
        alert("Ошибка при отправке заявки!");
      });
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
            backgroundColor: "white",
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
