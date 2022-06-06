import React from "react";
import { RiTShirtAirLine } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import { GiBigDiamondRing } from "react-icons/gi";
import {
  MdOutlineWaterDrop,
  MdContentCopy,
  MdOutlinePhotoLibrary,
} from "react-icons/md";
import "./Services.css";
const Services = () => {
  return (
    <div className="service font-serif">
      <h1>My Services</h1>
      <h2>
        What We <span>Offer</span>
      </h2>
      <div className="service-info">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className="items font-serif"
        >
          <div className="icons">
            <h2>
              <RiTShirtAirLine />
            </h2>
            <h1>Fashion Photography</h1>
          </div>
          <div className="text">
            <p>
            Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="items">
          <div className="icons">
            <h2>
              <MdOutlineWaterDrop />
            </h2>
            <h1>Nature Photgraphy</h1>
          </div>
          <div className="text">
            <p>
            Nature photographs are published in scientific, travel and cultural magazines such as National Geographic Magazine,
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="items">
          <div className="icons">
            <h2>
              <MdContentCopy />
            </h2>
            <h1>Event Coverage</h1>
          </div>
          <div className="text">
            <p>
            Covering an event humanizes your brand and allows them to see you care about the event just as much as they do.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="2500"
          className="items"
        >
          <div className="icons">
            <h2>
              <MdOutlinePhotoLibrary />
            </h2>
            <h1>Property Tours</h1>
          </div>
          <div className="text">
            <p>
            Property tour is a relatively new type of tourism that allows you to combine leisure.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="items">
          <div className="icons">
            <h2>
              <FiPlay />
            </h2>
            <h1>Multimedia Services</h1>
          </div>
          <div className="text">
            <p>
            combination of two or more media components such as voice, data, video, and still image, in a single session delivered
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2500" className="items">
          <div className="icons">
            <h2>
              <GiBigDiamondRing />
            </h2>
            <h1>Weeding Photography</h1>
          </div>
          <div className="text">
            <p>
            such as a pre-wedding engagement session photographs are later used for the couple wedding invitations. On the official wedding day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
