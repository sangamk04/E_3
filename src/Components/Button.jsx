import { useState } from "react";
import "./Button.css";

export const Button = ({ colorScheme, variant, size, label,fn }) => {
  return (
    <button
      data-testid="cbtn"
      className={`btn ${colorScheme || "white"} ${variant || null} ${
        size || "md"
      }`}
      onClick={()=> fn()}
    >
      {label}
    </button>
  );
};
