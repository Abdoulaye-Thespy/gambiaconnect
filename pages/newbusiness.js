import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Layout from "../src/layouts/Layout";
import Head from 'next/head';
import Link from 'next/link';
import SelectAlternative from './select';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddBusiness({ categories, cities }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    OrganizationName: '',
    Address: '',
    PhoneNumber: '',
    Email: '',
    CompanyWebsite: '',
    BusinessCategory: categories[0], // Set default to first category
    Location: cities[0], // Set default to first city
    Description: '',
    Pictures: [],
    Status: session ? 'approved' : 'pending',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      Pictures: Array.from(event.target.files),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const businessData = { ...formData };
    businessData.Pictures = formData.Pictures.map(file => file.name);

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
        router.push('/admin');
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

  // Transform categories and cities into the format expected by SelectAlternative
  const categoryOptions = categories.map(category => ({ 
    value: category, 
    label: category 
  }));

  const cityOptions = cities.map(city => ({ 
    value: city, 
    label: city 
  }));

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' }
  ];

  return (
    <Layout>
      <div className="container mt-100 mb-200">
        <Head>
          <title>Add New Business</title>
        </Head>
        <h1 className="mb-4">Add New Business</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="Status" value={formData.Status} />

          <div className="mb-3">
            <label htmlFor="OrganizationName" className="form-label">Organization Name</label>
            <input
              type="text"
              className="form-control"
              id="OrganizationName"
              name="OrganizationName"
              value={formData.OrganizationName}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="PhoneNumber"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="BusinessCategory" className="form-label">Category</label>
            <SelectAlternative
              options={categoryOptions}
              value={formData.BusinessCategory}
              onChange={(value) => handleSelectChange('BusinessCategory', value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Location" className="form-label">Location</label>
            <SelectAlternative
              options={cityOptions}
              value={formData.Location}
              onChange={(value) => handleSelectChange('Location', value)}
            />
          </div>

          {session && (
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">Status</label>
              <SelectAlternative
                options={statusOptions}
                value={formData.Status}
                onChange={(value) => handleSelectChange('Status', value)}
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="Description"
              name="Description"
              rows="3"
              value={formData.Description}
              onChange={handleChange}
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
              onChange={handleFileChange}
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
        <Link href="/admin" className="btn btn-secondary mt-3">
          Go to Admin
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const categories = [
    "Restaurant", "Hotel/Lodging", "Shopping", "Government", "Health & Medical",
    "Entertainment & Arts", "Automotive & Cars", "Non Profit", "Money & Finance",
    "Real Estate", "Professional Services", "Food & Beverage", "Employment",
    "News & Media", "Community", "Beauty & Fashion", "Home Services",
    "Education & Training",
    "Travel & Tourism",
    "Energy & Utilities",
    "Shopping & Retail",
    "Health & Wellness"
  ];

  const cities = [
    "Banjul", "Serrekunda", "Bakau", "Sukuta", "Brikama", "Abuko", "Farafenni",
    "Gunjur", "Lamin", "Brufut", "Kololi", "Yundum", "Brusubi", "Kotu", "Kanifing"
  ];

  return {
    props: {
      categories,
      cities,
    },
  };
}