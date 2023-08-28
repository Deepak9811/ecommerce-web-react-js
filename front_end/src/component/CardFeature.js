import React from "react";

const CardFeature = ({ price, image, category, name, loading }) => {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col mb-7 overflow-hidden">
      {name ? (
        <>
          <div className="h-28 flex flex-col justify-center items-center">
            <img src={image} alt={category} className="h-full" />
          </div>

          <h3 className="font-semibold test-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
            {name}
          </h3>
          <p className="text-slate-500 font-medium">{category}</p>
          <p className="font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
          <button className="bg-yellow-500 py-1 my-2 mb-5 rounded">
            Add Cart
          </button>
        </>
      ) : (
        <>
          <div className="min-h-[150px] flex justify-center items-center">
            <p className="">{loading}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardFeature;
