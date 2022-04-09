import React from "react";
import "./Button.css";
const Button = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div
      className={`button-wrapper flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {buttonText}
    </div>
  );
};

export default Button;
