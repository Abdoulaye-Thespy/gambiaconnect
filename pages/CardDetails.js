import React, { useState } from "react";
import { Button } from "react-bootstrap";

const organizations = [
  {
    id: 1,
    OrganizationName: "Jamano Media and Products",
    Address: "Near Yayha Jammeh Hospital, Kanifing, The Gambia",
    PhoneNumber: "220 380 8647",
    Email: "jamanomediaandproducts@gmail.com",
    CompanyWebsite: null,
    SocialMediaHandle: "https://www.facebook.com/JamanoMedia",
    Description:
      "Fringilla commodo veli taciti porttitor semper ma aliquet. Scelerisque montes laoreet aptent socios donec duis donec egestas tempus facilisis congue pretium pellentesque posuere a tempus vele felis nulla posuere eros ultrices non interdum elit praesent tristique senectus.",
  },
  {
    id: 2,
    OrganizationName: "algasimou",
    Address: "Banjul",
    PhoneNumber: "220 4380361",
    Email: "info@algsgambia.com",
    CompanyWebsite: "https://algasimou.com/",
    SocialMediaHandle: null,
    Description:
      "Algasimou offre des services de qualité pour les besoins des entreprises locales et internationales.",
  },
  {
    id: 3,
    OrganizationName: "Lang Karamo Suwareh",
    Address: "Banjul area Head Office Old Jeshwang",
    PhoneNumber: "220 9906344",
    Email: null,
    CompanyWebsite: null,
    SocialMediaHandle: null,
    Description:
      "Lang Karamo Suwareh est un point de référence pour les services communautaires et sociaux.",
  },
  {
    id: 4,
    OrganizationName: "VISIT Bakau, Cape Point & Fajara",
    Address: "Bakau, The Gambia",
    PhoneNumber: "220 3734957",
    Email: null,
    CompanyWebsite: "https://www.facebook.com/VisitBakauCapePointFajara",
    SocialMediaHandle: null,
    Description:
      "Découvrez la beauté et le charme de Bakau, Cape Point et Fajara à travers des visites guidées.",
  },
];

const CardDetails = ({ id, onBack }) => {
  // Filtre pour récupérer les données spécifiques de la carte en fonction de l'ID
  const card = organizations.find((org) => org.id === id);

  if (!card) {
    return <div>Card not found!</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-details shadow p-4 rounded">
            {/* Nom de l'organisation */}
            <h2 className="text-primary mb-3">{card.OrganizationName}</h2>

            {/* Adresse */}
            <h5 className="text-secondary mb-3">{card.Address}</h5>

            {/* Description */}
            <p className="text-muted">{card.Description}</p>

            {/* Contact Section */}
            <div className="contact-info mt-4">
              {card.PhoneNumber && (
                <p>
                  📞 <a href={`tel:${card.PhoneNumber}`}>{card.PhoneNumber}</a>
                </p>
              )}
              {card.Email && (
                <p>
                  📧{" "}
                  <a href={`mailto:${card.Email}`} className="text-decoration-none">
                    {card.Email}
                  </a>
                </p>
              )}
              {card.CompanyWebsite && (
                <p>
                  🌐{" "}
                  <a
                    href={card.CompanyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    Visit Website
                  </a>
                </p>
              )}
            </div>

            {/* Boutons Réseaux Sociaux */}
            {card.SocialMediaHandle && (
              <div className="mt-4">
                <a
                  href={card.SocialMediaHandle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Follow on Social Media
                </a>
              </div>
            )}

            {/* Bouton retour */}
            <Button variant="secondary" className="mt-4" onClick={onBack}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardDetail = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id); // Met l'ID de la carte cliquée
  };

  const handleBackToHome = () => {
    setSelectedCardId(null); // Réinitialise l'ID sélectionné
  };

  return (
    <div className="container">
      {/* Si aucune carte n'est sélectionnée */}
      {!selectedCardId ? (
        <div className="row">
          {organizations.map((org) => (
            <div key={org.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="listing-item listing-grid-item-three mb-30 wow fadeInUp shadow p-3">
                {/* Thumbnail */}
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-10.jpg"
                    alt="listing image"
                    className="border border-primary rounded-circle shadow"
                  />
                </div>
                {/* Content */}
                <div className="listing-content mt-3">
                  <h3 className="title">{org.OrganizationName}</h3>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => handleCardClick(org.id)}
                  >
                    Read More 👁️
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Affiche les détails de la carte sélectionnée
        <CardDetails id={selectedCardId} onBack={handleBackToHome} />
      )}
    </div>
  );
};

export default CardDetail;

/* CardDetails */

