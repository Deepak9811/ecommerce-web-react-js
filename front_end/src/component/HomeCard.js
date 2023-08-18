import React from "react";

const HomeCard = ({ name, price, category, image, loading }) => {
  return (
    // 20579325 application number
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <div className="w-40 min-h-[160px]">
            <img src={image} alt="main-image" className="h-full" />
          </div>
          <h3 className="font-semibold test-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500 font-medium">{category}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-full">
            <p>{loading}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCard;
