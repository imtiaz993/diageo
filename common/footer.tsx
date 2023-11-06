import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <footer id="footer-section" className="section">
      <div className="container">
        <div className="footer-container">
          <div className="row">
            <div className="col-md-6">
              <div className="left">
                <LazyLoadImage 
                  className="lazy"
                  src="/assets/images/bottles.webp"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right">
                <LazyLoadImage  className="lazy" src="/assets/images/logo.svg" alt="img" />
                <h3 className="gothic text-greenish common-heading-1 position-relative">
                  CRAFTED FROM NATURE,{" "}
                  <span className="leaf-green">
                    <LazyLoadImage 
                      className="lazy position-absolute"
                      src="/assets/images/leaf-green.svg"
                      alt="leaf-img"
                    />
                  </span>{" "}
                  my signature
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
