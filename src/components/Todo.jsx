import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Todo = () => {
  const todos = useSelector(function (state) {
    return state.todos;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>Todolist</h2>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Link to={`/detail/${todo.id}`}>넘어가기</Link>
              <p>{todo.id} </p>
              <p> {todo.title} </p>
              <p> {todo.content}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Donelist</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <p>{todo.id} </p>
                <p> {todo.title} </p>
                <p> {todo.content}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
