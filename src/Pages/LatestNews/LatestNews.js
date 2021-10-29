import React from "react";
import "./LatestNews.css";
import latestTour1 from "../../images/latestTours/latest-tour-1.jpg";
import latestTour2 from "../../images/latestTours/latest-tour-2.jpg";
import latestTour3 from "../../images/latestTours/latest-tour-3.jpg";
import latestTour4 from "../../images/latestTours/latest-tour-4.jpg";
import latestTour5 from "../../images/latestTours/latest-tour-5.jpg";
import latestTour6 from "../../images/latestTours/latest-tour-6.jpg";
//images
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const LatestNews = () => {
  return (
    <div>
      <Container>
        <Row className="news-section">
          <div className="news-header">
            <h1>
              Latest <span>Tours</span>{" "}
            </h1>
          </div>
          <Col xs={12} md={4} className="latest">
            <Card
              className=" border-0 mx-3 shadow p-3 mb-5 bg-body rounded"
              style={({ width: "20rem" }, { height: "350px" })}
            >
              <Card.Img variant="top" src={latestTour1} />
              <Card.Body>
                <Card.Title className="text-primary">
                  Christ the Redeemer, Brazil
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="latest">
            <Card
              className=" border-0 mx-3 shadow p-3 mb-5 bg-body rounded"
              style={({ width: "20rem" }, { height: "350px" })}
            >
              <Card.Img variant="top" src={latestTour2} />
              <Card.Body>
                <Card.Title className="text-primary">
                  The Eiffel Tower in Paris,France
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="latest">
            <Card
              className=" border-0 mx-3 shadow p-3 mb-5 bg-body rounded"
              style={({ width: "20rem" }, { height: "350px" })}
            >
              <Card.Img variant="top" src={latestTour3} />
              <Card.Body>
                <Card.Title className="text-primary">
                  Sydney Opera House,Australia
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="latest">
            <Card
              className=" border-0 mx-3 shadow p-3 mb-5 bg-body rounded"
              style={({ width: "20rem" }, { height: "350px" })}
            >
              <Card.Img variant="top" src={latestTour4} />
              <Card.Body>
                <Card.Title className="text-primary">
                  Burj Khalifa in Dubai, UAE
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="latest">
            <Card
              className=" border-0 mx-3 shadow p-3 mb-5 bg-body rounded"
              style={({ width: "20rem" }, { height: "350px" })}
            >
              <Card.Img variant="top" src={latestTour5} />
              <Card.Body>
                <Card.Title className="text-primary">
                  The Great Wall, China.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="latest">
            <Card
              className=" border-0 mx-3 shadow p-3 mb-5 bg-body rounded"
              style={({ width: "20rem" }, { height: "350px" })}
            >
              <Card.Img variant="top" src={latestTour6} />
              <Card.Body>
                <Card.Title className="text-primary">
                  Aya Sofya Mosque,Turkey
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestNews;
