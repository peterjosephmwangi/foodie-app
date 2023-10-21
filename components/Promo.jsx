import React from "react";
import Image from "@/node_modules/next/image";
import Link from "next/link";
import "../app/globals.css";
import { images } from "../public/index";
const Promo = () => {
  return (
    <section className="section section-divider white promo">
      <div className="container">
        <ul className="promo-list has-scrollbar">
          <li className="promo-item">
            <div className="promo-card">
              {/* <div className="card-icon">Pizza</div> */}

              <h3 className="h3 card-title">Maxican Pizza</h3>

              <p className="card-text">
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>

              <Image
                src={images.Promo01}
                width="300"
                height="300"
                alt="Maxican Pizza"
                className="w-100 card-banner"
              />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              {/* <div className="card-icon">Drinks</div> */}

              <h3 className="h3 card-title">Soft Drinks</h3>

              <p className="card-text">
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>

              <Image
                src={images.Promo02}
                width="300"
                height="300"
                alt="Soft Drinks"
                className="w-100 card-banner"
              />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              {/* <div className="card-icon">French</div> */}

              <h3 className="h3 card-title">French Fry</h3>

              <p className="card-text">
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>

              <Image
                src={images.Promo03}
                width="300"
                height="300"
                alt="French Fry"
                className="w-100 card-banner"
              />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              {/* <div className="card-icon">Burger</div> */}

              <h3 className="h3 card-title">Burger Kingo</h3>

              <p className="card-text">
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>

              <Image
                src={images.Promo04}
                width="300"
                height="300"
                alt="Burger Kingo"
                className="w-100 card-banner"
              />
            </div>
          </li>

          <li className="promo-item">
            <div className="promo-card">
              {/* <div className="card-icon">Chicken Masala</div> */}

              <h3 className="h3 card-title">Chicken Masala</h3>

              <p className="card-text">
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>

              <Image
                src={images.Promo05}
                width="300"
                height="300"
                alt="Chicken Masala"
                className="w-100 card-banner"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promo;
