import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import food1 from "../images/food-image1.jpeg";
import food2 from "../images/food-image2.jpeg";
import food3 from "../images/food-image3.jpeg";

const Home = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={food1}
                className="d-block w-100 img-fluid"
                alt="food image"
                style={{ height: "90vh", width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={food2}
                className="d-block w-100 img-fluid"
                alt="food image"
                style={{ height: "90vh", width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={food3}
                className="d-block w-100 img-fluid"
                alt="food image"
                style={{ height: "90vh", width: "100%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-dark text-light ">
              <div className="mt-5 text-center">
                <FaInstagram className="fs-1 mx-2 media-icons" />
                <FaTwitter className="fs-1 mx-2 media-icons" />
                <FaGithub className="fs-1 mx-2 media-icons" />
                <FaYoutube className="fs-1 mx-2 media-icons" />
              </div>
              <p className="my-5 fs-5 text-center">
                All Rights Reserved &copy; My Restaurant
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
