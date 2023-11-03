import React from "react";

const GrainToGlass = () => {
  return (
    <section
      id="sixth-section"
      className="lazy section common-section common-bg"
    >
      <img
        src="/assets/images/close-video.svg"
        className="position-absolute close-video"
        alt="close-btn"
      />
      <video
        className="lazy d-none"
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
          <a href="/assets/videos/sixth-video.mp4">link to the video</a> instead.
        </p>
      </video>
      <div className="container position-relative">
        <img
          src="/assets/images/sixth-top.webp"
          alt="img"
          className="lazy position-absolute sixth-top wow "
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-delay="100"
          data-aos-once="true"
        />
        <div
          className="sixth-container wow "
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <h2 className="gothic text-lightgreen text-center common-heading-2">
            grain to glass
          </h2>
          <p className="roboto common-p text-whitealter">
            From the careful sourcing of organic, locally grown grains to the
            use of energy-efficient distillation methods, sustainability is
            always at the forefront. The result? A sustainably produced whiskey,
            from grain to glass. So, sip and savour this sublime concoction,
            knowing that it was crafted with a commitment to both taste and the
            planet.
          </p>
        </div>
        <img
          src="/assets/images/play.svg"
          alt="img"
          className="lazy position-absolute play-btn wow "
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-delay="300"
          data-aos-once="true"
        />
        <img
          src="/assets/images/sixth-bottom-left.webp"
          alt="img"
          className="lazy position-absolute sixth-bottom-left wow "
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-delay="400"
          data-aos-once="true"
        />
        <img
          src="/assets/images/sixth-bottom-right.webp"
          alt="img"
          className="lazy position-absolute sixth-bottom-right wow "
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-delay="500"
          data-aos-once="true"
        />
        <img
          src="/assets/images/sixth-bottom-right-2.webp"
          alt="img"
          className="lazy position-absolute sixth-bottom-right-2 wow "
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-delay="600"
          data-aos-once="true"
        />
      </div>
    </section>
  );
};

export default GrainToGlass;
