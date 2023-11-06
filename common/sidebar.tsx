import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div id="close">
        <LazyLoadImage 
          className="lazy"
          src="/assets/images/close-btn.svg"
          alt="close-btn"
        />
      </div>
      <div className="header-logo">
        <LazyLoadImage  className="lazy" src="/assets/images/menu-logo.svg" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#second-section" className="bebas sidebar-item">
            Our Master Blender
          </a>
        </li>
        <li>
          <a href="#fourth-section" className="bebas sidebar-item">
            Products
          </a>
        </li>
        <li>
          <a href="#sixth-section" className="bebas sidebar-item">
            Grain To Glass
          </a>
        </li>
        <li>
          <a href="#eighth-section" className="bebas sidebar-item">
            Recipes
          </a>
        </li>
        <li>
          <a href="#ninth-section" className="bebas sidebar-item">
            Our mixologists
          </a>
        </li>
      </ul>
      <div className="menu-btn">
        <a
          href="https://www.instagram.com/signaturegreenvibes/"
          target="_blank"
          className="white bebas"
        >
          <span>
            <LazyLoadImage 
              className="lazy"
              src="/assets/images/menu-instagram.svg"
              alt="logo"
            />
          </span>
          INSTAGRAM
        </a>
        <div>
          <label className="roboto white">© 2023 Diageo</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
