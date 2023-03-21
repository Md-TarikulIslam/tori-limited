import React from "react";
import "./Products.css";
import ProductsData from "./ProductsData";

const Products = () => {
  return (
    <div>
      <div className="pro-img">
        <h1 className="pro-head">Our Products</h1>
        <p className="pro-p container">
          We offer a diverse spectrum of products for your specific company
          requirements. We implement rigorous quality testing as a
          technologically process-driven firm to assure seamless,
          round-the-clock, and global performance.
        </p>
      </div>
      <div className="product-grid container">
        {ProductsData.map((product) => {
          return (
            <div className="product-card">
              <img className="product-img" src={product.img} alt="" />
              <h5 className="product-head">{product.head}</h5>
              <p className="product-p">{product.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
