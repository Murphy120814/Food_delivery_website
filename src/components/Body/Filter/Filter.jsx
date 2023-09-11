import React from "react";

function Filter({ children, handleClick, showState }) {
  return (
    <button onClick={handleClick} className={!showState ? "" : "active__btn"}>
      {children}
    </button>
  );
}

export default Filter;
