const todoDatas = [
    {
        id:1,
        todo:"아침먹기",
    },
    {
        id:2,
        todo:"점심먹기",
    },
]

const addTodoData = (todoText) =>{
    const newTodoId = todoDatas[todoDatas.length-1].id + 1
    const newTodo = {
        id:newTodoId,
        todo:todoText
    }
    todoDatas.push(newTodo);
    return todoDatas
}

const addTodoList = () =>{
    const $todoInput = document.querySelector("#todo-input");
    const todoText = $todoInput.value;
    $todoInput.value = "";
    const todoDatas = addTodoData(todoText);
    todoListRender(todoDatas);
}

const $todoInputButton = document.querySelector("#todo-button");
$todoInputButton.addEventListener("click",addTodoList);

// 데이터를 넣어주면 todoList를 만들어주는애
const todoListRender = (todoDatas) =>{
    const $todoContainer = document.querySelector("#todo-container");
    $todoContainer.innerHTML = "";
    todoDatas.forEach(todoData => {
        const $todoLi = document.createElement("li");
        const $todoP = document.createElement("p");
        $todoP.innerText = todoData.todo;
        $todoLi.append($todoP);
        $todoContainer.append($todoLi);
    });
}

todoListRender(todoDatas);


