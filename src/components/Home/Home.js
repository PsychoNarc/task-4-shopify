import React from "react";
import "./Home.css";
import { Navbar } from "../Navbar/Navbar";
import { Accordion } from "./FAQ/Accordion";
import { Hero } from "./Hero/Hero";
import { Inspirations } from "./Inspirations/Inspirations";
import { BlogArticles } from "./BlogArticles/BlogArticles";
import { Info } from "./InfoSection/Info";
import { Newsletter } from "./NewsletterSection/Newsletter";
import { FashionShow } from "./FashionShow/FashionShow";
import { FeaturedCollection } from "./FeaturedCollection/FeaturedCollection";
import { Buttons } from "../Buttons/Buttons";
import { Testimonials } from "./Testimonials/Testimonials";
import { FollowCards } from "./FollowCards/FollowCards";
import { CollectionList } from "./CollectionList/CollectionList";

export const Home = () => {
  return (
    <>
    <Navbar navStyle='navLinks-white' />
      <Hero />

      {/* OUTLOOK SECTION */}
      <div className="container-fluid padding-0 outlook-section">
        <div className="row welcome text-center">
          <div className="col-12">
            <h2 className="outlook-heading display-6">New Outlook</h2>
          </div>
          <div className="col-12">
            <p className="lead">
              From boxy-fit coats and capes to oversized trenches, we have
              fall's best selection of outerwear right here, courtesy of
              fashion's most exciting brands.
            </p>
          </div>
        </div>
      </div>

      {/* COLLECTION LIST */}
      <CollectionList />

      {/* FEATURED COLLECTION */}
      <FeaturedCollection />


      {/* NEWSLETTER SECTION */}
      <Newsletter />

      {/* ADDRESS SECTION */}
      <div className="address-container">
        <div className="address-wrapper">
          <div className="address-card">
            <span className="card-topline">We are here</span>
            <h6 className="address-quote">Are you looking for our store?</h6>
            <div className="address-title">
              <p className="address-heading">Address</p>
              <p className="address">123 Fake St. Toronto, Canada</p>
            </div>
            <div className="open-timings">
              <p className="address-heading">Open</p>
              <span className="timings">Mon - Fri, 10am - 9pm</span>
              <span className="timings">Saturday, 11am - 9pm</span>
              <span className="timings">Sunday, 11am - 5pm</span>
            </div>
            <div className="address-button">
              <Buttons
                to="/"
                buttonStyle="button-secondary"
                buttonSize="button-medium"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                Get Directions
              </Buttons>
            </div>
          </div>
        </div>
      </div>

      {/* FASHION SHOW */}
      <FashionShow />

      {/* BLOG ARTICLES */}
      <BlogArticles />

      {/* INFO SECTION */}
      <Info />

      {/* TESTIMONIAL SECTION */}
      <Testimonials />

      {/* CARDS SECTION */}
      <FollowCards />

      {/* COUNTER SECTION */}
      <div className="counter-up">
        <div className="content">
          <div className="box">
            <div className="icon">
              <i className="fa fa-truck" aria-hidden="true"></i>
            </div>
            <h5 className="counter">Free Delivery</h5>
            <p className="text">
              Safest and most environmentally form of commercial transport.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-life-ring" aria-hidden="true"></i>
            </div>
            <h5 className="counter">3 Years Guarantee</h5>
            <p className="text">
              Legal term more comprehensive and of higher import.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <h5 className="counter">Free Return</h5>
            <p className="text">
              Safest and most environmentally form of commercial transport.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-headphones" aria-hidden="true"></i>
            </div>
            <h5 className="counter">24/7 Support</h5>
            <p className="text">
              We provide high-quality products all around the world.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <Accordion />

      {/* INSPIRATION SECTION */}
      <Inspirations />
    </>
  );
};
