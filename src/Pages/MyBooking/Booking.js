import React, { useEffect, useState } from "react";
import "./Booking.css";
import { Col, Container, Row } from "react-bootstrap";
const Booking = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://macabre-vampire-16752.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure want to delete?");
    if (proceed) {
      const url = `https://macabre-vampire-16752.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = booking.filter(
              (bookingInfo) => bookingInfo._id !== id
            );
            setBooking(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="booking-header">Booking Infromation</h2>
      {booking.map((singleBooking) => (
        <div key={singleBooking._id}>
          <div className="order-info shadow-lg p-3 mb-5 bg-body rounded">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="order-info-img">
                    <img src={singleBooking.img} alt="" />
                  </div>

                  <h3>
                    Description : <span>{singleBooking.description}</span>{" "}
                  </h3>
                  <h3>
                    Price : <span>{singleBooking.price}</span>{" "}
                  </h3>
                </Col>
                <Col md={6}>
                  <h3>
                    {" "}
                    Order ID : <span>{singleBooking._id}</span>
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
      ))}
    </div>
  );
};

export default Booking;
