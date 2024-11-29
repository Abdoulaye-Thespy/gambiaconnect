import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap"; // Assurez-vous que react-bootstrap est installé

// JSON simulé
const organizations = [
  {
    OrganizationName: "Jamano Media and Products",
    Address: "Near Yayha Jammeh Hospital, Kanifing, The Gambia",
    PhoneNumber: "220 380 8647",
    Email: "jamanomediaandproducts@gmail.com",
    CompanyWebsite: null,
    SocialMediaHandle: "https://www.facebook.com/JamanoMedia",
    BusinessCategory: null,
  },
  {
    OrganizationName: "algasimou",
    Address: "Banjul",
    PhoneNumber: "220 4380361",
    Email: "Email: info@algsgambia.com",
    CompanyWebsite: "https://algasimou.com/",
    SocialMediaHandle: null,
    BusinessCategory: null,
  },
  {
    OrganizationName: "Lang Karamo Suwareh",
    Address: "Banjul area Head OfficeOld Jeshwang",
    PhoneNumber: "220 9906344",
    Email: null,
    CompanyWebsite: null,
    SocialMediaHandle: null,
    BusinessCategory: null,
  },
  {
    OrganizationName: "VISIT Bakau, Cape Point & Fajara",
    Address: "Bakau, The Gambia",
    PhoneNumber: "220 3734957",
    Email: null,
    CompanyWebsite: "https://www.facebook.com/VisitBakauCapePointFajara",
    SocialMediaHandle: null,
    BusinessCategory: null,
  },
];

const OrganizationCards = () => {
  return (
    <div className="row">
      {/* Map pour afficher chaque organisation */}
      {organizations.map((org, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <div
            className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
            data-wow-delay=".15s"
          >
            <div className="d-flex align-items-center justify-content-center listing-thumbnail">
              <img
                src="/assets/images/listing/listing-grid-10.jpg" // Image par défaut
                alt={`${org.OrganizationName} image`}
                className="
                  border 
                  shadow 
                  float-end
                "
              />
            </div>
            <div className="listing-content">
              <h3 className="title">
                <Link href="/listing-details-1">
                  <a>{org.OrganizationName}</a>
                </Link>
              </h3>
              <span className="city">
                {" "}
                <img
                  src="/assets/images/listing/thumb-1.jpg" // Image par défaut
                  alt="city image"
                  className="img-fluid mb-8 mt-8"
                />
                {org.Address}
              </span>
              <div className="mb-4">
                <span>
                  {org.BusinessCategory
                    ? org.BusinessCategory
                    : "Some quick example text to build on the card title and make up the bulk of the card's content..."}
                </span>
              </div>
              <Link href="/product-details" className="align-items-align">
                <a>
                  <Button variant="primary">Read More</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrganizationCards;
