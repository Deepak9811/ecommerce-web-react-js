import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { setDataProduct } from "./redux/productSlice";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_DOMAIN}/product/products`
    );

    const respData = await res.json();
    dispatch(setDataProduct(respData));
  };

  // console.log("product get  :=> ", productData);

  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import Task from "./page/Task";

// const App = () => {
//   return <Task />;
// };

// export default App;
