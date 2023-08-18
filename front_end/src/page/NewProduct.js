import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log("image get :->> ", data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data :===>> ", data);

    const { name, category, image, price, description } = data;

    if (name && category && image && price && description) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/product/uploadProduct`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resp = await fetchData.json();
      console.log("data :->> ", resp);
      toast("Data add successfully.");

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Please fill all the fields.");
    }
  };

  console.log("admin email ======> ", process.env.REACT_APP_ADMIN_EMAIL);

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          value={data.name}
          type="text"
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="category">Category</label>
        <select
          value={data.category}
          name="category"
          className="bg-slate-200 p-1 my-1"
          id="category"
          onChange={handleOnChange}
        >
          <option hidden>Select the category</option>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>Ice-Cream</option>
          <option>Pizza</option>
          <option>Dosa</option>
          <option>Rice</option>
          <option>Cake</option>
          <option>Burger</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer ">
            {data.image ? (
              <img src={data.image} alt="product-image" className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          value={data.price}
          type="text"
          name="price"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          value={data.description}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          id="description"
          cols="30"
          rows={2}
          onChange={handleOnChange}
        ></textarea>
        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium drop-shadow my-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
