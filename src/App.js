import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./Headers/Header.css";
import Header from "./Headers/Header";
import "./Body/Home.css";
import Home from "./Body/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Body/Checkout";
import Payment from "./Body/Payment";
import Ordered from "./Body/Ordered";
import BuyerSignUp from "./Auth/BuyerSignUp";
import BuyerLogin from "./Auth/BuyerLogin";
import { BuyerAuthProvider } from "./Auth/BuyerAuthProvider";
import PrivateRoute from "./Auth/PrivateRoute";
import { auth } from "../src/Auth/firebase";
import React, { useEffect } from "react";
import { useStateValue } from "../src/Body/ContextAPI/StateProvider";
import FinalOrders from "./Body/FinalOrders";
import FinallyDone from "./Body/FinallyDone";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is :: ", authUser);
      if (authUser) {
        dispatch({
          type: "ADD_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "ADD_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route exact path="/done">
            <Header />
            <FinallyDone />
          </Route>
          <Route exact path="/ordered">
            <Header />
            {/* <Ordered /> */}
            {/* <FinalOrders /> */}
          </Route>

          <Route exact path="/signup">
            {/* <Header /> */}
            <BuyerAuthProvider>
              <Container
                className="d-flex align-item-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <BuyerSignUp />
                </div>
              </Container>
            </BuyerAuthProvider>
          </Route>

          <Route exact path="/login">
            {/* <Header /> */}
            <BuyerAuthProvider>
              <Container
                className="d-flex align-item-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <BuyerLogin />
                </div>
              </Container>
            </BuyerAuthProvider>
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
            {/* <Products /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
