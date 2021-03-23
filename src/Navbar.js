import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

import "./Navbar.css";
import { Button } from "@material-ui/core";

function Navbar() {
  const [state, setCustomState] = useContext(ProductsContext);

  const allProducts = (e) => {
    setCustomState({
      ...state,
      searchText: "",
      products: state.initailProducts,
    });
  };
  const setCategory = (e) => {
    const selectedCategory = e.target.innerHTML;
    const updatedState = state.initailProducts.filter((p) =>
      p.category.includes(selectedCategory)
    );
    setCustomState({
      ...state,
      products: updatedState,
      searchText: "",
    });
  };
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__category">
          <Button onClick={allProducts}>all</Button>
        </div>

        {state.categories.map((category, ind) => {
          return (
            <div key={ind} onClick={setCategory} className="navbar__category">
              <Button>{category}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
