import React from "react";
import Image from "@/node_modules/next/image";
import "../app/globals.css";
import { images } from "../public/index";
const Banner = () => {
  return (
    <section className="section section-divider gray banner">
      <div className="container">
        <ul className="banner-list">
          <li className="banner-item banner-lg">
            <div className="banner-card">
              <Image
                src={images.Banner01}
                width="550"
                height="450"
                alt="Discount For Delicious Tasty Burgers!"
                className="banner-img"
              />

              <div className="banner-item-content">
                <p className="banner-subtitle">50% Off Now!</p>

                <h3 className="banner-title">
                  Discount For Delicious Tasty Burgers!
                </h3>

                <p className="banner-text">Sale off 50% only this week</p>

                <button className="btn">Order Now</button>
              </div>
            </div>
          </li>

          <li className="banner-item banner-sm">
            <div className="banner-card">
              <Image
                src={images.Banner02}
                width="550"
                height="465"
                alt="Delicious Pizza"
                className="banner-img"
              />

              <div className="banner-item-content">
                <h3 className="banner-title">Delicious Pizza</h3>

                <p className="banner-text">50% off Now</p>

                <button className="btn">Order Now</button>
              </div>
            </div>
          </li>

          <li className="banner-item banner-sm">
            <div className="banner-card">
              <Image
                src={images.Banner03}
                width="550"
                height="465"
                alt="American Burgers"
                className="banner-img"
              />

              <div className="banner-item-content">
                <h3 className="banner-title">American Burgers</h3>

                <p className="banner-text">50% off Now</p>

                <button className="btn">Order Now</button>
              </div>
            </div>
          </li>

          <li className="banner-item banner-md">
            <div className="banner-card">
              <Image
                src={images.Banner04}
                width="550"
                height="220"
                alt="Tasty Buzzed Pizza"
                className="banner-img"
              />

              <div className="banner-item-content">
                <h3 className="banner-title">Tasty Buzzed Pizza</h3>

                <p className="banner-text">Sale off 50% only this week</p>

                <button className="btn">Order Now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
