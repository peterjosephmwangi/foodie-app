import React from "react";
import { images } from "../public/index";

import { AiFillStar } from "react-icons/ai";
import "../app/globals.css";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section className="section section-divider white testi">
      <div className="container">
        <p className="section-subtitle">Testimonials</p>

        <h2 className="h2 section-title">
          Our Customers <span className="span">Reviews</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <ul className="testi-list has-scrollbar">
          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <Image
                    src={images.Avatar01}
                    width="80"
                    height="80"
                    alt="Robert William"
                  />
                </figure>

                <div>
                  <h3 className="h4 testi-name">Robert William</h3>

                  <p className="testi-title">CEO Kingfisher</p>
                </div>
              </div>

              <blockquote className="testi-text">
                "I would be lost without restaurant. I would like to personally
                thank you for your outstanding product."
              </blockquote>

              <div className="rating-wrapper">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </li>

          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <Image
                    src={images.Avatar02}
                    width="80"
                    height="80"
                    alt="Thomas Josef"
                  />
                </figure>

                <div>
                  <h3 className="h4 testi-name">Thomas Josef</h3>

                  <p className="testi-title">CEO Getforce</p>
                </div>
              </div>

              <blockquote className="testi-text">
                "I would be lost without restaurant. I would like to personally
                thank you for your outstanding product."
              </blockquote>

              <div className="rating-wrapper">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </li>

          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <Image
                    src={images.Avatar03}
                    width="80"
                    height="80"
                    alt="Charles Richard"
                  />
                </figure>

                <div>
                  <h3 className="h4 testi-name">Charles Richard</h3>

                  <p className="testi-title">CEO Angela</p>
                </div>
              </div>

              <blockquote className="testi-text">
                "I would be lost without restaurant. I would like to personally
                thank you for your outstanding product."
              </blockquote>

              <div className="rating-wrapper">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
