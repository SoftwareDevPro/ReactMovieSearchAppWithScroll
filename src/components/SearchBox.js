import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-6">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to start search..."
      ></input>
    </div>
  );
};

export default SearchBox;
