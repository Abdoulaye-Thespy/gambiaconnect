import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Layout from "../src/layouts/Layout";
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminListingGrid() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    checkFileExists();
  }, []);

  const checkFileExists = async () => {
    try {
      const response = await fetch('/api/s3', { method: 'GET' });
      const dataResponse = await response.json();
      const data = dataResponse.data;
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error('Error checking file existence:', error);
    }
  };

  useEffect(() => {
    const filtered = data.filter(org =>
      org.OrganizationName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm("Are you sure you want to delete this business?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/delete/${id}`, { method: 'DELETE' });
        if (response.ok) {
          alert('Business deleted successfully!');
          setData(data.filter(org => org.id !== id));
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

  return (
    <Layout>
      <Container className="mt-100 mb-200">
        <h1 className="mb-4">Admin Panel</h1>

        <Row className="mb-4">
          <Col>
            <Form.Control
              type="search"
              placeholder="Search organizations"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
          <Col xs="auto">
            <Link href="/newbusiness" passHref>
              <Button as="a">Add New Business</Button>
            </Link>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredData.map((org) => (
            <Col key={org.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{org.OrganizationName}</Card.Title>
                  <p className="card-text"><strong>Address:</strong> {org.Address}</p>
                  <p className="card-text"><strong>Phone:</strong> {org.PhoneNumber}</p>
                  <p className="card-text"><strong>Email:</strong> {org.Email}</p>
                  <p className="card-text"><strong>Website:</strong> {org.CompanyWebsite || "N/A"}</p>
                  <p className="card-text"><strong>Facebook:</strong> {org.SocialMediaHandle || "N/A"}</p>
                  <p className="card-text"><strong>Category:</strong> {org.BusinessCategory || "N/A"}</p>
                  <p className="card-text"><strong>Description:</strong> {org.Description || "N/A"}</p>
                  <p className="card-text"><strong>Status:</strong> {org.status || "N/A"}</p>
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
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Link href={`/modify/${org.id}`} passHref>
                    <Button as="a">Modify</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(org.id)}>Delete</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}