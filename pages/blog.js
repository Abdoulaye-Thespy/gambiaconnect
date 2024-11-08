import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Blog = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Our Blog"} />
      <section className="blog-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrapper pb-50">
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog-details">
                      <a>
                        <img
                          src="assets/images/blog/blog-standard-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    <a href="#" className="cat-btn">
                      11 OCT - 2024
                    </a>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Guide</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">0 Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">By admin</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link href="/blog-details">
                        <a>Resource Guide for Gambian Small Business Owners: Organizations That Can Help You</a>
                      </Link>
                    </h3>
                    <p>
                      Starting and growing a small business can be both exciting and challenging. As an entrepreneur, you’re often juggling many roles, from finance and marketing to customer service and operations. One thing that can make all the difference is having access to resources and support from organizations dedicated to helping small businesses thrive.

                      In this blog post, we’ve compiled a list of organizations that offer services ranging from business advice and funding to training and networking opportunities. These organizations can provide the support you need to grow your small business in The Gambia.
                    </p>
                    <a href="/blog-details" className="btn-link">
                      Continue Reading
                    </a>
                  </div>
                </div>

                
                <div className="fioxen-pagination text-center wow fadeInUp">
                  <ul className="pagination-list">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(active === 1 ? 1 : active - 1);
                        }}
                      >
                        <i className="ti-arrow-left" />
                      </a>
                    </li>
                    {state &&
                      state.map((s, i) => (
                        <li key={i}>
                          <a
                            className={` ${active === s ? "active" : ""}`}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(s);
                            }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(
                            active === state.length ? state.length : active + 1
                          );
                        }}
                      >
                        <i className="ti-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area mb-20">
                <div className="widget search-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search..."
                        name="email"
                        required=""
                      />
                      <i className="ti-location-arrow" />
                    </div>
                  </form>
                </div>
                <div className="widget categories-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-nav">
                    <li>
                      <a href="#">
                        Restaurant <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Museums <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tour &amp; Travel <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Uncategory <span>(03)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget recent-post-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Post</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/elements/thumb-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">11 OCT - 2024</a>
                        </span>
                        <h6>
                          <Link href="/blog-details">
                            <a>Resource Guide for Gambian Small Business Owners: Organizations That Can Help You</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
