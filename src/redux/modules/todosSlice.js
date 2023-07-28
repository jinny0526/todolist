// import { nanoid } from "nanoid";

// const initialState = [
//   {
//     id: nanoid(),
//     title: "제목1",
//     content: "내용1",
//     isDone: false,
//   },
//   {
//     id: nanoid(),
//     title: "제목2",
//     content: "내용2",
//     isDone: true,
//   },
//   {
//     id: nanoid(),
//     title: "제목3",
//     content: "내용3",
//     isDone: false,
//   },
//   {
//     id: nanoid(),
//     title: "제목4",
//     content: "내용4",
//     isDone: true,
//   },
// ];
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, action.payload];
//     //데이터 추가하기
//     case "DELETE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);
//     //삭제하기
//     case "SWITCH_TODO":
// return state.map((todo) => {
//   if (todo.id === action.payload) {
//     return { ...todo, isDone: !todo.payload };
//   } else {
//     return todo;
//   }
//       });
//     default:
//       return state;
//   }
// };
// export default todos;

//툴킷으론 해보고 바꾸기
import { createSlice, nanoid } from "@reduxjs/toolkit";
import React from "react";

const initialState = [
  {
    id: nanoid(),
    title: "제목1",
    content: "내용1",
    isDone: false,
  },
  {
    id: nanoid(),
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
    DELETE_TODO: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    SWITCH_TODO: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.payload };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { ADD_TODO, DELETE_TODO, SWITCH_TODO } = todos.actions;

export default todos;
