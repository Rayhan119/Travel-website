import React, { useEffect, useState } from "react";
import "./Booking.css";
import { Col, Container, Row } from "react-bootstrap";
const Booking = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("successfully deleted");
          const remaining = booking.filter(
            (bookingInfo) => bookingInfo._id !== id
          );
          setBooking(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="booking-header">Booking user Infromation</h2>
      {booking.map((singleBooking) => (
        <div key={singleBooking._id}>
          <div className="user-info shadow-lg p-3 mb-5 bg-body rounded">
            <Container>
              <Row>
                <Col>
                  <h3>
                    {" "}
                    Order ID : <span>{singleBooking._id}</span>
                  </h3>
                  <h3>
                    {" "}
                    Name: <span> {singleBooking.name}</span>
                  </h3>
                  <h3>
                    {" "}
                    Email: <span> {singleBooking.email}</span>
                  </h3>
                  <h3>
                    {" "}
                    Phone: <span> {singleBooking.phone}</span>
                  </h3>
                  <h3>
                    {" "}
                    Address: <span> {singleBooking.address}</span>
                  </h3>
                  <div className="book-delete-btn">
                    <button
                      onClick={() => {
                        handleDelete(singleBooking._id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        // <SingleBooking
        //   key={singleBooking._id}
        //   singleBooking={singleBooking}
        // ></SingleBooking>
      ))}
    </div>
  );
};

export default Booking;
