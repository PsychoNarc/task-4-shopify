import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import "./Navbar.css";

const STYLES = ["navLinks-white", "navLinks-black"];

export const Navbar = ({ navStyle }) => {
  const checkNavStyle = STYLES.includes(navStyle) ? navStyle : STYLES[0];

  let imageUrl = "";
  if (checkNavStyle === "navLinks-white") {
    imageUrl = "../assets/img/logo2.webp";
  } else {
    imageUrl = "../assets/img/logo-black.webp";
  }
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navBar fixed-top">
        <Link to="/" className="navbar-logo">
          <img className="logo" src={imageUrl} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "navMenu active" : "navMenu"}>
          <li className="navItem">
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              Catalogue
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              Wishlist
            </Link>
          </li>
          <li
            className="navItem"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              Help <i className="fa fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="navItem">
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              Buy Now
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              <i className="fa fa-search"></i>
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/"
              className={`${checkNavStyle}`}
              onClick={closeMobileMenu}
            >
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
