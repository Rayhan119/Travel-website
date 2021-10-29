import React from "react";
import "./Offer.css";
import offer from "../../images/offer.png";
import { Col, Container, Row } from "react-bootstrap";
const Offer = () => {
  return (
    <div>
      <div className="offer-area">
        <Container>
          <Row>
            <Col sm={6} md={6}>
              <img src={offer} alt="" />
            </Col>
            <Col sm={6} md={6}>
              <h1>Last Minute Offer For You </h1>
              <p>
                We provide a Suitable offer.If you get this special offer please
                contact with us as soon as possible.We are recognize for our
                good services and experience..
              </p>
              <div className="button">
                <button>see offer</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Offer;
