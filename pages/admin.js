import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../src/layouts/Layout";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';

const AdminListingGrid = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingData, setLoadingData] = useState(true); // Loading state for data
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const isAdminAuthenticated = Cookies.get('isAdminAuthenticated');
    if (status === 'unauthenticated' || !isAdminAuthenticated) {
      router.push('/login');
    } else if (status === 'authenticated' && isAdminAuthenticated) {
      fetchData();
    }
  }, [status, router]);

  const fetchData = async () => {
    setLoadingData(true); // Start loading data
    try {
      const response = await fetch('/api/s3', { method: 'GET' });
      const dataResponse = await response.json();
      const data = dataResponse.data;
      setOriginalData(data);
      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingData(false); // End loading data
    }
  };

  useEffect(() => {
    const filtered = originalData.filter(org =>
      org.OrganizationName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, originalData]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this business?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/delete/${id}`, { method: 'DELETE' });
        if (response.ok) {
          alert('Business deleted successfully!');
          setOriginalData(originalData.filter(org => org.id !== id));
          setFilteredData(filteredData.filter(org => org.id !== id));
        } else {
          throw new Error('Failed to delete business');
        }
      } catch (error) {
        console.error('Error deleting business:', error);
        alert('There was a problem deleting the business.');
      }
    }
  };

  const handleLogout = async () => {
    Cookies.remove('isAdminAuthenticated');
    await signOut({ redirect: false });
    router.push('/login');
  };

  if (status === 'loading') {
    return <div>Loading...</div>; // Loader for session loading
  }

  if (!session || !Cookies.get('isAdminAuthenticated')) {
    return null; // Redirect to login if unauthorized
  }

  return (
    <Layout>
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Filter Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="search-form">
                      <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                          required=""
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                        <i className="ti-search" />
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected>
                            Category
                          </option>
                          <option>Restaurant</option>
                          <option>Hotel/Lodging</option>
                          <option>Shopping</option>
                          <option>Government</option>
                          <option>Health & Medical</option>
                          <option>Entertainment & Arts</option>
                          <option>Automotive & Cars</option>
                          <option>Non Profit</option>
                          <option>Money & Finance</option>
                          <option>Real Estate</option>
                          <option>Professional Services</option>
                          <option>Food & Beverage</option>
                          <option>Employment</option>
                          <option>News & Media</option>
                          <option>Community</option>
                          <option>Beauty & Fashion</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected>
                            Location
                          </option>
                          <option>Banjul</option>
                          <option>Serrekunda</option>
                          <option>Bakau</option>
                          <option>Sukuta</option>
                          <option>Brikama</option>
                          <option>Abuko</option>
                          <option>Farafenni</option>
                          <option>Gunjur</option>
                          <option>Lamin</option>
                          <option>Brufut</option>
                          <option>Kololi</option>
                          <option>Yundum</option>
                          <option>Brusubi</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 text-end">
                      <Button variant="outline-danger" onClick={handleLogout} className="me-2">Logout</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row mb-4 align-items-center">
                <div className="col-lg-8">
                  <h1 className="mb-4">Admin Panel</h1>
                  <Form.Control
                    type="search"
                    placeholder="Search organizations"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control mb-3"
                  />
                </div>
              </div>

              <div className="row">
                {loadingData ? ( // Conditional rendering based on loadingData
                  <div>Loading data...</div> // Loader for data fetching
                ) : (
                  filteredData.map((org, index) => (
                    <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                      <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                        <div className="listing-thumbnail listing-content">
                          <img
                            src="assets/images/listing/listing-grid-16.jpg"
                            alt={`${org.OrganizationName} Listing Image`}
                          />
                        </div>
                        <div className="listing-content">
                          <h3 className="title">
                            <Link href={`/modify/${org.id}`}>
                              {org.OrganizationName}
                            </Link>
                          </h3>
                          <p><strong>Address:</strong> {org.Address}</p>
                          <p><strong>Town:</strong> {org.Location || "N/A"}</p>
                          <p><strong>Phone:</strong> {org.PhoneNumber}</p>
                          <p><strong>Email:</strong> {org.Email}</p>
                          <p><strong>Website:</strong> {org.CompanyWebsite || "N/A"}</p>
                          <p><strong>Facebook:</strong> {org.SocialMediaHandle || "N/A"}</p>
                          <p><strong>Category:</strong> {org.BusinessCategory || "N/A"}</p>
                          <p><strong>Description:</strong> {org.Description || "N/A"}</p>
                          <p><strong>Status:</strong> {org.Status || "N/A"}</p>
                          {org.Pictures && org.Pictures.length > 0 && (
                            <div className="mt-3">
                              <strong>Pictures:</strong>
                              <div className="d-flex flex-wrap gap-2 mt-2">
                                {org.Pictures.map((pic, picIndex) => (
                                  <img key={picIndex} src={pic} alt={`${org.OrganizationName} - ${picIndex + 1}`} className="img-thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                ))}
                              </div>
                            </div>
                          )}
                          <div className="d-flex justify-content-between p-3">
                            <Link href={`/modify/${org.id}`} passHref>
                              <Button as="a">Modify</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleDelete(org.id)}>Delete</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminListingGrid;