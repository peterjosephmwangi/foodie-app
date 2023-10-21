import React from "react";
import Link from "next/link";
import Image from "@/node_modules/next/image";
import "../app/globals.css";
import { images } from "../public/index";
const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      // style={{ backgroundImage: `url(${images?.HeroBg})` }}
      style={{ backgroundImage: `url("/images/hero-bg.jpg")` }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Eat Sleep And</p>

          <h2 className="h1 hero-title">Supper delicious Burger in town!</h2>

          <p className="hero-text">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>

          <button className="btn">Book A Table</button>
        </div>

        <figure className="hero-banner">
          <Image
            src={images.HeroBannerBg}
            width="820"
            height="716"
            alt=""
            aria-hidden="true"
            className="w-100 hero-img-bg"
          />

          <Image
            src={images.HeroBanner}
            width="700"
            height="637"
            alt="Burger"
            className="w-100 hero-img"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
