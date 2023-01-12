import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "../styles/Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import Spinner from "../components/Spinner";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const sendEmailHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      user_name: inputName,
      user_email: inputEmail,
      message: inputMessage,
    };

    let validate = validateDataForm(data);
    setErrors(validate);

    if (Object.entries(validate).length === 0) {
      emailjs
        .sendForm(
          "service_dp3aw3l",
          "template_7egq351",
          e.target,
          "_dTu7J3vq-AlfVvXa"
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      setInputName("");
      setInputEmail("");
      setInputMessage("");
    }
    setLoading(false);
  };

  const validateDataForm = (form) => {
    let _errors = {};
    if (form.user_name === "") {
      _errors.name = "Required field.";
    }
    if (form.user_email === "") {
      _errors.email = "Required field.";
    } else if (emailValidation(form.user_email) === false) {
      _errors.email = "Enter a valid email address.";
    }
    if (form.message === "") {
      _errors.message = "Required field.";
    }

    return _errors;
  };

  const emailValidation = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  return (
    <div>
      <section id="contact">
        <h1>Contact</h1>

        <div className="contact-wrapper">
          <div className="contact-form">
            <form className="form-horizontal" onSubmit={sendEmailHandler}>
              <div className="form-inputs">
                <input
                  type="text"
                  className="form-input"
                  placeholder="NAME"
                  name="user_name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  type="email"
                  className="form-input"
                  placeholder="EMAIL"
                  name="user_email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <textarea
                  className="form-text"
                  placeholder="MESSAGE"
                  name="message"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>

              <button className="send-button">
                <div className="alt-send-button">
                  <SendIcon />
                </div>
              </button>
            </form>
            {loading && (
              <div className="spinner">
                <Spinner />
              </div>
            )}
          </div>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <LocationOnIcon />
                <span className="contact-text place">
                  Rosario, Santa Fe, Argentina
                </span>
              </li>

              <li className="list-item">
                <WhatsAppIcon />
                <span className="contact-text place whatsapp">
                  <a
                    href="https://wa.me/+5493462365854"
                    title="Give me a call"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +549-3462-365854
                  </a>
                </span>
              </li>

              <li className="list-item">
                <EmailIcon />
                <span className="contact-text place gmail">
                  <a href="mailto:lbutto40@gmail.com" title="Send me an email">
                    lbutto40@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
