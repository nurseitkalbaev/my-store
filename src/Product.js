import React from "react";
import "./Product.css";
import { Button } from "@material-ui/core";
function Product({ id, title, price, description, category, image }) {
  return (
    <div className="product__container">
      <img src={image} alt="product" />

      <div className="product__details">
        <p className="product__title">{title}</p>
        <div className="product__price">
          <span>Price:</span>
          <small>$</small>
          <strong>{price}</strong>
        </div>
      </div>
      <Button>add to cart</Button>
    </div>
  );
}

export default Product;
