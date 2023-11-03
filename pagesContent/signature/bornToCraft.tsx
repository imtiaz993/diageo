import React from "react";

const BornToCraft = () => {
  return (
    <section id="third-section" className="section common-section">
      <video
        className="lazy"
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/assets/images/born-of-craft.webp"
      >
        <source src="/assets/videos/born-of-craft.mp4" type="video/mp4" />
        <source src="/assets/videos/born-of-craft.webm" type="video/webm" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="/assets/videos/born-of-craft.mp4">link to the video</a>{" "}
          instead.
        </p>
      </video>
      <div className="container">
        <div className="third-container">
          <h2 className="gothic text-lightgreen common-heading-1">
            Born of craft
          </h2>
          <p className="roboto common-p text-white">
            Signature is a creation of natural ingredients- Nature's finest,
            barley, fresh water and 10 imported scotches harmonize to become
            one. They are blended with aged Indian malts and fine grain spirits.
            Even the bottle is made from recycled glass.
          </p>
          <img className="lazy" src="/assets/images/qr.webp" alt="qr-img" />
          <span className="bebas text-white">scan the qr code for more</span>
        </div>
      </div>
    </section>
  );
};

export default BornToCraft;
