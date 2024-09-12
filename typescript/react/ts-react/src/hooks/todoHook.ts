import { useEffect, useState } from "react";
export interface TodoItem {
  id:string,
  todo:string
}


// 튜플 배열같은애인데 길이랑, 각 위치의 타입이 정해져있어요.
// let arr:[number,string,number] = [1,'23',1]
function useTodoData():[TodoItem[],(todoText:string)=>void, boolean] {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const getTodo = async ()=>{
      const res = await fetch("http://localhost:3300/todos");
      const todoData:TodoItem[] = await res.json();
      return todoData
    }

    const initTodo = async () =>{
      const todoData = await getTodo()
      setIsLoading(false);
      setTodoList(todoData);
    }
    initTodo();
  }, []);

  const postTodo = async (newTodo:Partial<TodoItem>):Promise<TodoItem>=>{
    const res = await fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
    const addedTodo = await res.json();
    return addedTodo
  }

  const addTodo = async (todoText:string):Promise<void> => {
    setIsLoading(true)
    const newTodo = {
      todo: todoText,
    };
    const addedTodo = await postTodo(newTodo);
    setIsLoading(false)
    setTodoList((prevTodoList) => {
      return [...prevTodoList, addedTodo];
    });
  };
  return [todoList, addTodo, isLoading]
}

export default useTodoData