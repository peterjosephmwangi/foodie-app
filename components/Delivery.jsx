"use client";
import React, { useState, useEffect } from "react";
import Image from "@/node_modules/next/image";
import { images } from "../public/index";
import "../app/globals.css";
const Delivery = () => {
  const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const deliveryBoy = document.querySelector("[data-delivery-boy]");

    const handleScroll = () => {
      const deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
      if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        const activeScrollPos = window.scrollY;

        if (lastScrollPos < activeScrollPos) {
          setDeliveryBoyMove((prevMove) => prevMove + 1);
        } else {
          setDeliveryBoyMove((prevMove) => prevMove - 1);
        }

        setLastScrollPos(activeScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);
  return (
    <section className="section section-divider gray delivery">
      <div className="container">
        <div className="delivery-content">
          <h2 className="h2 section-title">
            A Moments Of Delivered On <span className="span">Right Time</span> &
            Place
          </h2>

          <p className="section-text">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>

          <button className="btn btn-hover">Order Now</button>
        </div>

        <figure className="delivery-banner">
          <Image
            src={images.Delivery01}
            width="700"
            height="602"
            alt="clouds"
            className="w-100"
          />

          <Image
            src={images.DeliveryBoy}
            width="1000"
            height="880"
            alt="delivery boy"
            className="w-100 delivery-img"
            style={{ transform: `translateX(${deliveryBoyMove}px)` }}
            data-delivery-boy
          />
        </figure>
      </div>
    </section>
  );
};

export default Delivery;
