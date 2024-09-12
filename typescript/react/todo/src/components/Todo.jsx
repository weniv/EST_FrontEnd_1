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
    fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoText }),
    })
      .then((res) => {
        return res.json();
      })
      .then((newTodo) => {
        setTodoList((prevTodoList) => {
          // prevTodoList.push()
          // 리액트에서는 props/state가 바뀌면 렌더링을한다..
          // 즉 이렇게하면 prevTodoList가 바뀐게 아니다.
          // prevTodoList는 그대로고 안에있는 값만 바뀐것.
          // 즉 prevTodoList는 그대로라서 반영이 안됨.
          return [...prevTodoList, newTodo];
        });
      });

    // setTodoList((prevTodoList) => {
    //   const newTodo = {
    //     id: +todoList[todoList.length - 1].id + 1,
    //     todo: todoText,
    //   };
    //   const newTodoList = [...prevTodoList, newTodo];
    //   if (newTodoList.length > 5) {
    //     newTodoList.shift();
    //   }
    //   return newTodoList;
    // });
  };

  const props = { todoList, handleInput, todoText, handleButton };
  return <TodoView {...props} />;
};

export default Todo;
