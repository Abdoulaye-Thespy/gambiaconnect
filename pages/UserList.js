import React from "react";
import data from "./data.json"; // Importation du fichier JSON

const UserList = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>Liste des utilisateurs</h1>
      <ul style={{ padding: 0 }}>
        {data.map((user) => (
          <li
            key={user.id}
            style={{
              listStyle: "none",
              marginBottom: "15px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h2 style={{ margin: "5px 0", color: "#555" }}>{user.name}</h2>
            <p style={{ margin: "5px 0" }}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{ margin: "5px 0" }}>
              <strong>Rôle:</strong> {user.role}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;


