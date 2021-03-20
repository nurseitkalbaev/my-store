import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button>checkout</Button>
    </div>
  );
}

export default Subtotal;
