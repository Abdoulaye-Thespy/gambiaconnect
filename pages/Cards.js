import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Pagination from "./pagination";

const OrganizationCards = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [organizationsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch('/GambiaConnectDB.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastOrganization = currentPage * organizationsPerPage;
  const indexOfFirstOrganization = indexOfLastOrganization - organizationsPerPage;
  const currentOrganizations = data.slice(indexOfFirstOrganization, indexOfLastOrganization);

  const totalPages = Math.ceil(data.length / organizationsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="row">
        {currentOrganizations.map((org, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
              <div className="listing-thumbnail listing-content">
                <img
                  src="assets/images/listing/listing-grid-16.jpg"
                  alt="Listing Image"
                />
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <Link href="/product-details">
                    {org.OrganizationName}
                  </Link>
                </h3>
                <p>{org.Address}</p>
                <span className="phone-meta">
                  <i className="ti-tablet" />
                  <a href={`tel:${org.PhoneNumber}`}>{org.PhoneNumber}</a>
                </span>
                <div className="listing-meta">
                  <span>
                    <Button variant="primary">See Details</Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-4">
          <Link href="/listing-grid">
            SEE MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrganizationCards;