import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";
const Package = () => {
  return (
    <div className="pricing-container">
      <h3>Pricing Plan</h3>
      <h1>
        Choose Your <span>Package</span>
      </h1>
      <div className="pricing-info">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2500"
          className="pricing-items"
        >
          <h1>
            <span>Ba</span>sic
          </h1>
          <h2>$150.00</h2>
          <p>One Hours Sessions</p>
          <hr />
          <p>100 Picture Shoot</p>
          <hr />
          <p>25 Photo Editing</p>
          <hr />
          <p>Photo Album</p>
          <hr />
          <p>Onlice Access</p>
          <hr />
          <Link to="/cheakbox">
            <button className="pricing-btn">Book Now</button>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="25000"
          className="pricing-items"
        >
          <h1 className="popular">
            Stand<span>ard</span>
          </h1>
          <h2>$190.00</h2>
          <p>Two Hours Sessions</p>
          <hr />
          <p>200 Picture Shoot</p>
          <hr />
          <p>52 Photo Editing</p>
          <hr />
          <p>Photo Album</p>
          <hr />
          <p>Online Access</p>
          <hr />
          <Link to="/cheakbox">
            <button className="pricing-btn">Book Now</button>
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          className="pricing-items"
        >
          <h1>
            Perm<span>ium</span>
          </h1>
          <h2>$300.00</h2>
          <p>4 Hours Sessions</p>
          <hr />
          <p>400 Pictures Shoot</p>
          <hr />
          <p>115 Photo Click</p>
          <hr />
          <p>Photo Album</p>
          <hr />
          <p>Online Access</p>
          <hr />
          <Link to="/cheakbox">
            <button className="pricing-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package;
