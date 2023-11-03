import React from "react";

const Header = () => {
  return (
    <header id="header-section">
      <div className="logo">
        <img className="lazy" src="/assets/images/logo.svg" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#second-section" className="bebas">
            Our Master Blender
          </a>
        </li>
        <li>
          <a href="#fourth-section" className="bebas">
            Products
          </a>
        </li>
        <li>
          <a href="#sixth-section" className="bebas">
            Grain To Glass
          </a>
        </li>
        <li>
          <a href="#eighth-section" className="bebas">
            Recipes
          </a>
        </li>
        <li>
          <a href="#ninth-section" className="bebas">
            Our mixologists
          </a>
        </li>
      </ul>

      <div id="menu">
        <img
          className="lazy"
          src="/assets/images/ham-menu.svg"
          alt="ham-menu"
        />
      </div>
    </header>
  );
};

export default Header;
