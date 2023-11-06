import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ThinkGreenDrinkGreen = () => {
  return (
    <section id="tenth-section" className=" section common-section common-bg">
      <div className="container">
        <div className="tenth-container">
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.1}
            className="position-absolute remove-effect top-left "
          >
            <LazyLoadImage 
              src="/assets/images/tenth-top-left.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.3}
            className="position-absolute remove-effect top-right "
          >
            <LazyLoadImage 
              src="/assets/images/tenth-top-right.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            className="remove-effect"
            style={{ height: "100%" }}
          >
            <div className="remove-effect content ">
              <h2 className="gothic text-lightgreen common-heading-2 text-center">
                Think green drink green
              </h2>
              <p className="common-p text-whitealter">
                We take pride in using thoughtfully sourced, sustainable
                materials to serve our drinks. From paper straws to recycled
                drinkware, we minimize waste without compromising on pizzazz.
                Our commitment to conservation extends to our innovative
                recycling and composting systems, ensuring that nothing goes to
                waste. Join us for a guilt-free drinking experience that's kind
                to both the planet and your taste buds. Cheers to a greener
                future, one drink at a time!
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.3}
            className="position-absolute remove-effect bottom-left "
          >
            <LazyLoadImage 
              src="/assets/images/tenth-bottom-left.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce={true}
            duration={2}
            delay={0.4}
            className="position-absolute remove-effect bottom-right "
          >
            <LazyLoadImage 
              src="/assets/images/tenth-bottom-right.webp"
              alt="img"
              width="100%"
            />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ThinkGreenDrinkGreen;
