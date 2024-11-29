import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link"; // Assurez-vous que Next.js est utilisé pour les liens.

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
    Email: "info@algsgambia.com",
    CompanyWebsite: "https://algasimou.com/",
    SocialMediaHandle: null,
    BusinessCategory: null,
  },
  {
    OrganizationName: "Lang Karamo Suwareh",
    Address: "Banjul area Head Office Old Jeshwang",
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

const CardDetails = ({ selectedCard, onBack }) => {
  if (!selectedCard) return null;

  return (
    <div className="col-lg-12 col-md-12">
      <div className="product-info mt-30">
        <ul className="ratings ratings-three">
          <li>
            <h3>
              <span>{selectedCard.OrganizationName}</span>
            </h3>
          </li>
        </ul>
        <h3 className="title">{selectedCard.Address}</h3>
        <p>
          Fringilla commodo veli taciti porttitor semper ma aliquet. Scelerisque
          montes laoreet aptent socios donec duis donec egestas tempus facilisis
          congu pretium pellentesque posuere a tempus vele felis nulla posuere
          eros ultrices non interdum elit prae sent tinc tristique senectus.
        </p>
        <div className="quantity-cart mb-25">
          <div className="cart-button">
            <a href={`tel:${selectedCard.PhoneNumber}`} className="main-btn">
              📞 {selectedCard.PhoneNumber}
            </a>
          </div>
        </div>
        <div className="product-meta">
          {selectedCard.Email && (
            <a href={`mailto:${selectedCard.Email}`} className="wishlist-btn">
              📧 {selectedCard.Email}
            </a>
          )}
          <div className="social-links mt-4">
            {selectedCard.SocialMediaHandle && (
              <a
                href={selectedCard.SocialMediaHandle}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Social Media 📱
              </a>
            )}
          </div>
        </div>
        <Button onClick={onBack} variant="secondary" className="mt-3">
          Back to Cards
        </Button>
      </div>
    </div>
  );
};

const CardComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleReadMore = (card) => {
    setSelectedCard(card);
  };

  const handleBack = () => {
    setSelectedCard(null);
  };

  return (
    <div className="container">
      {selectedCard ? (
        <CardDetails selectedCard={selectedCard} onBack={handleBack} />
      ) : (
        <div className="row">
          {organizations.map((org, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="d-flex align-items-center justify-content-center listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-10.jpg"
                    alt="listing image"/>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>{org.OrganizationName}</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-1.jpg"
                      alt="city image"
                      className="img-fluid mb-2 mt-2"
                    />
                    {org.Address}
                  </span>
                  <div className="mb-4">
                    <p>
                      <strong>Email:</strong>{" "}
                      {org.Email ? org.Email : "Non spécifié"}
                    </p>
                    <p>
                      <strong>Téléphone:</strong> {org.PhoneNumber}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleReadMore(org)}
                    variant="primary"
                    className="me-2"
                  >
                    Read More 
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
