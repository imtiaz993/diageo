import React from "react";

const NatureInGlass = () => {
  return (
    <section
      id="seventh-section"
      className="lazy section common-section common-bg"
    >
      <div className="container">
        <div className="seventh-container position-relative">
          <img
            src="/assets/images/seven-top-left.webp"
            alt="img"
            className="lazy top-left wow "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="6000"
          />
          <img
            src="/assets/images/seven-top-right.webp"
            alt="img"
            className="lazy top-right wow "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="6000"
          />
          <div
            className="content wow "
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h2 className="gothic text-lightgreen common-heading-2">
              nature in a glass
            </h2>
            <p className="roboto common-p text-whitealter">
              Experience the beauty of nature in every sip with these special
              curations crafted by the world’s top mixologists. Made with only
              the finest-locally sourced ingredients that celebrate natural
              flavors and aromas of the earth.
            </p>
          </div>
          <img
            src="/assets/images/Arrow.webp"
            alt="img"
            className="lazy middle-arrow wow "
            data-aos="fade-up"
            data-aos-duration="6000"
            data-aos-delay="100"
            data-aos-once="true"
          />
          <img
            src="/assets/images/seven-bottom-left.webp"
            alt="img"
            className="lazy bottom-left wow "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="6000"
          />
          <img
            src="/assets/images/seven-bottom-right.webp"
            alt="img"
            className="lazy bottom-right wow "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="6000"
          />
        </div>
      </div>
    </section>
  );
};

export default NatureInGlass;
