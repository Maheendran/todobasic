import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const changee = (e) => {
    setText(e.target.value);
  };
  const clear = (e) => {
    setText("");
  };
  const add = () => {
    setTodo([...todo, text]);
  };
  const style = {
    color: "red",
    width: "100px",
    border: "1px solid"
  };

  return (
    <div className="main">
      <input onChange={changee} value={text} placeholder="enter" />
      <button onClick={clear}>clear</button>
      <button onClick={add}>add</button>
      <br />
      {text}
      <ul>
        {todo.map((todo) => (
          <li className="inputbox">{todo}</li>
        ))}
      </ul>
    </div>
  );
}
