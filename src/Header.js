import React from "react";
import "./Header.css";
import { ShoppingCart, FavoriteBorder, Person } from "@material-ui/icons/";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <div className="header grid">
      <Link to="/">
        <img
          src="my-store-logo.png"
          className="header__logo mt"
          alt="my-store-logo"
        />
      </Link>

      <div className="header__search mt">
        <Search />
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
          <Link to="/cart">
            <Button className="header__optionButton">
              <span className="header__nav">
                <ShoppingCart />
              </span>
              <span className=" header__cartCount">0</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
