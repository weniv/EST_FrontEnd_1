import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Todo(props) {
  const [todoList, setTodolist] = useState([
    { id: "1", todo: "아침먹기" },
    { id: "2", todo: "점심먹기" },
  ]);

  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>
            <p>{todoItem.todo}</p>
          </li>
        ))}
      </ul>
      <input type="text" />
      <button type="button">투두추가</button>
    </div>
  );
}

function App() {
  return <Todo />;
}

export default App;
