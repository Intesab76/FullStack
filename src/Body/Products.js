import React from "react";
import "../Body/Products.css";
// import StarRatings from "./StarRatings";
import { useStateValue } from "./ContextAPI/StateProvider";

// props can also be used and hence props.title , props.image  and likewise ...
function Products({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADDED_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="products">
      <div className="product_info">
        {/* <p> Apple AirPods Pro</p> */}
        <p>{title}</p>
        <p className="product_price">
          <small> ₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((itr) => (
              <p key={itr}> 🌟</p>
            ))}
          {/* <p> ♣ </p> */}
        </div>
        {/* <div>
          <StarRatings />
        </div> */}
      </div>

      <img src={image} alt="" />
      {/* <img
        src="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UL320_.jpg"
        alt=" "
      /> */}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Products;
