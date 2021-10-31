import React from "react";
//import from react bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner-section">
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <div className="banner-left-section text-white">
                <h2>
                  Let's Make a Amazing Trip with<span>Travelerz </span>
                </h2>
                <p>
                  Travel is a pleasent things in the world.It helps to remove
                  all the depression and anxiety through our minds.It also helps
                  to learn about the whole world and gain a lot of exprience.
                  Travel also helps us to get refreshment of our mind......
                </p>
              </div>
              <div className="banner-btn">
                <Button>Read more</Button>
              </div>
            </Col>
            <Col xs={0} md={7}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
