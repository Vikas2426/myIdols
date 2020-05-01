import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="searchbox tc"
      type="search"
      placeholder="Search Idols"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
