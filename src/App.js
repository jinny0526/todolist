import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Router from "./shared/Router";

function App() {
  const todos = useSelector((state) => state.todos);
  //const todos=useSelectoe(fuction(state){return state.todos})

  return <Router />;
}

export default App;
