import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="head-flex">
      <div className="head2-flex">
        <p className="me-3 text-light text-size">
          Welcome to <span className="tori-red">Tori Limited</span>
        </p>
        <p className="me-3 text-light  text-size">
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +8801958424000
        </p>
        <p className="text-light  text-size">
          {" "}
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
          info@torilimited.com
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          className="text-light me-3"
          icon={faFacebook}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-light"
          icon={faLinkedin}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Header;
