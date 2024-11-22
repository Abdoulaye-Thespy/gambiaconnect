import Link from "next/link";
import React, { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import TestimoinalSlider2 from "../src/components/Slider/TestimonialSlider2";
import Layout from "../src/layouts/Layout";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinDetails from './BusinDetails';


const Index3 = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const Isotope = require("isotope-layout");
        new Isotope(".masonry-place-row", {
          itemSelector: ".place-column",
          percentPosition: true,
          masonry: {
            columnWidth: ".place-column",
          },
        });
      }
    }, 1000);
  }, []);

  return (
    <Layout header={3}>
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-three bg_cover"
          style={{
            backgroundImage: "url(assets/images/flags.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="wow fadeInUp" data-wow-delay=".30s">
                    Gambia Connect
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay=".50s">
                    Linking Businesses, Empowering Communities - Welcome to Gambia Connect!
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay=".70s"
                  >
                    <Tab.Container defaultActiveKey={"flight"}>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <div className="search-nav mb-10">
                              <Nav as="ul" className="nav nav-tabs">
                                <Nav.Item>
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="flight"
                                  >
                                    <i className="far fa-plane-departure" />
                                    Flight
                                  </Nav.Link>
                                </Nav.Item>
                                <li className="nav-item">
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="hotels"
                                  >
                                    <i className="far fa-building" />
                                    Hotels
                                  </Nav.Link>
                                </li>
                                <li className="nav-item">
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="rentcar"
                                  >
                                    <i className="far fa-car" />
                                    Rent a Car
                                  </Nav.Link>
                                </li>
                              </Nav>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <p className="tags mb-15">
                              <span>Popular:</span>
                              <a href="#">Saloon</a>,<a href="#">Restaurant</a>,
                              <a href="#">Game</a>,<a href="#">Counter</a>,
                              <a href="#">Train Station</a>,
                              <a href="#">Parking</a>,<a href="#">Shooping</a>
                            </p>
                          </div>
                        </div>
                        <div className="hero-search-form tab-content">
                          <Tab.Pane className="show active">
                            <div className="row">
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Search By Category"
                                    name="search"
                                    required
                                  />
                                  <i className="ti-ink-pen"></i>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <select className="wide">
                                    <option value="01">Museums</option>
                                    <option value="02">Restaurant</option>
                                    <option value="03">Party Center</option>
                                    <option value="04">Fitness Zone</option>
                                    <option value="05">Game Field</option>
                                    <option value="06">Job & Feeds</option>
                                    <option value="07">Shooping</option>
                                    <option value="08">Art Gallery</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
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
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <button className="main-btn icon-btn">
                                    Search Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                        </div>
                      </form>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Place Section ======*/}
      {/*====== End Hero Section ======*/}
      {/*====== Start category Section ======*/}
      <section className="category-area">
        <div
          className="category-wrapper-bg bg_cover pt-75 pb-50"
          style={{ backgroundImage: "url(assets/images/bg/catgory-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                  <span className="sub-title">What We Offer</span>
                  <h2>Popular Category</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category-item category-item-three mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-government" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">
                        <a>Museums</a>
                      </Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category-item category-item-three mb-30 wow fadeInDown">
                  <div className="icon">
                    <i className="flaticon-serving-dish" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Restaurant</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category-item category-item-three mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-game-controller" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Game Field</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="category-item category-item-three mb-30 wow fadeInDown"
                  data-wow-delay=".15s"
                >
                  <div className="icon">
                    <i className="flaticon-suitcase" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Job &amp; Feed</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="category-item category-item-three mb-30 wow fadeInUp"
                  data-wow-delay=".20s"
                >
                  <div className="icon">
                    <i className="flaticon-gift-box" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Party Center</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="category-item category-item-three mb-30 wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <div className="icon">
                    <i className="flaticon-dumbbell" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Fitness Zone</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End category Section ======*/}
      {/*====== Start Listing Section ======*/}
      <section className="listing-grid-area light-bg pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured Business</span>
                <h2>Explore Listing</h2>
              </div>
            </div>
          </div>

                    {/* ------Début Cards------ */}          
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="d-flex align-item-center justify-content-center listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-10.jpg"
                    alt="listing image"
                    className="
                    border 
                    border-primary 
                    rounded-circle
                    shadow 
                    float-end
                    "
                  />
                </div>
                <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1" >
                        <a>Museum of Islamic Art,</a>
                      </Link>
                    </h3>
                  <span className="city">
                  git 
                  <img
                      src="assets/images/listing/thumb-1.jpg"
                      alt="city image"
                      className="img-fluid mb-8 mt-8"
                    />
                    Gambia
                  </span>     
                  <div className="mb-4">          
                      <span>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content...
                      </span>
                  </div>
                  <Link href="/product-details" className="align-item-align">
                  <a><Button variant="primary">Read More 👁️ </Button></a>
                </Link>
                </div>
              </div>
           </div>
                        {/* ------Fin Cards------ */}

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".20s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-11.jpg"
                    alt="listing image"
                  />
                  <span className="featured-btn">Featured</span>
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-2.jpg"
                      alt="city image"
                    />
                    Gambia
                  </span>
                  <ul className="ratings ratings-five">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-12.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-3.jpg"
                      alt="city image"
                    />
                    New York
                  </span>
                  <ul className="ratings ratings-three">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-13.jpg"
                    alt="listing image"
                  />
                  <span className="featured-btn">Featured</span>
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-2.jpg"
                      alt="city image"
                    />
                    Gambia
                  </span>
                  <ul className="ratings ratings-three">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-14.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-1.jpg"
                      alt="city image"
                    />
                    Doha, Qatar
                  </span>
                  <ul className="ratings ratings-three">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-15.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-3.jpg"
                      alt="city image"
                    />
                    New York
                  </span>
                  <ul className="ratings ratings-five">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Listing Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div
          className="features-wrapper-two bg_cover pt-115 pb-80"
          style={{ backgroundImage: "url(assets/images/bg/features-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                  <span className="sub-title">Working Process</span>
                  <h2>How Does It Works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="flaticon-map" />
                  </div>
                  <div className="content">
                    <h4>Explore Listings</h4>
                    <p>
                    Browse through our comprehensive directory of organizations and businesses in The Gambia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-one mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <div className="icon">
                    <i className="flaticon-star" />
                  </div>
                  <div className="content">
                    <h4>Search and Discover</h4>
                    <p>
                    Utilize our search function to find specific information or simply explore various categories.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="flaticon-calendar" />
                  </div>
                  <div className="content">
                    <h4>Connect and Engage</h4>
                    <p>
                    Connect with businesses, access key details, and embark on a seamless journey through The Smiling Coast&aposs commercial landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
    </Layout>
  );
};
export default Index3;
