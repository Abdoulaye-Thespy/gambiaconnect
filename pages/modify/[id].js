import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "../../src/layouts/Layout";
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModifyBusiness({ categories, businessData }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(businessData);

  useEffect(() => {
    setFormData(businessData);
  }, [businessData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/modify-business/${businessData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Business updated successfully!');
        router.push('/businesses');
      } else {
        throw new Error('Failed to update business');
      }
    } catch (error) {
      console.error('Error updating business:', error);
      alert('There was a problem updating the business.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Layout header={3}> 
      <div className="container mt-200 mb-200">
        <Head>
          <title>Modify Business</title>
        </Head>
        <h1 className="mb-4">Modify Business</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="OrganizationName" className="form-label">Organization Name</label>
            <input
              type="text"
              className="form-control"
              id="OrganizationName"
              name="OrganizationName"
              value={formData.OrganizationName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="Address"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Phone" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Website" className="form-label">Website</label>
            <input
              type="url"
              className="form-control"
              id="Website"
              name="Website"
              value={formData.Website}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Facebook" className="form-label">Facebook</label>
            <input
              type="url"
              className="form-control"
              id="Facebook"
              name="Facebook"
              value={formData.Facebook}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Category" className="form-label">Category</label>
            <select
              className="form-select"
              id="Category"
              name="Category"
              value={formData.Category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="Description"
              name="Description"
              rows="3"
              value={formData.Description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="Pictures" className="form-label">Pictures</label>
            <input
              type="file"
              className="form-control"
              id="Pictures"
              name="Pictures"
              multiple
              accept="image/*"
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update Business'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  // In a real application, you would fetch the business data from your API or database
  // For this example, we'll use mock data
  const businessData = {
    id: id,
    OrganizationName: 'Sample Business',
    Address: '123 Main St, City, Country',
    Phone: '+1234567890',
    Email: 'sample@business.com',
    Website: 'https://www.samplebusiness.com',
    Facebook: 'https://www.facebook.com/samplebusiness',
    Category: 'Technology',
    Description: 'This is a sample business description.',
  };

  const categories = ["Technology", "Media", "Healthcare", "Education", "Finance", "Other"];

  return {
    props: {
      categories,
      businessData,
    },
  };
}

