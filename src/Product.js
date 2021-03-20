import React from "react";
import "./Product.css";
import { Button } from "@material-ui/core";
function Product({ id, title, price, description, category, image }) {
  return (
    <div className="product">
      <div className="product__container">
        <img src={image} />
        <div className="product__details">
          <p className="product__title">{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <Button>add to cart</Button>
      </div>
    </div>
  );
}

export default Product;
