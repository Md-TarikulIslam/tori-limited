import React from "react";
import "./Values.css";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import Questions from "../Questions/Questions";

const Values = () => {
  return (
    <div>
      <div>
        <h1 className="value-text">Our Values</h1>
        <p>
          We, at Tori Limited abide by a core set of values that guide our
          organizational behavior and decision making and that create the unique
          ethos that is imbibed in every employees in this organization.
        </p>
      </div>
      <div>
        <div className="value-flex">
          <div>
            <h1 className="head-t">Excellence</h1>
            <p className="desc">
              "Surpassing current benchmarks constantly by continually
              challenging our ability and skills to take the organization to
              greater heights."{" "}
              <span className="span-text">ALBERT EINSTEIN.</span>
            </p>
          </div>
          <div>
            <img className="person-img" src={p1} alt="" />
          </div>
        </div>

        <div className="value-flex">
          <div>
            <img className="person-img" src={p2} alt="" />
          </div>
          <div>
            <h1 className="head-t">Respect</h1>
            <p className="desc">
              "Treating people with utmost dignity, valuing their contributions
              and fostering a culture that allow each individual to rise to
              their fullest potential."{" "}
              <span className="span-text"> MAHATMA GANDHI.</span>
            </p>
          </div>
        </div>

        <div className="value-flex">
          <div>
            <h1 className="head-t">Compassion</h1>
            <p className="desc">
              "Going beyond boundaries with empathy and care."
              <span className="span-text">MOTHER TERESA.</span>
            </p>
          </div>
          <div>
            <img className="person-img" src={p3} alt="" />
          </div>
        </div>

        <div className="value-flex">
          <div>
            <img className="person-img" src={p4} alt="" />
          </div>
          <div>
            <h1 className="head-t">Passion</h1>
            <p className="desc">
              "Going the extra mile willingly, with a complete sense of
              belongingness and purpose while adding value to our stakeholders"
              <span className="span-text"> STEVE JOBS.</span>
            </p>
          </div>
        </div>

        <div className="value-flex">
          <div>
            <h1 className="head-t">Integrity</h1>
            <p className="desc">
              "Doing the right thing without any compromises and embracing a
              higher standard of conduct"
              <span className="span-text"> NELSON MANDELA.</span>
            </p>
          </div>
          <div>
            <img className="person-img" src={p5} alt="" />
          </div>
        </div>
      </div>
      <Questions></Questions>
    </div>
  );
};

export default Values;
