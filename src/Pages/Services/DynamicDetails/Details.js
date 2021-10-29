import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const exactItem = data.filter((td) => td.id == id);
  console.log(exactItem);
  <h3>Name : {exactItem[0]?.name}</h3>;
  return (
    <div>
      <Container>
        <div className="details-heas text-center">
          <h1>Welcome To proced this service...</h1>
          <p className="text-danger fs-3">Hope you will get best treatment..</p>
        </div>
        <Row className="details">
          <Card
            className="shadow p-3 mb-5 bg-body rounded text-center details-cart"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" height="250px" src={exactItem[0]?.img} />
            <Card.Body>
              <Card.Title className="text-danger">
                {exactItem[0]?.name}
              </Card.Title>
              <Card.Text>
                <p>{exactItem[0]?.description}</p>
              </Card.Text>
              <Card.Text>
                <p>Price :{exactItem[0]?.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <div className="form-area">
          <Form>
            <Row className="mb-3">
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
            </Form.Group>

            <div className="form-sub-btn">
              <Button variant="primary" type="submit">
                Proceed service
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Details;
