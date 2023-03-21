import {
  faMapMarked,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-img">
        <h1 className="pro-head">Tori Limited</h1>
        <p className="pro-p container">
          At Tori Limited, we develop innovative and creative products and
          services that provide total communication and information
          solutions.Satisfied clients around the globe bear testimony to the
          quality of our work.
        </p>
      </div>

      <div className="contact-flex contact-cover">
        <div>
          <h3 className="header-pos">
            <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon> Address
          </h3>
          <p className="address">
            Cha-70,70/A, Rupayan Millennium Square (3A), Progoti Sharoni, North
            Badda, Gulshan, Dhaka-1212, Bangladesh.
          </p>
          <h3 className="header-pos">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone Number
          </h3>
          <p className="address">+8801958424000</p>
          <h3 className="header-pos">
            {" "}
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Email
          </h3>
          <p className="address">info@torilimited.com</p>
        </div>
        <div>
          <h1 className="text-send">Send Message</h1>
          <input
            className="field"
            type="text"
            name=""
            id=""
            placeholder="Write Your Name Here"
          />
          <p className="con-text">Full name</p>
          <input
            className="field"
            type="text"
            name=""
            id=""
            placeholder="Write Your Email Here"
          />
          <p className="con-text">email</p>
          <input
            className="field2"
            type="text"
            name=""
            id=""
            placeholder="Write Your Message Here"
          />
          <p className="con-text">type your message</p>

          <button className="sub-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
