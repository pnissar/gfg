import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/input";
import Task from "./components/Task";
function App() {
  const [count, setCount] = useState(0);
  const [a, sa] = useState([]);
  const add = (value) => {
    if (!a.includes(value)) {
      sa((pev) => [...pev, value]);
    }
  };
  const delAll = () => {
    sa([]);
  };
console.log(a);
  return (
    <>
      <h1>ToDoList</h1>
      <Input add={add} delAll={delAll} />
      <Task list={a} />
    </>
  );
}

export default App;
