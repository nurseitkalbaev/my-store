import React, { useContext } from "react";
import "./SingleProduct.css";
import { ProductsContext } from "./ProductsContext";
import { Button } from "@material-ui/core";
import { useParams } from "react-router";

function SingleProduct() {
  const [state] = useContext(ProductsContext);

  const { id } = useParams();

  const product = state.initailProducts[id - 1];

  const { title, price, image, description } = product;

  return (
    <div className="singleProduct">
      <div className="singleProduct__image">
        <img src={image} alt="product" />
      </div>

      <div className="singleProduct__details">
        <h2>{title}</h2>

        <p className="singleProduct__description">
          <span>Description:</span>
          {description}
        </p>

        <p className="singleProduct__price">
          <span>Price:</span>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <Button>add to cart</Button>
      </div>
    </div>
  );
}

export default SingleProduct;
