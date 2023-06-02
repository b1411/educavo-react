import React from "react";

const ContactInfo = (props) => {
  const { boxClass, iconClass, title, address, phone, email } = props;
  return (
    <React.Fragment>
      <div className={`address-box ${boxClass}`}>
        <div className="address-icon">
          <i className={iconClass}></i>
        </div>
        <div className="address-text">
          <span className="label">{title ? title : "Title Here"}</span>
          {address ? <div className="address">{address}</div> : ""}
          {phone
            ? phone.map((item, index) => {
                return (
                    <>
                  <a className="phone" key={index} href={`tel:${item.replace(/ /g, "")}`}>
                    {item}
                  </a>
                  <br />
                  </>
                );
              })
            : ""}
          {email ? (
            <a className="email" href={`mailto:${email}`}>
              {email}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactInfo;
