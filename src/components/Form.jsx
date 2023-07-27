import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={(e) => {
          if (!title || !content) {
            alert(" 제목과 내용 둘다 쓰세요");
            return false;
          }
          e.preventDefault();
          dispatch({
            type: "ADD_TODO",
            payload: {
              id: nanoid(),
              title: title,
              content: content,
              isDone: false,
            },
          });
          setTitle("");
          setContent("");
        }}
      >
        <div>
          <label>제목</label>
          <input
            type="tesx"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>내용</label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button>추가하기</button>
      </form>
    </>
  );
};

export default Form;
