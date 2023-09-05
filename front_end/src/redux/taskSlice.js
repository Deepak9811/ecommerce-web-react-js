import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  number: "",
  _id: "",
};

export const taskSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    taskRedux: (state, action) => {
      console.log("taskRedux :-> ", action.payload.data);
      state.email = action.payload.data.email;
      state.number = action.payload.data.number;
      state._id = action.payload.data._id;
    },
  },
});

export const { taskRedux } = taskSlice.actions;

export default taskSlice.reducer;
