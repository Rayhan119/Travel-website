import React from "react";
//import from react bootstrap
import { Button, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
//images import
import contactImg from "../../images/contact_us.png";
const Contact = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1 className="contact-header">Contact Us </h1>
          <div className="contact-form">
            <div className="contact-form-left">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Your Name.."
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="website" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control placeholder="messege" as="textarea" rows={5} />
                </Form.Group>
                <div className="form-btn">
                  <Button>Send messege</Button>
                </div>
              </Form>
            </div>
            <div className="contact-form-right">
              <img src={contactImg} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
