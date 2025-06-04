"use client"

import Link from "next/link"
import { useState } from "react"
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap"
import PageBanner from "../src/components/PageBanner"
import Layout from "../src/layouts/Layout"
import { CalendarIcon, MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

// Events data for The Gambia
const eventsData = [
  {
    id: 1,
    title: "The Banjul Cultural Festival",
    date: "December 25th to January 1st",
    location: "Banjul, The Gambia",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Organized by the Banjul City Council, is an annual event that takes place from December 25th to January 1st. The festival is a celebration of the local Banjul culture and features a colorful masquerade parade that runs through the streets of the capital city.",
  },
  {
    id: 2,
    title: "National Tobaski Wanterr Trade Fair",
    date: "May 19th - June 6th",
    location: "Independence Stadium - Bakau",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "The Gambia Youth Chamber of Commerce (GYCC) offers vendor stalls as low as D5,500. A great opportunity for local businesses and entrepreneurs to showcase their products and services.",
  },
]

const EventCard = ({ event, openPopup }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={event.image} alt={event.title} style={{ height: "200px", objectFit: "cover" }} />
    <Card.Body>
      <Card.Title>{event.title}</Card.Title>
      <div className="d-flex align-items-center mt-2">
        <CalendarIcon className="me-2" width={16} height={16} />
        <span>{event.date}</span>
      </div>
      <div className="d-flex align-items-center mt-2">
        <MapPinIcon className="me-2" width={16} height={16} />
        <span>{event.location}</span>
      </div>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary" onClick={() => openPopup(event)}>
        View Details
      </Button>
    </Card.Footer>
  </Card>
)

const EventPopup = ({ event, show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{event.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        className="w-100 mb-3"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="d-flex align-items-center mb-2">
        <CalendarIcon className="me-2" width={16} height={16} />
        <span>{event.date}</span>
      </div>
      <div className="d-flex align-items-center mb-2">
        <MapPinIcon className="me-2" width={16} height={16} />
        <span>{event.location}</span>
      </div>
      <p>{event.description}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)

const Events = () => {
  const [events, setEvents] = useState(eventsData)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const openPopup = (event) => {
    setSelectedEvent(event)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <Layout>
        <PageBanner title={"Events"} />
        <Container className="py-5">
          <h1 className="mb-4">Upcoming Events</h1>
          <Row>
            <Col md={8}>
              {events.map((event) => (
                <EventCard key={event.id} event={event} openPopup={openPopup} />
              ))}
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Header>
                  <Card.Title>Search Events</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Search events..." />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      <MagnifyingGlassIcon className="me-2" width={16} height={16} />
                      Search
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link href="#" className="text-decoration-none">
                        Cultural Festivals
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="#" className="text-decoration-none">
                        Trade Fairs
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="#" className="text-decoration-none">
                        Business Events
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="#" className="text-decoration-none">
                        Community Events
                      </Link>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {selectedEvent && <EventPopup event={selectedEvent} show={showPopup} handleClose={closePopup} />}
        </Container>
      </Layout>
    </>
  )
}

export default Events
