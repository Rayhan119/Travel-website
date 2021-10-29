import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2 className="text-center">Travelerz</h2>
            <p className="footer-about">
              we provide a good and safe service for the users.We have a good
              will in the travel world.Our has almos 50 worker who work for the
              devolpment and providing the best services.Our has a lot of offer
              packeges every week.. So getting a pleasure travel please contact
              with us..Thank you for the visiting...
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Form>
              <Row className="mb-3 footer-form">
                <h2 className="text-center pb-5">Contact Us</h2>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className="textarea"
                  placeholder="messege"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>

              <div className="footer-btn">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={4}>
            <div className="schedule ">
              <Col>
                <h2>Our Packeges</h2>
                <div className="day-time-section ">
                  <div className="day">
                    <h4>Rome</h4>
                    <h4>Paris</h4>
                    <h4>China</h4>
                    <h4>Thialand</h4>
                    <h4>India</h4>
                  </div>
                  <div className="time">
                    <h4>1400$</h4>
                    <h4>1600$</h4>
                    <h4>1000$</h4>
                    <h4>1900$</h4>
                    <h4>1400$</h4>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="copyrygiht-section">
        <p>all rights reserverd by @Travelerz||2021</p>
      </div>
    </div>
  );
};

export default Footer;
