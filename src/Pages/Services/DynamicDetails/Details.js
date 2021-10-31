import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import "./Details.css";
const Details = () => {
  //redirect
  const history = useHistory();
  const location = useLocation();
  const redirect = "/home";
  //react form
  const { register, handleSubmit, reset } = useForm();
  //user axios
  const [data, setData] = useState({});

  const { _id, ...rest } = data;

  const { id } = useParams();
  const onSubmit = (data) => {
    console.log({ ...data, ...rest });
    axios
      .post("https://macabre-vampire-16752.herokuapp.com/users", {
        ...data,
        ...rest,
      })

      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire(
            "Good job!",
            "You Successfully Booked your Place",
            "success"
          );

          history.push(redirect);
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://macabre-vampire-16752.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Container className="service-details-section">
        <Row>
          <Col sm={6} md={6}>
            {/* page overview */}
            <div className="details-section shadow p-3 mb-5  rounded">
              <div className="image-section ">
                <img src={data.img} alt="" />
              </div>
              <div className=" text-center text-success">
                <h2>{data.name}</h2>
              </div>
              {/* overview */}
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
              </div>
            </div>
          </Col>
          <Col sm={6} md={6}>
            <div className="booking-form shadow p-5 mb-5  rounded">
              <h2>Booking Please!!</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Name"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <input placeholder="Phone" {...register("phone")} />
                <input
                  placeholder="Please use login Email"
                  {...register("email")}
                />
                <input placeholder="Address" {...register("address")} />

                <div className="form-sub-button">
                  <input type="submit" value="Booking" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
