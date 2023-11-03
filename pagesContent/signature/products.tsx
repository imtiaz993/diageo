import React from "react";

const Products = () => {
  return (
    <section
      id="fourth-section"
      className="lazy section common-section common-bg"
    >
      <div className="container">
        <div className="fourth-container">
          <div className="row">
            <div className="col-xl-6">
              <div className="left" data-aos-duration="6000">
                <img
                  src="/assets/images/bottle.webp"
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
                  muted
                  loop
                  playsInline
                  data-aos-delay="200"
                  data-aos-once="true"
                  preload="none"
                  poster="/assets/images/fourth-video.webp"
                >
                  <source
                    src="/assets/videos/fourth-video.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/assets/videos/fourth-video.webm"
                    type="video/webm"
                  />
                  <p>
                    Your browser doesn't support HTML video. Here is a
                    <a href="/assets/videos/fourth-video.mp4">
                      link to the video
                    </a>{" "}
                    instead.
                  </p>
                </video>
                <img
                  src="/assets/images/fourth-middle.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="fade-up"
                  data-aos-duration="6000"
                  data-aos-delay="300"
                  data-aos-once="true"
                />
                <img
                  src="/assets/images/fourth-bottom-left.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="zoom-in"
                  data-aos-duration="6000"
                  data-aos-delay="400"
                  data-aos-once="true"
                />
                <img
                  src="/assets/images/fourth-bottom-right.webp"
                  alt="img"
                  className="lazy wow "
                  data-aos="zoom-in"
                  data-aos-duration="6000"
                  data-aos-delay="500"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="right wow "
                data-aos="fade-up"
                data-aos-duration="6000"
                data-aos-once="true"
              >
                <h2 className="gothic text-lightgreen common-heading-1">
                  signature premier whisky
                </h2>
                <span className="din text-orangish text-uppercase">
                  Smooth & Creamy
                </span>
                <p className="text-whitealter common-p">
                  Signature Premier Whisky Gives a perfect smooth and creamy
                  taste that's elevated sensorially with silky honey, a dash of
                  fruitiness & tinge of Maltiness. An exquisite Scotch
                  selection, Signature Premier is a blend of Natural Ingredients
                  10 Imported Scotches, Aged Indian Malts & Fine Grain
                  Spirits.The fine ingredients are purposefully selected to
                  bring out a remarkably creamy character
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
