import React from "react";

const CardFeature = ({ price, image, category, name }) => {
  return (
    <div>
      <div className="h-20">
        <img src={image} alt={category} className="h-full" />
      </div>
    </div>
  );
};

export default CardFeature;
