import Link from "next/link";
import React from "react";
import { About, Contact, Home, Blog, Event, Listing } from "../Menu";

const Header3 = () => {
  return (
    <header className="header-area header-area-three transparent-header d-none d-xl-block">
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="top-social">
                <ul className="social-link">
                  <li>
                    <span>Follow us:</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-content text-center">
                <p>
                 email{" info@gambiaconnect.com"}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-right">
                <ul className="d-flex">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-search" />
                        <span>email{" info@gambiaconnect.com"}</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navigation">
        <div className="container">
          <div className="primary-menu">
            <div className="row align-items-center">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <a href="index-3.html" className="brand-logo">
                    <img src="assets/images/logo/logo-1.png" alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-2">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close" />
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <Home />
                      <About />
                      {/* --------------- Nouveau Element integrer ------------*/}
                      <Event />
                      <Blog />
                      {/* --------------- Fin Element integrer ------------*/}
                      <Contact />
                      <li className="nav-btn">
                        <Link href="/add-listing">
                          <a className="main-btn icon-btn">Add Listing</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-3 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="user-btn">
                      <Link href="/">
                        <a className="icon">
                          <i className="flaticon-avatar" />
                        </a>
                      </Link>
                    </li>
                    <li className="hero-nav-btn">
                      <Link href="/add-listing">
                        <a className="main-btn icon-btn">Add Listing</a>
                      </Link>
                    </li>
                    <li className="nav-toggle-btn">
                      <div className="navbar-toggler">
                        <span />
                        <span />
                        <span />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header3;
