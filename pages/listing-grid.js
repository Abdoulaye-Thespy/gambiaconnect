import Link from "next/link";
import React, { useState, useEffect }from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import { Button } from "react-bootstrap"; // Assurez-vous que react-bootstrap est installé
import initialData from "./GambiaConnectDB";


const ListingGrid = () => {
  const [data, setData] = useState(initialData)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = initialData.filter(org => 
      org.OrganizationName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setData(filteredData)
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Layout>
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Filter Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="search-form">
                      <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                          required=""
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                        <i className="ti-search" />
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="Category">
                            Category
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                          <option value={6}>Job &amp; Feeds</option>
                          <option value={7}>Shooping</option>
                          <option value={8}>Art Gallery</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="Location">
                            Location
                          </option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Delhi</option>
                          <option value={3}>lahore</option>
                          <option value={4}>Rome</option>
                          <option value={5}>New york</option>
                          <option value={6}>Pris</option>
                          <option value={7}>Bern</option>
                          <option value={8}>Bangkok</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="By place">
                            By place
                          </option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Delhi</option>
                          <option value={3}>lahore</option>
                          <option value={4}>Rome</option>
                          <option value={5}>New york</option>
                          <option value={6}>Pris</option>
                          <option value={7}>Bern</option>
                          <option value={8}>Bangkok</option>
                        </select>
                      </div>
                    </div>
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-09</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select>
                          <option disabled selected="Default Sorting">
                            Default Sorting
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid">
                            <a className="active">
                              <i className="ti-view-grid" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          {/* Debut Cards */}

              <div className="row">
                {/* Map pour afficher chaque organisation */}
                {data.map((org, index) => (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                        <div className="listing-thumbnail listing-content">
                          <img
                            src="assets/images/listing/listing-grid-16.jpg"
                            alt="Listing Image"
                          />
                        </div>
                        <div className="listing-content">
                          <h3 className="title">
                            <Link href="/listing-details-1">
                              <a>{org.OrganizationName}</a>
                            </Link>
                          </h3>
                          <p>{org.Address}</p>
                          <span className="phone-meta">
                            <i className="ti-tablet" />
                            <a href="tel:+982653652-05">{org.PhoneNumber}</a>
                          </span>
                          <div className="listing-meta">
                            <span>
                              <a>
                                <Button variant="primary">Read More</Button>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>


                ))}
              </div>

          {/* ------Fin Cards------ */}   
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingGrid;
