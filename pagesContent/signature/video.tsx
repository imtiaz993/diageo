import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Video = () => {
  return (
    <div className="common-section video-section">
      <div className="video-container">
        <video
          id="video-play"
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
      </div>
    </div>
  );
};

export default Video;
