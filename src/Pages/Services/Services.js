import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceDetail from "./ServiceDetail/ServiceDetail";

import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://macabre-vampire-16752.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <div className="services-section">
            <div className="services-header">
              <h4>Our Services</h4>
              <hr />
              <h1>Popular Tours</h1>
            </div>
            <div className="services-card ">
              {services.map((service) => (
                <ServiceDetail
                  key={service.id}
                  service={service}
                ></ServiceDetail>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
