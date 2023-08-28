import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Login from "./page/Login";
import Menu from "./page/Menu";
import NewProduct from "./page/NewProduct";
import Signup from "./page/Signup";
import reportWebVitals from "./reportWebVitals";

import { store } from "./redux";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <RouterProvider router={router} />
  // </Provider>

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
