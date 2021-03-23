import React, { useContext } from "react";
import "./Content.css";
import Product from "./Product";
import { ProductsContext } from "./ProductsContext";
import { Link } from "react-router-dom";

function Content() {
  const [state] = useContext(ProductsContext);

  return (
    <div className="content">
      <div className="content__container">
        {state.products
          .filter((p) => p.title.toUpperCase().includes(state.searchText))
          .map(({ title, id, category, price, image }) => {
            return (
              <Link className="content__link" key={id} to={`/product/${id}`}>
                <div className="content__product">
                  <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    category={category}
                    image={image}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Content;
