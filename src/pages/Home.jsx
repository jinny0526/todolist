import React from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {/* 빈태그 넣기 잊지말기 */}
      <div> Todolist </div>
      <Form />
      <Todo />
    </>
  );
};

export default Home;
