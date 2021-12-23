import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

const STYLES = ["button-primary", "button-secondary", "button-outline"];
const SIZES = ["button-medium", "button-large"];

export const Buttons = ({ to, children, buttonStyle, buttonSize }) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link className={`button-custom ${checkBtnStyle} ${checkBtnSize}`} to={to}>
      {children}
    </Link>
  );
};
