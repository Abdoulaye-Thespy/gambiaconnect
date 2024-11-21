import Link from "next/link";
import React, { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/">Home</Link>
    </li>
  </Fragment>
);

/* -------- Nouveau bouton Ajoueté pour l'évènement ----------- */
export const Event = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/event">Events</Link>
    </li>
  </Fragment>
);
/* --------Fin nouveau évènement-------- */

export const About = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/about">About us</Link>
    </li>
  </Fragment>
);
export const Listing = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/listing-list">Listing List</Link>
    </li>
    <li className="menu-item">
      <Link href="/listing-grid">Listing Grid</Link>
    </li>
    <li className="menu-item">
      <Link href="/listing-map">Listing Map Grid</Link>
    </li>
    <li className="menu-item">
      <Link href="/listing-details-1">Listing Details One</Link>
    </li>
    <li className="menu-item">
      <Link href="/listing-details-2">Listing Details Two</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/add-listing">Add Listing</Link>
    </li>
    <li>
      <Link href="/products">Our Products</Link>
    </li>
    <li>
      <Link href="/product-details">Products Details</Link>
    </li>
    <li className="menu-item">
      <Link href="/how-work">How Work</Link>
    </li>
    <li className="menu-item">
      <Link href="/pricing">Pricing</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/blog">Our Blog</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
