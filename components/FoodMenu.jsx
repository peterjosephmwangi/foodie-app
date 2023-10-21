"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "@/node_modules/next/image";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import "../app/globals.css";
import supabase from "@/app/utils/supabase";

const FoodMenu = () => {
  const [products, setProducts] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const getProducts = async () => {
    // useIsLoading(true);

    const { data } = await supabase.from("Products").select();

    setProducts([]);
    setProducts(data);
    // useIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(products.reverse());
      } else {
        setFilterWork(products?.filter((work) => work.category.includes(item)));
      }
    }, 500);
  };
  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">
        <p className="section-subtitle">Popular Dishes</p>

        <h2 className="h2 section-title">
          Our Delicious <span className="span">Foods</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <ul className="fiter-list">
          {[
            "All",
            "Pizza",
            "Sandwich",
            "Burger",
            "Noodles",
            "Chicken",
            "Drinks",
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`filter-btn ${activeFilter === item ? "active" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>

        <ul className="food-menu-list">
          {filterWork?.slice(0, 6).map((product) => (
            <Link href={`/product/${product?.id}`}>
              <motion.li
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
              >
                <div className="food-menu-card">
                  <div className="card-banner">
                    <Image
                      src={product?.url}
                      width="300"
                      height="300"
                      alt="Fried Chicken Unlimited"
                      className="w-full object-contain"
                    />

                    <div className="badge">-15%</div>

                    <button className="btn food-menu-btn">Order Now</button>
                  </div>

                  <div className="wrapper">
                    <p className="category">{product?.category}</p>

                    <div className="rating-wrapper">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>

                  <h3 className="h3 card-title">{product?.title}</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>

                    <data className="price">${product?.price}</data>

                    <del className="del">$69.00</del>
                  </div>
                </div>
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FoodMenu;
