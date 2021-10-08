import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./BuyerLogin.css";
import { BuyerAuth } from "./BuyerAuthProvider";
// import { signInWithGoogle } from "./firebase";

function BuyerLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = BuyerAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handelSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      return setError("Empty fields are strictly not allowed !!");
    }
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/ordered");
    } catch {
      setError("Login Failed. Try Again ");
    }
  }

  return (
    <div className="loginBuyer">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="loginLogo"
        />
      </Link>
      <Card style={{ marginTop: "30px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login Page</h2>
          {/* {JSON.stringify(currentBuyer.email)} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handelSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}></Form.Control>
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef}></Form.Control>
            </Form.Group>

            <button disabled={loading} className="signupButton" type="submit">
              Log In
            </button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 mb-3">
          Doesn't have an account?
          <Link to="/signup" className="signUpLink">
            {" "}
            Sign Up.
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default BuyerLogin;
