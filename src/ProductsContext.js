import React, { useState, createContext, useEffect } from "react";
import mockProducts from "./mockProducts";

export const ProductsContext = createContext();

const apiUrl =
  "https://demo34107.appliances.dev.rwsgateway.com/FRONT-END-DEV-PRODUCT-TEST&test_api_key=DBWOSJJBZCQSIJMYKNGEYSRTPFIAVOPVBVGUSUJPFRSHKGWVWB";

export const ProductsProvider = (props) => {
  const [state, setCustomState] = useState({
    products: [],
    searchText: "",
    isLoading: true,
    categories: [],
    initailProducts: [],
    urlId: "",
    inputValue: "",
    noResult: false,
  });

  const setProducts = (products) => {
    const catObj = {};
    products.forEach((p) => (catObj[p.category] = true));
    const categories = Object.keys(catObj);

    setCustomState({
      ...state,
      isLoading: false,
      categories,
      products,
      initailProducts: products,
    });
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((r) => r.json())
      .then((r) => {
        if (r.message === "Error: invalid API key ") {
          setProducts(mockProducts);
        } else {
          // since we don't know how data comes.

          setProducts(mockProducts);
        }
      })
      .catch((err) => setProducts(mockProducts));
  }, []);

  return (
    <ProductsContext.Provider value={[state, setCustomState]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
