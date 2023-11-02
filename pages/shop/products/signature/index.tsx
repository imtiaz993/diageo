import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import Loader from "../../../../components/loader";
import { useEffect } from "react";
import { jQuery } from "../../../../public";

// const WOW = dynamic(() => import("wow.js"), {
//   ssr: false,
// });
// const WOW1 = dynamic(() => import("wowjs"), {
//   ssr: false,
// });

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
const tabOpt = {
  items: 1,
  loop: !0,
  nav: !1,
  dots: !1,
  margin: 30,
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1e3: { items: 2 },
  },
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      jQuery();

    }

  }, []);
  return (
    <div>
      <Head>
        <title>Signature | Product</title>
      </Head>

      <Loader />
      <div className="wrapper">
        <div className="sidebar">
          <div id="close">
            <img
              className="lazy"
              src="/assets/images/close-btn.svg"
              alt="close-btn"
            />
          </div>
          <div className="header-logo">
            <img
              className="lazy"
              src="/assets/images/menu-logo.svg"
              alt="logo"
            />
          </div>
          <ul>
            <li>
              <a href="#second-section" className="bebas sidebar-item">
                Our Master Blender
              </a>
            </li>
            <li>
              <a href="#fourth-section" className="bebas sidebar-item">
                Products
              </a>
            </li>
            <li>
              <a href="#sixth-section" className="bebas sidebar-item">
                Grain To Glass
              </a>
            </li>
            <li>
              <a href="#eighth-section" className="bebas sidebar-item">
                Recipes
              </a>
            </li>
            <li>
              <a href="#ninth-section" className="bebas sidebar-item">
                Our mixologists
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <a
              href="https://www.instagram.com/signaturegreenvibes/"
              target="_blank"
              className="white bebas"
            >
              <span>
                <img
                  className="lazy"
                  src="/assets/images/menu-instagram.svg"
                  alt="logo"
                />
              </span>
              INSTAGRAM
            </a>
            <div>
              <label className="roboto white">© 2023 Diageo</label>
            </div>
          </div>
        </div>

        <header id="header-section">
          <div className="logo">
            <img className="lazy" src="/assets/images/logo.svg" alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#second-section" className="bebas">
                Our Master Blender
              </a>
            </li>
            <li>
              <a href="#fourth-section" className="bebas">
                Products
              </a>
            </li>
            <li>
              <a href="#sixth-section" className="bebas">
                Grain To Glass
              </a>
            </li>
            <li>
              <a href="#eighth-section" className="bebas">
                Recipes
              </a>
            </li>
            <li>
              <a href="#ninth-section" className="bebas">
                Our mixologists
              </a>
            </li>
          </ul>

          <div id="menu">
            <img
              className="lazy"
              src="/assets/images/ham-menu.svg"
              alt="ham-menu"
            />
          </div>
        </header>

        <section id="home-section" className="section common-section">
          <div className="home-container">
            <img
              className="bg-img lazy"
              src="/assets/images/firstbg.svg"
              alt="img"
            />

            <div className="content container lazy">
              <div className="text-section">
                <h1 className="gothic text-white common-heading-1">
                  CRAFTED FROM NATURE
                  <span className="leaf position-relative">
                    <img
                      className="position-absolute"
                      src="/assets/images/leaf.svg"
                      alt="leaf"
                    />
                  </span>
                </h1>
                <p className="common-p text-white">
                  Welcome to the world of Signature. Setting out a bold vision
                  to be India’s Green Whisky, the all-new Signature is as
                  authentic & natural as it gets. Our whisky is an exquisite
                  blend of nature’s finest ingredients - two row & six row
                  strains of barley, fresh water and fine grain spirits imported
                  from Scottish highlands and spey-side. Crafted with perfection
                  by our Master Blender Louise Martin, it is truly unique, full
                  of character & bound to leave a lasting signature. Taste of
                  Nature in a Glass!
                </p>
                <img
                  src="/assets/images/symbol.svg"
                  alt="img"
                  className="symbol-img lazy wow " data-aos="fade-up"
                  data-aos-duration="4000"
                  data-aos-delay="500"
                />
                <a
                  aria-label="View Recipes"
                  href="#eighth-section"
                  className="bg-deepgreen text-lightgreen bebas common-btn view-recipe-btn"
                >
                  VIEW RECIPES
                </a>
              </div>
            </div>

            <Image
              className="bottom-img lazy"
              src="/assets/images/bottom.webp"
              alt="img"
              layout="fill"
              objectFit="cover"
            />

            <div className="popup">
              <div className="popup-container">
                <img
                  className="popup-close lazy"
                  src="/assets/images/close.svg"
                  alt="close-icon"
                />
                <div className="popup-top">
                  <img
                    className="lazy"
                    src="/assets/images/glass.svg"
                    alt="img"
                  />
                  <h2 className="gothic text-greenish">purchase online</h2>
                </div>
                <ul className="popup-middle">
                  <li>
                    <a href="https://www.swiggy.com/" target="_blank">
                      <img
                        className="img lazy"
                        src="/assets/images/swiggy.svg"
                        alt="swiggy-icon"
                      />
                      <div className="roboto text text-uppercase">swiggy</div>
                    </a>
                  </li>
                </ul>
                <div className="popup-bottom">
                  <p className="roboto">
                    Home delivery of alcohol products is only applicable in West
                    Bengal and Odisha.
                  </p>
                </div>
              </div>
            </div>

            <div className="popup-btn active">
              <div className="popup-btn-container">
                <img
                  src="/assets/images/glass-btn.webp"
                  alt="img"
                  className="img-fluid lazy"
                />
                <h2 className="gothic text-greenish">purchase online</h2>
              </div>
            </div>
          </div>
        </section>

        <section
          id="second-section"
          data-bg="/assets/images/greenbg.svg"
          className="section common-section common-bg lazy"
        >
          <div className="container">
            <div className="second-container">
              <div className="row">
                <div className="col-xl-5">
                  <div
                    className="left position-relative wow " data-aos="fade-down"
                    data-aos-duration="4000"
                    data-aos-delay="100"
                  >
                    <h2 className="gothic text-lightgreen common-heading-1">
                      the signature of our master blender{" "}
                    </h2>
                    <p className="common-p text-whitealter">
                      In the skilled hands of Louise Martin, our Master Blender,
                      the new Signature attains a level of perfection that is
                      truly remarkable. Her meticulous craftsmanship infuses
                      every sip of these exquisite blends with a sense of
                      revelation, offering a remarkably smooth and delightfully
                      rich experience.{" "}
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
                          <img
                            src="/assets/images/carousel-1-top-left.webp"
                            alt="img"
                            className="lazy wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="100"
                          />
                          <img
                            src="/assets/images/carousel-1-top-right.webp"
                            alt="img"
                            className="lazy wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="200"
                          />
                          <img
                            src="/assets/images/carousel-1-middle-left.webp"
                            alt="img"
                            className="lazy wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="300"
                          />
                          <video
                            className="lazy middle wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="400"
                            autoPlay
                            playsInline
                            loop
                            muted
                            preload="none"
                            poster="/assets/images/carousel-1-middle.webp"
                          >
                            <source
                              src="assets/videos/carousel-1-middle.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/carousel-1-middle.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/carousel-1-middle.mp4">
                                link to the video
                              </a>{" "}
                              instead.
                            </p>
                          </video>
                          <img
                            src="/assets/images/carousel-1-middle-right.webp"
                            alt="img"
                            className="lazy wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="500"
                          />
                          <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="lazy bottom-left opacity-75 wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="600"
                            preload="none"
                            poster="/assets/images/born-of-craft-carousel.webp"
                          >
                            <source
                              src="assets/videos/born-of-craft.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/born-of-craft.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/born-of-craft.mp4">
                                link to the video
                              </a>{" "}
                              instead.
                            </p>
                          </video>
                          <img
                            src="/assets/images/carousel-1-bottom-right.webp"
                            alt="img"
                            className="lazy wow " data-aos="fade-up"
                            data-aos-duration="4000"
                            data-aos-delay="600"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="img-container-2">
                          <img
                            src="/assets/images/carousel-2-top-left.webp"
                            alt="img"
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-top-left-2.webp"
                            alt="img"
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-middle.webp"
                            alt="img"
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <video
                            className="bottom-left opacity-75"
                            autoPlay
                            muted
                            loop
                            playsInline
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
                            preload="none"
                            poster="/assets/images/carousel-2-video.webp"
                          >
                            <source
                              src="assets/videos/carousel-2-video.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/carousel-2-video.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/carousel-2-video.mp4">
                                link to the video
                              </a>{" "}
                              instead.
                            </p>
                          </video>
                          <img
                            src="/assets/images/carousel-2-bottom-left-2.webp"
                            alt="img"
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-bottom-right.webp"
                            alt="img"
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-bottom-right-2.webp"
                            alt="img"
                            data-aos="fade-right"
                            data-animation-out="animate-out fadeOutLeft"
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
            <source src="assets/videos/born-of-craft.mp4" type="video/mp4" />
            <source src="assets/videos/born-of-craft.webm" type="video/webm" />
            <p>
              Your browser doesn't support HTML video. Here is a
              <a href="assets/videos/born-of-craft.mp4">link to the video</a>{" "}
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
                one. They are blended with aged Indian malts and fine grain
                spirits. Even the bottle is made from recycled glass.
              </p>
              <img className="lazy" src="/assets/images/qr.webp" alt="qr-img" />
              <span className="bebas text-white">
                scan the qr code for more
              </span>
            </div>
          </div>
        </section>

        <section
          id="fourth-section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common-section common-bg"
        >
          <div className="container">
            <div className="fourth-container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="left" data-aos-duration="4000">
                    <img
                      src="/assets/images/bottle.webp"
                      alt="img"
                      className="lazy wow " data-aos="fade-up"
                      data-aos-duration="4000"
                      data-aos-delay="100"
                    />
                    <video
                      className="lazy wow opacity-75"
                      data-aos="fade-up"
                      data-aos-duration="4000"
                      autoPlay
                      muted
                      loop
                      playsInline
                      data-aos-delay="200"
                      preload="none"
                      poster="/assets/images/fourth-video.webp"
                    >
                      <source
                        src="assets/videos/fourth-video.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="assets/videos/fourth-video.webm"
                        type="video/webm"
                      />
                      <p>
                        Your browser doesn't support HTML video. Here is a
                        <a href="assets/videos/fourth-video.mp4">
                          link to the video
                        </a>{" "}
                        instead.
                      </p>
                    </video>
                    <img
                      src="/assets/images/fourth-middle.webp"
                      alt="img"
                      className="lazy wow " data-aos="fade-up"
                      data-aos-duration="4000"
                      data-aos-delay="300"
                    />
                    <img
                      src="/assets/images/fourth-bottom-left.webp"
                      alt="img"
                      className="lazy wow " data-aos="zoom-in"
                      data-aos-duration="4000"
                      data-aos-delay="400"
                    />
                    <img
                      src="/assets/images/fourth-bottom-right.webp"
                      alt="img"
                      className="lazy wow " data-aos="zoom-in"
                      data-aos-duration="4000"
                      data-aos-delay="500"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="right wow " data-aos="fade-up" data-aos-duration="4000">
                    <h2 className="gothic text-lightgreen common-heading-1">
                      signature premier whisky
                    </h2>
                    <span className="din text-orangish text-uppercase">
                      Smooth & Creamy
                    </span>
                    <p className="text-whitealter common-p">
                      Signature Premier Whisky Gives a perfect smooth and creamy
                      taste that's elevated sensorially with silky honey, a dash
                      of fruitiness & tinge of Maltiness. An exquisite Scotch
                      selection, Signature Premier is a blend of Natural
                      Ingredients 10 Imported Scotches, Aged Indian Malts & Fine
                      Grain Spirits.The fine ingredients are purposefully
                      selected to bring out a remarkably creamy character
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="fifth-section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common-section common-bg"
        >
          <div className="container">
            <div className="fifth-container">
              <div className="row">
                <div className="col-xl-6 order-xl-1 order-2">
                  <div className="left wow " data-aos="fade-up" data-aos-duration="4000">
                    <h2 className="gothic text-lightgreen common-heading-1">
                      signature rare aged whisky
                    </h2>
                    <span className="din text-orangish text-uppercase">
                      deep & rich
                    </span>
                    <p className="common-p text-whitealter">
                      Signature Rare Whisky gives a perfect Taste that’s DEEP &
                      RICH An authentically rich taste, with Notes of Dried
                      Fruits & a nutty Aroma. A 3 Grain Whisky with Imported
                      Scotch, Aged Indian Malts and Grain Spirits.The fine
                      ingredients are purposefully sourced to bring out a
                      remarkably rich character
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 order-xl-2 order-1">
                  <div className="right">
                    <img
                      src="/assets/images/bottle-2.webp"
                      alt="img"
                      className="lazy wow " data-aos="fade-up"
                      data-aos-duration="4000"
                      data-aos-delay="100"
                    />
                    <video
                      className="lazy wow opacity-75"
                      data-aos="fade-up"
                      data-aos-duration="4000"
                      autoPlay
                      playsInline
                      loop
                      muted
                      data-aos-delay="200"
                      preload="none"
                      poster="/assets/images/fifth-video.webp"
                    >
                      <source
                        src="assets/videos/fifth-video.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="assets/videos/fifth-video.webm"
                        type="video/webm"
                      />
                      <p>
                        Your browser doesn't support HTML video. Here is a
                        <a href="assets/videos/fifth-video.mp4">
                          link to the video
                        </a>{" "}
                        instead.
                      </p>
                    </video>
                    <img
                      src="/assets/images/fifth-bottom-left.webp"
                      alt="img"
                      className="lazy wow " data-aos="fade-right"
                      data-aos-duration="4000"
                      data-aos-delay="300"
                    />
                    <img
                      src="/assets/images/fifth-bottom-left-2.webp"
                      alt="img"
                      className="lazy wow " data-aos="fade-up"
                      data-aos-duration="4000"
                      data-aos-delay="400"
                    />
                    <img
                      src="/assets/images/fifth-bottom-right.webp"
                      alt="img"
                      className="lazy wow " data-aos="fade-up"
                      data-aos-duration="4000"
                      data-aos-delay="500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sixth-section"
          data-bg="/assets/images/greenbg.svg"
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
            <source src="assets/videos/sixth-video.mp4" type="video/mp4" />
            <source src="assets/videos/sixth-video.webm" type="video/webm" />
            <p>
              Your browser doesn't support HTML video. Here is a
              <a href="assets/videos/sixth-video.mp4">link to the video</a>{" "}
              instead.
            </p>
          </video>
          <div className="container position-relative">
            <img
              src="/assets/images/sixth-top.webp"
              alt="img"
              className="lazy position-absolute sixth-top wow " data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="100"
            />
            <div
              className="sixth-container wow " data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="200"
            >
              <h2 className="gothic text-lightgreen text-center common-heading-2">
                grain to glass
              </h2>
              <p className="roboto common-p text-whitealter">
                From the careful sourcing of organic, locally grown grains to
                the use of energy-efficient distillation methods, sustainability
                is always at the forefront. The result? A sustainably produced
                whiskey, from grain to glass. So, sip and savour this sublime
                concoction, knowing that it was crafted with a commitment to
                both taste and the planet.
              </p>
            </div>
            <img
              src="/assets/images/play.svg"
              alt="img"
              className="lazy position-absolute play-btn wow " data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="300"
            />
            <img
              src="/assets/images/sixth-bottom-left.webp"
              alt="img"
              className="lazy position-absolute sixth-bottom-left wow " data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="400"
            />
            <img
              src="/assets/images/sixth-bottom-right.webp"
              alt="img"
              className="lazy position-absolute sixth-bottom-right wow " data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="500"
            />
            <img
              src="/assets/images/sixth-bottom-right-2.webp"
              alt="img"
              className="lazy position-absolute sixth-bottom-right-2 wow " data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="600"
            />
          </div>
        </section>

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
              <source src="assets/videos/sixth-video.mp4" type="video/mp4" />
              <source src="assets/videos/sixth-video.webm" type="video/webm" />
              <p>
                Your browser doesn't support HTML video. Here is a
                <a href="assets/videos/sixth-video.mp4">link to the video</a>{" "}
                instead.
              </p>
            </video>
          </div>
        </div>

        <section
          id="seventh-section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common-section common-bg"
        >
          <div className="container">
            <div className="seventh-container position-relative">
              <img
                src="/assets/images/seven-top-left.webp"
                alt="img"
                className="lazy top-left wow " data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="4000"
              />
              <img
                src="/assets/images/seven-top-right.webp"
                alt="img"
                className="lazy top-right wow " data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="4000"
              />
              <div className="content wow " data-aos="fade-up" data-aos-duration="4000">
                <h2 className="gothic text-lightgreen common-heading-2">
                  nature in a glass
                </h2>
                <p className="roboto common-p text-whitealter">
                  Experience the beauty of nature in every sip with these
                  special curations crafted by the world’s top mixologists. Made
                  with only the finest-locally sourced ingredients that
                  celebrate natural flavors and aromas of the earth.
                </p>
              </div>
              <img
                src="/assets/images/Arrow.webp"
                alt="img"
                className="lazy middle-arrow wow " data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="100"
              />
              <img
                src="/assets/images/seven-bottom-left.webp"
                alt="img"
                className="lazy bottom-left wow " data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="4000"
              />
              <img
                src="/assets/images/seven-bottom-right.webp"
                alt="img"
                className="lazy bottom-right wow " data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="4000"
              />
            </div>
          </div>
        </section>

        <section
          id="eighth-section"
          data-bg="/assets/images/eighthbg.svg"
          className="lazy section common-section"
        >
          <div className="tab-section">
            <div className="nav nav-tabs tabs" id="nav-tab" role="tablist">
              <button
                className="tab-button bebas active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Signature Serve
              </button>
              <button
                className="tab-button bebas"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Region Inspired
              </button>
              <button
                className="tab-button bebas"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab-3"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Recipes
              </button>
            </div>
          </div>

          <div
            className="modal fade"
            id="recipe-modal-1"
            tabIndex={-1}
            aria-labelledby="recipe-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal-left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img1.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal-right">
                      <button
                        type="button"
                        className="modal-closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal-label text-greenish gothic">
                        <label>001</label>
                      </div>
                      <div className="modal-heading">
                        <h3 className="text-greenish gothic common-heading-1">
                          signature <br className="breaks" /> premier{" "}
                        </h3>
                      </div>
                      <div className="modal-para">
                        <p className="roboto700 text-greenish common-p">
                          GT Sour is a depiction of that strong cumin element in
                          a sour with the fine full bodied "Signature Premier"
                          defining the versatile classNameic cocktail of the
                          century.
                        </p>
                      </div>
                      <div className="line bg-greenish"></div>
                      <ul className="modal-recipe-container">
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            15 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Roasted Cumin Cordial
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            3 <span className="roboto">drops</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Aromatic Bitters
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            15 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Fresh Lime juice
                          </p>
                        </li>
                        <li className="recipe-method">
                          <p className="common-p roboto700 text-greenish">
                            Method – Shaken with ice and served straight or on
                            the rocks.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="recipe-modal-2"
            tabIndex={-1}
            aria-labelledby="recipe-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal-left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img2.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal-right">
                      <button
                        type="button"
                        className="modal-closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal-label text-greenish gothic">
                        <label>002</label>
                      </div>
                      <div className="modal-heading">
                        <h3 className="text-greenish gothic common-heading-1">
                          signature <br className="breaks" /> rare{" "}
                        </h3>
                      </div>
                      <div className="modal-para">
                        <p className="roboto700 text-greenish common-p">
                          Signature paired with the two most iconic flavours of
                          coffee & coconut along with just the right amount of
                          soda!
                        </p>
                      </div>
                      <div className="line bg-greenish"></div>
                      <ul className="modal-recipe-container">
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Coffee</p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Coconut</p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Soda</p>
                        </li>
                        <li className="recipe-method">
                          <p className="common-p roboto700 text-greenish">
                            Method – Shaken with ice and served straight.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="recipe-modal-3"
            tabIndex={-1}
            aria-labelledby="recipe-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal-left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img3.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal-right">
                      <button
                        type="button"
                        className="modal-closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal-label text-greenish gothic">
                        <label>001</label>
                      </div>
                      <div className="modal-heading">
                        <h3 className="text-greenish gothic common-heading-1 changed-heading">
                          {" "}
                          Filter <br className="breaks" />
                          Coconut <br className="breaks" /> Kappi{" "}
                          <span>(south)</span>
                        </h3>
                      </div>
                      <div className="modal-para">
                        <p className="roboto700 text-greenish common-p">
                          Signature paired with the two most iconic flavours of
                          coffee & coconut along with just the right amount of
                          soda!
                        </p>
                      </div>
                      <div className="line bg-greenish"></div>
                      <ul className="modal-recipe-container">
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Coffee</p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Coconut</p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Soda</p>
                        </li>
                        <li className="recipe-method">
                          <p className="common-p roboto700 text-greenish">
                            Method – Shaken with ice and served straight.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="recipe-modal-4"
            tabIndex={-1}
            aria-labelledby="recipe-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal-left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img4.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal-right">
                      <button
                        type="button"
                        className="modal-closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal-label text-greenish gothic">
                        <label>002</label>
                      </div>
                      <div className="modal-heading">
                        <h3 className="text-greenish gothic common-heading-1 changed-heading">
                          {" "}
                          The <br className="breaks" />
                          Signature <br className="breaks" /> Cutting{" "}
                          <span>(west)</span>
                        </h3>
                      </div>
                      <div className="modal-para">
                        <p className="roboto700 text-greenish common-p">
                          A refreshing end to the weekend with Signature pairing
                          beautifully with Kokum and its two best friends, lime
                          & chili
                        </p>
                      </div>
                      <div className="line bg-greenish"></div>
                      <ul className="modal-recipe-container">
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Black masala tea
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Pineapple
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Touch of jaggery
                          </p>
                        </li>
                        <li className="recipe-method">
                          <p className="common-p roboto700 text-greenish">
                            Method – Shaken with ice and served straight.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="recipe-modal-5"
            tabIndex={-1}
            aria-labelledby="recipe-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal-left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img5.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal-right">
                      <button
                        type="button"
                        className="modal-closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal-label text-greenish gothic">
                        <label>001</label>
                      </div>
                      <div className="modal-heading">
                        <h3 className="text-greenish gothic common-heading-1">
                          Salty <br className="breaks" /> bay{" "}
                        </h3>
                      </div>
                      <div className="modal-para">
                        <p className="roboto700 text-greenish common-p">
                          Complementing the fine aromas is the salty sweet syrup
                          made with Himalayan Pink salt and Palm Candy Sugar
                          making this a whole some cocktail that has a depth of
                          flavors and long-lasting finish.
                        </p>
                      </div>
                      <div className="line bg-greenish"></div>
                      <ul className="modal-recipe-container">
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Signature Premier
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Himalayan Pink Salt & Palm CandySyrup
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Bay Leaf Water
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Lime Juice
                          </p>
                        </li>
                        <li className="recipe-method">
                          <p className="common-p roboto700 text-greenish">
                            Method – Shaken with ice and served straight.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="recipe-modal-6"
            tabIndex={-1}
            aria-labelledby="recipe-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal-left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img6.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal-right">
                      <button
                        type="button"
                        className="modal-closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal-label text-greenish gothic">
                        <label>002</label>
                      </div>
                      <div className="modal-heading">
                        <h3 className="text-greenish gothic common-heading-1">
                          East India <br className="breaks" /> Julep{" "}
                        </h3>
                      </div>
                      <div className="modal-para">
                        <p className="roboto700 text-greenish common-p">
                          The flavours of east in west. Kaffir lime &amp; mint
                          cordial taking you back to a more nostalgic time,
                          topped off with a perfect amount of lime juice.
                        </p>
                      </div>
                      <div className="line bg-greenish"></div>
                      <ul className="modal-recipe-container">
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            45 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Signature Premier
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Mint cordial
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">
                            Fresh lime juice
                          </p>
                        </li>
                        <li className="modal-recipe">
                          <div className="quantity text-greenish gothic">
                            90 <span className="roboto">ml</span>
                          </div>
                          <p className="name common-p text-greenish">Soda</p>
                        </li>
                        <li className="recipe-method">
                          <p className="common-p roboto700 text-greenish">
                            Method – muddled and built over ice in a tall hi
                            ball glass. Garnish with kaffir lime leaf.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-content tab-container" id="nav-tabContent">
            <div
              className="tab-pane active show wow " data-aos="fade-right"
              data-aos-duration="4000"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <OwlCarousel className="owl-theme" {...tabOpt}>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left-img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img1.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel-right">
                        <div className="carousel-content">
                          <div className="text-greenish gothic">
                            <label>001</label>
                          </div>
                          <h3 className="text-greenish gothic common-heading-1">
                            signature <br className="breaks" /> premier{" "}
                          </h3>
                          <p className="roboto700 text-greenish common-p">
                            Crafted from earth-friendly methods, this whiskey
                            unveils a harmonious blend of nature's abundance and
                            silky elegance.{" "}
                          </p>
                          <button
                            className="bebas text-lightgreen bg-deepgreen common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe-modal-1"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left-img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img2.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel-right">
                        <div className="carousel-content">
                          <div className="text-greenish gothic">
                            <label>002</label>
                          </div>
                          <h3 className="text-greenish gothic common-heading-1">
                            signature <br className="breaks" /> rare{" "}
                          </h3>
                          <p className="roboto700 text-greenish common-p">
                            Signature Rare reveals an unmistakable depth,
                            weaving a tale of opulence that lingers on the
                            palate, to savor all its layers.{" "}
                          </p>
                          <button
                            className="bebas text-lightgreen bg-deepgreen common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe-modal-2"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>

            <div
              className="tab-pane"
              id="tab-2"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <OwlCarousel className="owl-theme" {...options} items={2}>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left-img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img3.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel-right">
                        <div className="carousel-content">
                          <div className="text-greenish gothic">
                            <label>001</label>
                          </div>
                          <h3 className="text-greenish gothic common-heading-1 changed-heading">
                            {" "}
                            Filter <br className="breaks" />
                            Coconut <br className="breaks" /> Kappi{" "}
                            <span>(south)</span>
                          </h3>
                          <p className="roboto700 text-greenish common-p">
                            Signature paired with the two most iconic flavours
                            of coffee & coconut along with just the right amount
                            of soda!
                          </p>
                          <button
                            className="bebas text-lightgreen bg-deepgreen common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe-modal-3"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left-img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img4.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel-right">
                        <div className="carousel-content">
                          <div className="text-greenish gothic">
                            <label>002</label>
                          </div>
                          <h3 className="text-greenish gothic common-heading-1 changed-heading">
                            {" "}
                            The <br className="breaks" />
                            Signature <br className="breaks" /> Cutting{" "}
                            <span>(west)</span>
                          </h3>
                          <p className="roboto700 text-greenish common-p">
                            Taste of Maharashtra with the famous masala tea
                            flavour, a lip smacking mix of pineapple and a touch
                            of Jaggery.
                          </p>
                          <button
                            className="bebas text-lightgreen bg-deepgreen common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe-modal-4"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>

            <div
              className="tab-pane"
              id="tab-3"
              role="tabpanel"
              aria-labelledby="tab-3"
            >
              <OwlCarousel className="owl-theme" {...options} items={2}>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left-img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img5.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel-right">
                        <div className="carousel-content last">
                          <div className="text-greenish gothic">
                            <label>001</label>
                          </div>
                          <h3 className="text-greenish gothic common-heading-1">
                            Salty <br className="breaks" /> bay{" "}
                          </h3>
                          <p className="roboto700 text-greenish common-p">
                            Complementing the fine aromas is the salty sweet
                            syrup made with Himalayan Pink salt and Palm Candy
                            Sugar making this a whole some cocktail that has a
                            depth of flavors and long-lasting finish.
                          </p>
                          <button
                            className="bebas text-lightgreen bg-deepgreen common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe-modal-5"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left-img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img6.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel-right">
                        <div className="carousel-content last">
                          <div className="text-greenish gothic">
                            <label>002</label>
                          </div>
                          <h3 className="text-greenish gothic common-heading-1">
                            East India <br className="breaks" /> Julep{" "}
                          </h3>
                          <p className="roboto700 text-greenish common-p">
                            The flavours of east in west. Kaffir lime &amp; mint
                            cordial taking you back to a more nostalgic time,
                            topped off with a perfect amount of lime juice.
                          </p>
                          <button
                            className="bebas text-lightgreen bg-deepgreen common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe-modal-6"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

        <section
          id="ninth-section"
          data-bg="/assets/images/mixologistbg.svg"
          className="lazy section common-section"
        >
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
                      unforgettable cocktails and drinks that galvanize the
                      senses.
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
                              src="assets/videos/ninth-top.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/ninth-top.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/ninth-top.mp4">
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
                              src="assets/videos/ninth-bottom-left.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/ninth-bottom-left.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/ninth-bottom-left.mp4">
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
                              src="assets/videos/ninth-bottom-right.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/ninth-bottom-right.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/ninth-bottom-right.mp4">
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
                              src="assets/videos/ninth-top.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="assets/videos/ninth-top.webm"
                              type="video/webm"
                            />
                            <p>
                              Your browser doesn't support HTML video. Here is a
                              <a href="assets/videos/ninth-top.mp4">
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
                                src="assets/videos/ninth-bottom-left.mp4"
                                type="video/mp4"
                              />
                              <source
                                src="assets/videos/ninth-bottom-left.webm"
                                type="video/webm"
                              />
                              <p>
                                Your browser doesn't support HTML video. Here is
                                a
                                <a href="assets/videos/ninth-bottom-left.mp4">
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
                                src="assets/videos/ninth-bottom-right.mp4"
                                type="video/mp4"
                              />
                              <source
                                src="assets/videos/ninth-bottom-right.webm"
                                type="video/webm"
                              />
                              <p>
                                Your browser doesn't support HTML video. Here is
                                a
                                <a href="assets/videos/ninth-bottom-right.mp4">
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

        <section
          id="tenth-section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common-section common-bg"
        >
          <div className="container">
            <div className="tenth-container">
              <img
                src="/assets/images/tenth-top-left.webp"
                alt="img"
                className="lazy remove-effect top-left wow " data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="4000"
              />
              <img
                src="/assets/images/tenth-top-right.webp"
                alt="img"
                className="lazy remove-effect top-right wow " data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="4000"
              />
              <div
                className="remove-effect content wow " data-aos="fade-up"
                data-aos-duration="4000"
              >
                <h2 className="gothic text-lightgreen common-heading-2 text-center">
                  Think green drink green
                </h2>
                <p className="common-p text-whitealter">
                  We take pride in using thoughtfully sourced, sustainable
                  materials to serve our drinks. From paper straws to recycled
                  drinkware, we minimize waste without compromising on pizzazz.
                  Our commitment to conservation extends to our innovative
                  recycling and composting systems, ensuring that nothing goes
                  to waste. Join us for a guilt-free drinking experience that's
                  kind to both the planet and your taste buds. Cheers to a
                  greener future, one drink at a time!
                </p>
              </div>
              <img
                src="/assets/images/tenth-bottom-left.webp"
                alt="img"
                className="lazy remove-effect bottom-left wow " data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="4000"
              />
              <img
                src="/assets/images/tenth-bottom-right.webp"
                alt="img"
                className="lazy remove-effect bottom-right wow " data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="4000"
              />
            </div>
          </div>
        </section>

        <footer id="footer-section" className="section">
          <div className="container">
            <div className="footer-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="left">
                    <img
                      className="lazy"
                      src="/assets/images/bottles.webp"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right">
                    <img
                      className="lazy"
                      src="/assets/images/logo.svg"
                      alt="img"
                    />
                    <h3 className="gothic text-greenish common-heading-1 position-relative">
                      CRAFTED FROM NATURE,{" "}
                      <span className="leaf-green">
                        <img
                          className="lazy position-absolute"
                          src="/assets/images/leaf-green.svg"
                          alt="leaf-img"
                        />
                      </span>{" "}
                      my signature
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
