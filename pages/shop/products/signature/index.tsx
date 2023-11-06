import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import { jQuery } from "../../../../public/script";

import Loader from "../../../../common/loader";
import Sidebar from "../../../../common/sidebar";
import Header from "../../../../common/header";
import Footer from "../../../../common/footer";

import Video from "../../../../pagesContent/signature/video";
import Hero from "../../../../pagesContent/signature/hero";
import MasterBlender from "../../../../pagesContent/signature/masterBlender";
import BornToCraft from "../../../../pagesContent/signature/bornToCraft";
import Products from "../../../../pagesContent/signature/products";
import RareAgedWhisky from "../../../../pagesContent/signature/rareAgedWhisky";
import GrainToGlass from "../../../../pagesContent/signature/grainToGlass";
import NatureInGlass from "../../../../pagesContent/signature/natureInGlass";
import Racipes from "../../../../pagesContent/signature/racipes";
import OurMixologists from "../../../../pagesContent/signature/ourMixologists";
import ThinkGreenDrinkGreen from "../../../../pagesContent/signature/thinkGreenDrinkGreen";

import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      jQuery();
      AOS.init({ offset: 0 });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Signature | Product</title>
      </Head>
      <Loader />
      <div className="wrapper">
        <Sidebar />
        <Header />
        <Hero />
        <MasterBlender />
        <BornToCraft />
        <Products />
        <RareAgedWhisky />
        <GrainToGlass />
        <Video />
        <NatureInGlass />
        <Racipes />
        <OurMixologists />
        <ThinkGreenDrinkGreen />
        <Footer />
      </div>
    </>
  );
}
