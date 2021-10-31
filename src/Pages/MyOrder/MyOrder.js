import React from "react";
import "./MyOrder.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import useAuth from "../../../src/Hooks/useAuth";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const { users } = useAuth();
  const email = users.email;
  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = order.filter(
              (singleOrderInfo) => singleOrderInfo._id !== id
            );
            setOrder(remaining);
          }
        });
    }
  };

  return (
    <div>
      {order.map((singleOrder) => (
        <div key={singleOrder._id}>
          <div className="single-order shadow-lg p-3 mb-5 bg-body rounded">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="single-order-img">
                    <img src={singleOrder.img} alt="" />
                  </div>

                  <h3>
                    Description : <span>{singleOrder.description}</span>{" "}
                  </h3>
                  <h3>
                    Price : <span>{singleOrder.price}</span>{" "}
                  </h3>
                </Col>
                <Col md={6}>
                  <h3>
                    {" "}
                    Order ID : <span>{singleOrder._id}</span>
                  </h3>
                  <h3>
                    {" "}
                    Email: <span> {singleOrder.email}</span>
                  </h3>
                  <h3>
                    {" "}
                    Phone: <span> {singleOrder.phone}</span>
                  </h3>
                  <h3>
                    {" "}
                    Address: <span> {singleOrder.address}</span>
                  </h3>
                  <div className="single-order-delete-btn">
                    <button
                      onClick={() => {
                        handleDelete(singleOrder._id);
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

export default MyOrder;
