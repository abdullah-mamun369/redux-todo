import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const totoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

const todoReducer = totoSlice.reducer;

export default todoReducer;
