import "./App.css";
import { useSelector } from "react-redux";
import Router from "./shared/Router";

function App() {
  const todos = useSelector(function (state) {
    return state.todos;
  });
  console.log("todos", todos);
  return (
    <>
      <Router></Router>;
    </>
  );
}

export default App;
