import React from "react";
import "./Header.css";
import {
  Search,
  ShoppingCart,
  FavoriteBorder,
  Person,
} from "@material-ui/icons/";
import Button from "@material-ui/core/Button";

function Header() {
  return (
    <div className="header grid">
      <img
        src="my-store-logo.png"
        className="header__logo mt"
        alt="my-store-logo"
      />
      <div className="header__search mt">
        <input className="header__input" type="text" />
        <Button className=".header__searchIconButton">
          <Search className="header__searchIcon" />
        </Button>
      </div>

      <div className="header__menu mt">
        <div className="header__option">
          <Button className="header__optionButton">
            <span className="header__nav">
              <Person />
            </span>
          </Button>
        </div>

        <div className="header__option">
          <Button className="header__optionButton">
            <span className="header__nav">
              <FavoriteBorder />
            </span>
          </Button>
        </div>

        <div className="header__option">
          <Button className="header__optionButton">
            <span className="header__nav">
              <ShoppingCart />
            </span>
            <span className=" header__cartCount">0</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
