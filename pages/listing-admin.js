import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Layout from "../src/layouts/Layout";
import initialData from "./GambiaConnectDB";

const categories = ["Technology", "Media", "Healthcare", "Education", "Finance", "Other"];

export default function AdminListingGrid() {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedOrg, setEditedOrg] = useState(null);

  useEffect(() => {
    const filteredData = initialData.filter(org => 
      org.OrganizationName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (org) => {
    setEditingId(org.id);
    setEditedOrg({ ...org });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedOrg(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOrg(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const updatedData = data.map(org => org.id === editedOrg.id ? editedOrg : org);
      setData(updatedData);
      setEditingId(null);
      setEditedOrg(null);

      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert("Changes saved successfully!");
    } catch (error) {
      console.error('Error updating organization:', error);
      alert("There was a problem saving your changes.");
    }
  };

  const renderField = (label, name, type = "text") => (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={editedOrg && editedOrg[name] ? editedOrg[name] : ""}
        onChange={handleInputChange}
        className="form-control mt-1 rounded-md border shadow-sm focus-border-indigo-300 focus-ring focus-ring-indigo-200 focus-ring-opacity-50"
      />
    </div>
  );

  return (
    <Layout>
    <div className="container mx-auto px-4 py-8 mt-50">
      <h1 className="text-3xl font-bold mb-20">Admin Listing Grid</h1>

      <div className="m-5">
        <input
          type="search"
          placeholder="Search organizations"
          value={searchTerm}
          onChange={handleSearch}
          className="form-control max-w-sm"
        />
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-4 m-5">
        {data.map((org) => (
          <div key={org.id} className="bg-white shadow rounded overflow-hidden mb-4" style={{ paddingBottom: editingId === org.id ? '20px' : '10px' }}>
            <div className="p-4">
              <h5 className="text-xl font-weight-bold mb-2">{org.OrganizationName}</h5>
              {editingId === org.id ? (
                <>
                  {renderField("Organization Name", "OrganizationName")}
                  {renderField("Address", "Address")}
                  {renderField("Phone Number", "PhoneNumber")}
                  {renderField("Email", "Email", "email")}
                  {renderField("Company Website", "CompanyWebsite", "url")}
                  {renderField("Facebook", "facebook", "url")}
                  {renderField("Twitter", "twitter", "url")}
                  {renderField("LinkedIn", "linkedin", "url")}
                  <div className="mb-2">
                    <label htmlFor="BusinessCategory" className="block text-sm font-medium text-gray-700">Business Category</label>
                    <select
                      id="BusinessCategory"
                      name="BusinessCategory"
                      value={editedOrg && editedOrg.BusinessCategory ? editedOrg.BusinessCategory : ""}
                      onChange={handleInputChange}
                      className="form-select mt-1 rounded-md border shadow-sm focus-border-indigo-300 focus-ring focus-ring-indigo-200 focus-ring-opacity-50"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-600"><strong>Address:</strong> {org.Address}</p>
                  <p className="text-gray-600"><strong>Phone:</strong> {org.PhoneNumber}</p>
                  <p className="text-gray-600"><strong>Email:</strong> {org.Email}</p>
                  <p className="text-gray-600"><strong>Website:</strong> {org.CompanyWebsite || "N/A"}</p>
                  <p className="text-gray-600"><strong>Facebook:</strong> {org.facebook || "N/A"}</p>
                  <p className="text-gray-600"><strong>Twitter:</strong> {org.twitter || "N/A"}</p>
                  <p className="text-gray-600"><strong>LinkedIn:</strong> {org.linkedin || "N/A"}</p>
                  <p className="text-gray-600"><strong>Category:</strong> {org.BusinessCategory || "N/A"}</p>
                </>
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3">
              {editingId === org.id ? (
                <>
                  <Button onClick={handleSubmit} className="mr-2">Submit</Button>
                  <Button variant="secondary" onClick={handleCancelEdit}>Cancel</Button>
                </>
              ) : (
                <Button onClick={() => handleEdit(org)}>Modify</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}