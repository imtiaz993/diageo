import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RareAgedWhisky = () => {
  return (
    <section
      id="fifth-section"
      className="lazy section common-section common-bg"
    >
      <div className="container">
        <div className="fifth-container">
          <div className="row">
            <div className="col-xl-6 order-xl-1 order-2">
              <div
                className="left wow "
                data-aos="fade-up"
                data-aos-duration="6000"
                data-aos-once="true"
              >
                <h2 className="gothic text-lightgreen common-heading-1">
                  signature rare aged whisky
                </h2>
                <span className="din text-orangish text-uppercase">
                  deep & rich
                </span>
                <p className="common-p text-whitealter">
                  Signature Rare Whisky gives a perfect Taste that’s DEEP & RICH
                  An authentically rich taste, with Notes of Dried Fruits & a
                  nutty Aroma. A 3 Grain Whisky with Imported Scotch, Aged
                  Indian Malts and Grain Spirits.The fine ingredients are
                  purposefully sourced to bring out a remarkably rich character
                </p>
              </div>
            </div>
            <div className="col-xl-6 order-xl-2 order-1">
              <div className="right">
                <LazyLoadImage 
                  src="/assets/images/bottle-2.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="fade-up"
                  data-aos-duration="6000"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
                <video
                  className="lazy wow opacity-75"
                  data-aos="fade-up"
                  data-aos-duration="6000"
                  autoPlay
                  playsInline
                  loop
                  muted
                  data-aos-delay="200"
                  data-aos-once="true"
                  preload="none"
                  poster="/assets/images/fifth-video.webp"
                >
                  <source
                    src="/assets/videos/fifth-video.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/assets/videos/fifth-video.webm"
                    type="video/webm"
                  />
                  <p>
                    Your browser doesn't support HTML video. Here is a
                    <a href="/assets/videos/fifth-video.mp4">
                      link to the video
                    </a>{" "}
                    instead.
                  </p>
                </video>
                <LazyLoadImage 
                  src="/assets/images/fifth-bottom-left.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="fade-right"
                  data-aos-duration="6000"
                  data-aos-delay="300"
                  data-aos-once="true"
                />
                <LazyLoadImage 
                  src="/assets/images/fifth-bottom-left-2.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="fade-up"
                  data-aos-duration="6000"
                  data-aos-delay="400"
                  data-aos-once="true"
                />
                <LazyLoadImage 
                  src="/assets/images/fifth-bottom-right.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="fade-up"
                  data-aos-duration="6000"
                  data-aos-delay="500"
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RareAgedWhisky;
