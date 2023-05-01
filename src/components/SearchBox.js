import React from "react";

const SearchBox = (props) => {
  return (
    <div className="row col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Otsi filmi..."></input>
    </div>
  );
};

export default SearchBox;
