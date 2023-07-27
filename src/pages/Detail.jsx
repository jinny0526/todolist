import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //Parameter(파라미터) 값을 URL을 통해서 넘겨서 넘겨받은 페이지에서 사용할 수 있도록 도와준다.
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id);

  console.log("id", id);
  console.log("todos", todos);
  console.log("todo", todo);
  return (
    <div key={todo.id}>
      <p>{todo.id} </p>
      <p> {todo.title} </p>
      <p> {todo.content}</p>
      <p>{todo.isDone.toString()}</p>

      <button onClick={() => navigate("/")}>이전으로 돌아가기</button>
    </div>
  );
};

export default Detail;
