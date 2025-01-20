import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../src/layouts/Layout";
import { Button } from "react-bootstrap";

const ListingGrid = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/s3', { method: 'GET' });
      const dataResponse = await response.json();
      const data = dataResponse.data;
      setOriginalData(data);
      setFilteredData(data.filter(org => org.Status === 'Approved'));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = originalData.filter(org =>
      org.OrganizationName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      org.Status === 'approved'
    );
    setFilteredData(filtered);
  }, [searchTerm, originalData]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
                          <option disabled selected>
                            Category
                          </option>
                          <option>Restaurant</option>
                          <option>Hotel/Lodging</option>
                          <option>Shopping</option>
                          <option>Government</option>
                          <option>Health & Medical</option>
                          <option>Entertainment & Arts</option>
                          <option>Automotive & Cars</option>
                          <option>Non Profit</option>
                          <option>Money & Finance</option>
                          <option>Real Estate</option>
                          <option>Professional Services</option>
                          <option>Food & Beverage</option>
                          <option>Employment</option>
                          <option>News & Media</option>
                          <option>Community</option>
                          <option>Beauty & Fashion</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected>
                            Location
                          </option>
                          <option>Banjul</option>
                          <option>Serrekunda</option>
                          <option>Bakau</option>
                          <option>Sukuta</option>
                          <option>Brikama</option>
                          <option>Abuko</option>
                          <option>Farafenni</option>
                          <option>Gunjur</option>
                          <option>Lamin</option>
                          <option>Brufut</option>
                          <option>Kololi</option>
                          <option>Yundum</option>
                          <option>Brusubi</option>
                          <option>Other</option>
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
                        <span>Showing Result 1-{filteredData.length}</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select>
                          <option disabled selected>
                            Default Sorting
                          </option>
                          <option>Restaurant</option>
                          <option>Hotel/Lodging</option>
                          <option>Shopping</option>
                          <option>Government</option>
                          <option>Health & Medical</option>
                          <option>Entertainment & Arts</option>
                          <option>Automotive & Cars</option>
                          <option>Non Profit</option>
                          <option>Money & Finance</option>
                          <option>Real Estate</option>
                          <option>Professional Services</option>
                          <option>Food & Beverage</option>
                          <option>Employment</option>
                          <option>News & Media</option>
                          <option>Community</option>
                          <option>Beauty & Fashion</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid" legacyBehavior>
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

              <div className="row">
                {filteredData.map((org, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail listing-content">
                        <img
                          src={org.Pictures && org.Pictures.length > 0 ? org.Pictures[0] : "assets/images/listing/listing-grid-16.jpg"}
                          alt={org.OrganizationName}
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href={`/listing-details/${org.id}`} legacyBehavior>
                            <a>{org.OrganizationName}</a>
                          </Link>
                        </h3>
                        <p>{org.Address}</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href={`tel:${org.PhoneNumber}`}>{org.PhoneNumber}</a>
                        </span>
                        <div className="listing-meta">
                          <span>
                            <Link href={`/listing-details/${org.id}`}>
                              <Button variant="primary">Read More</Button>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ListingGrid;

