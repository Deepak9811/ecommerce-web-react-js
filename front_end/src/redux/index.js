import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";
import userSliceReducer from "./userSlice";

// task
import taskSliceReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer,

    //task
    task: taskSliceReducer,
  },
});
