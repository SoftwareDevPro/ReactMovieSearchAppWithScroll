import React from "react";

import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFavorite = () => {
  return (
    <>
      <span className="mr-4">Add to Favorites</span>
      <FontAwesomeIcon icon={faPlusSquare} />
    </>
  );
};

export default AddFavorite;
