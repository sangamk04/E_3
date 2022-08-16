import React, { forwardRef } from "react";
import "./PageCell.css"

const PageCell = ({ ind, onClick, selected }) => {
  return (
    <div
      className={selected === ind ? "blue" : "black"}
      onClick={onClick}
    >
      {ind}
    </div>
  );
};

export default PageCell;
