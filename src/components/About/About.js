import React from "react";
import "./About.css";
import Aboutdata from "./AboutData";

const About = () => {
  return (
    <div>
      <div className="about-img">
        <h1 className="about-head container">
          The <span className="about-red">Internet</span> could be a very{" "}
          <span className="about-red">Positive</span> step towards{" "}
          <span className="about-red">Education</span> ,
          <span className="about-red">Organization</span> and participation in a
          meaningful <span className="about-red">Society</span>.
        </h1>
        <p className="about-p container">
          We offer a diverse spectrum of products for your specific company
          requirements. We implement rigorous quality testing as a
          technologically process-driven firm to assure seamless,
          round-the-clock, and global performance.
        </p>
      </div>
      <div>
        <h2 className="about-us-text">ABOUT US</h2>
        <p className="container about-details">
          Tori Limited is one of the largest private IT enabled solution and
          service provider in multiple range of elucidations including IP and
          Solution digital world. With an inherent emphasis on digital world
          excellence and an exertion to provide unparalleled provisions to our
          clients, we are one of the few in Bangladesh considering our
          competitors with strong primary, secondary, tertiary and quaternary
          supports with our excellent and expertise team throughout the country.
          country.
        </p>

        <p className="container about-details">
          We have over 50+ dedicated and exceptional individuals, delivering a
          simple yet strong promises to our different stakeholders. “Let’s Board
          Together” with this motto we have commenced our journey to serve you
          the best of the best that we all can promise.
        </p>
      </div>

      <div>
        <h2 className="about-us-text">Objective</h2>
        <p className="container text-center about-details">
          To create a better everyday life for every people.
        </p>
      </div>
      <div className="card-grid container">
        {Aboutdata.map((data) => {
          return (
            <div className="card-shadow">
              <img className="card-img" src={data.img} alt="" />
              <h4 className="card-head">{data.header}</h4>
              <p className="card-p">{data.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
