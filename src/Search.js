import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

function Search() {
  const [state, setCustomState] = useContext(ProductsContext);

  const setInputValue = (e) => {
    const inputValue = e.target.value;
    setCustomState({ ...state, inputValue });
  };

  const onSearch = () => {
    setCustomState({
      ...state,
      searchText: state.inputValue.toUpperCase(),
      inputValue: "",
    });
  };
  return (
    <div className="search">
      <input
        onChange={setInputValue}
        value={state.inputValue}
        placeholder="Search . . ."
        className="search__input"
        type="text"
      />
      <Button onClick={onSearch} className=".header__searchIconButton">
        <SearchIcon className="searchIcon" />
      </Button>
    </div>
  );
}

export default Search;
