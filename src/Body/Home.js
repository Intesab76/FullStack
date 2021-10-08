import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "../Body/Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <Carousel fade nextIcon="" nextLabel="" prevIcon="" prevLabel="">
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x300/?amazonprime"
            alt="One"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x300/?amazon"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x300/?tech"
            alt="Three"
          />
        </Carousel.Item>
      </Carousel>

      <div className="home_row">
        <Products
          id="12345432"
          title="Apple AirPods Pro"
          price={13000}
          rating={4}
          image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UL320_.jpg"
        />

        <Products
          id="12321345"
          title="Strip Lights Warm white 49.2ft"
          price={1900}
          rating={3}
          image="https://m.media-amazon.com/images/I/81ZhqlmQUJS._AC_UL320_.jpg"
        />

        <Products
          id="12356789"
          title="Distressed Jean Hat Universal Fit"
          price={1100}
          rating={4}
          image="https://m.media-amazon.com/images/I/61AYemVvKRL._AC_UL320_.jpg"
        />
      </div>

      <div className="home_row"></div>

      <div className="home_row"></div>
    </div>
  );
}

export default Home;
