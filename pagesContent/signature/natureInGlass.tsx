import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NatureInGlass = () => {
  return (
    <section id="seventh-section" className=" section common-section common-bg">
      <div className="container">
        <div className="seventh-container position-relative">
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            className="position-absolute top-left"
          >
            <LazyLoadImage 
              src="/assets/images/seven-top-left.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            className="position-absolute top-right"
          >
            <LazyLoadImage 
              src="/assets/images/seven-top-right.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            style={{ height: "100%" }}
          >
            <div className="content">
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
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            className="position-absolute middle-arrow"
          >
            <LazyLoadImage  src="/assets/images/Arrow.webp" alt="img" width="100%" />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            className="position-absolute bottom-left"
          >
            <LazyLoadImage 
              src="/assets/images/seven-bottom-left.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            className="position-absolute bottom-right"
          >
            <LazyLoadImage 
              src="/assets/images/seven-bottom-right.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default NatureInGlass;
