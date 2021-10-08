// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { BuyerAuth } from "./BuyerAuthProvider";

// function PrivateRoute({ component: Component, ...rest }) {
//   const { currentBuyer } = BuyerAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         currentBuyer ? <Component {...props} /> : <Redirect to="/signup" />;
//       }}
//     ></Route>
//   );
// }

// export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = false;
  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to={"/login"} />)}
    />
  );
};

export default PrivateRoute;
