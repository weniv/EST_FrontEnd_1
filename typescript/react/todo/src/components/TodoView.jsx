import { useId } from "react";

const TodoView = ({ todoList, handleInput, todoText, handleButton }) => {
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
      <input type="text" value={todoText} onChange={handleInput} />
      <button type="button" onClick={handleButton}>
        투두추가
      </button>
    </div>
  );
};

export default TodoView;
