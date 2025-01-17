import React from "react";

function Search({ onSearchChange }) {
 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSearchChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
