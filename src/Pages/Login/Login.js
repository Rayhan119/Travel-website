import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import googleImg from "../../images/Google__G__Logo.svg.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useSSRSafeId } from "@react-aria/ssr";
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const {
    setUsers,
    setError,
    handleGoogleSignIn,
    signInEmailPassword,
    getEmail,
    getPassword,
  } = useAuth();

  return (
    <div className="login-section">
      <Container>
        <Row>
          <div className="main-form-section shadow p-3 mb-5 bg-body rounded">
            <h1>Please Login</h1>
            <div className="login-form-section">
              <Form onSubmit={signInEmailPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={getEmail}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onBlur={getPassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div className="login-form-btn">
                  <Button type="submit">Log In</Button>
                </div>
              </Form>
              <p className="mt-2 text-center toggle-link-style">
                <NavLink className="text-decoration-none" to="/signup">
                  Don't You Sign Up?
                  <span>Please Sign Up</span>
                </NavLink>
              </p>
              <hr />
            </div>

            <div className="google-signIn-section">
              <Button
                onClick={() => {
                  handleGoogleSignIn()
                    .then((result) => {
                      setUsers(result.user);
                      history.push(redirect);
                    })
                    .catch((error) => {
                      setError(error.messege);
                    });
                }}
              >
                <img src={googleImg} alt="" /> Google sign In
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
