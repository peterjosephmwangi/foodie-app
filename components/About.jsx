"use client";
import Image from "@/node_modules/next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";
import "../app/globals.css";
import { images } from "../public/index";
import Link from "next/link";
const About = () => {
  return (
    <section className="section section-divider gray about" id="about">
      <div className="container">
        <div className="about-banner">
          <Image
            src={images.Aboutbanner}
            width="509"
            height="459"
            alt="Burger with Drinks"
            className="w-100 about-img"
          />

          <Image
            src={images.SaleShapeRed}
            width="216"
            height="226"
            alt="get up to 50% off now"
            className="abs-img scale-up-anim"
          />
        </div>

        <div className="about-content">
          <h2 className="h2 section-title">
            Caferio, Burgers, and Best Pizzas
            <span className="span">in Town!</span>
          </h2>

          <p className="section-text">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <AiFillCheckCircle className="custom-icon" />

              <span className="span">Delicious & Healthy Foods</span>
            </li>

            <li className="about-item">
              <AiFillCheckCircle className="custom-icon" />

              <span className="span">Spacific Family And Kids Zone</span>
            </li>

            <li className="about-item">
              <AiFillCheckCircle className="custom-icon" />

              <span className="span">Music & Other Facilities</span>
            </li>

            <li className="about-item">
              <AiFillCheckCircle className="custom-icon" />

              <span className="span">Fastest Food Home Delivery</span>
            </li>
          </ul>
          <Link href={`/product/50`}>
            <button className="btn btn-hover">Order Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
