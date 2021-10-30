import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/Banner/taravel-log.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { users, handleGoogleSignOut } = useAuth();
  return (
    <div>
      <div className="header-top-info shadow-sm p-3 ">
        <Container>
          <Row>
            <Col className="header-top text-center">
              <span>
                {" "}
                <i className="fas fa-map-marker-alt font-icon"></i> 84 Forest
                Ave, Lake Grove, New York
              </span>
              <span className="header-icon">
                {" "}
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-skype"></i>
              </span>

              <span>
                <i className="fas fa-phone font-icon"></i>
                +8801819878700
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="nav-area ">
        <Navbar expand="lg">
          <Navbar.Brand to="/home">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-style">Travelerz</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-uppercase nav-link-style">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">contact us</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end text-uppercase">
            <Nav className="nav-link-right">
              {users?.email ? (
                <>
                  <NavLink to="/book">My Booking</NavLink>

                  <NavLink onClick={handleGoogleSignOut} to="/login">
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/signup">Signup</NavLink>
                  <NavLink to="/login">Login</NavLink>
                </>
              )}
            </Nav>

            {users.email ? (
              <div className="user-info">
                <img src={users.photoURL} alt="" />
                <p>{users.displayName}</p>
              </div>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
