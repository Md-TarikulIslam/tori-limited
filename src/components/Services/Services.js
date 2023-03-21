import React from "react";
import "./Services.css";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <div>
      <div className="service-img">
        <h1 className="pro-head">Our Services</h1>
        <p className="pro-p container">
          As a leader in technology exploring, Tori Limited is committed to
          exporting quality software worldwide.
        </p>
      </div>
      <div className="product-grid container">
        {ServicesData.map((service) => {
          return (
            <div className="product-card cardv2">
              <img className="product-img" src={service.img} alt="" />
              <h5 className="product-head headv2">{service.head}</h5>
              <p className="product-p">{service.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
