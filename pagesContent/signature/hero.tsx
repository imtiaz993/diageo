import React from "react";

const Hero = () => {
  return (
    <section id="home-section" className="section common-section">
      <div className="home-container">
        <img
          className="bg-img lazy"
          src="/assets/images/firstbg.svg"
          alt="img"
        />

        <div className="content container lazy">
          <div className="text-section">
            <h1 className="gothic text-white common-heading-1">
              CRAFTED FROM NATURE
              <span className="leaf position-relative">
                <img
                  className="position-absolute"
                  src="/assets/images/leaf.svg"
                  alt="leaf"
                />
              </span>
            </h1>
            <p className="common-p text-white">
              Welcome to the world of Signature. Setting out a bold vision to be
              India’s Green Whisky, the all-new Signature is as authentic &
              natural as it gets. Our whisky is an exquisite blend of nature’s
              finest ingredients - two row & six row strains of barley, fresh
              water and fine grain spirits imported from Scottish highlands and
              spey-side. Crafted with perfection by our Master Blender Louise
              Martin, it is truly unique, full of character & bound to leave a
              lasting signature. Taste of Nature in a Glass!
            </p>
            <img
              src="/assets/images/symbol.svg"
              alt="img"
              className="symbol-img lazy wow "
              data-aos="fade-up"
              data-aos-duration="6000"
              data-aos-delay="500"
              data-aos-once="true"
            />
            <a
              aria-label="View Recipes"
              href="#eighth-section"
              className="bg-deepgreen text-lightgreen bebas common-btn view-recipe-btn"
            >
              VIEW RECIPES
            </a>
          </div>
        </div>

        <img
          className="bottom-img lazy"
          src="/assets/images/bottom.webp"
          alt="img"
        />

        <div className="popup">
          <div className="popup-container">
            <img
              className="popup-close lazy"
              src="/assets/images/close.svg"
              alt="close-icon"
            />
            <div className="popup-top">
              <img className="lazy" src="/assets/images/glass.svg" alt="img" />
              <h2 className="gothic text-greenish">purchase online</h2>
            </div>
            <ul className="popup-middle">
              <li>
                <a href="https://www.swiggy.com/" target="_blank">
                  <img
                    className="img lazy"
                    src="/assets/images/swiggy.svg"
                    alt="swiggy-icon"
                  />
                  <div className="roboto text text-uppercase">swiggy</div>
                </a>
              </li>
            </ul>
            <div className="popup-bottom">
              <p className="roboto">
                Home delivery of alcohol products is only applicable in West
                Bengal and Odisha.
              </p>
            </div>
          </div>
        </div>

        <div className="popup-btn active">
          <div className="popup-btn-container">
            <img
              src="/assets/images/glass-btn.webp"
              alt="img"
              className="img-fluid lazy"
            />
            <h2 className="gothic text-greenish">purchase online</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
