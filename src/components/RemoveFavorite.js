
import React from "react";

import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemoveFavorite = () => {
  return (
    <>
      <span className="mr-4">Remove from favorites</span>
      <FontAwesomeIcon icon={faMinusSquare} />
    </>
  );
};

export default RemoveFavorite;
