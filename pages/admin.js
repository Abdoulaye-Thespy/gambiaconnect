'use client'

import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Layout from "../src/layouts/Layout";
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import initialData from "./GambiaConnectDB";

// Make sure you have this import at the top of your file
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminListingGrid() {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = initialData.filter(org =>
      org.OrganizationName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout header={3}>
    <Container className="mt-200 mb-200">
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
        {data.map((org) => (
          <Col key={org.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{org.OrganizationName}</Card.Title>
                <p className="card-text"><strong>Address:</strong> {org.Address}</p>
                <p className="card-text"><strong>Phone:</strong> {org.PhoneNumber}</p>
                <p className="card-text"><strong>Email:</strong> {org.Email}</p>
                <p className="card-text"><strong>Website:</strong> {org.CompanyWebsite || "N/A"}</p>
                <p className="card-text"><strong>Facebook:</strong> {org.facebook || "N/A"}</p>
                <p className="card-text"><strong>Twitter:</strong> {org.twitter || "N/A"}</p>
                <p className="card-text"><strong>LinkedIn:</strong> {org.linkedin || "N/A"}</p>
                <p className="card-text"><strong>Category:</strong> {org.BusinessCategory || "N/A"}</p>
                <p className="card-text"><strong>Description:</strong> {org.Description || "N/A"}</p>
                <p className="card-text"><strong>Status:</strong> {org.status || "N/A"}</p>
                {org.Pictures && org.Pictures.length > 0 && (
                  <div className="mt-3">
                    <strong>Pictures:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {org.Pictures.map((pic, index) => (
                        <img key={index} src={pic} alt={`${org.OrganizationName} - ${index + 1}`} className="img-thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      ))}
                    </div>
                  </div>
                )}
              </Card.Body>
              <Card.Footer>
                <Link href={`/modify/${org.id}`} passHref>
                  <Button as="a">Modify</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </Layout>
  );
}

