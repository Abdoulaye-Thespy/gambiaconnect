import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap"; // Assurez-vous que react-bootstrap est installé
import data from "./GambiaConnectDB";


const OrganizationCards = () => {
  
  return (
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
  );
};

export default OrganizationCards;
