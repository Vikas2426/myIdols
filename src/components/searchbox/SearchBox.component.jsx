import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input type="search" placeholder="Search Idols" onChange={searchChange} />
  );
};

export default SearchBox;
