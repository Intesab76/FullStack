import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Body/ContextAPI/StateProvider";
// import { useSelector, useDispatch } from "react-redux";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  // const { buyer } = useSelector((state) => state.data);

  // const searchField = "";
  // const handleChange = (e) => {
  //   searchField = e.target.value;
  //   // console.log(e.target.value);
  //   const { stat, searchField } = this.state;
  //   const filteredSearchedData = stat.filter((searchQuery) => {
  //     searchQuery.filteredSearchedData.includes(searchField.toLowerCase());
  //   });

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input
          className="header_searchBar"
          type="text"
          // onChange={handleChange}
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_navBar">
        <div className="header_menu">
          <span className="header_menuUp">
            Hello , {!user ? "Guest" : user.email}
          </span>
          <span className="header_menuDown">
            <Link to="/signup" className="signHeader">
              {" "}
              {user ? "Sign Out" : "Sign In"}
            </Link>
          </span>
        </div>

        <div className="header_menu">
          <span className="header_menuUp">Returns</span>
          <span className="header_menuDown">And Orders</span>
        </div>

        <div className="header_menu">
          <span className="header_menuUp">Your</span>
          <span className="header_menuDown">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_CartIcon">
            <ShoppingBasketIcon />
            <span className="header_menuDown header_cartItemsCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
