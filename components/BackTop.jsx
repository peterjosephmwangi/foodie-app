"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";
import "../app/globals.css";
const BackTop = () => {
  const [activeheader, setActiveheader] = useState(false);

  const isActive = () => {
    window.scrollY >= 100 ? setActiveheader(true) : setActiveheader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div>
      <Link
        href="#top"
        className={`back-top-btn ${activeheader ? "active" : " "} `}
        aria-label="Back to top"
        data-back-top-btn
      >
        <BiChevronUp />
      </Link>
    </div>
  );
};

export default BackTop;
