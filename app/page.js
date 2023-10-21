"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Delivery from "@/components/Delivery";
import FoodMenu from "@/components/FoodMenu";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Testimonials from "@/components/Testimonials";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <article>
        <Hero />
        <Promo />
        <About />
        <FoodMenu />
        <CTA />
        <Delivery />
        <Testimonials />
        <Banner />
        <Blog />
      </article>
      <Footer />
    </main>
  );
}
