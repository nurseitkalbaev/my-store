import React from "react";
import "./Navbar.css";
import { Button } from "@material-ui/core";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__category">
          <Button>electronics</Button>
        </div>
        <div className="navbar__category">
          <Button>mens</Button>
        </div>
        <div className="navbar__category">
          <Button>womens</Button>
        </div>
        <div className="navbar__category">
          <Button>jewlery</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
