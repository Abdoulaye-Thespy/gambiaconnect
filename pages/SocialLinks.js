import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  // Liste des liens sociaux avec icônes
  const links = [
    { href: "https://facebook.com", icon: FaFacebookF, color: "text-blue-600 hover:text-blue-800" },
    { href: "https://twitter.com", icon: FaTwitter, color: "text-blue-400 hover:text-blue-600" },
    { href: "https://instagram.com", icon: FaInstagram, color: "text-pink-500 hover:text-pink-700" },
  ];

  // Crée une div contenant les liens
  return React.createElement(
    "div",
    { className: "flex justify-center space-x-6 mt-6" },
    ...links.map((link, index) =>
      React.createElement(
        Link,
        { key: index, href: link.href },
        React.createElement(
          "a",
          { target: "_blank", rel: "noopener noreferrer", className: link.color },
          React.createElement(link.icon, { size: 30 })
        )
      )
    )
  );
};

export default SocialLinks;
