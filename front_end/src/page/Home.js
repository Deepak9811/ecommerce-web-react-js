import React, { useRef, useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import FilterProduct from "../component/FilterProduct";
import HomeCard from "../component/HomeCard";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCardList = productData?.slice(1, 5);

  const vegetableCartList = productData.filter(
    (x) => x.category === "Vegetable",
    []
  );

  const laodingArray = new Array(4).fill(null);
  const laodingArrayFeature = new Array(10).fill(null);

  const sliderProductRef = useRef();
  const nextProduct = () => {
    sliderProductRef.current.scrollLeft += 200;
  };

  const prevProduct = () => {
    sliderProductRef.current.scrollLeft -= 200;
  };

  const categoryList = [...new Set(productData.map((item) => item.category))];
  console.log("list category :====>>> ", categoryList);

  // filter data display
  const [filterBy, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState(productData);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilter = (category) => {
    alert("ehlo");
    const filter = productData.filter(
      (x) => x.category.toLowerCase() === category.toLowerCase()
    );

    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 ">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full ">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              className="h-7 "
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              alt="bike-delivery"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fasted Delivery in{" "}
            <span className="text-red-500 text-">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non esse
            reiciendis sint ratione, earum nostrum commodi velit exercitationem,
            itaque minus ducimus illum eum optio sit laboriosam? Voluptas, animi
            ducimus.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((item, i) => {
                return (
                  <HomeCard
                    key={i}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                  />
                );
              })
            : laodingArray.map((item, i) => {
                return <HomeCard key={i} loading={"loading..."} />;
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-700 my-4 mt-6">
            Fresh Vegetable
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-500 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-500 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={sliderProductRef}
        >
          {vegetableCartList[0]
            ? vegetableCartList.map((item, i) => {
                return (
                  <CardFeature
                    key={i}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    image={item.image}
                  />
                );
              })
            : laodingArrayFeature.map((item, i) => {
                return <CardFeature key={i} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl text-slate-700 my-4 mt-6">
          Your Product
        </h2>
        <div className="flex gap-4 justify-start md:justify-center overflow-scroll scrollbar-none">
          {categoryList[0] &&
            categoryList.map((item, i) => {
              return (
                <FilterProduct
                  key={i}
                  category={item}
                  onClick={() => handleFilter(item)}
                />
              );
            })}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {dataFilter.map((item, i) => {
            return (
              <CardFeature
                key={i}
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
