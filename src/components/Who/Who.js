import React from "react";
import Values from "../Values/Values";
import "./Who.css";
import datas from "./WhoData";

const Who = () => {
  return (
    <div className="container">
      <h1 className="who-text">Who we are</h1>
      <p className="tori-lim">
        Tori Limited Stands for Providing Quality IT-Enabled Services Using
        Latest Technologies
      </p>
      <div className="data-grid">
        {datas?.map((data) => {
          return (
            <div >
              <img className="icon-size" src={data.icon} alt="" />
              <p className="d-header">{data.header}</p>
              <p className="d-desc">{data.desc}</p>
            </div>
          );
        })}
      </div>
      <Values></Values>
    </div>
  );
};

export default Who;
