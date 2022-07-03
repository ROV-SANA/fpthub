import React from "react";
import "../assets/css/SearchBox.css";

function SearchBox() {
  return (
    <>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <p className="search__placeholder">Tìm kiếm</p>
      </div>
    </>
  );
}

export default SearchBox;
