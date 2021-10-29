import React from "react";
//import from react bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
//image import
import aboutImg1 from "../../images/latestTours/latest-tour-1.jpg";
import aboutImg2 from "../../images/latestTours/latest-tour-2.jpg";
import aboutImg3 from "../../images/latestTours/latest-tour-3.jpg";
import aboutImg4 from "../../images/latestTours/latest-tour-4.jpg";
const About = () => {
  return (
    <div>
      <Container>
        <Row className="about-section">
          <h1>Who We Are ???</h1>
          <Col xs={6} md={4}>
            <h2>Travelerz</h2>
            <p>
              We establish our Tour agency almost 7 years.We have great fame
              among this sectors for our good and best quality services. thats
              why we are the leading health care in the arena.our has almost
              give 20+ special offer now and 10+ is comming very soon...We work
              hard for the clients hence they get a better trip.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <h2>Founder Tells</h2>
            <p>
              I am Rayhan Chowdhury.I build this Agency just for one mindset
              which is to Entertain the people and I do that almost the years. I
              always forced the employee of this Agency to serve the people very
              effectevely Thanks to all those who are visited this site...And
              stay with us for a pleasent journey..
            </p>
          </Col>
          <Col xs={6} md={4}>
            <div className="about-img-grid">
              <div className="top-grid">
                <img src={aboutImg1} alt="" />
                <img src={aboutImg2} alt="" />
              </div>
              <div className="bottom-grid">
                <img src={aboutImg3} alt="" />
                <img src={aboutImg4} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="about-btn">
          <Button>Call Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default About;
