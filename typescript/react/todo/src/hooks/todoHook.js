import { useEffect, useState } from "react";

function useTodoData() {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setIsLoading(false);
        setTodoList(todoData);
      });
  }, []);
  const postTodo = (todoText) => {
    setIsLoading(true)
    const newTodo = {
      todo: todoText,
    };

    fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        return res.json();
      })
      .then((newTodo) => {
        setIsLoading(false)
        setTodoList((prevTodoList) => {
          // prevTodoList.push()
          // 리액트에서는 props/state가 바뀌면 렌더링을한다..
          // 즉 이렇게하면 prevTodoList가 바뀐게 아니다.
          // prevTodoList는 그대로고 안에있는 값만 바뀐것.
          // 즉 prevTodoList는 그대로라서 반영이 안됨.
          return [...prevTodoList, newTodo];
        });
      });
  };
  return [todoList, postTodo, isLoading]
}

export default useTodoData