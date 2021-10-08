import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./BuyerSignUp.css";
import { BuyerAuth } from "./BuyerAuthProvider";
import { signInWithGoogle } from "./firebase";

function BuyerSignUp() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp } = BuyerAuth();
  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handelSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password and Confirm Password didn't Match");
    } else if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef.current.value === "" ||
      confirmPasswordRef.current.value === ""
    ) {
      return setError("All fields are mandatory !!");
    }
    try {
      setError("");
      setLoading(true);
      signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Account creation Failed. Try Again ");
    }
  }

  return (
    <div className="signupBuyer">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="signUpLogo"
        />
      </Link>
      <Card style={{ marginTop: "30px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up.</h2>
          {/* {JSON.stringify(currentBuyer.email)} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handelSubmit}>
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={firstNameRef}></Form.Control>
            </Form.Group>

            <Form.Group id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lastNameRef}></Form.Control>
            </Form.Group>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}></Form.Control>
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef}></Form.Control>
            </Form.Group>

            <Form.Group id="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={confirmPasswordRef}
              ></Form.Control>
            </Form.Group>

            <button disabled={loading} className="signupButton" type="submit">
              Sign Up
            </button>

            <button
              onClick={signInWithGoogle}
              className="googleSignUp"
              type="submit"
            >
              Sign up with Google Account
            </button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 mb-3">
          Already have an account?
          <Link to="/login" className="LoginLink">
            {" "}
            Log In.
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default BuyerSignUp;
