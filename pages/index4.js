import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from "../src/sliderProps";

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1 className="wow fadeInUp">
                    here
                  </h1>
                  <h3 className="wow fadeInDown">
                    People Don't Take,Trips Take People
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                          <div className="form_group">
                            <input
                              type="search"
                              className="form_control"
                              placeholder="Search By Category"
                              name="search"
                              required
                            />
                            <i className="ti-ink-pen"></i>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Location"
                              name="location"
                              required
                            />
                            <i className="ti-location-pin"></i>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                          <div className="form_group">
                            <button className="main-btn icon-btn">
                              Search Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className="tags">
                    <span>Popular:</span>
                    <Link href="#">Saloon</Link>,
                    <Link href="#">Restaurant</Link>,
                    <Link href="#">Game</Link>,
                    <Link href="#">Counter</Link>,
                    <Link href="#">Train Station</Link>,
                    <Link href="#">Parking</Link>,
                    <Link href="#">Shooping</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Section ======--> */}
      {/* <!--====== Start Category Section ======--> */}
      <section className="category-area">
        <div className="container">
          <div className="category-wrapper-one wow fadeInDown">
            <div className="row no-gutters">
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-government"></i>
                    </div>
                    <h6>Museums</h6>
                  </div>
                  <Link href="/">
                    <span className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              {/* Repeat similar structure for other category items */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Category Section ======--> */}
      {/* ... (other sections) ... */}
      {/* <!--====== Start Blog Section ======--> */}
      <section className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Recent Articles</span>
                <h2>Every Single Journal</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="10ms"
              >
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <img
                      src="assets/images/blog/blog-1.jpg"
                      alt="Blog Image"
                    />
                  </Link>
                  <div className="post-date">
                    <Link href="#">
                      20 <span>Oct</span>
                    </Link>
                  </div>
                </div>
                <div className="entry-content">
                  <Link href="#" className="cat-btn">
                    <i className="ti-bookmark-alt"></i>Tours & Travel
                  </Link>
                  <h3 className="title">
                    <Link href="/blog-details">
                      Duis nonummy socios mattis tempus penatibus
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley"></i>
                          <Link href="#">0 Comment</Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge"></i>
                          <Link href="#">By admin</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other blog posts */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-40">
                <Link href="/blog" className="main-btn icon-btn">
                  View Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Blog Section ======--> */}
    </Layout>
  );
};

export default Index;

