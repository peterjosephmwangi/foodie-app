import React from "react";
import Image from "@/node_modules/next/image";
import { SlCalender } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../public/index";
import "../app/globals.css";
import Link from "next/link";
const Blog = () => {
  return (
    <section className="section section-divider white blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Latest Blog Posts</p>

        <h2 className="h2 section-title">
          This Is All About <span className="span">Foods</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <div className="card-banner">
                <Image
                  src={images.Blog01}
                  width="600"
                  height="390"
                  alt="What Do You Think About Cheese Pizza Recipes?"
                  className="w-100"
                />

                <div className="badge">Pizza</div>
              </div>

              <div className="card-content">
                <div className="card-meta-wrapper">
                  <Link href="#" className="card-meta-link">
                    <SlCalender className="blogicons" />
                    <time className="meta-info" datetime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </Link>

                  <Link href="#" className="card-meta-link">
                    <BsFillPersonFill className="blogicons" />

                    <p className="meta-info">Jonathan Smith</p>
                  </Link>
                </div>

                <h3 className="h3">
                  <Link href="#" className="card-title">
                    What Do You Think About Cheese Pizza Recipes?
                  </Link>
                </h3>

                <p className="card-text">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>

                <Link href="#" className="btn-link">
                  <span>Read More</span>

                  <AiOutlineArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <div className="card-banner">
                <Image
                  src={images.Blog02}
                  width="600"
                  height="390"
                  alt="Making Chicken Strips With New Delicious Ingridents."
                  className="w-100"
                />

                <div className="badge">Burger</div>
              </div>

              <div className="card-content">
                <div className="card-meta-wrapper">
                  <Link href="#" className="card-meta-link">
                    <SlCalender className="blogicons" />

                    <time className="meta-info" datetime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </Link>

                  <Link href="#" className="card-meta-link">
                    <BsFillPersonFill className="blogicons" />

                    <p className="meta-info">Jonathan Smith</p>
                  </Link>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Making Chicken Strips With New Delicious Ingridents.
                  </a>
                </h3>

                <p className="card-text">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>

                <Link href="#" className="btn-link">
                  <span>Read More</span>

                  <AiOutlineArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <div className="card-banner">
                <Image
                  src={images.Blog03}
                  width="600"
                  height="390"
                  alt="Innovative Hot Chessyraw Pasta Make Creator Fact."
                  className="w-100"
                />

                <div className="badge">Chicken</div>
              </div>

              <div className="card-content">
                <div className="card-meta-wrapper">
                  <Link href="#" className="card-meta-link">
                    <SlCalender className="blogicons" />

                    <time className="meta-info" datetime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </Link>

                  <Link href="#" className="card-meta-link">
                    <BsFillPersonFill className="blogicons" />

                    <p className="meta-info">Jonathan Smith</p>
                  </Link>
                </div>

                <h3 className="h3">
                  <Link href="#" className="card-title">
                    Innovative Hot Chessyraw Pasta Make Creator Fact.
                  </Link>
                </h3>

                <p className="card-text">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>

                <Link href="#" className="btn-link">
                  <span>Read More</span>

                  <AiOutlineArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
