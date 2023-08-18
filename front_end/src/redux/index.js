import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";
import userSliceReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer,
  },
});
