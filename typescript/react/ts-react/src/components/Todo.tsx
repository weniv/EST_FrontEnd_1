import { useState,ChangeEvent } from "react";
import TodoView, { AddTodoButton, TodoInput, TodoList } from "./TodoView";
import useTodoData from "../hooks/todoHook";

const Todo = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, postTodo, isLoading] = useTodoData();
  
  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };

  const handleButton = () => {
    postTodo(todoText);
  };

  const props = { todoList, handleInput, todoText, handleButton };
  return isLoading ? <h1>로딩중 페이지</h1> : (
  <TodoView>
      <TodoList todoList={todoList}/>
      <TodoInput todoText={todoText} handleInput={handleInput}/>
      <AddTodoButton handleButton={handleButton}/>
  </TodoView>
  );
};

export default Todo;
