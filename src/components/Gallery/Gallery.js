import React, { useState } from "react";
import "./Gallery.css";
import items from './itmes'
const Gallery = () => {
  const [gallery, setGallery] = useState(items);

  const filterItem = (categItem) => {
    const updatedItems = items.filter((item) => {
      return item.categori === categItem;
    });

    setGallery(updatedItems);
  };

  console.log(gallery);
  return (
    <div>
      <div className="btn-info">
        <div className="font-mono">
          <button className="gallery-btn" onClick={() => filterItem("Fashion")}>
            Fashion
          </button>
          <button className="gallery-btn" onClick={() => filterItem("Wedding")}>
            Wedding
          </button>
          <button className="gallery-btn" onClick={() => filterItem("Nature")}>
            Nature
          </button>
          <button className="gallery-btn" onClick={() => setGallery(items)}>
            All
          </button>
        </div>
      </div>
      <div className="gallery">{gallery.map((item) => {
          const {image} = item;
          return(
              <div data-aos="zoom-in-up" data-aos-duration="2000">
                  <img src={image} alt="" />
              </div>
          )
      })}</div>
    </div>
  );
};

export default Gallery;
