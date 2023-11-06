import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const GrainToGlass = () => {
  return (
    <section id="sixth-section" className=" section common-section common-bg">
      <img
        src="/assets/images/close-video.svg"
        className="position-absolute close-video"
        alt="close-btn"
      />
      <video
        className=" d-none"
        controls
        loop
        muted
        playsInline
        preload="none"
        poster="/assets/images/sixth-video.webp"
      >
        <source src="/assets/videos/sixth-video.mp4" type="video/mp4" />
        <source src="/assets/videos/sixth-video.webm" type="video/webm" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="/assets/videos/sixth-video.mp4">link to the video</a>{" "}
          instead.
        </p>
      </video>
      <div className="container position-relative">
        <AnimationOnScroll
          animateIn="animate__fadeInUpBig"
          animateOnce={true}
          duration={2}
          delay={0.1}
          className="position-absolute sixth-top"
        >
          <img src="/assets/images/sixth-top.webp" alt="img" width="100%" />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUpBig"
          animateOnce={true}
          duration={2}
          delay={0.2}
          style={{ height: "100%" }}
        >
          <div className="sixth-container">
            <h2 className="gothic text-lightgreen text-center common-heading-2">
              grain to glass
            </h2>
            <p className="roboto common-p text-whitealter">
              From the careful sourcing of organic, locally grown grains to the
              use of energy-efficient distillation methods, sustainability is
              always at the forefront. The result? A sustainably produced
              whiskey, from grain to glass. So, sip and savour this sublime
              concoction, knowing that it was crafted with a commitment to both
              taste and the planet.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUpBig"
          animateOnce={true}
          duration={2}
          delay={0.3}
          className="position-absolute play-btn"
        >
          <img src="/assets/images/play.svg" alt="img" width="100%" />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUpBig"
          animateOnce={true}
          duration={2}
          delay={0.4}
          className="position-absolute sixth-bottom-left"
        >
          <img
            src="/assets/images/sixth-bottom-left.webp"
            alt="img"
            width="100%"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUpBig"
          animateOnce={true}
          duration={2}
          delay={0.5}
          className="position-absolute sixth-bottom-right"
        >
          <img
            src="/assets/images/sixth-bottom-right.webp"
            alt="img"
            width="100%"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUpBig"
          animateOnce={true}
          duration={2}
          delay={0.6}
          className="position-absolute sixth-bottom-right-2"
        >
          <img
            src="/assets/images/sixth-bottom-right-2.webp"
            alt="img"
            width="100%"
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default GrainToGlass;
