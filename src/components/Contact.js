import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-4">
            <h1>Contact My Restaurant</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sit rerum, necessitatibus ut accusamus accusantium, provident qui
              culpa adipisci, non laudantium consequatur cupiditate iusto
              blanditiis animi mollitia fugit possimus totam commodi eius.
              Explicabo sit magni quam eveniet commodi maiores reiciendis
              mollitia fugit possimus totam.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action bg-dark text-light text-center py-3">
                Contact Details
              </li>
              <li className="list-group-item list-group-item-action py-3">
                <span>
                  <MdOutlineSupportAgent />
                </span>{" "}
                1800-00-000(tollfree)
              </li>
              <li className="list-group-item list-group-item-action py-3">
                <span>
                  <MdEmail />
                </span>{" "}
                myrestaurant@gmail.com
              </li>
              <li className="list-group-item list-group-item-action py-3">
                <span>
                  <FaPhoneAlt />
                </span>{" "}
                1234567890
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
