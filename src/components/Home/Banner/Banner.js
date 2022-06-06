import React from "react";
import { Link } from "react-router-dom";
import banner from '../../../images/banner.jpg';
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="banner-info">
        <div data-aos="fade-down-right" data-aos-duration="2000" className="banner-text font-mono">
          <h1>Hello I'm</h1>
          <h2>Abi Abdullah</h2>
          <h3>Photographer</h3>
          <Link to="/about">
            <button className="banner-btn">About</button>
          </Link>
          <Link to="/gallery">
            <button className="banner-btn">Expolre</button>
          </Link>
        </div>
        <div data-aos="fade-down-left" data-aos-duration="2000" className="banner-img">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
