import React, { useState } from "react";

import "../styles/Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputMessage, setInputMessage] = useState();

  const sendEmailHandler = () => {
    console.log(inputName, inputEmail, inputMessage);
    setInputName("");
    setInputEmail("");
    setInputMessage("");
  };

  return (
    <div>
      <section id="contact">
        <h1 className="section-header">Contact</h1>

        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal">
            <div className="form-inputs">
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="NAME"
                name="name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                required
              />

              <input
                type="email"
                className="form-input"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
              />

              <textarea
                className="form-text"
                placeholder="MESSAGE"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              className="send-button"
              id="submit"
              type="button"
              value="SEND"
              onClick={sendEmailHandler}
            >
              <div className="alt-send-button">
                <SendIcon />
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

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
