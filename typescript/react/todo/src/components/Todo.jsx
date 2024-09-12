import { useState } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/todoHook";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, postTodo, isLoading] = useTodoData();
  const handleInput = (e) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };
  const handleButton = () => {
    postTodo(todoText);
  };

  const props = { todoList, handleInput, todoText, handleButton };
  return isLoading ? <h1>로딩중 페이지</h1> : <TodoView {...props} />;
};

export default Todo;
