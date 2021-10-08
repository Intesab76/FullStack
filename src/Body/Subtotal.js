// import React from "react";
// import "../Body/Subtotal.css";
// import "./Checkout";
// import CurrencyFormat from "react-currency-format";
// import { getCartTotal } from "./ContextAPI/reducer";
// import { useStateValue } from "../Body/ContextAPI/StateProvider";
// import { useHistory } from "react-router-dom";

// function Subtotal() {
//   const history = useHistory();
//   const [{ cart }, dispatch] = useStateValue();

//   return (
//     <div className="subTotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({cart.length} item(s)):<strong> {value} </strong>
//             </p>
//             <small className="subtotal_coupon">
//               <input type="checkbox" />
//               This order contains a coupon
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getCartTotal(cart)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"₹"}
//       />
//       <button>Proceed to Checkout</button>
//     </div>
//   );
// }
// export default Subtotal;

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./ContextAPI/StateProvider";
import { getCartTotal } from "./ContextAPI/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  // const makePayment = () => {
  //   dispatch({
  //     type: "MAKE_PAYMENT",
  //   });
  // };

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_coupon">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={(evt) => history.push("/payment")}>
        {" "}
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
