"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../app/globals.css";
import { BiSearch } from "react-icons/bi";
import Search from "./Search";

const Header = () => {
  const [activeheader, setActiveheader] = useState(false);
  const [openmenu, setOpenmenu] = useState(false);
  const [opensearch, setOpensearch] = useState(false);

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
    <header className={`header ${activeheader ? "active" : " "} `}>
      <div className="container">
        <h1>
          <Link href="#" className="logo">
            Foodie<span className="span">.</span>
          </Link>
        </h1>

        <nav className={`navbar ${openmenu ? "active" : " "} `}>
          <ul className="navbar-list">
            <li className="nav-item">
              <Link
                href="#home"
                className="navbar-link"
                onClick={() => setOpenmenu(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#about"
                className="navbar-link"
                onClick={() => setOpenmenu(false)}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#food-menu"
                className="navbar-link"
                onClick={() => setOpenmenu(false)}
              >
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#blog"
                className="navbar-link"
                onClick={() => setOpenmenu(false)}
              >
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#"
                className="navbar-link"
                onClick={() => setOpenmenu(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-btn-group">
          <button
            className="search-btn"
            onClick={() => setOpensearch((prev) => !prev)}
            aria-label="Search"
            data-search-btn
          >
            <BiSearch />
          </button>

          <button className="btn btn-hover">Reservation</button>

          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            onClick={() => setOpenmenu((prev) => !prev)}
            data-menu-toggle-btn
          >
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </button>
        </div>
      </div>
      <Search opensearch={opensearch} setOpensearch={setOpensearch} />
    </header>
  );
};

export default Header;
