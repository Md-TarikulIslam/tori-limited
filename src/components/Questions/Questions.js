import React from "react";
import "./Questions.css";
import questionsData from "./QuestionData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Questions = () => {
  return (
    <div>
      <h1 className="ask-text">Frequently Asked Questions</h1>
      <div className="question-grid">
        {questionsData.map((data) => {
          return (
            <div>
              <p className="que-icon">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faQuestionCircle}
                ></FontAwesomeIcon>
                {data.question}{" "}
              </p>
              <p className="que-text mt-4">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faArrowCircleRight}
                ></FontAwesomeIcon>
                {data.answer}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
