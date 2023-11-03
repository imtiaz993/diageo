import React from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("@ntegral/react-owl-carousel"), {
  ssr: false,
});

const ninthOpt = {
  items: 1,
  margin: 50,
  loop: !0,
  nav: !1,
  dots: !0,
  autoplay: !0,
  autoplayTimeout: 4e3,
  smartSpeed: 1e3,
  animateOut: "slideOutLeft",
  animateIn: "slideInRight",
};

const OurMixologists = () => {
  return (
    <section id="ninth-section" className="lazy section common-section">
      <div className="container">
        <div className="ninth-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <h2 className="gothic text-greenish common-heading-2 text-center">
                  OUR MIXOLOGISTS
                </h2>
                <p className="common-p roboto700 text-greenish">
                  Our mixologists elevate libations to liquid art, crafting
                  unforgettable cocktails and drinks that galvanize the senses.
                </p>
              </div>
            </div>

            <div className="col-lg-6 p-3">
              <div className="ninth-carousel">
                <OwlCarousel className="owl-theme" {...ninthOpt}>
                  <div className="item">
                    <div className="ninth-carousel-item">
                      <video
                        className="lazy ninth-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/assets/images/ninth-top.webp"
                      >
                        <source
                          src="/assets/videos/ninth-top.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/ninth-top.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/ninth-top.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                    </div>
                  </div>
                  <div className="item">
                    <div className="ninth-carousel-item">
                      <video
                        className="lazy ninth-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/assets/images/ninth-bottom-left.webp"
                      >
                        <source
                          src="/assets/videos/ninth-bottom-left.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/ninth-bottom-left.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/ninth-bottom-left.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                    </div>
                  </div>
                  <div className="item">
                    <div className="ninth-carousel-item">
                      <video
                        className="lazy ninth-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/assets/images/ninth-bottom-right.webp"
                      >
                        <source
                          src="/assets/videos/ninth-bottom-right.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/ninth-bottom-right.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/ninth-bottom-right.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                    </div>
                  </div>
                </OwlCarousel>
              </div>

              <div className="right">
                <div className="video-top">
                  <div className="col-12 p-0">
                    <div className="top">
                      <video
                        className="lazy"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/assets/images/ninth-top.webp"
                      >
                        <source
                          src="/assets/videos/ninth-top.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/videos/ninth-top.webm"
                          type="video/webm"
                        />
                        <p>
                          Your browser doesn't support HTML video. Here is a
                          <a href="/assets/videos/ninth-top.mp4">
                            link to the video
                          </a>{" "}
                          instead.
                        </p>
                      </video>
                    </div>
                  </div>
                </div>
                <div className="video-bottom pt-1">
                  <div className="row">
                    <div className="col-7 p-0">
                      <div className="bottom-left">
                        <video
                          className="lazy"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                          poster="/assets/images/ninth-bottom-left.webp"
                        >
                          <source
                            src="/assets/videos/ninth-bottom-left.mp4"
                            type="video/mp4"
                          />
                          <source
                            src="/assets/videos/ninth-bottom-left.webm"
                            type="video/webm"
                          />
                          <p>
                            Your browser doesn't support HTML video. Here is a
                            <a href="/assets/videos/ninth-bottom-left.mp4">
                              link to the video
                            </a>{" "}
                            instead.
                          </p>
                        </video>
                      </div>
                    </div>
                    <div className="col-5 p-0">
                      <div className="bottom-right">
                        <video
                          className="lazy"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                          poster="/assets/images/ninth-bottom-right.webp"
                        >
                          <source
                            src="/assets/videos/ninth-bottom-right.mp4"
                            type="video/mp4"
                          />
                          <source
                            src="/assets/videos/ninth-bottom-right.webm"
                            type="video/webm"
                          />
                          <p>
                            Your browser doesn't support HTML video. Here is a
                            <a href="/assets/videos/ninth-bottom-right.mp4">
                              link to the video
                            </a>{" "}
                            instead.
                          </p>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMixologists;
