import Head from "next/head";
import Loader from "../components/loader";
import Image from "next/legacy/image";
import { useEffect } from "react";
import { jQuery } from "../public";

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
          <div className="header_logo">
            <img
              className="lazy"
              src="/assets/images/menu-logo.svg"
              alt="logo"
            />
          </div>
          <ul>
            <li>
              <a href="#second_section" className="bebas sidebar_item">
                Our Master Blender
              </a>
            </li>
            <li>
              <a href="#fourth_section" className="bebas sidebar_item">
                Products
              </a>
            </li>
            <li>
              <a href="#sixth_section" className="bebas sidebar_item">
                Grain To Glass
              </a>
            </li>
            <li>
              <a href="#eighth_section" className="bebas sidebar_item">
                Recipes
              </a>
            </li>
            <li>
              <a href="#ninth_section" className="bebas sidebar_item">
                Our mixologists
              </a>
            </li>
          </ul>
          <div className="menu_btn">
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

        <header id="header_section">
          <div className="logo">
            <img className="lazy" src="/assets/images/logo.svg" alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#second_section" className="bebas">
                Our Master Blender
              </a>
            </li>
            <li>
              <a href="#fourth_section" className="bebas">
                Products
              </a>
            </li>
            <li>
              <a href="#sixth_section" className="bebas">
                Grain To Glass
              </a>
            </li>
            <li>
              <a href="#eighth_section" className="bebas">
                Recipes
              </a>
            </li>
            <li>
              <a href="#ninth_section" className="bebas">
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

        <section id="home_section" className="section common_section">
          <div className="home_container">
            <img
              className="bg_img lazy"
              src="/assets/images/firstbg.svg"
              alt="img"
            />

            <div className="content container lazy">
              <div className="text_section">
                <h1 className="gothic text-white common_heading_1">
                  CRAFTED FROM NATURE
                  <span className="leaf position-relative">
                    <img
                      className="position-absolute"
                      src="/assets/images/leaf.svg"
                      alt="leaf"
                    />
                  </span>
                </h1>
                <p className="common_p text-white">
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
                  className="symbol_img lazy wow fadeInUpBig"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                />
                <a
                  aria-label="View Recipes"
                  href="#eighth_section"
                  className="bg_deepgreen text_lightgreen bebas common_btn view_recipe_btn"
                >
                  VIEW RECIPES
                </a>
              </div>
            </div>

            <Image
              className="bottom_img lazy"
              src="/assets/images/bottom.webp"
              alt="img"
              layout="fill"
              objectFit="cover"
            />

            <div className="popup">
              <div className="popup_container">
                <img
                  className="popup_close lazy"
                  src="/assets/images/close.svg"
                  alt="close-icon"
                />
                <div className="popup_top">
                  <img
                    className="lazy"
                    src="/assets/images/glass.svg"
                    alt="img"
                  />
                  <h2 className="gothic text_greenish">purchase online</h2>
                </div>
                <ul className="popup_middle">
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
                <div className="popup_bottom">
                  <p className="roboto">
                    Home delivery of alcohol products is only applicable in West
                    Bengal and Odisha.
                  </p>
                </div>
              </div>
            </div>

            <div className="popup_btn active">
              <div className="popup_btn_container">
                <img
                  src="/assets/images/glass-btn.webp"
                  alt="img"
                  className="img_fluid lazy"
                />
                <h2 className="gothic text_greenish">purchase online</h2>
              </div>
            </div>
          </div>
        </section>

        <section
          id="second_section"
          data-bg="/assets/images/greenbg.svg"
          className="section common_section common_bg lazy"
        >
          <div className="container">
            <div className="second_container">
              <div className="row">
                <div className="col-xl-5">
                  <div
                    className="left position-relative wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay="0.1s"
                  >
                    <h2 className="gothic text_lightgreen common_heading_1">
                      the signature of our master blender{" "}
                    </h2>
                    <p className="common_p text_whitealter">
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
                  <div className="right first_carousel">
                    <div className="owl_carousel owl_theme">
                      <div className="item">
                        <div className="img_container_1">
                          <img
                            src="/assets/images/carousel-1-top-left.webp"
                            alt="img"
                            className="lazy wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.1s"
                          />
                          <img
                            src="/assets/images/carousel-1-top-right.webp"
                            alt="img"
                            className="lazy wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                          />
                          <img
                            src="/assets/images/carousel-1-middle-left.webp"
                            alt="img"
                            className="lazy wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.3s"
                          />
                          <video
                            className="lazy middle wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
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
                            className="lazy wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.5s"
                          />
                          <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="lazy bottom_left opacity-75 wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.6s"
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
                            className="lazy wow fadeInUpBig"
                            data-wow-duration="2s"
                            data-wow-delay="0.6s"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="img_container_2">
                          <img
                            src="/assets/images/carousel-2-top-left.webp"
                            alt="img"
                            data-animation-in="fadeInRight"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-top-left-2.webp"
                            alt="img"
                            data-animation-in="fadeInRight"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-middle.webp"
                            alt="img"
                            data-animation-in="fadeInRight"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <video
                            className="bottom_left opacity-75"
                            autoPlay
                            muted
                            loop
                            playsInline
                            data-animation-in="fadeInRight"
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
                            data-animation-in="fadeInRight"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-bottom-right.webp"
                            alt="img"
                            data-animation-in="fadeInRight"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                          <img
                            src="/assets/images/carousel-2-bottom-right-2.webp"
                            alt="img"
                            data-animation-in="fadeInRight"
                            data-animation-out="animate-out fadeOutLeft"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="third_section" className="section common_section">
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
            <div className="third_container">
              <h2 className="gothic text_lightgreen common_heading_1">
                Born of craft
              </h2>
              <p className="roboto common_p text-white">
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
          id="fourth_section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common_section common_bg"
        >
          <div className="container">
            <div className="fourth_container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="left" data-wow-duration="2s">
                    <img
                      src="/assets/images/bottle.webp"
                      alt="img"
                      className="lazy wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.1s"
                    />
                    <video
                      className="lazy wow fadeInUp opacity-75"
                      data-wow-duration="2s"
                      autoPlay
                      muted
                      loop
                      playsInline
                      data-wow-delay="0.2s"
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
                      className="lazy wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.3s"
                    />
                    <img
                      src="/assets/images/fourth-bottom-left.webp"
                      alt="img"
                      className="lazy wow zoomIn"
                      data-wow-duration="2s"
                      data-wow-delay="0.4s"
                    />
                    <img
                      src="/assets/images/fourth-bottom-right.webp"
                      alt="img"
                      className="lazy wow zoomIn"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="right wow fadeInUp" data-wow-duration="2s">
                    <h2 className="gothic text_lightgreen common_heading_1">
                      signature premier whisky
                    </h2>
                    <span className="din text_orangish text-uppercase">
                      Smooth & Creamy
                    </span>
                    <p className="text_whitealter common_p">
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
          id="fifth_section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common_section common_bg"
        >
          <div className="container">
            <div className="fifth_container">
              <div className="row">
                <div className="col-xl-6 order-xl-1 order-2">
                  <div className="left wow fadeInUp" data-wow-duration="2s">
                    <h2 className="gothic text_lightgreen common_heading_1">
                      signature rare aged whisky
                    </h2>
                    <span className="din text_orangish text-uppercase">
                      deep & rich
                    </span>
                    <p className="common_p text_whitealter">
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
                      className="lazy wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.1s"
                    />
                    <video
                      className="lazy wow fadeInUp opacity-75"
                      data-wow-duration="2s"
                      autoPlay
                      playsInline
                      loop
                      muted
                      data-wow-delay="0.2s"
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
                      className="lazy wow fadeInRight"
                      data-wow-duration="2s"
                      data-wow-delay="0.3s"
                    />
                    <img
                      src="/assets/images/fifth-bottom-left-2.webp"
                      alt="img"
                      className="lazy wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.4s"
                    />
                    <img
                      src="/assets/images/fifth-bottom-right.webp"
                      alt="img"
                      className="lazy wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sixth_section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common_section common_bg"
        >
          <img
            src="/assets/images/close-video.svg"
            className="position-absolute close_video"
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
              className="lazy position-absolute sixth_top wow fadeInUpBig"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            />
            <div
              className="sixth_container wow fadeInUpBig"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <h2 className="gothic text_lightgreen text-center common_heading_2">
                grain to glass
              </h2>
              <p className="roboto common_p text_whitealter">
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
              className="lazy position-absolute play_btn wow fadeInUpBig"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            />
            <img
              src="/assets/images/sixth-bottom-left.webp"
              alt="img"
              className="lazy position-absolute sixth_bottom_left wow fadeInUpBig"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            />
            <img
              src="/assets/images/sixth-bottom-right.webp"
              alt="img"
              className="lazy position-absolute sixth_bottom_right wow fadeInUpBig"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            />
            <img
              src="/assets/images/sixth-bottom-right-2.webp"
              alt="img"
              className="lazy position-absolute sixth_bottom_right_2 wow fadeInUpBig"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            />
          </div>
        </section>

        <div className="common_section video_section">
          <div className="video_container">
            <video
              id="video_play"
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
          id="seventh_section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common_section common_bg"
        >
          <div className="container">
            <div className="seventh_container position-relative">
              <img
                src="/assets/images/seven-top-left.webp"
                alt="img"
                className="lazy top_left wow fadeInUpBig"
                data-wow-delay="0.1s"
                data-wow-duration="2s"
              />
              <img
                src="/assets/images/seven-top-right.webp"
                alt="img"
                className="lazy top_right wow fadeInUpBig"
                data-wow-delay="0.1s"
                data-wow-duration="2s"
              />
              <div className="content wow fadeInUpBig" data-wow-duration="2s">
                <h2 className="gothic text_lightgreen common_heading_2">
                  nature in a glass
                </h2>
                <p className="roboto common_p text_whitealter">
                  Experience the beauty of nature in every sip with these
                  special curations crafted by the world’s top mixologists. Made
                  with only the finest-locally sourced ingredients that
                  celebrate natural flavors and aromas of the earth.
                </p>
              </div>
              <img
                src="/assets/images/Arrow.webp"
                alt="img"
                className="lazy middle_arrow wow fadeInUpBig"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              />
              <img
                src="/assets/images/seven-bottom-left.webp"
                alt="img"
                className="lazy bottom_left wow fadeInUpBig"
                data-wow-delay="0.1s"
                data-wow-duration="2s"
              />
              <img
                src="/assets/images/seven-bottom-right.webp"
                alt="img"
                className="lazy bottom_right wow fadeInUpBig"
                data-wow-delay="0.1s"
                data-wow-duration="2s"
              />
            </div>
          </div>
        </section>

        <section
          id="eighth_section"
          data-bg="/assets/images/eighthbg.svg"
          className="lazy section common_section"
        >
          <div className="tab_section">
            <div className="nav nav_tabs tabs" id="nav_tab" role="tablist">
              <button
                className="tab_button bebas active"
                id="nav_home_tab"
                data-bs-toggle="tab"
                data-bs-target="#tab_1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Signature Serve
              </button>
              <button
                className="tab_button bebas"
                id="nav_profile_tab"
                data-bs-toggle="tab"
                data-bs-target="#tab_2"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Region Inspired
              </button>
              <button
                className="tab_button bebas"
                id="nav_contact_tab"
                data-bs-toggle="tab"
                data-bs-target="#tab_3"
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
            id="recipe_modal_1"
            tabIndex={-1}
            aria-labelledby="recipe_modal"
            aria-hidden="true"
          >
            <div className="modal_dialog">
              <div className="modal_body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal_left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img1.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal_right">
                      <button
                        type="button"
                        className="modal_closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal_label text_greenish gothic">
                        <label>001</label>
                      </div>
                      <div className="modal_heading">
                        <h3 className="text_greenish gothic common_heading_1">
                          signature <br className="breaks" /> premier{" "}
                        </h3>
                      </div>
                      <div className="modal_para">
                        <p className="roboto700 text_greenish common_p">
                          GT Sour is a depiction of that strong cumin element in
                          a sour with the fine full bodied "Signature Premier"
                          defining the versatile classNameic cocktail of the
                          century.
                        </p>
                      </div>
                      <div className="line bg_greenish"></div>
                      <ul className="modal_recipe_container">
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            15 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Roasted Cumin Cordial
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            3 <span className="roboto">drops</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Aromatic Bitters
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            15 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Fresh Lime juice
                          </p>
                        </li>
                        <li className="recipe_method">
                          <p className="common_p roboto700 text_greenish">
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
            id="recipe_modal_2"
            tabIndex={-1}
            aria-labelledby="recipe_modal"
            aria-hidden="true"
          >
            <div className="modal_dialog">
              <div className="modal_body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal_left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img2.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal_right">
                      <button
                        type="button"
                        className="modal_closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal_label text_greenish gothic">
                        <label>002</label>
                      </div>
                      <div className="modal_heading">
                        <h3 className="text_greenish gothic common_heading_1">
                          signature <br className="breaks" /> rare{" "}
                        </h3>
                      </div>
                      <div className="modal_para">
                        <p className="roboto700 text_greenish common_p">
                          Signature paired with the two most iconic flavours of
                          coffee & coconut along with just the right amount of
                          soda!
                        </p>
                      </div>
                      <div className="line bg_greenish"></div>
                      <ul className="modal_recipe_container">
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Coffee</p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Coconut</p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Soda</p>
                        </li>
                        <li className="recipe_method">
                          <p className="common_p roboto700 text_greenish">
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
            id="recipe_modal_3"
            tabIndex={-1}
            aria-labelledby="recipe_modal"
            aria-hidden="true"
          >
            <div className="modal_dialog">
              <div className="modal_body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal_left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img3.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal_right">
                      <button
                        type="button"
                        className="modal_closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal_label text_greenish gothic">
                        <label>001</label>
                      </div>
                      <div className="modal_heading">
                        <h3 className="text_greenish gothic common_heading_1 changed_heading">
                          {" "}
                          Filter <br className="breaks" />
                          Coconut <br className="breaks" /> Kappi{" "}
                          <span>(south)</span>
                        </h3>
                      </div>
                      <div className="modal_para">
                        <p className="roboto700 text_greenish common_p">
                          Signature paired with the two most iconic flavours of
                          coffee & coconut along with just the right amount of
                          soda!
                        </p>
                      </div>
                      <div className="line bg_greenish"></div>
                      <ul className="modal_recipe_container">
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Coffee</p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Coconut</p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Soda</p>
                        </li>
                        <li className="recipe_method">
                          <p className="common_p roboto700 text_greenish">
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
            id="recipe_modal_4"
            tabIndex={-1}
            aria-labelledby="recipe_modal"
            aria-hidden="true"
          >
            <div className="modal_dialog">
              <div className="modal_body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal_left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img4.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal_right">
                      <button
                        type="button"
                        className="modal_closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal_label text_greenish gothic">
                        <label>002</label>
                      </div>
                      <div className="modal_heading">
                        <h3 className="text_greenish gothic common_heading_1 changed_heading">
                          {" "}
                          The <br className="breaks" />
                          Signature <br className="breaks" /> Cutting{" "}
                          <span>(west)</span>
                        </h3>
                      </div>
                      <div className="modal_para">
                        <p className="roboto700 text_greenish common_p">
                          A refreshing end to the weekend with Signature pairing
                          beautifully with Kokum and its two best friends, lime
                          & chili
                        </p>
                      </div>
                      <div className="line bg_greenish"></div>
                      <ul className="modal_recipe_container">
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Signature
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Black masala tea
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Pineapple
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Touch of jaggery
                          </p>
                        </li>
                        <li className="recipe_method">
                          <p className="common_p roboto700 text_greenish">
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
            id="recipe_modal_5"
            tabIndex={-1}
            aria-labelledby="recipe_modal"
            aria-hidden="true"
          >
            <div className="modal_dialog">
              <div className="modal_body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal_left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img5.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal_right">
                      <button
                        type="button"
                        className="modal_closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal_label text_greenish gothic">
                        <label>001</label>
                      </div>
                      <div className="modal_heading">
                        <h3 className="text_greenish gothic common_heading_1">
                          Salty <br className="breaks" /> bay{" "}
                        </h3>
                      </div>
                      <div className="modal_para">
                        <p className="roboto700 text_greenish common_p">
                          Complementing the fine aromas is the salty sweet syrup
                          made with Himalayan Pink salt and Palm Candy Sugar
                          making this a whole some cocktail that has a depth of
                          flavors and long-lasting finish.
                        </p>
                      </div>
                      <div className="line bg_greenish"></div>
                      <ul className="modal_recipe_container">
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            60 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Signature Premier
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Himalayan Pink Salt & Palm CandySyrup
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            30 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Bay Leaf Water
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Lime Juice
                          </p>
                        </li>
                        <li className="recipe_method">
                          <p className="common_p roboto700 text_greenish">
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
            id="recipe_modal_6"
            tabIndex={-1}
            aria-labelledby="recipe_modal"
            aria-hidden="true"
          >
            <div className="modal_dialog">
              <div className="modal_body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="modal_left">
                      <img
                        className="lazy"
                        src="/assets/images/eight-img6.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="modal_right">
                      <button
                        type="button"
                        className="modal_closebtn"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src="/assets/images/modal-close.svg"
                          className="lazy"
                          alt="close"
                        />
                      </button>
                      <div className="modal_label text_greenish gothic">
                        <label>002</label>
                      </div>
                      <div className="modal_heading">
                        <h3 className="text_greenish gothic common_heading_1">
                          East India <br className="breaks" /> Julep{" "}
                        </h3>
                      </div>
                      <div className="modal_para">
                        <p className="roboto700 text_greenish common_p">
                          The flavours of east in west. Kaffir lime &amp; mint
                          cordial taking you back to a more nostalgic time,
                          topped off with a perfect amount of lime juice.
                        </p>
                      </div>
                      <div className="line bg_greenish"></div>
                      <ul className="modal_recipe_container">
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            45 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Signature Premier
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Mint cordial
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            10 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">
                            Fresh lime juice
                          </p>
                        </li>
                        <li className="modal_recipe">
                          <div className="quantity text_greenish gothic">
                            90 <span className="roboto">ml</span>
                          </div>
                          <p className="name common_p text_greenish">Soda</p>
                        </li>
                        <li className="recipe_method">
                          <p className="common_p roboto700 text_greenish">
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

          <div className="tab_content tab_container" id="nav_tabContent">
            <div
              className="tab_pane active show wow fadeInRight"
              data-wow-duration="2s"
              id="tab_1"
              role="tabpanel"
              aria-labelledby="tab_1"
            >
              <div className="owl_carousel owl_theme">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left_img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img1.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel_right">
                        <div className="carousel_content">
                          <div className="text_greenish gothic">
                            <label>001</label>
                          </div>
                          <h3 className="text_greenish gothic common_heading_1">
                            signature <br className="breaks" /> premier{" "}
                          </h3>
                          <p className="roboto700 text_greenish common_p">
                            Crafted from earth-friendly methods, this whiskey
                            unveils a harmonious blend of nature's abundance and
                            silky elegance.{" "}
                          </p>
                          <button
                            className="bebas text_lightgreen bg_deepgreen common_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe_modal_1"
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
                        <div className="left_img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img2.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel_right">
                        <div className="carousel_content">
                          <div className="text_greenish gothic">
                            <label>002</label>
                          </div>
                          <h3 className="text_greenish gothic common_heading_1">
                            signature <br className="breaks" /> rare{" "}
                          </h3>
                          <p className="roboto700 text_greenish common_p">
                            Signature Rare reveals an unmistakable depth,
                            weaving a tale of opulence that lingers on the
                            palate, to savor all its layers.{" "}
                          </p>
                          <button
                            className="bebas text_lightgreen bg_deepgreen common_btn"
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
              </div>
            </div>

            <div
              className="tab_pane"
              id="tab_2"
              role="tabpanel"
              aria-labelledby="tab_2"
            >
              <div className="owl_carousel owl_theme">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left_img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img3.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel_right">
                        <div className="carousel_content">
                          <div className="text_greenish gothic">
                            <label>001</label>
                          </div>
                          <h3 className="text_greenish gothic common_heading_1 changed_heading">
                            {" "}
                            Filter <br className="breaks" />
                            Coconut <br className="breaks" /> Kappi{" "}
                            <span>(south)</span>
                          </h3>
                          <p className="roboto700 text_greenish common_p">
                            Signature paired with the two most iconic flavours
                            of coffee & coconut along with just the right amount
                            of soda!
                          </p>
                          <button
                            className="bebas text_lightgreen bg_deepgreen common_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe_modal_3"
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
                        <div className="left_img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img4.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel_right">
                        <div className="carousel_content">
                          <div className="text_greenish gothic">
                            <label>002</label>
                          </div>
                          <h3 className="text_greenish gothic common_heading_1 changed_heading">
                            {" "}
                            The <br className="breaks" />
                            Signature <br className="breaks" /> Cutting{" "}
                            <span>(west)</span>
                          </h3>
                          <p className="roboto700 text_greenish common_p">
                            Taste of Maharashtra with the famous masala tea
                            flavour, a lip smacking mix of pineapple and a touch
                            of Jaggery.
                          </p>
                          <button
                            className="bebas text_lightgreen bg_deepgreen common_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe_modal_4"
                          >
                            view recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab_pane"
              id="tab_3"
              role="tabpanel"
              aria-labelledby="tab_3"
            >
              <div className="owl_carousel owl_theme">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left">
                        <div className="left_img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img5.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel_right">
                        <div className="carousel_content last">
                          <div className="text_greenish gothic">
                            <label>001</label>
                          </div>
                          <h3 className="text_greenish gothic common_heading_1">
                            Salty <br className="breaks" /> bay{" "}
                          </h3>
                          <p className="roboto700 text_greenish common_p">
                            Complementing the fine aromas is the salty sweet
                            syrup made with Himalayan Pink salt and Palm Candy
                            Sugar making this a whole some cocktail that has a
                            depth of flavors and long-lasting finish.
                          </p>
                          <button
                            className="bebas text_lightgreen bg_deepgreen common_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe_modal_5"
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
                        <div className="left_img">
                          <img
                            loading="lazy"
                            src="/assets/images/eight-img6.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="carousel_right">
                        <div className="carousel_content last">
                          <div className="text_greenish gothic">
                            <label>002</label>
                          </div>
                          <h3 className="text_greenish gothic common_heading_1">
                            East India <br className="breaks" /> Julep{" "}
                          </h3>
                          <p className="roboto700 text_greenish common_p">
                            The flavours of east in west. Kaffir lime &amp; mint
                            cordial taking you back to a more nostalgic time,
                            topped off with a perfect amount of lime juice.
                          </p>
                          <button
                            className="bebas text_lightgreen bg_deepgreen common_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#recipe_modal_6"
                          >
                            view recipe
                          </button>
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
          id="ninth_section"
          data-bg="/assets/images/mixologistbg.svg"
          className="lazy section common_section"
        >
          <div className="container">
            <div className="ninth_container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left">
                    <h2 className="gothic text_greenish common_heading_2 text_center">
                      OUR MIXOLOGISTS
                    </h2>
                    <p className="common_p roboto700 text_greenish">
                      Our mixologists elevate libations to liquid art, crafting
                      unforgettable cocktails and drinks that galvanize the
                      senses.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 p-3">
                  <div className="ninth_carousel">
                    <div className="owl_carousel owl_theme">
                      <div className="item">
                        <div className="ninth_carousel_item">
                          <video
                            className="lazy ninth_video"
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
                        <div className="ninth_carousel_item">
                          <video
                            className="lazy ninth_video"
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
                        <div className="ninth_carousel_item">
                          <video
                            className="lazy ninth_video"
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
                    </div>
                  </div>

                  <div className="right">
                    <div className="video_top">
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
                    <div className="video_bottom pt-1">
                      <div className="row">
                        <div className="col-7 p-0">
                          <div className="bottom_left">
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
                          <div className="bottom_right">
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
          id="tenth_section"
          data-bg="/assets/images/greenbg.svg"
          className="lazy section common_section common_bg"
        >
          <div className="container">
            <div className="tenth_container">
              <img
                src="/assets/images/tenth-top-left.webp"
                alt="img"
                className="lazy remove_effect top_left wow fadeInUpBig"
                data-wow-delay="0.1s"
                data-wow-duration="2s"
              />
              <img
                src="/assets/images/tenth-top-right.webp"
                alt="img"
                className="lazy remove_effect top_right wow fadeInUpBig"
                data-wow-delay="0.3s"
                data-wow-duration="2s"
              />
              <div
                className="remove_effect content wow fadeInUpBig"
                data-wow-duration="2s"
              >
                <h2 className="gothic text_lightgreen common_heading_2 text-center">
                  Think green drink green
                </h2>
                <p className="common_p text_whitealter">
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
                className="lazy remove_effect bottom_left wow fadeInUpBig"
                data-wow-delay="0.4s"
                data-wow-duration="2s"
              />
              <img
                src="/assets/images/tenth-bottom-right.webp"
                alt="img"
                className="lazy remove_effect bottom_right wow fadeInUpBig"
                data-wow-delay="0.6s"
                data-wow-duration="2s"
              />
            </div>
          </div>
        </section>

        <footer id="footer_section" className="section">
          <div className="container">
            <div className="footer_container">
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
                    <h3 className="gothic text_greenish common_heading_1 position-relative">
                      CRAFTED FROM NATURE,{" "}
                      <span className="leaf_green">
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
