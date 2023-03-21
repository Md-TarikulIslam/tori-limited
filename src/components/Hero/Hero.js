import React from "react";
import "./Hero.css";
import toriImage from "../images/why.svg";
import Who from "../Who/Who";

const Hero = () => {
  return (
    <div>
      <div className="cover-img">
        <div className="text-position">
          <h1 className="hero-text">Welcome to tori limited</h1>
          <p className="hero-p">Lets Board Together</p>
        </div>
      </div>

      <div className="tori-flex container">
        <div>
          <h1 className="why-tori">Why Tori Limited</h1>
          <p className="tori-p">
            At Tori Limited, we continue to follow the highest level of safety
            precautions as we treat our clients as the pioneer. We are strictly
            adhering the state-of-the-art and compliance by the country-law and
            regulations. Therefore, we used to support you in a way that is
            authentic and acceptable by the process of any stage of your clients
            and catch an easy attention by them. We always focus on zero loss by
            achieving 100% of your targets.
          </p>
        </div>
        <div>
          <img className="tori-img" src={toriImage} alt="tori-image" />
        </div>
      </div>
      <Who />
    </div>
  );
};

export default Hero;
