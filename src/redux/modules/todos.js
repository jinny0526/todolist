import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = [
  {
    id: 1,
    title: "제목1",
    content: "내용1",
    isDone: false,
  },
  {
    id: 2,
    title: "제목2",
    content: "내용2",
    isDone: true,
  },
];

const todos = createSlice({
  name: "todos",
  initialState: initialState,

  reducers: {
    ADD_TODO: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default todos;
