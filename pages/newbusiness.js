import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Layout from "../src/layouts/Layout";
import Head from 'next/head';
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
    BusinessCategory: 'Select a category',
    Location: 'Select a location',
    Description: '',
    Pictures: [],
    Status: 'pending',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
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

  return (
    <Layout>
      <div className="container mt-100 mb-200">
        <Head>
          <title>Add New Business</title>
        </Head>
        <h1 className="mb-4">Add New Business</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="Status"  value={session ? 'approved' : 'pending'}  />

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

          {session &&  (<div className="mb-3">
            <label htmlFor="BusinessCategory" className="form-label">Category</label>
            <select
              className="form-control"
              id="BusinessCategory"
              name="BusinessCategory"
              value={formData.BusinessCategory}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Shopping">Shopping</option>
              <option value="Hotel/Lodging">Hotel/Lodging</option>
              <option value="Government">Government</option>
              <option value="Health & Medical">Health & Medical</option>
              <option value="Entertainment & Arts">Entertainment & Arts</option>
              <option value="Automotive & Cars">Automotive & Cars</option>
              <option value="Non Profit">Non Profit</option>
              <option value="Money & Finance">Money & Finance</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Employment">Employment</option>
              <option value="News & Media">News & Media</option>
              <option value="Community">Community</option>
              <option value="Beauty & Fashion">Beauty & Fashion</option>
            </select>
          </div>
           )}
           
          {!session &&  (<div className="mb-3">
            <label htmlFor="BusinessCategory" className="form-label">Category</label>
            <select
              className="form-control"
              id="BusinessCategory"
              name="BusinessCategory"
              value={formData.BusinessCategory}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Shopping">Shopping</option>
              <option value="Hotel/Lodging">Hotel/Lodging</option>
              <option value="Government">Government</option>
              <option value="Health & Medical">Health & Medical</option>
              <option value="Entertainment & Arts">Entertainment & Arts</option>
              <option value="Automotive & Cars">Automotive & Cars</option>
              <option value="Non Profit">Non Profit</option>
              <option value="Money & Finance">Money & Finance</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Employment">Employment</option>
              <option value="News & Media">News & Media</option>
              <option value="Community">Community</option>
              <option value="Beauty & Fashion">Beauty & Fashion</option>
            </select>
          </div>
           )}

          {session && (
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">Status</label>
              <select
                className="form-control"
                id="Status"
                name="Status"
                value={formData.Status}
                onChange={handleChange}
              >
                <option value="pending">pending</option>
                <option value="approved">approved</option>
              </select>
            </div>
          )}

{session &&  ( <div className="mb-3">
            <label htmlFor="Location" className="form-label">Location</label>
            <select
              className="form-control"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
            >
              <option value="">Select a location</option>
              <option value="Banjul">Banjul</option>
              <option value="Serrekunda">Serrekunda</option>
              <option value="Bakau">Bakau</option>
              <option value="Sukuta">Sukuta</option>
              <option value="Brikama">Brikama</option>
              <option value="Abuko">Abuko</option>
              <option value="Farafenni">Farafenni</option>
              <option value="Gunjur">Gunjur</option>
              <option value="Lamin">Lamin</option>
              <option value="Brufut">Brufut</option>
              <option value="Kololi">Kololi</option>
              <option value="Yundum">Yundum</option>
              <option value="Brusubi">Brusubi</option>
              <option value="Other">Other</option>
            </select>
          </div>
          )}
          {!session &&  ( <div className="mb-3">
            <label htmlFor="Location" className="form-label">Location</label>
            <select
              className="form-control"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
            >
              <option value="">Select a location</option>
              <option value="Banjul">Banjul</option>
              <option value="Serrekunda">Serrekunda</option>
              <option value="Bakau">Bakau</option>
              <option value="Sukuta">Sukuta</option>
              <option value="Brikama">Brikama</option>
              <option value="Abuko">Abuko</option>
              <option value="Farafenni">Farafenni</option>
              <option value="Gunjur">Gunjur</option>
              <option value="Lamin">Lamin</option>
              <option value="Brufut">Brufut</option>
              <option value="Kololi">Kololi</option>
              <option value="Yundum">Yundum</option>
              <option value="Brusubi">Brusubi</option>
              <option value="Other">Other</option>
            </select>
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
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const categories = [
    "Restaurant", "Hotel/Lodging", "Shopping", "Government", "Health & Medical",
    "Entertainment & Arts", "Automotive & Cars", "Non Profit", "Money & Finance",
    "Real Estate", "Professional Services", "Food & Beverage", "Employment",
    "News & Media", "Community", "Beauty & Fashion"
  ];

  const cities = [
    "Banjul", "Serrekunda", "Bakau", "Sukuta", "Brikama", "Abuko", "Farafenni",
    "Gunjur", "Lamin", "Brufut", "Kololi", "Yundum", "Brusubi"
  ];

  return {
    props: {
      categories,
      cities,
    },
  };
}

