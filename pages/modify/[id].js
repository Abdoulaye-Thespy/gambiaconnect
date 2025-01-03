import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "../../src/layouts/Layout";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModifyBusiness({ businessData, id }) {
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
      const response = await fetch(`/api/modify/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Business updated successfully!');
        router.push('/admin');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update business');
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
    <Layout>
      <div className="container mt-100 mb-200">
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
            <label htmlFor="PhoneNumber" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="PhoneNumber"
              name="PhoneNumber"
              value={formData.PhoneNumber}
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
            <label htmlFor="CompanyWebsite" className="form-label">Website</label>
            <input
              type="url"
              className="form-control"
              id="CompanyWebsite"
              name="CompanyWebsite"
              value={formData.CompanyWebsite}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="SocialMediaHandle" className="form-label">Facebook</label>
            <input
              type="url"
              className="form-control"
              id="SocialMediaHandle"
              name="SocialMediaHandle"
              value={formData.SocialMediaHandle}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="BusinessCategory" className="form-label">Category</label>
            <select
              className="form-select"
              id="BusinessCategory"
              name="BusinessCategory"
              value={formData.BusinessCategory}
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Media">Media</option>
              <option value="Finance">Finance</option>
              <option value="Other">Other</option>
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
  const idx = parseInt(id, 10);
  let data = [];
  let businessData = null;

  try {
    const baseUrl = `http://${context.req.headers.host}`;
    const response = await fetch(`${baseUrl}/api/s3`, { method: 'GET' });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result = await response.json();
    data = result.data;

    if (isNaN(idx) || idx < 0 || idx >= data.length) {
      return {
        notFound: true,
      };
    }

    businessData = data[idx];
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      businessData,
      id: idx,
    },
  };
}