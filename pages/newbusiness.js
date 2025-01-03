import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "../src/layouts/Layout";
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddBusiness({ categories }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const businessData = Object.fromEntries(formData);

    // Extract file names from the Pictures input
    const pictures = formData.getAll('Pictures').map(file => file.name);
    businessData.Pictures = pictures;

    try {
      const response = await fetch('/api/add-business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(businessData),
      });

      if (response.ok) {
        alert('Business added successfully!');
        router.push('/');
      } else {
        throw new Error('Failed to add business');
      }
    } catch (error) {
      console.error('Error adding business:', error);
      alert('There was a problem adding the business.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout> 
      <div className="container mt-100 mb-200">
        <Head>
          <title>Add New Business</title>
        </Head>
        <h1 className="mb-4">Add New Business</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="Status" value="Pending" />

          <div className="mb-3">
            <label htmlFor="OrganizationName" className="form-label">Organization Name</label>
            <input
              type="text"
              className="form-control"
              id="OrganizationName"
              name="OrganizationName"
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
            />
          </div>

          <div className="mb-3">
            <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="PhoneNumber"
              name="PhoneNumber"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="CompanyWebsite" className="form-label">Website</label>
            <input
              type="url"
              className="form-control"
              id="CompanyWebsite"
              name="CompanyWebsite"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="BusinessCategory" className="form-label">Category</label>
            <select
              className="form-select"
              id="BusinessCategory"
              name="BusinessCategory"
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
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Business'}
          </button>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // In a real application, you might fetch this data from an API or database
  const categories = ["Technology", "Media", "Healthcare", "Education", "Finance", "Other"];

  return {
    props: {
      categories,
    },
  };
}