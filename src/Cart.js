import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__checkout">
        <Subtotal />
        <div className="cart__ad">
          <img
            src="https://www.nicepng.com/png/full/273-2734590_add-to-cart-guaranteed-safe-checkout-icons.png"
            alt="safe checkout"
          />
        </div>
      </div>
      <div className="cart__title">
        <h2>Shopping basket is here</h2>
      </div>
    </div>
  );
}

export default Cart;
