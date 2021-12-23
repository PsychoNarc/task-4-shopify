import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const MenuItems = [
  { title: "Contact", path: "/pages/contact", cName: "dropdownLink" },
  { title: "Shipping & Returns", path: "/pages/shipping-returns", cName: "dropdownLink" },
  { title: "Gift Cards", path: "/", cName: "dropdownLink" },
];

export const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdownMenu clicked" : "dropdownMenu"}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
