import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop title">
        <h1>OnlineShopping</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((products, index) => (
          <Product key={index} data={products} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
