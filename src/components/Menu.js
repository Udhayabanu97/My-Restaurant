import React from "react";
import menu1 from "../images/menu1.jpeg";
import menu2 from "../images/menu2.jpeg";
import menu3 from "../images/menu3.jpeg";
import menu4 from "../images/menu4.jpeg";
import menu5 from "../images/menu5.jpeg";
import menu6 from "../images/menu6.jpeg";

const Menu = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center">Our Menu Items</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 my-4">
            <div className="card">
              <img
                src={menu1}
                alt="Food image"
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
              />
              <div className="card-body">
                <h3>Dosa</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officiis reprehenderit
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className="card">
              <img
                src={menu2}
                alt="Food image"
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
              />
              <div className="card-body">
                <h3>Idli Vada</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officiis reprehenderit
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className="card">
              <img
                src={menu3}
                alt="Food image"
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
              />
              <div className="card-body">
                <h3>Chapati</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officiis reprehenderit
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 my-4">
            <div className="card">
              <img
                src={menu4}
                alt="Food image"
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
              />
              <div className="card-body">
                <h3>Parotta</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officiis reprehenderit
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className="card">
              <img
                src={menu5}
                alt="Food image"
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
              />
              <div className="card-body">
                <h3>Rice</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officiis reprehenderit
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className="card">
              <img
                src={menu6}
                alt="Food image"
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
              />
              <div className="card-body">
                <h3>Briyani</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officiis reprehenderit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
