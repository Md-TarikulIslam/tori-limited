import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-foo">
      <div className="foo-color">
        <div className="foo-grid">
          <div>
            <h3 className="foo-head">Contact</h3>
        <div className="address-div">
        <p>Tori Limited.</p>
            <p>
              Cha-70,70/A, Rupayan Millennium Square (3A), Progoti Sharoni,
              North Badda, Gulshan, Dhaka-1212, Bangladesh.
            </p>
            <p>E-Mail: info@torilimited.com</p>
            <p>Phone: +8801958424000</p>
        </div>
          </div>

          <div>
            <h3 className="foo-head">Our Products</h3>
            <ul className="ul-style">
              <li>Ecommerce</li>
              <li>Customized Software</li>
              <li>Call Center Solution</li>
              <li>IPTSP Solution</li>
              <li>SMS Solution</li>
              <li>Payroll System</li>
              <li>Provident Fund</li>
              <li>Rupantor Inventory</li>
              <li>Interconnect Billing</li>
              <li>Hotel Booking System</li>
            </ul>
          </div>

          <div>
            <h3 className="foo-head">Our Service</h3>
            <ul className="ul-style">
              <li>Web Application</li>
              <li>ERP Solution</li>
              <li>OTT Solution</li>
              <li>HM System</li>
              <li>CCTV</li>
            </ul>
          </div>

          <div>
            <h3 className="foo-head">About Us</h3>
            <p className="address-div">
              Tori Limited is a leading IT solution provider offering a range of
              solutions including ISP service, cybersecurity,
              business-to-business applications, business-to-client
              applications, managed hosting and internet portal management.
            </p>
          </div>
        </div>
        <p className="copy">Copyright © 2022, All Rights Reserved by <span className="copy-tori"> Tori Limited</span></p>
      </div>
    </div>
  );
};

export default Footer;
