import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./ServiceDetail.css";
const ServiceDetail = (props) => {
  const { _id, name, description, img, price } = props.service;

  return (
    <div>
      <Container>
        <Row>
          <div className="shadow p-3 mb-5 bg-body rounded service-detail">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>
              <span>Price</span> : {price}$
            </h5>

            <NavLink to={`/services/${_id}`}>
              <div className="service-detail-btn">
                <Button>View Details</Button>
              </div>
            </NavLink>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
