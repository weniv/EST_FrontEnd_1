import { useEffect, useState } from "react";
import TodoView from "./TodoView";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  useEffect(() => {
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setTodoList(todoData);
      });
  }, []);

  const handleInput = (e) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };

  const handleButton = () => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: +todoList[todoList.length - 1].id + 1,
        todo: todoText,
      };
      const newTodoList = [...prevTodoList, newTodo];
      if (newTodoList.length > 5) {
        newTodoList.shift();
      }
      return newTodoList;
    });
  };

  const props = { todoList, handleInput, todoText, handleButton };
  return <TodoView {...props} />;
};

export default Todo;
