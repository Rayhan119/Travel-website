import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Container className="service-details-section">
        <Row>
          <Col sm={6} md={6}>
            <div className="image-section shadow p-3 mb-5 bg-body rounded">
              <img src={data.img} alt="" />
            </div>
            <div className="place text-center shadow p-3 mb-5  rounded">
              <h2>{data.name}</h2>
            </div>
          </Col>
          <Col sm={6} md={6}>
            <div className="details-section shadow p-3 mb-5  rounded">
              <h1>Package Overview</h1>
              <div className="div">
                <h3>
                  {" "}
                  Place Name : <span>{data.name}</span>
                </h3>
                <h3>
                  {" "}
                  Place Decription: <span> {data.description}</span>
                </h3>
                <h3>
                  {" "}
                  Duration : <span>7days</span>
                </h3>
                <h3>
                  {" "}
                  Vehicles : <span>Airbus A340</span>
                </h3>
                <h3>
                  {" "}
                  Price : <span>{data.price}$</span>{" "}
                </h3>
                <div className="form-sub-btn">
                  <Button variant="primary" type="submit">
                    Book service
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <div className="form-sub-btn">
              <Button variant="primary" type="submit">
                Book service
              </Button>
            </div> */}
      </Container>
    </div>
  );
};

export default Details;
