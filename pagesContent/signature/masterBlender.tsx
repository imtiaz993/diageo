import React from "react";
import dynamic from "next/dynamic";
import { AnimationOnScroll } from "react-animation-on-scroll";

const OwlCarousel = dynamic(() => import("@ntegral/react-owl-carousel"), {
  ssr: false,
});

const options = {
  items: 1,
  margin: 30,
  loop: !0,
  nav: !1,
  dots: !0,
  autoplay: !0,
  autoplayTimeout: 4e3,
  smartSpeed: 2e3,
  responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
};

const MasterBlender = () => {
  return (
    <section
      id="second-section"
      className="section common-section common-bg lazy"
    >
      <div className="container">
        <div className="second-container">
          <div className="row">
            <div className="col-xl-5">
              <AnimationOnScroll
                animateIn="animate__fadeInUpBig"
                animateOnce={true}
                duration={2}
                delay={0.1}
              ></AnimationOnScroll>
              <div
                className="left position-relative wow "
                data-aos="fade-down"
                data-aos-duration="6000"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <h2 className="gothic text-lightgreen common-heading-1">
                  the signature of our master blender{" "}
                </h2>
                <p className="common-p text-whitealter">
                  In the skilled hands of Louise Martin, our Master Blender, the
                  new Signature attains a level of perfection that is truly
                  remarkable. Her meticulous craftsmanship infuses every sip of
                  these exquisite blends with a sense of revelation, offering a
                  remarkably smooth and delightfully rich experience.{" "}
                </p>
                <img
                  className="lazy"
                  src="/assets/images/sign.webp"
                  alt="sign img"
                />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="right first-carousel">
                <OwlCarousel className="owl-theme" {...options}>
                  <div className="item">
                    <div className="img-container-1">
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-1-top-left.webp"
                        alt="img"
                        className="lazy wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="100"
                        data-aos-once="true"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-1-top-right.webp"
                        alt="img"
                        className="lazy wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="200"
                        data-aos-once="true"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-1-middle-left.webp"
                        alt="img"
                        className="lazy wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="300"
                        data-aos-once="true"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <video
                        className="lazy middle wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="400"
                        data-aos-once="true"
                        autoPlay
                        playsInline
                        loop
                        muted
                        preload="none"
                        poster="/assets/images/carousel-1-middle.webp"
                      >
                        <source
                          src="/assets/videos/carousel-1-middle.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/carousel-1-middle.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/carousel-1-middle.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-1-middle-right.webp"
                        alt="img"
                        className="lazy wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="500"
                        data-aos-once="true"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="lazy bottom-left opacity-75 wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="600"
                        data-aos-once="true"
                        preload="none"
                        poster="/assets/images/born-of-craft-carousel.webp"
                      >
                        <source
                          src="/assets/videos/born-of-craft.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/born-of-craft.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/born-of-craft.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-1-bottom-right.webp"
                        alt="img"
                        className="lazy wow "
                        data-aos="fade-up"
                        data-aos-duration="6000"
                        data-aos-delay="600"
                        data-aos-once="true"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="img-container-2">
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-2-top-left.webp"
                        alt="img"
                        data-aos="fade-right"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-2-top-left-2.webp"
                        alt="img"
                        data-aos="fade-right"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-2-middle.webp"
                        alt="img"
                        data-aos="fade-right"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <video
                        className="bottom-left opacity-75"
                        autoPlay
                        muted
                        loop
                        playsInline
                        data-aos="fade-right"
                        preload="none"
                        poster="/assets/images/carousel-2-video.webp"
                      >
                        <source
                          src="/assets/videos/carousel-2-video.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/carousel-2-video.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/carousel-2-video.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-2-bottom-left-2.webp"
                        alt="img"
                        data-aos="fade-right"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-2-bottom-right.webp"
                        alt="img"
                        data-aos="fade-right"
                      />
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce={true}
                        duration={2}
                        delay={0.1}
                      ></AnimationOnScroll>
                      <img
                        src="/assets/images/carousel-2-bottom-right-2.webp"
                        alt="img"
                        data-aos="fade-right"
                      />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterBlender;
